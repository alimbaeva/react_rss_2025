'use client';

import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import '@styles/dropDownInfo.scss';

interface Props {
  setShowMoreInfo: (arg: boolean) => void;
}

const MoreInformation: FC<Props> = ({ setShowMoreInfo }) => {
  const { selectedIds, selectedData } = useSelector(
    (state: RootState) => state.selected
  );

  const handleClose = () => {
    setShowMoreInfo(false);
  };

  return (
    <ul className="wrapper-more-info">
      <button onClick={handleClose}>Close</button>
      {selectedIds.map((el, id) => (
        <li key={selectedData[el].id}>
          {id + 1}- Name: {selectedData[el].name}
        </li>
      ))}
    </ul>
  );
};

export default MoreInformation;
