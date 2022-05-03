import React from 'react';

function EducationalEdit(props) {
  return (
    <form className="edit-form">
      <input
        type="text"
        id="name"
        value={props.school}
        onChange={props.changeSchool}
        placeholder="School"
      />
      <input
        type="text"
        value={props.subject}
        onChange={props.changeSubject}
        placeholder="Subject"
      />
      <input
        type="text"
        value={props.dateStart}
        onChange={props.changeDateStart}
        placeholder="Start Date"
      />
      <input
        type="text"
        value={props.dateEnd}
        onChange={props.changeDateEnd}
        placeholder="End Date"
      />
    </form>
  );
}

export default EducationalEdit;
