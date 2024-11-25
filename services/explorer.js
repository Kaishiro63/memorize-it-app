import { api } from './api';

export const explorerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getExplorerDecks: builder.query({
      query: () => ({
        url: '/explorer/all',
        method: 'GET',
      }),
    }),
    getExplorerDecksByCategory: builder.query({
      query: (categoryId) => ({
        url: `/explorer/all/${categoryId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetExplorerDecksQuery,
  useGetExplorerDecksByCategoryQuery,
  useLazyGetExplorerDecksQuery,
} = explorerApi;
