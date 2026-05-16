const navBar = document.querySelector(".nav-bar");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav-bar li a");
const contactLocation = document.getElementById("location");
const contactCall = document.getElementById("call");
const contactEmail = document.getElementById("email");

menuButton.addEventListener("click", () => {
  navBar.classList.toggle("open");
  menuButton.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("open");
    menuButton.classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  if (!navBar.contains(e.target) && !menuButton.contains(e.target)) {
    navBar.classList.remove("open");
    menuButton.classList.remove("open");
  }
});

contactLocation.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("https://www.google.com/maps?q=شارع+الحرية,+الرياض", "_blank");
});

contactCall.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("tel:011-1234567");
});

contactEmail.addEventListener("click", (e) => {
  e.preventDefault();
  window.open("mailto:info@restaurant.com");
});
