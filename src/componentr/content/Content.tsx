import { useCallback, useEffect } from 'react';
import { useGetCountriesQuery } from '../../store/queriApi/api';
import { saveToLocalStorage } from '../customhooks/localActions';
import List from '../list/List';
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../store/slices/searchSlice';
import { RootState } from '../../store/store';

const Content = () => {
  const dispatch = useDispatch();
  const { data: countries, error, isLoading } = useGetCountriesQuery(undefined);
  const { filterData } = useSelector((state: RootState) => state.searchSlice);

  const saveAndDispatchData = useCallback(
    (data: typeof countries) => {
      if (data) {
        saveToLocalStorage('data', data);
        dispatch(setData(data));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (countries) {
      saveAndDispatchData(countries);
    }
  }, [countries, saveAndDispatchData]);

  if (isLoading) return <p>isLoading</p>;
  if (error) return <p>error</p>;

  return (
    <section>
      <ul className="wrapper-item">
        {!filterData.length &&
          countries?.length &&
          countries?.map((el, id) => <List key={`${id}`} data={el} />)}
        {filterData.length &&
          filterData?.map((el, id) => <List key={`${id}`} data={el} />)}
      </ul>
    </section>
  );
};

export default Content;
