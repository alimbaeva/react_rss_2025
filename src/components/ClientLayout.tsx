'use client';
import React, { ReactNode } from 'react';
import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ThemeProvider } from '@/components/context/ThemeContext ';
import MainContent from '@/components/MainContent';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
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
