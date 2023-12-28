import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value.trim() });
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
        <ul>
          {this.state.contacts.map(({ id, name, number }) => {
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
