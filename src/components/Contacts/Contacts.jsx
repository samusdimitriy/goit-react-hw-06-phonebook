import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContactsContainer,
  StyledContactItem,
  StyledContactName,
  StyledContactNumber,
  StyledDeleteButton,
} from './Contacts.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <StyledContactsContainer>
      <ul>
        {contacts.map(contact => (
          <StyledContactItem key={contact.id}>
            <StyledContactName>{contact.name}:</StyledContactName>
            <StyledContactNumber>{contact.number}</StyledContactNumber>
            <StyledDeleteButton
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </StyledDeleteButton>
          </StyledContactItem>
        ))}
      </ul>
    </StyledContactsContainer>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
