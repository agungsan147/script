// Hero
fetch("/album/hero/album.html").then((snap) => snap.text()).then((result) => {
    Hero.innerHTML = result;

    // Posisi Album
    $(".posisi_album").addClass("col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-center d-none")
    $(".posisi_size").addClass("position-absolute top-0 start-0 bg-black bg-opacity-75 text-light ps-1 pe-1")
    $(".posisi_judul").addClass("position-absolute bottom-0 start-0 end-0 ps-1 pe-1")

    // Hero
    for (let i = 1; i <= 20; i++) {
        $("#Miya_" + i).removeClass("d-none");
    }
});

// Miya
fetch("/album/hero/album.html").then((snap) => snap.text()).then((result) => {
    Miya.innerHTML = result;

    // Posisi Album
    $(".posisi_album").addClass("col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 text-center d-none")
    $(".posisi_size").addClass("position-absolute top-0 start-0 bg-black bg-opacity-75 text-light ps-1 pe-1")
    $(".posisi_judul").addClass("position-absolute bottom-0 start-0 end-0 ps-1 pe-1")

    // Hero
    for (let i = 1; i <= 20; i++) {
        $("#Miya_" + i).removeClass("d-none");
    }
});


