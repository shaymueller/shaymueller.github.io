// wind chill
let s = document.getElementById("current-windSpeed").innerHTML;
let t = document.getElementById("current-temp").innerHTML;
var result;

if (t <= 50 && s >= 3) {
    wind = Math.round(35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));
    document.getElementById("windChill").innerHTML = wind;
} else {
    document.getElementById("windChill").innerHTML = "N/A";
}

//current weather api
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=622186510fc74294c33f85507b2fa3a6&units=imperial"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        document.getElementById('current-humidity').textContent = jsObject.main.humidity;
        document.getElementById('current-windSpeed').textContent = jsObject.wind.speed;
        document.getElementById('current-condition').textContent = jsObject.weather[0].main;
    });

// 5 day forecast
const apiURLforecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=622186510fc74294c33f85507b2fa3a6&units=imperial"
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        const fivedayforecast = jsObject.list.filter(forecast => forecast.dt_txt.includes("18:00:00"));
        for (let i = 0; i < fivedayforecast.length; i++) {
            let forecast = fivedayforecast[i];
            let day = "weekday" + i;
            let icon = "imgs" + i;
            let tempe = "hightemp" + i;
            document.getElementById(icon).setAttribute("src", "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png");
            document.getElementById(icon).setAttribute("alt", forecast.weather[0].description);
            document.getElementById(day).textContent = days[new Date(forecast.dt_txt).getDay()];
            document.getElementById(tempe).textContent = forecast.main.temp;
        }
    });

//events coming up
const towninfoURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(towninfoURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < [1]; i++) {
            let event = document.createElement('div');
            let a = document.createElement('p');
            let b = document.createElement('p');
            let c = document.createElement('p');
            a.textContent = towns[6].events[0];
            b.textContent = towns[6].events[1];
            c.textContent = towns[6].events[2];
            event.appendChild(a);
            event.appendChild(b);
            event.appendChild(c);
            document.querySelector('div.events').appendChild(event);
        }
    });