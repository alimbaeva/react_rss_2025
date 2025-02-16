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
  searchValueKey: localStorage.getItem('searchValueKey') || '',
  searchValue: localStorage.getItem('searchValue') || '',
  idValue: localStorage.getItem('idValue') || '',
  limit: 10,
  pages: [],
  currentPage: localStorage.getItem('currentPage')
    ? JSON.parse(localStorage.getItem('currentPage') as string)
    : 0,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValueKey(state, action: PayloadAction<string>) {
      state.searchValueKey = action.payload;
      state.idValue = '';
      state.searchValue = '';
      localStorage.setItem('searchValueKey', action.payload);
      localStorage.setItem('searchValue', '');
      localStorage.setItem('idValue', '');
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.idValue = '';
      state.searchValueKey = '';
      localStorage.setItem('searchValue', action.payload);
      localStorage.setItem('idValue', '');
      localStorage.setItem('searchValueKey', '');
    },
    setIdValue(state, action: PayloadAction<string>) {
      state.idValue = action.payload;
      localStorage.setItem('idValue', action.payload);
      //   localStorage.setItem('searchValue', '');
      localStorage.setItem('searchValueKey', '');
    },
    setCleanSearch(state) {
      state.idValue = '';
      state.searchValue = '';
      state.searchValueKey = '';
      localStorage.setItem('idValue', '');
      localStorage.setItem('searchValue', '');
      localStorage.setItem('searchValueKey', '');
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      localStorage.setItem('currentPage', JSON.stringify(action.payload));
    },
    setPages(state, action: PayloadAction<number[]>) {
      state.pages = action.payload;
      localStorage.setItem('currentPage', JSON.stringify(action.payload));
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
