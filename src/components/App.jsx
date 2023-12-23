import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = e => {
    console.log('e.target.value  :>> ', e.target.value);
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState(prev => ({
      contacts: [...prev.contacts, { name: this.state.name, id: nanoid() }],
    }));
    this.setState({ name: '' });
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
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
