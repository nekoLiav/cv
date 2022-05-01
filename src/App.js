import React, { Component } from 'react';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: true,
      educationList: [{ key: Date.now() }],
      practicalList: [{ key: Date.now() }]
    };

    this.addEducation = this.addEducation.bind(this);
    this.addEmployment = this.addEmployment.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
  }

  addEducation() {
    this.setState((prevState) => ({
      educationList: [...prevState.educationList, { key: Date.now() }]
    }));
  }

  addEmployment() {
    this.setState((prevState) => ({
      practicalList: [...prevState.practicalList, { key: Date.now() }]
    }));
  }

  toggleMode() {
    this.setState(this.state.mode ? { mode: false } : { mode: true });
  }

  render() {
    return (
      <div className="page">
        <header />
        <div className="main">
          <General />
          <div className="info-containers">
            <div className="educational-container">
              <h1>Education Background</h1>
              {this.state.educationList.map((l) => (
                <Educational key={l.key} mode={this.state.mode} />
              ))}
              <button type="button" className="add-button" onClick={this.addEducation}>
                Add Education
              </button>
            </div>
            <div className="practical-container">
              <h1>Employment Background</h1>
              {this.state.practicalList.map((l) => (
                <Practical key={l.key} mode={this.state.mode} />
              ))}
              <button type="button" className="add-button" onClick={this.addEmployment}>
                Add Employment
              </button>
            </div>
          </div>
          <div className="button-container">
            <button type="button" className="toggle-edit-button" onClick={this.toggleMode}>
              Preview Mode
            </button>
          </div>
        </div>
        <footer />
      </div>
    );
  }
}

export default App;
