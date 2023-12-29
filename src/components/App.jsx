import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: name === 'filter' ? value.trim().toLowerCase() : value.trim(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        { name: this.state.name, id: nanoid(), number: this.state.number },
      ],
    }));
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter);
    });
    console.log('filteredContacts :>> ', filteredContacts);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
          <input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
          <button type="submit">Add contact</button>
        </form>

        <input
          type="text"
          name="filter"
          onChange={this.handleChange}
          value={this.state.filter}
        />

        <ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <p>{name} </p>
                <p>{number}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
