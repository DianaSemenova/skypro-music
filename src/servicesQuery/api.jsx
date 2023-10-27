import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiQuery = createApi({
  reducerPath: "tracksAllApi",
  tagTypes: ["Tracks"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
  }),
  endpoints: (build) => ({
    getTracksAll: build.query({
      query: () => "catalog/track/all/",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tracks", id })),
              { type: "Tracks", id: "LIST" },
            ]
          : [{ type: "Tracks", id: "LIST" }],
    }),
    getFavouriteTracksAll: build.query({
      query: () => "catalog/track/favorite/all/",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tracks", id })),
              { type: "Tracks", id: "LIST" },
            ]
          : [{ type: "Tracks", id: "LIST" }],
    }),
    accessTokenUser: build.mutation({
      query: (body) => ({
        url: "user/token/",
        method: "POST",
        body,
        headers: {
          "content-type": "application/json",
        },
        invalidatesTags: [{ type: "Tracks", id: "LIST" }],
      }),
    }),
    refreshTokenUser: build.mutation({
      query: (body) => ({
        url: "user/token/refresh/",
        method: "POST",
        body,
        headers: {
          "content-type": "application/json",
        },
        invalidatesTags: [{ type: "Tracks", id: "LIST" }],
      }),
    }),
  }),
});

export const {
  useGetTracksAllQuery,
  useGetFavouriteTracksAllQuery,
  useAccessTokenUserMutation,
  useRefreshTokenUserMutation,
} = apiQuery;
