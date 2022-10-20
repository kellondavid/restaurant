export function initialPage() {
  const body = document.body;
  const main = document.querySelector("#content");

  const header = document.createElement("h1");
  header.textContent = "Bee Happy :)";
  header.classList.add("header");
  main.appendChild(header);

  const nav = document.createElement("div");
  nav.classList.add("nav");
  main.appendChild(nav);

  let navHome = document.createElement("button");
  nav.appendChild(navHome);
  navHome.innerHTML = "Home";

  let navMenu = document.createElement("button");
  nav.appendChild(navMenu);
  navMenu.innerHTML = "Menu";

  let navContact = document.createElement("button");
  nav.appendChild(navContact);
  navContact.innerHTML = "Contact";

  const honeyImg = document.createElement("img");
  honeyImg.src = "images/honey.jpeg";
  honeyImg.classList.add("homeImg")
  honeyImg.alt = "honey";
  main.appendChild(honeyImg);
}
