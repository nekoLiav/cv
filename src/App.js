import React, { Component } from 'react';
import GeneralEdit from './components/GeneralEdit';
import EducationalEdit from './components/EducationalEdit';
import PracticalEdit from './components/PracticalEdit';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editState: {
        general: false,
        educational: false,
        practical: false
      },
      general: {
        name: '',
        email: '',
        phone: ''
      },
      educational: {
        school: '',
        subject: '',
        date: ''
      },
      practical: {
        company: '',
        position: '',
        role: '',
        date: ''
      }
    };
  }

  render() {
    return (
      <div className="main">
        <GeneralEdit />
        <EducationalEdit />
        <PracticalEdit />
        <General />
        <Educational />
        <Practical />
      </div>
    );
  }
}

export default App;
