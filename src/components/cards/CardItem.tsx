import { FC, MouseEvent, useState } from 'react';
import { CatBreed } from '../../types/types';
import '../styles/cardItem.scss';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setIdValue } from '../../store/slices/searchSlice';
import ChooseIcone from '../icons/ChooseIcone';

interface CardItemProps {
  data: CatBreed;
}

const chooseColorTrue = 'rgb(74, 198, 11)';
const chooseColorFalse = '#f3f798';

const CardItem: FC<CardItemProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { idValue } = useSelector((state: RootState) => state.search);
  const [chooseItem, setChooseItem] = useState(false);

  const handleCard = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e);
    dispatch(setIdValue(data.id));
    setChooseItem(true);
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
      <div data-element="element" className="fill">
        <ChooseIcone fill={chooseItem ? chooseColorTrue : chooseColorFalse} />
      </div>
    </div>
  );
};

export default CardItem;
