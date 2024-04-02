import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postService = createApi({
  reducerPath: 'postService',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:3555' }),
  endpoints: (builder) => ({

    getAllPosts: builder.query({
      query: (body) => ({
        url: `/posts/parse`,
        method: 'POST',
        body: body,
        // params: { ...params }
      }),
    }),
  }),
})

export const { useLazyGetPostsQuery, useGetPostsQuery, useLazyGetAllPostsQuery, useGetAllPostsQuery } = postService
