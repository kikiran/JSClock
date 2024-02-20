const seconds_hand = document.querySelector(".clock_sec");
const minutes_hand = document.querySelector(".clock_min");
const hour_hand = document.querySelector(".clock_hour");

function setDate() {
	const date = new Date();
	const seconds = date.getSeconds();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const secondDeg = (seconds / 60) * 360 + 90;
	const minutesDeg = (minutes / 60) * 360 + 90;
	const hoursDeg = (hours / 12) * 360 + 90;
	seconds_hand.style.transform = `rotate(${secondDeg}deg)`;
	minutes_hand.style.transform = `rotate(${minutesDeg}deg)`;
	hour_hand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(setDate, 1000);
