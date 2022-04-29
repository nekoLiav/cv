import React, { Component } from 'react';
import PracticalEdit from './PracticalEdit';

class Practical extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editState: false,
      company: '',
      position: '',
      role: '',
      date: ''
    };

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCompanyChange(e) {
    this.setState({ company: e.target.value });
  }

  handlePositionChange(e) {
    this.setState({ position: e.target.value });
  }

  handleRoleChange(e) {
    this.setState({ role: e.target.value });
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
      <div className="practical">
        {this.state.editState ? (
          <PracticalEdit
            company={this.state.company}
            changeCompany={this.handleCompanyChange}
            position={this.state.position}
            changePosition={this.handlePositionChange}
            role={this.state.role}
            changeRole={this.handleRoleChange}
            date={this.state.date}
            changeDate={this.handleDateChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <div className="info">
            <p>Company Name: {this.state.company}</p>
            <p>Position: {this.state.position}</p>
            <p>Role: {this.state.role}</p>
            <p>Date of employment: {this.state.date}</p>
            <button type="button" className="edit-button" onClick={this.handleEdit}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Practical;
