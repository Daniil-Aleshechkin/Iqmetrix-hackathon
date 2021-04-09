import React from "react";
import { Nav, Row, Col } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

import TotalTable from "./../../../components/tools/TotalTable";
import ZoomStock from "./../../../components/tools/ZoomStock";
import MapLayers from "./../../../components/tools/MapLayers";

import Product from "./../../../components/tools/Product";
import General from "../../tools/General";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: Store.getSidebarItems()
    };
    this.selectProduct = props.selectProduct;
    this.selectedProduct = props.selectedProduct;
    this.selectStock = props.selectStock;
    this.getData = props.getData;
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
          <General/>
          <MapLayers />
          <ZoomStock selectStock={this.selectStock} />
          <Product selectProduct={this.selectProduct} />
          <TotalTable key={this.state.selectedProduct} getData={this.getData} />
        </Nav>
      </div>
    );
  }
}

export default SidebarNavItems;
