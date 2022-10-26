fetch("/bantu/sheets.html")
    .then((snap) => snap.text())
    .then((result) => {
        sheets.innerHTML = result;
        const scriptURL =
            'https://script.google.com/macros/s/AKfycbydDy17YwtpMzDcnrKXvcKJeljqgcR8pAxc8nXLzet3mTlFYjRynw8qHtKzhsgSVB63/exec'
        const form = document.forms['agung-contact-form']
        const btnKirim = document.querySelector('.btn-kirim')
        const btnLoading = document.querySelector('.btn-loading')
        const myAlert = document.querySelector('.my-alert')

        form.addEventListener('submit', e => {
            e.preventDefault()

            // Ketika tombol diklik
            // Tampilkan tombol Loading, hilangkan tombol Kirim
            btnLoading.classList.toggle('d-none')
            btnKirim.classList.toggle('d-none')

            fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            })

                .then(response => {
                    // Tampilkan tombol Kirim, hilangkan tombol Loading
                    btnLoading.classList.toggle('d-none')
                    btnKirim.classList.toggle('d-none')

                    // Tampilak Alert
                    myAlert.classList.toggle('d-none')

                    // Reset Form
                    form.reset();
                    console.log('Success!', response)
                })
                .catch(error => console.error('Error!', error.message))
        })
    });

// Home
fetch("/completed/album/album.html").then((snap) => snap.text()).then((result) => {
    rekomendasi.innerHTML = result;

    // Posisi Album
    $(".posisi_album").addClass("col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 text-center d-none")
    $(".posisi_episode").addClass(
        "position-absolute top-0 start-0 bg-black bg-opacity-75 text-light ps-1 pe-1")
    $(".posisi_judul").addClass("position-absolute bottom-0 start-0 end-0 ps-1 pe-1")
});

fetch("/menu/pilih_skin/pilih_skin.html").then((snap) => snap.text()).then((result) => {
    genre.innerHTML = result;
    $(".posisi_genre").addClass(
        "col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 border border-secondary border-opacity-25 pt-2 pb-2"
    )
});

fetch("/menu/pilih_skin/pilih_tema.html").then((snap) => snap.text()).then((result) => {
    genre1.innerHTML = result;
    $(".posisi_genre").addClass(
        "col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 border border-secondary border-opacity-25 pt-2 pb-2"
    )
});

fetch("/menu/list_hero/list_hero.html")
    .then((snap) => snap.text())
    .then((result) => {
        list_hero.innerHTML = result;
        $(".table").addClass("ps-2 pe-2")
    });
