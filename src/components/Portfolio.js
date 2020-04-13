import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Project from "./Project.js";
/* import * as projectsData from "./projects.json"; */

import calcalImg from "../images/calcal.gif";
import mapsImg from "../images/maps.gif";
import calculatorImg from "../images/calc.png";

function Portfolio() {
	/* console.log("data is :" + projectsData); */
	/* const projects = projectsData;
	console.log(projects); */

	const projects = [
		{
			key: "calcalenderder",
			name: "Calcalenderder",
			discription: (
				<span>
					It's a react app that also uses the react context api for storing all user tasks so the
					app can use it whenever it needs to.
					<br />
					The context sorts the tasks by date and time so it's possible to get tasks more
					efficiently. The app uses the js native date system (like Date(), getTime, ext) and
					doesn't use external date managing packages.
					<br />
					It was good practice in creating forms in react and also in using draggables for moving
					tasks around. The side panel with the dates uses a package called reactCalander (only for
					its very basic functionality - when a user clicks a date on the side panel the app gets a
					new date object to set current focus date). Users can also change the length of a task -
					the tasks endDate - by dragging its bottom edge (this does not currently work well in
					firefox).
					<br />
					Most of the "smart" functionality is concentrated in the "Day" component. Most of the
					functionality on other components is delegated to Day.
				</span>
			),
			img: calcalImg,
			link: "https://ori-roll.github.io/Calcalendarder/",
			repo: "https://github.com/Ori-Roll/Calcalendarder",
			style: { gridTemplateColumns: "6fr 2fr" },
		},
		{
			key: "map-creator",
			name: "Map Creator WIP",
			discription: (
				<span>
					A work in progress, this is an experiment with procedurally creating a map. <br />
					The creator first creates clusters of mountains (ridges) according to a few initial
					parameters. The code then makes a 2d points precipitation map and proceeds to simulate how
					the water in each point will flow from higher areas to lower ones, thus creating irrigated
					areas (that will grow trees) where water accumulates, and areas where water overflows,
					creating rivers and lakes.
					<br />
					Eventually the map will come with a menu allowing you to choose the amount of mountains
					and their composition, the amount of rain, affecting rivers and vegetation, houses (to be
					placed organically where people might want to live) and other map elements.
				</span>
			),
			img: mapsImg,
			link: "https://ori-roll.github.io/map-maker/",
			repo: "https://github.com/Ori-Roll/map-maker",
			style: { gridTemplateColumns: "2fr 2fr" },
		},
		{
			key: "calculator",
			name: "Simple calculator",
			discription: "A basic calculator app.",
			img: calculatorImg,
			link: "https://ori-roll.github.io/Test_CalculatorV2/",
			repo: "https://github.com/Ori-Roll/Test_CalculatorV2",
			style: { gridTemplateColumns: "1fr 2fr" },
		} /* ,
		{
			key: "D",
			name: "D",
			discription: "D Dis",
			img: "./Dimg",
			link: "www.linkD",
			repo: "https://github.com/Ori-Roll/Calcalendarder",
		}, */,
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
				{projects.map((proj) => (
					<Route key={proj.key} path={`/portfolio/${proj.name}`}>
						<Project key={proj.key} details={proj} />
					</Route>
				))}
				<Route exact path='/portfolio'>
					<Redirect to={projects[0] ? `/portfolio/${projects[0].name}` : "/portfolio"} />
				</Route>
			</Switch>
		</div>
	);
}

export default Portfolio;

/* A calender app. The user can move through dates and the cpecified dates week will be
shown. Create tasks with start and end dates that will be stored globally. Entries have
Headlines, discriptions and colors that can be changed. Set tasks can be edited or dragged
to a new time of the week. Calcalenderder uses context API to gather all entries data. It
also orgenises the APIs state data by dates, making sure fatching an entry can be made
efficiantly. Week data is stored locally and is fatched from the context

 */
