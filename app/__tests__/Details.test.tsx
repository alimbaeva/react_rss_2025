import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { type Mock, vi } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import Details from '../components/Details';
import { useDetails } from '~/customhooks/useDetails';
import '@testing-library/jest-dom';

vi.mock('~/customhooks/useDetails', () => ({
  useDetails: vi.fn(),
}));

const mockStore = configureStore({
  reducer: {
    search: (state = { idValue: '1' }) => state,
    selected: (state = { selectedIds: [] }) => state,
    breeds: (state = { detaileCards: [] }) => state,
  },
});

describe('Details Component', () => {
  it('renders loading state', () => {
    (useDetails as Mock).mockReturnValue({
      loading: true,
      chooseItem: false,
      handleCloseDetail: vi.fn(),
      handleChoose: vi.fn(),
      detaileCards: [],
      error: null,
      chooseColorTrue: 'green',
      chooseColorFalse: 'red',
    });

    render(
      <Provider store={mockStore}>
        <Details />
      </Provider>
    );

    expect(screen.getByTestId('load-item-1')).toBeInTheDocument();
  });

  it('renders details when data is available', () => {
    (useDetails as Mock).mockReturnValue({
      loading: false,
      chooseItem: false,
      handleCloseDetail: vi.fn(),
      handleChoose: vi.fn(),
      detaileCards: [
        {
          id: '1',
          url: 'http://example.com',
          breeds: [
            {
              name: 'Breed 1',
              origin: 'Origin 1',
              temperament: 'Calm',
              description: 'Description of Breed 1',
              weight: { imperial: '10', metric: '5' },
              wikipedia_url: 'http://wikipedia.com',
            },
          ],
        },
      ],
      error: null,
      chooseColorTrue: 'green',
      chooseColorFalse: 'red',
    });

    render(
      <Provider store={mockStore}>
        <Details />
      </Provider>
    );

    expect(screen.getByText('Ditaile Information:')).toBeInTheDocument();
    expect(screen.getByText('Breed 1')).toBeInTheDocument();
    expect(screen.getByText('Origin:')).toBeInTheDocument();
    expect(screen.getByText('Description of Breed 1')).toBeInTheDocument();
  });

  it('handles error state', () => {
    (useDetails as Mock).mockReturnValue({
      loading: false,
      chooseItem: false,
      handleCloseDetail: vi.fn(),
      handleChoose: vi.fn(),
      detaileCards: [],
      error: 'Some error',
      chooseColorTrue: 'green',
      chooseColorFalse: 'red',
    });

    render(
      <Provider store={mockStore}>
        <Details />
      </Provider>
    );

    expect(screen.getByText('Empty!')).toBeInTheDocument(); // Ensure that the error message is displayed
  });
});
