import React from 'react';

function Educational() {
  return (
    <div className="educational">
      <form className="educational-form">
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
      </form>
    </div>
  );
}

export default Educational;
