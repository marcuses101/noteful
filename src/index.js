import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import STORE from './STORE'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App store={STORE}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
