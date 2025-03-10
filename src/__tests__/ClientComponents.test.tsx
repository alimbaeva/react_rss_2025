import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ThemeProvider } from '../components/context/ThemeContext ';
import { waitFor } from '@testing-library/react';
import TopControls from '../components/TopControl';
import { mockCatBreed } from './mockData';

vi.mock('@/components/TopControl', () => ({
  default: () => <div data-testid="top-control">TopControl</div>,
}));

vi.mock('@/components/results/Results', () => ({
  default: () => (
    <div data-testid="results">
      {[mockCatBreed].map((cat) => (
        <div key={cat.id}>{cat.name}</div>
      ))}
    </div>
  ),
}));

test('renders TopControl and Results components', async () => {
  render(
    <Provider store={store}>
      <ThemeProvider>
        <TopControls />
        <div data-testid="results">
          {[mockCatBreed].map((cat) => (
            <div key={cat.id}>{cat.name}</div>
          ))}
        </div>
      </ThemeProvider>
    </Provider>
  );

  await waitFor(() => screen.getByTestId('top-control'));
  expect(screen.getByTestId('top-control')).toBeInTheDocument();

  await waitFor(() => screen.getByTestId('results'));
  expect(screen.getByTestId('results')).toBeInTheDocument();
  expect(screen.getByText('Abyssinian')).toBeInTheDocument();
});
