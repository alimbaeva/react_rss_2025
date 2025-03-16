import { forwardRef, useEffect, useState } from 'react'
import TextforInput from './TextforInput'
import type { PasswordStrength } from '~/types/types'

interface InputFieldProps {
  forInput: string
  label: string
  type: string
  warnText: string
  passwordSafe?: PasswordStrength
  errors: Record<string, string>
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ forInput, label, type, warnText, errors, passwordSafe }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [passwordSafeCollor, setIsPasswordSafeCollor] = useState('text-red-600')

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
              ref={ref}
              id={forInput}
              type={type}
              min="1"
              className="border p-2 w-full"
            />
          )}
          {type !== 'number' && (
            <input
              ref={ref}
              id={forInput}
              type={type}
              className="border p-2 w-full"
            />
          )}
          <TextforInput
            errors={errors}
            warnText={warnText}
            forInput={forInput}
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
              ref={ref}
              id={forInput}
              type={isPasswordVisible ? 'text' : 'password'}
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
            forInput={forInput}
          />
          {passwordSafe && forInput === "password" && <p className={passwordSafeCollor}>{passwordSafe}</p>}
        </div>
      )
    }
  }
)

InputField.displayName = 'InputField'

export default InputField
