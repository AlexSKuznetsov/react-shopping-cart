import React from "react";
import Product from "../product";
import styled from "styled-components";

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 960px;
  padding: 16px;
`;

export default function Products() {
  return (
    <ProductList>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductList>
  );
}
