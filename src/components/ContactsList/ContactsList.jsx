import { ContactsListItem } from 'components';
import React from 'react';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            name={name}
            number={number}
            id={id}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};
