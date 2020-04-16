import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Portfolio from "./Portfolio.js";
import Cv from "./Cv.js";
import Contact from "./Contact.js";
import Intro from "./Intro.js";

function Main() {
	return (
		<div className='main'>
			<Switch>
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/cv' component={Cv} />
				<Route path='/contact' component={Contact} />
				<Route exact path='/' component={Intro} />
			</Switch>
		</div>
	);
}

export default Main;
