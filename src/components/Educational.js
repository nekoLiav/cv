import React, { Component } from 'react';
import EducationalEdit from './EducationalEdit';

class Educational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editState: false,
      school: '',
      subject: '',
      date: ''
    };

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSchoolChange(e) {
    this.setState({ school: e.target.value });
  }

  handleSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }

  handleDateChange(e) {
    this.setState({ date: e.target.value });
  }

  handleEdit() {
    this.state.editState ? this.setState({ editState: false }) : this.setState({ editState: true });
  }

  handleSubmit(e) {
    this.setState({ editState: false });
    e.preventDefault();
  }

  render() {
    return (
      <div className="educational">
        {this.state.editState ? (
          <EducationalEdit
            school={this.state.school}
            changeSchool={this.handleSchoolChange}
            subject={this.state.subject}
            changeSubject={this.handleSubjectChange}
            date={this.state.date}
            changeDate={this.handleDateChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <div className="info">
            <p>School Name: {this.state.school}</p>
            <p>Title of Study: {this.state.subject}</p>
            <p>Date of Study: {this.state.date}</p>
            <button type="button" className="edit-button" onClick={this.handleEdit}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Educational;
