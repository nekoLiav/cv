import React from 'react';

function PracticalEdit(props) {
  return (
    <form className="edit-form" onSubmit={props.handleSubmit}>
      <label htmlFor="company-name">
        Company Name:
        <input type="text" value={props.company} onChange={props.changeCompany} />
      </label>
      <label htmlFor="position">
        Position/Role:
        <input type="text" value={props.position} onChange={props.changePosition} />
      </label>
      <label htmlFor="start-date">
        Start Date:
        <input type="text" value={props.dateStart} onChange={props.changeDateStart} />
      </label>
      <label htmlFor="end-date">
        End Date:
        <input type="text" value={props.dateEnd} onChange={props.changeDateEnd} />
      </label>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default PracticalEdit;
