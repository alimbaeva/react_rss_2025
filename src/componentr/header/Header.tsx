import { filterData } from '../../customData/data';
import InputField from '../inputs/InputFeald';

const Header = () => {
  return (
    <header>
      {filterData.map((el, id) => (
        <InputField
          key={id}
          forInput={el.forInput}
          label={el.label}
          type={el.type}
        />
      ))}
    </header>
  );
};

export default Header;
