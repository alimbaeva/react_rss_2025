import { CatBreed } from '@/types/types';
import ClientComponents from './ClientComponents';

const CallClComponent = ({ cats }: { cats: CatBreed[] }) => {
  return <ClientComponents cats={cats} />;
};

export default CallClComponent;
