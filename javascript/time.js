//current year
let time = new Date();
document.querySelector('#currentYear').textContent = time.getFullYear();

// for latest edit on home page
document.querySelector('#latestEdit').textContent = new Date(document.lastModified);

