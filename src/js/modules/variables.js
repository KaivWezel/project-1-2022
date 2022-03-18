const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=eigen%20onderneming";

const cors = "https://cors-anywhere.herokuapp.com/";
const booksUrl = "./db.json";
const resultsUrl = "./db.json";
const key = "0076bc3bc11d080e07a303360178002a";
const secret = "6b02878111c06660300798cf4c40a685";
export { endpoint, cors, booksUrl, resultsUrl, key, secret };

// DOM elements
const strategy = document.querySelector(".strategy");
const taxes = document.querySelector(".taxes");
const performance = document.querySelector(".performance");
const navSearch = document.querySelector("nav form");
const navSearchInput = document.querySelector("nav input");
const searchPage = document.querySelector("#zoeken form");
const searchPageInput = document.querySelector("#searchForm");

export {
	strategy,
	taxes,
	performance,
	navSearch,
	navSearchInput,
	searchPage,
	searchPageInput,
};
