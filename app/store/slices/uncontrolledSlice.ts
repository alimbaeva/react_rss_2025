import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FormDataSliceState } from '~/types/types'

const initialState: FormDataSliceState = {
  name: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  accept: false,
  picture: '',
  country: '',
}

const uncontrolledSlice = createSlice({
  name: 'uncontrolled',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<FormDataSliceState>) => {
      state.country = action.payload.country
      state.picture = action.payload.picture
      state.accept = action.payload.accept
      state.gender = action.payload.gender
      state.confirmPassword = action.payload.confirmPassword
      state.password = action.payload.password
      state.email = action.payload.email
      state.age = action.payload.age
      state.name = action.payload.name
    },
  },
})

export const { setData } = uncontrolledSlice.actions
export default uncontrolledSlice.reducer
