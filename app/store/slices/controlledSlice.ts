import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FormDataSliceState } from '~/types/types'

interface InitialStateType {
  controlledData: FormDataSliceState
  modify: boolean
  allFormControle: FormDataSliceState[]
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
  allFormControle: [],
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
    setAllFormControle: (state, action: PayloadAction<FormDataSliceState>) => {
      state.allFormControle.push({...action.payload })
    },
    setmodify: (state) => {
      state.modify = false
    },
  },
})

export const { setData, setmodify, setAllFormControle } = controlledSlice.actions
export default controlledSlice.reducer
