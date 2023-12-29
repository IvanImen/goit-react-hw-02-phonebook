import React from 'react';

export const ContactsListItem = ({ name, number }) => {
  return (
    <li>
      <p>{name} </p>
      <p>{number}</p>
    </li>
  );
};
