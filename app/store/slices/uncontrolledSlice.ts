import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FormDataSliceState } from '~/types/types'

interface InitialStateType {
  unControlledData: FormDataSliceState
  modifyUnCon: boolean
}

const initialState: InitialStateType = {
  unControlledData: {
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
  modifyUnCon: false,
}

const uncontrolledSlice = createSlice({
  name: 'uncontrolled',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<FormDataSliceState>) => {
      state.unControlledData = action.payload
      state.unControlledData.country = action.payload.country
      state.modifyUnCon = true
    },
    setmodifyUnCon: (state) => {
      state.modifyUnCon = false
    },
  },
})

export const { setData, setmodifyUnCon } = uncontrolledSlice.actions
export default uncontrolledSlice.reducer
