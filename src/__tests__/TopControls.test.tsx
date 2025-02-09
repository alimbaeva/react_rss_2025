import { render, screen, waitFor } from '@testing-library/react';
import { vi, Mock } from 'vitest';
import { useSearch } from '../components/context/useSearch';
import TopControls from '../components/TopControl';
import { fetchCats } from '../customhooks/useFetchCats';

global.fetch = vi.fn();

vi.mock('../components/context/useSearch', () => ({
  useSearch: vi.fn(),
}));

vi.mock('../customhooks/useFetchCats', () => ({
  fetchCats: vi.fn(),
}));

describe('TopControls Component', () => {
  const mockSetSearchValue = vi.fn();
  const mockSetCats = vi.fn();
  const mockSetBreedsValue = vi.fn();
  const mockSaveToLocalStorage = vi.fn();
  const mockSetCurrentPage = vi.fn();

  beforeEach(() => {
    (useSearch as Mock).mockReturnValue({
      searchValue: '',
      breeds: [],
      idValue: '',
      searchValueKey: '',
      setCats: mockSetCats,
      setSearchValue: mockSetSearchValue,
      setIdValue: vi.fn(),
      saveToLocalStorage: mockSaveToLocalStorage,
      setBreedsValue: mockSetBreedsValue,
      setSearchValueKey: vi.fn(),
      setCurrentPage: mockSetCurrentPage,
    });

    (fetchCats as Mock).mockResolvedValueOnce({
      data: [{ id: '1', name: 'Persian' }],
      breeds: [{ id: '1', name: 'Persian' }],
    });

    render(<TopControls />);
  });

  it('renders TopControls component', () => {
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
    expect(screen.getByTestId('error-button')).toBeInTheDocument();
  });

  it('fetches and sets cats and breeds on mount', async () => {
    await waitFor(() => {
      expect(fetchCats).toHaveBeenCalled();
      expect(mockSetCats).toHaveBeenCalledWith([{ id: '1', name: 'Persian' }]);
      expect(mockSetBreedsValue).toHaveBeenCalledWith([
        { id: '1', name: 'Persian' },
      ]);
    });
  });
});
