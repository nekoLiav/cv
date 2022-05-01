import React from 'react';

function EducationalEdit(props) {
  return (
    <form className="edit-form" onSubmit={props.handleSubmit}>
      <label htmlFor="name">
        School Name:
        <input type="text" id="name" value={props.school} onChange={props.changeSchool} />
      </label>
      <label htmlFor="email">
        Title of Study:
        <input type="email" id="email" value={props.subject} onChange={props.changeSubject} />
      </label>
      <label htmlFor="phone">
        Date of Study:
        <input type="text" id="phone" value={props.date} onChange={props.changeDate} />
      </label>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default EducationalEdit;
