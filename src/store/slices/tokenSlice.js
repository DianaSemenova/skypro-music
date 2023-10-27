import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
};

export const tokenSlice = createSlice({
  name: "tokenReducer",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const { accessToken, refreshToken } = action.payload;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
  
    },

  },
});

export const { setToken} = tokenSlice.actions;

export default tokenSlice.reducer;
