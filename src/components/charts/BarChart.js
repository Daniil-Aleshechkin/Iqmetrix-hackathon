import React from "react";
import { Card, CardBody } from "shards-react";
import { CChart } from "@coreui/react-chartjs/es/CChart";
import BarChartHeader from "./BarChartHeader";
const BarChart = ({ data, labels, mode }) => {
  const formatMode = { stock: "Stock" };

  const bar = {
    labels,
    datasets: [
      {
        label: formatMode[mode],
        backgroundColor: "rgba(255,99,132,1)",
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data
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
        {console.log(data, labels)}
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
