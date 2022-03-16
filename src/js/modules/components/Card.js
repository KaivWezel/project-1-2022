export const createCard = (data) => {
	// Create elements in document
	const link = document.createElement("a");
	link.href = data.coverimages[1];
	const card = document.createElement("article");
	card.classList.add("bookCard");
	const hero = document.createElement("img");
	const title = document.createElement("h4");
	const desc = document.createElement("p");
	// Assign content to elements
	hero.src = data.coverimages[1];
	title.innerText = data.titles ? data.titles[0] : "Geen title beschikbaar";
	desc.innerText = data.description[1];
	// Append elements to card
	card.append(hero, title, desc);
	link.append(card);
	return link;
};
