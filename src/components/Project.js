import React from "react";
import PropTypes from "prop-types";

function Project(props) {
	const { name, discription, img } = props.details;
	return (
		<div className='project'>
			<h3>{name}</h3>
			<p>{discription}</p>
			<div>{img}</div>
		</div>
	);
}

Project.prototypes = {
	name: PropTypes.string.isRequired,
	discription: PropTypes.string,
	img: PropTypes.string
};

export default Project;
