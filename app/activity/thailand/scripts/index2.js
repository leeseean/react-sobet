/**
 * Created by thomas on 2017/2/24.
 */
$(document).ready(function(){
    $("#video").off('click').on('click',function () {
        if(video.paused){
            video.play();
        }else{
            video.pause();
        }
    });
    $('.goTop').on('click',function () {
        $('body,html').animate({'scrollTop':0},500);
    });
    layer.photos({
        photos: "#layer-photo",
        anim: 5,
        closeBtn: true,
        move: false,
    });
});
