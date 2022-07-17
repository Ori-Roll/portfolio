import React from 'react';

const Episode = (props) => {
  const { workplace, year, jobTitle, details } = props;

  return (
    <div className="cv-episode">
      <div className="cv-episode-header">
        <h2>{workplace}</h2>
        <h4>{year}</h4>
      </div>
      {jobTitle ? <h3>{jobTitle}</h3> : null}
      <p>{details}</p>
    </div>
  );
};

export default Episode;
