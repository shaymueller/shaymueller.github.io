//javascript for all pages

//toggle menu
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("hidden");
}


// for latest edit on home page
document.getElementById('last-modification').textContent = new Date(document.lastModified);