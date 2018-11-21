import { createStore, compose, combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";

// Reducers
import { productsReducer } from "./products/reducer";

// Sagas
import productsSaga from "./products/sagas";

export const rootReducer = combineReducers({
  products: productsReducer
});

export function* rootSaga() {
  yield all([fork(productsSaga)]);
}

export function configureStore(enhancers: Array<any> = []) {
  return createStore(
    rootReducer,
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
