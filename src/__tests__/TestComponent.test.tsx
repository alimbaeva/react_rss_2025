import { render, screen, fireEvent } from '@testing-library/react';
import { useContext } from 'react';
import ThemeContext, {
  ThemeProvider,
} from '../components/context/ThemeContext ';

const TestComponent = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('ThemeContext is undefined');
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <div>
      <p>{theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

describe('ThemeProvider', () => {
  it('should render with the light theme initially', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByText('light')).toBeInTheDocument();
  });

  it('should toggle theme from light to dark', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText('Toggle Theme');
    fireEvent.click(button);

    expect(screen.getByText('dark')).toBeInTheDocument();
  });

  it('should toggle theme from dark to light', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText('Toggle Theme');
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByText('light')).toBeInTheDocument();
  });
});
