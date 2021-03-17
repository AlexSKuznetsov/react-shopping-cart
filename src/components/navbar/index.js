import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Searchbar from '../Searchbar/Searchbar';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
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
  text-decoration: none;
`;

const AboutLink = styled(Logo)`
  margin-left: 40px;
`;

export default function Navbar() {
  return (
    <Nav>
      <Link to="/">
        <Logo>React shopping cart</Logo>
      </Link>
      <Link to="/about">
        <AboutLink>About</AboutLink>
      </Link>
      <Searchbar />
      <Cart />
    </Nav>
  );
}
