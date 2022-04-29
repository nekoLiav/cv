import React from 'react';

function EducationalEdit() {
  return (
    <form>
      <label htmlFor="name">
        School Name:
        <input type="text" id="name" />
      </label>
      <label htmlFor="email">
        Title of Study:
        <input type="email" id="email" />
      </label>
      <label htmlFor="phone">
        Date of Study:
        <input type="text" id="phone" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EducationalEdit;
