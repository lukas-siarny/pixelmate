import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./globalStyles/globalStyles.scss";

ReactDOM.render(
  <React.StrictMode>
    <div className="page-wrapper">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
