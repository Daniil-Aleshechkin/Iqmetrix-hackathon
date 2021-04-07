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
        <Row>
          <Col className="w-auto flex-fill" sm="12" lg="4">
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
          </Col>
          <Col className="w-auto flex-fill" sm="12" lg="4">
            <p className="text-center">Predictions</p>
          </Col>
          <Col className="w-auto flex-fill" sm="12" lg="4"></Col>
        </Row>
      </CardHeader>
    );
  }
}

export default PredictiveChartHeader;
