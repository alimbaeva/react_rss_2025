import { FC } from 'react';
import { CatBreed } from '../../types/types';
import '../styles/cardItem.scss';

interface CardItemProps {
  data: CatBreed;
}

const CardItem: FC<CardItemProps> = ({ data }) => {
  return (
    <div className="card">
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
    </div>
  );
};

export default CardItem;
