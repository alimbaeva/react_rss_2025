import { FC, useCallback, useEffect, useState } from 'react';
import { useSearch } from './context/useSearch';
import { fetchGetCatsData } from '../customhooks/useFetchCats';
import { CatsDataType } from '../types/types';
import DetailsCards from './cards/DetailsCards';
import './styles/details.scss';

const Details: FC = () => {
  const { idValue, setIdValue } = useSearch();
  const [detaileCards, setDetaileCards] = useState<CatsDataType[]>([]);

  const getData = useCallback(async () => {
    try {
      const res = await fetchGetCatsData(idValue);
      if (!res) return;
      setDetaileCards(res);
    } catch (err) {
      console.log(err);
    }
  }, [idValue]);

  const handleCloseDetail = () => {
    setIdValue('');
    localStorage.setItem('idValue', '');
  };

  useEffect(() => {
    if (idValue) getData();
  }, [idValue, getData]);

  if (!detaileCards.length) return;

  return (
    <div className="details-wraper">
      <div>
        <button onClick={handleCloseDetail} className="close-btn">
          Close
        </button>
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
