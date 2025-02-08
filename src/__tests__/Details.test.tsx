import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import Details from '../components/Details';
import SearchContext from '../components/context/SearchContext';
import { mockDataCatsData, mockSearchContext } from './mockData';
import { fetchGetCatsData } from '../customhooks/useFetchCats';

vi.mock('../components/context/useSearch', () => ({
  useSearch: vi.fn().mockReturnValue({
    idValue: 'some-id',
    setIdValue: vi.fn(),
  }),
}));

beforeEach(() => {
  mockSearchContext.idValue = 'some-id';
  mockSearchContext.setIdValue = vi.fn();
});

test('должен рендерить компонент Details', () => {
  render(
    <SearchContext.Provider value={mockSearchContext}>
      <Details />
    </SearchContext.Provider>
  );
});

test('должен рендерить информацию о деталях с контекстом', async () => {
  render(
    <SearchContext.Provider value={mockSearchContext}>
      <Details />
    </SearchContext.Provider>
  );
  await waitFor(() => {
    expect(screen.getByTestId('load-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('load-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('load-item-3')).toBeInTheDocument();
  });
});

vi.mock('../customhooks/useFetchCats', () => ({
  fetchGetCatsData: vi.fn(),
}));

describe('Details', () => {
  beforeAll(() => {
    (fetchGetCatsData as jest.Mock).mockResolvedValue(mockDataCatsData);
  });

  it('should render the correct number of DetailsCards', async () => {
    render(<Details />);

    await waitFor(() => screen.getByText('Ditaile Information:'));

    const detailsCards = screen.getAllByTestId('details-card');
    expect(detailsCards).toHaveLength(mockDataCatsData.length);
  });
});

test('should call handleCloseDetail when the Close button is clicked', async () => {
  render(<Details />);

  const modal = screen.getByTestId('load-item-1');
  expect(modal).toBeInTheDocument();
});
