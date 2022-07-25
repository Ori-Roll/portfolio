import React from "react";

const Episode = (props) => {
  const { workplace, year, jobTitle, details, responsibilities } =
    props;

  return (
    <div className="cv-episode">
      {jobTitle || workplace || year ? (
        <div className="cv-episode-header">
          {jobTitle ? (
            <>
              <h2>{jobTitle}</h2>
              <small>{`/`}</small>
            </>
          ) : null}
          {workplace ? <h2>{workplace}</h2> : null}
          {year ? (
            <>
              <small>{`/`}</small>
              <h2>{year}</h2>
            </>
          ) : null}
        </div>
      ) : null}

      <p>{details}</p>
      {responsibilities ? (
        <ul className="cv-indented-ul">
          {responsibilities.map((responsibility) => (
            <li className="cv-indented-li">{responsibility}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Episode;
