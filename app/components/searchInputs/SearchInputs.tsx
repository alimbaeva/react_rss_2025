import React from 'react';
import '~/styles/topControls.scss';
import InputField from './InputField';
import BreedList from './BreedList';
import SearchButton from './SearchButton';
import { useTheme } from '../context/useSearch';
import { useSearchInputs } from '~/customhooks/useSearchInputs';
import { useNavigate } from 'react-router-dom';

const SearchInputs = () => {
  const { theme } = useTheme();
  const {
    inputOptions,
    showListBreeds,
    valueKey,
    seaValue,
    handleChangeKey,
    handleChange,
    handleBreedItem,
    handleSubmit,
  } = useSearchInputs();
  const navigate = useNavigate();

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/search?query=${valueKey}`);
    handleSubmit(event);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="inputs-wrapper">
        <div className="input-wrapper">
          <p>Поиск.</p>
          <InputField
            value={valueKey || ''}
            onChange={handleChangeKey}
            placeholder="Введите текст для поиска"
            testId="valueKey"
          />
        </div>
        <div className="input-wrapper">
          <p>Поиск с предложениями помогает быстро найти результат.</p>
          <InputField
            value={seaValue || ''}
            onChange={handleChange}
            placeholder="Введите текст для поиска"
            testId="seaValue"
          />
          {showListBreeds && (
            <BreedList
              inputOptions={inputOptions}
              handleBreedItem={handleBreedItem}
              theme={theme}
            />
          )}
        </div>
      </div>
      <SearchButton />
    </form>
  );
};

export default SearchInputs;
