import React from "react";
import PropTypes from "prop-types";

function Project(props) {
	const { name, discription, img, link, style } = props.details;
	return (
		<div className='project' style={style}>
			<img
				src={img}
				className='project-img'
				alt={"This IMG/GIF is not here"}
				onClick={() => (window.location.href = "http://www.ynet.co.il")}
			/>
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
	img: PropTypes.string,
};

export default Project;
