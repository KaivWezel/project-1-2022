import handleRoutes from "./Router.js";
import { searchResults } from "./ui.js";
import {
	navSearch,
	navSearchInput,
	searchPage,
	searchPageInput,
} from "./variables.js";

export default function initEventListeners() {
	window.addEventListener("hashchange", handleRoutes);
	window.addEventListener("load", handleRoutes);
	navSearch.addEventListener("submit", (e) => {
		e.preventDefault();
		window.location.hash = "zoeken";
		const query = navSearchInput.value;
		navSearchInput.value = "";
		searchResults(query);
		handleRoutes();
	});
	searchPage.addEventListener("submit", (e) => {
		e.preventDefault();
		const query = searchPageInput.value;
		searchPageInput.value = "";
		searchResults(query);
		console.log(query);
	});
}
