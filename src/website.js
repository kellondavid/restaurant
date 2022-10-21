import { homePage } from "./initial-page";

export function initialPage() {
  const body = document.body;
  const main = document.querySelector("#content");

  const header = document.createElement("h1");
  header.textContent = "Bee Happy";
  header.classList.add("header");
  main.appendChild(header);

  const nav = document.createElement("div");
  nav.classList.add("nav");
  main.appendChild(nav);

  let navHome = document.createElement("button");
  navHome.classList.add("homeTab", "navBtn")
  nav.appendChild(navHome);
  navHome.innerHTML = "Home";

  let navMenu = document.createElement("button");
  navMenu.classList.add("menuTab", "navBtn")
  nav.appendChild(navMenu);
  navMenu.innerHTML = "Menu";

  let navContact = document.createElement("button");
  navContact.classList.add("contactTab", "navBtn")
  nav.appendChild(navContact);
  navContact.innerHTML = "Contact";
}


