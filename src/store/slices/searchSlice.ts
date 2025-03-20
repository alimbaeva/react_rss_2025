import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CuntryData } from '../../types/types';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../../componentr/customhooks/localActions';
import { sortData } from '../../componentr/helpers/sortData';

interface SearchState {
  data: CuntryData[];
  filterData: CuntryData[];
  filter: string;
  search: string;
  sort: string;
  region: string[];
}

const initialState: SearchState = {
  data: getFromLocalStorage('data') ?? [],
  filterData: [],
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
      if (state.region.length) {
        state.region = [...new Set(action.payload.map((el) => el.region))];
        saveToLocalStorage('region', state.region);
      }
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
      state.filterData = state.data.filter(
        (el) => el.region === action.payload
      );
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
      state.filterData = sortData(state.filterData, action.payload);
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setFilter, setSort, setSearch, setData } = searchSlice.actions;
export default searchSlice.reducer;
