import { render, screen } from '@testing-library/react';
import CallClComponent from '../components/CallClComponent';
import { vi } from 'vitest';
import { mockCatBreed } from './mockData';

vi.mock('../components/ClientComponents', () => {
  return {
    default: vi.fn(() => <div>Mocked ClientComponents</div>),
  };
});

describe('CallClComponent', () => {
  it('renders ClientComponents with provided cats', async () => {
    render(<CallClComponent cats={[mockCatBreed]} />);

    screen.debug();

    expect(
      await screen.findByText('Mocked ClientComponents')
    ).toBeInTheDocument();
  });
});
