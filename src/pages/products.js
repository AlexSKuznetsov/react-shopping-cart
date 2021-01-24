import React from 'react';

import Product from '../components/product';
import styled from 'styled-components';
import store from '../store';

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1332px;
  padding: 90px 16px;
`;

const Products = () => {
  return (
    <>
      <ProductList>
        {store.map((item) => (
          <Product key={item.id} item={item}></Product>
        ))}
      </ProductList>
    </>
  );
};

export default Products;
