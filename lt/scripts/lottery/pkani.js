var PKAni = PKAni || {};

PKAni = {
	speed: 72.2,
	distance: 0,
	nArr: [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.5, 0.6, 0.6, 0.6],
	ani: false,
	start: false,
	roadEnd: false,

	init: function () {
		$('#lottery .togglePkAni').off('click').on('click', function () {
			$('.pk10_ani').slideToggle();
			$(this).toggleClass('open');
			var html = $(this).hasClass('open') ? '隐藏动画' : '展开动画';
			$(this).html(html);
			$('.pk10_ani .cars div').each(function () {
				if($('.pk10_ani').hasClass('mcpk10_ani')){
					$(this).css('right', '-25px');
				}else{
					$(this).css('right', '-42px');
				}
			});
		});
	},

	roadFunc: function () {
		var me = this;
		if (me.roadEnd) {
			return;
		}
		me.distance += me.speed;
		var bg = me.distance + 'px 0px';
		$('.pk10_ani .road_bg').css('background-position', bg);

		setTimeout(function () {
			me.roadFunc();
		}, 100);
	},

	carFunc: function (code) {
		var me = this;
		if (me.roadEnd) {
			return;
		}
		$(code).each(function () {
			var dom = $('.pk10_ani .cars div').eq(parseInt(arguments[1]) - 1);
			if (dom.attr('data-status') == '1') {
				return false;
			}

			var right;
			if (dom.attr('data-distance')) {
				right = parseInt(dom.attr('data-distance'));
			} else {
				right = parseInt((Math.random() * 200).toFixed(0));
			}

			if (Math.random() > me.nArr[arguments[0]]) {
				right = right + 20;
				right = (right > 500) ? 500 : right;
				dom.addClass('fire');
			} else {
				right = right - 20;
				right = (right > 0) ? right : 0;
				dom.removeClass('fire');
			}
			dom.attr('data-distance', right);
			right += 'px';
			dom.css('right', right);
		});

		setTimeout(function () {
			me.carFunc(code);
		}, 1000);
	},

	lineStartFunc: function () {
		$('.pk10_ani .line').addClass('startline');
		setTimeout(function () {
			$('.pk10_ani .line').removeClass('startline').addClass('endline');
		}, 1000);
	},

	run: function (code, lastUl, lastTenList) {
		var me = this;
		$('.pk10_ani .ready').show().css('background', 'url(/static/lottery/images/ready.gif) no-repeat');
		setTimeout(function () {
			$('.pk10_ani .ready').hide().css('background', 'none');
			//code = code.split(/(?=(?:\d{2})+?$)/);
			code = code.split(',');
			me.start = true;

			me.roadFunc();
			me.carFunc(code);
			me.lineStartFunc();

			setTimeout(function () {
				me.end(code, lastUl, lastTenList);
			}, 10000);
		}, 4000);
	},

	end: function (code, lastUl, lastTenList) {
		var me = this;
		$(code).each(function () {
			var index = arguments[0];
			var dom = $('.cars div').eq(parseInt(arguments[1]) - 1);
			var time = 1200 + index * 200;

			setTimeout(function () {
				if (index < 3) {
					dom.removeClass('fire').addClass('fire2');
				}
				dom.attr('data-status', '1');
				dom.css('right', '665px');
			}, time);
		})

		setTimeout(function () {
			$('.pk10_ani .line').show().addClass('finalline');
		}, 2000);

		setTimeout(function () {
			me.roadEnd = true;
			$('.pk10_ani .cars div').removeClass('fire fire2');
			$('.pk10_ani .cars div').addClass('num');
			$(code).each(function () {
				var cls = 'num' + (arguments[0] + 1);
				var dom = $('.cars div').eq(parseInt(arguments[1]) - 1);
				dom.addClass(cls).attr('data-cls', cls);
			});
			if (Lottery.cls === 'pk10') {
				$('.js-open-code-list').html(lastUl);
				$('.js-trend-list').html(lastTenList);
			}
			$('.info .last-issue ul li:not(.last5)').removeClass('zoomIn').addClass('zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
				$(this).removeClass('zoomIn');
				Lottery.noanimation = false;
			});

		}, 3000);

		setTimeout(function () {
			$('.pk10_ani .line').hide();
		}, 4000);

		setTimeout(function () {
			me.refresh();
		}, 9000);
	},
	refresh: function () {
		var me = this;
		$('.pk10_ani .line').show().removeClass('finalline endline').addClass('line');
		$('.pk10_ani .road_bg').css('background-position', '0 0');

		$('.pk10_ani .cars div').each(function () {
			var cls = $(this).attr('data-cls');
			cls = 'num fire2 ' + cls;
			if($('.pk10_ani').hasClass('mcpk10_ani')){
				$(this).removeClass(cls).css('right', '-25px').attr('data-status', 0).removeAttr('data-distance').removeAttr('data-cls');
			}else{
				$(this).removeClass(cls).css('right', '-42px').attr('data-status', 0).removeAttr('data-distance').removeAttr('data-cls');
			}
		});

		me.distance = 0;
		me.ani = false;
		me.start = false;
		me.roadEnd = false;
	}
}