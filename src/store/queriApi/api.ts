import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CuntryData } from '../../types/types';

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1/',
  }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => 'all',
      transformResponse: (response: CuntryData[]) => {
        return response.map((country) => ({
          continents: country.continents,
          name: country.name.common,
          population: country.population,
          region: country.region,
          flags: country.flags,
          flag: country.flag,
        }));
      },
    }),
  }),
});

export const { useGetCountriesQuery } = countriesApi;
