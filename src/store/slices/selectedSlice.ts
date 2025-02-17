import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatItemType } from '../../types/types';

interface SelectedState {
  selectedData: { [key: string]: CatItemType };
  selectedIds: string[];
  dell: string;
}

const initialState: SelectedState = {
  selectedData: localStorage.getItem('selectedIds')
    ? JSON.parse(localStorage.getItem('selectedIds') as string)
    : {},
  selectedIds: localStorage.getItem('selectedIds')
    ? JSON.parse(localStorage.getItem('selectedIds') as string)
    : [],
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
        localStorage.setItem(
          'selectedData',
          JSON.stringify(state.selectedData)
        );
        localStorage.setItem('selectedIds', JSON.stringify(state.selectedIds));
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
      localStorage.setItem('selectedData', JSON.stringify(state.selectedData));
      localStorage.setItem('selectedIds', JSON.stringify(state.selectedIds));
    },
    clearSelected: (state) => {
      state.selectedData = {};
      state.selectedIds = [];
      localStorage.removeItem('selectedData');
      localStorage.removeItem('selectedIds');
    },
  },
});

export const { addToSelected, removeFromSelected, clearSelected } =
  selectedSlice.actions;
export default selectedSlice.reducer;
