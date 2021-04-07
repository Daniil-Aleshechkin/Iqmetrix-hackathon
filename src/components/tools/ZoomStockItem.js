import React from "react";

const ZoomStockItem = ({ stock, onSelect }) => {
  function renderColour() {
    if (stock.selected) {
      return "dark text-white text-capitalize";
    } else {
      return "white text-capitalize";
    }
  }
  return (
    <tr className={`table-${renderColour()}`}>
      <td
        onClick={() => {
          onSelect(stock);
        }}
        className={renderColour()}
      >
        {stock.name}
      </td>
    </tr>
  );
};

export default ZoomStockItem;
