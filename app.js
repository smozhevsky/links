let menuButton = document.querySelector(".menu-button");
let nav = document.querySelector(".nav");
let aboutButton = document.querySelector(".about");
let userLinks = document.querySelector(".user-links");
let contactsButton = document.querySelector(".contacts");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  nav.classList.toggle("active");
});

contactsButton.addEventListener("click", () => {
  userLinks.style.display = 'flex'
});