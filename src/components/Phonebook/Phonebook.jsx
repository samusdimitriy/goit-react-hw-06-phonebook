import React from 'react';
import { StyledInput, StyledButton, Title, Form } from './Phonebook.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const Phonebook = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(e.target.name.value, e.target.number.value));
    e.target.reset();
  };

  return (
    <>
      <Title>Phonebook</Title>
      <Form onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Name"
        />
        <StyledInput
          type="tel"
          name="number"
          pattern="[+]?[\d\s.-]{1,30}"
          title="Phone number must be digits and can contain spaces, dashes, periods, and can start with +"
          required
          placeholder="Number"
        />
        <StyledButton type="submit">Add contacts</StyledButton>
      </Form>
    </>
  );
};

export default Phonebook;
