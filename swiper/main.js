new Swiper(".image-slider", {
    // Стрелки
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        // Буллеты
        clickable: true,
        dynamicBullets: true,
    },

    //   бесконечная прокрутка
    loop: true,

    scrollbar: {
        el: '.swiper-scrollbar',

        draggable: true
    }
});
