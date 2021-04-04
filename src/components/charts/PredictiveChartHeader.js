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
          <DropdownToggle>Parameter</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Stock</DropdownItem>
            <DropdownItem>Sales</DropdownItem>
            <DropdownItem>Customers</DropdownItem>
            <DropdownItem>Revenue</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
    );
  }
}

export default PredictiveChartHeader;
