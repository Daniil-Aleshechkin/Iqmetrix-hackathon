import React from "react";

const ProductSearch = ({ onSearch }) => {
  return (
    <input placeholder="Search for a product" onChange={onSearch} type="text" />
  );
};

export default ProductSearch;
