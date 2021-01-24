import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 120px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: blueviolet;
  border: none;
  color: white;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export default function AddToCartButton({ action }) {
  return <Button onClick={() => action()}>Add to cart</Button>;
}
