import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIKEY } from '../../veriables';
import { Breed, CatBreed } from '../../types/types';
import { saveToLocalStorage } from '../../customhooks/localActions';

export const breedsApi = createApi({
  reducerPath: 'breedsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-api-key', APIKEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query<{ data: CatBreed[]; breeds: Breed[] }, undefined>({
      query: () => '/breeds',
      transformResponse: (response: CatBreed[]) => {
        const breeds: Breed[] = response.map((el) => ({
          id: el.id,
          name: el.name,
        }));
        saveToLocalStorage('breedsValue', breeds);
        saveToLocalStorage('dataCats', response);

        return { data: response, breeds };
      },
    }),
  }),
});

export const { useGetBreedsQuery } = breedsApi;
