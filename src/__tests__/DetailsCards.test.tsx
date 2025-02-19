import { render, screen } from '@testing-library/react';
import DetailsCards from '../components/cards/DetailsCards';

describe('DetailsCards component', () => {
  it('renders the image with the correct url', () => {
    const url = 'https://example.com/cat-image.jpg';

    render(<DetailsCards url={url} />);

    const imageElement = screen
      .getByTestId('details-card')
      .querySelector('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', url);
  });
});
