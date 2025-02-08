import Result from '../components/Result';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { useSearch } from '../components/context/useSearch';
import { describe, it, vi, expect, beforeEach, Mock } from 'vitest';
import { mockDataCatsData } from './mockData';

vi.mock('../components/context/useSearch', () => ({
  useSearch: vi.fn(),
}));

describe('Result Component', () => {
  beforeEach(() => {
    // Мокаем возвращаемые значения из useSearch
    (useSearch as Mock).mockReturnValue({
      cats: mockDataCatsData, // Мокаем кошек
      searchValueKey: '',
      searchValue: '',
      limit: 10,
      currentPage: 1,
      idValue: 'some-id',
      setCurrentPage: vi.fn(),
      setIdValue: vi.fn(),
    });
  });

  it('should render the EmptyData component when no cats are found', async () => {
    (useSearch as Mock).mockReturnValue({
      cats: [],
      searchValueKey: '',
      searchValue: '',
      limit: 10,
      currentPage: 1,
      idValue: 'some-id',
      setCurrentPage: vi.fn(),
      setIdValue: vi.fn(),
    });

    render(
      <MemoryRouter>
        <Result />
      </MemoryRouter>
    );

    const emptyDataText = screen.getByText(/Нет данных для отображения!/i);
    expect(emptyDataText).toBeInTheDocument();
  });

  it('should render cats when search value is provided', async () => {
    const mockCats = [
      { id: '1', name: 'Persian' },
      { id: '2', name: 'Siamese' },
    ];

    (useSearch as Mock).mockReturnValue({
      searchValueKey: '',
      searchValue: 'Persian',
      cats: mockCats,
      limit: 10,
      currentPage: 1,
      idValue: 'some-id',
      setCurrentPage: vi.fn(),
      setIdValue: vi.fn(),
    });

    render(
      <MemoryRouter>
        <Result />
      </MemoryRouter>
    );
    await waitFor(() => screen.findByText(/1/i));

    const cardItem = screen.getByText(/1/i);
    expect(cardItem).toBeInTheDocument();
  });
});
