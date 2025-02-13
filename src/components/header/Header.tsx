import { FC } from 'react';
import ChooseIcone from '../icons/ChooseIcone';
import '../styles/header.scss';
import CatIcon from '../icons/CarIcon';
import MooneIcon from '../icons/MooneIcon';
import SunIcon from '../icons/SunIcon';

const headerIconColor = '#e67a7a';

const Header: FC = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <div>
            <h1>CC</h1>
            <ChooseIcone fill={headerIconColor} />
          </div>
          <h1>Cute Cats</h1>
        </div>
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
