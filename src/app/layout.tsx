import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/styles/globals.scss';
import ClientLayout from '@/components/ClientLayout';

export const metadata: Metadata = {
  title: 'My Cats CC',
  description: '',
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
