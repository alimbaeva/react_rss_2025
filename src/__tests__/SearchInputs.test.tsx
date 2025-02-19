import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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
      search: { searchValue: '', searchValueKey: '' },
      breeds: { breeds },
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

  it('should update searchValue when typing in the first input', () => {
    vi.mocked(useSelector).mockReturnValue({
      search: { searchValue: '', searchValueKey: '' },
      breeds: { breeds: [] },
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchInputs />
        </ThemeProvider>
      </Provider>
    );

    const input = screen.getAllByPlaceholderText('Введите текст для поиска')[0];

    fireEvent.change(input, { target: { value: 'test' } });

    expect(input).toHaveValue('test');
  });

  it('should update searchValueKey when typing in the second input', () => {
    vi.mocked(useSelector).mockReturnValue({
      search: { searchValue: '', searchValueKey: '' },
      breeds: { breeds: [] },
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchInputs />
        </ThemeProvider>
      </Provider>
    );

    const input = screen.getAllByPlaceholderText('Введите текст для поиска')[1];

    fireEvent.change(input, { target: { value: 'beagle' } });

    expect(input).toHaveValue('beagle');
  });

  it('should not display any breeds when both inputs are cleared', async () => {
    vi.mocked(useSelector).mockReturnValue({
      search: { searchValue: '', searchValueKey: '' },
      breeds: { breeds: [] },
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchInputs />
        </ThemeProvider>
      </Provider>
    );

    const firstInput = screen.getByTestId('valueKey');
    const secondInput = screen.getByTestId('seaValue');

    fireEvent.change(firstInput, { target: { value: 'lab' } });
    fireEvent.change(secondInput, { target: { value: 'retriever' } });

    await waitFor(() => {
      const breedElements = screen.queryAllByText(/lab/i);
      expect(breedElements).toHaveLength(0);
    });

    fireEvent.change(firstInput, { target: { value: '' } });
    fireEvent.change(secondInput, { target: { value: '' } });

    await waitFor(() => {
      const breedElements = screen.queryAllByText(/lab/i);
      expect(breedElements).toHaveLength(0);
    });
  });

  it('should display breeds when search value is entered', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchInputs />
        </ThemeProvider>
      </Provider>
    );

    const firstInput = screen.getByTestId('valueKey');
    const secondInput = screen.getByTestId('seaValue');

    fireEvent.change(firstInput, { target: { value: 'bulldog' } });
    fireEvent.change(secondInput, { target: { value: 'english' } });

    const input = screen.getByDisplayValue('english');
    expect(input).toBeInTheDocument();
  });

  it('should not display any results when inputs are cleared', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <SearchInputs />
        </ThemeProvider>
      </Provider>
    );

    const firstInput = screen.getByTestId('valueKey');
    const secondInput = screen.getByTestId('seaValue');

    fireEvent.change(firstInput, { target: { value: 'bulldog' } });
    fireEvent.change(secondInput, { target: { value: 'english' } });

    await waitFor(() => {
      const input = screen.getByDisplayValue('english');
      expect(input).toBeInTheDocument();
    });

    fireEvent.change(firstInput, { target: { value: '' } });
    fireEvent.change(secondInput, { target: { value: '' } });

    await waitFor(() => {
      expect(screen.queryByText(/bulldog/i)).not.toBeInTheDocument();
    });
  });
});
