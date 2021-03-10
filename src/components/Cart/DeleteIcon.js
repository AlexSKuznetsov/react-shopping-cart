import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteItemAction } from '../../redux/actions';

const Svg = styled.svg`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const DeleteIcon = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItemAction(id));
  };

  return (
    <Svg
      onClick={handleDelete}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#ff4136"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
    </Svg>
  );
};

export default DeleteIcon;
