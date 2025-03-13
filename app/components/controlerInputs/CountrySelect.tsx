import { type FC } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '~/store/store'
import TextforInput from './TextforInput'
import type { FormDataType } from '~/types/types'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

interface CountrySelectProps {
  forInput: keyof FormDataType
  label: string
  type: string
  warnText: string
  register: UseFormRegister<FormDataType>
  errors: FieldErrors<FormDataType>
}

const CountrySelect: FC<CountrySelectProps> = ({
  forInput,
  label,
  warnText,
  errors,
  register,
  type,
}) => {
  const countries = useSelector((state: RootState) => state.countries.countries)

  return (
    <div>
      <label htmlFor={forInput} className="block mb-2">
        {label}
      </label>
      <input
        id={forInput}
        type={type}
        {...register(forInput)}
        list="countries-list"
        className="border p-2 w-full"
        placeholder="Start typing country"
      />
      <datalist id="countries-list">
        {countries.map((el, id) => (
          <option key={id} value={el} />
        ))}
      </datalist>
      <TextforInput
        errors={errors}
        warnText={warnText}
        forInput={forInput as keyof FormDataType}
      />
    </div>
  )
}

export default CountrySelect
