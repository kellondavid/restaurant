export function homePage() {
  const main = document.querySelector("#content")
  main.replaceChildren();

  const bodyPage = document.createElement("div");
  bodyPage.classList.add("bodyPage");
  main.appendChild(bodyPage);
  bodyPage.replaceChildren();

  const honeyImg = document.createElement("img");
  honeyImg.src = "images/honey.jpeg";
  honeyImg.classList.add("homeImg");
  honeyImg.alt = "honey";
  bodyPage.appendChild(honeyImg);
}
