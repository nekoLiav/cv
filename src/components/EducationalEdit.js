import React from 'react';

function EducationalEdit(props) {
  return (
    <form className="edit-form" onSubmit={props.handleSubmit}>
      <label htmlFor="name">
        School Name:
        <input type="text" id="name" value={props.school} onChange={props.changeSchool} />
      </label>
      <label htmlFor="subject">
        Subject:
        <input type="text" value={props.subject} onChange={props.changeSubject} />
      </label>
      <label htmlFor="start-date">
        Start Date:
        <input type="text" value={props.dateStart} onChange={props.changeDateStart} />
      </label>
      <label htmlFor="start-date">
        End Date:
        <input type="text" value={props.dateEnd} onChange={props.changeDateEnd} />
      </label>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default EducationalEdit;
