const modal = document.getElementById("modal");
const acceptButton = document.querySelector(".btn.accept");

function acceptCookies() {
    modal.style.display = "none";
    localStorage.setItem("cookies", "accepted");
}

if (localStorage.getItem("cookies") === "accepted") {
    modal.style.display = "none";
} else {
    modal.style.display = "grid";
}   

acceptButton.addEventListener("click", acceptCookies);
console.log("Copilot AI is the best thing ever!");