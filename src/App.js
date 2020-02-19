import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./components/Main.js";

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Main />
			</div>
		</Router>
	);
}

export default App;
