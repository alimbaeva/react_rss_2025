import { useSelector } from 'react-redux'
import Result from '~/components/result/Result'
import type { RootState } from '~/store/store'

const Home = () => {
  const { unControlledData, modifyUnCon } = useSelector(
    (state: RootState) => state.uncontrolled
  )
  const { controlledData, modify } = useSelector(
    (state: RootState) => state.controlled
  )

  return (
    <section className="py-3 min-h-screen flex flex-col md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0">
      {unControlledData.email && (
        <Result
          data={unControlledData}
          title={'Received data from Uncontrolled form'}
          glow={modifyUnCon}
        />
      )}
      {controlledData.email && (
        <Result
          data={controlledData}
          title={'Received data from Controlled form'}
          glow={modify}
        />
      )}
    </section>
  )
}

export default Home
