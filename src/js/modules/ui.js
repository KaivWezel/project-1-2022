import getData from "./fetch.js";
import { createCard } from "./components/Card.js";
import Render from "./Renderer.js";
import { booksUrl } from "./variables.js";

export const loadBooks = async () => {
	const bookshelf = document.querySelector(".bookshelf");
	const books = await getData(booksUrl);
	books.forEach((book) => {
		const card = createCard(book);
		Render(card, bookshelf);
	});
};
