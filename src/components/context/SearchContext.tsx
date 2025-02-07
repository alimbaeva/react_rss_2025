import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
} from 'react';
import { Breed, CatBreed } from '../../types/types';

interface SaveToLocalStorageType {
  searchValue: string;
  searchValueKey: string;
  idValue: string;
}

export interface SearchContextType {
  searchValue: string;
  searchValueKey: string;
  idValue: string;
  limit: number;
  breeds: Breed[];
  cats: CatBreed[];
  setCats: Dispatch<SetStateAction<CatBreed[]>>;
  setBreedsValue: Dispatch<SetStateAction<Breed[]>>;
  setSearchValueKey: Dispatch<SetStateAction<string>>;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setLimit: Dispatch<SetStateAction<number>>;
  setIdValue: Dispatch<SetStateAction<string>>;
  saveToLocalStorage: (arg: SaveToLocalStorageType) => void;
}

interface SearchProviderProps {
  children: ReactNode;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem('searchValue') ?? ''
  );
  const [idValue, setIdValue] = useState<string>(
    localStorage.getItem('idValue') ?? ''
  );
  const [searchValueKey, setSearchValueKey] = useState<string>(
    localStorage.getItem('searchValueKey') ?? ''
  );
  const [limit, setLimit] = useState<number>(100);
  const [breeds, setBreedsValue] = useState<Breed[]>([]);
  const [cats, setCats] = useState<CatBreed[]>([]);

  // const saveToLocalStorage = (
  //   searchValue = '',
  //   searchValueKey = '',
  //   idValue = ''
  // ) => {
  const saveToLocalStorage = ({
    searchValue = '',
    searchValueKey = '',
    idValue = '',
  }: SaveToLocalStorageType) => {
    localStorage.setItem('searchValue', searchValue);
    localStorage.setItem('idValue', idValue);
    localStorage.setItem('searchValueKey', searchValueKey);
  };

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        limit,
        idValue,
        breeds,
        cats,
        searchValueKey,
        setSearchValueKey,
        setCats,
        setLimit,
        setSearchValue,
        setBreedsValue,
        setIdValue,
        saveToLocalStorage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
