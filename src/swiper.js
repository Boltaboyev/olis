var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
        240: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        500: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 25,
        },
    },
})

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        870: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
    },
})
