import handleRoutes from "./Router.js";

export default function addEventListeners() {
	window.addEventListener("hashchange", handleRoutes);
	window.addEventListener("load", handleRoutes);
}
