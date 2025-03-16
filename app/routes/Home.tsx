import { useSelector } from 'react-redux'
import Cart from '~/components/result/Cart'
import Result from '~/components/result/Result'
import type { RootState } from '~/store/store'
import type { FormDataSliceState } from '~/types/types'

const Home = () => {
  const { unControlledData, modifyUnCon, allForm } = useSelector(
    (state: RootState) => state.uncontrolled
  )
  const { controlledData, modify, allFormControle } = useSelector(
    (state: RootState) => state.controlled
  )

  return (
    <section className="py-3 min-h-screen flex flex-col md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0">
      {!unControlledData.email && !controlledData.email && (
        <h1>
          Welcome to the Form project, please go to the form page and fill out
          the form.
        </h1>
      )}
      {unControlledData.email && (
        <div>
          <Result
            data={unControlledData}
            title={'Received data from Uncontrolled form'}
            glow={modifyUnCon}
          />
          <div className="flex flex-wrap gap-4">
            {allForm.map((el: FormDataSliceState, id) => {
              return <Cart key={`${id}`} data={el} activ={id === allForm.length -1 && modifyUnCon}/>
            })}
          </div>
        </div>
      )}
      {controlledData.email && (
        <div>
          <Result
            data={controlledData}
            title={'Received data from Controlled form'}
            glow={modify}
          />
          <div className="flex flex-wrap gap-4">
            {allFormControle.map((el: FormDataSliceState, id) => {
              return <Cart key={`${id}`} data={el} activ={id === allFormControle.length -1 && modify}/>
            })}
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
