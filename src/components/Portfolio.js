import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Project from "./Project.js";
/* import * as projectsData from "./projects.json"; */

function Portfolio() {
	/* console.log("data is :" + projectsData); */
	/* const projects = projectsData;
	console.log(projects); */

	const projects = [
		{ key: "A", name: "A", discription: "A dis", img: "Aimg" },
		{ key: "B", name: "B", discription: "B dis", img: "Bimg" },
		{ key: "C", name: "C", discription: "C dis", img: "Cimg" },
		{ key: "D", name: "D", discription: "D Dis", img: "Dimg" }
	];

	return (
		<div className='portfolio-page'>
			<div>
				{projects.map(proj => (
					<Link to={`/portfolio/${proj.name}`}>{proj.name}</Link>
				))}
			</div>
			<Switch>
				<Route exact path='/portfolio'>
					<Redirect to={projects[0] ? `/portfolio/${projects[0].name}` : "/portfolio"} />
				</Route>
				{projects.map(proj => (
					<Route path={`/portfolio/${proj.name}`}>
						<Project key={proj.key} details={proj} />
					</Route>
				))}
			</Switch>
		</div>
	);
}

export default Portfolio;
