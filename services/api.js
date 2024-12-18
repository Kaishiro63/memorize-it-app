import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout } from '../store/userSlice';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: async (args, api, extraOptions) => {
        const baseQuery = fetchBaseQuery({
            baseUrl: process.env.EXPO_PUBLIC_API_URL,
            prepareHeaders: (headers, { getState }) => {
                const token = getState().user.token;
                if (token) {
                    headers.set('authorization', `Bearer ${token}`);
                }
                return headers;
            },
        });

        const result = await baseQuery(args, api, extraOptions);

        if (result.error) {
            if (result.error.status === 401 || result.error.status === 403) {
                api.dispatch(logout());
            }
        }
        return result;
    },
    endpoints: (builder) => ({}),
});
