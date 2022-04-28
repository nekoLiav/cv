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
      </div>
    );
  }
}

export default General;
