import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "Hamza",
  RollNo: 84,
  Section: "A",
};
const slice = createSlice({
  name: "rice",
  initialState,
  reducers: {
    addName: (state, action) => {
      state.name = action.payload;
    },
  },
});
export default slice.reducer;
export const { addName } = slice.actions;
