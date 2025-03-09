import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { APIKEY, URLAPI } from '../../veriables'
import type { Breed, CatBreed } from '~/types/types'

export const breedsApi = createApi({
  reducerPath: 'breedsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: URLAPI,
    prepareHeaders: (headers) => {
      headers.set('x-api-key', APIKEY)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getBreeds: builder.query<{ data: CatBreed[]; breeds: Breed[] }, undefined>({
      query: () => '/breeds',
      transformResponse: (response: CatBreed[]) => {
        const breeds: Breed[] = response.map((el) => ({
          id: el.id,
          name: el.name,
        }))

        return { data: response, breeds }
      },
    }),
  }),
})

export const { useGetBreedsQuery } = breedsApi
