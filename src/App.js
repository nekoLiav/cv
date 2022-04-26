import React from 'react';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

function App() {
  return (
    <div className="main">
      <General />
      <Educational />
      <Practical />
    </div>
  );
}

export default App;
