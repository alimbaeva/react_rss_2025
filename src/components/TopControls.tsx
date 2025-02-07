import {
  useState,
  useEffect,
  ChangeEvent,
  MouseEvent,
  FormEvent,
  FC,
  useCallback,
} from 'react';
import { Breed, CatBreed } from '../types/types';
import { ERRORLOADING, URLAPI } from '../veriables';
import './styles/topControls.scss';
import { useSearch } from './context/useSearch';

const TopControls: FC = () => {
  const {
    searchValue,
    setSearchValue,
    idValue,
    setIdValue,
    saveToLocalStorage,
  } = useSearch();
  const [searchValueState, setSearchValueState] = useState(searchValue);
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [inputOptions, setInputOptions] = useState<Breed[]>([]);
  const [showListBreeds, setShowListBreeds] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBreeds = useCallback(async () => {
    try {
      const response = await fetch(URLAPI);
      if (!response.ok)
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      const data: CatBreed[] = await response.json();
      const dataBread: Breed[] = data.map((el) => ({
        id: el.id,
        name: el.name,
      }));
      setBreeds(dataBread);
    } catch (error: unknown) {
      console.error(error);
      setError(ERRORLOADING);
    }
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchValueState(value);
    setShowListBreeds(true);

    const filteredBreeds = breeds.filter((el) =>
      el.name.toLowerCase().includes(value)
    );

    if (filteredBreeds.length) setInputOptions(filteredBreeds);

    if (!filteredBreeds.length) {
      setIdValue('');
      setInputOptions([]);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!idValue || !searchValue) {
      setIdValue('');
      setSearchValue('');
      saveToLocalStorage('', '');
    }
  };

  const handleBreedItem = (event: MouseEvent<HTMLLIElement>) => {
    const eventId = event.currentTarget.dataset.id as string;
    const eventName = event.currentTarget.textContent as string;
    setSearchValue(eventName);
    setSearchValueState(eventName);
    setIdValue(eventId);
    setShowListBreeds(false);
    saveToLocalStorage(eventName, eventId);
  };

  useEffect(() => {
    if (!searchValue.length) {
      setInputOptions(breeds);
      setShowListBreeds(false);
    }
  }, [breeds, searchValue]);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  return (
    <div className="controls-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            value={searchValueState}
            onChange={handleChange}
            placeholder="Введите текст для поиска"
          />
          {showListBreeds && (
            <>
              {inputOptions.length ? (
                <ul className="wrapper-breed">
                  {inputOptions.map((el) => (
                    <li
                      key={el.id}
                      data-id={el.id}
                      onClick={handleBreedItem}
                      className="breed-item"
                    >
                      {el.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No breeds found</p>
              )}
            </>
          )}
        </div>
        <button>Search</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default TopControls;
