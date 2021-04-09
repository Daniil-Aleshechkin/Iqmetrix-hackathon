import React, {Component} from "react";

import {Card, CardBody} from "shards-react";

class TotalTable extends Component {
  constructor(props) {
    super(props);

    let salesData = Object.values(props.getData().data).slice(-2);
    let shipmentData = Object.values(props.getData().data).slice(-2);
    let revenueData = Object.values(props.getData().data).slice(-2);
    let customerData = Object.values(props.getData().data).slice(-2);
    this.sale = {
      count: Math.floor(salesData[0]),
      percentage: Math.round((salesData[0] - salesData[1]) / salesData[0])
    };
    this.ship = {
      count: Math.floor(shipmentData[0]),
      percentage: Math.round(
        (shipmentData[0] - shipmentData[1]) / shipmentData[0]
      )
    };
    this.revenue = {
      count: Math.floor(revenueData[0]),
      percentage: Math.round((revenueData[0] - revenueData[1]) / revenueData[0])
    };
    this.customer = {
      count: Math.floor(customerData[0]),
      percentage: Math.round(
        (customerData[0] - customerData[1]) / customerData[0]
      )
    };
  }

  formatPercentage = percentage => {
    if (percentage > 0) {
      return `${percentage}% ▲`;
    }
    return `${percentage}% ▼`;
  };
  formatColour = percentage => {
    if (percentage > 0) {
      return "success";
    }
    return "danger";
  };

  render() {
    return (
      <Card small className="mb-3">
        <CardBody>
            <table className="table table-sm table-hover table-bordered p-1">
              <thead>
              <tr>
                <th scope="col">Parameter</th>
                <th scope="col">Count</th>
                <th scope="col" className="text-right">
                  %
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                className={`table-${this.formatColour(this.sale.percentage)}`}>
                <th scope="row">Sale</th>
                <td>{this.sale.count}</td>
                <td className="text-right">
                  {this.formatPercentage(this.sale.percentage)}
                </td>
              </tr>
              <tr
                className={`table-${this.formatColour(this.ship.percentage)}`}>
                <th scope="row">Shipments</th>
                <td>{this.ship.count}</td>
                <td className="text-right">
                  {this.formatPercentage(this.ship.percentage)}
                </td>
              </tr>
              <tr
                className={`table-${this.formatColour(this.revenue.percentage)}`}>
                <th scope="row">Revenue</th>
                <td>{this.revenue.count}</td>
                <td className="text-right">
                  {this.formatPercentage(this.revenue.percentage)}
                </td>
              </tr>
              <tr
                className={`table-${this.formatColour(this.customer.percentage)}`}
              >
                <th scope="row">Customers</th>
                <td>{this.customer.count}</td>
                <td className="text-right">
                  {this.formatPercentage(this.customer.percentage)}
                </td>
              </tr>
              </tbody>
            </table>
        </CardBody>
      </Card>
    );
  }
}

export default TotalTable;
