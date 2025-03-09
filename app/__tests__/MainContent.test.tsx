import { render, screen } from '@testing-library/react'
import { useTheme } from '~/components/context/useSearch'
import MainContent from '~/components/MainContent'
import { vi, type Mock } from 'vitest'

vi.mock('~/components/footer/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}))

vi.mock('~/components/header/Header', () => ({
  default: () => <div data-testid="header">Header</div>,
}))

vi.mock('~/components/context/useSearch', () => ({
  useTheme: vi.fn(),
}))

describe('MainContent', () => {
  test('renders with light theme and shows Header, Footer, and children', () => {
    ;(useTheme as Mock).mockReturnValue({ theme: 'light' })

    const mockChild = <div data-testid="child">Child Content</div>

    render(<MainContent>{mockChild}</MainContent>)

    expect(screen.getByRole('main')).toHaveClass('light')
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  test('renders with dark theme and shows Header, Footer, and children', () => {
    ;(useTheme as Mock).mockReturnValue({ theme: 'dark' })

    const mockChild = <div data-testid="child">Child Content</div>

    render(<MainContent>{mockChild}</MainContent>)
    expect(screen.getByRole('main')).toHaveClass('dark')
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})
