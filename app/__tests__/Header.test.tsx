import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from '../components/context/ThemeContext ';
import Header from '../components/header/Header';

describe('Header component', () => {
  it('renders correctly with the light theme', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const themeButton = screen.getByTestId('theme-toggle');
    expect(themeButton).toBeInTheDocument();
  });

  it('renders after mounting', async () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    await waitFor(() => {
      const themeButton = screen.getByTestId('theme-toggle');
      expect(themeButton).toBeInTheDocument();
    });
  });

  it('displays the moon icon when the theme is light', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const moonIcon = screen.getByTestId('moon-icon');
    expect(moonIcon).toBeInTheDocument();
  });

  it('displays the sun icon when the theme is dark', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const themeToggle = screen.getByTestId('theme-toggle');
    fireEvent.click(themeToggle);

    const sunIcon = screen.getByTestId('sun-icon');
    expect(sunIcon).toBeInTheDocument();
  });
});
