import React from 'react';

function GeneralEdit() {
  return (
    <form>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" id="email" />
      </label>
      <label htmlFor="phone">
        Phone #:
        <input type="text" id="phone" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GeneralEdit;
