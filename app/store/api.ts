
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CardsType } from "../lib/cards/types";
import { IconType } from "../lib/icons/types";
import { TitleDataType } from "../lib/title/types";

export const api = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: "/api/",
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

export const { useGetCardsQuery, useGetBlockInfoQuery, useGetIconsQuery, useLazyGetIconsQuery } = api;
