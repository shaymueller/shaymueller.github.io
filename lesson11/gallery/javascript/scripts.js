//lazy loading script
const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

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

//localStorage

let cas = d.getTime();
if (!localStorage.getItem("lastSession")) {
  localStorage.setItem("lastSession", cas);
  document.querySelector("#lastVisit").innerHTML = " 0"
}
else {
  let session = localStorage.getItem("lastSession");
  localStorage.setItem("lastSession", cas);
  let sinceLV = Math.floor((cas - session) / (1000 * 60 * 60 * 24));
  document.querySelector("#lastVisit").innerHTML = " " + sinceLV;
}





