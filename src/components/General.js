import React, { Component } from 'react';
import GeneralEdit from './GeneralEdit';
import ProfilePicture from './ProfilePicture';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutMe: '',
      name: '',
      email: '',
      phone: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleAboutMeChange = this.handleAboutMeChange.bind(this);
  }

  handleAboutMeChange(e) {
    this.setState({ aboutMe: e.target.value });
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

  render() {
    return (
      <div className="general">
        <ProfilePicture />
        {this.props.mode && (
          <GeneralEdit
            name={this.state.name}
            changeName={this.handleNameChange}
            email={this.state.email}
            changeEmail={this.handleEmailChange}
            phone={this.state.phone}
            changePhone={this.handlePhoneChange}
            aboutMe={this.state.aboutMe}
            changeAbout={this.handleAboutMeChange}
          />
        )}
        {!this.props.mode && (
          <div className="info">
            <p>Name: {this.state.name}</p>
            <p>Email: {this.state.email}</p>
            <p>Phone #: {this.state.phone}</p>
            <p>About Me: {this.state.aboutMe}</p>
          </div>
        )}
      </div>
    );
  }
}

export default General;
