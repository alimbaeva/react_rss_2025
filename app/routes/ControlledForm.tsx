import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ChooseInput from '~/components/controlerInputs/ChooseInput'
import CountrySelect from '~/components/controlerInputs/CountrySelect'
import InputField from '~/components/controlerInputs/InputFeald'
import MeleInput from '~/components/controlerInputs/MeleInput'
import UploadImage from '~/components/controlerInputs/UploadImage'
import { inputData } from '~/customData/data'
import { formSchema } from '~/hepler/validationSchema'
import { setData, setmodify } from '~/store/slices/controlledSlice'
import { setCountries } from '~/store/slices/countrySlice'
import type { FormDataType } from '~/types/types'

const ControlledForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: FormDataType) => {
    if (data) {
      dispatch(setCountries(data.country))
      dispatch(setData({ ...data, picture: data.picture.base64 }))
    }
    setTimeout(() => dispatch(setmodify()), 1000)
    navigate('/', { replace: true })
  }

  return (
    <div className="max-w-lg mx-auto my-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Controlled Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {inputData.map((el, id) => (
          <InputField
            key={id}
            forInput={el.forInput as keyof FormDataType}
            label={el.label}
            type={el.type}
            warnText={el.warnText}
            register={register}
            errors={errors}
          />
        ))}
        <MeleInput
          forInput={'gender'}
          label={'Male:'}
          warnText={'Choose gender'}
          register={register}
          errors={errors}
          type={''}
        />
        <CountrySelect
          forInput={'country'}
          label={'Country:'}
          warnText={'Country must be in Latin characters.'}
          register={register}
          errors={errors}
          type={'text'}
        />
        <ChooseInput
          forInput={'accept'}
          warnText={'Give your consent'}
          label={'Country:'}
          register={register}
          errors={errors}
          type={'checkbox'}
        />

        <Controller
          name="picture"
          control={control}
          render={({ field: { onChange, value } }) => (
            <UploadImage
              forInput={'picture'}
              value={value}
              onChange={onChange}
              errors={errors}
              warnText={'Choose PNG and JPEG images allowed.'}
            />
          )}
        />

        <button
          type="submit"
          disabled={!isValid}
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
            !isValid ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ControlledForm
