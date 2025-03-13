import { configureStore } from '@reduxjs/toolkit'
import uncontrolledReducer from './slices/uncontrolledSlice'
import countryReducer from './slices/countrySlice'

export const store = configureStore({
  reducer: {
    uncontrolled: uncontrolledReducer,
    countries: countryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
