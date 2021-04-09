import React, { Component } from "react";

import { Card, CardBody } from "shards-react";

const TotalTable = ({ getData }) => {
  const salesData = Object.values(getData().data).slice(-2);
  const shipmentData = Object.values(getData().data).slice(-2);
  const revenueData = Object.values(getData().data).slice(-2);
  const customerData = Object.values(getData().data).slice(-2);
  const sale = {
    count: Math.floor(salesData[0]),
    percentage: Math.round((salesData[0] - salesData[1]) / salesData[0])
  };
  const ship = {
    count: Math.floor(shipmentData[0]),
    percentage: Math.round(
      (shipmentData[0] - shipmentData[1]) / shipmentData[0]
    )
  };
  const revenue = {
    count: Math.floor(revenueData[0]),
    percentage: Math.round((revenueData[0] - revenueData[1]) / revenueData[0])
  };
  const customer = {
    count: Math.floor(customerData[0]),
    percentage: Math.round(
      (customerData[0] - customerData[1]) / customerData[0]
    )
  };
  function formatPercentage(percentage) {
    if (percentage > 0) {
      return `${percentage}% ▲`;
    }
    return `${percentage}% ▼`;
  }
  function formatColour(percentage) {
    if (percentage > 0) {
      return "success";
    }
    return "danger";
  }

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
            <tr className={`table-${formatColour(sale.percentage)}`}>
              <th scope="row">Sale</th>
              <td>{sale.count}</td>
              <td className="text-right">
                {formatPercentage(sale.percentage)}
              </td>
            </tr>
            <tr className={`table-${formatColour(ship.percentage)}`}>
              <th scope="row">Shipments</th>
              <td>{ship.count}</td>
              <td className="text-right">
                {formatPercentage(ship.percentage)}
              </td>
            </tr>
            <tr className={`table-${formatColour(revenue.percentage)}`}>
              <th scope="row">Revenue</th>
              <td>{revenue.count}</td>
              <td className="text-right">
                {formatPercentage(revenue.percentage)}
              </td>
            </tr>
            <tr className={`table-${formatColour(customer.percentage)}`}>
              <th scope="row">Customers</th>
              <td>{customer.count}</td>
              <td className="text-right">
                {formatPercentage(customer.percentage)}
              </td>
            </tr>
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
};

export default TotalTable;
