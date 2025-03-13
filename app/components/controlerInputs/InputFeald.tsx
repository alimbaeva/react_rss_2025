import type { FC } from 'react'
import type { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'
import type { FormDataType } from '~/types/types'
import TextforInput from './TextforInput'

interface InputFieldProps {
  forInput: keyof FormDataType
  label: string
  type: string
  warnText: string
  register: UseFormRegister<FormDataType>
  errors: FieldErrors<FormDataType>
}

const InputField: FC<InputFieldProps> = ({
  forInput,
  label,
  type,
  warnText,
  register,
  errors,
}) => {
  return (
    <div>
      <label htmlFor={forInput} className="block mb-2">
        {label}
      </label>
      {type === 'number' && (
        <input
          id={forInput}
          type={type}
          min="1"
          {...register(forInput)}
          className="border p-2 w-full"
        />
      )}
      {type !== 'number' && (
        <input
          id={forInput}
          type={type}
          {...register(forInput)}
          className="border p-2 w-full"
        />
      )}
      <TextforInput
        errors={errors}
        warnText={warnText}
        forInput={forInput as keyof FormDataType}
      />
    </div>
  )
}

export default InputField
