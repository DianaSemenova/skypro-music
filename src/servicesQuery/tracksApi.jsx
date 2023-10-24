import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tracksApi = createApi({
  reducerPath: "tracksAllApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech/",
  }),
  endpoints: (build) => ({
    getTracksAll: build.query({
      query: () => "catalog/track/all/",
    }),
  }),
});

export const { useGetTracksAllQuery } = tracksApi;
