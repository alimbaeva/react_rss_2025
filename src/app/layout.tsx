import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
// import { Provider } from 'react-redux';
import '@/styles/globals.scss';
// import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary';
// import { store } from '@/store/store';
// import { ThemeProvider } from '@/components/context/ThemeContext ';
// import MainContent from '@/components/MainContent';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: 'My Next ssr',
  description: 'Описание вашего приложения',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className="bg-white text-black">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
