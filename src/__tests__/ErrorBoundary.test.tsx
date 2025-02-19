import { render, screen } from '@testing-library/react';
import { StrictMode } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import { vi } from 'vitest';

// Мокаем компонент App, чтобы избежать необходимости его тестировать
const MockComponent = () => {
  throw new Error('Test error'); // Исключительная ситуация
};

describe('ErrorBoundary', () => {
  it('renders fallback UI when an error occurs in a child component', () => {
    // Мокаем ошибку в компоненте
    vi.spyOn(console, 'error').mockImplementation(() => {}); // Чтобы не было шума в консоли

    render(
      <ErrorBoundary fallback={<p>Colling error ...</p>}>
        <StrictMode>
          <MockComponent />
        </StrictMode>
      </ErrorBoundary>
    );

    // Проверяем, что fallback отображается при ошибке
    expect(screen.getByText('Colling error ...')).toBeInTheDocument();
  });

  it('renders children normally when no error occurs', () => {
    // Рендерим компонент без ошибок
    const SafeComponent = () => <div>No Error</div>;

    render(
      <ErrorBoundary fallback={<p>Colling error ...</p>}>
        <StrictMode>
          <SafeComponent />
        </StrictMode>
      </ErrorBoundary>
    );

    // Проверяем, что компоненты рендерятся без ошибок
    expect(screen.getByText('No Error')).toBeInTheDocument();
  });
});
