// @flow
import * as React from "react";

import * as Product from "./Product";
import type { ProductData } from "../store/products/types";

type Props = {
  products: Array<ProductData>
};

export default function ProductList({ products }: Props) {
  return (
    <Product.List>
      {products.map((product, index) => (
        <Product.Item key={index} data={product} />
      ))}
    </Product.List>
  );
}
