import React, { Component } from 'react';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hello: 'hello',
    };
  }

  render() {
    const { hello } = this.state;
    return (
      <div>
        <General hello={hello} />
        <button type="button">Edit</button>
        <Educational />
        <button type="button">Edit</button>
        <Practical />
        <button type="button">Edit</button>
      </div>
    );
  }
}

export default App;
