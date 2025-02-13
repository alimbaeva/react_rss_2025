import { FC } from 'react';
import '../styles/header.scss';
import CatIcon from '../icons/CarIcon';
import MooneIcon from '../icons/MooneIcon';
import SunIcon from '../icons/SunIcon';
import Logo from '../logo/Logo';

const headerIconColor = '#e67a7a';

const Header: FC = () => {
  return (
    <header>
      <div className="header">
        <Logo />
        <div className="right-part">
          <div>
            <CatIcon fill={headerIconColor} />
          </div>
          <div className="theam-wrapper">
            <div className="theam-item nihgt">
              <MooneIcon fill={headerIconColor} />
            </div>
            <div className="theam-item day">
              <SunIcon fill={headerIconColor} height={'30px'} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
