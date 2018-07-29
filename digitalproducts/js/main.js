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
    });
})(jQuery);