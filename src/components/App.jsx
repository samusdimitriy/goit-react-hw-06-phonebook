import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import { AppContainer } from './App.styled';
import Filter from './Filter/Filter';
import { StyledContactsHeading } from './Contacts/Contacts.styled';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = value => {
    setFilter(value);
  };

  const addContact = ({ name, number }) => {
    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      alert('Contact already exists');
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AppContainer>
      <Phonebook onSubmit={addContact} />
      <StyledContactsHeading>Contacts</StyledContactsHeading>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      {contacts.length < 1 && filter.length > 0 ? (
        <p>Your phonebook is empty. Please add contact.</p>
      ) : (
        <Contacts contacts={filteredContacts} onDelete={deleteContact} />
      )}
    </AppContainer>
  );
};

export default App;
