;(function($){
    $(function(){
        $('.post-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ],
            autoplay: true,
            autoplaySpeed: 3000,
            slide: "div",
            dots: false,
            prevArrow: ".arr-left-sm",
            nextArrow: ".arr-right-sm"
        });
        /////scroll  animation
        var arr = $('.arr-up');
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= 50) {
                arr.show();
            } else {
                arr.hide();
            }
        });
        arr.on('click', function () {
            $('html, body').stop().animate(
                {scrollTop: 0},
                500,
                'swing'
            );
        });
    });
})(jQuery);