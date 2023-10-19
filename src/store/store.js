import { configureStore } from "@reduxjs/toolkit";
import  tracksReducer  from './slices/tracksSlice'

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});

