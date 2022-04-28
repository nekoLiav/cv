import React, { Component } from 'react';

class PracticalEdit extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="practical-edit">
        <form className="practical-form" onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
}

export default PracticalEdit;
