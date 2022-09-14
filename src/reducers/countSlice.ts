import { createSlice } from "@reduxjs/toolkit";

const initialState: number = 0;
let nextCount = 0;

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    plusCount(state) {
      console.log("puls");
      return (state = ++nextCount);
    },
    minusCount(state) {
      return (state = --nextCount);
    },
  },
});

export const { plusCount, minusCount } = countSlice.actions;
export default countSlice.reducer;
