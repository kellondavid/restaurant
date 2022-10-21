import { initialPage } from "./website"
import { homePage } from "./initial-page"
import { menuPage } from "./menu"

loadInitial();

function swapTabs() {
    const homeBtn = document.querySelector(".homeTab");
    const menuBtn = document.querySelector(".menuTab");
    const contactBtn = document.querySelector(".contactTab");

    homeBtn.addEventListener("click", homePage)
    menuBtn.addEventListener("click", menuPage)
}

function loadInitial(){
    initialPage();
    homePage();
    swapTabs();
}
