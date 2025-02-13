import { FC } from 'react';
import '../styles/header.scss';
import ChooseIcone from '../icons/ChooseIcone';

const headerIconColor = '#e67a7a';

const Logo: FC = () => {
  return (
    <div className="logo">
      <div>
        <h1>CC</h1>
        <ChooseIcone fill={headerIconColor} />
      </div>
      <h1>Cute Cats</h1>
    </div>
  );
};

export default Logo;
