import React from 'react';
import { useDispatch } from 'react-redux';
import { decrementItemAction, incrementItemAction } from '../../redux/actions';
import styled from 'styled-components';
import DeleteIcon from './DeleteIcon';

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 50px 90px 2fr 80px 20px;
  align-items: center;
  margin: 10px;
  border-bottom: 1px solid #efefef;
`;

const ItemName = styled.div`
  font-weight: bold;
  justify-self: start;
  font-size: 14px;
  margin: 10px;
`;

const PlusMinus = styled.button`
  height: 24px;
  width: 24px;
  border: 0.5px solid blueviolet;
  text-align: center;
  box-sizing: border-box;
  border-radius: 2px;
  text-decoration: none;
  line-height: 22px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: blueviolet;
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

const Count = styled.input`
  padding: 3px 0;
  margin: 5px;
  width: 30px;
  text-align: center;
  border: 0.5px solid blueviolet;

  &:focus {
    outline: none;
    border: 1px solid blueviolet;
  }
`;

const ItemImg = styled.img`
  height: 50px;
`;

const EditContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Summ = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin: 10px;
`;

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function roundToTwo(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
  }

  return (
    <ItemsContainer>
      <ItemImg src={item.img} />
      <ItemName> {item.name} </ItemName>
      <EditContainer>
        <PlusMinus onClick={() => dispatch(decrementItemAction(item.id))}>
          -
        </PlusMinus>
        <Count
          value={item.count}
          onChange={() => console.log('changed')}
        ></Count>
        <PlusMinus onClick={() => dispatch(incrementItemAction(item.id))}>
          +
        </PlusMinus>
      </EditContainer>
      <Summ>{roundToTwo(item.count * item.price)} &#8381;</Summ>
      <DeleteIcon id={item.id} />
    </ItemsContainer>
  );
};

export default CartItem;
