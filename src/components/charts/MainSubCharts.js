import React, { Component } from "react";
import BarChart from "./BarChart";
import CovidChart from "./CovidChart";
import PredictiveChart from "./PredictiveChart";

import { Col, Row } from "shards-react";

class MainSubCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modes: { bar: "stock", covid: "cases", prediction: "sales" },
      getCovidData: props.getCovidData,
      getPredictionData: props.getPredictionData,
      getRetailData: props.getRetailData,

      chartData: {
        retailData: props.getRetailData.stock(),
        covidData: props.getCovidData.cases(),
        predictionData: props.getPredictionData.sales()
      }
    };
  }
  render() {
    return (
      <Row>
        <Col sm="12" lg="4" className="mb-4">
          <BarChart
            labels={Object.keys(this.state.chartData.retailData.data)}
            data={Object.values(this.state.chartData.retailData.data)}
            mode={this.state.modes.bar}
          />
        </Col>
        <Col sm="12" lg="4" className="mb-4">
          <CovidChart
            labels={Object.keys(this.state.chartData.covidData.data)}
            data={Object.values(this.state.chartData.covidData.data)}
            mode={this.state.modes.covid}
          />
        </Col>
        <Col sm="12" lg="4" className="mb-4">
          <PredictiveChart
            labels={Object.keys(this.state.chartData.predictionData.data)}
            data={Object.values(this.state.chartData.predictionData.data)}
            mode={this.state.modes.prediction}
          />
        </Col>
      </Row>
    );
  }
}

export default MainSubCharts;
