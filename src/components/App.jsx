import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

function App() {
  // Pobieranie stanu z Redux zamiast lokalnego stanu
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
