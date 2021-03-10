import React from 'react';
import styled from 'styled-components';

const CloseSvgIcon = styled.svg`
  margin-top: 10px;
  margin-left: 320px;
  height: 18px;
  width: 18px;
`;

const CloseIcon = ({ setIsCartModalOpen }) => {
  return (
    <CloseSvgIcon
      onClick={() => setIsCartModalOpen(false)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#8A2BE2"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
    </CloseSvgIcon>
  );
};

export default CloseIcon;
