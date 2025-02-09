import { useState, useEffect, FormEvent, FC, useCallback } from 'react';
import { ERRORLOADING } from '../veriables';
import { useSearch } from './context/useSearch';
import { fetchCats } from '../customhooks/useFetchCats';
import SearchInputs from './SearchInputs';
import './styles/topControls.scss';

const TopControls: FC = () => {
  const {
    searchValue,
    breeds,
    idValue,
    searchValueKey,
    setCats,
    setSearchValue,
    setIdValue,
    saveToLocalStorage,
    setBreedsValue,
    setSearchValueKey,
    setCurrentPage,
  } = useSearch();

  const [searchValueState, setSearchValueState] = useState({
    searchValue,
    searchValueKey,
    idValue,
  });

  const [showListBreeds, setShowListBreeds] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  if (error) throw new Error('Имитация ошибки при клике.');

  const fetchBreeds = useCallback(async () => {
    try {
      const { data, breeds } = await fetchCats();
      setCats(data ? data : []);
      setBreedsValue(breeds ? breeds : []);
    } catch (error) {
      console.error(error);
      setError('Ошибка загрузки списка пород');
      setCats([]);
      setBreedsValue([]);
    }
  }, [setBreedsValue, setCats]);

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

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

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
        onClick={() => setError(ERRORLOADING)}
        type="button"
        className="error-btn"
        data-testid="error-button"
      >
        Error Button
      </button>
      {error && (
        <p className="error-message" data-testid="error-message">
          {error}
        </p>
      )}
    </div>
  );
};

export default TopControls;
