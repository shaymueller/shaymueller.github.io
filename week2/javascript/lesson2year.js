//current year
let time = new Date();
document.querySelector('#lesson2year').textContent = time.getFullYear();

// for latest edit on home page
document.querySelector('#lesson2latestEdit').textContent = new Date(document.lastModified);