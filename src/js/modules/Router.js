import * as UI from "./ui.js";
import getData from "./fetch.js";
import { endpoint, cors, resultsUrl } from "./variables.js";

export default async function handleRoutes() {
	console.log("hashchange", window.location.hash);
	switch (window.location.hash) {
		case "#stappenplan":
			UI.loadBooks();
			UI.activatePage();
			break;
		case "#zoeken":
			UI.searchResults();
			UI.activatePage();
			break;
		default:
			break;
	}
}
