import { FC } from 'react';
import '@styles/globals.scss';
import TopControl from '@/components/TopControl';
import Results from '@/components/results/Results';

const Home: FC = () => {
  return (
    <section className="main-section">
      <TopControl />
      <Results />
    </section>
  );
};

export default Home;
