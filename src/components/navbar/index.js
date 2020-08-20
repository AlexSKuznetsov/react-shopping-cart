import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 0 15px;
  width: 100%;
  height: 40px;
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
    </Nav>
  );
}
