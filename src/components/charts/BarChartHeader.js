import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardHeader
} from "shards-react";

class BarChartHeader extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
    this.onRetailUpdate = props.onRetailUpdate;
  }
  toggle() {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }
  render() {
    return (
      <CardHeader>
        <Dropdown open={this.state.open} toggle={this.toggle}>
          <DropdownToggle>Parameter</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                this.onRetailUpdate("stock");
              }}
            >
              Stock
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.onRetailUpdate("sales");
              }}
            >
              Sales
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.onRetailUpdate("customer");
              }}
            >
              Customers
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.onRetailUpdate("revenue");
              }}
            >
              Revenue
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
    );
  }
}

export default BarChartHeader;
