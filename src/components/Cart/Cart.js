import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CartBox = styled.div`
  display: flex;
  align-items: center;
`;

const PTag = styled.p`
  margin: 0;
  padding: 0;
`;

const CartIconBox = styled.div`
  margin-left: 20px;
  position: relative;
  cursor: pointer;
`;

const ItemsCount = styled.div`
  position: absolute;
  display: inline-block;
  left: 18px;
  top: 11px;
  font-size: 14px;
  font-weight: bold;
  color: #ff4136;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  function roundToTwo(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
  }
  return (
    <CartBox>
      <div>
        <PTag>
          Sub Total: <b>{roundToTwo(cart.sum)} &#8381;</b>
        </PTag>
      </div>
      <CartIconBox>
        <ItemsCount>
          {cart.items.length > 0 ? cart.items.length : null}
        </ItemsCount>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="blueviolet"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </CartIconBox>
    </CartBox>
  );
};

export default Cart;
