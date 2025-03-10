import { render, screen } from '@testing-library/react';
import Page404 from '../app/404/not-found';
import React from 'react';
import '@testing-library/jest-dom';

describe('Page404 component', () => {
  test('renders the correct title', () => {
    render(<Page404 />);

    const title = screen.getByText(/This page does not exist/i);
    expect(title).toBeInTheDocument();
  });

  test('renders a link to the main page', () => {
    render(<Page404 />);

    const link = screen.getByRole('link', { name: /Main page/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
  });
});
