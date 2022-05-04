import React, { useState } from 'react';
import EducationalEdit from './EducationalEdit';

const Educational = (props) => {
  const [school, setSchool] = useState('');
  const [subject, setSubject] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const handleSchoolChange = (e) => {
    setSchool(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDateStartChange = (e) => {
    setDateStart(e.target.value);
  };

  const handleDateEndChange = (e) => {
    setDateEnd(e.target.value);
  };

  return (
    <div className="educational">
      {props.mode && (
        <EducationalEdit
          school={school}
          changeSchool={handleSchoolChange}
          subject={subject}
          changeSubject={handleSubjectChange}
          dateStart={dateStart}
          changeDateStart={handleDateStartChange}
          dateEnd={dateEnd}
          changeDateEnd={handleDateEndChange}
        />
      )}
      {!props.mode && (
        <div className="info">
          <p>School Name: {school}</p>
          <p>Subject: {subject}</p>
          <p>Start Date: {dateStart}</p>
          <p>End Date: {dateEnd}</p>
        </div>
      )}
    </div>
  );
};

export default Educational;
