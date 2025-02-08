import { useState, useEffect, FC, useCallback, MouseEvent } from 'react';
import { CatBreed } from '../types/types';
import CardItem from './cards/CardItem';
import './styles/result.scss';
import IsLoading from './IsLoading';
import { useSearch } from './context/useSearch';
import EmptyData from './EmptyData';
import Pagination from './pagination/Pagination';
import { useSearchParams } from 'react-router-dom';

const Result: FC = () => {
  const {
    searchValueKey,
    searchValue,
    cats,
    limit,
    currentPage,
    idValue,
    setCurrentPage,
    setIdValue,
  } = useSearch();
  const [data, setData] = useState<CatBreed[]>(
    localStorage.getItem('dataCurent')
      ? JSON.parse(localStorage.getItem('dataCurent') as string)
      : []
  );
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pages, setPages] = useState<number[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getCatsData = useCallback(async () => {
    setIsLoad(true);
    setError(null);

    const keySearch = searchValueKey ? searchValueKey : searchValue;

    const filteredCat = cats.filter((el) =>
      el.name.toLowerCase().includes(keySearch.toLowerCase())
    );
    setData(filteredCat);
    setTimeout(() => setIsLoad(false), 300);
    localStorage.setItem('dataCurent', JSON.stringify(filteredCat));
  }, [cats, searchValue, searchValueKey]);

  const handleMainResultBlock = (event: MouseEvent<HTMLDivElement>) => {
    const close = (event.target as HTMLElement).dataset.element;

    if (close !== 'element') setIdValue('');
    return;
  };

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

  useEffect(() => {
    const page = Number(searchParams.get('page'));
    if (data.length <= 0) {
      setSearchParams();
      return;
    }
    if (idValue) {
      setSearchParams({ page: `${currentPage + 1}`, details: `${idValue}` });
      return;
    }

    if (!page || currentPage !== page) {
      setSearchParams({ page: `${currentPage + 1}` });
      return;
    }
  }, [currentPage, searchParams, setSearchParams, idValue, data.length]);

  if (isLoad) return <IsLoading />;
  if (error) return <div className="error-message">{error}</div>;
  if (data.length === 0) return <EmptyData />;

  return (
    <div id="result" onClick={handleMainResultBlock}>
      <Pagination pages={pages} />
      <div
        className={
          idValue ? 'cards-wrapper grid-in-part' : 'cards-wrapper grid-in-full'
        }
      >
        {data
          .slice(currentPage * limit, currentPage * limit + limit)
          .map((el) => (
            <CardItem key={el.id} data={el} />
          ))}
      </div>
    </div>
  );
};

export default Result;
