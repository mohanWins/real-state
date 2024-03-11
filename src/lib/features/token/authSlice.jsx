"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const authTokenSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    getData: (state, action) => {
      console.log(state, "state");
      state.token = action.payload;
    },
  },
});

export const { getData } = authTokenSlice.actions;

export default authTokenSlice.reducer;
