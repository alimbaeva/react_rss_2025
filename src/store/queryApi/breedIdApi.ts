import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIKEY } from '../../veriables';
import { CatsDataType } from '../../types/types';
import { saveToLocalStorage } from '../../customhooks/localActions';

export const breedIdApi = createApi({
  reducerPath: 'breedIdApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', APIKEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCatsDataByBreed: builder.query<CatsDataType[], string>({
      query: (idValue) => `/images/search?limit=10&breed_ids=${idValue}`,
      transformResponse: (response: CatsDataType[]) => {
        saveToLocalStorage('data', response);
        return response;
      },
    }),
  }),
});

export const { useGetCatsDataByBreedQuery } = breedIdApi;
