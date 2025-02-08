import { ChangeEvent, MouseEvent, FC, useState, useEffect } from 'react';
import { Breed } from '../types/types';
import './styles/topControls.scss';

interface SearchInputsProps {
  searchValueState: {
    searchValue: string;
    searchValueKey: string;
    idValue: string;
  };
  breeds: Breed[];
  showListBreeds: boolean;
  setSearchValueState: (state: {
    searchValue: string;
    searchValueKey: string;
    idValue: string;
  }) => void;
  setShowListBreeds: (value: boolean) => void;
}

const SearchInputs: FC<SearchInputsProps> = ({
  searchValueState,
  breeds,
  showListBreeds,
  setSearchValueState,
  setShowListBreeds,
}) => {
  const [inputOptions, setInputOptions] = useState<Breed[]>([]);

  const handleChangeKey = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchValueState({
      searchValueKey: value,
      searchValue: '',
      idValue: '',
    });
    setShowListBreeds(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase().trim();
    setSearchValueState({
      searchValue: value,
      searchValueKey: '',
      idValue: '',
    });
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
    setSearchValueState({
      searchValue: eventName,
      idValue: '',
      searchValueKey: '',
    });
    setShowListBreeds(false);
  };

  useEffect(() => {
    if (!searchValueState.searchValue) {
      setInputOptions(breeds);
      setShowListBreeds(false);
    }
  }, [breeds, searchValueState.searchValue, setShowListBreeds]);

  return (
    <div className="inputs-wrapper">
      <div className="input-wrapper">
        <p>Поиск.</p>
        <input
          type="text"
          value={searchValueState.searchValueKey || ''}
          onChange={handleChangeKey}
          placeholder="Введите текст для поиска"
        />
      </div>
      <div className="input-wrapper">
        <p>Поиск с предложениями помогает быстро найти результат.</p>
        <input
          type="text"
          value={searchValueState.searchValue || ''}
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
