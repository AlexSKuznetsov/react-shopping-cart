import React from 'react';
import Products from './pages/products';
import Navbar from './components/navbar';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: center;
  background: #f5f5f5;
`;

function App() {
  return (
    <>
      <Navbar />
      <Main>
        <Products />
      </Main>
    </>
  );
}

export default App;
