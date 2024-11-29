import { api } from './api';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
    base: builder.query({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
    }),
    me: builder.query({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
    }),
    register: builder.query({
      query: () => ({
        url: '/auth/register',
        method: 'GET',
      }),
    }),
  }),
});

export const { useLoginMutation, useBaseQuery, useLogoutMutation, useMeQuery, useRegisterQuery } =
  userApi;
