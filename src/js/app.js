// const url = "https://zoeken.oba.nl/api/v1/";
import getData from "./modules/fetch.js";

console.log("hello");

const logger = async () => {
	const data = await getData();
	console.log("data", data);
};

logger();

// const endpoint =
// 	"http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=eigen%20onderneming+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=0076bc3bc11d080e07a303360178002a";
const endpoint =
	"https://zoeken.oba.nl/api/v1/search/?q=ondernemen&authorization=0076bc3bc11d080e07a303360178002a";
fetch(endpoint, { mode: "no-cors" })
	.then((res) => res.text())
	.then((data) => console.log(data))
	.catch((err) => console.log(err));
