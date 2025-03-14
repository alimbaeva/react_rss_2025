import { useState, type FC } from 'react'
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
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const togglePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState)
  if (type !== 'password') {
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
  } else {
    return (
      <div>
        <label htmlFor={forInput} className="block mb-2">
          {label}
        </label>
        <div className="relative">
          <input
            id={forInput}
            type={isPasswordVisible ? 'text' : 'password'}
            {...register(forInput)}
            className="border p-2 w-full"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            {isPasswordVisible ? (
              <span role="img" aria-label="hide">
                🙈
              </span>
            ) : (
              <span role="img" aria-label="show">
                👁️
              </span>
            )}
          </button>
        </div>
        <TextforInput
          errors={errors}
          warnText={warnText}
          forInput={forInput as keyof FormDataType}
        />
      </div>
    )
  }
}

export default InputField
