import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactForm.module.css';
import { addContact } from 'store/contactsSlice';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Tutaj możesz dodać logikę sprawdzającą, czy kontakt już istnieje
    dispatch(addContact({ name, number }));
    // Wyczyść formularz
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
      </label>
      <label className={styles.label}>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          className={styles.input}
          required
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
