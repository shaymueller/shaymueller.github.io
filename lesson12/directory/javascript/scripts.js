//toggle menu
/* function toggleMenu() {
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




*/

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
          website.textContent =  bus[i].website;
          data.setAttribute('id','data');
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
    });

