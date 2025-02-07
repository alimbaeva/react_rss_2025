import { FC } from 'react';
import './app.scss';
import { SearchProvider } from '../components/context/SearchContext';
import TopControls from '../components/TopControls';

const Home: FC = () => {
  return (
    <SearchProvider>
      <TopControls />
    </SearchProvider>
  );
};

export default Home;
