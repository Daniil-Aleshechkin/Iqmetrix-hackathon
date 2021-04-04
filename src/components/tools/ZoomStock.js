import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "shards-react";
class ZoomStock extends Component {
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
      <div className="p-1 table-bordered text-center">
        <h4>Zoom to Stock</h4>
        <Dropdown open={this.state.open} toggle={this.toggle}>
          <DropdownToggle>All Regions</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Stock</DropdownItem>
            <DropdownItem>Sales</DropdownItem>
            <DropdownItem>Customers</DropdownItem>
            <DropdownItem>Revenue</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ZoomStock;
