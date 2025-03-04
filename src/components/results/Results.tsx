import { useEffect, useState } from 'react';
import Result from './Result';
import Details from '../Details';
import DropDownInfo from '../dropDownInfo/DropDownInfo';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { CatBreed } from '@/types/types';

const Results = ({ cats }: { cats: CatBreed[] }) => {
  const { idValue } = useSelector((state: RootState) => state.search);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      data-testid="empty-Results"
      className={idValue ? 'result-wrapper in-details' : 'result-wrapper'}
    >
      <Result catsSer={cats} />
      {idValue && <Details />}
      <DropDownInfo />
    </div>
  );
};

export default Results;
