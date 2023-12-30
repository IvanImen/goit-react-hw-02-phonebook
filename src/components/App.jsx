import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm, ContactsList, Filter } from 'components';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value.trim().toLowerCase() });
  };

  addContact = (name, number) => {
    const isPresent = this.state.contacts.find(
      contact => contact.name === name
    );

    if (isPresent) {
      alert(`${name} is already in the phonebook`);
      return;
    }

    this.setState(prev => ({
      contacts: [...prev.contacts, { name, id: nanoid(), number }],
    }));
  };

  deleteContact = id => {
    const leftContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: [...leftContacts] });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter);
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} value={filter} />
        <ContactsList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
