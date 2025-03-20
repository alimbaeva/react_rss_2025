import { configureStore } from '@reduxjs/toolkit';
import { countriesApi } from './queriApi/api';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
    searchSlice: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
