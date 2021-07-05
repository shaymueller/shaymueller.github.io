//toggle menu
function toggleMenu () {
    document.getElementById("navMenu").classList.toggle("hidden");
}

//date
const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const d = new Date();
const dayName = days[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

const lastUpdate = document.lastModified;

document.getElementById("todayDate").textContent = fulldate;
document.getElementById("currentYear").textContent = year;

//form
function selectResponse() {
	const p = document.querySelector('#selected')
	const s = document.querySelector('#stormOptions');
	p.style.display = "block";
	p.textContent = s.value;
	
}
function adjustRating(rating) {
  document.getElementById("ratedvalue").innerHTML = rating;
}




