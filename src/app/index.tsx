import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

import App from "./App";
import "./styles.css";

render(
  <AppProvider i18n={{}}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);
