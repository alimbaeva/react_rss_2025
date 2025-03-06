import React, { FC, MouseEvent, useEffect, useState } from 'react';
import { CatBreed } from '@/types/types';
import '@styles/cardItem.scss';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setIdValue } from '@/store/slices/searchSlice';
import ChooseIcone from '../icons/ChooseIcone';
import {
  addToSelected,
  removeFromSelected,
} from '@/store/slices/selectedSlice';

interface CardItemProps {
  data: CatBreed;
}

const chooseColorTrue = 'rgb(74, 198, 11)';
const chooseColorFalse = '#f3f798';

const CardItem: FC<CardItemProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { idValue } = useSelector(
    (state: RootState) => state.search || { idValue: null }
  );
  const selectedIds = useSelector(
    (state: RootState) => state.selected?.selectedIds || []
  );
  const [chooseItem, setChooseItem] = useState(
    Array.isArray(selectedIds) && selectedIds.includes(data.id) ? true : false
  );

  const handleCard = (e: MouseEvent<HTMLDivElement>) => {
    const chooseId = (e.target as HTMLElement).getAttribute('data-element');
    if (chooseId === 'choose') {
      const saveData = {
        id: data.id,
        description: data.description,
        name: data.name,
        origin: data.origin,
      };
      if (!chooseItem) {
        dispatch(addToSelected(saveData));
        setChooseItem(true);
      }
      if (chooseItem) {
        dispatch(removeFromSelected(data.id));
        setChooseItem(false);
      }
    }
    dispatch(setIdValue(data.id));
  };

  useEffect(() => {
    if (Array.isArray(selectedIds) && selectedIds.includes(data.id))
      setChooseItem(true);
    if (Array.isArray(selectedIds) && !selectedIds.includes(data.id))
      setChooseItem(false);
  }, [data.id, selectedIds]);

  return (
    <div
      id={data.id}
      data-testid="card"
      onClick={handleCard}
      className={idValue && idValue === data.id ? 'activ card' : 'card'}
    >
      <div className="info-wrapper">
        <p>
          <span>Name:</span> {data.name}
        </p>
        <p>
          <span>Origin:</span> {data.origin}
        </p>
        <p>
          <span>Temperament:</span> {data.temperament}
        </p>
      </div>
      <div data-element="element" className="fill">
        <div data-element="element" className="choose-wrapper">
          <div data-testid="choose-button" className="choose-item">
            <ChooseIcone
              fill={chooseItem ? chooseColorTrue : chooseColorFalse}
            />
            <div data-element="choose" className="fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
