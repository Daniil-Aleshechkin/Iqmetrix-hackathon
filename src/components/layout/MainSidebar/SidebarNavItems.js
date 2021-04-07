import React from "react";
import { Nav, Row, Col } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

import TotalTable from "./../../../components/tools/TotalTable";
import ZoomStock from "./../../../components/tools/ZoomStock";
import MapLayers from "./../../../components/tools/MapLayers";

import Product from "./../../../components/tools/Product";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: Store.getSidebarItems()
    };
    this.selectProduct = props.selectProduct;
    console.log(props.selectProduct);

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}{" "}
          <ZoomStock />
          <MapLayers />
          <Product selectProduct={this.selectProduct} />
          <TotalTable />
        </Nav>
      </div>
    );
  }
}

export default SidebarNavItems;
