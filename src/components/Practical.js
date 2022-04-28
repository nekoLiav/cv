import React, { Component } from 'react';

class Practical extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="practical">
        <p>Company Name:</p>
        <p>Position:</p>
        <p>Role:</p>
        <p>Date of employment:</p>
        <button type="button" className="edit-button">
          Edit
        </button>
      </div>
    );
  }
}

export default Practical;
