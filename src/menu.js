export function menuPage() {
  const main = document.querySelector("#content");
  main.replaceChildren();


  const bodyPage = document.createElement("div");
  bodyPage.classList.add("bodyPage");
  main.appendChild(bodyPage);
  bodyPage.replaceChildren();


  const sandwichImg = document.createElement("img");
  sandwichImg.src = "images/sandwich.jpeg";
  sandwichImg.classList.add("sandwichImg");
  sandwichImg.alt = "sandwich";
  bodyPage.appendChild(sandwichImg);
}
