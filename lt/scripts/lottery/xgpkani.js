var XGPKAni = XGPKAni || {};
XGPKAni = {
    ani:false,
    start:false,
    roadEnd:false,
    countFirstCode:1,//第一次進入頁面或者刷新頁面渲染底部排序不能通過message
    init: function () {
		$('#lottery .toggleXGPkAni').off('click').on('click', function () {
			$('.xgpk10_ani').slideToggle();
			$(this).toggleClass('open');
			var html = $(this).hasClass('open') ? '隐藏动画' : '展开动画';
			$(this).html(html);
		});
	},
};