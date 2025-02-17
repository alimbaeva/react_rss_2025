import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import App from './pages/App';
import { store } from './store/store';
import { ThemeProvider } from './components/context/ThemeContext ';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <ErrorBoundary fallback={<p>Colling error ...</p>}>
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  </ErrorBoundary>
);
