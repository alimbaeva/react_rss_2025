import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIKEY, URLAPI, URLAPI_SEARCH } from '~/veriables'
import type { CatsDataType } from '~/types/types'

export const breedIdApi = createApi({
  reducerPath: 'breedIdApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URLAPI,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', APIKEY)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getCatsDataByBreed: builder.query<CatsDataType[], string>({
      query: (idValue) => `${URLAPI_SEARCH}${idValue}`,
      transformResponse: (response: CatsDataType[]) => {
        return response
      },
    }),
  }),
})

export const { useGetCatsDataByBreedQuery } = breedIdApi
