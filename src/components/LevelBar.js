import React, { useRef, useEffect } from "react";

function LevelBar({ level, comment, skill }) {
	const canvasRef = useRef(null);
	const colorForCircles = "#486985";
	function drawLevel(ctx, level) {
		let LevelDec = level % 1 ? level % 1 : 0;
		let levelInt = Math.floor(level);

		for (let i = 5; i > 0; i--) {
			const xDistance = (i - 0.5) * 25 - 2;
			let circlePart = i <= levelInt ? 2 * Math.PI : 2 * Math.PI * LevelDec;
			if (LevelDec && i > levelInt + 1) {
				circlePart = 0;
			}
			levelCircle(ctx, xDistance, circlePart);
		}
	}

	function levelCircle(ctx, xDistance, circlePart) {
		ctx.imageSmoothingEnabled = true;
		ctx.imageSmoothingQuality = "high";
		ctx.beginPath();
		ctx.strokeStyle = colorForCircles;
		ctx.arc(xDistance, 16, 10, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.beginPath();
		ctx.strokeStyle = "white";
		ctx.arc(xDistance, 16, 9, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.beginPath();
		ctx.fillStyle = colorForCircles;
		ctx.arc(xDistance, 16, 8, 0.5 * Math.PI, circlePart + 0.5 * Math.PI);
		ctx.fill();
	}

	useEffect(() => {
		const canvas = canvasRef.current;
		let ctx = canvasRef.current.getContext("2d");
		drawLevel(ctx, level);
		/* ctx.fill(); */
	}, []);

	/* debugger; */

	return (
		<div className='skill-bar'>
			<canvas ref={canvasRef} width={"125px"} height={"30px"} /*  className='level-bar' */ />
			<p>{skill}</p>
			<p className='skill-bar-comment'>{comment}</p>
		</div>
	);
}

export default LevelBar;

/* let LevelDec = level % 1 ? level % 1 : 0;
		let levelInt = Math.floor(level); */
/* let xDistance = 15;
		for (let levelPos = level; levelPos > level - 5; levelPos--) {
			const circlePart =
				Math.sign(levelPos) === 1 ? (levelPos - Math.floor(levelPos) - 1) * 2 * Math.PI : 0;
			console.log(levelPos - Math.floor(levelPos));
			
			levelCircle(ctx, xDistance, circlePart);
			xDistance += 25;
		} */
