import { api } from './api';

export const cardApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCardByDeckId: builder.query({
      query: ({ deckId }) => ({
        url: `/cards/${deckId}`,
        method: 'GET',
      }),
    }),
    getRandomCardByDeckId: builder.query({
      query: ({ deckId }) => ({
        url: `/game/random/${deckId}`,
        method: 'GET',
      }),
    }),
    createCard: builder.mutation({
      query: ({ question, response, deckId }) => ({
        url: `/cards`,
        method: 'POST',
        body: {
          question: question,
          answer: response,
          deckId: deckId,
        },
      }),
    }),
  }),
});

export const { useGetAllCardByDeckIdQuery, useGetRandomCardByDeckIdQuery, useCreateCardMutation } =
  cardApi;
