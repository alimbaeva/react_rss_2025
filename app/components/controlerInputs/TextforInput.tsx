import type { FC } from 'react'
import type { FieldErrors } from 'react-hook-form'
import type { FormDataType } from '~/types/types'

interface TextforInputProps {
  errors: FieldErrors<FormDataType>
  forInput: keyof FormDataType
  warnText: string
}

const TextforInput: FC<TextforInputProps> = ({
  errors,
  warnText,
  forInput,
}) => {
  return (
    <>
      {!errors[forInput] && (
        <p className="text-gray-900/25 text-xs mt-1">{warnText}</p>
      )}
      {errors[forInput] && (
        <p className="text-red-500 text-xs mt-1">{`${errors[forInput]?.message}`}</p>
      )}
    </>
  )
}

export default TextforInput
