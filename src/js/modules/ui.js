import getData from "./fetch.js";
import { bookCard, resultCard } from "./components/Card.js";
import Render from "./Renderer.js";
import { booksUrl, resultsUrl } from "./variables.js";

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
	});
};
