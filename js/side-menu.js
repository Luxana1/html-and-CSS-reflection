function openNav() {
    hamburger.classList.add("is-active");
    document.getElementById("popUpNav").style.display = "block";
}

function closeNav() {
    hamburger.classList.remove("is-active");
    document.getElementById("popUpNav").style.display = "none";
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    hamburger.addEventListener("click", function() {
        if (hamburger.classList.contains("is-active")) {
            closeNav();
        } else {
            openNav();
        }
    })
});