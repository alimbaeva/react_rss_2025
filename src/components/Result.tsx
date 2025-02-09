import { FC, MouseEvent } from 'react';
import CardItem from './cards/CardItem';
import './styles/result.scss';
import IsLoading from './IsLoading';
import EmptyData from './EmptyData';
import Pagination from './pagination/Pagination';
import { useResultData } from './useResultData';

const Result: FC = () => {
  const {
    data,
    pages,
    isLoad,
    error,
    idValue,
    setIdValue,
    currentPage,
    limit,
  } = useResultData();

  const handleMainResultBlock = (event: MouseEvent<HTMLDivElement>) => {
    const close = (event.target as HTMLElement).dataset.element;
    if (close !== 'element') setIdValue('');
  };

  if (isLoad) return <IsLoading />;
  if (error) return <div className="error-message">{error}</div>;
  if (data.length === 0) return <EmptyData />;

  return (
    <div id="result" onClick={handleMainResultBlock}>
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
