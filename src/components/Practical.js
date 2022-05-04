import React, { useState } from 'react';
import PracticalEdit from './PracticalEdit';

const Practical = (props) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleDateStartChange = (e) => {
    setDateStart(e.target.value);
  };

  const handleDateEndChange = (e) => {
    setDateEnd(e.target.value);
  };

  return (
    <div className="practical">
      {props.mode && (
        <PracticalEdit
          company={company}
          changeCompany={handleCompanyChange}
          position={position}
          changePosition={handlePositionChange}
          dateStart={dateStart}
          changeDateStart={handleDateStartChange}
          dateEnd={dateEnd}
          changeDateEnd={handleDateEndChange}
        />
      )}
      {!props.mode && (
        <div className="info">
          <p>Company Name: {company}</p>
          <p>Position/Role: {position}</p>
          <p>Start Date: {dateStart}</p>
          <p>End Date: {dateEnd}</p>
        </div>
      )}
    </div>
  );
};

export default Practical;
