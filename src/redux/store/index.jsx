import { configureStore } from "@reduxjs/toolkit";
import tictacReducer from "./../slice/tictacSlice";

export const store = configureStore({
  reducer: tictacReducer,
});
