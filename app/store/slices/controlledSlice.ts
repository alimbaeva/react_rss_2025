import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FormDataSliceState } from '~/types/types'

interface InitialStateType {
  controlledData: FormDataSliceState
  modify: boolean
}

const initialState: InitialStateType = {
  controlledData: {
    name: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    accept: false,
    picture: '',
    country: '',
  },
  modify: false,
}

const controlledSlice = createSlice({
  name: 'controlled',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<FormDataSliceState>) => {
      state.controlledData = action.payload
      state.controlledData.country = action.payload.country
      state.modify = true
    },
    setmodify: (state) => {
      state.modify = false
    },
  },
})

export const { setData, setmodify } = controlledSlice.actions
export default controlledSlice.reducer
