'use client';

import React from 'react';
import '@styles/header.scss';
import ChooseIcone from '../icons/ChooseIcone';
import { headerIconColor } from '../../veriables';

const Logo = () => {
  return (
    <div className="logo" data-testid="logo">
      <div>
        <h1 data-testid="logo-h1">CC</h1>
        <ChooseIcone fill={headerIconColor} data-testid="logo-chooseIcone" />
      </div>
      <h1 data-testid="logo-text">Cute Cats</h1>
    </div>
  );
};

export default Logo;
