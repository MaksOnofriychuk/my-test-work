import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { store } from "./store/reducer";

const Global = createGlobalStyle`
* {
   padding: 0;
   margin: 0;
   box-sizing: border-box;
   font-family: 'Open Sans', sans-serif;
   font-weight: 400;
   font-size: 12px;
}
body {
   height: 100%;
   background-color: #f3f7fa;
}
`;

const theme = {
  colors: {
    blue: "#2196F3",
    darkGrey: "#4A4A4A",
  },
  media: {
    phoneMedium: "(max-width: 555px)",
    phone: "(max-width: 425px)", 
    phoneSmall: "(max-width: 350px)",
    tablet: "(max-width: 780px)",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
