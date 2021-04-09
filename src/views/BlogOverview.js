import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";
import { DateTime } from "luxon";

import Map from "./../components/charts/Map";

import MainSubCharts from "./../components/charts/MainSubCharts";
import PageTitle from "./../components/common/PageTitle";

import "../assets/map.css";
import DateSlider from "../components/charts/DateSlider";

class BlogOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: props.selectedProduct,
      selectedStock: props.selectedStock,
      selectedlayer: props.selectedlayer
    };
    this.selectProct = props.selectProct;
    this.getData = props.getData;
  }

  render() {
    return (
      <Container fluid id={"allDatas"} className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-2">
          <PageTitle subtitle="" className="text-sm-left mb-1" />
        </Row>
        <Row>
          <div className="col">
            <div className="card card-small mb-4">
              <div className="card-body p-10 pb-3">
                <DateSlider />
                <div
                  id={"maps_MapAreaBorder0"}
                  className="ag-theme-alpine"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  {/*<Map getMapData={this.getMapData} />*/}
                </div>
              </div>
            </div>
          </div>
        </Row>

        {/*All charts under the map should be rendered here */}
        <MainSubCharts
          key={`${this.state.selectedProduct} ${this.state.selectedStock.region}`}
          getData={this.getData}
        />
      </Container>
    );
  }
}

export default BlogOverview;
