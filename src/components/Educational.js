import React, { Component } from 'react';

class Educational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      title: '',
      date: ''
    };

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleSchoolChange(e) {
    this.setState({ school: e.target.value });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="educational">
        <form className="educational-form" onSubmit={this.handleSubmit}>
          <label>
            School Name:
            <input type="text" value={this.state.school} onChange={this.handleSchoolChange} />
          </label>
          <label>
            Title of Study:
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <label>
            Date of Study:
            <input type="text" value={this.state.date} onChange={this.handleDateChange} />
          </label>
          <input type="submit" value="Submit" />
          <button type="button">Edit</button>
        </form>
      </div>
    );
  }
}

export default Educational;
