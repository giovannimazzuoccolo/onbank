import React from "react";
import { createGlobalStyle } from "styled-components";
import Login from "./views/login";

import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./features/darkMode/darkMode.slice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: darkModeSlice,
});

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Login />
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`

	html, body, #root {
		width: 100%;
		height: 100%;
		font-family: Arial, Helvetica, sans-serif, sans-serif;

	}

	a {
		color: #00695c;
	}

`;
export default App;
