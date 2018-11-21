// @flow
import * as t from "./actionTypes";
import type { ProductsState } from "./types";
import type { PayloadAction } from "../types";

const initialState: ProductsState = {
  data: {
    entities: {},
    result: []
  },
  errors: undefined,
  isLoading: false
};

const reducer = (
  state: ProductsState = initialState,
  action: PayloadAction<Object>
) => {
  switch (action.type) {
    case t.FETCH_REQUEST:
      return { ...state, isLoading: true };

    case t.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    case t.FETCH_ERROR:
      return { ...state, isLoading: false, errors: action.payload };

    default:
      return state;
  }
};

export { reducer as productsReducer };
