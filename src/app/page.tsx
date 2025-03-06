import { ReactElement } from 'react';
import { CatBreed } from '@/types/types';
import { APIKEY, URLAPI } from '@/veriables';
import CallClComponent from '@/components/CallClComponent';

async function getCats(): Promise<{ cats: CatBreed[]; error?: string }> {
  try {
    const res = await fetch(`${URLAPI}/breeds`, {
      headers: { 'x-api-key': APIKEY },
      cache: 'no-store',
    });

    if (!res.ok) throw new Error('Ошибка загрузки данных');
    const data = await res.json();

    return { cats: data };
  } catch (error) {
    console.error(error);
    return { cats: [], error: 'Ошибка загрузки данных' };
  }
}

const Home = async (): Promise<ReactElement> => {
  const { cats, error } = await getCats();

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="main-section">
      <CallClComponent cats={cats} />
    </section>
  );
};

export default Home;

// import ClientComponents from '@/components/ClientComponents';
// import { APIKEY, URLAPI } from '@/veriables';
// import { CatBreed } from '@/types/types';
// // import dynamic from 'next/dynamic';
// //
// // const ClientComponents = dynamic(() => import('@components/ClientComponents'), { ssr: false });
//
// async function getCats(): Promise<{ cats: CatBreed[]; error?: string }> {
//   try {
//     const res = await fetch(`${URLAPI}/breeds`, {
//       headers: { 'x-api-key': APIKEY },
//       cache: 'no-store',
//     });
//
//     if (!res.ok) throw new Error('Ошибка загрузки данных');
//     const data = await res.json();
//
//     return { cats: data };
//   } catch (error) {
//     console.error(error);
//     return { cats: [], error: 'Ошибка загрузки данных' };
//   }
// }
//
// export default async function Home() {
//   const { cats, error } = await getCats();
//
//   if (error) return <p>{error}</p>;
//
//   return (
//     <section className="main-section">
//       <ClientComponents cats={cats} />
//     </section>
//   );
// }
