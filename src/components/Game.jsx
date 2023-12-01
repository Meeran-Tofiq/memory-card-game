import Images from "./Images";
import { useState } from "react";

export default function Game({ playing }) {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	return (
		<>
			<div className="score">
				<span>Score is {score}</span>
				<span>Highest Score is {highScore}</span>
			</div>
			<Images
				score={score}
				setScore={setScore}
				highScore={highScore}
				setHighScore={setHighScore}
			/>
		</>
	);
}
