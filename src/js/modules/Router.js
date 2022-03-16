import { loadBooks } from "./ui.js";
import getData from "./fetch.js";

export default async function handleRoutes() {
	console.log("hashchange", window.location.hash);
	switch (window.location.hash) {
		case "#stappenplan":
			loadBooks();
			break;
		case "#zoeken":
			const endpoint =
				"http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=eigen%20onderneming+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=0076bc3bc11d080e07a303360178002a";
			const data = getData(endpoint);
			break;
		default:
			break;
	}
}
