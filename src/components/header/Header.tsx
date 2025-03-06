import React, { FC, useEffect, useState } from 'react';
import '@styles/header.scss';
import CatIcon from '../icons/CarIcon';
import MooneIcon from '../icons/MooneIcon';
import SunIcon from '../icons/SunIcon';
import Logo from '../logo/Logo';
import { headerIconColor } from '@/veriables';
import { useTheme } from '../context/useSearch';

const Header: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <header>
      <div className="header">
        <Logo />
        <div className="right-part">
          <div>
            <CatIcon fill={headerIconColor} />
          </div>
          <div
            data-testid="theme-toggle"
            onClick={toggleTheme}
            className="theam-wrapper"
          >
            {theme === 'light' ? (
              <div data-testid="moon-icon" className="theam-item nihgt">
                <MooneIcon fill={headerIconColor} />
              </div>
            ) : (
              <div data-testid="sun-icon" className="theam-item day">
                <SunIcon fill={headerIconColor} height={'30px'} />
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
