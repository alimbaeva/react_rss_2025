import { FC } from 'react';
import DetailsCards from './cards/DetailsCards';
import '@styles/details.scss';
import IsLoading from './IsLoading';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import ChooseIcone from './icons/ChooseIcone';
import { useDetails } from '@/customhooks/useDetails';

const Details: FC = () => {
  const { idValue } = useSelector((state: RootState) => state.search);
  const {
    loading,
    chooseItem,
    handleCloseDetail,
    handleChoose,
    detaileCards,
    error,
    chooseColorTrue,
    chooseColorFalse,
  } = useDetails(idValue);

  if (loading) return <IsLoading />;
  if (!detaileCards) return null;
  if (error) return <p>Empty!</p>;

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
        <div
          onClick={handleChoose}
          className="choose-item"
          data-testid="choose-item"
        >
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
