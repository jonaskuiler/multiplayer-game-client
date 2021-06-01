import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import preset from "@rebass/preset";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={preset}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
