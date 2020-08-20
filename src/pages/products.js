import React from 'react';
import Product from '../components/product';
import styled from 'styled-components';
import store from '../store';

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 960px;
  padding: 40px 16px;
`;

export default function Products() {
  return (
    <>
      <ProductList>
        {store.map(product => <Product key={product.id} item={product}></Product>)}
      </ProductList>
    </>
  );
}
