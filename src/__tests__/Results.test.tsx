import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Results from '../components/results/Results';
import { MemoryRouter } from 'react-router-dom';
import SearchContext, {
  SearchContextType,
} from '../components/context/SearchContext';

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

test('должен рендерить Result и Details, если idValue задано', async () => {
  const updatedMockSearchContext = {
    ...mockSearchContext,
    idValue: '12345',
  };

  render(
    <MemoryRouter>
      <SearchContext.Provider value={updatedMockSearchContext}>
        <Results />
      </SearchContext.Provider>
    </MemoryRouter>
  );

  const emptyData1 = await screen.findByTestId('empty-data-1');
  expect(emptyData1).toBeInTheDocument();

  const emptyData2 = await screen.findByTestId('empty-data-2');
  expect(emptyData2).toBeInTheDocument();

  const emptyData3 = await screen.findByTestId('empty-data-3');
  expect(emptyData3).toBeInTheDocument();
});

test('должен обновлять отображение Result и Details при изменении idValue', async () => {
  const { rerender } = render(
    <MemoryRouter>
      <SearchContext.Provider value={mockSearchContext}>
        <Results />
      </SearchContext.Provider>
    </MemoryRouter>
  );

  // Проверяем, что компоненты не отображаются в начале
  expect(screen.queryByText('Result')).not.toBeInTheDocument();
  expect(screen.queryByText('Details')).not.toBeInTheDocument();

  // Обновляем idValue
  const updatedMockSearchContext = {
    ...mockSearchContext,
    idValue: '12345',
  };

  // Повторно рендерим компонент с новым значением idValue
  rerender(
    <MemoryRouter>
      <SearchContext.Provider value={updatedMockSearchContext}>
        <Results />
      </SearchContext.Provider>
    </MemoryRouter>
  );

  const emptyData1 = await screen.findByTestId('load-item-1');
  expect(emptyData1).toBeInTheDocument();

  const emptyData2 = await screen.findByTestId('load-item-2');
  expect(emptyData2).toBeInTheDocument();

  const emptyData3 = await screen.findByTestId('load-item-3');
  expect(emptyData3).toBeInTheDocument();
});
