import { render, screen, fireEvent } from '@testing-library/react';
import { store } from '../store/store';
import SearchInputs from '../components/SearchInputs';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from '../components/context/ThemeContext ';
import { vi } from 'vitest';

vi.mock('react-redux', async (importOriginal) => {
  const actual = (await importOriginal()) as {
    useDispatch: () => unknown;
    useSelector: typeof useSelector;
    Provider: typeof Provider;
  };

  return {
    ...actual,
    useDispatch: vi.fn(),
    useSelector: vi.fn(),
    Provider: actual.Provider,
  };
});

describe('SearchInputs Component', () => {
  it('should render input fields', () => {
    vi.mocked(useSelector).mockReturnValue({
      search: {
        searchValue: '',
        searchValueKey: '',
      },
      breeds: {
        breeds: [],
      },
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchInputs />
        </ThemeProvider>
      </Provider>
    );

    expect(
      screen.getAllByPlaceholderText('Введите текст для поиска')
    ).toHaveLength(2);
  });

  it('should render input fields with specific values', () => {
    vi.mocked(useSelector).mockReturnValue({
      search: {
        searchValue: 'Test value',
        searchValueKey: 'Test key',
      },
      breeds: {
        breeds: [],
      },
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchInputs />
        </ThemeProvider>
      </Provider>
    );

    const searchInputs = screen.getAllByPlaceholderText(
      'Введите текст для поиска'
    );
    expect(searchInputs).toHaveLength(2);

    expect(searchInputs[0]).toHaveValue('');
    expect(searchInputs[1]).toHaveValue('');
  });

  it('should display a list of filtered breeds when typing in the second input', async () => {
    const breeds = [
      { id: 1, name: 'Labrador' },
      { id: 2, name: 'Bulldog' },
      { id: 3, name: 'Beagle' },
    ];

    vi.mocked(useSelector).mockReturnValue({
      breeds,
      search: { searchValue: '', searchValueKey: '' },
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchInputs />
        </ThemeProvider>
      </Provider>
    );

    const suggestionInput = screen.getAllByPlaceholderText(
      'Введите текст для поиска'
    );

    fireEvent.change(suggestionInput[0], { target: { value: 'lab' } });
    screen.debug();
    const breedItems = await screen.findAllByText(/ /i);

    expect(breedItems).toHaveLength(1);
  });
});
