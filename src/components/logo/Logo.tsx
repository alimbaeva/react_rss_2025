import { FC } from 'react';
import '../styles/header.scss';
import ChooseIcone from '../icons/ChooseIcone';
import { headerIconColor } from '../../veriables';

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
