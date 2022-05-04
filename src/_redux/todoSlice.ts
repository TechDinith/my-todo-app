import { createSlice } from "@reduxjs/toolkit";
//still a template,not the actal one
export interface TodoState {
  id: number;
  content: string;
}

const initialState: TodoState = {
  id: 1,
  content: "just a something we do",
};

export const counterSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    showIdRed: (state) => {
      state.id;
    },
  },
});

export const { showIdRed } = counterSlice.actions;

export default counterSlice.reducer;
