import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="general">
        <p>Name:</p>
        <p>Email:</p>
        <p>Phone Number:</p>
        <button type="button" className="edit-button">
          Edit
        </button>
      </div>
    );
  }
}

export default General;
