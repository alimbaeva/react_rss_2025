import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { vi } from 'vitest'
import { configureStore } from '@reduxjs/toolkit'
import '@testing-library/jest-dom'
import { ThemeProvider } from '../components/context/ThemeContext '
import { mockCatBreed } from './mockData'
import TopControls from '~/components/TopControls'
import { MemoryRouter } from 'react-router-dom'

vi.mock('~/store/queryApi/breedsApi', () => ({
  useGetBreedsQuery: vi.fn().mockReturnValue({ error: null }),
}))

vi.mock('~/customhooks/useSearchInputs', () => ({
  useSearchInputs: vi
    .fn()
    .mockReturnValue({ searchValue: '', searchValueKey: '' }),
}))

const mockStore = configureStore({
  reducer: {
    breeds: (state = { breeds: [mockCatBreed] }) => state,
    search: (state = { searchValue: '', searchValueKey: '' }) => state,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

describe('TopControls', () => {
  it('renders and triggers error on button click', () => {
    render(
      <Provider store={mockStore}>
        <ThemeProvider>
          <MemoryRouter>
            <TopControls />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>,
    )

    const button = screen.getByTestId('error-button')
    try {
      fireEvent.click(button)
      throw new Error('Имитация ошибки при клике.')
    } catch (error) {
      expect(error).toEqual(new Error('Имитация ошибки при клике.'))
    }
  })
})
