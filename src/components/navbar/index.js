import React from 'react';
import Cart from '../Cart/Cart';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  padding: 0 15px;
  width: 100%;
  height: 80px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const Logo = styled.span`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: blueviolet;
`;

export default function Navbar() {
  return (
    <Nav>
      <Logo>React shopping cart</Logo>
      <Cart />
    </Nav>
  );
}
