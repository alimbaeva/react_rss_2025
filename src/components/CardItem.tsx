import { FC } from 'react';
import { CatsDataType } from '../types/types';
import './styles/cardItem.scss';

interface CardItemProps {
  data: CatsDataType;
}

const CardItem: FC<CardItemProps> = ({ data }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={data.url} alt={data.breeds[0].name} />
      </div>
      <div className="info-wrapper">
        <p>
          <span>Name:</span> {data.breeds[0].name}
        </p>
        <p>
          <span>Origin:</span> {data.breeds[0].origin}
        </p>
        <p>
          <span>Temperament:</span> {data.breeds[0].temperament}
        </p>
        <p>
          <span>Weight:</span> {data.breeds[0].weight.imperial}
        </p>
        <p>
          <span>Description:</span> {data.breeds[0].description}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
