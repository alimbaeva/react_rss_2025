import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CuntryData } from '../../types/types';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../../componentr/customhooks/localActions';
import { sortData } from '../../componentr/helpers/sortData';
import { filterDataRegion } from '../../componentr/helpers/regionRegion';
import { searchFilter } from '../../componentr/helpers/searchFilter';

interface SearchState {
  data: CuntryData[];
  filterData: CuntryData[];
  filter: string;
  search: string;
  sort: string;
  emptyData: string | null;
  region: string[];
}

const initialState: SearchState = {
  data: getFromLocalStorage('data') ?? [],
  filterData: [],
  region: getFromLocalStorage('region') ?? [],
  filter: '',
  search: '',
  sort: '',
  emptyData: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setData(state, action: PayloadAction<CuntryData[]>) {
      state.data = action.payload;
      if (!state.region.length) {
        state.region = [...new Set(action.payload.map((el) => el.region))];
        saveToLocalStorage('region', state.region);
      }
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
      state.search = '';
      state.filterData = filterDataRegion(state.data, action.payload) ?? [];
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
      state.search = '';
      state.filterData =
        sortData(
          state.filterData.length ? state.filterData : state.data,
          action.payload,
          state.filter
        ) ?? [];
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.sort = '';
      state.filter = '';
      state.filterData = searchFilter(state.data, action.payload) ?? [];
      if (!state.filterData.length)
        state.emptyData = 'Nothing was found for your query.';
      if (state.filterData.length && state.emptyData) state.emptyData = null;
    },
    setEmpty(state) {
      state.emptyData = null;
    },
  },
});

export const { setFilter, setSort, setSearch, setData, setEmpty } =
  searchSlice.actions;
export default searchSlice.reducer;
