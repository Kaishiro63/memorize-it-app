import { api } from './api'

export const cardApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllCardByDeckId: builder.query({
            query: ({ deckId }) => ({
                url: `/cards/${deckId}`,
                method: 'GET',
            }),
        }),
    })
})

export const { useGetAllCardByDeckIdQuery } = cardApi