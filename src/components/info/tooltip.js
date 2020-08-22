import React from 'react';
import styled from 'styled-components';

const Tooltip = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  padding: 4px;
  width: auto;
  max-width: 200px;
  height: 30px;
  z-index: 1000;
  opacity: 0.9;
  background-color: white;
  margin-left: auto;
  border-radius: 4px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: 'translate(-100px, -100%)';
`;

const Arrow = styled.div`
  position: absolute;
  left: 50%;
  display: block;
  width: 10px;
  height: 10px;
  background: transparent;
  border-style: solid;
  border-width: 4px;
  transform: rotate(45deg);
  bottom: -1px;
  border-top-color: transparent;
  border-right-color: #fff;
  border-bottom-color: #fff;
  border-left-color: transparent;
`;

export default function TooltipComponent({ coords }) {
  return (
    <Tooltip style={{ ...coords }}>
      <span>Price per 1 kg</span>
      <Arrow />
    </Tooltip>
  );
}
