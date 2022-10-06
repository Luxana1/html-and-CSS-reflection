let lastSt = 0;
let time = Date.now();


$(document).scroll(() => {
    let st = $(document).scrollTop();
    if (Date.now() > time) {
        if (st > lastSt) {
            $("#sticky").slideUp();
        } else {
            $("#sticky").slideDown();
        }
        time = Date.now() + 500;
    }
    lastSt = st;
});
