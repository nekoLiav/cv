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
    this.setState({ general: { name: e.target.value } });
  }

  handleEmailChange() {
    this.setState();
  }

  handlePhoneChange() {
    this.setState();
  }

  render() {
    return (
      <div className="general">
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>Phone #: {this.state.phone}</p>
      </div>
    );
  }
}

export default General;
