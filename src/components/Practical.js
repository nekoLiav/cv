import React, { Component } from 'react';

class Practical extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: '',
      role: '',
      date: ''
    };

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handlePracticalDateChange = this.handlePracticalDateChange.bind(this);
  }

  handleCompanyChange() {
    this.setState();
  }

  handlePositionChange() {
    this.setState();
  }

  handleRoleChange() {
    this.setState();
  }

  handlePracticalDateChange() {
    this.setState();
  }

  render() {
    return (
      <div className="practical">
        <p>Company Name: {this.state.company}</p>
        <p>Position: {this.state.position}</p>
        <p>Role: {this.state.role}</p>
        <p>Date of employment: {this.state.date}</p>
      </div>
    );
  }
}

export default Practical;
