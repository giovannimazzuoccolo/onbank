import { createSlice, createAction } from "@reduxjs/toolkit";

const userPrefersDark = window?.matchMedia("(prefers-color-scheme: dark)")
  .matches;

export const switchDarkMode = createAction<string>("switchDarkMode");

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState: userPrefersDark ? "DARK" : "LIGHT",
  reducers: {
    toogleColorScheme(state) {
      console.log("state", state);
      return state === "DARK" ? "LIGHT" : "DARK";
    },
  },
});

export const { toogleColorScheme } = darkModeSlice.actions;

export default darkModeSlice.reducer;
