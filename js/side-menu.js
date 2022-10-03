//button function for side menu --spin
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    });

//function to open and close the side menu
const sideMenu = document.getElementById("sideMenu");
const mainContent = document.getElementById("mainContent");
const mainContentOverlay = document.getElementById("mainContentOverlay");
const body = document.getElementsByClassName("wrapper");

function openNav() {
    sideMenu.classList.add("is-active");
    mainContent.classList.add("inactive");
    body.style.overflow = "hidden";
    mainContentOverlay.style.width = "100%";
    mainContentOverlay.style.opacity = "1";
}

function closeNav() {
    sideMenu.classList.remove("is-active");
    mainContent.classList.remove("inactive");
    body.style.overflow = "auto";
    mainContentOverlay.style.width = "0%";
    mainContentOverlay.style.opacity = "0";
}