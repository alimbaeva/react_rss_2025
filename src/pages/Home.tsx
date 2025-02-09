import { FC } from 'react';
import './app.scss';
import { SearchProvider } from '../components/context/SearchContext';
import TopControl from '../components/TopControl';
import Results from '../components/results/Results';

const Home: FC = () => {
  return (
    <SearchProvider>
      <main className="main-page">
        <TopControl />
        <Results />
      </main>
    </SearchProvider>
  );
};

export default Home;
