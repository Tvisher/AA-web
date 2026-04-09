const cardsSlider = new Swiper('.cards-slider', {
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





const reviewTexts = new Swiper('.reviews-second-slider', {
    slidesPerView: 1,
    allowTouchMove: 0,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});


const reviewsMainSlider = new Swiper('.reviews-main-slider', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.reviews-main-slider .swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: ' .reviews-main-slider .swiper-button-next',
        prevEl: ' .reviews-main-slider .swiper-button-prev',
    },
    on: {
        activeIndexChange(slider) {
            reviewTexts.slideTo(slider.activeIndex);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const {
        OverlayScrollbars,
        ScrollbarsHidingPlugin,
        SizeObserverPlugin,
        ClickScrollPlugin
    } = OverlayScrollbarsGlobal;

    const textes = document.querySelectorAll('.review-text__inner')
    textes.forEach(item => {
        const osInstance = OverlayScrollbars(item, {
            overflow: {
                x: 'hidden',
            },
            scrollbars: {
                dragScroll: true,
                clickScroll: false,
                pointers: ['mouse', 'touch', 'pen'],
            },
        }, {
            scroll: (instance, event) => {
                const { viewport } = instance.elements();
                const { scrollTop, scrollHeight, clientHeight } = viewport;
                const maxScroll = scrollHeight - clientHeight;
                const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
                if (progress.toFixed(2) >= 90) {
                    item.classList.add('end')
                } else {
                    item.classList.remove('end')

                }
            }
        });
    })

})



$('.faq-item__head').on('click', function () {
    const $toggleItem = $(this).parent('.faq-item');
    const $body = $toggleItem.find('.faq-item__body');
    $body.slideToggle(300);
    $toggleItem.toggleClass('open');
});




const player = new Plyr('#player', {
    controls: ['play-large']
});

const videoWrapper = document.getElementsByClassName("plyr__video-wrapper")[0];
videoWrapper.addEventListener("click", event => {
    player.togglePlay();
    event.stopPropagation(); // Necessary or the video will toggle twice => no playback
});

player.toggleControls(false);
