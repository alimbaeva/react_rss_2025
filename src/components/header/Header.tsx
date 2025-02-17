import { FC } from 'react';
import '../styles/header.scss';
import CatIcon from '../icons/CarIcon';
import MooneIcon from '../icons/MooneIcon';
import SunIcon from '../icons/SunIcon';
import Logo from '../logo/Logo';
import { headerIconColor } from '../../veriables';
import { useTheme } from '../context/useSearch';

const Header: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="header">
        <Logo />
        <div className="right-part">
          <div>
            <CatIcon fill={headerIconColor} />
          </div>
          <div onClick={toggleTheme} className="theam-wrapper">
            {theme === 'light' ? (
              <div className="theam-item nihgt">
                <MooneIcon fill={headerIconColor} />
              </div>
            ) : (
              <div className="theam-item day">
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
