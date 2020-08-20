import React from "react";
import Products from "./components/pages/products";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  justify-content: center;
  background: #f5f5f5;
`;

function App() {
  return (
    <Body>
      <Products />
    </Body>
  );
}

export default App;
