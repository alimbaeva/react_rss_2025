import { useState } from 'react'
import type { FormDataSliceState } from '~/types/types'

const Result = ({
  data,
  title,
  glow,
}: {
  data: FormDataSliceState
  title: string
  glow: boolean
}) => {
  return (
    <div
      className={
        glow
          ? 'p-6 max-w-lg mx-auto border border-orange-800 shadow-lg'
          : 'p-6 max-w-lg mx-auto'
      }
    >
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <div className="my-3" key={key}>
            <strong className="capitalize mr-2">{key}:</strong>
            {key === 'picture' ? (
              <img
                src={value}
                alt="Uploaded"
                className="w-32 h-32 object-cover my-2"
              />
            ) : typeof value === 'boolean' ? (
              value ? (
                'Yes'
              ) : (
                'No'
              )
            ) : (
              value
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Result
