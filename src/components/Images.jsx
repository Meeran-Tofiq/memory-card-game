import imageArr from "../imageArr";

export default function Images({ playing }) {
	return (
		<div className="images">
			{shuffle(imageArr).map((image) => {
				return <img src={image} />;
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
