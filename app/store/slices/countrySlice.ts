import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CountryState {
  countries: string[];
}

const initialState: CountryState = {
  countries: ["United States", "Canada", "Germany", "Australia", "India", "Brazil", "Japan", "China", "Russia", "Mexico"],
};

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<string>) => {
      if (!state.countries.includes(action.payload)) {
        state.countries = [...state.countries, action.payload];
      }
    },
  },
});

export const { setCountries } = countrySlice.actions;
export default countrySlice.reducer;
