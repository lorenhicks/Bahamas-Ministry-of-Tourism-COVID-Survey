import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import App from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
