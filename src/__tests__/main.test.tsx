import { describe, it, vi, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../components/ErrorBoundary';
import App from '../pages/App';

vi.mock('../pages/App', () => ({
  default: vi.fn(() => <div>App Loaded</div>),
}));

describe('main.tsx', () => {
  let root: HTMLElement | null;

  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    root = document.getElementById('root');
  });

  it('должен рендерить приложение внутри ErrorBoundary и StrictMode', () => {
    if (!root) throw new Error('Root element not found');

    render(
      <ErrorBoundary fallback={<p>Colling error ...</p>}>
        <App />
      </ErrorBoundary>,
      { container: root }
    );

    expect(screen.getByText('App Loaded')).toBeInTheDocument();
  });

  it('должен показать fallback при ошибке в ErrorBoundary', () => {
    const ErrorComponent = () => {
      throw new Error('Test Error');
    };

    if (!root) throw new Error('Root element not found');

    render(
      <ErrorBoundary fallback={<p>Colling error ...</p>}>
        <ErrorComponent />
      </ErrorBoundary>,
      { container: root }
    );

    expect(screen.getByText('Colling error ...')).toBeInTheDocument();
  });

  it('должен выбросить ошибку, если root отсутствует', () => {
    document.body.innerHTML = ''; // Удаляем root
    root = document.getElementById('root');

    expect(() => {
      if (!root) {
        throw new Error('Root element not found');
      }
    }).toThrow('Root element not found');
  });
});
