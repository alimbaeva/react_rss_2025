import React from 'react';
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
    expect(imageElement?.src).toContain(
      'http://localhost:3000/_next/image?url='
    );
    expect(imageElement?.src).toContain(encodeURIComponent(url));
  });
});
