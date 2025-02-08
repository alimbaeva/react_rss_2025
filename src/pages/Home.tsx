import { FC } from 'react';
import './app.scss';
import { SearchProvider } from '../components/context/SearchContext';
import TopControls from '../components/TopControls';
import Result from '../components/Result';
import Details from '../components/Details';

const Home: FC = () => {
  return (
    <SearchProvider>
      <main className="main-page">
        <TopControls />
        <div className="result-wrapper">
          <Result />
          <Details />
        </div>
      </main>
    </SearchProvider>
  );
};

export default Home;
