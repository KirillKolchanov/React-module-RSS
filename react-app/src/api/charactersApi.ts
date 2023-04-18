import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharacter } from '../models';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (builder) => ({
    searchCharacters: builder.query<{ results: ICharacter[] }, string>({
      query: (name) => `character?name=${name}`,
    }),
    characterDetails: builder.query<{ results: ICharacter[] }, string>({
      query: (name) => `character?name=${name}`,
    }),
  }),
});
