import { FC } from 'react';
import './app.scss';
import { SearchProvider } from '../components/context/SearchContext';
import TopControls from '../components/TopControls';
import Result from '../components/Result';

const Home: FC = () => {
  return (
    <SearchProvider>
      <main className="main-page">
        <TopControls />
        <Result />
      </main>
    </SearchProvider>
  );
};

export default Home;
