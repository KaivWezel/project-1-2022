import getData from "./fetch.js";
import { createCard } from "./components/Card.js";
import Render from "./Renderer.js";
import { localDb } from "./variables.js";

export const loadBooks = async () => {
	const bookshelf = document.querySelector(".bookshelf");
	const books = await getData(localDb);
	books.forEach((book) => {
		const card = createCard(book);
		Render(card, bookshelf);
	});
};
