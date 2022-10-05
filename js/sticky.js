// $(document.body).scroll(function() {
//     if ($("#sticky").is(":hidden")) {
//         $("#sticky").slideDown("slow");
//     } else {
//         $("#sticky").hide();
//     }
// });
 const header = document.getElementById("sticky");
    const sticky = header.offsetTop;
    window.onscroll = function() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }; 