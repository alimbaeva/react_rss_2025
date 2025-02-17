import { render, screen } from '@testing-library/react';
import Logo from '../components/logo/Logo';
import { vi } from 'vitest';

vi.mock('../components/icons/ChooseIcone', () => ({
  default: ({ fill }: { fill: string }) => (
    <div data-testid="logo-chooseIcone" style={{ color: fill }}>
      Mocked ChooseIcone
    </div>
  ),
}));

describe('Logo Component', () => {
  it('should render correctly', () => {
    render(<Logo />);

    const firstH1 = screen.getByTestId('logo-h1');
    const secondH1 = screen.getByTestId('logo-text');
    const icon = screen.getByTestId('logo-chooseIcone');

    expect(firstH1).toBeInTheDocument();
    expect(secondH1).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should display the correct text in the first h1', () => {
    render(<Logo />);

    const firstH1 = screen.getByTestId('logo-h1');
    expect(firstH1).toHaveTextContent('CC');
  });

  it('should display the correct text in the second h1', () => {
    render(<Logo />);

    const secondH1 = screen.getByTestId('logo-text');
    expect(secondH1).toHaveTextContent('Cute Cats');
  });

  it('should render ChooseIcone with the correct props', () => {
    const headerIconColor = '#e67a7a';

    render(<Logo />);

    const icon = screen.getByTestId('logo-chooseIcone');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle(`color: ${headerIconColor}`);
  });

  it('should have the correct class name for the logo container', () => {
    render(<Logo />);

    const logoContainer = screen.getByTestId('logo'); // Находим элемент по testId
    expect(logoContainer).toHaveClass('logo'); // Проверяем, что у него есть класс 'logo'
  });
});
