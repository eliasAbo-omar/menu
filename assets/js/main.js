const navBar = document.querySelector(".nav-bar");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav-bar li a");

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
