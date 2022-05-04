import React, { useState } from 'react';
import General from './components/General';
import Educational from './components/Educational';
import Practical from './components/Practical';

const App = () => {
  const [mode, setMode] = useState(true);

  const [educationList, setEducationList] = useState([{ key: Date.now() }]);

  const [employmentList, setEmploymentList] = useState([{ key: Date.now() }]);

  return (
    <div className="page">
      <header>
        <p>Simple CV</p>
      </header>
      <div className="main">
        <div className="candidate-info">
          <General mode={mode} />
          <div className="info-containers">
            <div className="educational-container">
              <h1>Education Background</h1>
              {educationList.map((l) => (
                <Educational key={l.key} mode={mode} />
              ))}
              {mode && (
                <button
                  type="button"
                  className="add-button"
                  onClick={() =>
                    setEducationList((prevState) => [...prevState, { key: Date.now() }])
                  }>
                  Add Education
                </button>
              )}
            </div>
            <div className="practical-container">
              <h1>Employment Background</h1>
              {employmentList.map((l) => (
                <Practical key={l.key} mode={mode} />
              ))}
              {mode && (
                <button
                  type="button"
                  className="add-button"
                  onClick={() =>
                    setEmploymentList((prevState) => [...prevState, { key: Date.now() }])
                  }>
                  Add Employment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="toggle-edit-button"
          onClick={() => setMode(mode ? false : true)}>
          {mode ? 'Preview Mode' : 'Edit Mode'}
        </button>
      </div>
      <footer></footer>
    </div>
  );
};

export default App;
