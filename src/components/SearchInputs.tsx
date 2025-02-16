import {
  ChangeEvent,
  MouseEvent,
  FC,
  useState,
  useEffect,
  FormEvent,
} from 'react';
import { Breed } from '../types/types';
import './styles/topControls.scss';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCleanSearch,
  setCurrentPage,
  setSearchValue,
  setSearchValueKey,
} from '../store/slices/searchSlice';

const SearchInputs: FC = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state: RootState) => state.breeds.breeds);
  const { searchValue, searchValueKey } = useSelector(
    (state: RootState) => state.search
  );
  const [inputOptions, setInputOptions] = useState<Breed[]>([]);
  const [showListBreeds, setShowListBreeds] = useState<boolean>(true);
  const [valueKey, setValueKey] = useState<string>(searchValueKey);
  const [seaValue, setSeaValue] = useState<string>(searchValue);
  const [breedItem, setBreedItem] = useState<string>(searchValue);

  const handleChangeKey = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim();
    setValueKey(value);
    setSeaValue('');
    setBreedItem('');
    setShowListBreeds(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim();
    setSeaValue(value);
    setValueKey('');
    setShowListBreeds(true);

    const filteredBreeds = breeds.filter((el) =>
      el.name.toLowerCase().includes(value)
    );

    if (filteredBreeds.length) {
      setInputOptions(filteredBreeds);
    } else {
      setInputOptions([]);
    }
  };

  const handleBreedItem = (event: MouseEvent<HTMLLIElement>) => {
    const eventName = event.currentTarget.textContent as string;
    setBreedItem(eventName);
    setSeaValue(eventName);
    setShowListBreeds(false);
  };

  const handleSubmit = (event: FormEvent<Element>) => {
    event?.preventDefault();

    if (!seaValue && !valueKey) {
      dispatch(setCleanSearch());
      return;
    }
    if (breedItem) dispatch(setSearchValue(breedItem));
    if (valueKey) dispatch(setSearchValueKey(valueKey));
    dispatch(setCurrentPage(0));
  };

  useEffect(() => {
    if (!seaValue) {
      setInputOptions(breeds);
      setShowListBreeds(false);
    }
  }, [breeds, seaValue]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs-wrapper">
        <div className="input-wrapper">
          <p>Поиск.</p>
          <input
            type="text"
            value={valueKey || ''}
            onChange={handleChangeKey}
            placeholder="Введите текст для поиска"
          />
        </div>
        <div className="input-wrapper">
          <p>Поиск с предложениями помогает быстро найти результат.</p>
          <input
            type="text"
            value={seaValue || ''}
            onChange={handleChange}
            placeholder="Введите текст для поиска"
          />
          {showListBreeds && (
            <>
              {inputOptions.length > 0 ? (
                <ul className="wrapper-breed">
                  {inputOptions.map((el) => (
                    <li
                      key={el.id}
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
      </div>
      <button data-testid="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchInputs;
