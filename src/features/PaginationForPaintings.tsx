import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination/Pagination';
import { RootState } from '../api/store';

export default function PaginationForPaintings() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const [currentPage, setCurrentPage] = useState<string>(page);
  const totalCount =
    useSelector((state: RootState) => state.paintings.totalCount) || 0;
  const handlePageChange = (p: string) => {
    setCurrentPage(p);
  };
  useEffect(() => {
    setSearchParams((params) => {
      if (currentPage !== '1') {
        params.set('page', currentPage);
      } else {
        params.delete('page');
      }
      return params;
    });
  }, [currentPage, setSearchParams]);
  return (
    <Pagination
      currentPage={currentPage}
      totalItems={totalCount}
      itemsPerPage={6}
      handlePageChange={handlePageChange}
    />
  );
}
