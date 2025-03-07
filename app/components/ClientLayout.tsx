import { type FC, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import { store } from '~/store/store';
import { ThemeProvider } from './context/ThemeContext ';
import MainContent from './MainContent';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: FC<ClientLayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary fallback={<p>Colling error ...</p>}>
      <Provider store={store}>
        <ThemeProvider>
          <MainContent>{children}</MainContent>
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default ClientLayout;
