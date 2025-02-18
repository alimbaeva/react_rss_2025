import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { store } from '../store/store';
import Details from '../components/Details';
import { ThemeProvider } from '../components/context/ThemeContext ';
import { Provider } from 'react-redux';
import { vi, Mock } from 'vitest';
import { useGetCatsDataByBreedQuery } from '../store/queryApi/breedIdApi';

vi.mock('../store/queryApi/breedIdApi', async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, unknown>;

  return {
    ...actual,
    useGetCatsDataByBreedQuery: vi.fn(),
  };
});

describe('Details Component', () => {
  test('should loader details', async () => {
    const mockData = [
      {
        id: '1',
        url: 'http://example.com/cat.jpg',
        breeds: [
          {
            description: 'A friendly cat',
            name: 'Cat Name',
            origin: 'Origin Country',
            temperament: 'Friendly',
            weight: { imperial: '10 lbs', metric: '4.5 kg' },
            wikipedia_url: 'https://en.wikipedia.org/wiki/Cat_Name',
          },
        ],
      },
    ];

    (useGetCatsDataByBreedQuery as Mock).mockReturnValue({
      data: mockData,
      error: null,
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <Details />
        </ThemeProvider>
      </Provider>
    );

    const itemCount = screen.getByTestId('load-item-1');
    const itemCount2 = screen.getByTestId('load-item-2');
    const itemCount3 = screen.getByTestId('load-item-3');

    expect(itemCount).toBeInTheDocument();
    expect(itemCount2).toBeInTheDocument();
    expect(itemCount3).toBeInTheDocument();
  });

  test('should render correctly with cat details', async () => {
    const mockData = [
      {
        id: '1',
        url: 'http://example.com/cat.jpg',
        breeds: [
          {
            description: 'A friendly cat',
            name: 'Cat Name',
            origin: 'Origin Country',
            temperament: 'Friendly',
            weight: { imperial: '10 lbs', metric: '4.5 kg' },
            wikipedia_url: 'https://en.wikipedia.org/wiki/Cat_Name',
          },
        ],
      },
    ];

    (useGetCatsDataByBreedQuery as Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <Details />
        </ThemeProvider>
      </Provider>
    );

    const detailsBtn = await screen.findByTestId('details-btn');
    expect(detailsBtn).toBeInTheDocument();

    screen.debug();
    await waitFor(() => {
      expect(screen.getByTestId('logo-chooseIcone')).toBeInTheDocument();
    });

    screen.debug();
    await waitFor(() => {
      expect(screen.getByTestId('details-card')).toBeInTheDocument();
    });

    expect(screen.getByText(/origin:/i)).toBeInTheDocument();
    expect(screen.getByText(/temperament:/i)).toBeInTheDocument();
    expect(screen.getByText(/description:/i)).toBeInTheDocument();
  });

  it('should call dispatch with the correct action when choosing an item', async () => {
    const mockData = [
      {
        id: '1',
        url: 'http://example.com/cat.jpg',
        breeds: [
          {
            description: 'A friendly cat',
            name: 'Cat Name',
            origin: 'Origin Country',
            temperament: 'Friendly',
            weight: { imperial: '10 lbs', metric: '4.5 kg' },
            wikipedia_url: 'https://en.wikipedia.org/wiki/Cat_Name',
          },
        ],
      },
    ];

    (useGetCatsDataByBreedQuery as Mock).mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <Details />
        </ThemeProvider>
      </Provider>
    );

    const chooseButton = await screen.findByTestId('choose-item');
    expect(chooseButton).toBeInTheDocument();
    fireEvent.click(chooseButton);
  });
});
