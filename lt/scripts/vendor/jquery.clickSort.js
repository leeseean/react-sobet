/**
 * Created by thomas on 2016/11/30.
 */
(function($){
    $.fn.clickSort = function(opts){
        var defaults = {
            speed:200//移动速度
        }
        var option = $.extend(defaults,opts);
        this.each(function(){
            var _this = $(this);
            _this.on('click','.moveup',function(e){
                e.preventDefault();
                var parent = $(this).parents('.sortableitem');
                var prevItem = parent.prev('.sortableitem');
                if(parent.hasClass('loading')){
                    return false;
                }
                $('.sortableitem').addClass('loading');
                if(prevItem.length==0){
                    $('.sortableitem').removeClass('loading');
                    return;
                }
                var parentTop = parent.position().top;
                var prevItemTop = prevItem.position().top;
                /*parent.css('visibility','hiden');
                prevItem.css('visibility','hiden');*/
                var parentClone = parent.clone();
                parentClone.insertAfter(parent).css({position:'absolute',visibility:'visible',width:'100%',top:parentTop}).animate({top:prevItemTop},option.speed,function(){
                    var data = parent.attr('data-lt');
                    $(this).remove();
                    parent.insertBefore(prevItem).css('visibility','visible');
                    option.callback(data);
                });
                prevItem.clone().insertAfter(prevItem).css({position:'absolute',visibility:'visible',width:'100%',top:prevItemTop}).animate({top:parentTop},option.speed,function(){
                    $(this).remove();
                    prevItem.css('visibility','visible');
                });
                setTimeout(function () {
                    $('.sortableitem').removeClass('loading');
                },500);
            });
            _this.on('click','.movedown',function(){
                var parent = $(this).parents('.sortableitem');
                var nextItem = parent.next('.sortableitem');
                if(nextItem.length==0)return;
                var parentTop = parent.position().top;
                var nextItemTop = nextItem.position().top;
                parent.css('visibility','hidden');
                nextItem.css('visibility','hidden');
                parent.clone().insertAfter(parent).css({position:'absolute',visibility:'visible',top:parentTop}).animate({top:nextItemTop},option.speed,function(){
                    $(this).remove();
                    parent.insertAfter(nextItem).css('visibility','visible');
                    option.callback();
                });
                nextItem.clone().insertAfter(nextItem).css({position:'absolute',visibility:'visible',top:nextItemTop}).animate({top:parentTop},option.speed,function(){
                    $(this).remove();
                    nextItem.css('visibility','visible');
                });
            });

        });
    }
})(jQuery)