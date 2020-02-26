import React from "react";
import PropTypes from "prop-types";

function Project(props) {
	const { name, discription, img, link } = props.details;
	return (
		<div className='project'>
			<img src={img} className='project-img' alt={"This IMG/GIF is not here"} />
			<div className='proj-details'>
				<h3>{name}</h3>
				<p>{discription}</p>
				<p>
					<a href={link}>{link}</a>
				</p>
			</div>
		</div>
	);
}

Project.prototypes = {
	name: PropTypes.string.isRequired,
	discription: PropTypes.string,
	img: PropTypes.string
};

export default Project;
