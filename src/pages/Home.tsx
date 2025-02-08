import { FC } from 'react';
import './app.scss';
import { SearchProvider } from '../components/context/SearchContext';
import TopControls from '../components/TopControls';
import Results from '../components/results/Results';

const Home: FC = () => {
  return (
    <SearchProvider>
      <main className="main-page">
        <TopControls />
        <Results />
      </main>
    </SearchProvider>
  );
};

export default Home;
