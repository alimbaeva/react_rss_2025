import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import '@/styles/globals.scss';
import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary';
import { store } from '@/store/store';
import { ThemeProvider } from '@/components/context/ThemeContext ';
import MainContent from '@/components/MainContent';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallback={<p>Colling error ...</p>}>
      <Provider store={store}>
        <ThemeProvider>
          <MainContent>
            <Component {...pageProps} />
          </MainContent>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
}
