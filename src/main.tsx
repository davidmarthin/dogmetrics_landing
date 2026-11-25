import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nProvider, langFromPath } from "./i18n";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider lang={langFromPath(window.location.pathname)}>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
