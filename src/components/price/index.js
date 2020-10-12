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
  font-weight: 700;
  color: #666;
  font-size: 18px;
  margin-right: 10px;
`;

export default function Price({ price }) {
  return (
    <Container>
      <ProductPrice>{price}р.</ProductPrice>
      <InfoButton />
    </Container>
  );
}
