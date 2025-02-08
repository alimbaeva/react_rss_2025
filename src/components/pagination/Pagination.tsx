import { FC, MouseEvent } from 'react';
import { useSearch } from '../context/useSearch';

interface PaginationProps {
  pages: number[];
}

const Pagination: FC<PaginationProps> = ({ pages }) => {
  const { currentPage, setCurrentPage } = useSearch();

  const handlePageNum = (event: MouseEvent<HTMLDivElement>) => {
    setCurrentPage(Number(event.currentTarget.id));
    localStorage.setItem('currentPage', event.currentTarget.id);
  };

  return (
    <div className="page-wrapper">
      {pages.map((_, id) => {
        return (
          <div
            className={currentPage === id ? 'activ page-item' : 'page-item'}
            onClick={handlePageNum}
            key={`page-${id}`}
            id={`${id}`}
          >
            {id + 1}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
