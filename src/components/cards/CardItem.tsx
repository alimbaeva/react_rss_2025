import { FC, MouseEvent } from 'react';
import { CatBreed } from '../../types/types';
import '../styles/cardItem.scss';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setIdValue } from '../../store/slices/searchSlice';

interface CardItemProps {
  data: CatBreed;
}

const CardItem: FC<CardItemProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { idValue } = useSelector((state: RootState) => state.search);

  const handleCard = (event: MouseEvent<HTMLDivElement>) => {
    dispatch(setIdValue(event.currentTarget.id));
  };

  return (
    <div
      id={data.id}
      onClick={handleCard}
      className={idValue === data.id ? 'activ card' : 'card'}
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
      <div data-element="element" className="fill"></div>
    </div>
  );
};

export default CardItem;
