import React, { Component } from 'react';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editState: false
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    this.setState({ name: e.target.value });
    e.preventDefault();
    console.log(e.target);
  }

  render() {
    return (
      <div className="main">
        <div className="information-fields">
          <General editState={this.state.editState} />
          <Educational editState={this.state.editState} />
          <Practical editState={this.state.editState} />
        </div>
      </div>
    );
  }
}

export default App;
