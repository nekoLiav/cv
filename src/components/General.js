import React, { Component } from 'react';
import GeneralEdit from './GeneralEdit';
import ProfilePicture from './ProfilePicture';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      name: '',
      email: '',
      phone: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleEdit() {
    this.state.edit ? this.setState({ edit: false }) : this.setState({ edit: true });
  }

  handleSubmit(e) {
    this.setState({ edit: false });
    e.preventDefault();
  }

  render() {
    return (
      <div className="general">
        <ProfilePicture />
        {this.state.edit && (
          <GeneralEdit
            name={this.state.name}
            changeName={this.handleNameChange}
            email={this.state.email}
            changeEmail={this.handleEmailChange}
            phone={this.state.phone}
            changePhone={this.handlePhoneChange}
            handleSubmit={this.handleSubmit}
          />
        )}
        {!this.state.edit && (
          <div className="info">
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>Phone #: {this.state.phone}</p>
            {this.props.mode && (
              <button type="button" className="edit-button" onClick={this.handleEdit}>
                Edit
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default General;
