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
    // main.style.left = "-300px";
    $("#main").animate({ 
        left: "-=350"
    }, 500)
    // $("#sidebar").animate({
    //     left: "+=300"
    // }, 500)
    main.style.position = "absolute";
    main.style.width = "100%";
    sideMenu.style.cssText = "display: block; left: -350px";
}

function closeNav() {
    body[0].style.overflow = "auto";
    sidebar.style.display = "none";
    // main.style.left = "0px";
    $("#main").animate({ 
        left: "+=350"
    }, 500)
    // $("#sidebar").animate({
    //     left: "-=350"
    // }, 500)
    sideMenu.style.cssText = "display: none; left: 0px";
    console.log("I hope, it works");
    hamburger.classList.toggle("is-active");
}
