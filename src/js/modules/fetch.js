import { endpoint, key } from "./variables.js";

const config = {
	mode: "no-cors",
};

export default async () => {
	const response = await fetch(endpoint);
	const data = await response.json();
	return data;
};