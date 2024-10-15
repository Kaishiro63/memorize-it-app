import { api } from './api'

export const deckApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllDecks: builder.query({
            query: () => ({
                url: '/decks',
                method: 'GET',
            }),
        }),
    })
})

export const { useGetAllDecksQuery } = deckApi