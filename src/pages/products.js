import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/product';
import styled from 'styled-components';

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1332px;
  padding: 90px 16px;
`;

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <>
      <ProductList>
        {products.map((item) => (
          <Product key={item.id} item={item}></Product>
        ))}
      </ProductList>
    </>
  );
};

export default Products;
