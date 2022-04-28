import React from 'react';
import GeneralEdit from './components/GeneralEdit';
import EducationalEdit from './components/EducationalEdit';
import PracticalEdit from './components/PracticalEdit';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

function App() {
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

export default App;
