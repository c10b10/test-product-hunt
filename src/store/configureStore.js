// @flow
import { createStore, compose } from "redux";

import { reducer } from ".";
import type { ApplicationState } from ".";

export default function configureStore(enhancers: Array<any> = []) {
  return createStore(
    reducer,
    undefined,
    compose(
      ...enhancers,
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__({
            latency: 0
          })
        : f => f
    )
  );
}
