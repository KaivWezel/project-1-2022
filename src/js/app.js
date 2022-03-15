// const url = "https://zoeken.oba.nl/api/v1/";

console.log("hello");

const cursor = document.querySelector(".cursor");
const followerPos = { x: 0, y: 0 };
const cursorPos = { x: 0, y: 0 };

const getMouse = (e) => {
	cursorPos.x = e.clientX;
	cursorPos.y = e.clientY;
};

window.addEventListener("mousemove", (e) => {
	getMouse(e);
});

const followCursor = () => {
	// find distanceX, distance Y
	const distX = cursorPos.x - followerPos.x;
	const distY = cursorPos.y - followerPos.y;
	// Easing motion
	followerPos.x += distX / 2;
	followerPos.y += distY / 4;

	cursor.style.left = `${followerPos.x}px`;
	cursor.style.top = `${followerPos.y}px`;
};

setInterval(followCursor, 50);

const url =
	"https://zoeken.oba.nl/api/v1/search/?q=%22ondernemen%22&refine=true&authorization=16c19e6083308c984c452600134989ba&sort=act_dt_asc&output=json"; //&branch=OBA%20geuzenveld'
fetch(url, {
	mode: "no-cors",
})
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
	});
