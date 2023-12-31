import React from 'react';
import Contacts from './Contacts/Contacts';
import { AppContainer } from './App.styled';
import { useSelector } from 'react-redux';
import { StyledContactsHeading } from './Contacts/Contacts.styled';
import { getVisibleContacts } from 'redux/selectors';
import Filter from './Filter/Filter';
import FormContact from './FormContact/FormContact';

const App = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <AppContainer>
      <FormContact />
      <StyledContactsHeading>Contacts</StyledContactsHeading>
      <Filter />
      {contacts.length < 1 ? (
        <p>Your Phonebook is empty. Please add a contact.</p>
      ) : (
        <Contacts />
      )}
    </AppContainer>
  );
};

export default App;
