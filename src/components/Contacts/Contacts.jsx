import React from 'react';
import {
  StyledContactsContainer,
  StyledContactItem,
  StyledContactName,
  StyledContactNumber,
  StyledDeleteButton,
} from './Contacts.styled';
import { getVisibleContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const Contacts = () => {
  const contactsList = useSelector(getVisibleContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <StyledContactsContainer>
      <ul>
        {contactsList.map(contact => (
          <StyledContactItem key={contact.id}>
            <StyledContactName>{contact.name}:</StyledContactName>
            <StyledContactNumber>{contact.number}</StyledContactNumber>
            <StyledDeleteButton
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </StyledDeleteButton>
          </StyledContactItem>
        ))}
      </ul>
    </StyledContactsContainer>
  );
};

export default Contacts;
