import { type MouseEvent } from 'react';
import CardItem from '../cards/CardItem';
import '~/styles/result.scss';
import IsLoading from '../IsLoading';
import Pagination from '../pagination/Pagination';
import { useResultData } from './useResultData';
import { useDispatch } from 'react-redux';
import { setIdValue } from '~/store/slices/searchSlice';
import type { CatBreed } from '~/types/types';
import EmptyData from '../EmptyData';

const Result = ({ catsSer }: { catsSer: CatBreed[] }) => {
  const dispatch = useDispatch();
  const { data, pages, isLoad, error, idValue, currentPage, limit } =
    useResultData();

  const handleMainResultBlock = (event: MouseEvent<HTMLDivElement>) => {
    const close = (event.target as HTMLElement).dataset.element;
    if (close !== 'element') dispatch(setIdValue(''));
  };

  if (isLoad && !idValue) return <IsLoading />;
  if (error) return <div className="error-message">{error}</div>;
  if (data.length === 0 && catsSer.length === 0) return <EmptyData />;

  return (
    <div
      id="result"
      data-testid="result-container"
      onClick={handleMainResultBlock}
    >
      <Pagination pages={data.length === 0 ? [1] : pages} />
      <div
        className={
          idValue ? 'cards-wrapper grid-in-part' : 'cards-wrapper grid-in-full'
        }
      >
        {data.length === 0 &&
          catsSer
            .slice(currentPage * limit, currentPage * limit + limit)
            .map((el) => <CardItem key={el.id} data={el} />)}
        {data.length !== 0 &&
          data
            .slice(currentPage * limit, currentPage * limit + limit)
            .map((el) => <CardItem key={el.id} data={el} />)}
      </div>
    </div>
  );
};

export default Result;
