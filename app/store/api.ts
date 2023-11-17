
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CardsType, IconType, TitleDataType } from "../lib/data";

export const api = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api/",
    }),

    endpoints: (builder) => ({
        getCards: builder.query<CardsType, void>({
            query: () => ({ url: "/cards", method: "GET" }),
        }),

        getBlockInfo: builder.query<TitleDataType, void>({
            query: () => ({ url: "/block-info", method: "GET" }),
        }),

        getIcons: builder.query<IconType[], void>({
            query: () => ({ url: "/icons", method: "GET" }),
        })
    }),
});

export const { useGetCardsQuery, useGetBlockInfoQuery, useGetIconsQuery } = api;
