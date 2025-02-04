import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App';
import ErrorBoundary from './components/ErrorBoundary';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

console.log(88);

createRoot(root).render(
  <ErrorBoundary fallback={<p>Colling error ...</p>}>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>
);
