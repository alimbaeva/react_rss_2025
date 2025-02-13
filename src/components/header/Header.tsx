import { FC } from 'react';
import ChooseIcone from '../icons/ChooseIcone';
import '../styles/header.scss';

const Header: FC = () => {
  return (
    <header>
      <div className="header">
        <div className="logo">
          <div>
            <h1>CC</h1>
            <ChooseIcone fill={'#e67a7a'} />
          </div>
          <h1>Cute Cats</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
