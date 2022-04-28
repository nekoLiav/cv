import React, { Component } from 'react';

class PracticalEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: '',
      tasks: '',
      dates: ''
    };

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleTasksChange = this.handleTasksChange.bind(this);
    this.handleDatesChange = this.handleDatesChange.bind(this);
  }

  handleCompanyChange(e) {
    this.setState({ company: e.target.value });
  }

  handlePositionChange(e) {
    this.setState({ position: e.target.value });
  }

  handleTasksChange(e) {
    this.setState({ tasks: e.target.value });
  }

  handleDatesChange(e) {
    this.setState({ dates: e.target.value });
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
            <input type="text" value={this.state.company} onChange={this.handleCompanyChange} />
          </label>
          <label>
            Title of Position:
            <input type="text" value={this.state.position} onChange={this.handlePositionChange} />
          </label>
          <label>
            Main Responsibilities:
            <input type="text" value={this.state.tasks} onChange={this.handleTasksChange} />
          </label>
          <label>
            Dates of Employment:
            <input type="text" value={this.state.dates} onChange={this.handleDatesChange} />
          </label>
          <button type="submit">Submit</button>
          <button type="button">Edit</button>
        </form>
      </div>
    );
  }
}

export default PracticalEdit;
