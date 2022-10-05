const modal = document.getElementById("modal");
const acceptButton = document.querySelector(".btn.accept");

function acceptCookies() {
    modal.style.display = "none";
    localStorage.setItem("cookies", "accepted");
}

if (localStorage.getItem("cookies") === "accepted") {
    modal.style.display = "none";
} else {
    modal.style.display = "block";
}   

acceptButton.addEventListener("click", acceptCookies);

// place modal in the center of the screen

function centerModal(modal) {
    const modalHeight = modal.offsetHeight;
    const modalWidth = modal.offsetWidth;
    modal.style.top = `calc(50% - ${modalHeight / 2}px)`;
    modal.style.left = `calc(50% - ${modalWidth / 2}px)`;
} 


