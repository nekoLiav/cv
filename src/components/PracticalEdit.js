import React from 'react';

function PracticalEdit(props) {
  return (
    <form className="edit-form">
      <input
        type="text"
        value={props.company}
        onChange={props.changeCompany}
        placeholder="Company"
      />
      <input
        type="text"
        value={props.position}
        onChange={props.changePosition}
        placeholder="Position/Role"
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

export default PracticalEdit;
