import React from "react";

const ProductSearch = ({ onSearch }) => {
  return (
    <input
      className="w-100"
      placeholder="Search for a product"
      onChange={onSearch}
      type="text"
    />
  );
};

export default ProductSearch;
