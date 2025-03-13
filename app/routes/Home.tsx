import { useSelector } from 'react-redux'
import type { RootState } from '~/store/store'

const Home = () => {
  const { ...data } = useSelector((state: RootState) => state.uncontrolled)

  return (
    <section>
      home
      {data.age}
    </section>
  )
}

export default Home
