import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Story {
    id: number;
    title: string;
    url?: string;
    by: string;
    score: number;
    time: number;
}

export const hackerNewsApi = createApi({
    reducerPath: 'hackerNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://hacker-news.firebaseio.com/v0/' }),
    endpoints: (builder) => ({
        getStoryIds: builder.query<number[], 'top' | 'new' | 'best'>({
            query: (type) => `${type}stories.json`,
        }),

        getItemById: builder.query<Story, number>({
            query: (id) => `item/${id}.json`,
        }),
    }),
});

export const getThumbnailUrl = (id: number, width = 150, height = 150) =>
    `https://picsum.photos/seed/${id}/${width}/${height}`;

export const { useGetStoryIdsQuery, useGetItemByIdQuery } = hackerNewsApi;
