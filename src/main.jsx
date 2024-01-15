import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { IntlProviderWrapper } from "./locales/index.jsx";
import "./index.css";

import "@fontsource/outfit";
import "@fontsource/roboto";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IntlProviderWrapper>
      <App />
    </IntlProviderWrapper>
  </React.StrictMode>
);
