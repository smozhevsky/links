let menuButton = document.querySelector(".menu-button");
let nav = document.querySelector(".nav");
let aboutButton = document.querySelector(".about-btn");
let userLinks = document.querySelector(".user-links");
let contactsButton = document.querySelector(".contacts");
let headerLogo = document.querySelector("header-logo");
let aboutMe = document.querySelector(".about")

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  nav.classList.toggle("active");
});

contactsButton.addEventListener("click", () => {
  userLinks.classList.toggle("active");
});

aboutButton.addEventListener("click", () => {
  aboutMe.classList.toggle("active");
});