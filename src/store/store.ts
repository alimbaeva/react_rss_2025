import { configureStore } from '@reduxjs/toolkit';
import { breedsApi } from './queryApi/breedsApi';
import breedsReducer from './slices/breedsSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    [breedsApi.reducerPath]: breedsApi.reducer,
    breeds: breedsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(breedsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
