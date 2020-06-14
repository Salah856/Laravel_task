(function ($) {
    // USE STRICT
    "use strict";


    /*[ Slick1st ]
  ===========================================================*/
    $('.slick1st').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick1st'),
        prevArrow: '<button class="arrow-slick1st prev-slick1st hidden"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick1st next-slick1st"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick1st').on('afterChange', function (event, slick, currentSlide) {

        // Start Bakkar code //
        // This code for hide last nav
        if (slick.$slides.length - 1 == currentSlide) {
            $('.next-slick1st').addClass('hidden');
        } else {
            $('.next-slick1st').removeClass('hidden');
        }
        // This code for hide first nav
        if (currentSlide === 0) {
            $('.prev-slick1st').addClass('hidden');
        } else {
            $('.prev-slick1st').removeClass('hidden');
        }
        // End Bakkar code //
    });


    /*[ Slick2nd ]
  ===========================================================*/
    $('.slick2nd').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick2nd'),
        prevArrow: '<button class="arrow-slick2nd prev-slick2nd hidden"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick2nd next-slick2nd"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick2nd').on('afterChange', function (event, slick, currentSlide) {

        // Start Bakkar code //
        // This code for hide last nav
        if (slick.$slides.length - 1 == currentSlide) {
            $('.next-slick2nd').addClass('hidden');
        } else {
            $('.next-slick2nd').removeClass('hidden');
        }
        // This code for hide first nav
        if (currentSlide === 0) {
            $('.prev-slick2nd').addClass('hidden');
        } else {
            $('.prev-slick2nd').removeClass('hidden');
        }
        // End Bakkar code //
    });


    /*[ Slick3rd ]
  ===========================================================*/
    $('.slick3rd').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick3rd'),
        prevArrow: '<button class="arrow-slick3rd prev-slick3rd hidden"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick3rd next-slick3rd"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick3rd').on('afterChange', function (event, slick, currentSlide) {

        // Start Bakkar code //
        // This code for hide last nav
        if (slick.$slides.length - 1 == currentSlide) {
            $('.next-slick3rd').addClass('hidden');
        } else {
            $('.next-slick3rd').removeClass('hidden');
        }
        // This code for hide first nav
        if (currentSlide === 0) {
            $('.prev-slick3rd').addClass('hidden');
        } else {
            $('.prev-slick3rd').removeClass('hidden');
        }
        // End Bakkar code //
    });


    /*[ Slick4th ]
  ===========================================================*/
    $('.slick4th').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick4th'),
        prevArrow: '<button class="arrow-slick4th prev-slick4th hidden"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick4th next-slick4th"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick4th').on('afterChange', function (event, slick, currentSlide) {

        // Start Bakkar code //
        // This code for hide last nav
        if (slick.$slides.length - 1 == currentSlide) {
            $('.next-slick4th').addClass('hidden');
        } else {
            $('.next-slick4th').removeClass('hidden');
        }
        // This code for hide first nav
        if (currentSlide === 0) {
            $('.prev-slick4th').addClass('hidden');
        } else {
            $('.prev-slick4th').removeClass('hidden');
        }
        // End Bakkar code //
    });


    /*[ Slick5th ]
  ===========================================================*/
    $('.slick5th').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick5th'),
        prevArrow: '<button class="arrow-slick5th prev-slick5th hidden"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick5th next-slick5th"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick5th').on('afterChange', function (event, slick, currentSlide) {

        // Start Bakkar code //
        // This code for hide last nav
        if (slick.$slides.length - 1 == currentSlide) {
            $('.next-slick5th').addClass('hidden');
        } else {
            $('.next-slick5th').removeClass('hidden');
        }
        // This code for hide first nav
        if (currentSlide === 0) {
            $('.prev-slick5th').addClass('hidden');
        } else {
            $('.prev-slick5th').removeClass('hidden');
        }
        // End Bakkar code //
    });


    /*[ Slick6th ]
  ===========================================================*/
    $('.slick6th').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick6th'),
        prevArrow: '<button class="arrow-slick6th prev-slick6th hidden"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick6th next-slick6th"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick6th').on('afterChange', function (event, slick, currentSlide) {

        // Start Bakkar code //
        // This code for hide last nav
        if (slick.$slides.length - 1 == currentSlide) {
            $('.next-slick6th').addClass('hidden');
        } else {
            $('.next-slick6th').removeClass('hidden');
        }
        // This code for hide first nav
        if (currentSlide === 0) {
            $('.prev-slick6th').addClass('hidden');
        } else {
            $('.prev-slick6th').removeClass('hidden');
        }
        // End Bakkar code //
    });


    /*[ Slick7th ]
  ===========================================================*/
    $('.slick7th').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick7th'),
        prevArrow: '<button class="arrow-slick7th prev-slick7th hidden"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick7th next-slick7th"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick7th').on('afterChange', function (event, slick, currentSlide) {

        // Start Bakkar code //
        // This code for hide last nav
        if (slick.$slides.length - 1 == currentSlide) {
            $('.next-slick7th').addClass('hidden');
        } else {
            $('.next-slick7th').removeClass('hidden');
        }
        // This code for hide first nav
        if (currentSlide === 0) {
            $('.prev-slick7th').addClass('hidden');
        } else {
            $('.prev-slick7th').removeClass('hidden');
        }
        // End Bakkar code //
    });


    /*[ Slick8th ]
  ===========================================================*/
    $('.slick8th').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        appendArrows: $('.wrap-slick8th'),
        prevArrow: '<button class="arrow-slick8th prev-slick8th hidden"><i class="fa  fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button class="arrow-slick8th next-slick8th"><i class="fa  fa-angle-right" aria-hidden="true"></i></button>',
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.slick8th').on('afterChange', function (event, slick, currentSlide) {

        // Start Bakkar code //
        // This code for hide last nav
        if (slick.$slides.length - 1 == currentSlide) {
            $('.next-slick8th').addClass('hidden');
        } else {
            $('.next-slick8th').removeClass('hidden');
        }
        // This code for hide first nav
        if (currentSlide === 0) {
            $('.prev-slick8th').addClass('hidden');
        } else {
            $('.prev-slick8th').removeClass('hidden');
        }
        // End Bakkar code //
    });

    // product slider image zoom
    $('.zoom-img').css('cursor', 'zoom-in').zoom();


})(jQuery);