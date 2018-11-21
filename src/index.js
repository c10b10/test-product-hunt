// @flow
import "babel-polyfill"; // Needed so that Promises work in fetch
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Normalize as NormalizeStyle } from "styled-normalize";
import { applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import { Routes } from "./routes";
import { GlobalStyle } from "./theme/globalStyle";

import { configureStore, rootSaga } from "./store";

const sagaMiddleware = createSagaMiddleware();
let store = configureStore([applyMiddleware(sagaMiddleware)]);
sagaMiddleware.run(rootSaga);

const rootElement = document && document.getElementById("root");
if (rootElement) {
  ReactDOM.render(
    <Provider store={store}>
      <>
        <NormalizeStyle />
        <GlobalStyle />
        <Routes />
      </>
    </Provider>,
    rootElement
  );
}
