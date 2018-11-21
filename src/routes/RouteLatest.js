// @flow
import * as React from "react";
import { connect } from "react-redux";

import * as Product from "../components/Product";
import ProductList from "../components/ProductList";
import Loader from "../components/Loader";
import { fetchProducts } from "../store/products/actions";
import * as selectors from "../store/products/selectors";

type Props = {
  products: Array<Product>,
  isLoading: boolean,
  errors?: any,
  fetchProducts: () => void
};

class Latest extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    if (this.props.isLoading) {
      return <Loader size="large" />;
    } else if (this.props.errors) {
      return "There was some sort of error.";
    }

    return <ProductList products={this.props.products} />;
  }
}

const mapStateToProps = state => {
  return {
    products: selectors.getProducts(state),
    isLoading: selectors.getIsLoading(state),
    errors: selectors.getErrors(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts())
});

export const RouteLatest = connect(
  mapStateToProps,
  mapDispatchToProps
)(Latest);
