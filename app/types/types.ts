export interface FormDataType {
  name: string
  age: string
  email: string
  password: string
  confirmPassword: string
  gender: 'male' | 'female'
  country: string
  accept: boolean
  picture: { base64: string; type: string }
}

export interface InputData {
  label: string
  type: string
  forInput: string
  warnText: string
}

export interface FormDataSliceState {
  name: string
  age: string
  email: string
  password: string
  confirmPassword: string
  gender: string
  accept: boolean
  picture: string | null
  country: string
}