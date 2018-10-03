var Report = Report || {};

Report = {
	teamReportParam: {},
	dayReportParam: {},

	init: function () {
		var me = this;
		me.initDatePicker();
		me.initEvent();
	},

	initDatePicker: function () {
		var $node = $('#admin_report');
		//日期选择控件
		var team_startFrom = $node.find('.panel-tab[name=searchteam] input[name=startTime]');
		var team_endFrom = $node.find('.panel-tab[name=searchteam] input[name=endTime]');

		var day_startFrom = $node.find('.panel-tab[name=dayReport] input[name=startTime]');
		var day_endFrom = $node.find('.panel-tab[name=dayReport] input[name=endTime]');

		team_startFrom.datetimepicker({
			id: 'team_start_dtp',
			lang: 'zh',
			value: '-1970/01/01',
			minDate: new Date(new Date().getTime() - 35 * 24 * 3600 * 1000),
			maxDate: new Date(),
			format: 'Y/m/d',
			timepicker: false,
			maxDate: '+1970/01/01',
			step: 1,
			closeOnDateSelect: true,
			type: ':first'
		});
		team_endFrom.datetimepicker({
			id: 'team_end_dtp',
			lang: 'zh',
			value: '+1970/01/01',
			minDate: new Date(new Date().getTime() - 35 * 24 * 3600 * 1000),
			maxDate: new Date(),
			format: 'Y/m/d',
			timepicker: false,
			step: 1,
			closeOnDateSelect: true,
			type: ':last'
		});

		day_startFrom.datetimepicker({
			id: 'day_start_dtp',
			lang: 'zh',
			value: new Date(new Date().getTime() - 7 * 24 * 3600 * 1000),
			minDate: new Date(new Date().getTime() - 35 * 24 * 3600 * 1000),
			maxDate: new Date(),
			format: 'Y/m/d',
			timepicker: false,
			defaultDate: new Date(new Date().getTime() - 7 * 24 * 3600 * 1000),
			step: 1,
			closeOnDateSelect: true,
			type: ':first'
		});
		day_endFrom.datetimepicker({
			id: 'day_end_dtp',
			lang: 'zh',
			value: '+1970/01/01',
			minDate: new Date(new Date().getTime() - 35 * 24 * 3600 * 1000),
			maxDate: new Date(),
			format: 'Y/m/d',
			timepicker: false,
			step: 1,
			closeOnDateSelect: true,
			type: ':last'
		});
	},

	initEvent: function () {
		var me = this;
		me.initTeamReportEvent();
		me.initDayReportEvent();
	},


	initTeamReportEvent: function () {
		var me = this;
		var tab = $('.panel-tab.teamReport');
		var p = me.teamReportParam;
		var userName = tab.find('#search_username');

		//查询
		tab.find('a.search').unbind('click').click(function () {
			p['currPage'] = 1;
			p['page'] = 1;
			var on = $('.reportTab li.on').index();
			switch (on) {
				case 0:
					userName = tab.find('#search_username');
					me.getTeamSearch(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 1:
					userName = tab.find('#search_username');
					me.getTeamSearchAG(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 2:
					userName = tab.find('#search_username');
					me.getTeamSearchPT(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 3:
					userName = tab.find('#search_username');
					me.getTeamSearchBY(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 4:
					userName = tab.find('#search_username');
					me.getTeamSearchBBIN(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 5:
					userName = tab.find('#search_username');
					me.getTeamSearchSB(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 6:
					userName = tab.find('#search_username');
					me.getTeamSearchIDN(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 7:
					userName = tab.find('#search_username');
					me.getTeamSearchKgame(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 8:
					userName = tab.find('#search_username');
					me.getTeamSearchHKLHC(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 9:
					userName = tab.find('#search-month-username');
					me.getTeamSearchThird(p, tab);
					tab.find('#search_username').val(tab.find('#search-month-username').val());
					break;
				case 10:
					userName = tab.find('#search_username');
					me.getTeamSearchTotal(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
			}
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
			me.teamReportParam = p;

			var on = $('.reportTab li.on').index();
			switch (on) {
				case 0:
					userName = tab.find('#search_username');
					me.getTeamSearch(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 1:
					userName = tab.find('#search_username');
					me.getTeamSearchAG(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 2:
					userName = tab.find('#search_username');
					me.getTeamSearchPT(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 3:
					userName = tab.find('#search_username');
					me.getTeamSearchBY(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 4:
					userName = tab.find('#search_username');
					me.getTeamSearchBBIN(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 5:
					userName = tab.find('#search_username');
					me.getTeamSearchSB(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 6:
					userName = tab.find('#search_username');
					me.getTeamSearchIDN(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 7:
					userName = tab.find('#search_username');
					me.getTeamSearchKgame(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 8:
					userName = tab.find('#search_username');
					me.getTeamSearchHKLHC(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 9:
					userName = tab.find('#search-month-username');
					me.getTeamSearchThird(p, tab);
					tab.find('#search_username').val(tab.find('#search-month-username').val());
					break;
				case 10:
					userName = tab.find('#search_username');
					me.getTeamSearchTotal(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
			}
		});

		//列表上方层级导航
		tab.on('click', '.team-level>a', function () {
			var username = $(this).html();
			tab.find('.team-level').attr('currentName', username);

			if($('.reportTab .on').attr('name') === 'third_game'){
				userName = tab.find('#search-month-username');
			}
			userName.val(username);

			p['currPage'] = 1;
			p['page'] = 1;
			var on = $('.reportTab li.on').index();
			switch (on) {
				case 0:
					userName = tab.find('#search_username');
					me.getTeamSearch(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 1:
					userName = tab.find('#search_username');
					me.getTeamSearchAG(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 2:
					userName = tab.find('#search_username');
					me.getTeamSearchPT(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 3:
					userName = tab.find('#search_username');
					me.getTeamSearchBY(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 4:
					userName = tab.find('#search_username');
					me.getTeamSearchBBIN(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 5:
					userName = tab.find('#search_username');
					me.getTeamSearchSB(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 6:
					userName = tab.find('#search_username');
					me.getTeamSearchIDN(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 7:
					userName = tab.find('#search_username');
					me.getTeamSearchKgame(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 8:
					userName = tab.find('#search_username');
					me.getTeamSearchHKLHC(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 9:
					userName = tab.find('#search-month-username');
					me.getTeamSearchThird(p, tab);
					tab.find('#search_username').val(tab.find('#search-month-username').val());
					break;
				case 10:
					userName = tab.find('#search_username');
					me.getTeamSearchTotal(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
			}
			
		});

		//点击列表中的用户名查询下级
		tab.on('click', 'a.team_username', function () {
			var username = $(this).text();

			var currentName = tab.find('.team-level').attr('currentName');
			if (username == currentName) {
				return;
			}
			if($('.reportTab .on').attr('name') === 'third_game'){
				userName = tab.find('#search-month-username');
			}
			userName.val(username);

			p['currPage'] = 1;
			p['page'] = 1;
			var on = $('.reportTab li.on').index();
			switch (on) {
				case 0:
					userName = tab.find('#search_username');
					me.getTeamSearch(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 1:
					userName = tab.find('#search_username');
					me.getTeamSearchAG(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 2:
					userName = tab.find('#search_username');
					me.getTeamSearchPT(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 3:
					userName = tab.find('#search_username');
					me.getTeamSearchBY(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 4:
					userName = tab.find('#search_username');
					me.getTeamSearchBBIN(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 5:
					userName = tab.find('#search_username');
					me.getTeamSearchSB(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 6:
					userName = tab.find('#search_username');
					me.getTeamSearchIDN(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 7:
					userName = tab.find('#search_username');
					me.getTeamSearchKgame(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 8:
					userName = tab.find('#search_username');
					me.getTeamSearchHKLHC(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 9:
					userName = tab.find('#search-month-username');
					me.getTeamSearchThird(p, tab);
					tab.find('#search_username').val(tab.find('#search-month-username').val());
					break;
				case 10:
					userName = tab.find('#search_username');
					me.getTeamSearchTotal(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
			}
		});

		//分页点击事件
		tab.on('click', 'div.pager a', function () {
			var currentName = tab.find('.team-level').attr('currentName');
			userName.val(currentName);

			var nowpage = parseInt($(this).attr('page'), 10);
			var on = $('.reportTab li.on').index();

			me.teamReportParam['currPage'] = nowpage;
			me.teamReportParam['page'] = nowpage;
			p = me.teamReportParam;
			switch (on) {
				case 0:
					userName = tab.find('#search_username');
					me.getTeamSearch(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 1:
					userName = tab.find('#search_username');
					me.getTeamSearchAG(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 2:
					userName = tab.find('#search_username');
					me.getTeamSearchPT(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 3:
					userName = tab.find('#search_username');
					me.getTeamSearchBY(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 4:
					userName = tab.find('#search_username');
					me.getTeamSearchBBIN(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 5:
					userName = tab.find('#search_username');
					me.getTeamSearchSB(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 6:
					userName = tab.find('#search_username');
					me.getTeamSearchIDN(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 7:
					userName = tab.find('#search_username');
					me.getTeamSearchKgame(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 8:
					userName = tab.find('#search_username');
					me.getTeamSearchHKLHC(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
				case 9:
					userName = tab.find('#search-month-username');
					me.getTeamSearchThird(p, tab);
					tab.find('#search_username').val(tab.find('#search-month-username').val());
					break;
				case 10:
					userName = tab.find('#search_username');
					me.getTeamSearchTotal(p, tab);
					tab.find('#search-month-username').val(tab.find('#search_username').val());
					break;
			}

		});

		tab.on('click', '.list .demand a', function () {
			var $this = $(this);
			var userName = $(this).parents('li').find('.username').text();
			var number = userName == $('.teamReport .team-level').attr('currentName') ? $('.teamReport .team-level a').length - 1 : $('.teamReport .team-level a').length;
			var content = '<h4>用户名：<span class="user_name">' + userName + '</span></h4>' +
				'<div class="filter"><label>查询日期</label><input type="text" id="date_from" value="" readonly="readonly"> - <input type="text" id="date_end" value="" readonly="readonly">' +
				'<div class="recharger" style="display: inline-block">' +
				'<label>状态</label><select id="queryType" name="queryType">' +
				'<option value="0" selected>全部</option><option value="1">成功</option><option value="2">失败</option><option value="3">待处理</option>' +
				'</select></div><a class="query hand"></a></div>' +
				'<div class="list"><div class="tit"></div>' +
				'<div class="bloading tiploading" name="change" style="position: relative;top: 120px;"><div class="ui-dialog-loading"></div></div>' +
				'<div class="notran" style="display: block;"><h6>暂无数据</h6><div class="notran-img"></div></div>' +
				'<div class="box"><ul></ul><p>温馨提示：最多可查看7天的数据</p><div class="pagging"></div></div></div>';

			$(window).scrollTop(0);
			var history = dialog({
				id: 'recharge_history',
				skin: 'recharge_record',
				title: ' ',
				fixed: false,
				width: 1020,
				height: 600,
				padding: 0,
				content: content,
				onshow: function () {
					var $node = $('.recharge_record');
					var date = new Date();
					var dateSe = new Date(date.getTime() - 7 * 24 * 3600 * 1000);
					var dateStart = dateSe.getFullYear() + "/" + (dateSe.getMonth() + 1) + "/" + dateSe.getDate() + ' 00:00';
					var dateEnd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + ' 23:59';

					var $from = $node.find("#date_from");
					var $end = $node.find("#date_end");

					$from.datetimepicker({
						id: 'dp_from',
						lang: 'zh',
						value: '-1970/01/01',
						minDate: new Date(new Date().getTime() - 7 * 24 * 3600 * 1000),
						maxDate: new Date(),
						step: 1,
						value: dateStart,
						type: ':first',
						closeOnDateSelect: true
					});
					$end.datetimepicker({
						id: 'dp_end',
						lang: 'zh',
						value: '+1970/01/01',
						minDate: new Date(new Date().getTime() - 7 * 24 * 3600 * 1000),
						maxDate: new Date(),
						step: 1,
						value: dateEnd,
						type: ':last',
						closeOnDateSelect: true
					});

					$node.find('.query').unbind('click').click(function () {
						$node.find('.tiploading').show();
						var start = new Date($node.find('#date_from').val()).getTime();
						var min = new Date().getTime() - 7 * 24 * 3600 * 1000;
						if (start < min) {
							$node.find('#date_from').val(new Date(min).Format('YYYY/MM/DD 00:00'));
						}
						var params = {
							startDate: $node.find("#date_from").val(),
							endDate: $node.find("#date_end").val(),
							page: 1,
							pageSize: 10,
							userName: userName,
							queryType: $node.find('#queryType').val(),
							number: number
						};
						if ($this.hasClass('recharge_history')) {
							me.getRechargeHistory($node, params);
						} else if ($this.hasClass('withdraw_history')) {
							me.getWithdrawHistory($node, params);
						}
					}).trigger('click');
				}
			}).showModal();


		});

		tab.on('click', '.list a.game_history', function () {
			var $this = $(this);
			var userName = $(this).parents('li').find('span').eq(0).text();
			var number = userName == $('.teamReport .team-level').attr('currentName') ? $('.teamReport .team-level a').length - 1 : $('.teamReport .team-level a').length;
			var content = `
				<h4>用户名：<span class="user_name">${userName}</span></h4>
				<div class="filter"><label>查询日期</label>
					<ul class="quickDate">
						<li><a data-value="0">今天</a></li>
						<li><a data-value="-1">昨天</a></li>
						<li><a data-value="-7">最近一周</a></li>
						<li><a data-value="-30">最近一月</a></li>
					</ul>
					<label>从:</label><input type="text" id="date_from" value="" readonly="readonly">
					<label>至:</label><input type="text" id="date_end" value="" readonly="readonly">
					<select class="lotteryList" name=""><option value="">所有彩种</option></select>
					<select class="typeList" name=""><option value="">全部游戏类型</option>
						<option value="1">真人游戏</option><option value="2">刮刮乐</option>
						<option value="3">休闲游戏</option><option value="4">视频老虎机</option>
						<option value="5">其他</option><option value="9">桌面卡牌</option>
						<option value="10">老虎机</option></select>
					<select class="agGameList" name="">
						<option value="">全部游戏类型</option>
						<option value="BAC">百家乐</option><option value="CBAC">包桌百家乐</option>
						<option value="LINK">连环百家乐</option><option value="DT">龙虎</option>
						<option value="SHB">骰宝</option><option value="ROU">轮盘</option>
						<option value="FT">番摊</option><option value="LBAC">竞咪百家乐</option>
						<option value="ULPK">终极德州扑克</option><option value="SBAC">保险百家乐</option>
						<option value="NN">牛牛</option><option value="OTHER">其他</option>
					</select>
					<select class="bbinGameList" name="bbinGameList"><option value="">全部游戏类型</option></select>
					<select class="status" name=""><option value="">全部状态</option>
						<option value="0">未开奖</option><option value="1">未中奖</option>
						<option value="2">已派奖</option><option value="3">等待派奖</option>
						<option value="4">个人撤单</option><option value="5">系统撤单</option></select>
					<select class="ag-status" name="">
						<option value="">所有状态</option><option value="1">已结算</option>
						<option value="0">未结算</option><option value="-1">重置试玩额度</option>
						<option value="-2">注单被篡改</option><option value="-8">取消指定局注单</option>
						<option value="-9">取消注单</option>
					</select>
					<label for="sbGameList-record" style="padding:0;">游戏类型：</label>
					<select class="sbGameList-record" name="sbGameList-record" style="margin-left:0;width:60px;">
						<option value="">全部</option>
						<option value="1">足球</option>
						<option value="2">篮球</option>
						<option value="5">网球</option>
						<option value="6">排球</option>
						<option value="9">羽毛球</option>
						<option value="4">冰上曲棍球</option>
						<option value="7">台球</option>
						<option value="8">棒球</option>
						<option value="10">高尔夫</option>
						<option value="11">赛车</option>
						<option value="12">游泳</option>
						<option value="18">乒乓球</option>
						<option value="999">其他游戏</option>
					</select>
					<label for="idnGameList-record" style="padding:0;">游戏类型：</label>
					<select class="idnGameList-record" name="idnGameList-record" style="margin-left:0;width:90px;">
						<option value="">全部</option>
						<option value="TXH">德州扑克</option>
						<option value="LPK">真人德州</option>
						<option value="DMM">多米诺99</option>
						<option value="EBN">多米诺9</option>
						<option value="BTM">多米诺</option>
						<option value="BJK">21点</option>
						<option value="CAP">十三张</option>
					</select>
					<label for="kgameList-record" style="padding:0;">游戏类型：</label>
					<select class="kgameList-record" name="kgameList-record" style="margin-left:0;width:90px;">
						<option value="">全部游戏</option>
						<option value="abaa8a9ffc7a5afb37473a99653ca44d">百家乐</option>
						<option value="0a636149fdf36c98e47e7b4e62fdbc7a">百人牛牛</option>
						<option value="4126d6e9e679c9574dc799e06fc70e6a">奔驰宝马</option>
						<option value="1234567890abcdef">彩金德州</option>
						<option value="fab61991dd952f155e430b82d9537e77">德州牛仔</option>
						<option value="3e137d9e63d5a8e34fefb8bfd1aab357">夺金捕鱼</option>
						<option value="8354e40811382019262acc7531c87c5b">二八杠</option>
						<option value="904ad648d161251c4ac195f339269c44">新二人麻将</option>
						<option value="dcb2c811292efb7216748802d91e731c">森林舞会</option>
						<option value="c13bb7f1fd87361a1521d94d56eaa492">悟空闹海</option>
						<option value="7b577d729ce1a9959f326b0ed8fa7460">幸运水果机</option>
						<option value="1aa39cb263960aca4e491e7206b92cd0">中国娃娃</option>
					</select>
					<label for="sb-status-record" style="padding:0;">结算状态：</label>
					<select class="sb-status-record" name="sb-status-record" style="margin-left:0;width:60px;">
						<option value="">全部</option>
						<option value="0">进行中</option>
						<option value="1">已结算</option>
					</select>
					<a class="query hand"></a>
				</div>
				<div class="list">
					<div class="tit"></div>
					<div class="bloading tiploading" name="change" style="position: relative;top: 120px;">
						<div class="ui-dialog-loading"></div>
					</div>
					<div class="notran" style="display: block;">
						<h6>暂无数据</h6>
						<div class="notran-img"></div>
					</div>
					<div class="box">
						<ul></ul>
						<div class="tip">温馨提示：<em>最多可查询90天的数据</em></div>
						<div class="pagging"></div>
					</div>
					<div class="box-ag">
						<ul></ul>
						<div class="tip">温馨提示：<em>1.仅保留90天的数据<br>2.AG游戏数据有15至30分钟的延迟</em></div>
						<div class="pagging"></div>
					</div>
					<div class="box-pt">
						<ul></ul>
						<div class="tip">温馨提示：<em>1.仅保留90天的数据<br>2.PT游戏数据有15至30分钟的延迟</em></div>
						<div class="pagging"></div>
					</div>
					<div class="box-by">
						<ul></ul>
						<div class="tip">温馨提示：<em>1.仅保留90天的数据<br>2.AG捕鱼王数据有15至30分钟的延迟</em></div>
						<div class="pagging"></div>
					</div>
					<div class="box-bbin">
						<ul></ul>
						<div class="tip">温馨提示：<em>1.仅保留90天的数据<br>2.BBIN游戏数据有15至30分钟的延迟</em></div>
						<div class="pagging"></div>
					</div>
					<div class="box-sb">
						<ul></ul>
						<div class="tip">温馨提示：<em>1.仅保留90天的数据<br>2.沙巴体育游戏数据有15至30分钟的延迟</em></div>
						<div class="pagging"></div>
					</div>
					<div class="box-idn">
						<ul></ul>
						<div class="tip">温馨提示：<em>1.仅保留90天的数据<br>2.IDN棋牌游戏数据有15至30分钟的延迟</em></div>
						<div class="pagging"></div>
					</div>
					<div class="box-kgame">
						<ul></ul>
						<div class="tip">温馨提示：<em>1.仅保留90天的数据<br>2.Kgame棋牌游戏数据有15至30分钟的延迟</em></div>
						<div class="pagging"></div>
					</div>
				</div>
			`;

			$(window).scrollTop(0);
			var history = dialog({
				id: 'recharge_history',
				skin: 'recharge_record game_record',
				title: ' ',
				fixed: false,
				width: 1020,
				height: 600,
				padding: 0,
				content: content,
				onshow: function () {
					var $node = $('.recharge_record');
					var date = new Date();
					var dateChooseStart = new Date(new Date($('.teamReport .panel-search #searchteam_start').val()).getTime());
					var dateChooseEnd = new Date(new Date($('.teamReport .panel-search #searchteam_end').val()).getTime());
					var dateStart = dateChooseStart.getFullYear() + "/" + (dateChooseStart.getMonth() + 1) + "/" + dateChooseStart.getDate() + ' 00:00';
					var dateEnd = dateChooseEnd.getFullYear() + "/" + (dateChooseEnd.getMonth() + 1) + "/" + dateChooseEnd.getDate() + ' 23:59';

					var $from = $node.find("#date_from");
					var $end = $node.find("#date_end");

					$from.datetimepicker({
						id: 'dp_from_record',
						lang: 'zh',
						value: '-1970/01/01',
						minDate: new Date(new Date().getTime() - 90 * 24 * 3600 * 1000),
						maxDate: new Date(),
						step: 1,
						value: dateStart,
						type: ':first',
						closeOnDateSelect: true,
						onChangeDateTime: function () {
							$node.find('.quickDate li.on').removeClass('on');
						}
					});
					$end.datetimepicker({
						id: 'dp_end_record',
						lang: 'zh',
						value: '+1970/01/01',
						minDate: new Date(new Date().getTime() - 90 * 24 * 3600 * 1000),
						maxDate: new Date(),
						step: 1,
						value: dateEnd,
						type: ':last',
						closeOnDateSelect: true,
						onChangeDateTime: function () {
							$node.find('.quickDate li.on').removeClass('on');
						}
					});

					//彩种列表
					var lt_option = '<option value="" selected="selected">所有彩种</option>';
					var nameDict = Q.nameDict();
					for (var i in nameDict) {
						lt_option += '<option value="' + i + '">' + nameDict[i] + '</option>';
					}
					$node.find('.lotteryList').html(lt_option);

					$node.find('.quickDate').on('click', 'li', function () {
						var v = parseInt($(this).find('a').attr('data-value'));
						var date = new Date();
						$(this).addClass('on').siblings().removeClass('on');

						var dateEnd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
						date.setDate(date.getDate() + v);
						var dateStart = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
						if (v == '-1') {
							dateEnd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
						}
						dateStart += ' 00:00';
						dateEnd += ' 23:59';

						$node.find("#date_from").val(dateStart);
						$node.find("#date_end").val(dateEnd);
					});

					$node.find('.query').unbind('click').click(function () {
						$node.find('.tiploading').show();
						var start = new Date($node.find('#date_from').val()).getTime();
						var min = new Date().getTime() - 90 * 24 * 3600 * 1000;
						if (start < min) {
							$node.find('#date_from').val(new Date(min).Format('YYYY/MM/DD 00:00'));
						}
						var lotteryList = $node.find('.filter .lotteryList');
						var sb_status = $node.find('.filter .sb-status-record');
						var ag_status = $node.find('.filter .ag-status');
						var status = $node.find('.filter .status');
						var typeList = $node.find('.filter .typeList');
						var sbGameList = $node.find('.filter .sbGameList-record');
						var labelSbList = $node.find('.filter label[for="sbGameList-record"]');
						var labelSbStatus = $node.find('.filter label[for="sb-status-record"]');
						var idnGameList = $node.find('.filter .idnGameList-record');
						var labelIdnList = $node.find('.filter label[for="idnGameList-record"]');
						var kgameList = $node.find('.filter .kgameList-record');
						var labelKgameList = $node.find('.filter label[for="kgameList-record"]');
						var agGameList = $node.find('.filter .agGameList');
						var ptGameList = $node.find('.filter .ptGameList');
						var byGameList = $node.find('.filter .byGameList');
						var bbinGameList = $node.find('.filter .bbinGameList');
						var box = $node.find('.list .box');
						var boxAg = $node.find('.list .box-ag');
						var boxPt = $node.find('.list .box-pt');
						var boxBy = $node.find('.list .box-by');
						var boxBbin = $node.find('.list .box-bbin');
						var boxSb = $node.find('.list .box-sb');
						var boxIdn = $node.find('.list .box-idn');
						var boxKgame = $node.find('.list .box-kgame');
						var type = $this.parents('.list').attr('name');

						var params = {
							currPage: 1,
							pageSize: 10,
							userName: userName,
							number: number
						};
						switch (type) {
							case 'lottery':
								sb_status.hide();
								sbGameList.hide();
								labelSbList.hide();
								labelSbStatus.hide();
								boxSb.hide();
								idnGameList.hide();
								labelIdnList.hide();
								boxIdn.hide();
								kgameList.hide();
								labelKgameList.hide();
								boxKgame.hide();
								lotteryList.show();
								status.show();
								ag_status.hide();
								typeList.hide();
								agGameList.hide();
								ptGameList.hide();
								byGameList.hide();
								bbinGameList.hide();
								box.show();
								boxAg.hide();
								boxPt.hide();
								boxBy.hide();
								boxBbin.hide();
								params.orderStartTime = $node.find("#date_from").val();
								params.orderEndTime = $node.find("#date_end").val();
								params.lottery = lotteryList.val();
								params.status = status.val();
								me.getLotteryHistory($node, params);
								break;
							case 'ag_game':
								lotteryList.hide();
								status.hide();
								ag_status.show();
								typeList.hide();
								agGameList.show();
								ptGameList.hide();
								byGameList.hide();
								bbinGameList.hide();
								box.hide();
								boxAg.show();
								boxPt.hide();
								boxBy.hide();
								sb_status.hide();
								sbGameList.hide();
								labelSbList.hide();
								labelSbStatus.hide();
								boxSb.hide();
								boxBbin.hide();
								idnGameList.hide();
								labelIdnList.hide();
								boxIdn.hide();
								kgameList.hide();
								labelKgameList.hide();
								boxKgame.hide();
								params.startTime = $node.find("#date_from").val();
								params.endTime = $node.find("#date_end").val();
								params.gameType = agGameList.val();
								params.orderStatus = ag_status.val();
								params.queryType = 1;
								me.getAgGameHistory($node, params);
								break;
							case 'pt_game':
								sb_status.hide();
								sbGameList.hide();
								labelSbList.hide();
								labelSbStatus.hide();
								lotteryList.hide();
								status.hide();
								ag_status.hide();
								typeList.show();
								agGameList.hide();
								ptGameList.hide();
								byGameList.hide();
								bbinGameList.hide();
								box.hide();
								boxAg.hide();
								boxPt.show();
								boxBy.hide();
								boxSb.hide();
								boxBbin.hide();
								idnGameList.hide();
								labelIdnList.hide();
								boxIdn.hide();
								kgameList.hide();
								labelKgameList.hide();
								boxKgame.hide();
								params.orderStartTime = $node.find("#date_from").val();
								params.orderEndTime = $node.find("#date_end").val();
								params.gameType = typeList.val();
								params.gameId = ptGameList.val();
								me.getPtGameHistory($node, params);
								break;
							case 'by_game':
								sb_status.hide();
								sbGameList.hide();
								labelSbList.hide();
								labelSbStatus.hide();
								lotteryList.hide();
								status.hide();
								ag_status.hide();
								typeList.hide();
								agGameList.hide();
								ptGameList.hide();
								byGameList.hide();
								bbinGameList.hide();
								box.hide();
								boxAg.hide();
								boxPt.hide();
								boxBy.show();
								boxSb.hide();
								boxBbin.hide();
								idnGameList.hide();
								labelIdnList.hide();
								boxIdn.hide();
								kgameList.hide();
								labelKgameList.hide();
								boxKgame.hide();
								params.orderStartTime = $node.find("#date_from").val();
								params.orderEndTime = $node.find("#date_end").val();
								me.getByGameHistory($node, params);
								break;
							case 'sb_game':
								lotteryList.hide();
								status.hide();
								ag_status.hide();
								typeList.hide();
								agGameList.hide();
								ptGameList.hide();
								byGameList.hide();
								bbinGameList.hide();
								box.hide();
								boxAg.hide();
								boxPt.hide();
								boxBy.hide();
								boxSb.show();
								sb_status.show();
								sbGameList.show();
								labelSbList.show();
								labelSbStatus.show();
								boxBbin.hide();
								idnGameList.hide();
								labelIdnList.hide();
								boxIdn.hide();
								kgameList.hide();
								labelKgameList.hide();
								boxKgame.hide();
								params.orderStartTime = $node.find("#date_from").val();
								params.orderEndTime = $node.find("#date_end").val();
								params.gameType = $("select[name='sbGameList-record']").val();
								params.settleStatus = $(".sb-status-record").val();
								me.getSbGameHistory($node, params);
								break;
							case 'bbin_game':
								//bbin游戏类型
								Api.getCommon("getBbinGameType", {}, function (data) {
									if (data.code == 1) {
										var data = data.result;
										var html = "<option value=''>全部游戏类型</option>";
										$.each(data, function (i, v) {
											html += "<option value=" + v.typeId + ">" + v.typeName + "</option>"
										});
										$node.find('.bbinGameList').html(html);
									}
								});
								sb_status.hide();
								sbGameList.hide();
								labelSbList.hide();
								labelSbStatus.hide();
								lotteryList.hide();
								status.hide();
								ag_status.hide();
								typeList.hide();
								agGameList.hide();
								ptGameList.hide();
								byGameList.hide();
								bbinGameList.show();
								box.hide();
								boxAg.hide();
								boxPt.hide();
								boxBy.hide();
								boxSb.hide();
								boxBbin.show();
								idnGameList.hide();
								labelIdnList.hide();
								boxIdn.hide();
								kgameList.hide();
								labelKgameList.hide();
								boxKgame.hide();
								params.orderStartTime = $node.find("#date_from").val();
								params.orderEndTime = $node.find("#date_end").val();
								params.gameType = bbinGameList.val();
								me.getBbinGameHistory($node, params);
								break;
							case 'idn_game':
								lotteryList.hide();
								status.hide();
								ag_status.hide();
								typeList.hide();
								agGameList.hide();
								ptGameList.hide();
								byGameList.hide();
								bbinGameList.hide();
								box.hide();
								boxAg.hide();
								boxPt.hide();
								boxBy.hide();
								boxSb.hide();
								sb_status.hide();
								sbGameList.hide();
								labelSbList.hide();
								labelSbStatus.hide();
								boxBbin.hide();
								idnGameList.show();
								labelIdnList.show();
								boxIdn.show();
								kgameList.hide();
								labelKgameList.hide();
								boxKgame.hide();
								params.orderStartTime = $node.find("#date_from").val();
								params.orderEndTime = $node.find("#date_end").val();
								params.gameType = $("select[name='idnGameList-record']").val();
								me.getIdnGameHistory($node, params);
								break;
							case 'kgame':
								lotteryList.hide();
								status.hide();
								ag_status.hide();
								typeList.hide();
								agGameList.hide();
								ptGameList.hide();
								byGameList.hide();
								bbinGameList.hide();
								box.hide();
								boxAg.hide();
								boxPt.hide();
								boxBy.hide();
								boxSb.hide();
								sb_status.hide();
								sbGameList.hide();
								labelSbList.hide();
								labelSbStatus.hide();
								boxBbin.hide();
								idnGameList.hide();
								labelIdnList.hide();
								boxIdn.hide();
								kgameList.show();
								labelKgameList.show();
								boxKgame.show();
								params.orderStartTime = $node.find("#date_from").val();
								params.orderEndTime = $node.find("#date_end").val();
								params.gameType = $("select[name='kgameList-record']").val();
								me.getKgameHistory($node, params);
								break;
							case 'hklhc_game':
								sb_status.hide();
								sbGameList.hide();
								labelSbList.hide();
								labelSbStatus.hide();
								boxSb.hide();
								idnGameList.hide();
								labelIdnList.hide();
								boxIdn.hide();
								lotteryList.hide();
								status.show();
								ag_status.hide();
								typeList.hide();
								agGameList.hide();
								ptGameList.hide();
								byGameList.hide();
								bbinGameList.hide();
								box.show();
								boxAg.hide();
								boxPt.hide();
								boxBy.hide();
								boxBbin.hide();
								params.orderStartTime = $node.find("#date_from").val();
								params.orderEndTime = $node.find("#date_end").val();
								params.lottery = 'XGLHC';
								params.status = status.val();
								me.getHKLHCHistory($node, params);
								break;
						}
					}).trigger('click');
				}
			}).showModal();
		});

	},

	initDayReportEvent: function () {
		var me = this;
		var tab = $('.panel-tab.dayReport');
		var p = me.dayReportParam;

		var userName = tab.find('#searchday_username');
		//查询
		tab.find('a.search').unbind('click').click(function () {
			var on = $('.reportTab li.on').index();
			switch (on) {
				case 0:
					me.getDaySearch(p, tab);
					break;
				case 1:
					me.getDaySearchAG(p, tab);
					break;
				case 2:
					me.getDaySearchPT(p, tab);
					break;
				case 3:
					me.getDaySearchBY(p, tab);
					break;
				case 4:
					me.getDaySearchBBIN(p, tab);
					break;
				case 5:
					me.getDaySearchSB(p, tab);
					break;
				case 6:
					me.getDaySearchIDN(p, tab);
					break;
				case 7:
					me.getDaySearchKgame(p, tab);
					break;
				case 8:
					me.getDaySearchHKLHC(p, tab);
					break;
				case 9:
					me.getDaySearchThird(p, tab);
					break;
                case 10:
					me.getDaySearchTotal(p, tab);
					break;
			}
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
			me.dayReportParam = p;

			var on = $('.reportTab li.on').index();
			switch (on) {
				case 0:
					me.getDaySearch(p, tab);
					break;
				case 1:
					me.getDaySearchAG(p, tab);
					break;
				case 2:
					me.getDaySearchPT(p, tab);
					break;
				case 3:
					me.getDaySearchBY(p, tab);
					break;
				case 4:
					me.getDaySearchBBIN(p, tab);
					break;
				case 5:
					me.getDaySearchSB(p, tab);
					break;
				case 6:
					me.getDaySearchIDN(p, tab);
					break;
				case 7:
					me.getDaySearchKgame(p, tab);
					break;
				case 8:
					me.getDaySearchHKLHC(p, tab);
					break;
				case 9:
					me.getDaySearchThird(p, tab);
					break;
				case 10:
					me.getDaySearchTotal(p, tab);
					break;
			}
		});

		//列表上方层级导航
		tab.on('click', '.team-level>a', function () {
			var username = $(this).html();
			userName.val(username);

			var on = $('.reportTab li.on').index();
			switch (on) {
				case 0:
					me.getDaySearch(p, tab);
					break;
				case 1:
					me.getDaySearchAG(p, tab);
					break;
				case 2:
					me.getDaySearchPT(p, tab);
					break;
				case 3:
					me.getDaySearchBY(p, tab);
					break;
				case 4:
					me.getDaySearchBBIN(p, tab);
					break;
				case 5:
					me.getDaySearchSB(p, tab);
					break;
				case 6:
					me.getDaySearchIDN(p, tab);
					break;
				case 7:
					me.getDaySearchKgame(p, tab);
					break;
				case 8:
					me.getDaySearchHKLHC(p, tab);
					break;
				case 9:
					me.getDaySearchThird(p, tab);
					break;
				case 10:
					me.getDaySearchTotal(p, tab);
					break;
			}
			
		});
	},

	getNameLink: function (name, isHaveDown, index) {
		var userName;
		var recharge;
		var record;
		if(isHaveDown == '1' && name !== $('.team-level').attr('currentName')) {
			return {
				userName: '<a class="team_username">' + name + '</a>',
				recharge: '-',
				record: '-'
			};
		} else {
			return {
				userName: name,
				recharge: '<a class="recharge_history">充值记录</a>' + '<a class="withdraw_history">提现记录</a>',
				record: '<a class="game_history">游戏记录</a>'
			}
		}
	},

	getTeamSearch: function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}

		tab.find('.list[name="lottery"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		p['startTime'] = tab.find('#searchteam_start').val();
		p['endTime'] = tab.find('#searchteam_end').val();
		p['pageSize'] = 10;

		var userName = tab.find('#search_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['userName'] = jQuery.trim(userName.val());

		Api.getCommon('getTeamReport', p, function (report) {
			if (report.code == 1) {
				var list = report.result.list;
				//有数据情况
				if (list.length > 0) {
					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);
					var cName = tab.find('.team-level a:last').html();
					tab.find('.team-level').attr('currentName', cName);

					var h = '';
					var online = {
						'0': '',
						'1': 'online'
					};
					$(list).each(function () {
						h += '<li>' +
							'<span class="username">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).userName + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
							'<span class="lot">' + arguments[1].betAmount + '</span>' +
							'<span class="lot">' + arguments[1].bonusAmount + '</span>' +
							'<span class="lot">' + arguments[1].rebateAmount + '</span>' +
							'<span class="lot">' + arguments[1].mbrAtvtCash + '</span>' +
							'<span class="lot">' + arguments[1].agtAtvtCash + '</span>' +
							'<span class="lot">' + arguments[1].profitAndLoss + '</span>' +
							'<span class="lot lastl">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).record + '</span>' +
							'</li>';
					});

					tab.find('.list[name="lottery"] ul.data').html(h);

					var name = tab.find('.list[name="lottery"] ul.data li:eq(0) span:eq(0)').html();
					if (name == p['userName'] || name == User.name) {
						tab.find('.list[name="lottery"] ul.data:eq(0) li:eq(0)').addClass('on');
					}



					//汇总-小计（分页）
					h = '';
					if (report.result.page.totalPage > 1) {
						var totalCount = report.result.pageSum;

						h += '<li class="count"><span class="username">当前页小计</span>' +
							'<span class="lot">' + totalCount.totalBetAmount + '</span>' +
							'<span class="lot">' + totalCount.totalBonusAmount + '</span>' +
							'<span class="lot">' + totalCount.totalRebateAmount + '</span>' +
							'<span class="lot">' + totalCount.totalMbrAtvtCash + '</span>' +
							'<span class="lot">' + totalCount.totalAgtAtvtCash + '</span>' +
							'<span class="lot">' + totalCount.totalProfitAndLoss + '</span>' +
							'<span class="lot lastl">-</span>' +
							'</li>';
					}
					var totleSum = report.result.totleSum;
					h += '<li  class="count"><span class="username">团队总计</span>' +
						'<span class="lot">' + totleSum.totalBetAmount + '</span>' +
						'<span class="lot">' + totleSum.totalBonusAmount + '</span>' +
						'<span class="lot">' + totleSum.totalRebateAmount + '</span>' +
						'<span class="lot">' + totleSum.totalMbrAtvtCash + '</span>' +
						'<span class="lot">' + totleSum.totalAgtAtvtCash + '</span>' +
						'<span class="lot">' + totleSum.totalProfitAndLoss + '</span>' +
						'<span class="lot lastl">-</span>' +
						'</li>';

					tab.find('.list[name="lottery"] ul.data').append(h);

					h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
					tab.find('.list[name="lottery"] div.pager').html(h).show();

					//无数据情况
				} else {
					tab.find('.list[name="lottery"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="lottery"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="lottery"] div.pager').hide();
				}
			} else {
				tab.find('.list[name="lottery"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="lottery"] li.blankplace[name=searchteam]').height(350);
				tab.find('.list[name="lottery"] div.pager').hide();
			}
		});
	},

	getTeamSearchTotal: function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}

		tab.find('.list[name="summary"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		p['startTime'] = tab.find('#searchteam_start').val();
		p['endTime'] = tab.find('#searchteam_end').val();
		p['pageSize'] = 10;

		var userName = tab.find('#search_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['userName'] = jQuery.trim(userName.val());

		Api.getCommon('getRechargeWithdrawTeamReport', p, function (report) {
			if (report.code == 1) {
				var list = report.result.list;
				//有数据情况
				if (list.length > 0) {
					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);
					var cName = tab.find('.team-level a:last').html();
					tab.find('.team-level').attr('currentName', cName);

					var h = '';
					var online = {
						'0': '',
						'1': 'online'
					};
					$(list).each(function () {
						h += '<li>' +
							'<span class="username">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).userName + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
							'<span class="large">' + arguments[1].newUserCount + '</span>' +
							'<span class="large">' + arguments[1].rechargeNum + '</span>' +
							'<span>' + arguments[1].rechargeSum + '</span>' +
							'<span class="large">' + arguments[1].rechargeCash + '</span>' +
							'<span class="large">' + arguments[1].withdrawNum + '</span>' +
							'<span>' + arguments[1].withdrawSum + '</span>' +
							'<span class="large">' + arguments[1].withdrawCash + '</span>' +
							'<span class="lastl demand">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).recharge + '</span>' +
							'</li>';
					});

					tab.find('.list[name="summary"] ul.data').html(h);

					var name = tab.find('.list[name="summary"] ul.data li:eq(0) span:eq(0)').html();
					if (name == p['userName'] || name == User.name) {
						tab.find('ul.data:eq(0) li:eq(0)').addClass('on');
					}


					//汇总-小计（分页）
					h = '';
					if (report.result.page.totalPage > 1) {
						var totalCount = report.result.pageSum;

						h += '<li class="count"><span class="username">当前页小计</span>' +
							'<span class="large">' + totalCount.newUserCount + '</span>' +
							'<span class="large">' + totalCount.rechargeNum + '</span>' +
							'<span>' + totalCount.rechargeSum + '</span>' +
							'<span class="large">' + totalCount.rechargeCash + '</span>' +
							'<span class="large">' + totalCount.withdrawNum + '</span>' +
							'<span>' + totalCount.withdrawSum + '</span>' +
							'<span class="large">' + totalCount.withdrawCash + '</span>' +
							'<span class="lastl demand">-</span>' +
							'</li>';
					}
					var totleSum = report.result.totleSum;
					h += '<li  class="count"><span class="username">团队总计</span>' +
						'<span class="large">' + totleSum.newUserCount + '</span>' +
						'<span class="large">' + totleSum.rechargeNum + '</span>' +
						'<span>' + totleSum.rechargeSum + '</span>' +
						'<span class="large">' + totleSum.rechargeCash + '</span>' +
						'<span class="large">' + totleSum.withdrawNum + '</span>' +
						'<span>' + totleSum.withdrawSum + '</span>' +
						'<span class="large">' + totleSum.withdrawCash + '</span>' +
						'<span class="lastl demand">-</span>' +
						'</li>';

					tab.find('.list[name="summary"] ul.data').append(h);

					h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
					tab.find('.list[name="summary"] div.pager').html(h).show();
					//无数据情况
				} else {
					tab.find('.list[name="summary"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="summary"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="summary"] div.pager').hide();
				}
			} else {
				tab.find('.list[name="summary"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="summary"] li.blankplace[name=searchteam]').height(350);
				tab.find('.list[name="summary"] div.pager').hide();
			}
		});
	},

	getTeamSearchAG: function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}

		tab.find('.list[name="ag_game"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		p['startTime'] = tab.find('#searchteam_start').val();
		p['endTime'] = tab.find('#searchteam_end').val();
		p['pageSize'] = 10;

		var userName = tab.find('#search_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['userName'] = jQuery.trim(userName.val());

		Api.getCommon('getTeamReportAG', p, function (report) {
			if (report.code == 1) {
				var list = report.result.list;
				//有数据情况
				if (list.length > 0) {

					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);
					var cName = tab.find('.team-level a:last').html();
					tab.find('.team-level').attr('currentName', cName);

					var h = '';
					var online = {
						'0': '',
						'1': 'online'
					};
					$(list).each(function () {
						h += '<li>' +
							'<span class="game agtd">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).userName + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
							'<span class="game agtd">' + arguments[1].betAmount + '</span>' +
							'<span class="game agtd">' + arguments[1].validBetAmount + '</span>' +
							'<span class="game agtd">' + arguments[1].bonusAmount + '</span>' +
							'<span class="game agtd">' + arguments[1].activityBonus + '</span>' +
							'<span class="game agtd">' + arguments[1].profitAndLoss + '</span>' +
							'<span class="game last agtd">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).record + '</span>' +
							'</li>';
					});

					tab.find('.list[name="ag_game"] ul.data').html(h);

					var name = tab.find('.list[name="ag_game"] ul.data li:eq(0) span:eq(0)').html();
					if (name == p['userName'] || name == User.name) {
						tab.find('.list[name="ag_game"] ul.data:eq(0) li:eq(0)').addClass('on');
					}

					//汇总-小计（分页）
					h = '';
					if (report.result.page.totalPage > 1) {
						var totalCount = report.result.pageSum;

						h += '<li class="count"><span class="game agtd">当前页小计</span>' +
							'<span class="game agtd">' + totalCount.betAmount + '</span>' +
							'<span class="game agtd">' + totalCount.validBetAmount + '</span>' +
							'<span class="game agtd">' + totalCount.bonusAmount + '</span>' +
							'<span class="game agtd">' + totalCount.activityBonus + '</span>' +
							'<span class="game agtd">' + totalCount.profitAndLoss + '</span>' +
							'<span class="game last agtd">-</span>' +
							'</li>';
					}
					var totleSum = report.result.totleSum;
					h += '<li  class="count"><span class="game agtd">团队总计</span>' +
						'<span class="game agtd">' + totleSum.betAmount + '</span>' +
						'<span class="game agtd">' + totleSum.validBetAmount + '</span>' +
						'<span class="game agtd">' + totleSum.bonusAmount + '</span>' +
						'<span class="game agtd">' + totleSum.activityBonus + '</span>' +
						'<span class="game agtd">' + totleSum.profitAndLoss + '</span>' +
						'<span class="game last agtd">-</span>' +
						'</li>';

					tab.find('.list[name="ag_game"] ul.data').append(h);

					h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
					tab.find('.list[name="ag_game"] div.pager').html(h).show();
					//无数据情况
				} else {
					tab.find('.list[name="ag_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="ag_game"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="ag_game"] div.pager').hide();
				}
			} else {
				tab.find('.list[name="ag_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="ag_game"] li.blankplace[name=searchteam]').height(350);
				tab.find('.list[name="ag_game"] div.pager').hide();
			}
		});
	},
	getTeamSearchPT: function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}

		tab.find('.list[name="pt_game"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		p['startTime'] = tab.find('#searchteam_start').val();
		p['endTime'] = tab.find('#searchteam_end').val();
		p['pageSize'] = 10;

		var userName = tab.find('#search_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['userName'] = jQuery.trim(userName.val());

		Api.getCommon('getTeamReportPT', p, function (report) {
			if (report.code == 1) {
				var list = report.result.list;
				//有数据情况
				if (list.length > 0) {

					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);
					var cName = tab.find('.team-level a:last').html();
					tab.find('.team-level').attr('currentName', cName);

					var h = '';
					var online = {
						'0': '',
						'1': 'online'
					};
					$(list).each(function () {
						h += '<li>' +
							'<span class="game">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).userName + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
							'<span class="game">' + arguments[1].betAmount + '</span>' +
							'<span class="game">' + arguments[1].bonusAmount + '</span>' +
							'<span class="game">' + arguments[1].activityBonus + '</span>' +
							'<span class="game">' + arguments[1].profitAndLoss + '</span>' +
							'<span class="game last">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).record + '</span>' +
							'</li>';
					});

					tab.find('.list[name="pt_game"] ul.data').html(h);

					var name = tab.find('ul.data li:eq(0) span:eq(0)').html();
					if (name == p['userName'] || name == User.name) {
						tab.find('ul.data:eq(0) li:eq(0)').addClass('on');
					}

					//汇总-小计（分页）
					h = '';
					if (report.result.page.totalPage > 1) {
						var totalCount = report.result.pageSum;

						h += '<li class="count"><span class="game">当前页小计</span>' +
							'<span class="game">' + totalCount.betAmount + '</span>' +
							'<span class="game">' + totalCount.bonusAmount + '</span>' +
							'<span class="game">' + totalCount.activityBonus + '</span>' +
							'<span class="game">' + totalCount.profitAndLoss + '</span>' +
							'<span class="game last">-</span>' +
							'</li>';
					}
					var totleSum = report.result.totleSum;
					h += '<li  class="count"><span class="game">团队总计</span>' +
						'<span class="game">' + totleSum.betAmount + '</span>' +
						'<span class="game">' + totleSum.bonusAmount + '</span>' +
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>' +
						'<span class="game last">-</span>' +
						'</li>';

					tab.find('.list[name="pt_game"] ul.data').append(h);

					h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
					tab.find('div.pager').html(h).show();
					//无数据情况
				} else {
					tab.find('.list[name="pt_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="pt_game"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="pt_game"] div.pager').hide();
				}
			} else {
				tab.find('.list[name="pt_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="pt_game"] li.blankplace[name=searchteam]').height(350);
				tab.find('.list[name="pt_game"] div.pager').hide();
			}
		});
	},
	getTeamSearchBY: function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}

		tab.find('.list[name="by_game"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		p['startTime'] = tab.find('#searchteam_start').val();
		p['endTime'] = tab.find('#searchteam_end').val();
		p['pageSize'] = 10;

		var userName = tab.find('#search_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['userName'] = jQuery.trim(userName.val());

		Api.getCommon('getTeamReportBY', p, function (report) {
			if (report.code == 1) {
				var list = report.result.list;
				//有数据情况
				if (list.length > 0) {
					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);
					var cName = tab.find('.team-level a:last').html();
					tab.find('.team-level').attr('currentName', cName);

					var h = '';
					var online = {
						'0': '',
						'1': 'online'
					};
					$(list).each(function () {
						h += '<li>' +
							'<span class="game">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).userName + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
							'<span class="game">' + arguments[1].betAmount + '</span>' +
							'<span class="game">' + arguments[1].bonusAmount + '</span>' +
							'<span class="game">' + arguments[1].activityBonus + '</span>' +
							'<span class="game">' + arguments[1].profitAndLoss + '</span>' +
							'<span class="game last">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).record + '</span>' +
							'</li>';
					});

					tab.find('.list[name="by_game"] ul.data').html(h);

					var name = tab.find('ul.data li:eq(0) span:eq(0)').html();
					if (name == p['userName'] || name == User.name) {
						tab.find('ul.data:eq(0) li:eq(0)').addClass('on');
					}

					//汇总-小计（分页）
					h = '';
					if (report.result.page.totalPage > 1) {
						var totalCount = report.result.pageSum;

						h += '<li class="count"><span class="game">当前页小计</span>' +
							'<span class="game">' + totalCount.betAmount + '</span>' +
							'<span class="game">' + totalCount.bonusAmount + '</span>' +
							'<span class="game">' + totalCount.activityBonus + '</span>' +
							'<span class="game">' + totalCount.profitAndLoss + '</span>' +
							'<span class="game last">-</span>' +
							'</li>';
					}
					var totleSum = report.result.totleSum;
					h += '<li  class="count"><span class="game">团队总计</span>' +
						'<span class="game">' + totleSum.betAmount + '</span>' +
						'<span class="game">' + totleSum.bonusAmount + '</span>' +
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>' +
						'<span class="game last">-</span>' +
						'</li>';

					tab.find('.list[name="by_game"] ul.data').append(h);

					h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
					tab.find('div.pager').html(h).show();
					//无数据情况
				} else {
					tab.find('.list[name="by_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="by_game"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="by_game"] div.pager').hide();
				}
			} else {
				tab.find('.list[name="by_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="by_game"] li.blankplace[name=searchteam]').height(350);
				tab.find('.list[name="by_game"] div.pager').hide();
			}
		});
	},
	getTeamSearchBBIN: function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}

		tab.find('.list[name="bbin_game"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		p['startTime'] = tab.find('#searchteam_start').val();
		p['endTime'] = tab.find('#searchteam_end').val();
		p['pageSize'] = 10;

		var userName = tab.find('#search_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['userName'] = jQuery.trim(userName.val());

		Api.getCommon('getTeamReportBbin', p, function (report) {
			if (report.code == 1) {
				var list = report.result.list;
				//有数据情况
				if (list.length > 0) {
					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);
					var cName = tab.find('.team-level a:last').html();
					tab.find('.team-level').attr('currentName', cName);

					var h = '';
					var online = {
						'0': '',
						'1': 'online'
					};
					$(list).each(function () {
						h += '<li>' +
							'<span class="game">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).userName + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
							//'<span class="lot">' + arguments[1].betNum + '</span>' +
							'<span class="game">' + arguments[1].betAmount + '</span>' +
							'<span class="game">' + arguments[1].bonusAmount + '</span>' +
							/*'<span class="game">' + arguments[1].mbrAtvtCash + '</span>' +
							 '<span class="game">' + arguments[1].agtAtvtCash + '</span>' +*/
							'<span class="game">' + arguments[1].activityBonus + '</span>' +
							'<span class="game">' + arguments[1].profitAndLoss + '</span>' +
							'<span class="game last">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).record + '</span>' +
							'</li>';
					});

					tab.find('.list[name="bbin_game"] ul.data').html(h);

					var name = tab.find('ul.data li:eq(0) span:eq(0)').html();
					if (name == p['userName'] || name == User.name) {
						tab.find('ul.data:eq(0) li:eq(0)').addClass('on');
					}

					//汇总-小计（分页）
					h = '';
					if (report.result.page.totalPage > 1) {
						var totalCount = report.result.pageSum;

						h += '<li class="count"><span class="game">当前页小计</span>' +
							//'<span class="lot">' + totalCount.betNum + '</span>' +
							'<span class="game">' + totalCount.betAmount + '</span>' +
							'<span class="game">' + totalCount.bonusAmount + '</span>' +
							/*'<span class="game">￥' + totalCount.mbrAtvtCash + '</span>' +
							 '<span class="game">￥' + totalCount.agtAtvtCash + '</span>' +*/
							'<span class="game">' + totalCount.activityBonus + '</span>' +
							'<span class="game">' + totalCount.profitAndLoss + '</span>' +
							'<span class="game last">-</span>' +
							'</li>';
					}
					var totleSum = report.result.totleSum;
					h += '<li  class="count"><span class="game">团队总计</span>' +
						//'<span class="lot">' + totalCount.betNum + '</span>' +
						'<span class="game">' + totleSum.betAmount + '</span>' +
						'<span class="game">' + totleSum.bonusAmount + '</span>' +
						/*'<span class="game">￥' + totleSum.mbrAtvtCash + '</span>' +
						 '<span class="game">￥' + totleSum.agtAtvtCash + '</span>' +*/
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>' +
						'<span class="game last">-</span>' +
						'</li>';

					tab.find('.list[name="bbin_game"] ul.data').append(h);

					h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
					tab.find('div.pager').html(h).show();
					//无数据情况
				} else {
					tab.find('.list[name="bbin_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="bbin_game"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="bbin_game"] div.pager').hide();
				}
			} else {
				tab.find('.list[name="bbin_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="bbin_game"] li.blankplace[name=searchteam]').height(350);
				tab.find('.list[name="bbin_game"] div.pager').hide();
			}
		});
	},
	getTeamSearchThird: function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		// 团队报表 - 第三方游戏汇总 - 查询样式
		var timeOfMonth = $('.panel-search-month').eq(1),
			selectTag, str = '';

		Api.getCommon('findThirdReportCountBetMonth', p, function (data) {
			if (data.code == 1 && !$('.month-time').eq(0).attr('pre')) {
				data = data.result;

				if(data.length > 0) {
					for(var i=0; i<data.length; i++) {
						if(i === 0) {
							str += '<option selected="selected" value="' + data[i].betMonth + '">'+ data[i].betMonth.replace('-', '年') + '月' + '</option>';
							continue;
						}
						if(i === 3) break;
						str += '<option value="' + data[i].betMonth + '">' + data[i].betMonth.replace('-', '年') + '月' + '</option>';
					}
					$('.month-time').eq(0).attr('pre', 'pre').append(str);
				}
			}
			tab.find('.list[name="third_game"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
			p['startTime'] = timeOfMonth.find('select').val() ? timeOfMonth.find('select').val().replace('-', '/') : '';
			p['pageSize'] = 10;

			var userName = tab.find('#search-month-username');
			if (!userName.val()) {
				userName.val(User.nick);
			}
			p['userName'] = jQuery.trim(userName.val());

			Api.getCommon('getTeamReportThird', p, function (report) {
				if (report.code == 1) {
					var list = report.result.list;
					//有数据情况
					if (list.length > 0) {

						//表格上方导航栏
						var levelDiv = tab.find('.team-level');
						var namelist = report.result.parentAgentList;
						var levelH = '';
						for (var i = namelist.length - 1; i >= 0; i--) {
							levelH += '<a>' + namelist[i].userName + '</a>';
							if (i > 0) {
								levelH += '<span>&nbsp;&gt;&nbsp;</span>';
							}
						}
						levelDiv.html(levelH);
						var cName = tab.find('.team-level a:last').html();
						tab.find('.team-level').attr('currentName', cName);

						var h = '';
						var online = {
							'0': '',
							'1': 'online'
						};

						$(list).each(function () {
							h += '<li>' +
								'<span class="game">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).userName + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
								'<span class="game small-span">' + arguments[1].betAmount + '</span>' +
								'<span class="game small-span">' + arguments[1].bonusAmount + '</span>' +
								'<span class="game small-span">' + arguments[1].activityBonus + '</span>' +
								'<span class="game small-span">' + arguments[1].releaseProfitAndLoss + '</span>' +
								'<span class="game small-span">' + arguments[1].lastMonthProfitAndLoss + '</span>' +
								'<span class="game last small-span">' + arguments[1].resultProfitAndLoss + '</span>' +
								'</li>';
						});

						tab.find('.list[name="third_game"] ul.data').html(h);

						var name = tab.find('ul.data li:eq(0) span:eq(0)').html();
						if (name == p['userName'] || name == User.name) {
							tab.find('ul.data:eq(0) li:eq(0)').addClass('on');
						}

						//汇总-小计（分页）
						h = '';
						if (report.result.page.totalPage > 1) {
							var totalCount = report.result.pageSum;

							h += '<li class="count"><span class="game">当前页小计</span>' +
								'<span class="game small-span">' + totalCount.betAmount + '</span>' +
								'<span class="game small-span">' + totalCount.bonusAmount + '</span>' +
								'<span class="game small-span">' + totalCount.activityBonus + '</span>' +
								'<span class="game small-span">' + totalCount.releaseProfitAndLoss + '</span>' +
								'<span class="game small-span">' + totalCount.lastMonthProfitAndLoss + '</span>' +
								'<span class="game last small-span">' + totalCount.resultProfitAndLoss + '</span>' +
								'</li>';
						}

						var totleSum = report.result.totleSum;
						h += '<li  class="count"><span class="game">团队总计</span>' +
							'<span class="game small-span">' + totleSum.betAmount + '</span>' +
							'<span class="game small-span">' + totleSum.bonusAmount + '</span>' +
							'<span class="game small-span">' + totleSum.activityBonus + '</span>' +
							'<span class="game small-span">--</span>' +
							'<span class="game small-span">--</span>' +
							'<span class="game last small-span ">--</span>' +
							'</li>';

						tab.find('.list[name="third_game"] ul.data').append(h);

						h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
						tab.find('div.pager').html(h).show();
						//无数据情况
					} else {
						tab.find('.list[name="third_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
						tab.find('.list[name="third_game"] li.blankplace[name=searchteam]').height(350);
						tab.find('.list[name="third_game"] div.pager').hide();
					}
				} else {
					tab.find('.list[name="third_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
					tab.find('.list[name="third_game"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="third_game"] div.pager').hide();
				}
			});
		});

	},
	getTeamSearchSB: function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}

		tab.find('.list[name="sb_game"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		p['startTime'] = tab.find('#searchteam_start').val();
		p['endTime'] = tab.find('#searchteam_end').val();
		p['pageSize'] = 10;

		var userName = tab.find('#search_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['userName'] = jQuery.trim(userName.val());

		Api.getCommon('getTeamReportSb', p, function (report) {
			if (report.code == 1) {
				var list = report.result.list;
				//有数据情况
				if (list.length > 0) {
					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);
					var cName = tab.find('.team-level a:last').html();
					tab.find('.team-level').attr('currentName', cName);

					var h = '';
					var online = {
						'0': '',
						'1': 'online'
					};
					$(list).each(function () {
						h += '<li>' +
							'<span class="game">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).userName + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
							'<span class="game">' + arguments[1].betAmount + '</span>' +
							'<span class="game">' + arguments[1].bonusAmount + '</span>' +
							'<span class="game">' + arguments[1].validBetAmount2 + '</span>' +
							'<span class="game">' + arguments[1].activityBonus + '</span>' +
							'<span class="game">' + arguments[1].profitAndLoss + '</span>' +
							'<span class="game last">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).record + '</span>' +
							'</li>';
					});

					tab.find('.list[name="sb_game"] ul.data').html(h);

					var name = tab.find('ul.data li:eq(0) span:eq(0)').html();
					if (name === p['userName'] || name === User.name) {
						tab.find('ul.data:eq(0) li:eq(0)').addClass('on');
					}

					//汇总-小计（分页）
					h = '';
					if (report.result.page.totalPage > 1) {
						var totalCount = report.result.pageSum;

						h += '<li class="count"><span class="game">当前页小计</span>' +
							'<span class="game">' + totalCount.betAmount + '</span>' +
							'<span class="game">' + totalCount.bonusAmount + '</span>' +
							'<span class="game">' + totalCount.validBetAmount2 + '</span>' +
							'<span class="game">' + totalCount.activityBonus + '</span>' +
							'<span class="game">' + totalCount.profitAndLoss + '</span>' +
							'<span class="game last">-</span>' +
							'</li>';
					}
					var totleSum = report.result.totleSum;
					h += '<li  class="count"><span class="game">团队总计</span>' +
						'<span class="game">' + totleSum.betAmount + '</span>' +
						'<span class="game">' + totleSum.bonusAmount + '</span>' +
						'<span class="game">' + totleSum.validBetAmount2 + '</span>' +
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>' +
						'<span class="game last">-</span>' +
						'</li>';

					tab.find('.list[name="sb_game"] ul.data').append(h);

					h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
					tab.find('div.pager').html(h).show();
					//无数据情况
				} else {
					tab.find('.list[name="sb_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="sb_game"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="sb_game"] div.pager').hide();
				}
			} else {
				tab.find('.list[name="sb_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="sb_game"] li.blankplace[name=searchteam]').height(350);
				tab.find('.list[name="sb_game"] div.pager').hide();
			}
		});
	},

	getTeamSearchIDN:  function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}

		tab.find('.list[name="idn_game"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		p['startTime'] = tab.find('#searchteam_start').val();
		p['endTime'] = tab.find('#searchteam_end').val();
		p['pageSize'] = 10;

		var userName = tab.find('#search_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['userName'] = jQuery.trim(userName.val());

		Api.getCommon('getTeamReportIdn', p, function (report) {
			if (report.code == 1) {
				var list = report.result.list;
				//有数据情况
				if (list.length > 0) {
					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);
					var cName = tab.find('.team-level a:last').html();
					tab.find('.team-level').attr('currentName', cName);

					var h = '';
					var online = {
						'0': '',
						'1': 'online'
					};
					$(list).each(function () {
						h += '<li>' +
							'<span class="game">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).userName + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
							'<span class="game">' + arguments[1].betAmount + '</span>' +
							'<span class="game">' + arguments[1].bonusAmount + '</span>' +
							'<span class="game">' + arguments[1].activityBonus + '</span>' +
							'<span class="game">' + arguments[1].profitAndLoss + '</span>' +
							'<span class="game last">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).record + '</span>' +
							'</li>';
					});

					tab.find('.list[name="idn_game"] ul.data').html(h);

					var name = tab.find('ul.data li:eq(0) span:eq(0)').html();
					if (name === p['userName'] || name === User.name) {
						tab.find('ul.data:eq(0) li:eq(0)').addClass('on');
					}

					//汇总-小计（分页）
					h = '';
					if (report.result.page.totalPage > 1) {
						var totalCount = report.result.pageSum;

						h += '<li class="count"><span class="game">当前页小计</span>' +
							'<span class="game">' + totalCount.betAmount + '</span>' +
							'<span class="game">' + totalCount.bonusAmount + '</span>' +

							'<span class="game">' + totalCount.activityBonus + '</span>' +
							'<span class="game">' + totalCount.profitAndLoss + '</span>' +
							'<span class="game last">-</span>' +
							'</li>';
					}
					var totleSum = report.result.totleSum;
					h += '<li  class="count"><span class="game">团队总计</span>' +
						'<span class="game">' + totleSum.betAmount + '</span>' +
						'<span class="game">' + totleSum.bonusAmount + '</span>' +
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>' +
						'<span class="game last">-</span>' +
						'</li>';

					tab.find('.list[name="idn_game"] ul.data').append(h);

					h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
					tab.find('div.pager').html(h).show();
					//无数据情况
				} else {
					tab.find('.list[name="idn_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="idn_game"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="idn_game"] div.pager').hide();
				}
			} else {
				tab.find('.list[name="idn_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="idn_game"] li.blankplace[name=searchteam]').height(350);
				tab.find('.list[name="idn_game"] div.pager').hide();
			}
		});
	},
	getTeamSearchKgame:  function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}

		$('.js-head-game').append(`<span class="question" title="统计有效投注，部分游戏可能产生平局结果，平局投注不计算在内"></span>`);

		tab.find('.list[name="kgame"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		p['startTime'] = tab.find('#searchteam_start').val();
		p['endTime'] = tab.find('#searchteam_end').val();
		p['pageSize'] = 10;

		var userName = tab.find('#search_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['userName'] = jQuery.trim(userName.val());

		Api.getCommon('getTeamReportKgame', p, function (report) {
			if (report.code == 1) {
				var list = report.result.list;
				//有数据情况
				if (list.length > 0) {
					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);
					var cName = tab.find('.team-level a:last').html();
					tab.find('.team-level').attr('currentName', cName);

					var h = '';
					var online = {
						'0': '',
						'1': 'online'
					};
					$(list).each(function (index,item) {
						h += '<li>' +
							'<span class="game">' + Report.getNameLink(item.userName, item.isHaveDown, index).userName + '<i class="' + online[item.isLine] + '"></i></span>' +
							'<span class="game">' + item.betAmount + '</span>' +
							'<span class="game">' + item.bonusAmount + '</span>' +
							'<span class="game">' + item.activityBonus + '</span>' +
							'<span class="game">' + item.profitAndLoss + '</span>' +
							'<span class="game last">' + Report.getNameLink(item.userName, item.isHaveDown, index).record + '</span>' +
							'</li>';
					});

					tab.find('.list[name="kgame"] ul.data').html(h);

					var name = tab.find('ul.data li:eq(0) span:eq(0)').html();
					if (name === p['userName'] || name === User.name) {
						tab.find('ul.data:eq(0) li:eq(0)').addClass('on');
					}

					//汇总-小计（分页）
					h = '';
					if (report.result.page.totalPage > 1) {
						var totalCount = report.result.pageSum;

						h += '<li class="count"><span class="game">当前页小计</span>' +
							'<span class="game">' + totalCount.betAmount + '</span>' +
							'<span class="game">' + totalCount.bonusAmount + '</span>' +

							'<span class="game">' + totalCount.activityBonus + '</span>' +
							'<span class="game">' + totalCount.profitAndLoss + '</span>' +
							'<span class="game last">-</span>' +
							'</li>';
					}
					var totleSum = report.result.totleSum;
					h += '<li  class="count"><span class="game">团队总计</span>' +
						'<span class="game">' + totleSum.betAmount + '</span>' +
						'<span class="game">' + totleSum.bonusAmount + '</span>' +
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>' +
						'<span class="game last">-</span>' +
						'</li>';

					tab.find('.list[name="kgame"] ul.data').append(h);

					h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
					tab.find('div.pager').html(h).show();
					//无数据情况
				} else {
					tab.find('.list[name="kgame"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="kgame"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="kgame"] div.pager').hide();
				}
			} else {
				tab.find('.list[name="kgame"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="kgame"] li.blankplace[name=searchteam]').height(350);
				tab.find('.list[name="kgame"] div.pager').hide();
			}
		});
	},
	getTeamSearchHKLHC:  function () {
		var me = this;
		var p = me.teamReportParam;
		var tab = $('.panel-tab.teamReport');

		var start = new Date(tab.find('#searchteam_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchteam_start').val(new Date(min).Format('YYYY/MM/DD'));
		}

		tab.find('.list[name="hklhc_game"] ul.data').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		p['startTime'] = tab.find('#searchteam_start').val();
		p['endTime'] = tab.find('#searchteam_end').val();
		p['pageSize'] = 10;

		var userName = tab.find('#search_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['userName'] = jQuery.trim(userName.val());

		Api.getCommon('getTeamReportHKLHC', p, function (report) {
			if (report.code == 1) {
				var list = report.result.list;
				//有数据情况
				if (list.length > 0) {
					//表格上方导航栏
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);
					var cName = tab.find('.team-level a:last').html();
					tab.find('.team-level').attr('currentName', cName);

					var h = '';
					var online = {
						'0': '',
						'1': 'online'
					};
					$(list).each(function () {
						h += '<li>' +
							'<span class="hklhc-game">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).userName + '<i class="' + online[arguments[1].isLine] + '"></i></span>' +
							'<span class="hklhc-game">' + arguments[1].betAmount + '</span>' +
							'<span class="hklhc-game">' + arguments[1].bonusAmount + '</span>' +
							'<span class="hklhc-game">' + arguments[1].rebateAmount + '</span>' +
							'<span class="hklhc-game">' + arguments[1].activityBonus + '</span>' +
							'<span class="hklhc-game">' + arguments[1].profitAndLoss + '</span>' +
							'<span class="hklhc-game last">' + Report.getNameLink(arguments[1].userName, arguments[1].isHaveDown, arguments[0]).record + '</span>' +
							'</li>';
					});

					tab.find('.list[name="hklhc_game"] ul.data').html(h);

					var name = tab.find('ul.data li:eq(0) span:eq(0)').html();
					if (name === p['userName'] || name === User.name) {
						tab.find('ul.data:eq(0) li:eq(0)').addClass('on');
					}

					//汇总-小计（分页）
					h = '';
					if (report.result.page.totalPage > 1) {
						var totalCount = report.result.pageSum;

						h += '<li class="count"><span class="hklhc-game">当前页小计</span>' +
							'<span class="hklhc-game">' + totalCount.betAmount + '</span>' +
							'<span class="hklhc-game">' + totalCount.bonusAmount + '</span>' +
							'<span class="hklhc-game">' + totalCount.rebateAmount + '</span>' +
							'<span class="hklhc-game">' + totalCount.activityBonus + '</span>' +
							'<span class="hklhc-game">' + totalCount.profitAndLoss + '</span>' +
							'<span class="hklhc-game last">-</span>' +
							'</li>';
					}
					var totleSum = report.result.totleSum;
					h += '<li  class="count"><span class="hklhc-game">团队总计</span>' +
						'<span class="hklhc-game">' + totleSum.betAmount + '</span>' +
						'<span class="hklhc-game">' + totleSum.bonusAmount + '</span>' +
						'<span class="hklhc-game">' + totleSum.rebateAmount + '</span>' +
						'<span class="hklhc-game">' + totleSum.activityBonus + '</span>' +
						'<span class="hklhc-game">' + totleSum.profitAndLoss + '</span>' +
						'<span class="hklhc-game last">-</span>' +
						'</li>';

					tab.find('.list[name="hklhc_game"] ul.data').append(h);

					h = Q.showPagination(report.result.page.currPage || 1, report.result.page.pageSize, report.result.page.totalItem, null);
					tab.find('div.pager').html(h).show();
					//无数据情况
				} else {
					tab.find('.list[name="hklhc_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="hklhc_game"] li.blankplace[name=searchteam]').height(350);
					tab.find('.list[name="hklhc_game"] div.pager').hide();
				}
			} else {
				tab.find('.list[name="hklhc_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="hklhc_game"] li.blankplace[name=searchteam]').height(350);
				tab.find('.list[name="hklhc_game"] div.pager').hide();
			}
		});
	},
	getDaySearchTotal: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		tab.find('.list[name="summary"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getRechargeWithdrawDayReport', p, function (report) {
			if (report.code == 1) {
				//有数据情
				var report_tpl = ""
				if (report.result.reportList.length > 0) {
					$.each(report.result.reportList, function (i, v) {
						report_tpl += '<li class="day">\
									<span>' + v.recordTime + '</span>\
									<span>' + v.newUserCount + '</span>\
									<span>' + v.rechargeNum + '</span>\
									<span>' + v.rechargeSum + '</span>\
									<span>' + v.rechargeCash + '</span>\
									<span>' + v.withdrawNum + '</span>\
									<span>' + v.withdrawSum + '</span>\
									<span>' + v.withdrawCash + '</span></li>'
					})
					tab.find('.list[name="summary"] ul.data:eq(0)').html(report_tpl);
					/*	tab.find('.list[name="summary"] ul.data:eq(0)').html(tmpl.apply(this, ['reportsearchday', report_tpl, report.result]));*/
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);


					var totleSum = report.result.totleSum;
					tab.find('.list[name="summary"] ul.data:eq(0)').append(['<li class="day count">',
						'<span>总计</span>',
						'<span>' + totleSum.newUserCount + '</span>',
						'<span>' + totleSum.rechargeNum + '</span>',
						'<span>' + totleSum.rechargeSum + '</span>',
						'<span>' + totleSum.rechargeCash + '</span>',
						'<span>' + totleSum.withdrawNum + '</span>',
						'<span>' + totleSum.withdrawSum + '</span>',
						/*'<span>￥' + totleSum.totalActivityBonus + '</span>' +*/
						'<span>' + totleSum.withdrawCash + '</span>', '</li>'
					].join(''))
					//无数据情况
				} else {
					tab.find('.list[name="summary"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="summary"] li.blankplace[name=searchteam]').height(350);
					//  	          tab.find('div.pager').html('').hide();
				}
			} else {
				tab.find('.list[name="summary"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="summary"] li.blankplace[name=searchteam]').height(350);
				//  	        tab.find('div.pager').html('').show();
			}
		});
	},
	getDaySearch: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		tab.find('.list[name="lottery"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getDayReport', p, function (report) {
			if (report.code == 1) {
				//有数据情况
				if (report.result.list.length > 0) {
					var report_tpl = [
						'<% for ( var i = 0; i < list.length; i++ ) { %>',
						'<li class="day <%=list[i].isSelf|Q.isSelf%>">',
						'<span><%=list[i].betDate%></span>',
						'<span><%=list[i].betAmount%></span>',
						'<span><%=list[i].bonusAmount%></span>',
						'<span><%=list[i].rebateAmount%></span>',
						'<span><%=list[i].mbrAtvtCash%></span>',
						'<span><%=list[i].agtAtvtCash%></span>',
						'<span class="last"><%=list[i].profitAndLoss%></span>',
						'</li>',
						'<% } %>'
					].join('');
					tab.find('.list[name="lottery"] ul.data:eq(0)').html(tmpl.apply(this, ['reportsearchday', report_tpl, report.result]));

					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);

					var totleSum = report.result.totleSum;
					tab.find('.list[name="lottery"] ul.data:eq(0)').append(['<li class="day count">',
						'<span>总计</span>',
						'<span>' + totleSum.totalBetAmount + '</span>',
						'<span>' + totleSum.totalBonusAmount + '</span>',
						'<span>' + totleSum.totalRebateAmount + '</span>',
						'<span>' + totleSum.totalMbrAtvtCash + '</span>',
						'<span>' + totleSum.totalAgtAtvtCash + '</span>',
						'<span class="last">' + totleSum.totalProfitAndLoss + '</span>', '</li>'
					].join(''))
					//无数据情况
				} else {
					tab.find('.list[name="lottery"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="lottery"] li.blankplace[name=searchteam]').height(350);
				}
			} else {
				tab.find('.list[name="lottery"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="lottery"] li.blankplace[name=searchteam]').height(350);
			}
		});
	},
	getDaySearchAG: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		tab.find('.list[name="ag_game"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getDayReportAG', p, function (report) {
			if (report.code == 1) {
				//有数据情况
				if (report.result.reportList.length > 0) {
					var report_tpl = [
						'<% for ( var i = 0; i < reportList.length; i++ ) { %>',
						'<li class="day <%=reportList[i].isSelf|Q.isSelf%>">',
						'<span class="game agtd"><%=reportList[i].gameTime%></span>',
						//'<span class="lot"><%=reportList[i].betNum%></span>',
						'<span class="game agtd"><%=reportList[i].betAmount%></span>',
						'<span class="game agtd"><%=reportList[i].validBetAmount%></span>',
						'<span class="game agtd"><%=reportList[i].bonusAmount%></span>',
						/*'<span>￥<%=reportList[i].mbrAtvtCash%></span>',
						'<span>￥<%=reportList[i].agtAtvtCash%></span>',*/
						'<span class="game agtd"><%=reportList[i].activityBonus%></span>',
						'<span class="game agtd last"><%=reportList[i].profitAndLoss%></span>',
						'</li>',
						'<% } %>'
					].join('');
					tab.find('.list[name="ag_game"] ul.data:eq(0)').html(tmpl.apply(this, ['reportsearchday', report_tpl, report.result]));

					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);

					//汇总-小计（分页）
					//  					if(report.result.page.totalPage > 1){
					//  						var totalCount = report.result.pageSum;
					//  						tab.find('ul.data:eq(0)').append(['<li class="day count">',
					//		  		            '<span>小计（分页）</span>',
					//		  		            '<span>'+totalCount.totalNewUserCount+'</span>',
					//		  		            '<span>￥'+totalCount.totalPayAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalWithdrawAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalBetAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalBonusAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalRebateAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalActivityBonus+'</span>',
					//		  		            '<span>￥'+parseFloat(totalCount.totalProfitAndLoss).toFixed(4)+'</span>','</li>'].join(''));
					//  					}

					var totleSum = report.result.totleSum;
					tab.find('.list[name="ag_game"] ul.data:eq(0)').append(['<li class="day count">',
						'<span class="game agtd">总计</span>',
						//'<span class="lot">' + totleSum.betNum + '</span>',
						'<span class="game agtd">' + totleSum.betAmount + '</span>',
						'<span class="game agtd">' + totleSum.validBetAmount + '</span>',
						'<span class="game agtd">' + totleSum.bonusAmount + '</span>',
						/*'<span>￥' + totleSum.totalMbrAtvtCash + '</span>',
						'<span>￥' + totleSum.totalAgtAtvtCash + '</span>',*/
						'<span class="game agtd">' + totleSum.activityBonus + '</span>' +
						'<span class="game agtd last">' + totleSum.profitAndLoss + '</span>', '</li>'
					].join(''))
					//无数据情况
				} else {
					tab.find('.list[name="ag_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="ag_game"] li.blankplace[name=searchteam]').height(350);
					//  	          tab.find('div.pager').html('').hide();
				}
			} else {
				tab.find('.list[name="ag_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="ag_game"] li.blankplace[name=searchteam]').height(350);
				//  	        tab.find('div.pager').html('').show();
			}
		});
	},
	getDaySearchPT: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		tab.find('.list[name="pt_game"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getDayReportPT', p, function (report) {
			if (report.code == 1) {
				//有数据情况
				if (report.result.reportList.length > 0) {
					var report_tpl = [
						'<% for ( var i = 0; i < reportList.length; i++ ) { %>',
						'<li class="day <%=reportList[i].isSelf|Q.isSelf%>">',
						'<span class="game"><%=reportList[i].gameTime%></span>',
						//'<span class="lot"><%=reportList[i].betNum%></span>',
						'<span class="game"><%=reportList[i].betAmount%></span>',
						'<span class="game"><%=reportList[i].bonusAmount%></span>',
						/*'<span>￥<%=reportList[i].mbrAtvtCash%></span>',
						'<span>￥<%=reportList[i].agtAtvtCash%></span>',*/
						'<span class="game"><%=reportList[i].activityBonus%></span>',
						'<span class="game"><%=reportList[i].profitAndLoss%></span>',
						'</li>',
						'<% } %>'
					].join('');
					tab.find('.list[name="pt_game"] ul.data:eq(0)').html(tmpl.apply(this, ['reportsearchday', report_tpl, report.result]));

					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);

					//汇总-小计（分页）
					//  					if(report.result.page.totalPage > 1){
					//  						var totalCount = report.result.pageSum;
					//  						tab.find('ul.data:eq(0)').append(['<li class="day count">',
					//		  		            '<span>小计（分页）</span>',
					//		  		            '<span>'+totalCount.totalNewUserCount+'</span>',
					//		  		            '<span>￥'+totalCount.totalPayAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalWithdrawAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalBetAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalBonusAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalRebateAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalActivityBonus+'</span>',
					//		  		            '<span>￥'+parseFloat(totalCount.totalProfitAndLoss).toFixed(4)+'</span>','</li>'].join(''));
					//  					}

					var totleSum = report.result.totleSum;
					tab.find('.list[name="pt_game"] ul.data:eq(0)').append(['<li class="day count">',
						'<span class="game">总计</span>',
						//'<span class="lot">' + totleSum.betNum + '</span>',
						'<span class="game">' + totleSum.betAmount + '</span>',
						'<span class="game">' + totleSum.bonusAmount + '</span>',
						/*'<span>￥' + totleSum.totalMbrAtvtCash + '</span>',
						'<span>￥' + totleSum.totalAgtAtvtCash + '</span>',*/
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>', '</li>'
					].join(''))
					//无数据情况
				} else {
					tab.find('.list[name="pt_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="pt_game"] li.blankplace[name=searchteam]').height(350);
					//  	          tab.find('div.pager').html('').hide();
				}
			} else {
				tab.find('.list[name="pt_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="pt_game"] li.blankplace[name=searchteam]').height(350);
				//  	        tab.find('div.pager').html('').show();
			}
		});
	},
	getDaySearchBY: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		tab.find('.list[name="by_game"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getDayReportBY', p, function (report) {
			if (report.code == 1) {
				//有数据情况
				if (report.result.reportList.length > 0) {
					var report_tpl = [
						'<% for ( var i = 0; i < reportList.length; i++ ) { %>',
						'<li class="day <%=reportList[i].isSelf|Q.isSelf%>">',
						'<span class="game"><%=reportList[i].gameTime%></span>',
						//'<span class="lot"><%=reportList[i].betNum%></span>',
						'<span class="game"><%=reportList[i].betAmount%></span>',
						'<span class="game"><%=reportList[i].bonusAmount%></span>',
						/*'<span>￥<%=reportList[i].mbrAtvtCash%></span>',
						 '<span>￥<%=reportList[i].agtAtvtCash%></span>',*/
						'<span class="game"><%=reportList[i].activityBonus%></span>',
						'<span class="game"><%=reportList[i].profitAndLoss%></span>',
						'</li>',
						'<% } %>'
					].join('');
					tab.find('.list[name="by_game"] ul.data:eq(0)').html(tmpl.apply(this, ['reportsearchday', report_tpl, report.result]));

					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);

					//汇总-小计（分页）
					//  					if(report.result.page.totalPage > 1){
					//  						var totalCount = report.result.pageSum;
					//  						tab.find('ul.data:eq(0)').append(['<li class="day count">',
					//		  		            '<span>小计（分页）</span>',
					//		  		            '<span>'+totalCount.totalNewUserCount+'</span>',
					//		  		            '<span>￥'+totalCount.totalPayAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalWithdrawAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalBetAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalBonusAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalRebateAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalActivityBonus+'</span>',
					//		  		            '<span>￥'+parseFloat(totalCount.totalProfitAndLoss).toFixed(4)+'</span>','</li>'].join(''));
					//  					}

					var totleSum = report.result.totleSum;
					tab.find('.list[name="by_game"] ul.data:eq(0)').append(['<li class="day count">',
						'<span class="game">总计</span>',
						//'<span class="lot">' + totleSum.betNum + '</span>',
						'<span class="game">' + totleSum.betAmount + '</span>',
						'<span class="game">' + totleSum.bonusAmount + '</span>',
						/*'<span>￥' + totleSum.totalMbrAtvtCash + '</span>',
						 '<span>￥' + totleSum.totalAgtAtvtCash + '</span>',*/
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>', '</li>'
					].join(''))
					//无数据情况
				} else {
					tab.find('.list[name="by_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="by_game"] li.blankplace[name=searchteam]').height(350);
					//  	          tab.find('div.pager').html('').hide();
				}
			} else {
				tab.find('.list[name="by_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="by_game"] li.blankplace[name=searchteam]').height(350);
				//  	        tab.find('div.pager').html('').show();
			}
		});
	},
	getDaySearchBBIN: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		tab.find('.list[name="bbin_game"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getDayReportBbin', p, function (report) {
			if (report.code == 1) {
				//有数据情况
				if (report.result.reportList.length > 0) {
					var report_tpl = [
						'<% for ( var i = 0; i < reportList.length; i++ ) { %>',
						'<li class="day <%=reportList[i].isSelf|Q.isSelf%>">',
						'<span class="game"><%=reportList[i].gameTime%></span>',
						//'<span class="lot"><%=reportList[i].betNum%></span>',
						'<span class="game"><%=reportList[i].betAmount%></span>',
						'<span class="game"><%=reportList[i].bonusAmount%></span>',
						/*'<span>￥<%=reportList[i].mbrAtvtCash%></span>',
						 '<span>￥<%=reportList[i].agtAtvtCash%></span>',*/
						'<span class="game"><%=reportList[i].activityBonus%></span>',
						'<span class="game"><%=reportList[i].profitAndLoss%></span>',
						'</li>',
						'<% } %>'
					].join('');
					tab.find('.list[name="bbin_game"] ul.data:eq(0)').html(tmpl.apply(this, ['reportsearchday', report_tpl, report.result]));

					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);

					//汇总-小计（分页）
					//  					if(report.result.page.totalPage > 1){
					//  						var totalCount = report.result.pageSum;
					//  						tab.find('ul.data:eq(0)').append(['<li class="day count">',
					//		  		            '<span>小计（分页）</span>',
					//		  		            '<span>'+totalCount.totalNewUserCount+'</span>',
					//		  		            '<span>￥'+totalCount.totalPayAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalWithdrawAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalBetAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalBonusAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalRebateAmount+'</span>',
					//		  		            '<span>￥'+totalCount.totalActivityBonus+'</span>',
					//		  		            '<span>￥'+parseFloat(totalCount.totalProfitAndLoss).toFixed(4)+'</span>','</li>'].join(''));
					//  					}

					var totleSum = report.result.totleSum;
					tab.find('.list[name="bbin_game"] ul.data:eq(0)').append(['<li class="day count">',
						'<span class="game">总计</span>',
						//'<span class="lot">' + totleSum.betNum + '</span>',
						'<span class="game">' + totleSum.betAmount + '</span>',
						'<span class="game">' + totleSum.bonusAmount + '</span>',
						/*'<span>￥' + totleSum.totalMbrAtvtCash + '</span>',
						 '<span>￥' + totleSum.totalAgtAtvtCash + '</span>',*/
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>', '</li>'
					].join(''))
					//无数据情况
				} else {
					tab.find('.list[name="bbin_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="bbin_game"] li.blankplace[name=searchteam]').height(350);
					//  	          tab.find('div.pager').html('').hide();
				}
			} else {
				tab.find('.list[name="bbin_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="bbin_game"] li.blankplace[name=searchteam]').height(350);
				//  	        tab.find('div.pager').html('').show();
			}
		});
	},
	getDaySearchIDN: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		tab.find('.list[name="idn_game"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getDayReportIdn', p, function (report) {
			if (report.code == 1) {
				//有数据情况
				if (report.result.reportList.length > 0) {
					var report_tpl = [
						'<% for ( var i = 0; i < reportList.length; i++ ) { %>',
						'<li class="day <%=reportList[i].isSelf|Q.isSelf%>">',
						'<span class="game"><%=reportList[i].gameTime%></span>',
						'<span class="game"><%=reportList[i].betAmount%></span>',
						'<span class="game"><%=reportList[i].bonusAmount%></span>',
						'<span class="game"><%=reportList[i].activityBonus%></span>',
						'<span class="game"><%=reportList[i].profitAndLoss%></span>',
						'</li>',
						'<% } %>'
					].join('');
					tab.find('.list[name="idn_game"] ul.data:eq(0)').html(tmpl.apply(this, ['reportsearchday', report_tpl, report.result]));

					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);

					var totleSum = report.result.totleSum;
					tab.find('.list[name="idn_game"] ul.data:eq(0)').append(['<li class="day count">',
						'<span class="game">总计</span>',
						'<span class="game">' + totleSum.betAmount + '</span>',
						'<span class="game">' + totleSum.bonusAmount + '</span>',
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>', '</li>'
					].join(''));
					//无数据情况
				} else {
					tab.find('.list[name="idn_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="idn_game"] li.blankplace[name=searchteam]').height(350);
				}
			} else {
				tab.find('.list[name="idn_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="idn_game"] li.blankplace[name=searchteam]').height(350);
			}
		});
	},
	getDaySearchKgame: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		$('.js-head-day-game').append(`<span class="question" title="统计有效投注，部分游戏可能产生平局结果，平局投注不计算在内"></span>`);
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		tab.find('.list[name="kgame"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getDayReportKgame', p, function (report) {
			if (report.code == 1) {
				//有数据情况
				if (report.result.reportList.length > 0) {
					const reportHtml = report.result.reportList.map((item,index)=>{
						return `
							<li class="day ${Q.isSelf}">
								<span class="game">${item.gameTime}</span>
								<span class="game">${item.betAmount}</span>
								<span class="game">${item.bonusAmount}</span>
								<span class="game">${item.activityBonus}</span>
								<span class="game">${item.profitAndLoss}</span>
							</li>
						`;
					}).join('');
					tab.find('.list[name="kgame"] ul.data:eq(0)').html(reportHtml);
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);

					var totleSum = report.result.totleSum;
					tab.find('.list[name="kgame"] ul.data:eq(0)').append(['<li class="day count">',
						'<span class="game">总计</span>',
						'<span class="game">' + totleSum.betAmount + '</span>',
						'<span class="game">' + totleSum.bonusAmount + '</span>',
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>', '</li>'
					].join(''));
					//无数据情况
				} else {
					tab.find('.list[name="kgame"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="kgame"] li.blankplace[name=searchteam]').height(350);
				}
			} else {
				tab.find('.list[name="kgame"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="kgame"] li.blankplace[name=searchteam]').height(350);
			}
		});
	},
	getDaySearchHKLHC: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		tab.find('.list[name="hklhc_game"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getDayReportHKLHC', p, function (report) {
			if (report.code == 1) {
				//有数据情况
				if (report.result.reportList.length > 0) {
					var report_tpl = [
						'<% for ( var i = 0; i < reportList.length; i++ ) { %>',
						'<li class="day <%=reportList[i].isSelf|Q.isSelf%>">',
						'<span class="hklhc-game"><%=reportList[i].gameTime%></span>',
						'<span class="hklhc-game"><%=reportList[i].betAmount%></span>',
						'<span class="hklhc-game"><%=reportList[i].bonusAmount%></span>',
						'<span class="hklhc-game"><%=reportList[i].rebateAmount%></span>',
						'<span class="hklhc-game"><%=reportList[i].activityBonus%></span>',
						'<span class="hklhc-game last"><%=reportList[i].profitAndLoss%></span>',
						'</li>',
						'<% } %>'
					].join('');
					tab.find('.list[name="hklhc_game"] ul.data:eq(0)').html(tmpl.apply(this, ['reportsearchday', report_tpl, report.result]));

					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);

					var totleSum = report.result.totleSum;
					tab.find('.list[name="hklhc_game"] ul.data:eq(0)').append(['<li class="day count">',
						'<span class="hklhc-game">总计</span>',
						'<span class="hklhc-game">' + totleSum.betAmount + '</span>',
						'<span class="hklhc-game">' + totleSum.bonusAmount + '</span>',
						'<span class="hklhc-game">' + totleSum.rebateAmount + '</span>',
						'<span class="hklhc-game">' + totleSum.activityBonus + '</span>' +
						'<span class="hklhc-game last">' + totleSum.profitAndLoss + '</span>', '</li>'
					].join(''));
					//无数据情况
				} else {
					tab.find('.list[name="hklhc_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="hklhc_game"] li.blankplace[name=searchteam]').height(350);
				}
			} else {
				tab.find('.list[name="hklhc_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="hklhc_game"] li.blankplace[name=searchteam]').height(350);
			}
		});
	},

	getDaySearchThird: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		$('.js-activity-bonus').append(`<span class="question" style="width: 18px; height:18px; right: 12px;" title="其中香港六合彩的活动数据实际为香港六合彩返点数据"></span>`);
		tab.find('.list[name="third_game"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getDayReportThird', p, function (report) {
			if (report.code == 1) {
				//有数据情况
				if (report.result.reportList.length > 0) {
					var report_tpl = [
						'<% for ( var i = 0; i < reportList.length; i++ ) { %>',
						'<li class="day <%=reportList[i].isSelf|Q.isSelf%>">',
						'<span class="game"><%=reportList[i].gameTime%></span>',
						'<span class="game"><%=reportList[i].betAmount%></span>',
						'<span class="game"><%=reportList[i].bonusAmount%></span>',
						'<span class="game"><%=reportList[i].activityBonus%></span>',
						'<span class="game"><%=reportList[i].profitAndLoss%></span>',
						'</li>',
						'<% } %>'
					].join('');
					tab.find('.list[name="third_game"] ul.data:eq(0)').html(tmpl.apply(this, ['reportsearchday', report_tpl, report.result]));
					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);

					var totleSum = report.result.totleSum;
					tab.find('.list[name="third_game"] ul.data:eq(0)').append(['<li class="day count">',
						'<span class="game">总计</span>',
						'<span class="game">' + totleSum.betAmount + '</span>',
						'<span class="game">' + totleSum.bonusAmount + '</span>',
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>', '</li>'
					].join(''))
					//无数据情况
				} else {
					tab.find('.list[name="third_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="third_game"] li.blankplace[name=searchteam]').height(350);
				}
			} else {
				tab.find('.list[name="third_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="third_game"] li.blankplace[name=searchteam]').height(350);
			}
		});
	},

	getDaySearchSB: function () {
		var me = this;
		var p = me.dayReportParam;
		var tab = $('.panel-tab.dayReport');

		var start = new Date(tab.find('#searchday_start').val()).getTime();
		var min = new Date().getTime() - 35 * 24 * 3600 * 1000;
		if (start < min) {
			$('#searchday_start').val(new Date(min).Format('YYYY/MM/DD'));
		}
		p['startTime'] = tab.find('#searchday_start').val();
		p['endTime'] = tab.find('#searchday_end').val();
		p['pageSize'] = 10;
		p['currPage'] = 1;
		p['page'] = 1;
		p['queryType'] = tab.find('input:radio[name="daytype"]:checked').val(); //团队-1  个人-2

		tab.find('.list[name="sb_game"] ul.data:eq(0)').html('<li class="bloading" name="search"><div class="ui-dialog-loading"></div></li>');
		var userName = tab.find('#searchday_username');
		if (!userName.val()) {
			userName.val(User.nick);
		}
		p['username'] = jQuery.trim(userName.val());

		Api.getCommon('getDayReportSb', p, function (report) {
			if (report.code == 1) {
				//有数据情况
				if (report.result.reportList.length > 0) {
					var report_tpl = [
						'<% for ( var i = 0; i < reportList.length; i++ ) { %>',
						'<li class="day <%=reportList[i].isSelf|Q.isSelf%>">',
						'<span class="game"><%=reportList[i].gameTime%></span>',
						'<span class="game"><%=reportList[i].betAmount%></span>',
						'<span class="game"><%=reportList[i].bonusAmount%></span>',
						'<span class="game"><%=reportList[i].validBetAmount2%></span>',
						'<span class="game"><%=reportList[i].activityBonus%></span>',
						'<span class="game"><%=reportList[i].profitAndLoss%></span>',
						'</li>',
						'<% } %>'
					].join('');
					tab.find('.list[name="sb_game"] ul.data:eq(0)').html(tmpl.apply(this, ['reportsearchday', report_tpl, report.result]));

					var levelDiv = tab.find('.team-level');
					var namelist = report.result.parentAgentList;
					var levelH = '';
					for (var i = namelist.length - 1; i >= 0; i--) {
						levelH += '<a>' + namelist[i].userName + '</a>';
						if (i > 0) {
							levelH += '<span>&nbsp;&gt;&nbsp;</span>';
						}
					}
					levelDiv.html(levelH);

					var totleSum = report.result.totleSum;
					tab.find('.list[name="sb_game"] ul.data:eq(0)').append(['<li class="day count">',
						'<span class="game">总计</span>',
						'<span class="game">' + totleSum.betAmount + '</span>',
						'<span class="game">' + totleSum.bonusAmount + '</span>',
						'<span class="game">' + totleSum.validBetAmount2 + '</span>',
						'<span class="game">' + totleSum.activityBonus + '</span>' +
						'<span class="game">' + totleSum.profitAndLoss + '</span>', '</li>'
					].join(''));
					//无数据情况
				} else {
					tab.find('.list[name="sb_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">暂无数据</div></li>');
					tab.find('.list[name="sb_game"] li.blankplace[name=searchteam]').height(350);
				}
			} else {
				tab.find('.list[name="sb_game"] ul.data:eq(0)').html('<li class="blankplace" name="searchteam" style="border: none;"><div class="blank">' + report.msg || "请求数据出错" + '</div></li>');
				tab.find('.list[name="sb_game"] li.blankplace[name=searchteam]').height(350);
			}
		});
	},
	getRechargeHistory: function ($el, params) {
		var me = this;
		var tit = {
			'recharger': '<span style="width:25%">时间</span><span style="width: 25%">订单编号</span><span style="width: 20%">充值方式</span><span style="width: 20%">金额</span><span style="width: 10%">状态</span>',
		};
		$el.find('.notran').hide();
		$el.find('.pagging').html('');
		$el.find('.list .tit').html("");
		$el.find('.list .box  ul').html("");
		$el.find('.list .box  p').hide();

		function callFont(x) {
			switch (x) {
				case 0:
					return "成功";
					break;
				case 1:
					return "待处理";
					break;
				case 2:
				case 6:
				case 7:
					return "失败";
					break;
				default:
					return "待处理";
			}
		}

		var q = ["其他", "转账", "第三方支付"];
		Api.getpageList(params, function (d) {
			if (d === -1) {
				$(".loginlnk").trigger("click");
				return false;
			}
			$el.find('.tiploading').show();
			if (d.result !== undefined) {
				d = d.result;

				if (!d.data || d.data == "") {
					$el.find('.tit').hide();
					$el.find('.notran').show().siblings().hide();
					$el.find('.list .box ul').html('<div class="blank"></div>').show();
					return false;
				}

				$el.find('.list .tit').show().html(tit.recharger);
				//数据绑定
				$el.find('.notran').hide();
				$el.find('.tiploading').hide();
				var his_html = '';
				var his_orders = d.data;
				$(his_orders).each(function () {
					var i = arguments[0];
					var e = arguments[1];
					his_html += '<li data-id="' + e.orderId + '" class="">\
						<span style=" width:25% ">' + e.orderDate + '</span>\
						<span style="width:25%">' + e.spsn + '</span>\
						<span style="width:20%">' + q[parseInt(e.way)] + '</span>\
						<span style="width:20%">' + me.toFixedNum(e.cash) + '</span>\
						<span style="width:10%">' + callFont(parseInt(e.status)) + '</span>\
						</li>';
				});

				$el.find('.list .box ul').html(his_html).attr('type', 'recharger');
				$el.find('.list .box').removeClass('hide').show();
				$el.find('.list .box  p').show();

				$el.find('.sppinner').hide();

				//翻页
				$el.find('.box .pagging').html(Q.showPagination(d.page, d.pageSize, d.total, d.pageCount));
				$el.find('.box .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.page = $(this).attr('page');
					me.getRechargeHistory($el, params);
				});
			} else {
				$el.find('.notran').show().siblings().hide();
				$el.find('.list .box ul').html('<div class="blank"></div>');
			}
		});
	},

	getWithdrawHistory: function ($el, params) {
		var me = this;
		var tit = {
			'draw': '<span style="width:20%">时间</span><span style="width:20%">订单编号</span><span style="width:15%">金额</span><span style="width:15%">手续费</span><span style="width:20%">实际金额</span><span style="width:10%">状态</span>',
		};
		$el.find('.notran').hide();
		$el.find('.pagging').html('');
		$el.find('.list .tit').html("");
		$el.find('.list .box  ul').html("");
		$el.find('.list .box  p').hide();

		function callFont(x) {
			switch (x) {
				case 0:
					return "成功";
					break;
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 8:
					return "待处理";
					break;
				case 6:
				case 7:
				case 9:
					return `失败`;
					break;
				case 10:
					return "处理中";
					break;
				default:
					return "其他";
			}
		}

		$el.find('.box .pagging').html('');

		Api.getdrawOrderList(params, function (d) {

			if (d === -1) {
				$(".loginlnk").trigger("click");
				return false;
			}
			$el.find('.tiploading').show();
			if (d.result !== undefined) {
				d = d.result;

				if (!d.data || d.data == "") {
					$el.find('.tit').hide();
					$el.find('.notran').show().siblings().hide();
					$el.find('.list .box ul').html('<div class="blank"></div>').show();
					return false;
				}

				$el.find('.list .tit').show().html(tit.draw);
				//数据绑定
				$el.find('.notran').hide();
				$el.find('.tiploading').hide();
				var his_html = '';
				var his_orders = d.data;

				$(his_orders).each(function () {
					var i = arguments[0];
					var e = arguments[1];
					his_html += '<li data-id="' + e.drawOrderId + '" class="">\
						<span style=" width:20% ">' + e.createTime + '</span>\
						<span style="width:20%">' + e.spsn + '</span>\
						<span style="width:15%">' + me.toFixedNum(e.cash) + '</span>\
						<span style="width:15%">' + me.toFixedNum(e.poundage) + '</span>\
						<span style="width:20%">' + me.toFixedNum(e.amount) + '</span>\
						<span style="width:10%">' + callFont(parseInt(e.status)) + '</span>\
						</li>';
				});

				$el.find('.list .box ul').html(his_html).attr('type', 'draw');
				$el.find('.list .box').removeClass('hide').show();
				$el.find('.list .box  p').show();

				$el.find('.sppinner').hide();

				//翻页
				$el.find('.box .pagging').html(Q.showPagination(d.page, d.pageSize, d.total, d.pageCount));
				$el.find('.box .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.page = $(this).attr('page');
					me.getWithdrawHistory($el, params);
				});
			} else {
				$el.find('.notran').show().siblings().hide();
				$el.find('.list .box ul').html('<div class="blank"></div>').show();
			}
		});
	},

	getLotteryHistory: function ($el, params) {
		var me = this;
		var tit = {
			'lottery': '<span class="wd1" style="width:120px;">投注时间</span><span class="wd5">彩种</span><span>玩法</span><span class="wd2">期号</span><span>投注内容</span><span style="width:92px;">投注金额</span><span>奖金</span><span class="wd4">状态</span><span class="wd3">追号</span>',
		};
		$el.find('.notran').hide();
		$el.find('.box .tip').hide();
		$el.find('.list .tit').html("");
		$el.find('.tiploading').show();

		$el.find('.box .pagging').html('');

		Api.getCommon('getHistory', params, function (d) {
			if (d === -1) {
				$(".loginlnk").trigger("click");
				return false;
			}
			if (d.result !== undefined) {
				d = d.result;

				if (d.his_orders.length == 0) {
					$el.find('.notran').show();
					$el.find('.tiploading').hide();
					$el.find('.tit').hide();
					$el.find('.list .box ul').html('<div class="blank"></div>');
					return false;
				}
				
				$el.find('.list .tit').show().html(tit.lottery);
				//数据绑定
				$el.find('.notran').hide();

				var his_html = '';
				var his_orders = d.his_orders;
				$(his_orders).each(function () {
					var i = arguments[0];
					var e = arguments[1];
					his_html += '<li data-id="' + e.orderItemId + '" data-istrace="' + e.istrace + '" class="' + Q.oddEven(i) + '">\
						<span class="wd1" style="width:120px;">' + e.orderTime + '</span>\
						<span class="wd5">' + Q.nameLottery(e.lottery) + '</span>\
						<span title="' + Q.getMethodName(Q.getLottryCode(e.method), e.lottery) + '">' + Q.getMethodName(Q.getLottryCode(e.method), e.lottery) + '</span>\
						<span class="wd2">' + e.issue + '</span>\
						<span class="grid-toggle" alt="号码详情："><div class="wrapbox"><em alt="' + Q.descFormat(e.code, e.method) + '">' + Q.descFormat(e.code, e.method) + '</em></div></span>\
						<span style="width:92px;">' + e.amount + '</span>';

					if (e.awardMoney > 0) {
						his_html += '<span class="his_red">' + e.awardMoney + '</span>\
							<span class="wd4 his_red">' + Q.statusChs(e.status) + '</span>';
					} else {
						his_html += '<span>' + e.awardMoney + '</span>\
							<span class="wd4">' + Q.statusChs(e.status) + '</span>';
					}

					his_html += '<span class="wd3">' + Q.istraceCh(e.istrace) + '</span></li>';
				});

				$el.find('.list .box ul').html(his_html).attr('type', 'lottery');
				$el.find('.list .box').removeClass('hide');
				$el.find('.list .box-trace').addClass('hide');
				$el.find('.list').removeClass('trace').removeClass('AG_game').removeClass("BY_game");

				$el.find('.list .box ul li span.grid-toggle').each(function (i, el) {
					if (!$(el).find('em').attr('alt')) {
						$(el).addClass('grid-hover').find('em').html('<a href="javascript:;" class="hand viewfull">查看全部</a>');
					}
				});

				//合计
				$el.find('.list .box .grid-total .grid-amount').html('¥' + Q.doubleFormat(d.dealMoneyCount));
				$el.find('.list .box .grid-total .grid-award').html('¥' + Q.doubleFormat(d.awardMoneyCount));
				$el.find('.list .box .grid-total').show();
				$el.find('.tiploading').hide();
				$el.find('.sppinner').hide();
				$el.find('.box .tip').show();

				//翻页
				$el.find('.box .pagging').html(Q.showPagination(d.currPage, d.pageSize, d.totalItem, d.totalPage));
				$el.find('.box .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.currPage = $(this).attr('page');
					me.getLotteryHistory($el, params);
				});

				// 点击弹出历史记录详情
				$el.find('.list .box ul:eq(0)').off('click').on('click', 'li', function (evt) {
					evt.preventDefault();

					var li = $(this);

					if (li.hasClass('load')) {
						return false;
					}
					li.addClass('load');
					var p = {
						'orderId': li.attr('data-id'),
						'width': 460
					};
					if (li.parent('ul').attr('type') === 'lottery') {
						LowerHistory.popDetail(li.attr('data-istrace'), p, params);
						li.removeClass('load');
					}
				});

			} else {
				$el.find('.tiploading').hide();
				$el.find('.notran').show();
				$el.find('.list .box ul').html('<div class="blank"></div>');
			}
		});
	},

	getAgGameHistory: function ($el, params) {
		var me = this;
		var tit = {
			'AG_game': '<span class="">投注时间</span><span>注单流水号</span><span class="">游戏类型</span><span>游戏局号</span><span>投注金额</span><span>盈亏金额</span><span>订单状态</span>',
		};
		$el.find('.box-ag .pagging').html('');
		$el.find('.box-ag .tip').hide();
		$el.find('.notran').hide();
		$el.find('.list .tit').html("");
		$el.find('.list .box-ag ul').html("");
		$el.find('.tiploading').show();


		Api.getCommon('getAgHistory', params, function (d) {
			if (d.result !== undefined) {
				d = d.result;

				if (d.datas.length == 0) {
					$el.find('.notran').show();
					$el.find('.tiploading').hide();
					$el.find('.tit').hide();
					$el.find('.list .box-ag ul').html('<div class="blank"></div>');
					return false;
				}


				$el.find('.list .tit').show().html(tit.AG_game);
				//数据绑定
				$el.find('.notran').hide();
				$el.find('.tiploading').hide();

				var his_html = '';
				var his_orders = d.datas;
				$(his_orders).each(function () {
					var i = arguments[0];
					var e = arguments[1];
					his_html += '<li class="' + Q.oddEven(i) + '">\
						<span class="">' + e.betTime + '</span>\
						<span class="">' + e.billNo + '</span>\
						<span>' + Q.getGameName(e.gameType) + '</span>\
						<span class="">' + e.gameCode + '</span>\
						<span class="">' + e.betAmount + '</span>';
					if (e.netAmount > 0) {
						his_html += '<span class="his_red">' + e.netAmount + '</span>';
					} else {
						his_html += '<span>' + e.netAmount + '</span>';
					}
					his_html += '<span class="">' + Q.getTypeName(e.flag) + '</span></li>';

				});

				$el.find('.list .box-ag ul').html(his_html).attr('type', 'AG_game');
				$el.find('.list .box-ag').removeClass('hide');
				$el.find('.list').addClass('AG_game');
				$el.find('.box-ag .tip').show();


				//合计

				$el.find('.sppinner').hide();


				//翻页
				$el.find('.box-ag .pagging').html(Q.showPagination(d.currPage, params.pageSize, d.totalCount, d.pageCount));
				$el.find('.box-ag .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.currPage = $(this).attr('page');
					me.getAgGameHistory($el, params);
				});
				$el.find('.notran').hide();

			}
		});
	},

	getPtGameHistory: function ($el, params) {
		var me = this;
		var tit = {
			'PT_game': '<span class="">游戏时间</span><span>游戏类型</span><span class="">游戏名称</span><span>游戏局号</span><span>投注金额</span><span>派奖金额</span><span>奖池派奖金额</span>',
		};
		$el.find('.box-pt .pagging').html('');
		$el.find('.box-pt .tip').hide();
		$el.find('.notran').hide();
		$el.find('.list .tit').html("");
		$el.find('.list .box-pt ul').html("");
		$el.find('.tiploading').show();


		Api.getCommon('getPtHistory', params, function (d) {
			if (d.result !== undefined) {
				d = d.result;

				if (d.his_orders.length === 0) {
					$el.find('.notran').show();
					$el.find('.tiploading').hide();
					$el.find('.tit').hide();
					$el.find('.list .box-pt ul').html('<div class="blank"></div>');
					return false;
				}


				$el.find('.notran').hide();
				$el.find('.tiploading').hide();
				$el.find('.list .tit').show().html(tit.PT_game);
				//数据绑定

				var his_html = '';
				var his_orders = d.his_orders;
				$(his_orders).each(function () {
					var i = arguments[0];
					var e = arguments[1];
					his_html += '<li class="' + Q.oddEven(i) + '">\
						<span class="">' + e.gamedate + '</span>';
					if (e.typeName == null) {
						his_html += '<span class="">其他</span>';
					} else {
						his_html += '<span class="">' + e.typeName + '</span>';
					}
					if (e.gamename == null) {
						his_html += '<span class="">其他</span>';
					} else {
						his_html += '<span class="">' + e.gamename + '</span>';
					}
					his_html += '<span class="">' + e.gamecode + '</span>\
								<span class="">' + e.bet + '</span>';
					if (e.win > 0) {
						his_html += '<span class="his_red">' + e.win + '</span>';
					} else {
						his_html += '<span>' + e.win + '</span>';
					}
					if (e.progressivewin > 0) {
						his_html += '<span class="his_red">' + e.progressivewin + '</span></li>';
					} else {
						his_html += '<span class="">' + e.progressivewin + '</span></li>';
					}

				});

				$el.find('.list .box-pt ul').html(his_html).attr('type', 'AG_game');
				$el.find('.list .box-pt').removeClass('hide');
				$el.find('.list').removeClass('BBIN_game');
				$el.find('.list').removeClass('trace').removeClass("BY_game").addClass('AG_game');
				$el.find('.box-pt .tip').show();


				//合计

				$el.find('.sppinner').hide();


				//翻页
				$el.find('.box-pt .pagging').html(Q.showPagination(d.currPage, params.pageSize, d.totalItem, d.totalPage));
				$el.find('.box-pt .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.currPage = $(this).attr('page');
					me.getPtGameHistory($el, params);
				});
				$el.find('.notran').hide();
			}
		});
	},

	getByGameHistory: function ($el, params) {
		var me = this;
		var tit = {
			'BY_game': '<span class="wd3">房间号</span><span>盈亏</span><span>投注金额</span><span>中奖</span><span>jackpot中奖</span><span>第一名奖励</span><span class="wd1">记录时间</span>',
		};
		$el.find('.box-by .pagging').html('');
		$el.find('.list .tit').html("");
		$el.find('.list .box-by ul').html("");
		$el.find('.box-by .tip').hide();
		$el.find('.notran').hide();
		$el.find('.tiploading').show();

		Api.getCommon('getByHistory', params, function (d) {
			if (d.result !== undefined) {
				d = d.result;
				if (d.his_orders.length == 0) {
					$el.find('.notran').show();
					$el.find('.tiploading').hide();
					$el.find('.tit').hide();
					$el.find('.list .box-by ul').html('<div class="blank"></div>');
					return false;
				}


				$el.find('.notran').hide();
				$el.find('.tiploading').hide();
				$el.find('.list .tit').show().html(tit.BY_game);
				//数据绑定

				var his_html = '';
				var his_orders = d.his_orders;
				$(his_orders).each(function () {
					var i = arguments[0];
					var e = arguments[1];
					his_html += '<li class="' + Q.oddEven(i) + '">\
						<span class="wd3">' + e.roomId + '</span>\
						<span class="">' + e.profitAndLoss + '</span>\
						<span class="">' + e.bet + '</span>';
					if (e.win > 0) {
						his_html += '<span class="his_red">' + e.win + '</span>'
					} else {
						his_html += '<span class="">' + e.win + '</span>'
					}
					if (e.progressiveWin > 0) {
						his_html += '<span class="his_red">' + e.progressiveWin + '</span>';
					} else {
						his_html += '<span>' + e.progressiveWin + '</span>';
					}
					if (e.encourageWin > 0) {
						his_html += '<span class="his_red">' + e.encourageWin + '</span>';
					} else {
						his_html += '<span class="">' + e.encourageWin + '</span>';
					}
					his_html += '<span class="wd1">' + e.gameTime + '</span></li>';
				});

				$el.find('.list .box-by ul').html(his_html).attr('type', 'BY_game');
				$el.find('.list .box-by').removeClass('hide');
				$el.find('.list').removeClass('trace');
				$el.find('.list').removeClass('BBIN_game');
				$el.find('.list').removeClass('AG_game').addClass('BY_game');
				$el.find('.box-by .tip').show();

				//合计

				$el.find('.sppinner').hide();


				//翻页
				$el.find('.box-by .pagging').html(Q.showPagination(d.currPage, params.pageSize, d.totalItem, d.totalPage));
				$el.find('.box-by .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.currPage = $(this).attr('page');
					me.getByGameHistory($el, params);
				});
				$el.find('.notran').hide();
			}
		});
	},
	getSbGameHistory: function ($el, params) {
		var me = this;
		var tit = {
			'SB_game': '<span class="transactionTime">下注时间</span><span class="sportTypeName">游戏类型</span><span class="competitionDetail">事项</span><span class="orderDetail">详情</span><span class="settleStatusName">结算状态</span><span class="stake">投注额</span><span class="validStake">输/赢</span><span class="validBetAmount2">有效投注</span><span class="winLoseAmount">中奖金额</span>',
		};
		$el.find('.box-sb .pagging').html('');
		$el.find('.box-sb .tip').hide();
		$el.find('.notran').hide();
		$el.find('.list .tit').html(tit.SB_game);
		$el.find('.list .box-sb ul').html("");
		$el.find('.tiploading').show();

		Api.getCommon('getSbHistory', params, function (res) {
			if (res.code === 1 && res.result) {
				let his_orders = res.result.his_orders;

				if (his_orders.length == 0) {
					$el.find('.notran').show();
					$el.find('.tiploading').hide();
					$el.find('.tit').hide();
					$el.find('.list .box-sb ul').html('<div class="blank"></div>');
					return false;
				}


				$el.find('.list .tit').show().html(tit.SB_game);
				//数据绑定
				$el.find('.notran').hide();
				$el.find('.tiploading').hide();

				let his_html = his_orders.map((item, index) => {
					return `
                        <li class="${Q.oddEven(index)}">
                            <span class="transactionTime">${item.transactionTime}</span>
                            <span class="sportTypeName">${item.sportTypeName}</span>
                            <span class="competitionDetail">${item.competitionDetail}</span>
                            <span class="orderDetail">${item.orderDetail}</span>
                            <span class="settleStatusName">${item.settleStatusName}</span>
                            <span class="stake">${item.betAmount}</span>
                            <span class="validStake">${item.winLoseAmount}</span>
                            <span class="validBetAmount2">${item.validBetAmount2}</span>
                            <span class="winLoseAmount">${item.winAmount}</span>
                        </li>
                    `;
				}).join('');

				$el.find('.list .box-sb ul').html(his_html).attr('type', 'SB_game');
				$el.find('.list .box-sb').removeClass('hide');
				$el.find('.list').addClass('SB_game');
				$el.find('.box-sb .tip').show();


				//合计

				$el.find('.sppinner').hide();


				//翻页
				$el.find('.box-sb .pagging').html(Q.showPagination(params.currPage, params.pageSize, res.result.totalItem, res.result.totalPage));
				$el.find('.box-sb .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.currPage = $(this).attr('page');
					me.getSbGameHistory($el, params);
				});
				$el.find('.notran').hide();
			}
		});
	},
	getIdnGameHistory: function ($el, params) {
		var me = this;
		var tit = {
			'IDN_game': '<span>结算时间</span><span>游戏类型</span><span>房间号</span><span>牌局</span><span>投注金额</span><span>返奖</span><span>输/赢</span>',
		};
		$el.find('.box-idn .pagging').html('');
		$el.find('.box-idn .tip').hide();
		$el.find('.notran').hide();
		$el.find('.list .tit').html("");
		$el.find('.list .box-idn ul').html("");
		$el.find('.tiploading').show();

		Api.getCommon('getIdnHistory', params, function (res) {
			if (res.code === 1 && res.result) {
				let his_orders = res.result.his_orders;

				if (his_orders.length == 0) {
					$el.find('.notran').show();
					$el.find('.tiploading').hide();
					$el.find('.tit').hide();
					$el.find('.list .box-idn ul').html('<div class="blank"></div>');
					return false;
				}


				$el.find('.list .tit').show().html(tit.IDN_game);
				//数据绑定
				$el.find('.notran').hide();
				$el.find('.tiploading').hide();

				let his_html = his_orders.map((item, index) => {
					return `
                        <li class="${Q.oddEven(index)}">
                            <span>${item.betTime}</span>
                            <span>${item.game}</span>
                            <span>${item.transactionNo}</span>
                            <span>${item.periode}</span>
                            <span>${item.betAmount}</span>
                            <span>${item.winAmount}</span>
                            <span>${item.profitAndLoss}</span>
                        </li>
                    `;
				}).join('');

				$el.find('.list .box-idn ul').html(his_html).attr('type', 'IDN_game');
				$el.find('.list .box-idn').removeClass('hide');
				$el.find('.list').addClass('AG_game');
				$el.find('.box-idn .tip').show();


				//合计

				$el.find('.sppinner').hide();


				//翻页
				$el.find('.box-idn .pagging').html(Q.showPagination(params.currPage, params.pageSize, res.result.totalItem, res.result.totalPage));
				$el.find('.box-idn .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.currPage = $(this).attr('page');
					me.getIdnGameHistory($el, params);
				});
				$el.find('.notran').hide();
			}
		});
	},
	getKgameHistory: function ($el, params) {
		var me = this;
		var tit = {
			'kgame': '<span class="kgame-history-col">结算时间</span><span class="kgame-history-col">游戏名称</span><span class="kgame-history-col">牌局ID</span><span class="kgame-history-col">下注额</span><span class="kgame-history-col">有效下注</span><span class="kgame-history-col">返奖</span><span class="kgame-history-col">盈亏</span>',
		};
		$el.find('.box-kgame .pagging').html('');
		$el.find('.box-kgame .tip').hide();
		$el.find('.notran').hide();
		$el.find('.list .tit').html("");
		$el.find('.list .box-kgame ul').html("");
		$el.find('.tiploading').show();

		Api.getCommon('getKgameHistory', params, function (res) {
			if (res.code === 1 && res.result) {
				let his_orders = res.result.his_orders;

				if (his_orders.length === 0) {
					$el.find('.notran').show();
					$el.find('.tiploading').hide();
					$el.find('.tit').hide();
					$el.find('.list .box-kgame ul').html('<div class="blank"></div>');
					return false;
				}

				$el.find('.list .tit').show().html(tit.kgame);
				//数据绑定
				$el.find('.notran').hide();
				$el.find('.tiploading').hide();

				let his_html = his_orders.map((item, index) => {
					return `
                        <li class="${Q.oddEven(index)}">
                            <span class="kgame-history-col ellipsis">${item.betTime}</span>
                            <span class="kgame-history-col ellipsis">${item.game}</span>
                            <span class="kgame-history-col ellipsis">${item.periode}</span>
							<span class="kgame-history-col ellipsis">${item.betAmount}</span>
							<span class="kgame-history-col ellipsis">${item.validBetAmount}</span>
                            <span class="kgame-history-col ellipsis">${item.winAmount}</span>
                            <span class="kgame-history-col ellipsis">${item.profitAndLoss}</span>
                        </li>
                    `;
				}).join('');

				$el.find('.list .box-kgame ul').html(his_html).attr('type', 'kgame');
				$el.find('.list .box-kgame').removeClass('hide');
				$el.find('.list').addClass('AG_game');
				$el.find('.box-kgame .tip').show();

				//合计
				$el.find('.sppinner').hide();

				//翻页
				$el.find('.box-kgame .pagging').html(Q.showPagination(params.currPage, params.pageSize, res.result.totalItem, res.result.totalPage));
				$el.find('.box-kgame .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.currPage = $(this).attr('page');
					me.getKgameHistory($el, params);
				});
				$el.find('.notran').hide();
			}
		});
	},
	getBbinGameHistory: function ($el, params) {
		var me = this;
		var tit = {
			'BBIN_game': '<span class="wd1">投注时间</span><span class="wd1">注单流水号</span><span class="">游戏类型</span><span class="wd1">开奖结果</span><span>下注金额</span><span class="wd1">派彩金额</span><span class="wd1">会员有效投注额</span>'
		};
		$el.find('.box-bbin .pagging').html('');
		$el.find('.box-bbin .tip').hide();
		$el.find('.list .tit').html("");
		$el.find('.list .box-bbin ul').html("");
		$el.find('.notran').hide();
		$el.find('.tiploading').show();

		Api.getCommon('getBbinHistory', params, function (d) {
			if (d.result !== undefined) {
				d = d.result;

				if (d.his_orders.length == 0) {
					$el.find('.notran').show();
					$el.find('.tit').hide();
					$el.find('.tiploading').hide();
					$el.find('.list .box-bbin ul').html('<div class="blank"></div>');
					return false;
				}


				$el.find('.notran').hide();
				$el.find('.tiploading').hide();
				$el.find('.list .tit').show().html(tit.BBIN_game);
				//数据绑定

				var his_html = '';
				var his_orders = d.his_orders;
				$(his_orders).each(function () {
					var i = arguments[0];
					var e = arguments[1];
					his_html += '<li class="' + Q.oddEven(i) + '">\
						<span class="wd1">' + e.gameTime + '</span>\
						<span class="wd1">' + e.orderId + '</span>\
						<span class="">' + e.gameType + '</span>\
						<span class="wd1">' + e.result + '</span>\
						<span class="">' + e.betAmount + '</span>';
					if (e.winAmount > 0) {
						his_html += '<span class="his_red wd1">' + e.winAmount + '</span>';
					} else {
						his_html += '<span class="wd1">' + e.winAmount + '</span>'
					};
					his_html += '<span class="wd1">' + e.validAmount + '</span>';
				});

				$el.find('.list .box-bbin ul').html(his_html).attr('type', 'BBIN_game');
				$el.find('.list .box-bbin').removeClass('hide');
				$el.find('.list').removeClass('trace');
				$el.find('.list').removeClass('BY_game');
				$el.find('.list').removeClass('AG_game').addClass('BBIN_game');
				$el.find('.box-bbin .tip').show();

				//合计

				$el.find('.sppinner').hide();


				//翻页
				$el.find('.box-bbin .pagging').html(Q.showPagination(d.currPage, params.pageSize, d.totalItem, d.totalPage));
				$el.find('.box-bbin .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.currPage = $(this).attr('page');
					me.getBbinGameHistory($el, params);
				});
				$el.find('.notran').hide();
			}
		});
	},
	getHKLHCHistory: function ($el, params) {
		var me = this;
		var tit = {
			'lottery': '<span class="wd1" style="width:120px;">投注时间</span><span class="wd5">彩种</span><span>玩法</span><span class="wd2">期号</span><span>投注内容</span><span style="width:92px;">投注金额</span><span>奖金</span><span class="wd4">状态</span><span class="wd3">追号</span>',
		};
		$el.find('.notran').hide();
		$el.find('.box .tip').hide();
		$el.find('.list .tit').html("");
		$el.find('.tiploading').show();

		$el.find('.box .pagging').html('');

		Api.getCommon('getHistory', params, function (d) {
			if (d === -1) {
				$(".loginlnk").trigger("click");
				return false;
			}
			if (d.result !== undefined) {
				d = d.result;

				if (d.his_orders.length == 0) {
					$el.find('.notran').show();
					$el.find('.tiploading').hide();
					$el.find('.tit').hide();
					$el.find('.list .box ul').html('<div class="blank"></div>');
					return false;
				}

				$el.find('.list .tit').show().html(tit.lottery);
				//数据绑定
				$el.find('.notran').hide();

				var his_html = '';
				var his_orders = d.his_orders;
				$(his_orders).each(function () {
					var i = arguments[0];
					var e = arguments[1];
					his_html += '<li data-id="' + e.orderItemId + '" data-istrace="' + e.istrace + '" class="' + Q.oddEven(i) + '">\
						<span class="wd1" style="width:120px;">' + e.orderTime + '</span>\
						<span class="wd5">' + Q.nameLottery(e.lottery) + '</span>\
						<span title="' + Q.getMethodName(Q.getLottryCode(e.method), e.lottery) + '">' + Q.getMethodName(Q.getLottryCode(e.method), e.lottery) + '</span>\
						<span class="wd2">' + e.issue + '</span>\
						<span class="grid-toggle" alt="号码详情："><div class="wrapbox"><em alt="' + Q.descFormat(e.code, e.method) + '">' + Q.descFormat(e.code, e.method) + '</em></div></span>\
						<span style="width:92px;">' + e.amount + '</span>';

					if (e.awardMoney > 0) {
						his_html += '<span class="his_red">' + e.awardMoney + '</span>\
							<span class="wd4 his_red">' + Q.statusChs(e.status) + '</span>';
					} else {
						his_html += '<span>' + e.awardMoney + '</span>\
							<span class="wd4">' + Q.statusChs(e.status) + '</span>';
					}

					his_html += '<span class="wd3">' + Q.istraceCh(e.istrace) + '</span></li>';
				});

				$el.find('.list .box ul').html(his_html).attr('type', 'lottery');
				$el.find('.list .box').removeClass('hide');
				$el.find('.list .box-trace').addClass('hide');
				$el.find('.list').removeClass('trace').removeClass('AG_game').removeClass("BY_game");

				$el.find('.list .box ul li span.grid-toggle').each(function (i, el) {
					if (!$(el).find('em').attr('alt')) {
						$(el).addClass('grid-hover').find('em').html('<a href="javascript:;" class="hand viewfull">查看全部</a>');
					}
				});

				//合计
				$el.find('.list .box .grid-total .grid-amount').html('¥' + Q.doubleFormat(d.dealMoneyCount));
				$el.find('.list .box .grid-total .grid-award').html('¥' + Q.doubleFormat(d.awardMoneyCount));
				$el.find('.list .box .grid-total').show();
				$el.find('.tiploading').hide();
				$el.find('.sppinner').hide();
				$el.find('.box .tip').show();

				//翻页
				$el.find('.box .pagging').html(Q.showPagination(d.currPage, d.pageSize, d.totalItem, d.totalPage));
				$el.find('.box .pagging a').unbind('click').click(function () {
					$el.find('.sppinner').css({
						'top': 88
					}).show();
					params.currPage = $(this).attr('page');
					me.getHKLHCHistory($el, params);
				});

				// 点击弹出历史记录详情
				$el.find('.list .box ul:eq(0)').off('click').on('click', 'li', function (evt) {
					evt.preventDefault();

					var li = $(this);

					if (li.hasClass('load')) {
						return false;
					}
					li.addClass('load');
					var p = {
						'orderId': li.attr('data-id'),
						'width': 460
					};
					if (li.parent('ul').attr('type') === 'lottery') {
						LowerHistory.popDetail(li.attr('data-istrace'), p);
						li.removeClass('load');
					}
				});

			} else {
				$el.find('.tiploading').hide();
				$el.find('.notran').show();
				$el.find('.list .box ul').html('<div class="blank"></div>');
			}
		});
	},
	toFixedNum: function (num) {
		var stringNum = String(num);
		var strNumArr = stringNum.split('.');
		if (strNumArr.length >= 2) {
			stringNum = strNumArr[1] + '0000';
			num = strNumArr[0] + '.' + stringNum.substring(0, 4) + '';
		} else {
			num = strNumArr[0] + '.0000';
		}
		return "¥" + " " + num;
	}
}