import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ThemeProvider } from '../components/context/ThemeContext '
import { waitFor } from '@testing-library/react'
import { mockCatBreed } from './mockData'
import TopControls from '~/components/TopControls'
import { BrowserRouter as Router } from 'react-router-dom'
import ClientComponents from '~/components/ClientComponents'
import type { Cats } from '~/types/types'

vi.mock('@/components/TopControl', () => ({
  default: () => <div data-testid="top-control">TopControl</div>,
}))

vi.mock('@/components/results/Results', () => ({
  default: () => (
    <div data-testid="results">
      {[mockCatBreed].map((cat) => (
        <div key={cat.id}>{cat.name}</div>
      ))}
    </div>
  ),
}))

test('renders TopControl and Results components', async () => {
  render(
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <TopControls />
          <div data-testid="results">
            {[mockCatBreed].map((cat) => (
              <div key={cat.id}>{cat.name}</div>
            ))}
          </div>
        </Router>
      </ThemeProvider>
    </Provider>,
  )

  await waitFor(() => screen.getByTestId('top-control'))
  expect(screen.getByTestId('top-control')).toBeInTheDocument()

  await waitFor(() => screen.getByTestId('results'))
  expect(screen.getByTestId('results')).toBeInTheDocument()
  expect(screen.getByText('Abyssinian')).toBeInTheDocument()
})

test('renders ClientComponents with TopControls and Results', async () => {
  vi.mock('@/components/TopControls', () => ({
    default: () => <div data-testid="top-control">TopControl</div>,
  }))

  vi.mock('@/components/results/Results', () => ({
    default: ({ cats }: { cats: Cats[] }) => (
      <div data-testid="result-container">
        {cats.map((cat) => (
          <div key={cat.id}>{cat.name}</div>
        ))}
      </div>
    ),
  }))

  render(
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <ClientComponents cats={[mockCatBreed]} />
        </Router>
      </ThemeProvider>
    </Provider>,
  )

  await waitFor(() => screen.getByTestId('top-control'))
  expect(screen.getByTestId('top-control')).toBeInTheDocument()

  await waitFor(() => screen.getByTestId('result-container'))

  const resultsElement = screen.getByTestId('result-container')
  expect(resultsElement).toBeInTheDocument()

  const catName = screen.getByText('Abyssinian')
  expect(catName).toBeInTheDocument()

  console.log(resultsElement)
})
