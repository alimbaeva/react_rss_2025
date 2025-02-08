// src/tests/Page404.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Page404 from '../pages/page404/Page404';

describe('Page404', () => {
  it('renders with correct text and link', () => {
    render(
      <Router>
        <Page404 />
      </Router>
    );

    const pageTitle = screen.getByRole('heading', {
      name: /this page does not exist/i,
    });
    expect(pageTitle).toBeInTheDocument();

    const mainPageLink = screen.getByRole('link', { name: /main page/i });
    expect(mainPageLink).toBeInTheDocument();
    expect(mainPageLink).toHaveAttribute('href', '/');
  });
});
