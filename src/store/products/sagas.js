import { all, take, put, call, fork } from "redux-saga/effects";

import * as api from "../api";
import * as actions from "./actions";
import * as t from "./actionTypes";
import type { ProductsApiParams } from "./types";

export const fetchProducts = (apiParams: ProductsApiParams) =>
  api.callApi(api.buildEndpoint("posts/all", apiParams), {
    schema: api.schemas.PRODUCTS
  });

function* sendApiRequest(entity: any, apiFn: any, param = []) {
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

function* loadProducts({ apiParams }: any) {
  yield call(sendApiRequest, actions.fetchProductsApiActions, fetchProducts, [
    apiParams
  ]);
}

function* watchLoadProducts() {
  while (true) {
    const { payload } = yield take(t.GET_PRODUCTS);
    yield fork(loadProducts, payload);
  }
}

export default function* productsSaga() {
  yield all([fork(watchLoadProducts)]);
}
