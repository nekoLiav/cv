import React, { Component } from 'react';

class Educational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      subject: '',
      date: ''
    };

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleEducationalDateChange = this.handleEducationalDateChange.bind(this);
  }

  handleSchoolChange() {
    this.setState();
  }

  handleSubjectChange() {
    this.setState();
  }

  handleEducationalDateChange() {
    this.setState();
  }

  render() {
    return (
      <div className="educational">
        <p>School Name: {this.state.school}</p>
        <p>Title of Study: {this.state.subject}</p>
        <p>Date of Study: {this.state.date}</p>
      </div>
    );
  }
}

export default Educational;
