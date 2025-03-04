import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatItemType } from '../../types/types';
// import {
//   getFromLocalStorage,
//   removeFromLocalStorage,
//   saveToLocalStorage,
// } from '@customhooks/localActions';

interface SelectedState {
  selectedData: { [key: string]: CatItemType };
  selectedIds: string[];
  dell: string;
}

const initialState: SelectedState = {
  selectedData: {},
  selectedIds: [],
  //   selectedData:
  //     getFromLocalStorage<{ [key: string]: CatItemType }>('selectedData') ?? {},
  //   selectedIds: getFromLocalStorage<string[]>('selectedIds') ?? [],
  dell: '',
};

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    addToSelected: (state, action: PayloadAction<CatItemType>) => {
      if (!state.selectedData[action.payload.id]) {
        state.selectedData[action.payload.id] = action.payload;
        state.selectedIds.push(action.payload.id);
        // saveToLocalStorage('selectedData', state.selectedData);
        // saveToLocalStorage('selectedIds', state.selectedIds);
      }
    },
    removeFromSelected: (state, action: PayloadAction<string>) => {
      const { [action.payload]: trash, ...newSelectedData } =
        state.selectedData;

      state.dell = `${trash}`;
      state.selectedData = newSelectedData;
      state.selectedIds = state.selectedIds.filter(
        (id) => id !== action.payload
      );
      //   saveToLocalStorage('selectedData', state.selectedData);
      //   saveToLocalStorage('selectedIds', state.selectedIds);
    },
    clearSelected: (state) => {
      state.selectedData = {};
      state.selectedIds = [];
      //   removeFromLocalStorage('selectedData');
      //   removeFromLocalStorage('selectedIds');
    },
  },
});

export const { addToSelected, removeFromSelected, clearSelected } =
  selectedSlice.actions;
export default selectedSlice.reducer;
