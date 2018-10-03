var Navigation = Navigation || {};

Navigation = {
	IE: false,
	nickname: '', //昵称
	path: window.location.protocol + '//' + window.location.host,
	balance: {},
	//导航栏内获取余额
	getUserMoney: function () {
		var me = this;
		var headMoneyCount = $('.head-money-count');
		var headMoneyCountWidth = $('.head-money-count').width();
		headMoneyCount.html('<i class="ui-dialog-loading reloading" style="width:' + headMoneyCountWidth + 'px"></i>');
		var diceGameBalance = $('.diceGameBar .diceGameInfo .balanceDetail .balanceAmount');
		//获取登录状态后的用户余额等信息
		User.getStatus(function (d) {
			if (d.code === 0 || (d.responseText && eval(d.responseText).code === 0)) {
				User.getUserMoney(function (res) {
					if (res.code === 0) {
						var balance = res.result.userMoney.avail;
						var walletList = res.result.userMoney.walletList;
						for (var i = 0; i < walletList.length; i++) {
							me.balance[walletList[i].walletType] = toFixedNum(walletList[i].cash);
						}
						headMoneyCount.html(me.balance["sobet_01"]);
						diceGameBalance.html(me.balance["sobet_01"] + '元'); //骰宝余额
						var lastLoginTime = res.result.lastLoginTime;
						if (lastLoginTime) {
							lastLoginTime = lastLoginTime.substring(0, 19);
							$(".head-greet .header_menu_ul").find(".last em").html(lastLoginTime);
						}
					}
				});
			} else {
				// 需要登录
				$(".loginlnk").trigger('click');
			}
		});

	},
	//代理中心下拉列表跨级转账和上下级转账记录显示
	getUserPoint: function () {
		User.agentTransferIsShow(function (res) {
			User.isShow = res.isShow;
			User.isCrossShow = res.isCrossShow;
			if (res.isShow === 'Y') {
				$('.header_menu_ul .lowTansfer').show();
				$('#aside .agencyTab li[name = lowTansfer]').show();
				
			} else {
				$('.header_menu_ul .lowTansfer').hide();
				$('#aside .agencyTab li[name = lowTansfer]').hide();
			}
			if (res.isCrossShow === 'Y') {
				$('.header_menu_ul .lowLevelTransfer').show();
				$('#aside .agencyTab li[name="lowLevelTransfer"]').show();
			} else {
				$('.header_menu_ul .lowLevelTransfer').hide();
				$('#aside .agencyTab li[name="lowLevelTransfer"]').hide();
			}
		});
	},
	//是否显示微信绑定/sobet/userInfo/userBindWechatRuleCheck
	userBindWechatRuleCheck: function () {
		$.ajax({
			url: '/sobet/userInfo/userBindWechatRuleCheck',
			type: 'GET',
			dataType: 'json',
			cache: false
		}).done(function (res) {
			switch (res) {
				case true:
					$('.header_menu a[type="webind"]').show();
					$('.usercenter ul.historyMenu li[data-type="webind"]').show();
					break;
				case false:
					$('.header_menu a[type="webind"]').hide();
					$('.usercenter ul.historyMenu li[data-type="webind"]').hide();
					break;
				default:
					$('.header_menu a[type="webind"]').hide();
					$('.usercenter ul.historyMenu li[data-type="webind"]').hide();
					break;
			}
		}).fail(function (res) {
			$('.header_menu a[type="webind"]').hide();
			$('.usercenter ul.historyMenu li[data-type="webind"]').hide();
		});
	},
	initUserMenu: function () {
		var me = this;

		$('.head-allGames').hover(function () {
			$('.lotList').show();
		}, function () {
			$('.lotList').hide();
		});

		$('.lotList .lotteryList').off('click').click(function () {
			$('.lotList').hide();
			var pathname = window.location.pathname;
			var lottery = $(this).attr('data-lt');
			var cls = $(this).attr('data-lt-cls');
			var dft = $(this).attr('data-default');
			if (lottery) {
				if (pathname.indexOf('lottery') !== -1) {
					window.location.hash = cls + '-' + lottery;
					$(window).scrollTop(0);
					Lottery.old_lt = Lottery.lt;
					Lottery.lt = lottery;
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
				} else {
					window.location.href = '/lottery#' + cls + '-' + lottery;
				}
			}
		});


		Api.checkMsg(function (d) { // 右侧是否显示新消息
			if (d.code === 1) {
				d = d.result;
				if (d) {
					$('.toChat').addClass('unread');
				} else {
					$('.toChat').removeClass('unread');
				}
				Chat.unread = d;
			}
		});

		$('.footer_float .toChat,.chat-msg').off('click').on('click', function () { // 上下级通讯
			if (!Chat.socket) {
				layer.alert('建立聊天失败，您打开过多的平台页面，请在之前打开的页面进行聊天', {
					skin: 'layui-layer-lan',
					closeBtn: 0
				});
				return;
			}
			Chat.init();
			layer.open({
				id: 'chat-layer',
				type: 1,
				title: false,
				skin: 'chat-layer',
				area: ['880px', '645px'],
				fixed: true,
				shade: 0.3,
				shadeClose: true,
				closeBtn: true,
				content: $('#chat'),
				success: function () {
					Chat.hidden = 0;
					if (Chat.toUserType === 'admin') {
						$('.user-item[data-type=admin]').click();
					} else if (Chat.toUserType === 'agent') {
						$('.user-item.user-agent').click();
					} else {
						$('.list-recent .user-item[data-id=' + Chat.toUserId + ']').click();
					}
				},
				end: function () {
					Chat.hidden = 1;
				}
			});
		});

		$('.footer_float .newGuide').off('click').on('click', function (e) {
			e.preventDefault();
			Main.getGuide();
		});

		//隐藏的登陆链接
		$('#mc_header .loginlnk').unbind('click').bind('click', function (event) {
			window.location.href = me.path;
		});

		$('#mc_header .logout').off('click').on('click', function () {
			var d = dialog({
				title: '温馨提示',
				content: '您确定要退出吗？',
				skin: 'confirm-again',
				fixed: true,
				cancel: false,
				top: 200,
				button: [{
					id: 'logout-ok',
					value: '确定',
					callback: function () {
						if (User.userLogout) {
							User.userLogout(function (res) {
								User.iframeLogout();
							});
						} else {
							User.iframeLogout();
						}
						sessionStorage.clear();
					}
				}, {
					id: 'logout-cancel',
					skin: 'cancel',
					value: '取消'
				}]
			}).showModal();
		});

		$('.head-money-refresh').off('click').on('click', function () {
			if (window.location.href.indexOf("/lottery") !== -1) {
				Lottery.getUserMoney();
			} else {
				me.getUserMoney();
			}
		});
	},
	getBrowser: function () {
		var me = this;
		var agent = navigator.userAgent.toLowerCase();
		var type = agent.match(/msie [\d.]+;/gi);
		var verinfo = (type + "").replace(/[^0-9.]/ig, "");

		if (agent.indexOf("msie") > 0 && parseInt(verinfo) < 10) {
			me.IE = true;
		}
	},
	//顶部代理中心下拉菜单是否显示分红管理
	isDividentShow: function () {
		//通过有无签订契约来判断是否显示左边分红管理1或者日工资管理0 tab
		Api.haveContractInfo({
			type: 1
		}, function (res) {
			if (res.code == -1) {
				$('.header_menu_ul > li>a[rel="dividents"]').hide();
				sessionStorage.setItem('dvdShow', 0);
			} else if (res.code == 1) {
				$('.header_menu_ul > li>a[rel="dividents"]').show();
				sessionStorage.setItem('dvdShow', 1);
				sessionStorage.setItem('contract1', 1);
			}
		});
		Api.haveContractInfo({
			type: 0
		}, function (res) {
			if (res.code == -1) {
				$('.header_menu_ul > li>a[rel="daySalary"]').hide();
				sessionStorage.setItem('dvdDayShow', 0);
			} else if (res.code == 1) {
				$('.header_menu_ul > li>a[rel="daySalary"]').show();
				sessionStorage.setItem('dvdDayShow', 1);
				sessionStorage.setItem('contract0', 1);
			}
		});
		var me = this;
		$.ajax({
			url: '/lottery/api/u/v1/contract/allContractStatus',
			type: "GET",
            dataType: "json",
            cache: false,
		}).then( function (res) {
			if (res.code === 1) {
				switch(res.result.bonus) {
					case 0:
						$('.header_menu_ul > li>a[rel="dividents"]').hide();
						$('.agencyTab li[name="dividents"]').hide();
						sessionStorage.setItem('contract1', 0);
						break;
					case 1:
						$('.header_menu_ul > li>a[rel="dividents"]').show();
						$('.agencyTab li[name="dividents"]').show();
						sessionStorage.setItem('contract1', 1);
						break;
				}
				switch(res.result.salary) {
					case 0:
						$('.header_menu_ul > li>a[rel="daySalary"]').hide();
						$('.agencyTab li[name="daySalary"]').hide();	
						sessionStorage.setItem('contract0', 0);											
						break;
					case 1:
						$('.header_menu_ul > li>a[rel="daySalary"]').show();
						$('.agencyTab li[name="daySalary"]').show();						
						sessionStorage.setItem('contract0', 1);
						break;
				}
				switch(res.result.privateRebate) {
					case 0:
						$('.header_menu_ul > li>a[rel="sifan"]').hide();
						$('.agencyTab li[name="sifan"]').hide();
						sessionStorage.setItem('contract2', 0);												
						break;
					case 1:
						$('.header_menu_ul > li>a[rel="sifan"]').show();
						$('.agencyTab li[name="sifan"]').show();
						sessionStorage.setItem('contract2', 1);
						break;
				}
 			}
		});
	},
	//获取昵称
	getNickname: function () {
		var me = this;
		Api.getNickname(function (res) {
			if (res.userInfo) {
				$('.head-greet-content>em').html(res.userInfo.nikeName || User.name);
			}
		});
	},
	init: function (res, fn) {
		var me = this;
		if ($('#mc_footer').length === 0) {
			return false;
		}
		if (res.code === 0) {
			sessionStorage.setItem('userType', res.result.type);
			if (res.result.type === 0) {//type 0 表示是玩家,玩家不显示头部代理中心
				$('.head-agent').remove();
			}
			User.name = res.result.name;
			localStorage.setItem('userName',res.result.name);
			me.getNickname();
			$('.diceGameBar .userName .name').html(User.name);//骰宝
			me.getUserPoint();
			me.userBindWechatRuleCheck();
			me.getUserMoney();
			me.initUserMenu();
			me.getBrowser();
			me.isDividentShow();
			

			// 上下级通讯参数
			Chat.name = res.result.name;
			Chat.id = res.result.id;
			Chat.type = res.result.type;
			Chat.start();

			switch (res.result.type) {
				case 0:
					$('.chat-search').remove();
					$('.user-lower').remove();
					$('.user-list .setting').remove();
					Chat.initAgent();
					break;
				case 2:
					$('.user-agent').remove();
					$('.user-lower').addClass('zd-lower');
					Chat.initUser();
					break;
				default:
					Chat.initUser();
					Chat.initAgent();
					break;
			}

			User.updateMsg();

			if (typeof fn === 'function') {
				fn();
			}
		} else {
			var pathname = window.location.pathname.replace(/\/+/g, '');

			if (pathname.indexOf('lottery') === 0 || pathname.indexOf('sport') === 0 || pathname.indexOf('index') === 0) {
				window.location.href = me.path;
			}
		}
	},
};

function toFixedNum(num) {
	var stringNum = String(num);
	var strNumArr = stringNum.split('.');
	if (strNumArr.length >= 2) {
		stringNum = strNumArr[1] + '0000';
		num = strNumArr[0] + '.' + stringNum.substring(0, 4) + '';
	} else {
		num = strNumArr[0] + '.0000';
	}
	return num;
}
var loginState = setInterval(function () {
	User.getStatus(function (res) {
		if (res.code == -1) {
			var msg = dialog({
				title: '系统消息',
				content: '<div class="logoutMsg">您已退出登录</div>',
				cancel: false,
				fixed: true,
				width: 'auto',
				height: 'auto',
				onshow: function () {
					setTimeout(function () {
						window.location.href = window.location.protocol + '//' + window.location.host;
						sessionStorage.clear();
					}, 3000);
				},
				button: [{
					id: 'clock_ok',
					value: '关&nbsp;闭',
					callback: function () {
						window.location.href = window.location.protocol + '//' + window.location.host;
					}
				}]
			}).showModal();
			return;
		} else if (res.code == -2) {
			var msg = dialog({
				title: '系统消息',
				content: '<div class="logoutMsg">' + res.msg + '</div>',
				cancel: false,
				fixed: true,
				width: 'auto',
				height: 'auto',
				onshow: function () {
					setTimeout(function () {
						window.location.href = window.location.protocol + '//' + window.location.host;
						sessionStorage.clear();
					}, 3000);
				},
				button: [{
					id: 'clock_ok',
					value: '关&nbsp;闭',
					callback: function () {
						window.location.href = window.location.protocol + '//' + window.location.host;
					}
				}]
			}).showModal();
			return;
		}
	});
}, 20000);