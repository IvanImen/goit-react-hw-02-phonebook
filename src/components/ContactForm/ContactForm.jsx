import React, { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value.trim(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
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
    );
  }
}
