export const bookCard = (data) => {
	// Create elements in document
	console.log(data);
	const link = document.createElement("a");
	const card = document.createElement("article");
	card.classList.add("bookCard");
	const hero = document.createElement("img");
	const title = document.createElement("h4");
	const desc = document.createElement("p");
	// Assign content to elements
	link.href = data.detailLink;
	hero.src = data.coverimages[1];
	title.innerText = data.titles ? data.titles[0] : "Geen title beschikbaar";
	desc.innerText = data.summaries
		? data.summaries[0]
		: "Geen samenvatting beschikbaar";
	// Append elements to card
	card.append(hero, title, desc);
	link.append(card);
	return link;
};

export const resultCard = (data) => {
	console.log(data);
	const card = document.createElement("article");
	const title = document.createElement("h4");
	const desc = document.createElement("p");
	const link = document.createElement("a");
	// Assign content to elements
};
