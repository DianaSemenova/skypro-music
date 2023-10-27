import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/tracksSlice";
import tokenReducer from "./slices/tokenSlice";
import { apiQuery } from "../servicesQuery/api";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    token: tokenReducer,
    [apiQuery.reducerPath]: apiQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiQuery.middleware),
});
