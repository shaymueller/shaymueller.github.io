//lazy loading script
const imagesToLoad = document.querySelectorAll('img[data-src]');


const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"

};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };

};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
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
function toggleMenu() {
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



//json object
const towninfoURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(towninfoURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      const towns = jsonObject["towns"];
      for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven"){
          let box = document.createElement('section');
          let data = document.createElement('div');
          let name = document.createElement('h2');
          let motto = document.createElement('h5');
          let img = document.createElement('img');
          let year = document.createElement('p');
          let pop = document.createElement('p');
          let rain = document.createElement('p');
          name.textContent = towns[i].name;
          motto.textContent = towns[i].motto;
          year.textContent = 'Year Founded: ' + towns[i].yearFounded;
          pop.textContent = 'Population: ' + towns[i].currentPopulation;
          rain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
          data.setAttribute('id','data');
          img.setAttribute("src", 'images/' + towns[i].photo);
          img.setAttribute("alt", towns[i].name);
          data.appendChild(name);
          data.appendChild(motto);
          data.appendChild(year);
          data.appendChild(pop);
          data.appendChild(rain);
          box.appendChild(data);
          box.appendChild(img);
          document.querySelector("div.box").appendChild(box);
        }
      }
    });

