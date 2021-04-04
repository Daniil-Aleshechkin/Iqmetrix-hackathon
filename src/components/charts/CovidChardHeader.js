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
          <DropdownToggle>Parameter</DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                this.onCovidUpdate("cases");
              }}
            >
              Cases
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          className="float-right"
          open={this.state.openCovidItem}
          toggle={this.toggleCovid}
        >
          <DropdownToggle>Covid Item</DropdownToggle>
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

export default CovidChartHeader;
