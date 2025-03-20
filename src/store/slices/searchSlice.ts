import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CuntryData } from '../../types/types';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../../componentr/customhooks/localActions';

interface SearchState {
  data: CuntryData[];
  filter: string;
  search: string;
  sort: string;
  region: string[];
}

const initialState: SearchState = {
  data: getFromLocalStorage('data') ?? [],
  region: getFromLocalStorage('region') ?? [],
  filter: '',
  search: '',
  sort: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<CuntryData[]>) {
      state.data = action.payload;
      state.region = action.payload.map((el) => el.region);
      saveToLocalStorage('region', state.region);
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setFilter, setSort, setSearch, setData } = searchSlice.actions;
export default searchSlice.reducer;
