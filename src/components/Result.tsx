import { useState, useEffect, FC, useCallback } from 'react';
import { CatBreed } from '../types/types';
import CardItem from './cards/CardItem';
import './styles/result.scss';
import IsLoading from './IsLoading';
import { useSearch } from './context/useSearch';
import EmptyData from './EmptyData';
import Pagination from './pagination/Pagination';

const Result: FC = () => {
  const {
    searchValueKey,
    searchValue,
    cats,
    limit,
    currentPage,
    setCurrentPage,
  } = useSearch();
  const [data, setData] = useState<CatBreed[]>(
    localStorage.getItem('dataCurent')
      ? JSON.parse(localStorage.getItem('dataCurent') as string)
      : []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pages, setPages] = useState<number[]>([]);

  const getCatsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const keySearch = searchValueKey ? searchValueKey : searchValue;

    const filteredCat = cats.filter((el) =>
      el.name.toLowerCase().includes(keySearch.toLowerCase())
    );
    setData(filteredCat);
    setIsLoading(false);
    localStorage.setItem('dataCurent', JSON.stringify(filteredCat));
  }, [cats, searchValue, searchValueKey]);

  useEffect(() => {
    if (searchValue || searchValueKey) getCatsData();
    if (!searchValue && !searchValueKey) setData([]);
  }, [searchValue, searchValueKey, getCatsData]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const arr = Array.from(
      { length: Math.ceil(data.length / limit) },
      (_, i) => i
    );
    setPages(arr);
    if (arr.length === 1) {
      setCurrentPage(0);
      localStorage.setItem('currentPage', `${0}`);
    }
  }, [data, limit, pages.length, setCurrentPage]);

  if (isLoading) return <IsLoading />;
  if (error) return <div className="error-message">{error}</div>;
  if (data.length === 0) return <EmptyData />;

  return (
    <>
      <Pagination pages={pages} />
      <div className="cards-wrapper">
        {data
          .slice(currentPage * limit, currentPage * limit + limit)
          .map((el) => (
            <CardItem key={el.id} data={el} />
          ))}
      </div>
    </>
  );
};

export default Result;
