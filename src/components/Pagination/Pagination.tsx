import classNames from 'classnames';
import { memo } from 'react';
import styles from './Pagination.module.scss';
import arrowLeftLight from '../../assets/arrow/arrow-left-light-theme.svg';
import arrowLeftDark from '../../assets/arrow/arrow-left-dark-theme.svg';
import arrowRightLight from '../../assets/arrow/arrow-right-light-theme.svg';
import arrowRightDark from '../../assets/arrow/arrow-right-dark-theme.svg';
import { useTheme } from '../../helpers/Context';

type PaginationProps = {
  currentPage: string;
  totalItems: number;
  itemsPerPage: number;
  handlePageChange: (page: string) => void;
};

const Pagination = memo(function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  handlePageChange,
}: PaginationProps) {
  const { theme } = useTheme();
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1 || +currentPage > totalPages) {
    return null;
  }

  const getPaginationItems = () => {
    const paginationItems: JSX.Element[] = [];

    if (+currentPage >= totalPages - 1) {
      paginationItems.push(
        <button
          key={1}
          onClick={() => handlePageChange('1')}
          className={+currentPage === 1 ? styles.active : ''}
        >
          1
        </button>
      );

      if (totalPages > 4) {
        paginationItems.push(<span key="ellipsis-start">...</span>);
      }

      for (let i = Math.max(totalPages - 2, 2); i <= totalPages; i += 1) {
        paginationItems.push(
          <button
            key={i}
            onClick={() => handlePageChange(String(i))}
            className={+currentPage === i ? styles.active : ''}
          >
            {i}
          </button>
        );
      }
    } else if (+currentPage <= 2) {
      for (let i = 1; i <= Math.min(3, totalPages); i += 1) {
        paginationItems.push(
          <button
            key={i}
            onClick={() => handlePageChange(String(i))}
            className={+currentPage === i ? styles.active : ''}
          >
            {i}
          </button>
        );
      }
      if (totalPages > 4) {
        paginationItems.push(<span key="ellipsis-end">...</span>);
      }
      if (totalPages !== 3) {
        paginationItems.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(String(totalPages))}
          >
            {totalPages}
          </button>
        );
      }
    } else {
      paginationItems.push(
        <button key={1} onClick={() => handlePageChange('1')}>
          1
        </button>
      );

      if (+currentPage > 3 && +currentPage - 1 > 1) {
        paginationItems.push(<span key="ellipsis-start">...</span>);
      }

      for (
        let i = Math.max(2, +currentPage - 1);
        i <= Math.min(totalPages - 1, +currentPage + 1);
        i += 1
      ) {
        paginationItems.push(
          <button
            key={i}
            onClick={() => handlePageChange(String(i))}
            className={+currentPage === i ? styles.active : ''}
          >
            {i}
          </button>
        );
      }

      if (totalPages - +currentPage > 2) {
        paginationItems.push(<span key="ellipsis-end">...</span>);
      }
      paginationItems.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(String(totalPages))}
        >
          {totalPages}
        </button>
      );
    }

    return paginationItems;
  };

  return (
    <div
      className={classNames(styles.pagination, {
        [styles.dark_theme]: theme === 'dark',
      })}
    >
      <button
        aria-label="Button Label"
        onClick={() => handlePageChange(String(+currentPage - 1))}
        disabled={+currentPage === 1}
        className={styles.arrow}
      >
        <img src={theme === 'light' ? arrowLeftLight : arrowLeftDark} alt="" />
      </button>
      {getPaginationItems()}
      <button
        aria-label="Button Label"
        onClick={() => handlePageChange(String(+currentPage + 1))}
        disabled={+currentPage === totalPages}
        className={styles.arrow}
      >
        <img
          src={theme === 'light' ? arrowRightLight : arrowRightDark}
          alt=""
        />
      </button>
    </div>
  );
});

export default Pagination;
