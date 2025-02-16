import { ChangeEvent, MouseEvent, FC, useState, useEffect } from 'react';
import { Breed } from '../types/types';
import './styles/topControls.scss';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue, setSearchValueKey } from '../store/slices/searchSlice';

const SearchInputs: FC = () => {
  const dispatch = useDispatch();
  const breeds = useSelector((state: RootState) => state.breeds.breeds);
  const { searchValue, searchValueKey } = useSelector(
    (state: RootState) => state.search
  );
  const [inputOptions, setInputOptions] = useState<Breed[]>([]);
  const [showListBreeds, setShowListBreeds] = useState<boolean>(true);

  const handleChangeKey = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim();
    dispatch(setSearchValueKey(value));
    setShowListBreeds(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim();
    dispatch(setSearchValue(value));
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
    dispatch(setSearchValue(eventName));
    setShowListBreeds(false);
  };

  useEffect(() => {
    if (!searchValue) {
      setInputOptions(breeds);
      setShowListBreeds(false);
    }
  }, [breeds, searchValue]);

  return (
    <div className="inputs-wrapper">
      <div className="input-wrapper">
        <p>Поиск.</p>
        <input
          type="text"
          value={searchValueKey || ''}
          onChange={handleChangeKey}
          placeholder="Введите текст для поиска"
        />
      </div>
      <div className="input-wrapper">
        <p>Поиск с предложениями помогает быстро найти результат.</p>
        <input
          type="text"
          value={searchValue || ''}
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
  );
};

export default SearchInputs;
