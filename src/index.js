import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
function initializeWebsite() {
  const homeButton = document.getElementById("home-button");
  const menuButton = document.getElementById("menu-button");
  const contactButton = document.getElementById("contact-button");

  homeButton.addEventListener("click", createHome);
  menuButton.addEventListener("click", createMenu);
  contactButton.addEventListener("click", createContact);

  createHome();
}

initializeWebsite();
