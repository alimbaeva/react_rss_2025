import { filterData } from '../../customData/data';
import InputField from '../inputs/InputFeald';
import '../../styles/header.scss';

const Header = () => {
  return (
    <header>
      <div className="filter-wrapper">
        {filterData.map((el, id) => (
          <InputField
            key={id}
            forInput={el.forInput}
            label={el.label}
            type={el.type}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
