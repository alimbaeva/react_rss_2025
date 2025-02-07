import { FC, MouseEvent } from 'react';
import { CatBreed } from '../../types/types';
import '../styles/cardItem.scss';
import { useSearch } from '../context/useSearch';

interface CardItemProps {
  data: CatBreed;
}

const CardItem: FC<CardItemProps> = ({ data }) => {
  const { idValue, setIdValue } = useSearch();

  const handleCard = (event: MouseEvent<HTMLDivElement>) => {
    setIdValue(event.currentTarget.id);
    localStorage.setItem('idValue', event.currentTarget.id);
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
    </div>
  );
};

export default CardItem;
