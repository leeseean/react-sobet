/**
 * Created by maple on 2017/8/8.
 */
$(document).ready(function(){
    var isIE = window.ActiveXObject || "ActiveXObject" in window;
    if(!isIE) {
        $('.pic li').mouseover(function () {
            $(this).addClass('picHover');
        }).mouseout(function () {
            $(this).removeClass('picHover');
        });
    }

    $('.video-btn').off('click').on('click', function () {
        $('body,html').animate({'scrollTop':0},100);
        $('.video-content').fadeIn();
    });
    $('.video-content .close').off('click').on('click', function () {
        videojs('myvideo').pause();
        $('.video-content').fadeOut();
    });

    $('.goTop').off('click').on('click',function () {
        $('body,html').animate({'scrollTop':0},500);
    });
    $('.live-video').off('click').on('click',function () {
        $('.video-btn').click();
    });
    $('.live-image').off('click').on('click',function () {
        $('body,html').animate({'scrollTop':650},500);
    });

    layer.photos({
        photos: ".layer-photo",
        anim: 5,
        closeBtn: true,
        move: false,
    });
    $('.nav-ul li').on('click', function() {
        if(!$(this).hasClass('show')) {
            var $cur = $('.pic').eq($(this).index());
            $(this).parent().find('li').removeClass('nav-li-active');
            $(this).addClass('nav-li-active');
            $('.pic').removeClass('show').addClass('hidden');
            $cur.addClass('show').removeClass('hidden');
        }
    });
});
