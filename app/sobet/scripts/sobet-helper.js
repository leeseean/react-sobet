/*
* @Author: Maple
* @Date:   2017-10-09
*/

'use strict';

var type;
var href = window.location.href;
if(/\?/.test(href))
    type = window.location.href.split('?')[1].split('=')[1];
if(!type) type = 'helper';
$('.helper-cont[data-type="'+ type +'"]').removeClass('helper-hidden').addClass('helper-show');
$('.helper-tag[data-type="'+ type +'"]').addClass('helper-tag-active');
$('.helper-tag').on('click', function() {
    $('.helper-tag').removeClass('helper-tag-active');
    $(this).addClass('helper-tag-active');
    var index = parseInt($(this).attr('data-index'));
    $('.helper-cont').removeClass('helper-show').addClass('helper-hidden');
    $('.helper-cont').eq(index).removeClass('helper-hidden').addClass('helper-show');
});