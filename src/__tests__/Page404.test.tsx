import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Page404 from '../pages/page404/Page404';

describe('Page404 Component', () => {
  it('renders the correct title and link', () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    );

    expect(screen.getByText(/this page does not exist/i)).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /main page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
