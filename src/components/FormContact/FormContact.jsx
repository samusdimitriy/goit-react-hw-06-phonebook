import React from 'react';
import { StyledInput, StyledButton, Title, Form } from './FormContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import Notiflix from 'notiflix';
import { getContacts } from 'redux/selectors';

const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const isContactExist = contacts.find(
      contact =>
        contact.name.toLowerCase() === e.target.name.value.toLowerCase()
    );
    if (isContactExist) {
      Notiflix.Notify.failure(
        `Contact "${e.target.name.value}" is already in contacts`
      );
      return;
    }

    dispatch(addContact(e.target.name.value, e.target.number.value));
    Notiflix.Notify.success('Contact added');
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

export default FormContact;
