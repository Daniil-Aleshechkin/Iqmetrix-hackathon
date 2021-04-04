import React from "react";

const TotalTable = ({ sale, ship, revenue, customer }) => {
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
    <table className="table table-sm table-hover table-bordered">
      <thead>
        <tr className="text-center">
          <th colSpan="2">All Data</th>
          <th id="detail-tab">
            <button className="btn btn-primary">Detail</button>
          </th>
        </tr>
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
          <td className="text-right">{formatPercentage(sale.percentage)}</td>
        </tr>
        <tr className={`table-${formatColour(ship.percentage)}`}>
          <th scope="row">Shipments</th>
          <td>{ship.count}</td>
          <td className="text-right">{formatPercentage(ship.percentage)}</td>
        </tr>
        <tr className={`table-${formatColour(revenue.percentage)}`}>
          <th scope="row">Revenue</th>
          <td>{revenue.count}</td>
          <td className="text-right">{formatPercentage(revenue.percentage)}</td>
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
  );
};
TotalTable.defaultProps = {
  sale: { count: 120, percentage: 3 },
  revenue: { count: 1567, percentage: -3 },
  customer: { count: 102, percentage: -2 },
  ship: { count: 144, percentage: 3 }
};

export default TotalTable;
