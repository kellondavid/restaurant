import { initialPage } from "./website"
import { homePage } from "./initial-page"

loadInitial();

function swapTabs() {
    const homeBtn = document.querySelector(".homeTab");
    const menuBtn = document.querySelector(".menuTab");
    const contactBtn = document.querySelector(".contactTab");

    homeBtn.addEventListener("click", homePage)
}

function loadInitial(){
    initialPage();
    homePage();
}
