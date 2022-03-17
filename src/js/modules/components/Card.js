export const bookCard = (data) => {
	console.log(data);
	// Create elements in document
	const link = document.createElement("a");
	const card = document.createElement("article");
	card.classList.add("bookCard");
	const hero = document.createElement("img");
	const info = document.createElement("div");
	info.classList.add("info");
	const title = document.createElement("h4");
	const desc = document.createElement("p");
	// Assign content to elements
	link.href = data.detailLink;
	hero.src = data.coverimages[1];
	title.innerText = data.authors ? data.authors : "Onbekend";
	desc.innerText = data["subject-topical"]
		? data["subject-topical"].join(", ")
		: "Ondernemen";
	// Append elements to card
	info.append(title, desc);
	card.append(hero, info);
	link.append(card);
	return link;
};

export const resultCard = (data) => {
	const card = document.createElement("article");
	const title = document.createElement("h4");
	const desc = document.createElement("p");
	const link = document.createElement("a");
	// Assign content to elements
	title.innerText = data.titles?.[0];
	desc.innerText = data.summaries?.[0];
	link.href = data.detailLink;
	link.innerText = "Bekijk";
	// Append el's to card
	card.append(title, desc, link);
	return card;
};
