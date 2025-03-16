import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { FormDataSliceState } from '~/types/types'

interface InitialStateType {
  unControlledData: FormDataSliceState
  allForm: FormDataSliceState[]
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
  allForm: [],
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
    setAllForm: (state, action: PayloadAction<FormDataSliceState>) => {
      state.allForm.push({...action.payload })
    },
    setmodifyUnCon: (state) => {
      state.modifyUnCon = false
    },
  },
})

export const { setData, setmodifyUnCon, setAllForm } = uncontrolledSlice.actions
export default uncontrolledSlice.reducer
