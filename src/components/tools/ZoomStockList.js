import React, { Component } from "react";
import ZoomStockItem from "./ZoomStockItem";
class ZoomStockList extends Component {
  constructor(props) {
    super(props);
    let stocks = props.stocks.map(stock => {
      return { name: stock.name, region: stock.region, selected: false };
    });
    stocks.unshift({
      name: "all",
      region: "all",
      selected: true,
      isTotal: true
    });
    this.state = {
      stocks
    };
    console.log(props.onSelectStock);
    this.onSelectStock = props.onSelectStock;
  }
  getSelected = () => {
    return this.state.selected;
  };
  onSelect = stock => {
    let stocks = [...this.state.stocks];

    let selectedStock = stocks.find(stock => stock.selected === true);
    stocks[stocks.indexOf(selectedStock)] = {
      ...selectedStock,
      selected: false
    };
    let name = stock.name;
    let region = stock.region;
    this.onSelectStock({ name, region });
    stocks[stocks.indexOf(stock)] = { ...stock, selected: true };
    this.setState({ stocks });
  };
  render() {
    return (
      <table className="table table-sm table-hover table-bordered p-1">
        <tbody>
          {this.state.stocks.map(stock => {
            return (
              <ZoomStockItem
                key={`${stock.name} ${stock.selected}`}
                stock={stock}
                onSelect={this.onSelect}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ZoomStockList;
