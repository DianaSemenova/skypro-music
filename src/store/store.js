import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/tracksSlice";
import tokenReducer from "./slices/tokenSlice";
import { tracksQuery } from "../servicesQuery/tracks";
import { tokenQuery } from "../servicesQuery/token";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    token: tokenReducer,
    [tracksQuery.reducerPath]: tracksQuery.reducer,
    [tokenQuery.reducerPath]: tokenQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tracksQuery.middleware),
});
