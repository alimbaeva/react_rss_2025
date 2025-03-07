import React from 'react';
import ClientComponents from './ClientComponents';
import type { CatBreed } from '~/types/types';

const CallClComponent = ({ cats }: { cats: CatBreed[] }) => {
  return <ClientComponents cats={cats} />;
};

export default CallClComponent;
