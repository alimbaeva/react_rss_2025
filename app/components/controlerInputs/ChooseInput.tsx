import { type FC } from 'react'
import TextforInput from './TextforInput'
import type { FormDataType } from '~/types/types'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

interface ChooseInputProps {
  forInput: keyof FormDataType
  label: string
  type: string
  warnText: string
  register: UseFormRegister<FormDataType>
  errors: FieldErrors<FormDataType>
}

const ChooseInput: FC<ChooseInputProps> = ({
  forInput,
  warnText,
  errors,
  register,
  type,
}) => {
  return (
    <div>
      <label className="flex items-center justify-start w-full">
        <input
          id={forInput}
          type={type}
          {...register(forInput)}
          className="border p-2 mr-2"
        />
        I accept the terms of use
      </label>
      <TextforInput
        errors={errors}
        warnText={warnText}
        forInput={forInput as keyof FormDataType}
      />
    </div>
  )
}

export default ChooseInput
