import React, { type FC, type MouseEvent } from 'react';
import type { RootState } from '~/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '~/store/slices/searchSlice';

interface PaginationProps {
  pages: number[];
}

const Pagination: FC<PaginationProps> = ({ pages }) => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state: RootState) => state.search);

  const handlePageNum = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(setCurrentPage(Number(event.currentTarget.id)));
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
