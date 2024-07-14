(function ($) {
    'use strict';
    // ed_testimonial slider
    var swiper = new Swiper(".ed_testimonial_slide_active", {
        slidesPerView: 1,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".ed_testimonial_btn_next",
            prevEl: ".ed_testimonial_btn_prev",
        },
    });

    // ed brand scrool animation
    var swiper = new Swiper(".ed_brand_scroll_active", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freeMode: true,
        loop: true,
        speed: 2000, // Adjust this for desired scrolling speed
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

})(jQuery);