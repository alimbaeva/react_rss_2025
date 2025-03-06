import ClientComponents from '@/components/ClientComponents';
import { APIKEY, URLAPI } from '@/veriables';
import { CatBreed } from '@/types/types';
import { ReactNode } from 'react';

const Home = ({ cats, error }: { cats: CatBreed[]; error: ReactNode }) => {
  if (error) return <p>{error}</p>;

  return (
    <section className="main-section">
      <ClientComponents cats={cats} />
    </section>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`${URLAPI}/breeds`, {
      headers: { 'x-api-key': APIKEY },
    });

    if (!res.ok) throw new Error('Ошибка загрузки данных');

    const data = await res.json();

    return {
      props: { cats: data },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { cats: [], error: 'Ошибка загрузки данных' },
    };
  }
}

export default Home;
