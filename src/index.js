import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import ErrorBoundry from "./components/ErrorBoundry";

import App from "./App";

import "./index.scss";

import store from "./store/configureStore";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundry>
        <App/>
      </ErrorBoundry>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);