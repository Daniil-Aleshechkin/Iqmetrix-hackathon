import React from "react";

const ProductItem = ({ product, onSelect }) => {
  function renderColour() {
    if (product.selected) {
      return "dark text-white text-capitalize";
    } else {
      return "white text-capitalize";
    }
  }
  return (
    <tr className={`table-${renderColour()}`}>
      <td
        onClick={() => {
          onSelect(product);
        }}
        className={renderColour()}
      >
        {product.name}
      </td>
    </tr>
  );
};

export default ProductItem;
