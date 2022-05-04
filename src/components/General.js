import React, { useState } from 'react';
import GeneralEdit from './GeneralEdit';
import ProfilePicture from './ProfilePicture';

const General = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [aboutMe, setAboutMe] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAboutMeChange = (e) => {
    setAboutMe(e.target.value);
  };

  return (
    <div className="general">
      <ProfilePicture />
      {this.props.mode && (
        <GeneralEdit
          name={name}
          changeName={handleNameChange}
          email={email}
          changeEmail={handleEmailChange}
          phone={phone}
          changePhone={handlePhoneChange}
          aboutMe={aboutMe}
          changeAbout={handleAboutMeChange}
        />
      )}
      {!this.props.mode && (
        <div className="info">
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Phone #: {phone}</p>
          <p>About Me: {aboutMe}</p>
        </div>
      )}
    </div>
  );
};

export default General;
