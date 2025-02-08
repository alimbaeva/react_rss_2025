import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Results from '../components/results/Results';
import { SearchContextType } from '../components/context/SearchContext';
import { MemoryRouter } from 'react-router-dom';
import SearchContext from '../components/context/SearchContext';

const mockSearchContext: SearchContextType = {
  searchValue: '',
  limit: 10,
  idValue: '',
  breeds: [],
  cats: [],
  searchValueKey: '',
  currentPage: 1,
  setCurrentPage: vi.fn(),
  setSearchValueKey: vi.fn(),
  setCats: vi.fn(),
  setLimit: vi.fn(),
  setSearchValue: vi.fn(),
  setBreedsValue: vi.fn(),
  setIdValue: vi.fn(),
  saveToLocalStorage: vi.fn(),
};

test('должен рендерить Result и не рендерить Details, если idValue не задано', () => {
  render(
    <MemoryRouter>
      <SearchContext.Provider value={mockSearchContext}>
        <Results />
      </SearchContext.Provider>
    </MemoryRouter>
  );

  expect(screen.getByTestId('empty-Results')).toBeInTheDocument();

  expect(screen.getByTestId('empty-data-1')).toHaveTextContent(
    'Нет данных для отображения!'
  );
  expect(screen.getByTestId('empty-data-2')).toHaveTextContent(
    'Введите запрос в поле поиска.'
  );
  expect(screen.getByTestId('empty-data-3')).toHaveTextContent(
    'Выберите из выподающего списка.'
  );

  expect(screen.queryByText('Result')).not.toBeInTheDocument();
  expect(screen.queryByText('Details')).not.toBeInTheDocument();
});
