import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PostModel } from './../models/post';

export const postAPI = createApi({
    reducerPath: "postAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
    tagTypes: ["Post"],
    endpoints: (build) => ({
        fetchPosts: build.query<PostModel[], number>({
            query: (limit = 5) => ({
                url: `/posts`,
                params: {
                    _limit: limit
                }
            }),
            providesTags: (result) => ["Post"]
        }),
        createPost: build.mutation<PostModel, PostModel>({
            query: (post) => ({
                url: `/posts`,
                method: 'POST',
                body: post
            }),
            invalidatesTags: ["Post"]
        }),
        updatePost: build.mutation<PostModel, PostModel>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post
            }),
            invalidatesTags: ["Post"]
        }),
        deletePost: build.mutation<PostModel, PostModel>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ["Post"]
        })
    }),
});