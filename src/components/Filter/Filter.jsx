import React from 'react';
import {
  StyledFilterContainer,
  StyledFilterInput,
  StyledFilterHeading,
} from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <StyledFilterContainer>
      <StyledFilterHeading>Filter contacts</StyledFilterHeading>
      <StyledFilterInput
        type="text"
        name="filter"
        value={value}
        onChange={handleChange}
      />
    </StyledFilterContainer>
  );
};

export default Filter;
