import { ReactElement } from 'react';
import { useTheme } from './context/useSearch';
import Footer from './footer/Footer';
import Header from './header/Header';
import '@styles/globals.scss';

const MainContent = ({ children }: { children: ReactElement }) => {
  const { theme } = useTheme();

  return (
    <main className={theme === 'light' ? 'light' : 'dark'}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainContent;
