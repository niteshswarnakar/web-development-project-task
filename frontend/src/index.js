import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DarkContextProvider } from "./store/DarkContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkContextProvider>
      <App />
    </DarkContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
