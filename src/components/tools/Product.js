import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
import names from "./../../data/ProductNames";
import { Card, CardBody, Col, Row, Form } from "shards-react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.selectProduct = props.selectProduct;
    console.log(props.selectProduct);
  }

  handleSearch = e => {
    let productOptions = names.filter(name =>
      name.match(new RegExp(e.target.value, "i"))
    );
    const products = this.sampleSize(productOptions, 10);
    this.setState({ products });
  };
  sampleSize = ([...arr], n = 1) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr.slice(0, n);
  };

  render() {
    return (
      <Card small className="mb-3">
        <CardBody className="border-bottom">
          <Form className="add-new-post">
            <React.Fragment>
              <ProductSearch onSearch={this.handleSearch} />
              <ProductList
                onSelectProduct={this.selectProduct}
                key={this.state.products}
                products={this.state.products}
              />
            </React.Fragment>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default Products;
