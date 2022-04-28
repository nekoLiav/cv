import React, { Component } from 'react';
import Edit from './components/Edit';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editState: {
        general: false,
        educational: false,
        practical: false
      },
      general: {
        name: '',
        email: '',
        phone: ''
      },
      educational: {
        school: '',
        subject: '',
        date: ''
      },
      practical: {
        company: '',
        position: '',
        role: '',
        date: ''
      }
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleEducationalDateChange = this.handleEducationalDateChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handlePracticalDateChange = this.handlePracticalDateChange.bind(this);
  }

  handleNameChange() {
    this.setState();
  }

  handleEmailChange() {
    this.setState();
  }

  handlePhoneChange() {
    this.setState();
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
      <div className="main">
        <Edit />
        <General />
        <Educational />
        <Practical />
      </div>
    );
  }
}

export default App;
