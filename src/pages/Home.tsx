import { FC } from 'react';
import './app.scss';
import { SearchProvider } from '../components/context/SearchContext';
import TopControls from '../components/TopControls';
import Result from '../components/Result';

const Home: FC = () => {
  return (
    <SearchProvider>
      <TopControls />
      <Result />
    </SearchProvider>
  );
};

export default Home;
