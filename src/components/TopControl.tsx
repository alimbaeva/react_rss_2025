import { useState, FormEvent, FC } from 'react';
import { ERRORLOADING } from '../veriables';
import { useSearch } from './context/useSearch';
import SearchInputs from './SearchInputs';
import './styles/topControls.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useGetBreedsQuery } from '../store/queryApi/breedsApi';

const TopControls: FC = () => {
  const breeds = useSelector((state: RootState) => state.breeds.breeds);
  const { error } = useGetBreedsQuery(undefined);
  const {
    searchValue,
    idValue,
    searchValueKey,
    setSearchValue,
    setIdValue,
    saveToLocalStorage,
    setSearchValueKey,
    setCurrentPage,
  } = useSearch();

  const [searchValueState, setSearchValueState] = useState({
    searchValue,
    searchValueKey,
    idValue,
  });

  const [showListBreeds, setShowListBreeds] = useState<boolean>(false);
  const [errorBtn, setErrorBtn] = useState<string | null>(null);

  if (errorBtn) throw new Error('Имитация ошибки при клике.');

  const handleSubmit = (event: FormEvent<Element>) => {
    event?.preventDefault();

    if (!searchValueState.searchValue && !searchValueState.searchValueKey) {
      setIdValue('');
      setSearchValue('');
      setSearchValueKey('');
      saveToLocalStorage({
        searchValue: '',
        searchValueKey: '',
        idValue: '',
      });
      return;
    }

    setSearchValue(searchValueState.searchValue);
    setSearchValueKey(searchValueState.searchValueKey);
    setIdValue('');
    saveToLocalStorage({
      searchValue: searchValueState.searchValue,
      searchValueKey: searchValueState.searchValueKey,
      idValue: '',
    });
    setCurrentPage(0);
    localStorage.setItem('currentPage', `${0}`);
  };

  return (
    <div className="controls-wrapper">
      <form onSubmit={handleSubmit}>
        <SearchInputs
          searchValueState={searchValueState}
          breeds={breeds}
          showListBreeds={showListBreeds}
          setSearchValueState={setSearchValueState}
          setShowListBreeds={setShowListBreeds}
        />
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
