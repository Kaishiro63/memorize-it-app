import { api } from './api';

export const explorerApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getExplorerDecksByCategory: builder.query({
      query: ({ categoryId } = {}) => ({
        url: `/explorer/all${categoryId ? `/${categoryId}` : ''}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useLazyGetExplorerDecksByCategoryQuery } = explorerApi;
