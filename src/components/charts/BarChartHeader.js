import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardHeader,
  Col,
  Row
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
        <Row>
          <Col sm="12" lg="4">
            <Dropdown open={this.state.open} toggle={this.toggle}>
              <DropdownToggle theme="dark">Parameter</DropdownToggle>
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
          </Col>
          <Col sm="12" lg="4">
            <p className="text-center">Totals</p>
          </Col>
          <Col sm="12" lg="4"></Col>
        </Row>
      </CardHeader>
    );
  }
}

export default BarChartHeader;
