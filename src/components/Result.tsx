import { useState, useEffect, FC, useCallback } from 'react';
import { CatBreed } from '../types/types';
import CardItem from './cards/CardItem';
import './styles/result.scss';
import IsLoading from './IsLoading';
import { useSearch } from './context/useSearch';
import EmptyData from './EmptyData';

const Result: FC = () => {
  const { searchValueKey, searchValue, cats } = useSearch();
  const [data, setData] = useState<CatBreed[]>(
    localStorage.getItem('dataCurent')
      ? JSON.parse(localStorage.getItem('dataCurent') as string)
      : []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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

    // await fetchGetCatsData(idValue)
    //   .then((res) => {
    //     if (res) setData(res);
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(`${err}`);
    //     setIsLoading(false);
    //   });
  }, [cats, searchValue, searchValueKey]);

  useEffect(() => {
    if (searchValue || searchValueKey) getCatsData();
    if (!searchValue && !searchValueKey) setData([]);
  }, [searchValue, searchValueKey, getCatsData]);

  if (isLoading) return <IsLoading />;
  if (error) return <div className="error-message">{error}</div>;
  if (data.length === 0) return <EmptyData />;

  return (
    <div className="cards-wrapper">
      {data.map((el) => (
        <CardItem key={el.id} data={el} />
      ))}
    </div>
  );
};

export default Result;
