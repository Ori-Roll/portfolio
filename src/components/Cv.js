import React from "react";
import LevelBar from "./LevelBar.js";
import avatar from "../images/avatar.png";
import printIcon from "../images/print-icon.png";
import pdfIcon from "../images/pdf17.svg";
import pdfCv from "../images/Ori-Cv.pdf";

function Cv() {
	function goPDF() {
		let newWindow = window.open(pdfCv);
		/* if (newWindow === "undefiend") {
			setTimeout(() => goPrint(), 1000);
		} else {
			newWindow.save();
		} */
	}

	function goPrint() {
		window.print();
	}

	return (
		<div className='cv'>
			<header className='cv-page-header'>
				<img src={avatar} alt='-' />
				<h1>Ori Roll</h1>
				<p className='cv-header-sub'>
					Front end (+ novice backend) developer with a background in architecture 
				</p>
			</header>

			<div className='cv-page-header-print'>
				<img src={printIcon} alt='-' style={{ height: "2.5em" }} onClick={() => goPrint()} />
				<img src={pdfIcon} alt='-' style={{ height: "2.3em" }} onClick={() => goPDF()} />
			</div>

			<div className='cv-section-contact'>
				<h3 className='cv-section-header'>CONTACT ME</h3>
				<div className='cv-section-contact-deatils'>
					<div>
						<h4>Phone:</h4>
						<p /* style={{ fontSize: "1em" }} */>054-&#8202;4897787</p>
					</div>
					<div>
						<h4>Email:</h4>
						<a href='mailto:oriroll@gmail.com'>oriroll@gmail.com</a>
					</div>
					<div className='cv-github-link'>
						<h4>GitHub page:</h4>
						<a href='https://github.com/Ori-Roll'>github.com&#8202;/&#8202;Ori-Roll</a>
					</div>
					<div className='cv-portfolio-link'>
						<h4>Portfolio:</h4>
						<a href='https://ori-roll.github.io/portfolio/#/'>
							ori-roll.github.io&#8202;/&#8202;portfolio
						</a>
					</div>
					<div className='cv-portfolio-link'>
						<h4>Linkedin:</h4>
						<a href='https://www.linkedin.com/in/ori-roll-11152a1a7/'>
							linkedin.com&#8202;/&#8202;ori-roll
						</a>
					</div>
				</div>
			</div>

			<div className='cv-section-about'>
				<h3 className='cv-section-header'>ABOUT ME</h3>
				<p>
					Hey, I'm Ori, a Junior web developer (also, formerly a building architect - b.arch from the Technion). 
					I was writing code most of my life and am very passionet about it. I like simple and efficient solutions for programming
					problems and always try having reusable and concise code. I've created websites, games, a simple project managment app (like Monday.com) a calendar
					app for my portfolio (like google calendar) and more.
				</p>
			</div>

			<div className='cv-section-work'>
				<h3 className='cv-section-header'>WORK EXPERIENCE</h3>
				<div className='cv-episode'>
					<div className='cv-episode-header'>
						<h2>Working on a lean project management web app startup</h2>
						<h4>~2020</h4>
					</div>
					<p>
					During the corona outbreak, I worked on a web app startup - a proof of concept for a project managment app (similar to monday.com or clickUp).  
					I designed all of the client side structure (with React) and a most server side oparations (based on mongoDB and using node + express).
					I was working along with experienced developers.
					</p>
				</div>
				<div className='cv-episode'>
					<div className='cv-episode-header'>
						<h2>Milner architects</h2>
						<h4>2016&#8202;-&#8202;2019</h4>
					</div>
					<h3>Staff architect</h3>
					<p>
						Private and commercial projects such as hotels and health clubs. Worked with and managing planning
						consultant teams and helping with supervising the building process until project
						completion.
					</p>
				</div>
				<div className='cv-episode'>
					<div className='cv-episode-header'>
						<h2>Independent work (under contract for Azrieli)</h2>
						<h4>2015&#8202;-&#8202;2016</h4>
					</div>
					<h3>Architect</h3>
					<p>
						Assisting Azrieli’s head architect with internal projects, offices, replanning of
						buildings sections and more. Working in conjunction with external architects and building consultants.
						Additional work as an independent architect for the private sector.
					</p>
				</div>
				<div className='cv-episode'>
					<div className='cv-episode-header'>
						<h2>Nahmias architects</h2>
						<h4>2014&#8202;-&#8202;2015</h4>
					</div>

					<h3>Junior staff architect</h3>
					<p>
						Residential projects, private homes, small and medium public projects. Acquiring building permits, final plans, working with consultant
						teams and contractors including building site supervision visits with the head architect.
					</p>
				</div>
			</div>

			<div className='cv-section-education'>
				<h3 className='cv-section-header'>EDUCATION & BACKGROUND</h3>
				<div className='cv-episode'>
					<h2>Academic qualifications</h2>
					<h4>2013</h4>
					<p>Bachelor's degree in architecture from Technion (B.Arc)</p>
				</div>
				<div className='cv-episode'>
					<h2>IDF</h2>
					<h4>2000&#8202;-&#8202;2003</h4>
					<p>Medic in the Combat engineering corps (“Handasa kravit”)</p>
				</div>
			</div>
			<div className='cv-section-skills'>
				<h3 className='cv-section-header'>SKILLS</h3>
				<div className='cv-episode-skills-body'>
					{/* <h2>
						<u>Technical skills</u>
					</h2> */}
					<div className='cv-skill-prog'>
						<LevelBar level={3} skill={"HTML, CSS"} />
						<LevelBar level={4} skill={"JavaScript"} comment={"Very good understanding of concepts like functional programming, state, closures, scope, asynchronous, etc."} />
						<LevelBar
							level={4}
							skill={"React.js"}
							comment={"(with redux/contextAPI, react router). Proficient with function components, structure and render efficiancy."}
						/>
						<LevelBar
							level={1.5}
							skill={"Node.js + express + mongoDB+mongoose"}
							comment={"My server-side knowledge is relatively basic"}
						/>
					</div>
					<div className='cv-skill-others'>
						<h2>Other Skills</h2>
						<p>VS Code, NPM, Git. <br/> AutoCAD, Revit, 3ds-max, Photoshop</p>
					</div>
					<div className='cv-skill-languages'>
						<h2>Languages</h2>
						<p>Hebrew - native speaker</p>
						<p>English - native speaker level</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cv;

/* I have always written code as a hobby. Recently I've decided to have a career 
change and look for a job as a software developer.
<br />I like the idea of finding the simplest and most efficient solution for a
complicated problem and I'm always trying to create clear and readable code. */
