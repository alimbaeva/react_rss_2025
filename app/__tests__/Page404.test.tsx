import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Page404 from '~/routes/404/NotFound'
import '@testing-library/jest-dom'

describe('Page404 component', () => {
  test('renders the correct title', () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>,
    )

    const title = screen.getByText(/This page does not exist/i)
    expect(title).toBeInTheDocument()
  })

  test('renders a link to the main page', () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>,
    )

    const link = screen.getByRole('link', { name: /Main page/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})
