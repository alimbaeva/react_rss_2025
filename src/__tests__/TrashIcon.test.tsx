import { render, screen } from '@testing-library/react';
import TrashIcon from '../components/icons/TrashIcon';

describe('TrashIcon', () => {
  it('should render the icon with default height and fill', () => {
    render(<TrashIcon fill="black" />);

    const icon = screen.getByTestId('trashIcon');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('fill', 'black');
    expect(icon).toHaveAttribute('height', '25px');
  });

  it('should apply custom height when provided', () => {
    render(<TrashIcon fill="black" height="50px" />);

    const icon = screen.getByTestId('trashIcon');

    expect(icon).toHaveAttribute('height', '50px');
  });

  it('should apply custom fill when provided', () => {
    render(<TrashIcon fill="red" />);

    const icon = screen.getByTestId('trashIcon');

    expect(icon).toHaveAttribute('fill', 'red');
  });
});
