import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1332px;
  min-width: 800px;
  background-color: white;
  border-radius: 6px;
  height: 610px;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    outline: 0.5px solid blueviolet;
  }
`;

export const WrapperContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
