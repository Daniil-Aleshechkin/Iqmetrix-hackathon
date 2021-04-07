import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    let products = props.products.map(product => {
      console.log(product);
      return { name: product, selected: false };
    });
    products.unshift({ name: "total", selected: true, isTotal: true });
    this.state = {
      products
    };
    console.log(props.onSelectProduct);
    this.onSelectProduct = props.onSelectProduct;
  }
  getSelected = () => {
    return this.state.selected;
  };
  onSelect = product => {
    let products = [...this.state.products];

    let selectedProduct = products.find(product => product.selected === true);
    console.log(products.indexOf(product));
    products[products.indexOf(selectedProduct)] = {
      ...selectedProduct,
      selected: false
    };
    this.onSelectProduct(product.name);
    products[products.indexOf(product)] = { ...product, selected: true };
    this.setState({ products });
  };
  render() {
    return (
      <table className="table table-sm table-hover table-bordered p-1">
        <tbody>
          {this.state.products.map(product => {
            return (
              <ProductItem
                key={`${product.name} ${product.selected}`}
                product={product}
                onSelect={this.onSelect}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ProductList;

ProductList.defaultProps = {
  products: Array.from(new Array(10), (_, i) => `Product ${i}`)
};
