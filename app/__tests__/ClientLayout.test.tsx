import React from 'react';
import { render, screen } from '@testing-library/react';
import ClientLayout from '~/components/ClientLayout';
import { vi } from 'vitest';

vi.mock('~/components/MainContent', () => ({
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

test('renders ClientLayout and its children correctly', () => {
  const mockChild = <div data-testid="child-element">Child Content</div>;

  render(
    <ClientLayout>
      {mockChild}
    </ClientLayout>
  );

  expect(screen.getByTestId('child-element')).toBeInTheDocument();
  expect(screen.getByText('Child Content')).toBeInTheDocument();
});
