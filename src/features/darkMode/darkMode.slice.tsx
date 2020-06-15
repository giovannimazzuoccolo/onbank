import { createSlice } from "@reduxjs/toolkit";

const userPrefersDark = window?.matchMedia("(prefers-color-scheme: dark)")
  .matches;

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState: userPrefersDark ? "DARK" : "LIGHT",
  reducers: {
    toogleColorScheme(state, action) {
      state = action.payload;
    },
  },
});

export const { toogleColorScheme } = darkModeSlice.actions;

export default darkModeSlice.reducer;
