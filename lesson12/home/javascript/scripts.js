//javascript for all pages

//toggle menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("hidden");
}


// for latest edit on home page
document.getElementById('last-modification').textContent = new Date(document.lastModified);

//javascript for this page 

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

    if (typeof jsObject.alerts !== 'undefined') {
      document.getElementById('weather-alert-sender').textContent = jsObject.alerts[0].sender_name;
      document.getElementById('weather-alert-description').textContent = jsObject.alerts[0].description;
      document.getElementById('reason').textContent = jsObject.alerts[0].tags[0];
    } else {
      document.getElementsByClassName('weather-alert').textContent = "none"
    }
  });

//business highlights

//json object
const businessdirectoryURL = "https://shaymueller.github.io/wdd230/business-directory.json";
fetch(businessdirectoryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const bus = jsonObject["business"];
    console.log(bus);
    for (let i = 0; i < bus.length; i++) {
      if (bus[i].name == "Nu Skin Enterprises" || bus[i].name == "Vivint" || bus[i].name == "Qualtrics") {
        let box = document.createElement('section');
        let data = document.createElement('div');
        let name = document.createElement('h3');
        let logo = document.createElement('img');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let year = document.createElement('p');
        name.textContent = bus[i].name;
        phone.textContent = bus[i].phone;
        year.textContent = bus[i].yearFounded;
        website.textContent = bus[i].website;
        data.setAttribute('id', 'data');
        logo.setAttribute("src", 'images/' + bus[i].logo);
        logo.setAttribute("alt", bus[i].name);
        data.appendChild(name);
        data.appendChild(phone);
        data.appendChild(year);
        data.appendChild(website);
        box.appendChild(data);
        box.appendChild(logo);
        document.querySelector("div.bus-cards").appendChild(box);
      }
    }
  });