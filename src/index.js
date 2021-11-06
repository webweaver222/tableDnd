import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";

import "./resources/reset.scss";
import "./resources/main.scss";

import ErrorBoundry from "./components/error-boundry";

import App from "./components/app";

import store from "./store";

//console.log(service);

ReactDom.render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
