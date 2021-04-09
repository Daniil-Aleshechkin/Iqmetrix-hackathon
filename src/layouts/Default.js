import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

import BlogOverview from "../views/BlogOverview";

import { DateTime } from "luxon";

class DefaultLayout extends Component {
  state = {
    selectedProduct: "total",
    selectedStock: { name: "all", region: "all" },
    selectedlayer: "all",
    startDate: "2021-03-05T06:00:00.000Z"
  };
  setProduct = selectedProduct => this.setState({ selectedProduct });
  setStock = selectedStock => this.setState({ selectedStock });
  setLayer = selectedlayer => this.setState({ selectedlayer });
  getData = mode => {
    const responseLabels = Array.from(new Array(30), (_, i) =>
      DateTime.fromISO(
        `2021-03-${
          i + 1 < 10 ? "0" + (i + 1).toString() : (i + 1).toString()
        }T01:35:22.327Z`
      )
    );
    const responseValues = Array.from(
      new Array(30),
      () => Math.random() * 1000
    );

    var data = {};
    responseLabels.forEach((label, i) => {
      data[label] = responseValues[i];
    });

    return { data };
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <MainSidebar
            selectedProduct={this.state.selectedProduct}
            selectProduct={this.setProduct}
            selectStock={this.setStock}
            getData={this.getData}
          />
          <Col
            className="main-content p-0"
            lg={{ size: 10, offset: 2 }}
            md={{ size: 9, offset: 3 }}
            sm="12"
            tag="main"
          >
            {
              <MainNavbar
                product={this.state.selectedProduct}
                stock={this.state.selectedStock}
                layer={this.state.selectedStock}
              />
            }
            <BlogOverview
              getData={this.getData}
              key={`${this.state.selectedProduct} ${this.state.selectedStock.region}`}
              selectedProduct={this.state.selectedProduct}
              selectStock={this.state.selectedStock}
              selectedStock={this.state.selectedStock}
              selectedlayer={this.state.selectedlayer}
            />
            {<MainFooter />}
          </Col>
        </Row>
      </Container>
    );
  }
}

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
