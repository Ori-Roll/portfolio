import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Portfolio from "./Portfolio.js";
import Cv from "./Cv.js";
import Contact from "./Contact.js";

function Main() {
	return (
		<div className='main'>
			<Switch>
				<Route exact path='/'>
					<Redirect to='/portfolio' />
				</Route>
				<Route path='/portfolio'>
					<Portfolio />
				</Route>
				<Route path='/cv'>
					<Cv />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</Switch>
		</div>
	);
}

export default Main;
