import { api } from './api'

export const deckApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllDecks: builder.query({
            query: () => ({
                url: '/decks',
                method: 'GET',
            }),
        }),
        createDeck: builder.mutation({
            query: ({ title, categoryId }) => ({
                url: '/decks',
                method: 'POST',
                body: { title, categoryId },
            }),
        }),
        getAllCategories: builder.query({
            query: () => ({
                url: '/categories',
                method: 'GET',
            }),
        }),
    })
})

export const { useGetAllDecksQuery, useCreateDeckMutation, useGetAllCategoriesQuery } = deckApi