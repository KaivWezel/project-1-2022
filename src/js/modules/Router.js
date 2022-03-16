import { loadBooks } from "./ui.js";

export default async function handleRoutes() {
	console.log("hashchange", window.location.hash);
	switch (window.location.hash) {
		case "#stappenplan":
			loadBooks();
			break;

		default:
			break;
	}
}
