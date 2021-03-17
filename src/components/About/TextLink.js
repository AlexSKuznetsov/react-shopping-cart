import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: blueviolet;

  &:hover {
    background-color: #f5f5f5;
    border-radius: 2px;
    padding: 5px;
  }
`;

export const TextLink = ({ children, target }) => {
  return (
    <Link href={target} target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  );
};
