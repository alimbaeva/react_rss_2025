import { useState, useEffect, FC, useCallback } from 'react';
import { CatsDataType } from '../types/types';
import CardItem from './CardItem';
import './styles/result.scss';
import IsLoading from './IsLoading';
import { APIKEY, URLAPI_SEARCH } from '../veriables';
import { useSearch } from './context/useSearch';
import EmptyData from './EmptyData';

const Result: FC = () => {
  const { limit, idValue } = useSearch();
  const [data, setData] = useState<CatsDataType[]>(
    localStorage.getItem('data')
      ? JSON.parse(localStorage.getItem('data') as string)
      : []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getCatsData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${URLAPI_SEARCH}limit=${limit}&breed_ids=${idValue}&api_key=${APIKEY}`
      );

      if (!response.ok) {
        throw new Error(
          `Ошибка ${response.status}: ${response.statusText}. Не удалось загрузить данные.`
        );
      }

      const data: CatsDataType[] = await response.json();

      setData(data);
      localStorage.setItem('data', JSON.stringify(data));
      setIsLoading(false);
    } catch (err) {
      setError(`${err}`);
      setIsLoading(false);
    }
  }, [idValue, limit]);

  useEffect(() => {
    if (idValue) getCatsData();
    if (!idValue) setData([]);
  }, [idValue, getCatsData]);

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
