import { useContext, useEffect, useState } from 'react';
import ThemeContext, { ThemeContextType } from './ThemeContext ';

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!context && isClient) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context || { theme: 'light', toggleTheme: () => {} };
};

