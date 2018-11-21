// @flow
import type { ProductsState } from "./products/types";

export type ApplicationState = {
  products: ProductsState
};

export type Action = { type: string };
export type PayloadAction<P> = { type: string, payload: P };
export type MetaAction<M: Object> = { type: string, meta: M };
export type MetaPayloadAction<P> = { type: string, payload: P, meta: Object };
// P = That will be sent, OP = output payload
export type ApiActions<OP> = {
  request: (meta: any) => Action,
  success: (payload: OP) => PayloadAction<OP>,
  failure: (error: any) => PayloadAction<any>
};
export type ApiActionsWithPayload<P, OP> = {
  request: (payload: P, meta?: any) => PayloadAction<P>,
  success: (payload: OP) => PayloadAction<OP>,
  failure: (error: boolean) => PayloadAction<boolean>
};
