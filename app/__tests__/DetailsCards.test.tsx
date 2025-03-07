import { render, screen } from '@testing-library/react';
import DetailsCards from '../components/cards/DetailsCards';
import { vi } from 'vitest';

vi.mock('next/image', () => ({
  __esModule: true,
  default: () => <img src={'https://example.com/cat-image.jpg'} data-testid="details-card" alt="" />,
}));

describe('DetailsCards component', () => {
  it('renders the image with the correct url', async () => {
    const url = 'https://example.com/cat-image.jpg';

    render(<DetailsCards url={url} />);

    const imageElement = screen.getByTestId('details-card')  as HTMLImageElement;
    
    expect(imageElement).toBeInTheDocument();
    
    const image = screen.getByTestId('details-img')  as HTMLImageElement;
    await screen.findByTestId('details-img');
    
    expect(image.src).toBe('https://example.com/cat-image.jpg');
  });
});
