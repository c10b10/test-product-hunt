// import { delay } from "redux-saga";
import { all, take, put, call, fork } from "redux-saga/effects";

import * as api from "../api";
import * as actions from "./actions";
import * as t from "./actionTypes";

export const fetchProducts = (
  apiParams: ProductsApiParams,
  nextPageUrl: string
) =>
  api.callApi(nextPageUrl || api.buildEndpoint("posts/all", apiParams), {
    schema: api.schemas.PRODUCTS
  });

function* sendApiRequest(entity: FetchActions, apiFn: any, param = []) {
  // Call request with the params
  yield put(entity.request.call(null, ...param));
  // Fetch the data with the api function
  const { result, meta, error } = yield call(apiFn, ...param);

  if (result) {
    yield put(entity.success(result, meta));
  } else {
    yield put(entity.error(error, meta));
  }
}

function* loadProducts({ apiParams, nextPageUrl }: any) {
  yield call(sendApiRequest, actions.fetchProductsApiActions, fetchProducts, [
    apiParams,
    nextPageUrl
  ]);
}

function* watchLoadProducts() {
  while (true) {
    const { payload } = yield take(t.GET_PRODUCTS);
    yield fork(loadProducts, payload);
  }
}

// function* watchLoadDecks() {
//   while (true) {
//     yield take(t.GET_CATEGORIES);
//     yield fork(loadDecks);
//   }
// }

export default function* productsSaga() {
  // TODO Why do these need to be forked?
  yield all([
    // fork(watchGetAccessToken),
    fork(watchLoadProducts)
  ]);
}
