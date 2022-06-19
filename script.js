async function processDataPlaces(url) {
	let response = await fetch(url);
	let places = await response.json();
	return places;
}

const createCard = (name, description, picture) => {
	const card = document.createElement('section');
	card.className = 'card';
	const section = document.createElement('section');
	const heading2 = document.createElement('h2');
	const paragraph = document.createElement('p');
	const img = document.createElement('img');

	heading2.innerText = name;
	paragraph.innerText = description;
	img.src = picture;

	card.appendChild(img);
	section.appendChild(heading2);
	section.appendChild(paragraph);
	card.appendChild(section);

	return card;
};

const renderPlaces = async () => {
	let places = await processDataPlaces('places.json');
	const cards = document.getElementById('cards');
	places.forEach((place) => {
		const placeName = place.name;
		const placeDescription = place.description;
		const placePicture = place.picture;

		cards.appendChild(createCard(placeName, placeDescription, placePicture));
	});
};

renderPlaces();
