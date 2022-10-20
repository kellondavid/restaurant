export function initialPage() {
  const main = document.querySelector("#content");
  const header = document.createElement('h1')
  header.textContent = "Bee Happy"
  header.classList.add("header")
  main.appendChild(header)
}