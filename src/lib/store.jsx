"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/token/authSlice";

export const store = configureStore({
  reducer: {
    counter: authReducer,
  },
});
