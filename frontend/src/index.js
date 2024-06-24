import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Provider } from "react-redux";
import {store,persistor} from "../src/redux/Store";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
