import React, { useState } from 'react';
import SearchInputs from './searchInputs/SearchInputs';
import { ERRORLOADING } from '~/veriables';
import '~/styles/topControls.scss';
import { useGetBreedsQuery } from '~/store/queryApi/breedsApi';

const TopControls = () => {
  const { error } = useGetBreedsQuery(undefined);
  const [errorBtn, setErrorBtn] = useState<string | null>(null);
  if (errorBtn) throw new Error('Имитация ошибки при клике.');

  return (
    <div className="controls-wrapper" data-testid="top-control">
      <SearchInputs />
      <button
        onClick={() => setErrorBtn(ERRORLOADING)}
        type="button"
        className="error-btn"
        data-testid="error-button"
      >
        Error Button
      </button>
      {error && (
        <p className="error-message" data-testid="error-message">
          {errorBtn}
        </p>
      )}
    </div>
  );
};

export default TopControls;
