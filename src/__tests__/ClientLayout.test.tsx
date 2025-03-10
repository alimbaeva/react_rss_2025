import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ClientLayout from '@/components/ClientLayout';
import React, { ReactNode } from 'react';

interface ClientLayoutProps {
  children: ReactNode;
}

vi.mock('@/components/MainContent', () => ({
  default: vi.fn(({ children }) => <div>{children}</div>),
}));
vi.mock('@/components/context/ThemeContext', () => ({
  ThemeProvider: ({ children }: { children: ClientLayoutProps }) => (
    <div>{children as ReactNode}</div>
  ),
}));

describe('ClientLayout', () => {
  it('renders the children wrapped with ErrorBoundary, Provider, ThemeProvider, and MainContent', () => {
    const mockChildren = <p>Test Children</p>;

    render(<ClientLayout>{mockChildren}</ClientLayout>);

    expect(screen.getByText('Test Children')).toBeInTheDocument();

    expect(screen.getByText('Test Children')).toBeInTheDocument();

    expect(screen.getByText('Test Children')).toBeInTheDocument();

    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });
});
