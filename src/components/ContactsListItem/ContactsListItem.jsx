import React from 'react';

export const ContactsListItem = ({ name, number, id, deleteContact }) => {
  return (
    <li>
      <p>{name} </p>
      <p>{number}</p>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
