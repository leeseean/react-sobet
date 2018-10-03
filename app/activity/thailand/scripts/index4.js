/**
 * Created by maple on 2017/8/8.
 */
$(document).ready(function(){
    $("#video").off('click').on('click',function () {
        if(video.paused){
            $('.activeVideo h2').html('');
            video.play();
        }else{
            video.pause();
        }
    }).on('ended', function() {
        $('.activeVideo h2').eq(0).html($('.activeVideo h2').eq(0).attr('data-def'));
        $('.activeVideo h2').eq(1).html($('.activeVideo h2').eq(1).attr('data-def'));
        $("#video").removeAttr('controls');
    });
    $('.btn-play').off('click').on('click', function () {
        if(video.paused){
            $('.activeVideo h2').html('');
            $("#video").attr('controls', 'controls');
            video.play();
        }else{
            video.pause();
        }
    });
    $('.goTop').on('click',function () {
        $('body,html').animate({'scrollTop':0},500);
    });
    layer.photos({
        photos: ".layer-photo",
        anim: 5,
        closeBtn: true,
        move: false,
    });
    var firstShow = $('.show').eq(0), firstHeight = 0;
    firstShow.find('ul').each(function() {
        var tmp = $(this).outerHeight();
        firstHeight = tmp > firstHeight ? tmp : firstHeight;
    });
    firstShow.parent().outerHeight(firstHeight + 80);
    $('.nav-ul li').on('click', function() {
        if(!$(this).hasClass('show')) {
            var $cur = $('.pic').eq($(this).index()),
                height = 0;
            $(this).parent().find('li').removeClass('nav-li-active');
            $(this).addClass('nav-li-active');
            $('.pic').removeClass('show').addClass('hidden');
            $cur.addClass('show').removeClass('hidden');
            $cur.find('ul').each(function(){
                var tmp = $(this).outerHeight();
                height = tmp > height ? tmp : height; 
            });
            $cur.parent().outerHeight((height + 80));
        }
    });
});
