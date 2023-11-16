import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

function ContactForm({ onAddContact, contacts }) {
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

    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    if (name && number) {
      onAddContact(name, number);
      setName('');
      setNumber('');
    }
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

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;
