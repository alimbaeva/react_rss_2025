import { type FC } from 'react'
import TextforInput from './TextforInput'
import type { FormDataType } from '~/types/types'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

interface MeleInputProps {
  forInput: keyof FormDataType
  label: string
  type: string
  warnText: string
  register: UseFormRegister<FormDataType>
  errors: FieldErrors<FormDataType>
}

const MeleInput: FC<MeleInputProps> = ({
  forInput,
  label,
  warnText,
  errors,
  register,
}) => {
  return (
    <div>
      <label htmlFor={forInput} className="block mb-2">
        {label}
      </label>
      <select
        id={forInput}
        {...register(forInput)}
        className="border p-2 w-full"
      >
        <option value="male">Men</option>
        <option value="female">Women</option>
      </select>
      <TextforInput
        errors={errors}
        warnText={warnText}
        forInput={forInput as keyof FormDataType}
      />
    </div>
  )
}

export default MeleInput
