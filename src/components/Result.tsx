import { FC, MouseEvent } from 'react';
import CardItem from './cards/CardItem';
import '@styles/result.scss';
import IsLoading from './IsLoading';
import EmptyData from './EmptyData';
import Pagination from './pagination/Pagination';
import { useResultData } from './useResultData';
import { useDispatch } from 'react-redux';
import { setIdValue } from '@/store/slices/searchSlice';

const Result: FC = () => {
  const dispatch = useDispatch();
  const { data, pages, isLoad, error, idValue, currentPage, limit } =
    useResultData();

  const handleMainResultBlock = (event: MouseEvent<HTMLDivElement>) => {
    const close = (event.target as HTMLElement).dataset.element;
    if (close !== 'element') dispatch(setIdValue(''));
  };

  if (isLoad) return <IsLoading />;
  if (error) return <div className="error-message">{error}</div>;
  if (data.length === 0) return <EmptyData />;

  return (
    <div
      id="result"
      data-testid="result-container"
      onClick={handleMainResultBlock}
    >
      <Pagination pages={pages} />
      <div
        className={
          idValue ? 'cards-wrapper grid-in-part' : 'cards-wrapper grid-in-full'
        }
      >
        {data
          .slice(currentPage * limit, currentPage * limit + limit)
          .map((el) => (
            <CardItem key={el.id} data={el} />
          ))}
      </div>
    </div>
  );
};

export default Result;
