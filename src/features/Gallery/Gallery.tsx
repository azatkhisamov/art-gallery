import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { memo, useEffect, useState } from 'react';
import classNames from 'classnames';
import { AppDispatch, RootState } from '../../store/store';
import { fetchTotalCountPaintings } from '../../store/paintingSlice';
import { useGetPaintingsQuery } from '../../store/apiSlice';
import Card from '../../components/Card/Card';
import styles from './Gallery.module.scss';
import Pagination from '../../components/Pagination/Pagination';
import SkeletonGallery from '../../components/Skeleton/Skeleton';
import NotFound from '../../components/NotFound/NotFound';

type Props = {
  debouncedSearch: string;
  changeSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Gallery = memo(function Gallery({
  debouncedSearch,
  changeSearch,
}: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const query = searchParams.get('query') || '';
  const [currentPage, setCurrentPage] = useState<string>(page);
  const dispatch = useDispatch<AppDispatch>();
  const totalCount =
    useSelector((state: RootState) => state.paintings.totalCount) || 0;
  const {
    data: paintings,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetPaintingsQuery({
    page,
    q: query,
  });

  const handlePageChange = (p: string) => {
    setCurrentPage(p);
  };

  const resetFilter = () => {
    changeSearch('');
    setCurrentPage('1');
  };

  useEffect(() => {
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
      }
      return params;
    });
  }, [debouncedSearch, currentPage, setSearchParams, dispatch]);

  useEffect(() => {
    dispatch(fetchTotalCountPaintings(query));
  }, [query, dispatch]);

  return (
    <>
      {isLoading && <SkeletonGallery />}
      {isSuccess && !paintings.length && <NotFound resetFilter={resetFilter} />}
      {isSuccess && (
        <>
          <section
            className={classNames(styles.main__paintings, {
              [styles.load]: isFetching || isLoading,
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
