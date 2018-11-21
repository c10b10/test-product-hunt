import * as t from "./actionTypes";
import { ApiActions } from "../types";

export const fetchProductsApiActions: ApiActions<NormalizedResult> = {
  request: (apiParams, nextPageUrl) => ({
    type: t.FETCH_REQUEST,
    meta: { apiParams, nextPageUrl }
  }),
  success: (result, meta) => ({
    type: t.FETCH_SUCCESS,
    payload: result,
    meta
  }),
  error: error => ({ type: t.FETCH_ERROR, payload: error, error: true })
};

export function fetchProducts(
  apiParams: CardsRESTApiParams = {},
  nextPageUrl: string = ""
): PayloadAction<Object> {
  return {
    type: t.GET_PRODUCTS,
    payload: {
      apiParams: {
        ...apiParams
      },
      nextPageUrl
    }
  };
}
