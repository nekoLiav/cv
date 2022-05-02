import React, { Component } from 'react';
import EducationalEdit from './EducationalEdit';

class Educational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      school: '',
      subject: '',
      dateStart: '',
      dateEnd: ''
    };

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleDateStartChange = this.handleDateStartChange.bind(this);
    this.handleDateEndChange = this.handleDateEndChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSchoolChange(e) {
    this.setState({ school: e.target.value });
  }

  handleSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }

  handleDateStartChange(e) {
    this.setState({ dateStart: e.target.value });
  }

  handleDateEndChange(e) {
    this.setState({ dateEnd: e.target.value });
  }

  handleEdit() {
    this.state.edit ? this.setState({ edit: false }) : this.setState({ edit: true });
  }

  handleSubmit(e) {
    this.setState({ edit: false });
    e.preventDefault();
  }

  render() {
    return (
      <div className="educational">
        {this.state.edit && (
          <EducationalEdit
            school={this.state.school}
            changeSchool={this.handleSchoolChange}
            subject={this.state.subject}
            changeSubject={this.handleSubjectChange}
            dateStart={this.state.dateStart}
            changeDateStart={this.handleDateStartChange}
            dateEnd={this.state.dateEnd}
            changeDateEnd={this.handleDateEndChange}
            handleSubmit={this.handleSubmit}
          />
        )}
        {!this.state.edit && (
          <div className="info">
            <p>School Name: {this.state.school}</p>
            <p>Title of Study: {this.state.subject}</p>
            <p>Start Date: {this.state.dateStart}</p>
            <p>End Date: {this.state.dateEnd}</p>
            {this.props.mode && (
              <button type="button" className="edit-button" onClick={this.handleEdit}>
                Edit
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Educational;
