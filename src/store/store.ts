import { configureStore } from '@reduxjs/toolkit';
import { breedsApi } from './queryApi/breedsApi';
import breedsReducer from './slices/breedsSlice';

export const store = configureStore({
  reducer: {
    [breedsApi.reducerPath]: breedsApi.reducer,
    breeds: breedsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(breedsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
