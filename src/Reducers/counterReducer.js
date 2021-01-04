import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    addByOne: (state) => {
      state.count++;
    },
    removeByOne: (state) => {
      state.count--;
    },
    emptyCounter: (state) => {
      state.count=0;
    },
    customAdd: (state,action) => {
      state.count+=action.payload;
    },
  },
});
export const { addByOne, removeByOne,emptyCounter,customAdd } = counterSlice.actions;
export default counterSlice.reducer;