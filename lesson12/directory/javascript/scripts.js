//javascript for all pages

//toggle menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("hidden");
}

// for latest edit on home page
document.getElementById('last-modification').textContent = new Date(document.lastModified);

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

