//button function for side menu --spin
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
});

//function to open and close the side menu
const sideMenu = document.getElementById("sideMenu");
const body = document.getElementsByClassName("wrapper");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

function openNav() {
    body[0].style.overflow = "hidden";
    sidebar.style.display = "block";
    main.style.left = "-300px";
    main.style.position = "absolute";
    main.style.width = "100%";
    sideMenu.style.cssText = "display: block; left: -275px";
}

function closeNav() {
    body[0].style.overflow = "auto";
    sidebar.style.display = "none";
    main.style.left = "0px";
    sideMenu.style.cssText = "display: none; left: 0px";
    console.log("I hope, it works");
    hamburger.classList.toggle("is-active");
}
