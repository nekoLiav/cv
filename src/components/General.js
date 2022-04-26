import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phone: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="general">
        <form className="general-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              value={this.state.value}
              onChange={this.handleNameChange}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              value={this.state.value}
              onChange={this.handleEmailChange}
            />
          </label>
          <label htmlFor="phone">
            Phone Number:
            <input
              type="text"
              id="phone"
              value={this.state.value}
              onChange={this.handlePhoneChange}
            />
          </label>
          <input type="submit" value="Submit" />
          <button type="button">Edit</button>
        </form>
      </div>
    );
  }
}

export default General;
