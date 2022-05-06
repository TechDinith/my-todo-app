import { createSlice } from "@reduxjs/toolkit";
//still a template,not the actal one

export interface iTodoState {
  id: number;
  content: string;
}

const initialState: iTodoState[] = [
  { id: 1, content: "buy some milk" },
  { id: 2, content: "play a game" },
];

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoRed: (state, payload) => {
      state = payload.payload;
    },
  },
});

export const { addTodoRed } = counterSlice.actions;

export default counterSlice.reducer;
