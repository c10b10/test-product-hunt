// @flow
import { createSelector } from "reselect";

import type { ApplicationState } from "../types";
import type { ProductData } from "./types";

export const getIsLoading = (state: ApplicationState): boolean =>
  state.products.isLoading;
export const getErrors = (state: ApplicationState): boolean =>
  state.products.errors;
export const getProductResult = (state: ApplicationState): Array<string> =>
  state.products.data.result;
export const getProductEntities = (
  state: ApplicationState
): { [string]: ProductData } => state.products.data.entities.products;

export const getProducts: Array<ProductData> = createSelector(
  [getProductEntities, getProductResult],
  (entities, result) => result.map(id => entities[id])
);
