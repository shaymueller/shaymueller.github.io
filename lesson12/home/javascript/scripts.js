//toggle menu
/*function toggleMenu() {
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

//banner

let date = new Date();

 if (date.getDay()==5){
    document.getElementById("banner").style.display= "block" ;
}
*/

//weather API

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=40.233845&lon=-111.658531&appid=622186510fc74294c33f85507b2fa3a6&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //top right corner current weather
    document.getElementById('current-temp').textContent = jsObject.current.temp;
    document.getElementById('current-condition').textContent = jsObject.current.weather[0].main;
    document.getElementById('current-humidity').textContent = jsObject.current.humidity;

    // 3 day weather forecast section
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    //days
    document.getElementById('day1').textContent = days[new Date(jsObject.daily[0].dt * 1000 - (jsObject.timezone_offset * 1000)).getDay()];
    document.getElementById('day2').textContent = days[new Date(jsObject.daily[1].dt * 1000 - (jsObject.timezone_offset * 1000)).getDay()];
    document.getElementById('day3').textContent = days[new Date(jsObject.daily[2].dt * 1000 - (jsObject.timezone_offset * 1000)).getDay()];
    //images
    document.getElementById('icon1').setAttribute("src", "https://openweathermap.org/img/w/" + jsObject.daily[0].weather[0].icon + ".png");
    document.getElementById('icon1').setAttribute("alt", jsObject.daily[0].weather[0].description);
    document.getElementById('icon2').setAttribute("src", "https://openweathermap.org/img/w/" + jsObject.daily[1].weather[0].icon + ".png");
    document.getElementById('icon2').setAttribute("alt", jsObject.daily[1].weather[0].description);
    document.getElementById('icon3').setAttribute("src", "https://openweathermap.org/img/w/" + jsObject.daily[2].weather[0].icon + ".png");
    document.getElementById('icon3').setAttribute("alt", jsObject.daily[2].weather[0].description);
    //temps
    document.getElementById('temp1').textContent = jsObject.daily[0].temp.day;
    document.getElementById('temp2').textContent = jsObject.daily[1].temp.day;
    document.getElementById('temp3').textContent = jsObject.daily[2].temp.day;

    //alerts
    document.getElementById('weather-alert-sender').textContent = jsObject.alerts[0].sender_name;
    document.getElementById('weather-alert-description').textContent = jsObject.alerts[0].description;
    document.getElementById('reason').textContent = jsObject.alerts[0].tags[0];





  });