import handleRoutes from "./Router.js";

export default function initEventListeners() {
	window.addEventListener("hashchange", handleRoutes);
	window.addEventListener("load", handleRoutes);
}
