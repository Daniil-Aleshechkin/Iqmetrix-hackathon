import React, { Component } from "react";
import { Card, CardBody } from "shards-react";

import Chart from "../../utils/chart";

import PredictiveChartHeader from "./PredictiveChartHeader";
class PredictiveChart extends Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    const chartOptions = {
      ...{
        responsive: true,
        legend: {
          position: "top"
        },
        elements: {
          line: {
            // A higher value makes the line look skewed at this ratio.
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
      },
      ...this.props.chartOptions
    };

    const BlogUsersOverview = new Chart(this.canvasRef.current, {
      type: "LineWithLine",
      data: this.props.chartData,
      options: chartOptions
    });

    // They can still be triggered on hover.
    const buoMeta = BlogUsersOverview.getDatasetMeta(0);
    buoMeta.data[0]._model.radius = 0;
    buoMeta.data[
      this.props.chartData.datasets[0].data.length - 1
    ]._model.radius = 0;

    // Render the chart.
    BlogUsersOverview.render();
  }
  render() {
    return (
      <Card>
        <PredictiveChartHeader />
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
PredictiveChart.defaultProps = {
  title: "Users Overview",
  chartData: {
    labels: (() => {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      const thisMonth = new Date().getMonth();
      var nextMonths = [];

      for (var i = 0; i < 5; i++) {
        nextMonths.push(months[(i + thisMonth) % 12]);
      }
      console.log(nextMonths);
      return nextMonths;
    })(),
    datasets: [
      {
        label: "Sales Prediction",
        fill: "start",
        data: [123, 354, 564, 765, 900],
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      }
    ]
  }
};

export default PredictiveChart;
