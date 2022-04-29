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

    this.handleEdit = this.handleEdit.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleEdit() {
    this.state.editState ? this.setState({ editState: false }) : this.setState({ editState: true });
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
        <button type="button" className="edit-button" onClick={this.handleEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default App;
