import { api } from './api';

export const explorerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getExplorerDecks: builder.query({
      query: () => ({
        url: '/explorer/all',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetExplorerDecksQuery } = explorerApi;
