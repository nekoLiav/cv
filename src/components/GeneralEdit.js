import React from 'react';

function GeneralEdit(props) {
  return (
    <form className="edit-form" onSubmit={props.handleSubmit}>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" value={props.name} onChange={props.changeName} />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" id="email" value={props.email} onChange={props.changeEmail} />
      </label>
      <label htmlFor="phone">
        Phone #:
        <input type="text" id="phone" value={props.phone} onChange={props.changePhone} />
      </label>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default GeneralEdit;
