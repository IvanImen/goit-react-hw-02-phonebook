import { ContactsListItem } from 'components';
import React from 'react';

export const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return <ContactsListItem key={id} name={name} number={number} />;
      })}
    </ul>
  );
};
