import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./slices/tracksSlice";
import { tracksApi } from "../servicesQuery/tracksApi";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    [tracksApi.reducerPath]: tracksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tracksApi.middleware),
});
