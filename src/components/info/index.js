import React, { useState } from 'react';
import styled from 'styled-components';
import Tooltip from './tooltip';
import Portal from './portal';

const Link = styled.a`
  display: flex;
  align-items: center;
  color: palevioletred;
`;

const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 14px;
  height: 14px;
  cursor: help;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;

export default function Info() {
  const [coords, setCoords] = useState({});
  const [isOn, setIsOn] = useState(false);

  function setCoordAndShowTooltip(e) {
    const rect = e.target.getBoundingClientRect();
    setCoords({
      left: rect.x - 50,
      top: rect.y - 50,
    });
    setIsOn((c) => (c = !c));
  }

  return (
    <Link
      onMouseEnter={setCoordAndShowTooltip}
      onMouseLeave={() => setIsOn((prev) => (prev = !prev))}
    >
      {isOn && (
        <Portal>
          <Tooltip coords={coords} />
        </Portal>
      )}
      <Icon viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
        <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
        <circle cx="8" cy="4.5" r="1" />
      </Icon>
    </Link>
  );
}
