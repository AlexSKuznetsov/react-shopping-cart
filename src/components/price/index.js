import React from 'react';
import InfoButton from '../info';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPrice = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #666;
  font-size: 16px;
  margin-right: 10px;
`;

export default function Price(props) {
  console.log(props.price);

  return (
    <Container>
      <ProductPrice>{props.price}р.</ProductPrice>
      <InfoButton />
    </Container>
  );
}
