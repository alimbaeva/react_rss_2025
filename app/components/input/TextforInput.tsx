import type { FC } from 'react'

interface TextforInputProps {
  errors: Record<string, string>
  warnText: string
  forInput: string
}

const TextforInput: FC<TextforInputProps> = ({
  errors,
  warnText,
  forInput,
}) => {
  return (
    <>
      {!errors?.[forInput] && (
        <p className="text-gray-900/25 text-xs mt-1">{warnText}</p>
      )}
      {errors?.[forInput] && (
        <p className="text-red-500 text-xs mt-1">{errors[forInput]}</p>
      )}
    </>
  )
}

export default TextforInput
