import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';

vi.mock('../components/logo/Logo', () => ({
  default: () => <div data-testid="mock-logo">Mock Logo</div>,
}));

describe('Footer Component', () => {
  it('renders the Footer and Logo', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    expect(screen.getByTestId('mock-logo')).toBeInTheDocument();
  });
});
