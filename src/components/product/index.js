import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemAction } from '../../redux/actions';
import styled from 'styled-components';
import Price from '../price';
import AddToCardButton from '../addToCartButton';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: white;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    outline: 0.5px solid blueviolet;
  }

  @media (max-width: 600px) {
    width: 400px;
  }
`;

const ProductName = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
`;

const Image = styled.img`
  height: 150px;
  cursor: zoom-in;
`;

const Count = styled.input`
  padding: 3px 0;
  margin: 10px;
  width: 40px;
  text-align: center;
  border: 0.5px solid blueviolet;

  &:focus {
    outline: none;
    border: 1px solid blueviolet;
  }
`;

const ChangeCount = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 120px;
`;

const PlusMinus = styled.button`
  height: 24px;
  width: 24px;
  border: 0.5px solid blueviolet;
  text-align: center;
  box-sizing: border-box;
  border-radius: 2px;
  text-decoration: none;
  line-height: 22px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: blueviolet;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

const Product = ({ item }) => {
  const cart = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const findItemInCart = cart.items.find((el) => el.id === item.id);
    if (findItemInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cart, item.id]);

  function handleChange(e) {
    const { value } = e.target;
    setCount(value);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  const action = () => {
    dispatch(addItemAction(item, count));
    setCount(1);
  };

  return (
    <Card>
      <ProductName>{item.name}</ProductName>
      <Image src={item.img} alt={item.name} />
      <Price price={item.price} />
      <ChangeCount>
        <PlusMinus onClick={decrement}> - </PlusMinus>
        <Count value={count} onChange={handleChange} min={1} max={99}></Count>
        <PlusMinus onClick={increment}> + </PlusMinus>
      </ChangeCount>
      <AddToCardButton action={action} isInCart={isInCart} />
    </Card>
  );
};

export default Product;
