import { FC, memo } from 'react';
import { CuntryData } from '../../types/types';
import '../../styles/list.scss';

interface ListProp {
  data: CuntryData;
}

const List: FC<ListProp> = ({ data }) => {
  return (
    <li className="wrapper-list">
      <div className="wrapper-text">
        <p>
          <span>Name:</span> {data.name.common}
        </p>
        <p>
          <span>Continents:</span> {data.continents}
        </p>
        <p>
          <span>Population:</span> {data.population}
        </p>
        <p>
          <span>Region:</span> {data.region}
        </p>
      </div>
      <div className="wrapper-image">
        <img src={data.flags.png} alt="flag" loading="lazy" />
        <p className="text-flag">{data.flag}</p>
      </div>
    </li>
  );
};

export default memo(
  List,
  (prevProps, nextProps) =>
    JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data)
);
