import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Home from '../pages/Home';

vi.mock('../components/TopControls', () => ({
  default: vi.fn(() => <div>TopControls</div>),
}));

vi.mock('../components/results/Results', () => ({
  default: vi.fn(() => <div>Results</div>),
}));

describe('Home component', () => {
  it('должен рендерить TopControls и Results внутри SearchProvider', () => {
    render(<Home />);

    expect(screen.getByText('TopControls')).toBeInTheDocument();
    expect(screen.getByText('Results')).toBeInTheDocument();
  });

  it('должен рендерить main с классом "main-page"', () => {
    render(<Home />);

    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('main-page');
  });
});
