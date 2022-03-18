import getData from "./fetch.js";
import { bookCard, resultCard } from "./components/Card.js";
import Render from "./Renderer.js";
import { booksUrl, resultsUrl, endpoint } from "./variables.js";

// TODO loader function

export const activatePage = async () => {
	const id = window.location.hash;
	const sections = document.querySelectorAll("section");

	// If hash is empty, page = home.
	const page =
		window.location.hash === ""
			? document.querySelector("#home")
			: document.querySelector(id);

	// 404 page for empty id (no page)
	const _404 = document.querySelector("#notFound");
	// All pages
	sections.forEach((section) => {
		section.classList.remove("active");
	});
	// Check if hash is page
	if (page) {
		page.classList.add("active");
	} else {
		_404.classList.add("active");
	}
};

export const loadBooks = async (target) => {
	const books = await getData(booksUrl);
	books.forEach((book) => {
		const card = bookCard(book);
		Render(card, target);
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
