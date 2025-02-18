import { render, screen } from '@testing-library/react';
import DownloadIcon from '../components/icons/DownloadIcon';

describe('DownloadIcon', () => {
  it('should render the icon with default height and fill', () => {
    render(<DownloadIcon fill="blue" />);

    const icon = screen.getByTestId('downloadIcon');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('fill', 'blue');
    expect(icon).toHaveAttribute('height', '25px');
  });

  it('should apply custom height when provided', () => {
    render(<DownloadIcon fill="blue" height="50px" />);

    const icon = screen.getByTestId('downloadIcon');

    expect(icon).toHaveAttribute('height', '50px');
  });

  it('should apply custom fill when provided', () => {
    render(<DownloadIcon fill="purple" />);

    const icon = screen.getByTestId('downloadIcon');

    expect(icon).toHaveAttribute('fill', 'purple');
  });
});
