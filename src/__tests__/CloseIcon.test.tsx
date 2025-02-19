import { render, screen } from '@testing-library/react';
import CloseIcon from '../components/icons/CloseIcon';

describe('CloseIcon', () => {
  it('should render the icon with default height and fill', () => {
    render(<CloseIcon fill="blue" />);

    const icon = screen.getByTestId('closeIcon');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('fill', 'blue');
    expect(icon).toHaveAttribute('height', '25px');
  });

  it('should apply custom height when provided', () => {
    render(<CloseIcon fill="blue" height="50px" />);

    const icon = screen.getByTestId('closeIcon');

    expect(icon).toHaveAttribute('height', '50px');
  });

  it('should apply custom fill when provided', () => {
    render(<CloseIcon fill="purple" />);

    const icon = screen.getByTestId('closeIcon');

    expect(icon).toHaveAttribute('fill', 'purple');
  });
});
