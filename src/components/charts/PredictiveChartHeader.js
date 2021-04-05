import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardHeader
} from "shards-react";

class PredictiveChartHeader extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onPredictionUpdate = props.onPredictionUpdate;
    this.state = { open: false };
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
          <DropdownToggle theme="dark">Parameter</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                this.onPredictionUpdate("sales");
              }}
            >
              Sales
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.onPredictionUpdate("customer");
              }}
            >
              Customers
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.onPredictionUpdate("revenue");
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

export default PredictiveChartHeader;
