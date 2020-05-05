import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import Project from "./Project.js";
/* import * as projectsData from "./projects.json"; */

import calcalImg from "../images/calcal.gif";
import mapsImg from "../images/maps.gif";
import calculatorImg from "../images/calc.png";
import listerImg from "../images/Lister.png";

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
					A react app that uses reacts context api for cross component access to user tasks.
					<br />
					<br />
					<u>Key practices used:</u>
					<br />
					- Js native date system (new Date(), getTime, ext). <br />
					- Creating forms in react. <br />
					- Native draggables API for moving tasks around and resizing them. Resizing changes task
					endTime (this does not currently work well in firefox).
					<br />
					- Side panel uses a package called reactCalander
					<br />
					- Smart functionality is concentrated in "Day" component. <br /> Most other functionality
					is delegated to Day.
					<br />- Responsive design.
				</span>
			),
			img: calcalImg,
			link: "https://ori-roll.github.io/Calcalendarder/",
			repo: "https://github.com/Ori-Roll/Calcalendarder",
			style: { gridTemplateColumns: "6fr 2fr" },
		},
		{
			key: "lister",
			name: "Star Wars API Lister",
			discription: (
				<span>
					Star-Wars catalogue using SWAPI.
					<br />
					A pet project practicing redux axios and more <br />
					<br />
					Sorts entries from the star wars API ("https://swapi.py4e.com/api/") into groups <br />
					Choose a group to show category items <br />
					<br />
					<u>Key practices used:</u>
					<br />
					- Using the Redux store for cross component access to have all already downloaded data
					(caching).
					<br />
					- Using axios to get and set data on a remote API.
					<br />
					- Managing asynchronous actions and API replies.
					<br />
					- Possibly using material-ui for user interface. (WIP)
					<br /> - Using more 3rd party libraries like lodash.
				</span>
			),
			img: listerImg,
			link: "https://ori-roll.github.io/SW-Lister/",
			repo: "https://github.com/Ori-Roll/SW-Lister",
		},
		{
			key: "map-creator",
			name: "Map Creator",
			discription: (
				<span>
					Work in progress.
					<br />
					<br />
					An experiment with procedurally creating a map. <br />
					The creator first randomly creates clusters of mountains (ridges) in an array according to
					a few initial parameters.
					<br />
					The code then makes (one) array of a 2d points precipitation map and proceeds to simulate
					how the water in each point will flow from higher areas points to lower ones, thus
					creating irrigated areas (that will grow trees), and areas where water overflows, creating
					rivers and lakes.
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
		},
	];

	return (
		<div className='portfolio-page'>
			<div className='portfolio-header'>
				{projects.map((proj) => (
					<NavLink to={`/portfolio/${proj.name}`} key={proj.key} activeStyle={{ color: "#0a6ecc" }}>
						{proj.name}
					</NavLink>
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
