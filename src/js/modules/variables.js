const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=eigen%20onderneming";

const cors = "https://cors-anywhere.herokuapp.com/";
const booksUrl = "http://localhost:3000/books";
const resultsUrl = "http://localhost:3000/onderneming";
const key = "0076bc3bc11d080e07a303360178002a";
const secret = "6b02878111c06660300798cf4c40a685";
export { endpoint, cors, booksUrl, resultsUrl, key, secret };

// DOM elements
const strategy = document.querySelector(".bookshelf");
const taxes = document.querySelector(".taxes");
const performance = document.querySelector(".performance");

export { strategy, taxes, performance };
