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
			img: "../Calcal.gif",
			/* "https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg", */
			link: "www.linkB",
			style: { gridTemplateColumns: "6fr 2fr" },
		},
		{
			key: "map-creator",
			name: "Map Creator",
			discription:
				"A work in prograss, this is an experiment with precidurly creating a map. The creator first creates clusters of maps (ridges) according to a fue initial parameters, then it makes a precipitation map and proceeds to simulate how the water will flow from heiger areas to lower ones, thus creating irrigated areas (that will grow trees) and areas where water overflows, creating rivers and lakes",
			img: "../maps.gif",
			link: "www.linkB",
			style: { gridTemplateColumns: "2fr 2fr" },
		},
		{
			key: "calculator",
			name: "Simple calculator",
			discription: "A basic calculator app.",
			img: "../calc.png",
			link: "www.linkc",
			style: { gridTemplateColumns: "1fr 2fr" },
		},
		{ key: "D", name: "D", discription: "D Dis", img: "Dimg", link: "www.linkD" },
	];

	return (
		<div className='portfolio-page'>
			<div className='portfolio-header'>
				{projects.map((proj) => (
					<Link to={`/portfolio/${proj.name}`} key={proj.key}>
						{proj.name}
					</Link>
				))}
			</div>
			<Switch>
				<Route exact path='/portfolio'>
					<Redirect to={projects[0] ? `/portfolio/${projects[0].name}` : "/portfolio"} />
				</Route>
				{projects.map((proj) => (
					<Route key={proj.key} path={`/portfolio/${proj.name}`}>
						<Project key={proj.key} details={proj} />
					</Route>
				))}
			</Switch>
		</div>
	);
}

export default Portfolio;
