import React, { Component } from "react";
import { Card, CardBody } from "shards-react";

import Chart from "../../utils/chart";

import PredictiveChartHeader from "./PredictiveChartHeader";
class PredictiveChart extends Component {
  constructor(props) {
    super(props);
    this.labels = props.labels;
    this.data = props.data;
    this.mode = props.mode;
    this.onPredictionUpdate = props.onPredictionUpdate;
    this.canvasRef = React.createRef();
  }
  formatMode = { sales: "Sales", customer: "Customers", revenue: "Revenue" };
  componentDidMount() {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                callback(tick, index) {
                  // Jump every 7 values on the X axis labels to avoid clutter.
                  return index % 1 !== 0 ? "" : tick;
                }
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                suggestedMax: 45,
                callback(tick) {
                  if (tick === 0) {
                    return tick;
                  }
                  // Format the amounts using Ks for thousands.
                  return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
                }
              }
            }
          ]
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        tooltips: {
          custom: false,
          mode: "nearest",
          intersect: false
        }
      }
    };
    const chartData = {
      labels: this.labels,
      datasets: [
        {
          label: `${this.formatMode[this.mode]} Prediction`,
          fill: "start",
          data: this.data,
          backgroundColor: "rgba(0,123,255,0.1)",
          borderColor: "rgba(0,123,255,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgb(0,123,255)",
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3
        }
      ]
    };
    const BlogUsersOverview = new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: chartData,
      options: chartOptions
    });

    // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[chartData.datasets[0].data.length - 1]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
  }
  render() {
    return (
      <Card>
        <PredictiveChartHeader onPredictionUpdate={this.onPredictionUpdate} />
        <CardBody>
          <canvas
            ref={this.canvasRef}
            style={{ maxWidth: "100% !important" }}
          />
        </CardBody>
      </Card>
    );
  }
}
export default PredictiveChart;
