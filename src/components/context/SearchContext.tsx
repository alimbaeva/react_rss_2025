import { createContext, ReactNode, FC } from 'react';

export type SearchContextType = object;

interface SearchProviderProps {
  children: ReactNode;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  return <SearchContext.Provider value={{}}>{children}</SearchContext.Provider>;
};

export default SearchContext;
