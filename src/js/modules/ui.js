import getData from "./fetch.js";
import { bookCard, resultCard } from "./components/Card.js";
import Render from "./Renderer.js";
import { booksUrl, resultsUrl, endpoint } from "./variables.js";

// TODO loader function

export const activatePage = async () => {
	const id = window.location.hash;
	const sections = document.querySelectorAll("section");

	const page =
		window.location.hash === ""
			? document.querySelector("#home")
			: document.querySelector(id);

	const _404 = document.querySelector("#notFound");
	sections.forEach((section) => {
		section.classList.remove("active");
	});
	if (page) {
		page.classList.add("active");
	} else {
		_404.classList.add("active");
	}
};

export const loadBooks = async () => {
	const bookshelf = document.querySelector(".bookshelf");
	const books = await getData(booksUrl);
	books.forEach((book) => {
		const card = bookCard(book);
		Render(card, bookshelf);
	});
};

export const searchResults = async () => {
	const resultsList = document.querySelector(".searchResults");
	const results = await getData(resultsUrl);
	results.forEach((result) => {
		const card = resultCard(result);
		Render(card, resultsList);
	});
};
