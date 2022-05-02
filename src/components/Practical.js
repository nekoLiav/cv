import React, { Component } from 'react';
import PracticalEdit from './PracticalEdit';

class Practical extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      company: '',
      position: '',
      dateStart: '',
      dateEnd: ''
    };

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleDateStartChange = this.handleDateStartChange.bind(this);
    this.handleDateEndChange = this.handleDateEndChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCompanyChange(e) {
    this.setState({ company: e.target.value });
  }

  handlePositionChange(e) {
    this.setState({ position: e.target.value });
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
      <div className="practical">
        {this.state.edit && (
          <PracticalEdit
            company={this.state.company}
            changeCompany={this.handleCompanyChange}
            position={this.state.position}
            changePosition={this.handlePositionChange}
            dateStart={this.state.dateStart}
            changeDateStart={this.handleDateStartChange}
            dateEnd={this.state.dateEnd}
            changeDateEnd={this.handleDateEndChange}
            handleSubmit={this.handleSubmit}
          />
        )}
        {!this.state.edit && (
          <div className="info">
            <p>Company Name: {this.state.company}</p>
            <p>Position/Role: {this.state.position}</p>
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

export default Practical;
