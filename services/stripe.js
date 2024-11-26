import { api } from './api';

export const explorerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    checkoutDeck: builder.mutation({
      query: ({ deckId }) => ({
        url: '/explorer/checkout',
        method: 'POST',
        body: { deckId },
      }),
    }),
    stripeKey: builder.query({
      query: () => ({
        url: '/stripe-key',
        method: 'GET',
      }),
    }),
  }),
});

export const { useCheckoutDeckMutation, useStripeKeyQuery } = explorerApi;
