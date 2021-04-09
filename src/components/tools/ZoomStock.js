import React, { Component } from "react";
import ZoomStockList from "./ZoomStockList";
import stockNames from "./../../data/Stocks";
import {Card, CardBody, Form} from "shards-react";

class ZoomStock extends Component {
  constructor(props) {
    super(props);
    this.state = { stocks: [] };
    this.selectStock = props.selectStock;
  }
  handleSearch = e => {
    let stockOptions = stockNames.filter(stock =>
      stock.name.match(new RegExp(e.target.value, "i"))
    );
    const stocks = this.sampleSize(stockOptions, 10);
    console.log(stocks);
    this.setState({ stocks });
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
        <CardBody>
          <Form className="add-new-post">
      <React.Fragment>
        <input
          placeholder="Search for a stock"
          onChange={this.handleSearch}
          type="text"
        />
        <ZoomStockList
          onSelectStock={this.selectStock}
          key={this.state.stocks}
          stocks={this.state.stocks}
        />
      </React.Fragment>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default ZoomStock;
