import React from 'react';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import { AppContainer } from './App.styled';
import { useSelector } from 'react-redux';
import { StyledContactsHeading } from './Contacts/Contacts.styled';
import { getVisibleContacts } from 'redux/selectors';
import Filter from './Filter/Filter';

const App = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <AppContainer>
      <Phonebook />
      <StyledContactsHeading>Contacts</StyledContactsHeading>
      <Filter />
      {contacts.length < 1 ? (
        <p>Your phonebook is empty. Please add a contact.</p>
      ) : (
        <Contacts contacts={contacts} />
      )}
    </AppContainer>
  );
};

export default App;
