import React from 'react';
import TopControls from './TopControls';
import type { CatBreed } from '~/types/types';
import Results from './results/Results';

const ClientComponents = ({ cats }: { cats: CatBreed[] }) => {
  return (
    <>
    <p>ClientComponents</p>
      <TopControls />
      <Results cats={cats} />
    </>
  );
};

export default ClientComponents;
