import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
} from 'react';

export interface SearchContextType {
  searchValue: string;
  idValue: string;
  limit: number;
  setSearchValue: Dispatch<SetStateAction<string>>;
  setLimit: Dispatch<SetStateAction<number>>;
  setIdValue: Dispatch<SetStateAction<string>>;
  saveToLocalStorage: (searchValue: string, idValue: string) => void;
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
    localStorage.getItem('idValue') ?? 'aege'
  );
  const [limit, setLimit] = useState<number>(10);

  const saveToLocalStorage = (searchValue: string, idValue: string) => {
    localStorage.setItem('searchValue', searchValue);
    localStorage.setItem('idValue', idValue);
  };

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        limit,
        setLimit,
        idValue,
        setIdValue,
        saveToLocalStorage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
