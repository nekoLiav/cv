import React from 'react';

function GeneralEdit(props) {
  return (
    <form className="edit-form">
      <input
        type="text"
        id="name"
        value={props.name}
        onChange={props.changeName}
        placeholder="Name"
      />
      <input
        type="email"
        id="email"
        value={props.email}
        onChange={props.changeEmail}
        placeholder="Email"
      />
      <input
        type="tel"
        id="phone"
        value={props.phone}
        onChange={props.changePhone}
        placeholder="Phone #"
      />
      <input
        type="textarea"
        id="about-me"
        value={props.aboutMe}
        onChange={props.changeAbout}
        placeholder="About Me"
      />
    </form>
  );
}

export default GeneralEdit;
