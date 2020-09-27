import React, { useState } from 'react';
import styled from 'styled-components';
import Price from '../price';
import AddToCardButton from '../addToCartButton';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  border: 0.5px solid #a9a9a9;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  background-color: white;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border: 0.5px solid blueviolet;
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

  &:hover {
    background-color: blueviolet;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

function Product({ item }) {
  const [count, setCount] = useState(1);

  function handleChange(e) {
    const { value } = e.target;
    setCount(value);
  }

  function increment() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  function decrement() {
    if (count > 1) {
      setCount((prevCount) => {
        return prevCount - 1;
      });
    }
  }

  return (
    <Card>
      <ProductName>{item.name}</ProductName>
      <Image src={item.img} alt="broccoli" />
      <Price price={item.price} />
      <ChangeCount>
        <PlusMinus onClick={decrement}> - </PlusMinus>
        <Count value={count} onChange={handleChange}></Count>
        <PlusMinus onClick={increment}> + </PlusMinus>
      </ChangeCount>
      <AddToCardButton />
    </Card>
  );
}

export default Product;
