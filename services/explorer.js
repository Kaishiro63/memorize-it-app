import { api } from './api';

export const explorerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getExplorerDecksByCategory: builder.query({
      query: ({ categoryId } = {}) => ({
        url: `/explorer/all${categoryId ? `/${categoryId}` : ''}`,
        method: 'GET',
      }),
    }),

    checkoutDeck: builder.mutation({
      query: ({ deckId }) => ({
        url: '/explorer/checkout',
        method: 'POST',
        body: { deckId },
      }),
    }),
  }),
});

export const {
  useGetExplorerDecksQuery,
  useGetExplorerDecksByCategoryQuery,
  useLazyGetExplorerDecksQuery,
  useCheckoutDeckMutation,
} = explorerApi;
