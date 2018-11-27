var $btnScroll = $("#header");
$(window).scroll(function(){
    if ( $(this).scrollTop() > 10 && $btnScroll.hasClass("header") ){
        $btnScroll.removeClass("header").addClass("fixed-header");
    } else if($(this).scrollTop() <= 10 && $btnScroll.hasClass("fixed-header")) {
        $btnScroll.removeClass("fixed-header").addClass("header");
    }
});
$(window).scroll(function(){
    if ( $(this).scrollTop() > 650 && $("#fixedBTN").hasClass("block-btn-fixed") ){
        $("#fixedBTN").removeClass("block-btn-fixed").addClass("open-btn-fixed");
    } else if($(this).scrollTop() <= 650 && $("#fixedBTN").hasClass("open-btn-fixed")) {
        $("#fixedBTN").removeClass("open-btn-fixed").addClass("block-btn-fixed");
    }
});

$(document).ready(function() {
    $("#gallery").lightGallery({
        selector: '.img_wrapper'
    });
    $("#video").lightGallery({
        selector: '.link_video'
    });
});


$(document).ready(function() {
    // Function Anchor
    $("a.anchor").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 900);
        return false;
    });
    // Function Anchor END

    // Function Slick-Carousel
    // start vars
    var slider = $('.slider');
    var list_reviews = $('.list_reviews');
    var test = $('.test');
    // end vars

    slider.slick ({
        fade: true,
        dots: true,
        arrows: false,
        speed: 4000,
        autoplaySpeed: 3000,
        autoplay: true
    });
    list_reviews.slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    test.slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    // Function Slick-Carousel END

    // Function PooPup
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
    // Function PooPup END

    $OpenMenu= $('.wrapper');
    $(".btn_navbar, .list_menu li a").click(function(e) {
        if ( $OpenMenu.hasClass('open_navbar') ) {
            $OpenMenu.removeClass('open_navbar');
        } else {
            $OpenMenu.removeClass('open_navbar');
            $OpenMenu.addClass('open_navbar');
        }
    });

    $Button_active= $('.btn_navbar');
    $(".togle, .list_menu").click(function(e) {
        if ( $Button_active.hasClass('active__btn_navbar') ) {
            $Button_active.removeClass('active__btn_navbar');
        } else {
            $Button_active.removeClass('active__btn_navbar');
            $Button_active.addClass('active__btn_navbar');
        }
    });
});




