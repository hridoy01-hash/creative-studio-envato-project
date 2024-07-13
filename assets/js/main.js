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

})(jQuery);