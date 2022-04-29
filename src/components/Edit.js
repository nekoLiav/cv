import React from 'react';

function Edit(props) {
  return (
    <div className="edit">
      <form className="edit-form" onSubmit={props.onFormSubmitted}>
        <fieldset>
          <legend>Edit General Information</legend>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" onChange={props.nameChange} />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" />
          </label>
          <label htmlFor="phone">
            Phone #:
            <input type="text" id="phone" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Edit Educational Information</legend>
          <label>
            School Name:
            <input type="text" />
          </label>
          <label>
            Title of Study:
            <input type="text" />
          </label>
          <label>
            Date of Study:
            <input type="text" />
          </label>
        </fieldset>
        <fieldset>
          <legend>Edit Practical Information</legend>
          <label>
            Company Name:
            <input type="text" />
          </label>
          <label>
            Title of Position:
            <input type="text" />
          </label>
          <label>
            Main Responsibilities:
            <input type="text" />
          </label>
          <label>
            Dates of Employment:
            <input type="text" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Edit;
