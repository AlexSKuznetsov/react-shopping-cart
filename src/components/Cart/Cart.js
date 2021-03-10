import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';
import CloseIcon from './CloseIcon';
import CartIcon from './CartIcon';

const CartBox = styled.div`
  display: flex;
  align-items: center;
`;

const PTag = styled.p`
  margin: 0;
  padding: 0;
  min-width: 150px;
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

const CartModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: -130px;
  top: 45px;
  height: auto;
  min-height: 100px;
  width: 350px;
  background-color: white;
  opacity: 0.95;
  border: 1px solid blueviolet;
  border-radius: 5px;
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  cursor: auto;
`;

const CheckoutButton = styled.button`
  display: flex;
  padding: 10px 15px;
  margin: 10px;
  align-self: center;
  border: none;
  color: white;
  background-color: grey;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: blueviolet;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleClickOnCart = () => {
    if (cart.items.length > 0) {
      if (!isCartModalOpen) {
        setIsCartModalOpen(!isCartModalOpen);
      }
    }
  };

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
      <CartIconBox onClick={handleClickOnCart}>
        <ItemsCount>
          {cart.items.length > 0 ? cart.items.length : null}
        </ItemsCount>
        {isCartModalOpen && (
          <CartModal>
            <CloseIcon setIsCartModalOpen={setIsCartModalOpen} />
            <CartItemsContainer>
              {cart.items.map((el) => {
                return <CartItem key={el.id} item={el} />;
              })}
            </CartItemsContainer>
            {cart.items.length > 0 && <CheckoutButton>Checkout</CheckoutButton>}
          </CartModal>
        )}
        <CartIcon />
      </CartIconBox>
    </CartBox>
  );
};

export default Cart;
