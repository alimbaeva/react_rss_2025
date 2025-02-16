import { useState, FormEvent, FC } from 'react';
import { ERRORLOADING } from '../veriables';
import { useSearch } from './context/useSearch';
import SearchInputs from './SearchInputs';
import './styles/topControls.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useGetBreedsQuery } from '../store/queryApi/breedsApi';
import { setCleanSearch } from '../store/slices/searchSlice';

const TopControls: FC = () => {
  const dispatch = useDispatch();
  const { searchValue, searchValueKey } = useSelector(
    (state: RootState) => state.search
  );
  const { error } = useGetBreedsQuery(undefined);
  const { setCurrentPage } = useSearch();
  const [errorBtn, setErrorBtn] = useState<string | null>(null);

  if (errorBtn) throw new Error('Имитация ошибки при клике.');

  const handleSubmit = (event: FormEvent<Element>) => {
    event?.preventDefault();

    if (!searchValue && !searchValueKey) {
      dispatch(setCleanSearch());
      return;
    }

    setCurrentPage(0);
    localStorage.setItem('currentPage', `${0}`);
  };

  return (
    <div className="controls-wrapper">
      <form onSubmit={handleSubmit}>
        <SearchInputs />
        <button data-testid="search-button">Search</button>
      </form>
      <button
        onClick={() => setErrorBtn(ERRORLOADING)}
        type="button"
        className="error-btn"
        data-testid="error-button"
      >
        Error Button
      </button>
      {error && (
        <p className="error-message" data-testid="error-message">
          {errorBtn}
        </p>
      )}
    </div>
  );
};

export default TopControls;
