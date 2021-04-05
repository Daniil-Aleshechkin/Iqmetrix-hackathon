import React, { Component } from "react";
import { Card, CardBody } from "shards-react";
import { CChart } from "@coreui/react-chartjs/es/CChart";
import BarChartHeader from "./BarChartHeader";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.labels = props.labels;
    this.data = props.data;
    this.mode = props.mode;
    this.formatMode = {
      stock: "Stock",
      sales: "Sales",
      customer: "Customers",
      revenue: "Revenue"
    };
    this.onRetailUpdate = props.onRetailUpdate;
    this.bar = {
      labels: props.labels,
      datasets: [
        {
          label: this.formatMode[props.mode],
          backgroundColor: "rgba(255,99,132,1)",
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: props.data
        }
      ]
    };
  }
  options = {
    tooltips: {
      enabled: true
    },
    maintainAspectRatio: true
  };
  render() {
    return (
      <Card>
        <BarChartHeader onRetailUpdate={this.onRetailUpdate} />
        <CardBody>
          <div className="chart-wraper">
            <CChart
              type="bar"
              datasets={this.bar.datasets}
              options={this.options}
              labels={this.bar.labels}
            />
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default BarChart;
