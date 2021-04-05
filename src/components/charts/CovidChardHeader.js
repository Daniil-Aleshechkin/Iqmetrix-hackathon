import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardHeader
} from "shards-react";

class CovidChartHeader extends Component {
  constructor(props) {
    super(props);
    this.toggleParameter = this.toggleParameter.bind(this);
    this.toggleCovid = this.toggleCovid.bind(this);
    this.onCovidUpdate = props.onCovidUpdate;
    this.onCovidCompareUpdate = props.onCovidCompareUpdate;
    this.state = { openParameter: false, openCovidItem: false };
  }
  toggleParameter() {
    this.setState(prevState => {
      return { openParameter: !prevState.openParameter };
    });
  }
  toggleCovid() {
    this.setState(prevState => {
      return { openCovidItem: !prevState.openCovidItem };
    });
  }
  render() {
    return (
      <CardHeader>
        <Dropdown
          className="float-left"
          open={this.state.openParameter}
          toggle={this.toggleParameter}
        >
          <DropdownToggle theme="dark">Parameter</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                this.onCovidCompareUpdate("stock");
              }}
            >
              Stock
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.onCovidCompareUpdate("sales");
              }}
            >
              Sales
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.onCovidCompareUpdate("customer");
              }}
            >
              Customers
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.onCovidCompareUpdate("revenue");
              }}
            >
              Revenue
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          className="float-right"
          open={this.state.openCovidItem}
          toggle={this.toggleCovid}
        >
          <DropdownToggle theme="dark">Covid Item</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                this.onCovidUpdate("cases");
              }}
            >
              Cases
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.onCovidUpdate("deaths");
              }}
            >
              Deaths
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.onCovidUpdate("vacinations");
              }}
            >
              Vacinations
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
    );
  }
}

export default CovidChartHeader;
