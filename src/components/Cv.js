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
						<h4 style={{ fontSize: "1em" }}>054-4897787</h4>
					</div>
					<div>
						<h4>Email:</h4>
						<a href='mailto:oriroll@gmail.com'>oriroll@gmail.com</a>
					</div>
					<div className='cv-portfolio-link'>
						<h4>Portfolio:</h4>
						<a href='https://ori-roll.github.io/portfolio/#/'>
							https://ori-roll.github.io/portfolio/#/
						</a>
					</div>
					<div className='cv-github-link'>
						<h4>GitHub page:</h4>
						<a href='https://github.com/Ori-Roll'>https://github.com/Ori-Roll</a>
					</div>
				</div>
			</div>

			<div className='cv-section-about'>
				<h3 className='cv-section-header'>ABOUT ME - Why I changed my career</h3>
				<p>
					I am an ex architect and have worked as an architect for the last few years.
					<br />
					I have always loved programming and dicided, given the passion I have for it, to have a
					career change and look for a job as a software developer.
					<br />I like the idea of finding the simplest and most efficient solution for a
					complicated problem and I'm always trying to create clear and readable code.
				</p>
			</div>

			<div className='cv-section-work'>
				<h3 className='cv-section-header'>WORK EXPERIENCE</h3>
				<div className='cv-episode'>
					<div className='cv-episode-header'>
						<h2>Milner architects</h2>
						<h4>2016-2019</h4>
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
						<h4>2015-2016</h4>
					</div>
					<h3>Architect</h3>
					<p>
						Assisting Azrieli’s head architect with internal projects, offices, replanning of
						buildings sections and adjusting plans to tenant needs. Producing plans, 3d modeling
						etc., working in conjunction with external architects and building consultants.
						Additional work as an independent architect for the private sector.
					</p>
				</div>
				<div className='cv-episode'>
					<div className='cv-episode-header'>
						<h2>Nahmias architects</h2>
						<h4>2014-2015</h4>
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
