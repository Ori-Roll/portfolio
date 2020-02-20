import React from "react";

function Cv() {
	return (
		<div className='cv'>
			<header className='cv-page-header'>
				<img src='./avatar.png' />
				<h1>Ori Roll</h1>
				<p>Ex-architect applying software engineering position</p>
			</header>

			<div className='cv-print'>
				<p>&#xf1c1;</p>
			</div>

			<div className='cv-section-contact'>
				<h3 className='cv-section-header'>CONTACT ME</h3>
				<p style={{ padding: "10px 0" }}>054-4897787</p>
				<a href='mailto:oriroll@gmail.com'>oriroll@gmail.com</a>
				<br />
				<a href='https://github.com/Ori-Roll'>https://github.com/Ori-Roll</a>
			</div>

			<div className='cv-section-about'>
				<h3 className='cv-section-header'>ABOUT ME</h3>
				<p>
					Im an ex architect !! <br />
					STUFF GOES HERE
					<br />
					STUFF GOES HERE
					<br />
					STUFF GOES HERE
				</p>
			</div>

			<div className='cv-section-work'>
				<h3 className='cv-section-header'>WORK EXPERIENCE</h3>
				<div className='cv-episode'>
					<div className='cv-episode-header'>
						<h2>Milner architects</h2>
						<h4>2000-2003</h4>
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
						<h2>Work as an independent architect (under contract for Azrieli)</h2>
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
						<h4>2015-2016</h4>
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
					<h3>Technical skills</h3>
					<p> HTML, CSS, JS</p>
					<p>REACT (with redux/contextAPI, react router)</p>
					<p>AutoCAD, SketchUp, Revit, 3ds-max, Vray, Photoshop, Illustrator</p>
				</div>
				<div className='cv-episode'>
					<h3>Languages</h3>
					<p>Hebrew - native speaker</p>
					<p> English - native speaker level</p>
				</div>
			</div>
		</div>
	);
}

export default Cv;
