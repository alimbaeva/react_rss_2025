import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '@customhooks/localActions';

interface SearchState {
  searchValueKey: string;
  searchValue: string;
  idValue: string;
  currentPage: number;
  pages: number[];
  limit: number;
}

const initialState: SearchState = {
  searchValueKey: getFromLocalStorage<string>('searchValueKey') || '',
  searchValue: getFromLocalStorage<string>('searchValue') || '',
  idValue: getFromLocalStorage<string>('idValue') || '',
  limit: 10,
  pages: [],
  currentPage: getFromLocalStorage<number>('currentPage') ?? 0,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValueKey(state, action: PayloadAction<string>) {
      state.searchValueKey = action.payload;
      state.idValue = '';
      state.searchValue = '';
      saveToLocalStorage('searchValueKey', action.payload);
      saveToLocalStorage('searchValue', '');
      saveToLocalStorage('idValue', '');
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.idValue = '';
      state.searchValueKey = '';
      saveToLocalStorage('searchValue', action.payload);
      saveToLocalStorage('idValue', '');
      saveToLocalStorage('searchValueKey', '');
    },
    setIdValue(state, action: PayloadAction<string>) {
      state.idValue = action.payload;
      saveToLocalStorage('idValue', action.payload);
    },
    setCleanSearch(state) {
      state.idValue = '';
      state.searchValue = '';
      state.searchValueKey = '';
      saveToLocalStorage('idValue', '');
      saveToLocalStorage('searchValue', '');
      saveToLocalStorage('searchValueKey', '');
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      saveToLocalStorage('currentPage', action.payload);
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
