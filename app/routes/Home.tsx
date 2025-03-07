import { useLoaderData } from 'react-router-dom'
import CallClComponent from '~/components/CallClComponent'
import type { CatBreed } from '~/types/types'
import { APIKEY, URLAPI } from '~/veriables'
import type { Route } from '../+types/root'

export async function getCats(): Promise<{ cats: CatBreed[]; error?: string }> {
  try {
    const res = await fetch(`${URLAPI}/breeds`, {
      headers: { 'x-api-key': APIKEY },
      cache: 'no-store',
    })

    if (!res.ok) throw new Error('Ошибка загрузки данных')
    const data = await res.json()

    return { cats: data }
  } catch (error) {
    console.error(error)
    return { cats: [], error: 'Ошибка загрузки данных' }
  }
}

export async function loader() {
  let data = await getCats()
  return data
}

const Home = () => {
  let { cats, error } = useLoaderData()
  if (error) {
    return <p>{error}</p>
  }

  return (
    <section className="main-section">
      <CallClComponent cats={cats} />
    </section>
  )
}

export default Home
