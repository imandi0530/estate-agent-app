import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/* Section: Application entry point and routing setup */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* Section: Client-side routing configuration */}
    <BrowserRouter basename="/estate-agent-app">
      <App />
    </BrowserRouter>

  </React.StrictMode>
);
