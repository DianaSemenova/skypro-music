import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setToken } from "../store/slices/tokenSlice";

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://skypro-music-api.skyeng.tech",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.accessToken;

      console.log("accessToken", token);

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status !== 401) {
    return result;
  }
  const logOut = () => {
    localStorage.removeItem("user");
    window.location.navigate("/auth");
  };

  const { tokenReducer } = api.getState();

  if (!tokenReducer.refreshToken) {
    return logOut();
  }

  const refreshToken = await baseQuery(
    {
      url: "user/token/refresh/",
      method: "POST",
      body: {
        refresh: tokenReducer.refreshToken,
      },
    },
    api,
    extraOptions
  );

  if (!refreshToken.data.access) {
    return logOut();
  }

  api.dispatch(
    setToken({
      accessToken: refreshToken.data.access,
      refreshToken: tokenReducer.refreshToken,
    })
  );

  const retryResult = await baseQuery(args, api, extraOptions);

  if (retryResult?.error?.status === 401) {
    return logOut();
  }
  return retryResult;
};

export const tracksQuery = createApi({
  reducerPath: "tracksQuery",
  tagTypes: ["Tracks", "Favorites"],
  baseQuery: baseQueryWithReauth,
 
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

    setLike: build.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: [
        { type: "Favorites", id: "LIST" },
        { type: "Tracks", id: "LIST" },
      ],
    }),

    setDislike: build.mutation({
      query: (track) => ({
        url: `catalog/track/${track.id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "Favorites", id: "LIST" },
        { type: "Tracks", id: "LIST" },
      ],
    }),

    // accessTokenUser: build.mutation({
    //   query: (body) => ({
    //     url: "user/token/",
    //     method: "POST",
    //     body,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     invalidatesTags: [{ type: "Tracks", id: "LIST" }],
    //   }),
    // }),
    // refreshTokenUser: build.mutation({
    //   query: (body) => ({
    //     url: "user/token/refresh/",
    //     method: "POST",
    //     body,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     invalidatesTags: [{ type: "Tracks", id: "LIST" }],
    //   }),
    // }),
  }),
});

export const {
  useGetTracksAllQuery,
  useGetFavouriteTracksAllQuery,
  useSetLikeMutation, 
  useSetDislikeMutation
} = tracksQuery;
