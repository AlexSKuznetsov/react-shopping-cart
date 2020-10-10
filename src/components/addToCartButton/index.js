import React from 'react';
import styled from 'styled-components';
import { addToCart } from '../../redux/actions/add-to-cart';
import store from '../../redux/store';

const Button = styled.button`
  width: 120px;
  padding: 10px;
  margin-bottom: 5px;
  background-color: blueviolet;
  border: none;
  color: white;
  border-radius: 2px;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

export default function AddToCartButton(props) {
  function handleAddtoCartButton(e) {
    console.log(props.item);
    store.dispatch(addToCart({ id: '1', name: 'Cucumber', qty: '1' }));
  }
  return <Button onClick={handleAddtoCartButton}>Add to cart</Button>;
}
