//for current date on home page
let time = new Date();
document.querySelector('#currentYear').textContent = time.getFullYear();

// for last update on home page
document.querySelector('#latestEdit').textContent = new Date(document.lastModified);

