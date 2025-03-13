import { type ChangeEvent, type FC } from 'react'
import TextforInput from './TextforInput'
import type { FormDataType } from '~/types/types'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

interface UploadImageProps {
  value: { base64: string; type: string }
  onChange: (value: unknown) => void
  errors: FieldErrors<FormDataType>
  warnText: string
  forInput: string
}

const UploadImage: FC<UploadImageProps> = ({
  value,
  onChange,
  errors,
  warnText,
  forInput,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64 = reader.result as string
        onChange({ base64, type: file.type })
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <label htmlFor="file" className="block">
        Upload Picture
      </label>
      <input
        type="file"
        id="file"
        accept=".png, .jpeg"
        className="border p-2 w-full"
        onChange={handleFileChange}
      />
      {value?.base64 && (
        <img src={value?.base64} alt="Preview" className="w-24 h-24 mt-2" />
      )}
      <TextforInput
        errors={errors}
        warnText={warnText}
        forInput={forInput as keyof FormDataType}
      />
    </div>
  )
}
// const UploadImage: FC<UploadImageProps> = ({
//   forInput,
//   label,
//   type,
//   warnText,
//   errors,
//   picturePreview,
//   register,
//   handlePictureChange,
// }) => {
//   return (
//     <div>
//       <label htmlFor={forInput} className="block">
//         {label}
//       </label>
//       <input
//         id={forInput}
//         type={type}
//         {...register(forInput)}
//         className="border p-2 w-full"
//         accept=".png, .jpeg"
//         onChange={handlePictureChange}
//       />
//       {picturePreview && (
//         <img src={picturePreview} alt="Preview" className="w-24 h-24 mt-2" />
//       )}
//       <TextforInput
//         errors={errors}
//         warnText={warnText}
//         forInput={forInput as keyof FormDataType}
//       />
//     </div>
//   )
// }

export default UploadImage
