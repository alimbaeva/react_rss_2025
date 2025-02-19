import { render, screen } from '@testing-library/react';
import SunIcon from '../components/icons/SunIcon';

describe('SunIcon', () => {
  it('should render the icon with default height and fill', () => {
    render(<SunIcon fill="yellow" />);

    const icon = screen.getByTestId('sunIcon');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('fill', 'yellow');
    expect(icon).toHaveAttribute('height', '25px');
  });

  it('should apply custom height when provided', () => {
    render(<SunIcon fill="yellow" height="50px" />);

    const icon = screen.getByTestId('sunIcon');

    expect(icon).toHaveAttribute('height', '50px');
  });

  it('should apply custom fill when provided', () => {
    render(<SunIcon fill="orange" />);

    const icon = screen.getByTestId('sunIcon');

    expect(icon).toHaveAttribute('fill', 'orange');
  });
});
