import { render, screen } from '@testing-library/react';
import MooneIcon from '../components/icons/MooneIcon';

describe('MooneIcon', () => {
  it('should render the icon with default height and fill', () => {
    render(<MooneIcon fill="blue" />);

    const icon = screen.getByTestId('mooneIcon');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('fill', 'blue');
    expect(icon).toHaveAttribute('height', '25px');
  });

  it('should apply custom height when provided', () => {
    render(<MooneIcon fill="blue" height="50px" />);

    const icon = screen.getByTestId('mooneIcon');

    expect(icon).toHaveAttribute('height', '50px');
  });

  it('should apply custom fill when provided', () => {
    render(<MooneIcon fill="purple" />);

    const icon = screen.getByTestId('mooneIcon');

    expect(icon).toHaveAttribute('fill', 'purple');
  });
});
