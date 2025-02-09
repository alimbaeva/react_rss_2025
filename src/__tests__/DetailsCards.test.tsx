import { render, screen } from '@testing-library/react';
import DetailsCards from '../components/cards/DetailsCards';

describe('DetailsCards component', () => {
  it('renders an image with the correct URL', () => {
    const testUrl = 'https://example.com/cat.jpg';

    render(<DetailsCards url={testUrl} />);

    const imageElement = screen.getByAltText('cat image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', testUrl);
  });
});
