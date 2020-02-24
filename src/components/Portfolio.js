import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Project from "./Project.js";
/* import * as projectsData from "./projects.json"; */

function Portfolio() {
	/* console.log("data is :" + projectsData); */
	/* const projects = projectsData;
	console.log(projects); */

	const projects = [
		{
			key: "calcalenderder",
			name: "Calcalenderder",
			discription:
				"A calender app. The user can move through dates and the cpecified dates week will be shown. Create tasks with start and end dates that will be stored globally. Entries have Headlines, discriptions and colors that can be changed. Set tasks can be edited or dragged to a new time of the week. " +
				"Calcalenderder uses context API to gather all entries data. It also orgenises the APIs state data by dates, making sure fatching an entry can be made efficiantly. Week data is stored locally and is fatched from the context",
			img:
				"https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg",
			link: "www.linkB"
		},
		{
			key: "B",
			name: "B",
			discription: "Bthis",
			img: "Bimg",
			link: "www.linkB"
		},
		{ key: "C", name: "C", discription: "C dis", img: "Cimg", link: "www.linkc" },
		{ key: "D", name: "D", discription: "D Dis", img: "Dimg", link: "www.linkD" }
	];

	return (
		<div className='portfolio-page'>
			<div>
				{projects.map(proj => (
					<Link to={`/portfolio/${proj.name}`} key={proj.key}>
						{proj.name}
					</Link>
				))}
			</div>
			<Switch>
				<Route exact path='/portfolio'>
					<Redirect to={projects[0] ? `/portfolio/${projects[0].name}` : "/portfolio"} />
				</Route>
				{projects.map(proj => (
					<Route key={proj.key} path={`/portfolio/${proj.name}`}>
						<Project key={proj.key} details={proj} />
					</Route>
				))}
			</Switch>
		</div>
	);
}

export default Portfolio;
