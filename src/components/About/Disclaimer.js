import React from 'react';
import styled from 'styled-components';

const Disclaimer = styled.p`
  color: red;
  font-size: 18px;
  max-width: 700px;
  padding: 20px 20px;
  margin: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  border-left: 5px solid red;
`;

export const DisclaimerBox = ({ children }) => {
  return <Disclaimer>{children}</Disclaimer>;
};
