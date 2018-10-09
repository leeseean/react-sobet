$(document).ready(()=> {
	NProgress.start();

	User.getStatus((res)=> {
		Navigation.init(res, () => {});
	});
	if (localStorage.getItem('singSaveLevel')) {
		Lottery.singSaveLevel = parseInt(localStorage.getItem('singSaveLevel'));
	}

	const hash = window.location.hash;
	Lottery.cls = hash.slice(1).split('-')[0] || localStorage.getItem('cls') || 'ssc';
	Lottery.lt = hash.slice(1).split('-')[1] || localStorage.getItem('lt') || 'CQSSC';

	localStorage.setItem('cls', Lottery.cls);
	localStorage.setItem('lt', Lottery.lt);
	//彩种切换时清空投注模式用
	Lottery.old_lt = Lottery.lt;
	window.addEventListener('scroll', Lottery.winListPos);
	window.addEventListener('resize', Lottery.initNav);

	Api.getOddsByLt({
		lottery: Lottery.lt
	}, (d)=> {
		if (d.code && d.result) {
			// 将返回结果赋值给odds 并更新页面奖金模式
			Lottery.odds[Lottery.lt] = d.result[Lottery.lt];
			Lottery.init(); //先把页面渲染出来
			// 初始化选号投注盘 交易行情选号盘
			Lottery.updateOdds();
		}
		// 追号初始化
		Trace.init({
			'lottery': 1
		});
		NProgress.done();
	});

	//获取常玩彩种列表
	getLotteryFavorite();

	//常玩彩种设置
	$('#lotteryClass .setButton').off().click(function (evt) {
		evt.stopPropagation();
		if (dialog.get('lotterySetting')) {
			return false;
		}
		var settingContent =  '<dl class="js-set-menu fl"><dt><span class="icon-title"></span>常玩彩种</dt></dl>\
								<div id="lotterySet" class="fr">\
									<p>请选择您最常玩的彩种(最多可选10个彩种)</p>\
									<div>\
										<div class="fl title">时时彩</div>\
										<div class="fl content">\
											<div class="lotteryList" data-lt="RDFFC" data-lt-cls="ssc" data-default="3">\
											  <div class="div1 close1"><div class="div2"></div></div>\
												瑞典1分彩\
											</div>\
											<div class="lotteryList" data-lt="RDLFC" data-lt-cls="ssc" data-default="3">\
											  <div class="div1 close1"><div class="div2"></div></div>\
												瑞典2分彩\
											</div>\
											<div class="lotteryList" data-lt="RBSSM" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												日本30秒彩\
											</div>\
											<div class="lotteryList" data-lt="WBGMMC" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												WBG秒秒彩\
											</div>\
											<div class="lotteryList" data-lt="WBGFFC" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												WBG分分彩\
											</div>\
											<div class="lotteryList" data-lt="WBG5FC" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												WBG5分彩\
											</div>\
											<div class="lotteryList" data-lt="CQSSC" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												重庆时时彩\
											</div>\
											<div class="lotteryList" data-lt="TJSSC" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												天津时时彩\
											</div>\
											<div class="lotteryList" data-lt="XJSSC" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												新疆时时彩\
											</div>\
											<div class="lotteryList" data-lt="XN5FC" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												悉尼5分彩\
											</div>\
											<div class="lotteryList" data-lt="HN5FC" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												河内5分彩\
											</div>\
											<div class="lotteryList" data-lt="QQSSM" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												QQ30秒彩\
											</div>\
											<div class="lotteryList" data-lt="TXFFC" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												腾讯分分彩\
											</div>\
											<div class="lotteryList" data-lt="TX1FC" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												腾讯1分彩\
											</div>\
										</div>\
									</div>\
									<div>\
										<div class="fl title">11选5</div>\
										<div class="fl content">\
											<div class="lotteryList" data-lt="MC11Y" data-lt-cls="11y" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  摩臣11选5\
											  </div>\
											  <div class="lotteryList" data-lt="GD11Y" data-lt-cls="11y" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  广东11选5\
											  </div>\
											  <div class="lotteryList" data-lt="SD11Y" data-lt-cls="11y" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  山东11选5\
											  </div>\
											  <div class="lotteryList" data-lt="JX11Y" data-lt-cls="11y" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  江西11选5\
											  </div>\
											  <div class="lotteryList" data-lt="SH11Y" data-lt-cls="11y" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  上海11选5\
											  </div>\
											  <div class="lotteryList" data-lt="AH11Y" data-lt-cls="11y" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  安徽11选5\
											  </div>\
											  <div class="lotteryList" data-lt="HLJ11Y" data-lt-cls="11y" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  黑龙江11选5\
											</div>\
											<div class="lotteryList" data-lt="YN11Y" data-lt-cls="11y" data-default="5">\
											  <div class="div1 close1"><div class="div2"></div></div>\
											  云南11选5\
											</div>\
											<div class="lotteryList" data-lt="HUB11Y" data-lt-cls="11y" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  湖北11选5\
											  </div>\
										</div>\
									</div>\
									<div>\
										<div class="fl title">PK10</div>\
										<div class="fl content">\
											<div class="lotteryList" data-lt="MCPK10" data-lt-cls="pk10" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  摩臣PK10\
											  </div>\
											  <div class="lotteryList" data-lt="BJPK10" data-lt-cls="pk10" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  北京PK10\
											  </div>\
											  <div class="lotteryList" data-lt="XGPK10" data-lt-cls="pk10" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  香港PK10\
											  </div>\
										</div>\
									</div>\
									<div>\
										<div class="fl title">快3</div>\
										<div class="fl content">\
											<div class="lotteryList" data-lt="MCK3" data-lt-cls="k3" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  摩臣快3\
											  </div>\
											  <div class="lotteryList" data-lt="JSK3" data-lt-cls="k3" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  江苏快3\
											  </div>\
											  <div class="lotteryList" data-lt="HNK3" data-lt-cls="k3" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  河南快3\
											  </div>\
											  <div class="lotteryList" data-lt="HBK3" data-lt-cls="k3" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  湖北快3\
											  </div>\
											  <div class="lotteryList" data-lt="AHK3" data-lt-cls="k3" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  安徽快3\
											  </div>\
										</div>\
									</div>\
									<div>\
										<div class="fl title">3D/低频</div>\
										<div class="fl content">\
											<div class="lotteryList" data-lt="MC3D" data-lt-cls="3d" data-default="1">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  摩臣3D\
											  </div>\
											  <div class="lotteryList" data-lt="SHSSL" data-lt-cls="3d" data-default="3">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  上海时时乐\
											  </div>\
											  <div class="lotteryList" data-lt="3DFC" data-lt-cls="3d" data-default="1">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  福彩3D\
											  </div>\
											  <div class="lotteryList" data-lt="TCP3" data-lt-cls="3d" data-default="1">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  排列3\
											  </div>\
											  <div class="lotteryList" data-lt="TCP5" data-lt-cls="ssc" data-default="2">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  排列5\
											  </div>\
										</div>\
									</div>\
									<div>\
										<div class="fl title">其他</div>\
										<div class="fl content last">\
											<div class="lotteryList" data-lt="SCKL12" data-lt-cls="kl12" data-default="5">\
												  <div class="div1 close1"><div class="div2"></div></div>\
												  四川快乐12\
											  </div>\
											<div class="lotteryList" data-lt="HNKY481" data-lt-cls="ssc" data-default="3">\
												<div class="div1 close1"><div class="div2"></div></div>\
												河南快赢481\
											</div>\
											<div class="lotteryList" data-lt="JSLHC" data-lt-cls="lhc" data-default="1">\
												<div class="div1 close1"><div class="div2"></div></div>\
												极速六合彩\
											</div>\
										</div>\
									</div>\
									<div class="saveLottery">确定</div>\
							  </div>';
		var lotterySetting = dialog({
			id: 'lotterySetting',
			skin: 'lotterySetting',
			fixed: true,
			width: 886,
			height: 572,
			title: ' ',
			content: settingContent,
			onshow: function () {
				//显示当前已经收藏的彩种
				var all = $('.sortablelist dd.collect').toArray();
				var list = $('.lotteryList').toArray();
				var allAttr = [];
				var listAttr = [];
				var listTPL = Lottery.CWCZ.map(function (item) {
					if (item.user_id !== -2) {
						return `<dd data-lt="${item.lottery_code}"><div><em>${Q.nameLottery(item.lottery_code)}</em></div></dd>`
					}
				 }).join('');
				$('.js-set-menu').append(listTPL);

				Lottery.CWCZ.map(function (item) {
					if(item.user_id !== -2) {
						$(`.lotteryList[data-lt=${item.lottery_code.toUpperCase()}]`).children('div').removeClass('close1').addClass('open1');
						$(`.lotteryList[data-lt=${item.lottery_code.toUpperCase()}]`).children('div').children('div').removeClass('close2').addClass('open2');
					}
				})

				//添加或者删除彩种
				var check = $('#lotterySet .lotteryList').children('div');
				$('#lotterySet .lotteryList').off('click').on('click', '.div1', function () {
					var that = this;
					if ($(that).hasClass('loading')) {
						return false;
					}
					$(that).addClass('loading');
					var lottery_code = $(that).parent('.lotteryList').attr('data-lt');
					var obj = {
						lottery: lottery_code.toLowerCase()
					};
					if ($(that).hasClass('open1')) {
						$(that).removeClass('open1').addClass('close1');
						$(that).children('div').removeClass('open2').addClass('close2');
						Api.delLotteryFavorite(obj, function (d) {
							$(`.js-set-menu dd[data-lt=${obj.lottery.toUpperCase()}]`).remove();
							$(that).removeClass('loading');
						});
					} else if ($(that).hasClass('close1')) {
						var open = $('.lotteryList').find('.div2.open2');
						if (open.size() >= 10) {
							var tip = dialog({
								content: "您所选择的彩种已超过10个！",
								fixed: true,
								quickClose: true,
								skin: 'addWarn'
							}).showModal();
							setTimeout(function () {
								tip.close().remove();
							}, 2000);
							$(that).removeClass('loading');
						} else {
							$(that).removeClass('close1').addClass('open1');
							$(that).children('div').removeClass('close2').addClass('open2');
							Api.addLotteryFavorite(obj, function (d) {
								$('.js-set-menu').append(`<dd data-lt="${obj.lottery.toUpperCase()}"><div><em>${Q.nameLottery(obj.lottery.toUpperCase())}</em></div></dd>`);
								$(that).removeClass('loading');
							});
						}
					}

				});

				$('.saveLottery').off('click').on('click', function () {
					dialog.get('lotterySetting').close().remove();
				})
			},
			onremove: function () {
				getLotteryFavorite();
			},
		}).showModal();
	});

	$('input.spinner.biggerw').inputNumber();

	// 开始推送
	Live.start();
	Lottery.showWinMsg();            
});

function getLotteryFavorite() {
	Api.getLotteryFavorite(function (d) {
		d = d.result;
		Lottery.CWCZ = d;
		if (d.length != 0) {
			var html = '';
			for (var i = 0; i <= d.length - 1; i++) {
				var name = d[i].lottery_code;
				var userId = d[i].user_id;
				name = name.toUpperCase();
				var cls;
				var fault;
				switch (name) {
					case "CQSSC":
					case "TJSSC":
					case "XJSSC":
					case "TXFFC":
					case "TX1FC":
					case "WBGFFC":
					case "WBG5FC":
					case "WBGMMC":
					case "XN5FC":
					case "HN5FC":
					case "BJ5FC":
					case "TW5FC":
					case "RDFFC":
					case "RDLFC":
					case "RBSSM":
					case "QQSSM":
					case "HNKY481":
						cls = "ssc";
						fault = "3";
						break;
					case "GD11Y":
					case "SD11Y":
					case "JX11Y":
					case "SH11Y":
					case "AH11Y":
					case "HLJ11Y":
					case "MC11Y":
					case "YN11Y":
					case "HUB11Y":
						cls = "11y";
						fault = "5";
						break;
					case "SCKL12":
						cls = "kl12";
						fault = "5";
						break;
					case "BJPK10":
					case "XGPK10":
					case "MCPK10":
						cls = "pk10";
						fault = "5";
						break;
					case "JSK3":
					case "HNK3":
					case "MCK3":
					case "HBK3":
					case "JLK3":
					case "AHK3":
						cls = "k3";
						fault = "5";
						break;
					case "3DFC":
					case "MC3D":
					case "TCP3":
						cls = "3d";
						fault = "2";
						break;
					case "SHSSL":
						cls = "3d";
						fault = "1";
						break;
					case "TCP5":
						cls = "ssc";
						fault = "2";
						break;
					case "JSLHC":
						cls = "lhc";
						fault = "1";
						break;
				}

				if (userId !== -2) {
					html += '<dd  class="sortableitem collect" data-lt-cls="' + cls + '" data-default="' + fault + '" data-lt="' + name + '"><div><em>' + Q.nameLottery(name) + '</em><span countdown="0"></span></div></dd>'
				} else {
					html += '<dd  class="sortableitem noCollect" data-lt-cls="' + cls + '" data-default="' + fault + '" data-lt="' + name + '"><div><em>' + Q.nameLottery(name) + '</em><span countdown="0"></span><i class="recommend"></i></div></dd>'
				}
			}
			$('#lotteryClass .sortableitem').remove();
			$('#lotteryClass .sortablelist .setButton').before(html);
			$('#lotteryClass dd[data-lt=' + Lottery.lt + ']').addClass('on');
			Lottery.updateTime();
			$('#lotteryClass dd').off('click').on('click', function (evt) {
				evt.preventDefault();
				Lottery.noanimation = false;
				Lottery.ltTabSwitchEl = 'sortableitem';
				$('.resuleShow>ul').scrollTop(0);

				var winNoticeWrap = $('.winResultsList>.winLine .winNoticeWrap');

				Lottery.winListMarqueeShow && Lottery.winResultsListMarquee();

				var lt = $(this).attr('data-lt');
				var cls = $(this).attr('data-lt-cls');
				var dft = $(this).attr('data-default');

				window.location.hash = cls + '-' + lt;
				$(window).scrollTop(0);
				Lottery.old_lt = Lottery.lt;
				Lottery.lt = lt;
				Lottery.cls = cls;
				Lottery.dft = dft;
				if (!Lottery.odds[Lottery.lt]) {
					Api.getOddsByLt({
						lottery: Lottery.lt
					}, function (d) {
						Lottery.odds[Lottery.lt] = d.result[Lottery.lt];
						Lottery.init();
					});
				} else {
					Lottery.init();
				}
				localStorage.setItem('cls', Lottery.cls);
				localStorage.setItem('lt', Lottery.lt);
			});
		}
	});
}