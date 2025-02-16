import { FC } from 'react';
import Result from '../Result';
import Details from '../Details';
import DropDownInfo from '../dropDownInfo/DropDownInfo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Results: FC = () => {
  const { idValue } = useSelector((state: RootState) => state.search);

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
