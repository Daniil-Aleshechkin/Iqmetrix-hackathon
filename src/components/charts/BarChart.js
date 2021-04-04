import React from "react";
import { Card, CardBody } from "shards-react";
import { CChart } from "@coreui/react-chartjs/es/CChart";
import BarChartHeader from "./BarChartHeader";
const BarChart = () => {
  const bar = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Stock",
        backgroundColor: "rgba(255,99,132,1)",
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  const options = {
    tooltips: {
      enabled: false
    },
    maintainAspectRatio: true
  };
  return (
    <Card>
      <BarChartHeader />
      <CardBody>
        <div className="chart-wraper">
          <CChart
            type="bar"
            datasets={bar.datasets}
            options={options}
            labels="months"
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default BarChart;
