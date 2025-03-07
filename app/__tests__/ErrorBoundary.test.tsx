import { StrictMode } from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';

const MockComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('renders fallback UI when an error occurs in a child component', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary fallback={<p>Colling error ...</p>}>
        <StrictMode>
          <MockComponent />
        </StrictMode>
      </ErrorBoundary>
    );

    expect(screen.getByText('Colling error ...')).toBeInTheDocument();
  });

  it('renders children normally when no error occurs', () => {
    const SafeComponent = () => <div>No Error</div>;

    render(
      <ErrorBoundary fallback={<p>Colling error ...</p>}>
        <StrictMode>
          <SafeComponent />
        </StrictMode>
      </ErrorBoundary>
    );

    expect(screen.getByText('No Error')).toBeInTheDocument();
  });
});
