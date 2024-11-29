import { api } from './api';

export const explorerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getExplorerDecksByCategory: builder.query({
      query: ({ categoryId } = {}) => ({
        url: `/explorer/all${categoryId ? `/${categoryId}` : ''}`,
        method: 'GET',
      }),
    }),
    getExplorerDecksId: builder.query({
      query: ({ deckId } = {}) => ({
        url: `/explorer/decks/${deckId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLazyGetExplorerDecksByCategoryQuery, useGetExplorerDecksIdQuery } = explorerApi;
