import { FC } from 'react';
import { useSearch } from '../context/useSearch';
import Result from '../Result';
import Details from '../Details';
import DropDownInfo from '../dropDownInfo/DropDownInfo';

const Results: FC = () => {
  const { idValue } = useSearch();

  return (
    <div
      data-testid="empty-Results"
      className={idValue ? 'result-wrapper in-details' : 'result-wrapper'}
    >
      <Result />
      {idValue && <Details />}
      <DropDownInfo />
    </div>
  );
};

export default Results;
