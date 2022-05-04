import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../_redux/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
