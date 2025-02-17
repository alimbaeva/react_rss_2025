import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatBreed, Breed, CatsDataType } from '../../types/types';
import { breedsApi } from '../queryApi/breedsApi';
import { breedIdApi } from '../queryApi/breedIdApi';

interface BreedsState {
  cats: CatBreed[];
  breeds: Breed[];
  detaileCards: CatsDataType[];
}

const initialState: BreedsState = {
  cats: [],
  breeds: [],
  detaileCards: [],
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
    setDetaileCards(state, action: PayloadAction<CatsDataType[]>) {
      state.detaileCards = action.payload;
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
    builder.addMatcher(
      breedIdApi.endpoints.getCatsDataByBreed.matchFulfilled,
      (state, action: PayloadAction<CatsDataType[]>) => {
        state.detaileCards = action.payload;
      }
    );
  },
});

export const { setBreeds, setDetaileCards } = breedsSlice.actions;
export default breedsSlice.reducer;
