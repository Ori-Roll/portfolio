import React from "react";
import PropTypes from "prop-types";

const Project = (props) => {
  const { name, discription, img, link, linkDisabled, repo, style } =
    props.details;

  function clickGotoProj(link) {
    window.location = link;
  }

  return (
    <div className="project" style={style}>
      <img
        src={img}
        className="project-img"
        alt={"This IMG/GIF is not here"}
        onClick={() => clickGotoProj(link)}
      />
      <div className="proj-details">
        <h3>{name}</h3>
        <p>{discription}</p>
        <h3>App:</h3>
        <p>
          <a pointerEvents={linkDisabled && "none"} href={link}>
            {link}
          </a>
        </p>
        <h3>Github Repository:</h3>
        <p>
          <a href={repo}>{repo}</a>
        </p>
      </div>
    </div>
  );
};

Project.prototypes = {
  name: PropTypes.string.isRequired,
  discription: PropTypes.string,
  img: PropTypes.string,
};

export default Project;
