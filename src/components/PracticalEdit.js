import React from 'react';

function PracticalEdit(props) {
  return (
    <form className="edit-form" onSubmit={props.handleSubmit}>
      <label>
        Company Name:
        <input type="text" value={props.company} onChange={props.changeCompany} />
      </label>
      <label>
        Position:
        <input type="text" value={props.position} onChange={props.changePosition} />
      </label>
      <label>
        Role:
        <input type="text" value={props.role} onChange={props.changeRole} />
      </label>
      <label>
        Date of employment:
        <input type="text" value={props.date} onChange={props.changeDate} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default PracticalEdit;
