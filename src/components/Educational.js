import React, { Component } from 'react';

class Educational extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="educational">
        <p>School Name:</p>
        <p>Title of Study:</p>
        <p>Date of Study:</p>
        <button type="button" className="edit-button">
          Edit
        </button>
      </div>
    );
  }
}

export default Educational;
