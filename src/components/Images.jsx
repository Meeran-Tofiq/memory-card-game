import { useState } from "react";
import imageArr from "../imageArr";

export default function Images({ score, setScore, highScore, setHighScore }) {
	const [clickedBefore, setClickedBefore] = useState([]);

	return (
		<div className="images">
			{shuffle(imageArr).map((image) => {
				return (
					<img
						key={image}
						src={image}
						onClick={() => {
							if (clickedBefore.includes(image)) {
								if (score > highScore) setHighScore(score);
								setScore(0);
								setClickedBefore([]);
							} else {
								setClickedBefore([...clickedBefore, image]);
								setScore(score + 1);
							}
						}}
					/>
				);
			})}
		</div>
	);
}

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex > 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
