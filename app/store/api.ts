
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/",
    }),
    tagTypes: ['cards'],
    endpoints: (builder) => ({
        getCards: builder.query({
            query: () => ({ url: "/cards", method: "GET" }),
            providesTags: ['cards']
        })
    }),
});

export const { useGetCardsQuery } = api;
