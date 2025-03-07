import { render, screen } from '@testing-library/react';
import Footer from '../components/footer/Footer';

describe('Footer', () => {
  it('renders the Logo component inside the footer', () => {
    render(<Footer />);

    const logoElement = screen.getByTestId('logo');
    expect(logoElement).toBeInTheDocument();
  });
});
