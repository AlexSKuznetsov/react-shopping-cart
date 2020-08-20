import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: blueviolet;
  border: none;
  color: white;
  border-radius: 2px;
`;

export default function AddToCartButton() {
  return <Button>Add to cart</Button>;
}
