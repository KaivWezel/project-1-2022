// Start cursor follower
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
	followerPos.x += distX / 1;
	followerPos.y += distY / 1;

	cursor.style.left = `${followerPos.x}px`;
	cursor.style.top = `${followerPos.y}px`;
};

setInterval(followCursor, 50);
// End of cursor follow
