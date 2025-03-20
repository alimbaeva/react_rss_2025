import InputField from '../inputs/InputFeald';
import '../../styles/header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { ChangeEvent } from 'react';
import { setFilter, setSearch, setSort } from '../../store/slices/searchSlice';
import { sortLabel } from '../../customData/data';

const Header = () => {
  const dispatch = useDispatch();
  const { region, filter, sort } = useSelector(
    (state: RootState) => state.searchSlice
  );

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.value));
  };
  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(event.target.value));
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch(setSearch(event.target.value));
  };

  return (
    <header>
      <div className="filter-wrapper">
        <InputField
          forInput={'search'}
          label={'Search countries by name:'}
          type={'text'}
          handleChange={handleChange}
        />
        <InputField
          forInput={'filter'}
          label={'Filter by region:'}
          type={'text'}
          options={region}
          value={filter}
          handleSelectChange={handleSelectChange}
        />
        <InputField
          forInput={'sort'}
          label={'Sort countries by population or name:'}
          type={'text'}
          value={sort}
          options={sortLabel}
          handleSelectChange={handleSortChange}
        />
      </div>
    </header>
  );
};

export default Header;
