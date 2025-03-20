import InputField from '../inputs/InputFeald';
import '../../styles/header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ChangeEvent, memo, useCallback, useMemo } from 'react';
import { setFilter, setSearch, setSort } from '../../store/slices/searchSlice';
import { sortLabel } from '../../customData/data';

const Header = () => {
  const dispatch = useDispatch();
  const { region, filter, sort, search } = useSelector(
    (state: RootState) => state.searchSlice
  );

  const memRegion = useMemo(() => region, [region]);
  const memSortLabel = useMemo(() => sortLabel, []);

  const handleSelectChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setFilter(event.target.value));
    },
    [dispatch]
  );

  const handleSortChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSort(event.target.value));
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearch(event.target.value));
    },
    [dispatch]
  );

  return (
    <header>
      <div className="filter-wrapper container">
        <InputField
          forInput={'search'}
          label={'Search countries by name:'}
          type={'text'}
          value={search}
          handleChange={handleChange}
        />
        <InputField
          forInput={'filter'}
          label={'Filter by region:'}
          type={'text'}
          options={memRegion}
          value={filter}
          handleSelectChange={handleSelectChange}
        />
        <InputField
          forInput={'sort'}
          label={'Sort countries by population or name:'}
          type={'text'}
          value={sort}
          options={memSortLabel}
          handleSelectChange={handleSortChange}
        />
      </div>
    </header>
  );
};

export default memo(Header);
