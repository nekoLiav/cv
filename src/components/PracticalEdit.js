import React from 'react';

function PracticalEdit() {
  return (
    <form>
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default PracticalEdit;
