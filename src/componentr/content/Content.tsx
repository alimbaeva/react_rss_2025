import { useEffect } from 'react';
import { useGetCountriesQuery } from '../../store/queriApi/api';
import { saveToLocalStorage } from '../customhooks/localActions';
import List from '../list/List';
import { useDispatch } from 'react-redux';
import { setData } from '../../store/slices/searchSlice';

const Content = () => {
  const dispatch = useDispatch();
  const { data: countries, error, isLoading } = useGetCountriesQuery(undefined);

  useEffect(() => {
    if (countries) {
      saveToLocalStorage('data', countries);
      dispatch(setData(countries));
    }
  }, [countries, dispatch]);

  if (isLoading) return <p>isLoading</p>;
  if (error) return <p>error</p>;

  return (
    <section>
      <ul className="wrapper-item">
        {countries?.length &&
          countries?.map((el, id) => <List key={`${id}`} data={el} />)}
      </ul>
    </section>
  );
};

export default Content;
