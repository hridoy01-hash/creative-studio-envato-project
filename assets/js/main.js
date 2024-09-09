(function ($) {
    'use strict';
    // ed_testimonial slider
    var swiper = new Swiper(".ed_testimonial_slide_active", {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1500,
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

    // ed brand scrool animation top
    var swiper_top = new Swiper(".ed_brand_scroll_active_top", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freeMode: true,
        loop: "infinite",
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
    // ed brand scrool animation bottom
    var swiper_bottom = new Swiper(".ed_brand_scroll_active_bottom", {
        slidesPerView: 'auto',
        spaceBetween: 80,
        freeMode: true,
        loop: "infinite",
        speed: 2000,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        }
    });

    // ed_testimonial slider
    var swiper = new Swiper(".ed_team_slide_active", {
        slidesPerView: 4,
        spaceBetween: 30,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".ed_team_btn_next",
            prevEl: ".ed_team_btn_prev",
        },
        breakpoints:{
            640:{
                slidesPerView:2
            },
            992:{
                slidesPerView:3
            },
            1200:{
                slidesPerView:4
            }
        }
    });

    // data background image
    $("[data-background]").each(function () {
        $(this).css('background-image', "url(" + $(this).attr("data-background") + ")");
    });

})(jQuery);