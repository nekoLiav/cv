import React, { Component } from 'react';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationList: [],
      employmentList: []
    };

    this.submitForm = this.submitForm.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addEmployment = this.addEmployment.bind(this);
  }

  submitForm(e) {
    this.setState({ name: e.target.value });
    e.preventDefault();
    console.log(e.target);
  }

  addEducation() {
    this.setState((prevState) => ({
      educationList: [
        ...prevState.educationList,
        { key: Date.now(), education: <Educational key={Date.now()} /> }
      ]
    }));
  }

  addEmployment() {
    this.setState((prevState) => ({
      employmentList: [
        ...prevState.employmentList,
        { key: Date.now(), employment: <Practical key={Date.now()} /> }
      ]
    }));
  }

  render() {
    return (
      <div className="main">
        <General />
        <div className="educational-container">
          {this.state.educationList.map((item) => item.education)}
          <button type="button" onClick={this.addEducation}>
            Add Education
          </button>
        </div>
        <div className="practical-container">
          {this.state.employmentList.map((item) => item.employment)}
          <button type="button" onClick={this.addEmployment}>
            Add Employment
          </button>
        </div>
      </div>
    );
  }
}

export default App;
