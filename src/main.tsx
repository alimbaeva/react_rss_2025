import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import App from './pages/App';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <ErrorBoundary fallback={<p>Colling error ...</p>}>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>
);
