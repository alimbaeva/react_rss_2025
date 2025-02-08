import { FC } from 'react';
import { useSearch } from '../context/useSearch';
import Result from '../Result';
import Details from '../Details';

const Results: FC = () => {
  const { idValue } = useSearch();

  return (
    <div className={idValue ? 'result-wrapper in-details' : 'result-wrapper'}>
      <Result />
      {idValue && <Details />}
    </div>
  );
};

export default Results;
