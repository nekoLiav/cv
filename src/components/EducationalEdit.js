import React, { Component } from 'react';

class EducationalEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      title: '',
      date: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="educational-edit">
        <form className="educational-form" onSubmit={this.handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EducationalEdit;
