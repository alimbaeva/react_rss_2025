import { FC, useCallback, useEffect, useState } from 'react';
import { fetchGetCatsData } from '../customhooks/useFetchCats';
import { CatsDataType } from '../types/types';
import DetailsCards from './cards/DetailsCards';
import './styles/details.scss';
import IsLoading from './IsLoading';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setIdValue } from '../store/slices/searchSlice';
import ChooseIcone from './icons/ChooseIcone';
import {
  addToSelected,
  removeFromSelected,
} from '../store/slices/selectedSlice';

const chooseColorTrue = 'rgb(74, 198, 11)';
const chooseColorFalse = '#f3f798';

const Details: FC = () => {
  const dispatch = useDispatch();
  const { idValue } = useSelector((state: RootState) => state.search);
  const selectedIds = useSelector(
    (state: RootState) => state.selected.selectedIds
  );

  const [chooseItem, setChooseItem] = useState(
    selectedIds.includes(idValue) ? true : false
  );
  const [detaileCards, setDetaileCards] = useState<CatsDataType[]>([]);
  const [isLoad, setIsLoad] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsLoad(true);
      const res = await fetchGetCatsData(idValue);
      if (!res) return;
      setDetaileCards(res);
      setTimeout(() => setIsLoad(false), 300);
    } catch (err) {
      console.log(err);
    }
  }, [idValue]);

  const handleCloseDetail = () => {
    dispatch(setIdValue(''));
  };

  const handleChoose = () => {
    const saveData = {
      id: idValue,
      description: detaileCards[0].breeds[0].description,
      name: detaileCards[0].breeds[0].name,
      origin: detaileCards[0].breeds[0].origin,
    };
    if (!chooseItem) {
      dispatch(addToSelected(saveData));
      setChooseItem(true);
    }
    if (chooseItem) {
      dispatch(removeFromSelected(idValue));
      setChooseItem(false);
    }
  };

  useEffect(() => {
    if (idValue) getData();
  }, [idValue, getData]);

  if (isLoad) return <IsLoading />;
  if (!detaileCards.length) return;

  return (
    <div className="details-wraper">
      <div className="button-wrapper">
        <button
          data-testid="details-btn"
          onClick={handleCloseDetail}
          className="close-btn"
        >
          Close
        </button>
        <div onClick={handleChoose} className="choose-item">
          <ChooseIcone fill={chooseItem ? chooseColorTrue : chooseColorFalse} />
          <div data-element="choose" className="fill"></div>
        </div>
      </div>
      <div className="info-block">
        <p>Ditaile Information:</p>
        <p>
          <span>Name:</span> {detaileCards[0].breeds[0].name}
        </p>
        <p>
          <span>Origin:</span> {detaileCards[0].breeds[0].origin}
        </p>
        <p>
          <span>Temperament:</span> {detaileCards[0].breeds[0].temperament}
        </p>
        <p>
          <span>Description:</span> {detaileCards[0].breeds[0].description}
        </p>
        <p className="weight-block">
          <span>Weight:</span>
          <span>{detaileCards[0].breeds[0].weight.imperial}</span>
          <span>Imperial:</span>
          <span>{detaileCards[0].breeds[0].weight.imperial}</span>
          <span>Metric:</span>
          <span>{detaileCards[0].breeds[0].weight.metric}</span>
        </p>
        <a
          href={detaileCards[0].breeds[0].wikipedia_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          More information on Wikipedia
        </a>
      </div>
      <div className="images-container">
        {detaileCards.map((el) => {
          return <DetailsCards key={el.id} url={el.url} />;
        })}
      </div>
    </div>
  );
};

export default Details;
