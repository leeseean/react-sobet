$(document).ready(function(){

    var isIE = window.ActiveXObject || "ActiveXObject" in window;
    if(!isIE) {
        $('.photo-slide td').mouseover(function () {
            $(this).addClass('mark');
        }).mouseout(function () {
            $(this).removeClass('mark');
        });
    }

    var swiper = new Swiper('.main', {
        direction: 'vertical',
        effect: 'fade',
        allowTouchMove: false,
        mousewheel: true,
        fadeEffect: {
            crossFade: true
        },
        lazy: {
            loadPrevNext: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                if (index === 2) {
                    return '<li class="' + className + '"></li><a class="home" href="/"></a>';
                }
                return '<li class="' + className + '"></li>';
            },
            bulletActiveClass: 'my-bullet-active'
        },
        on: {
            init: function () {
                swiperAnimateCache(this);
                swiperAnimate(this);
            },
            slideChange: function () {
                if ($('.nav').hasClass('open')) {
                    $('.nav dd').hide();
                    $('.nav').removeClass('open');
                }
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this);
            }
        }
    });

    $('.nav').off('click').on('click', function (e) {
        e.stopPropagation();
        $('.nav').addClass('open');
        $('.nav dd').fadeIn('fast');
    });

    $(document).off('click').on('click', function () {
        if ($('.nav').hasClass('open')) {
            $('.nav dd').hide();
            $('.nav').removeClass('open');
        }
    });

    $('.video-controller').off('click').on('click', function () {
        if (!document.getElementById("activity-tw")) {
            var video = '<video id="activity-tw" class="video-js vjs-big-play-centered" controls preload="auto" data-setup="{}"><source src="video/mochen6.mp4" type="video/mp4"/></video><div class="close"></div>';
            $('.video').html(video);
            var player = videojs('activity-tw');
        }
        $('.video-content').fadeIn();
    });

    $('.video-content').off('click').on('click', '.close', function () {
        videojs('activity-tw').pause();
        $('.video-content').fadeOut();
    });

    $('.scroll-btn').off('click').on('click', function () {
        var index = swiper.activeIndex;
        var length = swiper.slides.length;
        if (index + 1 === length) {
            swiper.slideTo(0, 1000);
            return
        }
        swiper.slideNext(500);
    });

    var imgSwiper = new Swiper('.inner', {
        lazy: {
            loadPrevNext: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    layer.photos({
        photos: ".photo-slide",
        anim: 5,
        closeBtn: true,
        move: false,
    });

});
