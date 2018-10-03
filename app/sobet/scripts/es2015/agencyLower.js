var Lower = Lower || {};

Lower = {
	permission: [],
	userParam: {},
	transferParam: {},
	levelTransferParam: {},
	transferList: false,
	formData: {
		levelTransferFormData: {
			rules: {
				userName: {
					required: true,
					remote: {
						url: "/sobet/pay/validateCrossTransferUser",
						type: "post", //数据发送方式
						dataType: "text", //接受数据格式
						data: {
							userName: function() {
								return $('#level-username').val();
							}
						}
					}
				},
				cash: {
					required: true,
					sobet_number: true
				},
				payPassword: {
					required: true,
					remote: {
						url: "/sobet/userInfo/validatePayPassword",
						type: "post", //数据发送方式
						dataType: "text", //接受数据格式
						data: { //要传递的数据
							payPassword: function () {
								return md5($("#level-payPassword").val());
							}
						}
					}
				}
			},
			messages: {
				userName: {
					required: "请输入转账用户"
				},
				cash: {
					required: "请输入转账金额"
				},
				payPassword: {
					required: "请输入资金密码"
				}
			},
			errorPlacement: function (error, element) {
				element.parent().parent().append(error);
			}
		}
	},
	tpl: {
		levelTransferTpl: '<div class="results no-border">' +
		                  	'<div class="tips"><span>您的账户当前可用余额:</span><span class="money">主钱包<em></em> 元</span></div></div>' +
		                    '<form id="userLowerLevelTransfer" autocomplete="off">' +
	                    	'<input name="type" type="hidden" value="1">' + 
	                    	'<input id="uid" name="uid" type="hidden" value="">' + 
	                    	'<input id="lowerUserList" name="lowerUserList" type="hidden" value="">' +
	                    	'<input id="serverTimeMillisStr" name="serverTimeMillisStr" type="hidden" value="">' +
	                    	'<input id="agentCn" name="agentCn" type="hidden" value="" />' +
	                    	'<div class="row"><span>1</span><p>请输入用户名:&nbsp;&nbsp;&nbsp;&nbsp;</p><input id="level-username" type="text" name="userName" value="">' +
	                        '</div>' +
	                        '<div class="row"><span>2</span><p>请选择转账类型:</p><div class="transferType" style="height: 0px;"><label><input type="radio" name="cbox" value="0" class="type" checked>普通转账&nbsp;(不计入盈亏)</label>' +
	                        '</div></div>' +
	                        '<div class="row"><span>3</span><p>请输入转账金额:</p><input id="level-turnInCash" name="cash" type="text" readonly onfocus="this.removeAttribute(\'readonly\')" placeholder="请输入转账金额" value="" autocomplete="off"></div>' +
	                        '<div class="row"><span>4</span><p>请输入资金密码:</p><input id="level-payPassword" type="password" name="payPassword" readonly onfocus="this.removeAttribute(\'readonly\')"  placeholder="请输入资金密码" value="" autocomplete="off"/></div>' +
	                        '<div class="row"><input type="submit" class="btn" value="立即转出"></div></form>'
	},
	payPwdExist: false,
	init: function () {
		var me = this;

		//$('.panel-tab.lower').find('input[type="text"].name').val(User.name);
		me.checkPayPwdExist(function () {
			me.initDatePicker();
			me.initEvent();
		});
	},

	checkPayPwdExist: function (fn) {
		var me = this;
		//判断是否设置资金密码
		$.ajax({
			type: "GET",
			url: "/sobet/api/payPwdCheck/existResult",
			dataType: 'json',
			success: function (data) {
				if (data.retCode == 0) {
					if (data.message === '1') {
						me.payPwdExist = true;
					} else {
						me.payPwdExist = false;
					}
					if (typeof fn === 'function') {
						fn();
					}
				} else {
					normalTip("请求数据出错");
				}
			}
		});
	},

	initDatePicker: function () {
		var tab = $('.panel-tab.lower');
		//日期选择控件
		var day_startFrom = tab.find('input[name=startTime]');
		var day_endFrom = tab.find('input[name=endTime]');

		day_startFrom.datetimepicker({
			timepicker: false,
			format: 'Y/m/d',
			closeOnDateSelect: true,
			lang: 'zh'
		});
		day_endFrom.datetimepicker({
			timepicker: false,
			format: 'Y/m/d',
			closeOnDateSelect: true,
			lang: 'zh'
		});
	},

	initEvent: function () {
		var me = this;
		me.initUserEvent();
	},

	initUserEvent: function () {
		var me = this;
		var tab = $('.panel-tab.lower');
		var tansferIn = $('#panel-tansferIn');
		var tansferOut = $('#panel-tansferOut');
		var levelTransfer = $('.panel-tab.levelTransfer');
		var p = me.userParam;

		$('#user').show();
		$('#info').hide();
		$('#gchangec').hide();
		$('#resetting').hide();
		$('#main>h2 .back').hide();

		//团队余额是否显示
		var userType = sessionStorage.getItem('userType');
		if (parseFloat(userType) === 2) {
			$('.team-total').show();
		} else {
			$('.team-total').remove();
		}

		//返回按钮事件
		$('#main .back').click(function () {
			$('.panel-tab').hide();
			$('#panel_user').show();
			$('#main .back').hide();
			me.getUser(p, tab);
		});

		//查询按钮
		tab.find('a.search').on('click', function () {
			var name = jQuery.trim(tab.find('#username').val());
			if (name === User.name) {
				me.showTip(`请输入下级账号`, $(this));
				return;
			}
			p['currPage'] = 1;
			p['selfUserName'] = name;
			p['searchName'] = '';
			p['userType'] = tab.find('.userType').val();
			me.getUser(p, tab);
		});

		//sort
		tab.on('click', 'span.switch', function () {
			var switchName = $(this).attr("rel");
			var sort = '';

			var d = $(this).children('span.on');
			tab.find('.switch span.on').removeClass('on');
			if (d.length == 0) {
				sort = 'desc';
				$(this).children('span').eq(1).addClass('on');
			} else {
				sort = d.index() == 0 ? 'desc' : 'asc';
				d.removeClass('on').siblings().addClass('on');
			}

			p['sortColumn'] = switchName;
			p['sortType'] = sort;

			me.getUser(p, tab);
		});

		//列表上方层级导航
		tab.on('click', '.team-level>a', function () {
			p['selfUserName'] = '';
			p['searchName'] = $(this).html();

			p['currPage'] = 1;
			me.getUser(p, tab);
		});

		//点击列表中的用户名查询下级
		tab.on('click', 'a.list_username', function () {
			p['selfUserName'] = '';
			p['searchName'] = $(this).text();

			p['currPage'] = 1;
			me.getUser(p, tab);
		});

		//分页点击事件
		tab.on('click', 'div.pager a', function () {
			var nowpage = parseInt($(this).attr('page'), 10);
			p['currPage'] = nowpage;
			me.getUser(p, tab);
		});

		tab.on('click', 'ul.data .last a', function () {
			var li = $(this).closest('li');
			var index = li.index();
			var id = li.attr('id');
			var userName = li.attr('data-name');
			var btn = $(this);

			if ($(this).hasClass('detail')) {
				me.showUserInfo(index);
			} else if ($(this).hasClass('change')) {
				me.showChange(id);
			} else if ($(this).hasClass('setting')) {
				me.showSetting(id, index);
			} else if ($(this).hasClass('quota')) {
				me.showQuotas(id, userName);
			} else if ($(this).hasClass('transfer')) {
				Api.getAgentUserStatus(function (d) {
					if (d.code != 0) {
						var lock = dialog({
							id: 'lockTip',
							content: d.msg,
							align: 'top',
							skin: 'tip'
						});
						lock.show(btn[0]);
						setTimeout(function () {
							lock.close().remove();
						}, 1200);
						return;
					} else {
						me.transfer(id);
					}
				});
			} else if($(this).hasClass('level-transfer')) {
				me.transferList = false;
				me.levelTransfer(id, userName);
			}
		});

		//团队余额刷新事件
		tab.on('click', '.team-fresh', function () {
			var teamTime = Cookies.get('teamTime');
			var nowTime = new Date().getTime();
			if (nowTime - teamTime >= 5000) {
				me.getUserTotal(nowTime);
			} else {
				me.showTip(`每隔5秒，可点击刷新一次，请稍后再试`, $('.team-total .team-fresh'));
			}
		});

		//上下级转账查询
		tansferIn.on('click', 'a.search', function () {
			me.transferParam = {};
			me.transferParam['page'] = 0;
			tansferIn.find('.switch span.on').removeClass('on');
			me.getTransferList();
		});

		tansferOut.on('click', 'a.search', function () {
			me.transferParam = {};
			me.transferParam['page'] = 0;
			tansferOut.find('.switch span.on').removeClass('on');
			me.getTransferListOut();
		});

		//上下级转账分页查询
		tansferIn.on('click', 'div.pagging a', function () {
			me.transferParam = {};
			me.transferParam['page'] = parseInt($(this).attr('page') - 1);
			tansferIn.find('.switch span.on').removeClass('on');
			me.getTransferList();
		});

		tansferOut.on('click', 'div.pagging a', function () {
			me.transferParam = {};
			me.transferParam['page'] = parseInt($(this).attr('page') - 1);
			tansferOut.find('.switch span.on').removeClass('on');
			me.getTransferListOut();
		});

		//上下级转账记录给下级转账按钮
		tansferOut.on('click', 'a.transferLow', function () {
			me.transfer();
		});

		tansferIn.on('click', 'span.switch', function () {
			var switchName = $(this).attr("rel");
			var sort = '';

			var d = $(this).children('span.on');
			tansferIn.find('.switch span.on').removeClass('on');
			if (d.length == 0) {
				sort = 'desc';
				$(this).children('span').eq(1).addClass('on');
			} else {
				sort = d.index() == 0 ? 'desc' : 'asc';
				d.removeClass('on').siblings().addClass('on');
			}

			me.transferParam['sortColumn'] = switchName;
			me.transferParam['sortType'] = sort;
			me.getTransferList();
		});

		tansferOut.on('click', 'span.switch', function () {
			var switchName = $(this).attr("rel");
			var sort = '';

			var d = $(this).children('span.on');
			tansferOut.find('.switch span.on').removeClass('on');
			if (d.length == 0) {
				sort = 'desc';
				$(this).children('span').eq(1).addClass('on');
			} else {
				sort = d.index() == 0 ? 'desc' : 'asc';
				d.removeClass('on').siblings().addClass('on');
			}

			me.transferParam['sortColumn'] = switchName;
			me.transferParam['sortType'] = sort;
			me.getTransferListOut();
		});

		// 跨级转账记录
		levelTransfer.on('click', '.search', function() {
			me.levelTransferParam = {};
			me.levelTransferParam['page'] = 0;
			me.getLevelTransferList(levelTransfer);
		});
		levelTransfer.on('click', '.level-transfer-btn', function() {
			me.transferList = true;
			me.levelTransfer();
		});
		levelTransfer.on('click', 'div.pagging a', function () {
			me.levelTransferParam = {};
			me.levelTransferParam['page'] = parseInt($(this).attr('page') - 1);
			tansferIn.find('.switch span.on').removeClass('on');
			me.getLevelTransferList(levelTransfer);
		});
	},

	getNameLink: function (name, isHaveDown) {
		if (isHaveDown == '1') {
			return '<a class="list_username">' + name + '</a>';
		} else {
			return name;
		}
	},

	formatPoint: function (point) {
		return (point * 100).toFixed(1) + '%';
	},

	getButtons: function (obj) {
		var me = this;
		var h = '<a class="detail">详情</a>';

		//currentName 表示当前列表中是谁的直属下级，
		//如 a的下级是b，b的下级是c，当前列表显示的是b，则currentName是a
		if (me.currentName === User.name) {
			h += '<a class="setting">返点设置</a>';

			if (User.isShow === 'Y') {
				h += '<a class="transfer">转账</a>';
			}
		}
		if (me.currentName !== User.name && User.isCrossShow === 'Y') {
			h += '<a class="level-transfer">跨级转账</a>';
		}
		return h;
	},

	getUser: function () {
		var me = this;

		var tab = $('.panel-tab.lower');
		var p = me.userParam;
		if ($('#admin_lower .mask').is(':visible')) {
			return;
		}
		$('#admin_lower .mask').show();

		tab.find('ul.data').html('<li class="bloading" name="change"><div class="ui-dialog-loading"></div></li>');

		tab.find('li.bloading[name=user]').height(350);
		p['startTime'] = tab.find('#user_start').val();
		p['endTime'] = tab.find('#user_end').val();
		p['pageSize'] = 10;
		p['balanceMin'] = tab.find('#balance_min').val();
		p['balanceMax'] = tab.find('#balance_max').val();

		//searchName 与 selfUserName 不能同时传到后台
		//比如 当前登录用户是 a，a有一个下级 b，b有一个下级c
		//传递 searchName 参数，则是查询 searchName 字段的下级
		//如 p['searchName'] = 'a',就是查询 a 的下级，返回 b

		//传递 selfUserName 参数，则是查询当前登录用户下账户名为 selfUserName 值的账户
		//如 p['selfUserName'] = 'c',就是在 a 的下级中查询 c，返回 c

		//在列表中点击、列表上方层级表点击 都是传递 searchName
		//在用户名文本框内输入，点击查询按钮，是传递 selfUserName

		if (!p['searchName'] && !p['selfUserName']) {
			p['searchName'] = User.name;
		}

		if (p['searchName']) {
			me.currentName = p['searchName'];
		}

		Api.getCommon('users', p, function (usr) {
			//有数据
			if (usr.result) {

				tab.find('#username').val('');

				var list = usr.result.users;

				me.userlist = list;
				me.point = usr.result.point;

				if (list.length > 0) {
					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = usr.result.parentAgentList;
					var levelH = '';
					if (!p['searchName'] && p['selfUserName']) {
						namelist.pop();
					}

					for (var i = 0; i < namelist.length; i++) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i < namelist.length - 1) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						} else {
							if (!p['searchName'] && p['selfUserName']) {
								me.currentName = namelist[i].userName;
							}
						}
					}
					levelDiv.html(levelH);

					var userType = ['玩家', '代理'];
					var online = {
						'0': '',
						'1': 'online'
					};
					var h = '';
					$(list).each(function () {
						h += '<li data-name="' + arguments[1].userName + '" id="' + arguments[1].userId + '">' +
							'<span>' + Lower.getNameLink(arguments[1].userName, arguments[1].isHaveDown) + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
							'<span class="middle">' + userType[arguments[1].userType] + '</span>' +
							'<span>' + arguments[1].registTimeStr + '</span>' +
							'<span class="middle">' + (arguments[1].point * 100).toFixed(1) + '%' + '</span>' +
							'<span>' + arguments[1].balance + '</span>' +
							'<span>' + arguments[1].notActionDay + '</span>' +
							'<span class="last">' + Lower.getButtons(arguments[1]) + '</span>' +
							'</li>';
					});

					tab.find('ul.data').html(h);

					//生成分页
					h = Q.showPagination(usr.result.page.currPage || 1, usr.result.page.pageSize, usr.result.page.totalItem, null);
					tab.find('div.pager').html(h);
				} else {
					tab.find('ul.data').html('<li name="user" style="height: 350px;"><div class="blankplace">暂无数据</div></li>');
					tab.find('div.pager').html('');
				}
			} else {
				tab.find('ul.data').html('<li style="height: 350px;"><div class="blankplace">' + usr.msg || '暂无数据' + '</div></li>');
				tab.find('div.pager').html('');
			}

			$('#admin_lower .mask').hide();
		}, 1);
	},

	getUserTotal: function () { // 团队总余额
		var me = this;
		var teamTime = Cookies.get('teamTime');
		var nowTime = arguments[0] || new Date().getTime();
		$('.team-total .team-money').html('<i class="ui-dialog-loading reloading"></i>');
		if (!teamTime || nowTime - teamTime >= 5000) {
			Api.userTeamPoint(function (res) {
				if (res.code === '0') {
					$('.team-total .team-money').html(res.userTeamPoint);
					Cookies.set('userTeamPoint', res.userTeamPoint);
					Cookies.set('teamTime', nowTime);
				} else {
					$('.team-total .team-money').html(res.msg);
				}
			});
		} else if (teamTime && nowTime - teamTime < 5000){
			var exUserTeamPoint = Cookies.get('userTeamPoint');
			$('.team-total .team-money').html(exUserTeamPoint);
		}
	},

	showUserInfo: function (index) {
		var me = this;

		$('#panel_user').hide();
		$('#panel_userInfo').show();
		$('#main .back').show();

		var data = me.userlist[index];
		var li = $('#panel_userInfo li');

		li.eq(0).find('span').html(data.userName);
		li.eq(1).find('span').html(data.registTimeStr);
		li.eq(2).find('span').html(data.balance);
		li.eq(3).find('span').html(me.formatPoint(data.point));
		li.eq(4).find('span').html(data.lastLogin);
		li.eq(5).find('span').html(data.notActionDay);

	},

	showSetting: function (uid, index) {
		var me = this;

		var nowtab = $('#panel_setting');
		nowtab.show();
		$('#panel_user').hide();
		$('#main .back').show();

		var data = me.userlist[index];
		var li = $('#panel_setting .setting-userlist li');
		var select = nowtab.find('select[name=settingRate]');
		var list = $('#panel_setting .list');

		select.off('change').on('change', function () {
			if ($(this).val() != '') {
				nowtab.find('.setting_confirm').removeClass('disabled');
				Api.getCommon('getLotteryPoint', {
					point: $(this).val()
				}, function (data) {
					var result = data.result;
					$(list.find('.data li')).each(function () {
						var id = $(this).attr('data-lotteryId');
						var p = (parseFloat(result[id]) * 100).toFixed(1) + '%';
						$(this).find('span.last').html(p);
					})
				});
			} else {
				nowtab.find('.setting_confirm').addClass('disabled');
				$(list.find('.data li')).each(function () {
					$(this).find('span.last').html('--');
				})
			}
		});

		nowtab.find('.setting_confirm').off('click').on('click', function () {
			if ($(this).hasClass('disabled')) {
				return;
			}
			var confirmBtn = $(this);
			confirmBtn.addClass('loading');

			Api.getCommon('setpoints', {
				userId: data.userId,
				lottery: nowtab.find('select.firstlbSetting').val(),
				point: select.val(),
				action: 'POST'
			}, function (d) {
				if (parseInt(d.code, 10) === 1) {
					me.userlist[index].point = select.val();
					$('#panel_user .list .data li').eq(index).find('span:eq(2)').html(select.find('option:selected').html());
					me.showTip('设置返点成功！', confirmBtn);
					me.getSetting(uid, index);
				} else if (d == -1) {
					$('.loginlnk').trigger('click');
				} else {
					me.showTip(d.msg, confirmBtn);
				}
				confirmBtn.removeClass('loading');
			}, 1);
		});

		me.getSetting(uid, index);
	},
	getSetting: function (uid, index) {
		var me = this;

		var nowtab = $('#panel_setting');

		var data = me.userlist[index];
		var li = $('#panel_setting .setting-userlist li');
		li.eq(0).find('span').html(data.userName);
		li.eq(1).find('.point').html(me.formatPoint(data.point));

		var select = nowtab.find('select[name=settingRate]');

		var list = $('#panel_setting .list');

		nowtab.find('.setting_confirm').addClass('disabled');

		Api.getCommon('userinfo', {
			userId: uid
		}, function (info) {
			if (info.code == 1) {
				var isMax = false;
				var h = '';
				var maxPoint = info.result.agentSscPoint;
				if (maxPoint == data.point) {
					isMax = true;
					li.eq(1).find('.tip').show();
					li.eq(2).hide();
					list.addClass('isMax');
					list.find('.head span:last').hide();
					nowtab.find('.setting_confirm').hide();
				} else {
					var minPoint = parseInt((info.result.selfSscPoint * 1000).toFixed(0)) + 1;
					maxPoint = parseInt((maxPoint * 1000).toFixed(0));
					h = '<option value="">请选择</option>';
					for (var i = minPoint; i <= maxPoint; i++) {
						h += '<option value="' + (i / 1000).toFixed(3) + '">' + (i / 10).toFixed(1) + '%</option>';
					}
					select.html(h);

					li.eq(1).find('.tip').hide();
					li.eq(2).show();
					list.removeClass('isMax');
					list.find('.head span:last').show();
					nowtab.find('.setting_confirm').show();
				}

				h = '';
				var points = info.result.userPoints;
				$(points).each(function () {
					var ltName = Q.lotteryChs(arguments[1].lottery);
					var max = (arguments[1].agentLotteryPoint * 100).toFixed(1) + '%';
					var min = (arguments[1].lotteryPoint * 100).toFixed(1) + '%';

					if (isMax) {
						h += '<li><span>' + ltName + '</span><span>' + max + '</span><span>' + min + '</span></li>'
					} else {
						h += '<li data-lotteryId="' + arguments[1].lotteryId + '"><span>' + ltName + '</span><span>' + max + '</span><span>' + min + '</span><span class="last">--</span></li>';
					}
				});
				list.find('.data').html(h);
			}
		});
	},
	showTip: function (msg, btn, skin = '', autofocus = true, second = 3000) {
		var me = this;
		var tip = dialog({
			id: 'tracerateno',
			align: 'top',
			skin: `tip ${skin}`,
			quickClose: true,
			content: msg,
			onshow: function () {
				var that = this;
				setTimeout(function () {
					that.close().remove();
					if (btn && btn[0].tagName === 'INPUT' && autofocus && (btn[0].type === 'text' || btn[0].type === 'password')) {
						btn.focus();
					}
				}, second);
				return false;
			}
		}).show(btn && btn[0]);
	},
	//转账
	transfer: function (uid) {
		var arg = arguments.length;
		var me = this;
		if (!me.payPwdExist) {
			var d = dialog({
				content: '您尚未设置资金密码',
				onshow: function () {
					setTimeout(function () {
						d.close().remove();
					}, 2000)
				}
			});
			d.showModal();
			return;
		};
		var html = '<div class="results no-border"><div class="tips"><span>您的账户当前可用余额:</span><span class="money">主钱包<em></em> 元</span></div></div>' +
			'<form id="userLowerTransfer" action="/sobet/pay/agentTransferAccounts2" autocomplete="off">' +
			'<input id="uid" name="uid" type="hidden" value="" /><input id="agentCn" name="agentCn" type="hidden" value="" />' +
			'<input id="serverTimeMillisStr" name="serverTimeMillisStr" type="hidden"/>' +
			'<div class="row"><span>1</span><p>请选择转账下级:</p><select id="lowerUserList" name="lowerUserList" class="disabled-select"></select></div>' +
			'<div class="row"><span>2</span><p>请选择转账类型:</p><div class="transferType"><label><input type="radio" name="cbox" value="0" class="type" checked>普通转账&nbsp;(不计入盈亏)</label>' +
			'<label><input type="radio" name="cbox" value="1" class="type">代理活动&nbsp;(计入盈亏)</label></div></div>' +
			'<div class="row"><span>3</span><p>请输入转账金额:</p><input id="turnInCash" name="cash" readonly onfocus="this.removeAttribute(\'readonly\')" type="text" placeholder="请输入转账金额" autocomplete="off"></div>' +
			'<div class="row"><span>4</span><p>请输入资金密码:</p><input id="payPassword" type="password" name="payPassword" readonly onfocus="this.removeAttribute(\'readonly\')"  placeholder="请输入资金密码" value="" autocomplete="off"/></div>' +
			'<div class="row"><input type="submit" class="btn" value="立即转出"></div></form>';
		var transfer = dialog({
			title: '给下级转账',
			id: 'lower_transfer',
			fixed: true,
			skin: 'lower_transfer',
			width: 430,
			height: 380,
			padding: 25,
			content: html,
			onshow: function () {
				$('#userLowerTransfer input[name="cash"], #userLowerTransfer input[name="payPassword"]').val('');
				//$("#userLowerTransfer").addClass('loading');
				Api.getLowerUserList(function (d) {
					var appendOption = '';
					for (var i = d.length - 1; i >= 0; i--) {
						var k = d[i].sn;
						var uin = d[i].uin;
						var userType = d[i].userType;
						appendOption += "<option value='" + uin + "' data-type='" + userType + "'>" + k + "</option>";
					};

					$("#lowerUserList").html(appendOption);


					var LowerUserNameId = $("#lowerUserList").val();
					if (arg == 0) {
						$("#uid").val(LowerUserNameId);
					} else {
						$("#uid").val(uid);
						$("#lowerUserList").val(uid);
					}
					var LowerUserName = $("#lowerUserList").find("option:selected").text();
					$("#agentCn").val(LowerUserName);
					var userType = $("#lowerUserList").find('option:selected').data('type');
					if (userType === 0) {
						$('.transferType label').last().hide();
					} else {
						$('.transferType label').last().show();
					}
					$('.transferType label').eq(0).click();
				});

				Api.getSobetBalance();
				$("#lowerUserList").change(function () {
					var userVal = $(this).val();
					var LowerUserName = $(this).find("option:selected").text();
					var userType = $(this).find('option:selected').data('type');
					$("#agentCn").val(LowerUserName);
					$("#uid").val(userVal);
					if (userType === 0) {
						$('.transferType label').last().hide();
					} else {
						$('.transferType label').last().show();
					}
					$('.transferType label').eq(0).click();
				});
				$("#lowerUserList").change();
				$("#payPassword_text").focus(function () {
					$(this).remove();
					$("#payPassword").show().focus();
					$('#payPassword_text-error').remove();
				});
				$("#userLowerTransfer").validate({
					rules: {
						lowerUserList: {
							required: true
						},
						cash: {
							required: true,
							sobet_number: true
						},
						payPassword: {
							required: true,
							remote: {
								url: "/sobet/userInfo/validatePayPassword",
								type: "post", //数据发送方式
								dataType: "text", //接受数据格式
								data: { //要传递的数据
									payPassword: function () {
										return md5($("#payPassword").val());
									}
								}
							}
						}
					},
					messages: {
						lowerUserList: {
							required: "请选择用户"
						},
						cash: {
							required: "请输入转账金额"
						},
						payPassword: {
							required: "请输入资金密码"
						}
					},
					errorPlacement: function (error, element) {
						element.parent().parent().append(error);
					},
					submitHandler: function (form) {
						if ($('#userLowerTransfer .btn').hasClass("loading")) {
							return false;
						}
						var turnInCashVal = $("#turnInCash").val();
						$("#cash").val(turnInCashVal);

						$(":submit").addClass("loading").attr("data-value", "clicked");
						$.ajax({
							url: '/sobet/pay/getServerTimeMillis',
							type: 'GET',
							cache: false
						}).done(function (res) {
							$('#serverTimeMillisStr').val(res);
							clickCheck();
							//                     	form.submit();
							$.ajax({
								type: 'POST',
								timeout: 15000,
								url: '/sobet/pay/agentTransferAccounts2',
								data: $(form).serialize(),
								success: function (data) {
									var tips = dialog({
										id: '',
										align: 'top',
										skin: 'transfer_tip',
										fixed: true,
										quickClose: true
									});
									if (data.status == 0) {
										transfer.close().remove();
										tips.content('转账成功');
										Navigation.getUserMoney();
										me.getUser();
										tips.show();
									} else {
										transfer.close().remove();
										tips.content(data.msg);
										tips.show();
									}
									setTimeout(function () {
										tips.close().remove();
									}, 2000);
								},
								error: function () {
									var d = dialog({
										fixed: true,
										title: '网络阻塞',
										content: '请稍后再试……',
										okValue: '确定'
									});
									$('#userLowerTransfer .btn').removeClass('loading');
									d.width(300);
									d.showModal();
								}
							});
						}).fail(function () {
							var d = dialog({
								fixed: true,
								title: '网络阻塞',
								content: '请稍后再试……',
								okValue: '确定'
							});
							$('#userLowerTransfer .btn').removeClass('loading');
							d.width(300);
							d.showModal();

						});
						//clickCheck();
						//form.submit();
					}
				});

			}
		}).showModal();
	},

	showQuotas: function (uid, userName) {
		var me = this;
		var nowtab = $('#setquota');
		var quotaName = $('#setquota h5>span.setquotaName'); //调整配额后的用户名
		quotaName.html(userName);
		nowtab.find('.list').html('<ul class="data withoutscroll"><li class="bloading" name="setquota"><div class="ui-dialog-loading"></div></li></ul>');
		nowtab.show();
		$('#panel_user').hide();
		$('#main .back').show();
		const refreshQuota = function () {
			Api.getCommon('getagentquotabyusr', {
				userId: uid
			}, function (d) {
				//渲染列表
				var d = d.result;
				if (d.resultList.length === 0) {
					return false;
				}
				let userId = d.userId;
				$('#setquota h6>span.point').html(d.resultList[0].point);
				var quotatpl = [
					'<% for ( var i = 0; i < resultList.length; i++ ) { %>',
					'<h6>返点：<span class="point"><%=resultList[i].point%>%</span></h6>',
					'<ul class="head">',
					'<li class="listhead">',
					'<span class="quota-large">我的配额</span>',
					'<span class="quota-large"><em class="name">' + userName + '</em>的配额</span>',
					'<span class="quota-small">赠送配额</span>',
					'<span class="quota-small last">回收配额</span>',
					'</li>',
					'</ul>',
					'<ul class="data withoutscroll" point="<%=resultList[i].point%>">',
					'<li class="split6" quotaId="<%=resultList[i].quotaId%>">',
					'<span><span>拥有配额</span><span><%=parentLotteryPointList[i].quotaCount%></span></span>',
					'<span><span>消耗配额</span><span><%=parentLotteryPointList[i].quotaAssigned|Q.floatAdd,parentLotteryPointList[i].quotaUsed%></span></span>',
					'<span><span>剩余配额</span><span><%=resultList[i].maxAssigend%></span></span>',
					'<span><span>拥有配额</span><span><%=resultList[i].quotaCount%></span></span>',
					'<span><span>消耗配额</span><span><%=resultList[i].quotaCount|Q.floatSub,resultList[i].quotaFinal%></span></span>',
					'<span><span>剩余配额</span><span><%=resultList[i].quotaFinal%></span></span>',
					'<span class="quota-small">最多<em><%=resultList[i].maxAssigend%></em><input type="text" name="distribute" value="" min="0" max="<%=resultList[i].maxAssigend%>" class="spinner"/></span>',
					'<span class="quota-small last">最多<em><%=resultList[i].maxgc%></em><input type="text" name="recover" value="" min="0" max="<%=resultList[i].maxgc%>" class="spinner"/></span>',
					'</li>',
					'</ul>',
					'<% } %>'
				].join('');

				if (d.resultList.length > 0) {
					nowtab.find('.list').html(tmpl.apply(this, ['quotalist', quotatpl, d]));
					//判断是否显示滚动条
					var eachHeight = nowtab.find('ul.data li:eq(1)').height();
					var totalHeight = nowtab.find('ul.data').height();
					if (eachHeight * nowtab.find('ul.data li').size() > totalHeight) {
						nowtab.find('ul.data').removeClass('withoutscroll');
					} else {
						nowtab.find('ul.data').addClass('withoutscroll');
					}
					nowtab.find('input').each((index, item) => { //会输入'00000'的问题
						$(item).on('input', () => {
							let value = $(item).val();
							Number(value) === 0 && $(item).val(0);
							value.length > 1 && value[0] === '0' && $(item).val(value.slice(1));
						});
					});
					nowtab.find('input[name=distribute]').val(0).inputNumber();
					nowtab.find('input[name=recover]').val(0).inputNumber();

					//一键调整配额
					$('#setquota .confirmQuota').off('click').on('click', function (e) {
						let params = [];
						$('#setquota .list ul.data').each(function (index, item) {
							let point = $(item).attr('point');

							let quotaId = $(item).children('li').attr('quotaId');
							let quotagc = $(item).find('input[name="recover"]').val();
							let quotaAssigned = $(item).find('input[name="distribute"]').val();
							params.push({
								point: point,
								userId: userId,
								id: quotaId,
								quotagc: quotagc,
								assigend: quotaAssigned,
							});
						});
						let noSetTipFlag = params.every(param => param.quotagc === '0' && param.assigend === '0'); //没有设置都是0 的情况
						if (noSetTipFlag) {
							me.showTip(`请设置配额！`, $('[rel="confirmBtnflag"]'), 'pei-e');
							return;
						}
						$('#confirmQuotaLoading').show(); //loading动画						
						Api.getCommon('quotaSet', {
							data: JSON.stringify(params),
						}, (res) => {
							$('#confirmQuotaLoading').hide(); //loading取消
							if (res.code === 1) {
								me.showTip(`设置配额成功！`, $('[rel="confirmBtnflag"]'), 'pei-e');
							} else if (res.code === -1) {
								me.showTip(`${res.msg}`, $('[rel="confirmBtnflag"]'), 'pei-e');
							} else {
								me.showTip(`服务异常`, $('[rel="confirmBtnflag"]'), 'pei-e');
							}
							refreshQuota();
						});
					});
				} else {
					nowtab.find('ul.data:eq(0)').html('<li name="combinereport" style="height: 260px;"><div class="blankplace">暂无数据</div></li>');
				}
			}, 1);
		};
		refreshQuota();
	},

	getTransferList: function () {
		var me = this;
		var transfer = $('#panel-tansferIn');
		var pp = me.transferParam;

		var start = new Date(transfer.find('#date_from').val()).getTime();
		var min = new Date().getTime() - 90 * 24 * 3600 * 1000;
		if (start < min) {
			$('#date_from').val(new Date(min).Format('YYYY/MM/DD'));
		}

		pp.action = "in";
		pp.startDate = transfer.find("#date_from").val();
		pp.endDate = transfer.find("#date_end").val();
		pp.orderType = transfer.find("#queryTypeLowIn").val();
		transfer.find(".notran").hide();
		transfer.find('.list .head').show();
		transfer.find(".list .data").html('<li class="bloading" name="change"><div class="ui-dialog-loading"></div></li>').show();

		Api.getLowerTransferList(pp, function (d) {
			if (d.data) {
				var data = d.data;
				if (data.length == 0) {
					transfer.find('.data').hide();
					transfer.find(".notran").show();
					transfer.find(".pagging").hide();
				} else if (data.length > 0) {
					transfer.find(".notran").hide();
					transfer.find(".list ul").show();
					transfer.find(".pagging").show();
					var tpl = '';
					for (var i = 0; i < data.length; i++) {
						var cash = data[i].amount;
						cash = toFixedNum(cash);
						var changeCash;
						if (data[i].orderType == 1 || data[i].orderType == 2) {
							changeCash = "<span class='lt2' data-title='转账金额'><font color='red'>￥ " + cash + "</font></span>";
						} else if (data[i].orderType == 3 || data[i].orderType == 4) {
							changeCash = "<span class='lt2' data-title='转账金额'><font color='green'>￥ " + cash + "</font></span>";
						}
						tpl += "<li id='" + data[i].inUserId + "'>" +
							"<span class='lt1' data-title='订单编号'>" + data[i].SPSN + "</span>" +
							"<span class='lt1' data-title='转账时间'>" + data[i].createTime + "</span>" +
							changeCash +
							"<span class='lt2 last' data-title='转账类型'>" + data[i].orderType + "</span>" +
							"</li>";
					}
					transfer.find(".list .data").html(tpl);
					transfer.find(".list .data li span").each(function () {
						if ($(this).text() == "undefined") {
							$(this).text("-");
						}
					});
					transfer.find(".list .data li").each(function () {
						var sof = $(this).find("span").eq(3);
						//var goOn = $(this).find("span").last();
						if (sof.text() == "1") {
							sof.text("上级转入");
							//goOn.text("-");
							//goOn.removeClass('transferAgain');
						} else if (sof.text() == "2") {
							sof.text("代理活动(入)");
							//goOn.text("-");
							//goOn.removeClass('transferAgain');
						} else {
							sof.text("其他");
							//goOn.text("继续转账");
						}
					});

					//翻页
					$('.pagging').html(Q.showPagination(pp.page + 1 || 1, d.pageSize, d.total, d.pageCount));

					transfer.find('.transferAgain').off('click').on('click', function () {
						var li = $(this).closest('li');
						var id = li.attr('id');
						var btn = $(this);
						Api.getAgentUserStatus(function (d) {
							if (d.code != 0) {
								var lock = dialog({
									id: 'lockTips',
									content: d.msg,
									align: 'top',
									skin: 'tip'
								});
								lock.show(btn[0]);
								setTimeout(function () {
									lock.close().remove();
								}, 1200);
								return;
							} else {
								me.transfer(id);
							}
						});
					})
				}
			}
		});
	},

	getTransferListOut: function () {
		var me = this;
		var transfer = $('#panel-tansferOut');
		var pp = me.transferParam;

		var start = new Date(transfer.find('#date_from_agent').val()).getTime();
		var min = new Date().getTime() - 90 * 24 * 3600 * 1000;
		if (start < min) {
			$('#date_from_agent').val(new Date(min).Format('YYYY/MM/DD'));
		}
		pp.action = "out";
		pp.startDate = transfer.find("#date_from_agent").val();
		pp.endDate = transfer.find("#date_end_agent").val();
		pp.orderType = transfer.find("#queryTypeLowOut").val();
		pp.inUserName = transfer.find("#inUserName").val();
		transfer.find(".notran").hide();
		transfer.find('.list .head').show();
		transfer.find(".list .data").html('<li class="bloading" name="change"><div class="ui-dialog-loading"></div></li>').show();
		Api.getLowerTransferList(pp, function (d) {
			if (d.data) {
				var data = d.data;
				if (data.length == 0) {
					transfer.find('.data').hide();
					transfer.find(".notran").show();
					transfer.find('.pagging').hide();
				} else if (data.length > 0) {
					transfer.find(".notran").hide();
					transfer.find(".list ul").show();
					transfer.find('.pagging').show();
					var tpl = '';
					for (var i = 0; i < data.length; i++) {
						var cash = data[i].amount;
						cash = toFixedNum(cash);
						var changeCash;
						if (data[i].orderType == 1 || data[i].orderType == 2) {
							changeCash = "<span class='lt2' data-title='转账金额'><font color='red'>￥ " + cash + "</font></span>";
						} else if (data[i].orderType == 3 || data[i].orderType == 4) {
							changeCash = "<span class='lt2' data-title='转账金额'><font color='green'>￥ " + cash + "</font></span>";
						}
						tpl += "<li id='" + data[i].inUserId + "'>" +
							"<span class='lt1' data-title='订单编号'>" + data[i].SPSN + "</span>" +
							"<span class='lt2' data-title='转账时间'>" + data[i].createTime + "</span>" +
							changeCash +
							"<span class='lt3' data-title='转账类型'>" + data[i].orderType + "</span>" +
							"<span class='lt3' data-title='接收人'>" + data[i].inUserName + "</span>" +
							"<span class='lt3 last transferAgain'></span>" +
							"</li>";
					}
					transfer.find(".list .data").html(tpl);
					transfer.find(".list .data li span").each(function () {
						if ($(this).text() == "undefined") {
							$(this).text("-");
						}
					});
					transfer.find(".list .data li").each(function () {
						var sof = $(this).find("span").eq(3);
						var goOn = $(this).find("span").last();
						if (sof.text() == "3") {
							sof.text("转给下级");
							goOn.text("继续转账");
						} else if (sof.text() == "4") {
							sof.text("代理活动(出)");
							goOn.text("继续转账");
						} else {
							sof.text("其他");
							goOn.text("继续转账");
						}
					});

					//翻页
					$('.pagging').html(Q.showPagination(pp.page + 1 || 1, d.pageSize, d.total, d.pageCount));

					transfer.find('.transferAgain').off('click').on('click', function () {
						var li = $(this).closest('li');
						var id = li.attr('id');
						var btn = $(this);
						Api.getAgentUserStatus(function (d) {
							if (d.code != 0) {
								var lock = dialog({
									id: 'lockTips',
									content: d.msg,
									align: 'top',
									skin: 'tip'
								});
								lock.show(btn[0]);
								setTimeout(function () {
									lock.close().remove();
								}, 1200);
								return;
							} else {
								me.transfer(id);
							}
						});
					})
				}
			}
		})
	},

	// 跨级转账
	levelTransfer: function(id, username) {
		var me = this;
		Api.getAgentUserStatus(function (d) {
			if (d.code != 0) {
				var lock = dialog({
					id: 'lockTip',
					content: d.msg,
					align: 'top',
					skin: 'tip'
				});
				lock.show(btn[0]);
				setTimeout(function () {
					lock.close().remove();
				}, 1200);
				return;
			} else {
				if (!me.payPwdExist) {
					var d = dialog({
						content: '您尚未设置资金密码',
						onshow: function () {
							setTimeout(function () {
								d.close().remove();
							}, 2000)
						}
					}).showModal();
					return;
				};
				me.d = me.dialog({
					title: '跨级转账',
					id: 'lower_transfer',
					skin: 'lower_transfer',
					width: 430,
					height: 380,
					padding: 25,
					content: me.tpl.levelTransferTpl,
					onshow: me.showDialogCB(me, username, id)
				});
			}
		});
	}, 
	getLevelTransferList: function (transfer) {
		var me = this;
		var pp = me.levelTransferParam;

		var start = new Date(transfer.find('.date-from-leveltransfer').val()).getTime();
		var min = new Date().getTime() - 90 * 24 * 3600 * 1000;
		if (start < min) {
			$('.date-from-leveltransfer').val(new Date(min).Format('YYYY/MM/DD'));
		}

		pp.action = 'out';
		pp.startDate = transfer.find(".date-from-leveltransfer").val();
		pp.endDate = transfer.find(".date-end-leveltransfer").val();
		pp.type = 1;
		pp.inUserName = transfer.find('#username').val();
		//pp.agentCn = transfer.find('#username').val()
		transfer.find(".list .data").html('<li class="bloading" name="change"><div class="ui-dialog-loading"></div></li>').show();

		Api.getLowerTransferList(pp, function (d) {
			if (d.data) {
				var data = d.data;
				if (data.length == 0) {
					transfer.find('.head').hide();
					transfer.find('.data').hide();
					transfer.find(".notran").show();
					transfer.find(".pagging").html("").prevAll().hide();
				} else if (data.length > 0) {
					transfer.find(".notran").hide();
					transfer.find(".list ul").show();
					var tpl = '';
					for (var i = 0; i < data.length; i++) {
						data[i].orderType = parseInt(data[i].orderType) === 3 ? '转给下级' : '转给下级';
						tpl += '<li id="' + data[i].inUserId + '" data-name="'+ data[i].inUserName +'">' + 
								'<span class="lt1 switch large" data-title="订单编号">' + data[i].SPSN + '</span>' +
								'<span class="lt1 switch" data-title="转账时间">' + data[i].createTime + '</span>' +
								'<span class="lt1 switch" data-title="转账金额">￥ ' + toFixedNum(data[i].amount) + '</span>' +
								'<span class="lt1 switch" data-title="交易类型">' + data[i].orderType + '</span>' +
								'<span class="lt1 switch" data-title="用户账号">' + data[i].inUserName + '</span>' +
								'<span class="lt1 switch" data-title="操作"><a class="transferAgain">继续转账</a></span>' +
								'</li>';
					}
					transfer.find(".list .data").html(tpl);
					transfer.find(".list .data li span").each(function () {
						if ($(this).text() == "undefined") {
							$(this).text("-");
						}
					});

					//翻页
					$('.pagging').html(Q.showPagination(pp.page + 1 || 1, d.pageSize, d.total, d.pageCount));

					transfer.find('.transferAgain').off('click').on('click', function () {
						var li = $(this).closest('li');
						var id = li.attr('id');
						var btn = $(this);
						Api.getAgentUserStatus(function (d) {
							if (d.code != 0) {
								var lock = dialog({
									id: 'lockTips',
									content: d.msg,
									align: 'top',
									skin: 'tip'
								});
								lock.show(btn[0]);
								setTimeout(function () {
									lock.close().remove();
								}, 1200);
								return;
							} else {
								var li = btn.parent().parent();
								me.transferList = true;
								me.levelTransfer(li.attr('id'), li.attr('data-name'));
							}
						});
					})
				}
			}
		});
	},
	dialog: function(msg) {
		var d = dialog({
			title: msg.title || '',
			id: msg.id || '',
			skin: msg.sken || msg.id || '',
			width: msg.width || 430,
			height: msg.height || 380,
			padding: msg.padding || 0,
			content: msg.content || '',
			onshow: msg.onshow || function() {}
		});
		d.showModal();
		return d;
	},
	showDialogCB: function(me, username, id) {
		return function () {
			me.initLevelTransferForm(username, id);
			$('#userLowerLevelTransfer input[name="cash"], #userLowerLevelTransfer input[name="payPassword"]').val('');
			me.checkForm($('#userLowerLevelTransfer'), me.getLevelTransferFromData(me, me.formData.levelTransferFormData, username, id));
		};
	},
	initLevelTransferForm: function(username, id) {
		if(username) {
			$('#level-username').val(username);
			$('#agentCn').val(username);
			$('#uid').val(id);
		}
		Api.getSobetBalance();
	},
	checkForm: function(form, formObj) {
		return form.validate(formObj);
	},
	getLevelTransferFromData: function(me, data) {
		data.submitHandler = function(form) {
			if ($('#userLowerTransfer .btn').hasClass("loading")) return;
			var turnInCashVal = $("#level-turnInCash").val();
			$("#cash").val(turnInCashVal);
			$('#userLowerLevelTransfer').find(":submit").addClass("loading").attr("data-value", "clicked");
			$.ajax({
				url: '/sobet/pay/getServerTimeMillis',
				type: 'GET',
				cache: false
			}).done(function (res) {
				$('#serverTimeMillisStr').val(res);
				clickCheck();
				//form.submit();
				$.ajax({
					url: '/sobet/pay/validateCrossTransferUser?type=1',
					method: 'get',
					dataType: 'json',
					data: {
						userName: $('#level-username').val()
					},
					success: function(res) {
						$('#uid').val(res.uid);
						$('#agentCn').val(res.agentCn);
						$('#lowerUserList').val(res.uid);
						$.ajax({
							type: 'POST',
							timeout: 15000,
							url: '/sobet/pay/agentTransferAccounts2',
							data: $(form).serialize(),
							success: function (data) {
								var tips = dialog({
									id: '',
									align: 'top',
									skin: 'transfer_tip',
									fixed: true,
									quickClose: true
								});
								if (data.status == 0) {
									me.d.close().remove();
									//$('.lower_transfer').hide().remove();
									tips.content('转账成功');
									Navigation.getUserMoney();
									me.getUser();
									tips.show();
									if(me.transferList) {
										me.getLevelTransferList($('.panel-tab.levelTransfer'));
										me.transferList = false;
									}
								} else {
									me.d.close().remove();
									//$('.lower_transfer').hide().remove();
									tips.content(data.msg);
									tips.show();
								}
								setTimeout(function () {
									tips.close().remove();
								}, 2000);
							},
							error: function () {
								var d = dialog({
									fixed: true,
									title: '网络阻塞',
									content: '请稍后再试……',
									okValue: '确定',
									width: 300
								}).showModal();
								$('#userLowerLevelTransfer').find('.btn').removeClass('loading');
								//d.width(300);
							}
						});
					}
				});
			}).fail(function () {
				var d = dialog({
					fixed: true,
					title: '网络阻塞',
					content: '请稍后再试……',
					okValue: '确定',
					width: 300
				}).showModal();
				$('#userLowerLevelTransfer').find('.btn').removeClass('loading');
				//d.width(300);
			});
		};
		return data;
	}
	// 跨级转账end

};