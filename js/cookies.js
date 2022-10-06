const modal = document.getElementById("modal");
const acceptButton = document.querySelector(".btn.accept");
const bodyElement = document.getElementsByTagName("body");

function acceptCookies() {
    modal.style.display = "none";
    localStorage.setItem("cookies", "accepted");
    bodyElement[0].style.overflowY = "scroll";
    
}

if (localStorage.getItem("cookies") === "accepted") {
    modal.style.display = "none";
} else {
    modal.style.display = "grid";
    bodyElement[0].style.overflowY = "hidden";
}   

acceptButton.addEventListener("click", acceptCookies);