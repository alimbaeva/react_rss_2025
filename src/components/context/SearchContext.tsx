import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
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
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
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
  const locSearchValue = localStorage.getItem('searchValue');
  const locSearchValueKey = localStorage.getItem('searchValueKey');
  const [searchValue, setSearchValue] = useState<string>(locSearchValue ?? '');
  const [searchValueKey, setSearchValueKey] = useState<string>(
    locSearchValueKey ?? ''
  );
  const [idValue, setIdValue] = useState<string>(
    localStorage.getItem('idValue') ?? ''
  );
  const [limit, setLimit] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(
    localStorage.getItem('currentPage')
      ? JSON.parse(localStorage.getItem('currentPage') as string)
      : 0
  );
  const [breeds, setBreedsValue] = useState<Breed[]>([]);
  const [cats, setCats] = useState<CatBreed[]>([]);

  const saveToLocalStorage = ({
    searchValue = '',
    searchValueKey = '',
    idValue = '',
  }: SaveToLocalStorageType) => {
    localStorage.setItem('searchValue', searchValue);
    localStorage.setItem('idValue', idValue);
    localStorage.setItem('searchValueKey', searchValueKey);
  };

  useEffect(() => {
    if (
      locSearchValueKey !== searchValueKey ||
      searchValue !== locSearchValue
    ) {
      setCurrentPage(0);
    }
  }, [locSearchValue, locSearchValueKey, searchValue, searchValueKey]);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        limit,
        idValue,
        breeds,
        cats,
        searchValueKey,
        currentPage,
        setCurrentPage,
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
