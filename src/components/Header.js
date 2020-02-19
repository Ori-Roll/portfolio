import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className='header'>
			<Link to='/portfolio'>Portfolio</Link>
			<Link to='/cv'>My Cv</Link>
			<Link to='contact'>Contact me</Link>
		</div>
	);
}

export default Header;
