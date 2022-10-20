export function menuPage() {
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
    nav.appendChild(navHome);
    navHome.innerHTML = "Home";
  
    let navMenu = document.createElement("button");
    nav.appendChild(navMenu);
    navMenu.innerHTML = "Menu";
  
    let navContact = document.createElement("button");
    nav.appendChild(navContact);
    navContact.innerHTML = "Contact";
  
    const sandwichImg = document.createElement("img");
    sandwichImg.src = "images/sandwich.jpeg";
    sandwichImg.classList.add("sandwichImg")
    sandwichImg.alt = "sandwich";
    main.appendChild(sandwichImg);
  }