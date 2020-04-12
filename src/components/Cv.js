import React from "react";
import avatar from "../images/avatar.png";

function Cv() {
	return (
		<div className='cv'>
			<header className='cv-page-header'>
				<img src={avatar} alt='-' />
				<h1>Ori Roll</h1>
				<p>Ex-architect applying for a front-end development position</p>
			</header>

			<div className='cv-print'>
				<p>&#xf1c1;</p>
			</div>

			<div className='cv-section-contact'>
				<h3 className='cv-section-header'>CONTACT ME</h3>
				<h4>Phone:</h4>
				<h4 style={{ fontSize: "1em" }}>054-4897787</h4>
				<h4>email:</h4>
				<a href='mailto:oriroll@gmail.com'>oriroll@gmail.com</a>
				<br />
				<h4>github page:</h4>
				<a href='https://github.com/Ori-Roll'>https://github.com/Ori-Roll</a>
			</div>

			<div className='cv-section-about'>
				<h3 className='cv-section-header'>ABOUT ME - Why I changed my career</h3>
				<p>
					I am an ex architect and have worked as an architect for the last few years. <br />
					Seeing that, for many reasons, I don't like architecture as much as I thought I would, and
					given that I have always dabbled in programming and like it much more, I decided to have a
					career change and look for a job as a software developer.
					<br />
					Though I have a lot of experience in architecture, I am only a junior developer, so I am
					looking forward to bettering my skill and getting some experience in the field.
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
				<div className='cv-episode'>
					<h2>
						<u>Technical skills</u>
					</h2>
					<p> HTML, CSS, JS</p>
					<p>REACT (with redux/contextAPI, react router)</p>
					<p>AutoCAD, SketchUp, Revit, 3ds-max, Vray, Photoshop, Illustrator</p>
				</div>
				<div className='cv-episode'>
					<h2>
						<u>Languages</u>
					</h2>
					<p>Hebrew - native speaker</p>
					<p>English - native speaker level</p>
				</div>
			</div>
		</div>
	);
}

export default Cv;
