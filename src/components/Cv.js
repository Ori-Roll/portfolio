import React from "react";

function Cv() {
	return (
		<div>
			<header className='Cv-page-header'>
				<h1>Ori Roll - Cv</h1>
				<p>Software engineering position</p>
			</header>

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

			<div className='cv-section'>
				<h3 className='cv-section-header'>WORK EXPERIENCE</h3>
				<div className='cv-episode'>
					<h2>Milner architects</h2>
					<h4>2000-2003</h4>
					<h3>Staff architect</h3>
					<p>
						Private and commercial projects of different sizes and functions, mostly recreational
						projects such as hotels and health clubs. <br />
						Involved in all the projects stages including initial design plans, permits, rendering
						final plans, working with and managing planning consultant teams and helping with
						supervising the building process until project completion.
					</p>
				</div>
			</div>
			<div className='cv-section-education'>
				<h3 className='cv-section-header'>EDUCATION & BACKGROUND</h3>
				<div className='cv-episode'>
					<h3>Academic qualifications</h3>
					<h4>2013</h4>
					<p>Bachelor's degree in architecture from Technion (B.Arc)</p>
				</div>
				<div className='cv-episode'>
					<h3>IDF</h3>
					<h4>2000-2003</h4>
					<p>Medic in the Combat engineering corps (“Handasa kravit”)</p>
				</div>
			</div>
			<div className='cv-section-skills'>
				<h3 className='cv-section-header'>TECHNICAL SKILLS</h3>
				<div className='cv-episode'>
					<p>
						HTML, CSS, JS , REACT AutoCAD, SketchUp, Revit, 3ds-max, Vray Photoshop, Illustrator
					</p>
				</div>
				<h3 className='cv-section-header'>LANGUAGES</h3>
				<div className='cv-episode'>
					<p>Hebrew - native speaker , English - native speaker level</p>
				</div>
			</div>
		</div>
	);
}

export default Cv;
