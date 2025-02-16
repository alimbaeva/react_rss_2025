import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatBreed, Breed } from '../../types/types';
import { breedsApi } from '../queryApi/breedsApi';

interface BreedsState {
  cats: CatBreed[];
  breeds: Breed[];
}

const initialState: BreedsState = {
  cats: [],
  breeds: [],
};

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setBreeds(
      state,
      action: PayloadAction<{ data: CatBreed[]; breeds: Breed[] }>
    ) {
      state.cats = action.payload.data;
      state.breeds = action.payload.breeds;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      breedsApi.endpoints.getBreeds.matchFulfilled,
      (state, action: PayloadAction<{ data: CatBreed[]; breeds: Breed[] }>) => {
        state.cats = action.payload.data;
        state.breeds = action.payload.breeds;
      }
    );
  },
});

export const { setBreeds } = breedsSlice.actions;
export default breedsSlice.reducer;
