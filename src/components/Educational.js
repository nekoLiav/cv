import React, { Component } from 'react';
import EducationalEdit from './EducationalEdit';

class Educational extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      subject: '',
      dateStart: '',
      dateEnd: ''
    };

    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleDateStartChange = this.handleDateStartChange.bind(this);
    this.handleDateEndChange = this.handleDateEndChange.bind(this);
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

  render() {
    return (
      <div className="educational">
        {this.props.mode && (
          <EducationalEdit
            school={this.state.school}
            changeSchool={this.handleSchoolChange}
            subject={this.state.subject}
            changeSubject={this.handleSubjectChange}
            dateStart={this.state.dateStart}
            changeDateStart={this.handleDateStartChange}
            dateEnd={this.state.dateEnd}
            changeDateEnd={this.handleDateEndChange}
          />
        )}
        {!this.props.mode && (
          <div className="info">
            <p>School Name: {this.state.school}</p>
            <p>Subject: {this.state.subject}</p>
            <p>Start Date: {this.state.dateStart}</p>
            <p>End Date: {this.state.dateEnd}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Educational;
