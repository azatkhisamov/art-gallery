import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Painting = {
  authorId: number;
  created: string;
  id: number;
  imgUrl: string;
  locationId: number;
  name: string;
};

type Query = {
  page: number;
  q: string;
};

export const apiSlice = createApi({
  reducerPath: 'paintingsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://test-front.framework.team/' }),
  endpoints: (builder) => ({
    getPaintings: builder.query<Painting, Query>({
      query: (params) =>
        `paintings?${params.page ? `_page=${params.page}` : '_page=1'}&_limit=6&${params.q ? `_q=${params.q}` : ''}`,
    }),
  }),
});

export const { useGetPaintingsQuery } = apiSlice;
