import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchItemsAction } from '../../redux/actions';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  margin: 0 200px;
`;

const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid grey;
  border-radius: 4px;

  &:focus {
    outline: none;
  }
`;

const Searchbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    dispatch(searchItemsAction(search));
  }, [search, dispatch]);
  return (
    <SearchBarContainer>
      <Input
        type="text"
        placeholder={'Search by product name'}
        onChange={handleChange}
        value={search}
      ></Input>
    </SearchBarContainer>
  );
};

export default Searchbar;
