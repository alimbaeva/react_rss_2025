import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { vi } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import TopControls from '../components/TopControl';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../components/context/ThemeContext ';
import { mockCatBreed } from './mockData';

vi.mock('@/store/queryApi/breedsApi', () => ({
  useGetBreedsQuery: vi.fn().mockReturnValue({ error: null }),
}));

vi.mock('@/customhooks/useSearchInputs', () => ({
  useSearchInputs: vi
    .fn()
    .mockReturnValue({ searchValue: '', searchValueKey: '' }),
}));

const mockStore = configureStore({
  reducer: {
    breeds: (state = { breeds: [mockCatBreed] }) => state,
    search: (state = { searchValue: '', searchValueKey: '' }) => state,
  },
});

describe('TopControls', () => {
  it('renders and triggers error on button click', async () => {
    try {
      render(
        <Provider store={mockStore}>
          <ThemeProvider>
            <TopControls />
          </ThemeProvider>
        </Provider>
      );

      expect(screen.queryByTestId('error-message')).not.toBeInTheDocument();

      fireEvent.click(screen.getByTestId('error-button'));

      expect(screen.getByTestId('error-message')).toHaveTextContent(
        'Имитация ошибки при клике.'
      );
    } catch (error) {
      if (
        error instanceof Error &&
        error.message !== 'Имитация ошибки при клике.'
      ) {
        throw error;
      }
    }
  });
});
