$(document.body).scroll(function() {
    if ($("#sticky").is(":hidden")) {
        $("#sticky").slideDown("slow");
    } else {
        $("#sticky").hide();
    }
});
