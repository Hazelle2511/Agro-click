import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import Firebase, {FirebaseContext} from "./Components/firebase/index.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(FirebaseContext.Provider, {
  value: new Firebase()
}, /* @__PURE__ */ React.createElement(App, null))), document.getElementById("root"));
