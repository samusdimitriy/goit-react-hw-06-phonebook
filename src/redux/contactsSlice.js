import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import initContacts from '../services/contacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initContacts,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
