import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Login from "./views/login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
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
