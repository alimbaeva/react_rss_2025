import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import TopControls from '../components/TopControl';
import { vi } from 'vitest';
import { useGetBreedsQuery } from '../store/queryApi/breedsApi';
import { ThemeProvider } from '../components/context/ThemeContext ';
import {
  QueryActionCreatorResult,
  QueryDefinition,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
import { CatBreed, Breed } from '../types/types';

vi.mock('../store/queryApi/breedsApi', async (importOriginal) => {
  const actual =
    (await importOriginal()) as typeof import('../store/queryApi/breedsApi');
  return {
    ...actual,
    useGetBreedsQuery: vi.fn(),
  };
});

describe('TopControls Component', () => {
  it('renders without crashing', () => {
    vi.mocked(useGetBreedsQuery).mockReturnValue({
      error: null,
      refetch: function (): QueryActionCreatorResult<
        QueryDefinition<
          undefined,
          BaseQueryFn<
            string | FetchArgs,
            unknown,
            FetchBaseQueryError,
            object,
            FetchBaseQueryMeta
          >,
          never,
          { data: CatBreed[]; breeds: Breed[] },
          'breedsApi'
        >
      > {
        throw new Error('Function not implemented.');
      },
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <TopControls />
        </ThemeProvider>
      </Provider>
    );

    expect(
      screen.getByRole('button', { name: /error button/i })
    ).toBeInTheDocument();
  });

  it('displays error message when error occurs', () => {
    vi.mocked(useGetBreedsQuery).mockReturnValue({
      data: undefined,
      error: { status: 500, data: 'Internal Server Error' },
      isLoading: false,
      isFetching: false,
      refetch: vi.fn(),
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <TopControls />
        </ThemeProvider>
      </Provider>
    );

    expect(screen.getByTestId('error-message')).toBeInTheDocument();
  });

  it('throws an error when error button is clicked', () => {
    vi.mocked(useGetBreedsQuery).mockReturnValue({
      data: undefined,
      error: null,
      isLoading: false,
      isFetching: false,
      refetch: vi.fn(() => {
        throw new Error('Имитация ошибки при клике.');
      }),
    });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <TopControls />
        </ThemeProvider>
      </Provider>
    );

    const errorButton = screen.getByTestId('error-button');

    expect(() => fireEvent.click(errorButton)).toThrow(
      'Имитация ошибки при клике.'
    );
  });
});
