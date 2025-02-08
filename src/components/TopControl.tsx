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
      setCats(data);
      setBreedsValue(breeds);
    } catch (error) {
      console.error(error);
      setError('Ошибка загрузки списка пород');
      throw new Error(`${ERRORLOADING}`);
    }
  }, [setBreedsValue, setCats]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!searchValueState.searchValue && !searchValueState.searchValueKey) {
      setIdValue('');
      setSearchValue('');
      setSearchValueKey('');
      saveToLocalStorage({ searchValue: '', searchValueKey: '', idValue: '' });
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
        <button>Search</button>
      </form>
      <button
        onClick={() => setError(ERRORLOADING)}
        type="button"
        className="error-btn"
      >
        Error Button
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default TopControls;
