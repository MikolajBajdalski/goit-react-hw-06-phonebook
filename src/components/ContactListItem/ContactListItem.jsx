import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './ContactListItem.module.css';
import { deleteContact } from 'store/contactsSlice';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.listItem}>
      {contact.name}: {contact.number}
      <button onClick={handleDeleteContact}>Delete</button>
    </li>
  );
};

// propTypes są teraz zbędne, ponieważ nie korzystamy już z onDeleteContact jako prop
export default ContactListItem;
