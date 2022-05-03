import React, { Component } from 'react';
import PracticalEdit from './PracticalEdit';

class Practical extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: '',
      dateStart: '',
      dateEnd: ''
    };

    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handlePositionChange = this.handlePositionChange.bind(this);
    this.handleDateStartChange = this.handleDateStartChange.bind(this);
    this.handleDateEndChange = this.handleDateEndChange.bind(this);
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

  render() {
    return (
      <div className="practical">
        {this.props.mode && (
          <PracticalEdit
            company={this.state.company}
            changeCompany={this.handleCompanyChange}
            position={this.state.position}
            changePosition={this.handlePositionChange}
            dateStart={this.state.dateStart}
            changeDateStart={this.handleDateStartChange}
            dateEnd={this.state.dateEnd}
            changeDateEnd={this.handleDateEndChange}
          />
        )}
        {!this.props.mode && (
          <div className="info">
            <p>Company Name: {this.state.company}</p>
            <p>Position/Role: {this.state.position}</p>
            <p>Start Date: {this.state.dateStart}</p>
            <p>End Date: {this.state.dateEnd}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Practical;
