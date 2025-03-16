import { useEffect, useState, type FC } from 'react'
import type { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'
import type { FormDataType, PasswordStrength } from '~/types/types'
import TextforInput from './TextforInput'

interface InputFieldProps {
  forInput: keyof FormDataType
  label: string
  type: string
  warnText: string
  passwordSafe?: PasswordStrength
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
  passwordSafe,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [passwordSafeCollor, setIsPasswordSafeCollor] = useState('text-red-600');

  const togglePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState)

  useEffect(() => {
    switch(passwordSafe) {
      case 'Average': 
        setIsPasswordSafeCollor('text-yellow-500');
        break;
      case'Protected': 
        setIsPasswordSafeCollor('text-green-500');
        break;
      case 'Poor': 
        setIsPasswordSafeCollor('text-red-600');
        break;
    }
  }, [passwordSafe])

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
        {passwordSafe && forInput === "password" && <p className={passwordSafeCollor}>{passwordSafe}</p>}
      </div>
    )
  }
}

export default InputField
