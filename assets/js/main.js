const navBar = document.querySelector(".nav-bar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  navBar.classList.toggle("open");
  menuButton.classList.toggle("open");
});
