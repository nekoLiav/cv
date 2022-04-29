import React, { Component } from 'react';
import Edit from './components/Edit';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editState: false,
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
    this.handleEdit = this.handleEdit.bind(this);
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

  handleEdit() {
    this.state.editState ? this.setState({ editState: false }) : this.setState({ editState: true });
  }

  render() {
    return (
      <div className="main">
        <div className="information-fields">
          <General name={this.state.name} email={this.state.email} phone={this.state.phone} />
          <Educational />
          <Practical />
        </div>
        <Edit editState={this.state.editState} />
        {!this.state.editState && (
          <button type="button" className="edit-button" onClick={this.handleEdit}>
            Edit
          </button>
        )}
      </div>
    );
  }
}

export default App;
