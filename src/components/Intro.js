import React from "react";
import { Link } from "react-router-dom";

function Intro() {
	return (
		<div className='intro-page'>
			<div className='intro-head'>
				<h1>ORI ROLL</h1>
				<br />
				<h2>Portfolio and CV</h2>
			</div>

			<Link className='intro-link' to='/portfolio'>
				Portfolio
			</Link>
			<Link className='intro-link' to='/cv'>
				My Cv
			</Link>
			<Link className='intro-link' to='/contact'>
				Contact me
			</Link>
		</div>
	);
}

export default Intro;
