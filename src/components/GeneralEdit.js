import React, { Component } from 'react';

class GeneralEdit extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="general-edit">
        <form className="general-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name:
            <input type="text" id="name" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" />
          </label>
          <label htmlFor="phone">
            Phone Number:
            <input type="text" id="phone" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralEdit;
