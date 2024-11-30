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
    updateCard: builder.mutation({
      query: ({ id, question, response }) => ({
        url: `/cards/modify`,
        method: 'POST',
        body: { id, question: question, answer: response },
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
    deleteCard: builder.mutation({
      query: ({ cardId }) => ({
        url: `/cards/delete`,
        method: 'DELETE',
        body: { cardId },
      }),
    }),
  }),
});

export const {
  useGetAllCardByDeckIdQuery,
  useGetRandomCardByDeckIdQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} = cardApi;
