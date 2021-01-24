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
    <React.Fragment>
      <Navbar />
      <Main>
        <Products />
      </Main>
    </React.Fragment>
  );
}

export default App;
