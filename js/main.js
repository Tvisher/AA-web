const swiper = new Swiper('.cards-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
        el: '.cards-slider .swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: ' .cards-slider .swiper-button-next',
        prevEl: ' .cards-slider .swiper-button-prev',
    },
    //   breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 2,
    //       spaceBetween: 20
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 3,
    //       spaceBetween: 30
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 4,
    //       spaceBetween: 40
    //     }
    //   }
})