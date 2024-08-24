import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Painting = {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
};

export type Author = {
  id: string;
  name: string;
};

export type Location = {
  id: string;
  location: string;
};

type Query = {
  page: string;
  q: string;
};

export const apiSlice = createApi({
  reducerPath: 'paintingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: (builder) => ({
    getPaintings: builder.query<Painting[], Query>({
      query: (params) => {
        const page = params.page ? `_page=${params.page}` : '_page=1';
        const q = params.q ? `q=${params.q}` : '';
        return `paintings?${page}&_limit=6&${q}`;
      },
    }),
    getAuthor: builder.query<Author, number>({
      query: (authorId) => `authors/${authorId}`,
    }),
    getLocation: builder.query<Location, number>({
      query: (locationId) => `locations/${locationId}`,
    }),
  }),
});

export const { useGetPaintingsQuery, useGetAuthorQuery, useGetLocationQuery } =
  apiSlice;
