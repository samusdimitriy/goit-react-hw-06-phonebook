import React from 'react';
import {
  StyledFilterContainer,
  StyledFilterInput,
  StyledFilterHeading,
} from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => {
  const handleChange = event => {
    onFilterChange(event.target.value);
  };

  return (
    <StyledFilterContainer>
      <StyledFilterHeading>Find contacts by name</StyledFilterHeading>
      <StyledFilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </StyledFilterContainer>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
