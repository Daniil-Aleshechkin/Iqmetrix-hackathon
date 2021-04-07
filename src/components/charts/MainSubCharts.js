import React, { Component } from "react";
import BarChart from "./BarChart";
import CovidChart from "./CovidChart";
import PredictiveChart from "./PredictiveChart";

import { DateTime } from "luxon";

import { Col, Row } from "shards-react";

class MainSubCharts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modes: {
        bar: "stock",
        covid: "cases",
        covidCompare: "stock",
        prediction: "sales"
      },
      selectedProduct: props.selectedProduct,
      chartData: {
        retailData: props.getRetailData.stock(),
        covidCompareData: props.getRetailData.stock(),
        covidData: props.getCovidData.cases(),
        predictionData: props.getPredictionData.sales()
      }
    };
    this.getCovidData = props.getCovidData;
    this.getPredictionData = props.getPredictionData;
    this.getRetailData = props.getRetailData;
  }
  onModeUpdate = {
    onRetailUpdate: mode => {
      this.setState({
        modes: { ...this.state.modes, bar: mode },
        chartData: {
          ...this.state.chartData,
          retailData: this.getRetailData[mode]()
        }
      });
    },
    onCovidUpdate: mode => {
      console.log(mode, this.getCovidData[mode]());
      this.setState({
        modes: { ...this.state.modes, covid: mode },
        chartData: {
          ...this.state.chartData,
          covidData: this.getCovidData[mode]()
        }
      });
    },

    onCovidCompareUpdate: mode => {
      this.setState({
        modes: { ...this.state.modes, covidCompare: mode },
        chartData: {
          ...this.state.chartData,
          covidCompareData: this.getRetailData[mode]()
        }
      });
    },
    onPredictionUpdate: mode => {
      this.setState({
        modes: { ...this.state.modes, prediction: mode },
        chartData: {
          ...this.state.chartData,
          predictionData: this.getPredictionData[mode]()
        }
      });
    }
  };
  render() {
    return (
      <Row>
        <Col sm="12" lg="4" className="mb-4">
          <BarChart
            key={`retail ${this.state.modes.bar}`}
            labels={Object.keys(this.state.chartData.retailData.data).map(
              date => {
                return DateTime.fromISO(date).toFormat("d' 'LLL");
              }
            )}
            data={Object.values(this.state.chartData.retailData.data)}
            mode={this.state.modes.bar}
            onRetailUpdate={this.onModeUpdate.onRetailUpdate}
          />
        </Col>
        <Col sm="12" lg="4" className="mb-4">
          <CovidChart
            key={`covid ${this.state.selectedProduct} ${this.state.modes.covid} ${this.state.modes.covidCompare}`}
            labels={Object.keys(this.state.chartData.covidData.data).map(
              date => {
                return DateTime.fromISO(date).toFormat("d' 'LLL");
              }
            )}
            data={Object.values(this.state.chartData.covidCompareData.data)}
            covidData={Object.values(this.state.chartData.covidData.data)}
            mode={this.state.modes.covidCompare}
            product={this.state.selectedProduct}
            covidMode={this.state.modes.covid}
            onCovidUpdate={this.onModeUpdate.onCovidUpdate}
            onCovidCompareUpdate={this.onModeUpdate.onCovidCompareUpdate}
          />
        </Col>
        <Col sm="12" lg="4" className="mb-4">
          <PredictiveChart
            key={`prediction ${this.state.modes.prediction}`}
            labels={Object.keys(this.state.chartData.predictionData.data).map(
              date => {
                return DateTime.fromISO(date).toFormat("d' 'LLL");
              }
            )}
            data={Object.values(this.state.chartData.predictionData.data)}
            mode={this.state.modes.prediction}
            onPredictionUpdate={this.onModeUpdate.onPredictionUpdate}
          />
        </Col>
      </Row>
    );
  }
}

export default MainSubCharts;
