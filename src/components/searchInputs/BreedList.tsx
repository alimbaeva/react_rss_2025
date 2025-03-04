import { FC, MouseEvent } from 'react';
import { Breed } from '@/types/types';

interface BreedListProps {
  inputOptions: Breed[];
  handleBreedItem: (event: MouseEvent<HTMLLIElement>) => void;
  theme: string;
}

const BreedList: FC<BreedListProps> = ({
  inputOptions,
  handleBreedItem,
  theme,
}) => {
  if (inputOptions.length === 0) {
    return <p>No breeds found</p>;
  }

  return (
    <ul
      className={
        theme === 'light'
          ? 'light-info wrapper-breed'
          : 'dark-info wrapper-breed'
      }
    >
      {inputOptions.map((el) => (
        <li key={el.id} onClick={handleBreedItem} className="breed-item">
          {el.name}
        </li>
      ))}
    </ul>
  );
};

export default BreedList;
