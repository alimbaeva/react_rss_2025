import { useEffect } from 'react';
import { useGetCountriesQuery } from '../../store/queriApi/api';
import { saveToLocalStorage } from '../customhooks/localActions';

const Content = () => {
  const { data: countries, error, isLoading } = useGetCountriesQuery(undefined);

  useEffect(() => {
    if (countries) {
      saveToLocalStorage('data', countries);
    }
  }, [countries]);
  if (isLoading) return <p>isLoading</p>;
  if (error) return <p>error</p>;
  return <div>Content</div>;
};

export default Content;
