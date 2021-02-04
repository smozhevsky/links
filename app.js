let menuButton = document.querySelector(".menu-button");
let nav = document.querySelector(".nav");

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("active");
  nav.classList.toggle("active");
});