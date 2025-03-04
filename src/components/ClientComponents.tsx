import { CatBreed } from '@/types/types';
import dynamic from 'next/dynamic';

const TopControl = dynamic(() => import('@/components/TopControl'), {
  ssr: false,
});
const Results = dynamic(() => import('@/components/results/Results'), {
  ssr: false,
});

const ClientComponents = ({ cats }: { cats: CatBreed[] }) => (
  <>
    <TopControl />
    <Results cats={cats} />
  </>
);

export default ClientComponents;
