import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { APIKEY, URLAPI, URLAPI_SEARCH } from '../../veriables';
import { CatsDataType } from '../../types/types';
// import { saveToLocalStorage } from '../../customhooks/localActions';

export const breedIdApi = createApi({
  reducerPath: 'breedIdApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URLAPI,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', APIKEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCatsDataByBreed: builder.query<CatsDataType[], string>({
      query: (idValue) => `${URLAPI_SEARCH}${idValue}`,
      transformResponse: (response: CatsDataType[]) => {
        // saveToLocalStorage('data', response);
        return response;
      },
    }),
  }),
});

export const { useGetCatsDataByBreedQuery } = breedIdApi;
