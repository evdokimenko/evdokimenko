;(function($){
    $(function(){
        $('.post-slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
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
        $('nav a').on('click', function () {
            var sectionTop = $('#' + $(this).data('id')).position().top;
            console.log(sectionTop);
            $('html, body').stop().animate(
                {scrollTop: sectionTop},
                500,
                'swing'
            );
        });
    });
})(jQuery);