import { forwardRef, type ChangeEvent } from 'react'
import TextforInput from './TextforInput'

interface UploadImageProps {
  forInput: string
  label: string
  warnText: string
  type: string
  picturePreview: string | null
  handlePictureChange: (e: ChangeEvent<HTMLInputElement>) => void
  errors: Record<string, string>
}

const UploadImage = forwardRef<HTMLInputElement, UploadImageProps>(
  (
    {
      forInput,
      label,
      type,
      warnText,
      errors,
      picturePreview,
      handlePictureChange,
    },
    ref
  ) => {
    return (
      <div>
        <label htmlFor={forInput} className="block">
          {label}
        </label>
        <input
          ref={ref}
          id={forInput}
          type={type}
          accept=".png, .jpeg"
          onChange={handlePictureChange}
        />
        {picturePreview && (
          <img src={picturePreview} alt="Preview" className="w-24 h-24 mt-2" />
        )}
        <TextforInput errors={errors} warnText={warnText} forInput={forInput} />
      </div>
    )
  }
)

UploadImage.displayName = 'InputField'

export default UploadImage
