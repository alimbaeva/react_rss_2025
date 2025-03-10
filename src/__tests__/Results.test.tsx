import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Results from '../components/results/Results';
import { vi } from 'vitest';
import { ThemeProvider } from '@/components/context/ThemeContext ';
import { mockCatBreed } from './mockData';
import { configureStore } from '@reduxjs/toolkit';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => ({
    get: vi.fn(),
  }),
}));

const mockStore = configureStore({
  reducer: {
    breeds: (state = { cats: [mockCatBreed], breeds: [], detaileCards: [] }) =>
      state,
    search: (
      state = {
        idValue: null,
        pages: [1, 2, 3],
        searchValueKey: '',
        searchValue: '',
        currentPage: 0,
        limit: 0,
      }
    ) => state,
    selected: (state = { selectedIds: [], selectedData: {}, dell: '' }) =>
      state,
  },
});

describe('Results Component', () => {
  it('should render Results component without idValue', async () => {
    render(
      <Provider store={mockStore}>
        <ThemeProvider>
          <Results cats={[mockCatBreed]} />
        </ThemeProvider>
      </Provider>
    );

    const persianText = await screen.findByText('1');

    expect(persianText).toBeInTheDocument();
  });

  test('should render Results component with idValue', () => {
    render(
      <Provider store={mockStore}>
        <ThemeProvider>
          <Results cats={[mockCatBreed]} />
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});
