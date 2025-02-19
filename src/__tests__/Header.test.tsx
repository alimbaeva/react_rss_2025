import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Header from '../components/header/Header';
import { useTheme } from '../components/context/useSearch';

vi.mock('../components/context/useSearch', () => ({
  useTheme: vi.fn(),
}));

describe('Header component', () => {
  it('toggles theme icon when clicked', () => {
    const toggleThemeMock = vi.fn();

    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      toggleTheme: toggleThemeMock,
    });

    const { rerender } = render(<Header />);

    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('sun-icon')).not.toBeInTheDocument();

    fireEvent.click(screen.getByTestId('theme-toggle'));

    (useTheme as jest.Mock).mockReturnValue({
      theme: 'dark',
      toggleTheme: toggleThemeMock,
    });

    rerender(<Header />);

    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('moon-icon')).not.toBeInTheDocument();
  });
});
