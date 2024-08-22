import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { AppDispatch, RootState } from '../../api/store';
import { useDebounce } from '../../hooks/useDebounce';
import { fetchTotalCountPaintings } from '../../api/paintingSlice';
import { useGetPaintingsQuery } from '../../api/apiSlice';
import Card from '../../components/Card/Card';
import styles from './Gallery.module.scss';
import Pagination from '../../components/Pagination/Pagination';

type Props = {
  search: string;
};
const Gallery = memo(function Gallery({ search }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const query = searchParams.get('query') || '';
  const [currentPage, setCurrentPage] = useState<string>(page);
  const totalCount =
    useSelector((state: RootState) => state.paintings.totalCount) || 0;
  const handlePageChange = (p: string) => {
    setCurrentPage(p);
  };
  const dispatch = useDispatch<AppDispatch>();
  const debouncedSearch = useDebounce(search, 500);
  useEffect(() => {
    // console.log('это эффект');
    setSearchParams((params) => {
      if ((params.get('page') || '1') !== currentPage) {
        if (currentPage !== '1') {
          params.set('page', currentPage);
        } else {
          params.delete('page');
        }
      }
      if ((params.get('query') || '') !== debouncedSearch) {
        if (debouncedSearch) {
          params.set('query', debouncedSearch);
          setCurrentPage('1');
        } else {
          params.delete('query');
          setCurrentPage('1');
        }
        dispatch(fetchTotalCountPaintings(params.get('query') || ''));
      }
      return params;
    });
  }, [debouncedSearch, currentPage, setSearchParams, dispatch]);
  const {
    data: paintings,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetPaintingsQuery({
    page,
    q: query,
  });
  console.log('это галерея');
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <>
          <section
            className={classNames(styles.main__paintings, {
              [styles.load]: isFetching,
            })}
          >
            {paintings.map((painting) => (
              <Card key={painting.id} painting={painting} />
            ))}
          </section>
          <Pagination
            currentPage={currentPage}
            totalItems={totalCount}
            itemsPerPage={6}
            handlePageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
});

export default Gallery;
