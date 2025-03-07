import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchValueKey: string;
  searchValue: string;
  idValue: string;
  currentPage: number;
  pages: number[];
  limit: number;
}

const initialState: SearchState = {
  searchValueKey: '',
  searchValue: '',
  idValue: '',
  limit: 10,
  pages: [],
  currentPage: 0,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValueKey(state, action: PayloadAction<string>) {
      state.searchValueKey = action.payload;
      state.idValue = '';
      state.searchValue = '';
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.idValue = '';
      state.searchValueKey = '';
    },
    setIdValue(state, action: PayloadAction<string>) {
      state.idValue = action.payload;
    },
    setCleanSearch(state) {
      state.idValue = '';
      state.searchValue = '';
      state.searchValueKey = '';
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setPages(state, action: PayloadAction<number[]>) {
      state.pages = action.payload;
    },
  },
});

export const {
  setSearchValueKey,
  setSearchValue,
  setIdValue,
  setCleanSearch,
  setCurrentPage,
  setPages,
} = searchSlice.actions;
export default searchSlice.reducer;
