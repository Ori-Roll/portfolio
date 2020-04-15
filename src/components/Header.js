import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
	/* const [currentPage, setCurrentPage] = useState("portfolio");
	const pageOptions = {
		none: { color: "blue" },
		portfolio: { color: "blue" },
		CV: { color: "blue" },
		contact: { color: "blue" },
	}; */
	return (
		<div className='header'>
			<NavLink to='/portfolio' activeStyle={{ color: "#0a6ecc" }}>
				Portfolio
			</NavLink>
			<NavLink to='/cv' activeStyle={{ color: "#0a6ecc" }}>
				My Cv
			</NavLink>
			<NavLink to='/contact' activeStyle={{ color: "#0a6ecc" }}>
				Contact me
			</NavLink>
		</div>
	);
}

export default Header;
