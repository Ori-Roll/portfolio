import React from "react";
import LevelBar from "./LevelBar.js";
import avatar from "../images/avatar.png";
import printIcon from "../images/print-icon.png";
import pdfIcon from "../images/pdf17.svg";
import pdfCv from "../images/pdf-cv.pdf";

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
					Novice front end developer with a background in architecture
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
					Hey, I'm Ori, an ex building architect (b.arch from the Technion), who has written a lot
					of code as a hobby. Recently, I've decided to up my game, improve my skills, and start
					looking for a job as a full time web developer. I've created websites, games, a calendar
					app (like google calendar) and more. I like simple and efficient solutions for programming
					problems and always try having reusable and concise code.
				</p>
			</div>

			<div className='cv-section-work'>
				<h3 className='cv-section-header'>WORK EXPERIENCE</h3>
				<div className='cv-episode'>
					<div className='cv-episode-header'>
						<h2>Milner architects</h2>
						<h4>2016&#8202;-&#8202;2019</h4>
					</div>
					<h3>Staff architect</h3>
					<p>
						Private and commercial projects of different sizes and functions, mostly recreational
						projects such as hotels and health clubs. Involved in all the projects stages including
						initial design plans, permits, rendering final plans, working with and managing planning
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
						buildings sections and adjusting plans to tenant needs. Producing plans, 3d modeling and
						more. working in conjunction with external architects and building consultants.
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
						Residential projects, private homes, small and medium public projects. Rendering initial
						and conceptual plans, acquiring building permits, final plans, working with consultant
						teams and contractors on the final stages of the project, including building site
						supervision visits with the head architect.
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
					<h4>2000-2003</h4>
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
						<LevelBar level={3} skill={"HTML"} />
						<LevelBar level={2.5} skill={"CSS"} />
						<LevelBar level={3.5} skill={"JavaScript"} />
						<LevelBar
							level={3}
							skill={"React.js"}
							comment={"(with redux/contextAPI, react router)"}
						/>
					</div>
					<div className='cv-skill-others'>
						<h2>Other Skills</h2>
						<p>AutoCAD, SketchUp, Revit, 3ds-max, Vray, Photoshop, Illustrator</p>
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
