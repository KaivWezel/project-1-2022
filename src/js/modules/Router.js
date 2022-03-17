import { loadBooks, searchResults } from "./ui.js";
import getData from "./fetch.js";
import { endpoint, cors, resultsUrl } from "./variables.js";

export default async function handleRoutes() {
	console.log("hashchange", window.location.hash);
	switch (window.location.hash) {
		case "#stappenplan":
			loadBooks();
			break;
		case "#zoeken":
			searchResults();
			break;
		default:
			break;
	}
}
