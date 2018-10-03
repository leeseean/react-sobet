var Agency = Agency || {};

Agency = {
    tit: {
        'total': '<span class="username">用户名</span>\
                  <span class="switch large" rel="newUserCount">新增下级<span class="up"></span><span class="down"></span></span>\
                  <span class="switch large" rel="rechargeNum" >充值人次<span class="up"></span><span class="down"></span></span>\
                  <span class="switch" rel="rechargeSum">充值人数(日均)<span class="up"></span><span class="down"></span></span>\
                  <span class="switch large" rel="rechargeCash">充值额<span class="up"></span><span class="down"></span></span>\
                  <span class="switch large" rel="withdrawNum">提现人次<span class="up"></span><span class="down"></span></span>\
                  <span class="switch" rel="withdrawSum">提现人数(日均)<span class="up"></span><span class="down"></span></span>\
		          <span class="switch large" rel="withdrawCash">提现额<span class="up"></span><span class="down"></span></span>\
                  <span class="demand">操作<span class="question" title="只能查询单个用户的充值、提现记录"></span></span>',
        'myDevident': '<span class="dvdCreateTime dvd" rel="bonusCycTitle">分红周期<span class="up"></span><span class="down"></span></span>\
                  <span class="switch dvd" rel="betAmount">日均投注额<span class="up"></span><span class="down"></span></span>\
                  <span class="switch dvd" rel="activePeople">周期内活跃人数<span class="up"></span><span class="down"></span><em class="activePeopleQuestion">?</em></span>\
                  <span class="switch dvd" rel="profitLossCount" >半月亏损额<span class="up"></span><span class="down"></span></span>\
                  <span class="switch dvd" rel="bonusRatio">分红比例<span class="up"></span><span class="down"></span></span>\
                  <span class="switch dvd" rel="bonusAmount">分红金额<span class="up"></span><span class="down"></span><em class="dvdDetailQuestion">?</em></span>\
                  <span class="switch dvd" rel="actionStatusDetail">状态</span>',
        'lowersContract': '<span class="dvdCreateTime lct">下级代理用户名</span>\
                  <span class="switch lct" rel="dvdStartTime">创建时间</span></span>\
                  <span class="switch lct" rel="dvdStartTime">签约时间</span></span>\
                  <span class="switch lct" rel="dvdState" >金额起算日期</span></span>\
                  <span class="switch lct" rel="dvdManipulate">状态</span></span>\
                  <span class="switch lct" rel="dvdManipulate">操作</span></span>',
        'lowerDevidents': '<span class="dvdCreateTime ldd"><input type="checkbox"></span>\
                  <span class="switch ldd" rel="lowerUserName">代理用户名</span></span>\
                  <span class="switch ldd" rel="bonusCycTitle" >日期<span class="up"></span><span class="down"></span></span>\
                  <span class="switch ldd" rel="betAmount">日均投注额<span class="up"></span><span class="down"></span></span>\
                  <span class="switch ldd" rel="activePeople">周期内活跃人数<span class="up"></span><span class="down"></span><em class="activePeopleLowerQuestion">?</em></span>\
                  <span class="switch ldd" rel="profitLossCount" >半月亏损额<span class="up"></span><span class="down"></span></span>\
                  <span class="switch ldd" rel="bonusRatio" >分红比例<span class="up"></span><span class="down"></span></span>\
                  <span class="switch ldd" rel="bonusAmount" >分红金额<span class="up"></span><span class="down"></span><em class="dvdLowerDetailQuestion">?</em></span>\
                  <span class="switch ldd" rel="dvdLowerStatus" >状态</span></span>\
                  <span class="switch ldd" rel="dvdLowerManipulate" >操作</span></span>',
        'myDayDevident': '<span class="dvdCreateTime dvd" rel="date" style="width: 20%;">日期<span class="up"></span><span class="down"></span></span>\
                  <span class="switch dvd" style="width: 13.3%;" rel="betAmount">日工资投注额<span class="up" style="right: 11%"></span><span class="down" style="right: 11%"></span></span>\
                  <span class="switch dvd" style="width: 13.3%;" rel="activeUserCount" >活跃人数<span class="up" style="right: 11%"></span><span class="down" style="right: 11%"></span><em class="queBonusAmount">?</em></span>\
                  <span class="switch dvd" style="width: 13.3%;" rel="bonusRatio">日工资比例<span class="up" style="right: 11%"></span><span class="down" style="right: 11%"></span></span>\
                  <span class="switch dvd" style="width: 13.3%;" rel="betAmountReal" >实际投注额<span class="up" style="right: 10%"></span><span class="down" style="right: 10%"></span></span>\
                  <span class="switch dvd" style="width: 13.3%;" rel="bonusAmount">日工资金额<span class="up" style="right: 11%"></span><span class="down" style="right: 11%"></span></span>\
                  <span class="switch dvd" style="width: 13.3%;" rel="actionStatusDetail">状态</span>',
        'mySifan': `<span class="dvdCreateTime dvd" rel="date" style="width: 20%;">日期<span class="up"></span><span class="down"></span></span>
                  <span class="switch dvd" style="width: 13.3%;" rel="betAmount">私返投注额<span class="up" style="right: 11%"></span><span class="down" style="right: 11%"></span></span>
                  <span class="switch dvd" style="width: 13.3%;" rel="activeUserCount" >活跃人数<span class="up" style="right: 11%"></span><span class="down" style="right: 11%"></span><em class="queBonusAmount">?</em></span>
                  <span class="switch dvd" style="width: 13.3%;" rel="bonusRatio">私返比例<span class="up" style="right: 11%"></span><span class="down" style="right: 11%"></span></span>
                  <span class="switch dvd" style="width: 13.3%;" rel="betAmountReal" >实际投注额<span class="up" style="right: 10%"></span><span class="down" style="right: 10%"></span></span>
                  <span class="switch dvd" style="width: 13.3%;" rel="bonusAmount">私返金额<span class="up" style="right: 11%"></span><span class="down" style="right: 11%"></span></span>
                  <span class="switch dvd" style="width: 13.3%;" rel="actionStatusDetail">状态</span>`,
        'lowersDayContract': '<span class="dvdCreateTime lct">下级代理用户名</span>\
                  <span class="switch lct" rel="createTime">创建日期</span></span>\
                  <span class="switch lct" rel="dvdStartTime">签约时间</span></span>\
                  <span class="switch lct" rel="dvdState" >日工资起算日期</span></span>\
                  <span class="switch lct" rel="dvdManipulate">状态</span></span>\
                  <span class="switch lct" rel="dvdManipulate">操作</span></span>',
        'lowerDayDevidents': '<span class="dvdCreateTime ldd"><input type="checkbox"></span>\
                  <span class="switch ldd" style="width: 11%;" rel="lowerUserName">代理用户名</span></span>\
                  <span class="switch ldd" style="width: 11%;" rel="date" >日期<span class="up"></span><span class="down"></span></span>\
                  <span class="switch ldd" style="width: 11%;" rel="betAmount">日工资投注额<span class="up" style="right: 2%"></span><span class="down" style="right: 2%"></span></span>\
                  <span class="switch ldd" style="width: 11%;" rel="activeUserCount" >活跃人数<span class="up" style="right: 17%"></span><span class="down" style="right: 17%"></span><em class="queBonusDayAmount">?</em></span>\
                  <span class="switch ldd" style="width: 11%;" rel="bonusRatio" >日工资比例<span class="up" style="right: 10%"></span><span class="down" style="right: 10%"></span></span>\
                  <span class="switch ldd" style="width: 11%;" rel="betAmountReal" >实际投注额<span class="up" style="right: 10%"></span><span class="down" style="right: 10%"></span></span>\
                  <span class="switch ldd" style="width: 11%;" rel="bonusAmount" >日工资金额<span class="up" style="right: 4%"></span><span class="down" style="right: 4%"></span></span>\
                  <span class="switch ldd" style="width: 11%;" rel="dvdLowerStatus" >状态</span></span>\
                  <span class="switch ldd" style="width: 8%;" rel="dvdManipulate" >操作</span></span>',
        'lottery': '<span class="username">用户名</span>\
                    <span class="switch lot" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="bonusAmount" >中奖<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="rebateAmount">返点<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="mbrAtvtCash">会员活动<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="agtAtvtCash">代理活动<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="profitAndLoss">盈亏<span class="up"></span><span class="down"></span></span>\
                    <span class="lastT">操作<span class="question" title="只能查询单个用户的游戏记录"></span></span>',
        'ag_game': '<span class="game agtd">用户名</span>\
                     <span class="switch game agtd" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game agtd" rel="validBetAmount">有效投注<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game agtd" rel="bonusAmount">中奖<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game agtd" rel="activityBonus">活动<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game agtd" rel="profitAndLoss">盈亏<span class="up"></span><span class="down"></span></span>\
                     <span class="game agtd">操作<span class="question" title="只能查询单个用户的游戏记录"></span></span>',
        'game': '<span class="game">用户名</span>\
                     <span class="js-head-game switch game" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game" rel="bonusAmount">中奖<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game" rel="activityBonus">活动<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game" rel="profitAndLoss">盈亏<span class="up"></span><span class="down"></span></span>\
                     <span class="game">操作<span class="question" title="只能查询单个用户的游戏记录"></span></span>',
        'sb_game': '<span class="game">用户名</span>\
                     <span class="js-head-game switch game" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game" rel="bonusAmount">中奖<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game" rel="validBetAmount2">有效投注<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game" rel="activityBonus">活动<span class="up"></span><span class="down"></span></span>\
                     <span class="switch game" rel="profitAndLoss">盈亏<span class="up"></span><span class="down"></span></span>\
                     <span class="game">操作<span class="question" title="只能查询单个用户的游戏记录"></span></span>',
        'hklhc_game': '<span class="hklhc-game">用户名</span>\
                     <span class="switch hklhc-game" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                     <span class="switch hklhc-game" rel="bonusAmount">中奖<span class="up"></span><span class="down"></span></span>\
                     <span class="switch hklhc-game" rel="rebateAmount">返点<span class="up"></span><span class="down"></span></span>\
                     <span class="switch hklhc-game" rel="activityBonus">活动<span class="up"></span><span class="down"></span></span>\
                     <span class="switch hklhc-game" rel="profitAndLoss">盈亏<span class="up"></span><span class="down"></span></span>\
                     <span class="hklhc-game">操作<span class="question" title="只能查询单个用户的游戏记录"></span></span>',
	    'third_game': '<span class="game">用户名</span>\
                     <span class="switch small-span" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                     <span class="switch small-span" rel="bonusAmount">中奖<span class="up"></span><span class="down"></span></span>\
                     <span class="switch small-span" rel="activityBonus">活动<span class="question" style="width: 18px; height:18px; right: 12px;" title="其中香港六合彩的活动数据实际为香港六合彩返点数据"></span><span class="up"></span><span class="down"></span></span>\
                     <span class="switch small-span" rel="releaseProfitAndLoss">当月有效盈亏<span class="question" style="width: 18px; height:18px; right: 6px;" title="当月有效盈亏：当月盈亏＜0时，需要担负平台费用（当月盈亏的15%），当月有效盈亏=当月盈亏*85%；\n当月盈亏＞0时，不需要担负平台费用，当月有效盈亏=当月盈亏"></span><span class="up" style="right: -2px;"></span><span class="down" style="right: -2px;"></span></span>\
                     <span class="switch small-span" rel="lastMonthProfitAndLoss">上月结余<span class="question" style="width: 18px; height: 18px; right: 12px;" title="上月结余：上个月第三方游戏汇总的当月总盈亏M。\nM＞0时，上月结余=M；M≤0时，上月结余=0"></span><span class="up"></span><span class="down"></span></span>\
                     <span class="switch small-span" rel="resultProfitAndLoss">当月总盈亏<span class="question" style="width: 18px; height:18px; right: 12px;" title="当月总盈亏：当月有效盈亏与上月结余的合计值"></span><span class="up"></span><span class="down"></span></span>',
        'dayTotal': '<span class="switch" rel="recordTime">日期<span class="up"></span><span class="down"></span></span>\
                    <span class="switch large" rel="newUserCount">新增下级<span class="up"></span><span class="down"></span></span>\
                    <span class="switch" rel="rechargeNum">充值人次<span class="up"></span><span class="down"></span></span>\
                    <span class="switch" rel="rechargeSum">充值人数<span class="up"></span><span class="down"></span></span>\
                    <span class="switch" rel="rechargeCash">充值额<span class="up"></span><span class="down"></span></span>\
                    <span class="switch" rel="withdrawNum">提现人次<span class="up"></span><span class="down"></span></span>\
                     <span class="switch" rel="withdrawSum">提现人数<span class="up"></span><span class="down"></span></span>\
                     <span class="switch" rel="withdrawCash">提现额<span class="up"></span><span class="down"></span></span>',
        'dayLot': '<span class="switch lot" rel="betDate">日期<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="bonusAmount">中奖<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="rebateAmount">返点<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="mbrAtvtCash">会员活动<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="agtAtvtCash">代理活动<span class="up"></span><span class="down"></span></span>\
                    <span class="switch lot" rel="profitAndLoss">盈亏<span class="up"></span><span class="down"></span></span>',
        'dayAgGame': '<span class="switch game agtd" rel="gameTime">日期<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game agtd" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game agtd" rel="validBetAmount">有效投注<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game agtd" rel="bonusAmount">中奖<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game agtd" rel="activityBonus">活动<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game agtd" rel="profitAndLoss">盈亏<span class="up"></span><span class="down"></span></span>',
        'dayGame': '<span class="switch game" rel="gameTime">日期<span class="up"></span><span class="down"></span></span>\
                    <span class="js-head-day-game switch game" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game" rel="bonusAmount">中奖<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game js-activity-bonus" rel="activityBonus">活动<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game" rel="profitAndLoss">盈亏<span class="up"></span><span class="down"></span></span>',
        'daySbGame': '<span class="switch game" rel="gameTime">日期<span class="up"></span><span class="down"></span></span>\
                    <span class="js-head-day-game switch game" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game" rel="bonusAmount">中奖<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game" rel="validBetAmount2">有效投注<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game js-activity-bonus" rel="activityBonus">活动<span class="up"></span><span class="down"></span></span>\
                    <span class="switch game" rel="profitAndLoss">盈亏<span class="up"></span><span class="down"></span></span>',
        'dayHKLHCGame': '<span class="switch hklhc-game" rel="gameTime">日期<span class="up"></span><span class="down"></span></span>\
                    <span class="switch hklhc-game" rel="betAmount">投注<span class="up"></span><span class="down"></span></span>\
                    <span class="switch hklhc-game" rel="bonusAmount">中奖<span class="up"></span><span class="down"></span></span>\
                    <span class="switch hklhc-game" rel="rebateAmount">返点<span class="up"></span><span class="down"></span></span>\
                    <span class="switch hklhc-game" rel="activityBonus">活动<span class="up"></span><span class="down"></span></span>\
                    <span class="switch hklhc-game" rel="profitAndLoss">盈亏<span class="up"></span><span class="down"></span></span>'
    },
    init: function () {
        var me = this;
        var $side = $("#aside");
        var $node = $("#admin_report");
        var tab = $node.children('ul');
        var reportTab = $node.find('ul.reportTab');
        var recordTab = $node.find('ul.recordTab');
        var devideTab = $node.find('ul.devideTab');
        var daySalaryTab = $node.find('ul.daySalaryTab');
        var sifanTab = $node.find('ul.sifanTab');        
        var lowTransfer = $node.find('#panel-tansfer');
        var lowerTransferTab = $node.find('ul.lowerTransferTab');
        var lowTransferIn = $node.find('#panel-tansferIn');
        var lowTransferOut = $node.find('#panel-tansferOut');
        var lowLevelTransfer = $('#panel-levelTransfer');
        var $headAgent = $('.head-agent');
        var $headerMenu = $headAgent.find('.header_menu');
        Report.init();
        Lower.init();
        Agent.init();
        LowerHistory.init();

        //功能切换
        $side.find('ul.agencyTab li').off('click').on('click', function () {
            $(this).addClass('on').siblings().removeClass('on');
            window.location.hash = $(this).attr('name');

            $node.find('.panel-tab').hide();
            var nowtyp = $(this).attr('name');
            var nowtab = $node.find('.panel-tab[name=' + nowtyp + ']');
            if (nowtyp == "searchteam") {
                tab.hide();
                reportTab.show();
                reportTab.find('li').eq(0).addClass('on').siblings().removeClass('on');
                $('.panel-search-month').eq(1).addClass('hide');
                $('.panel-search-month').eq(0).removeClass('hide');
                $node.find('.panel-tab[name=' + nowtyp + '] .list[name="lottery"]').show().siblings('.list').hide();
                $node.find('.panel-tab[name=' + nowtyp + '] .list[name="lottery"] .listhead').html(me.tit.lottery);
                Report.getTeamSearch();
            } else if (nowtyp == "dayReport") {
                tab.hide();
                reportTab.show();
                reportTab.find('li').eq(0).addClass('on').siblings().removeClass('on');
                $node.find('.panel-tab[name=' + nowtyp + '] .list[name="lottery"]').show().siblings('.list').hide();
                $node.find('.panel-tab[name=' + nowtyp + '] .list[name="lottery"] .listhead').html(me.tit.dayLot);
                Report.getDaySearch();
            } else if (nowtyp == "lower") {
                tab.hide();
                Lower.userParam['currPage'] = 1;
                Lower.userParam['selfUserName'] = '';
                Lower.userParam['searchName'] = User.name;
                Lower.getUser();
                Lower.getUserTotal();
            } else if(nowtyp == 'lowLevelTransfer') {
                tab.hide();
                lowLevelTransfer.show();
                Lower.levelTransferParam['page'] = 0;
                Lower.getLevelTransferList(lowLevelTransfer);
            } else if (nowtyp == "lowTansfer") {
                tab.hide();
                lowerTransferTab.show();
                lowerTransferTab.find('li').eq(0).addClass('on').siblings().removeClass("on");
                lowTransferIn.show();
                Lower.transferParam['page'] = 0;
                Lower.getTransferList();
            } else if (nowtyp == "link") {
                tab.hide();
                Agent.showLinkRate();
            } else if (nowtyp == "reg") {
                tab.hide();
                Agent.showLinkRate();
                Agent.showReg();
            } else if (nowtyp == 'LowerRecord') {
                tab.hide();
                recordTab.show();
                recordTab.find('li').eq(0).addClass('on').siblings().removeClass('on');
                $node.find('.panel-tab[name="LowLottery"]').show().siblings('.panel-tab').hide();
                var params = {
                    orderStartTime: $(".date_from").val(),
                    orderEndTime: $(".date_end").val(),
                    lottery: $('.lotteryList').val(),
                    method: $('.methodList').val(),
                    currPage: 1,
                    pageSize: 20,
                    status: $('.status').val(),
                    userName: $('.lowerText').val(),
                    singleStatus: $('.filter .dantiao-lowerBet').val(),
                };
                LowerHistory.searchLowerHistory(params);
            } else if (nowtyp == 'LowTrace') {
                var params = {
                    orderStartTime: $(".date_from_trace").val(),
                    orderEndTime: $(".date_end_trace").val(),
                    lottery: $('.lotteryList').val(),
                    method: $('.methodList').val(),
                    currPage: 1,
                    pageSize: 20,
                    userName: $('.lowerText_trace').val(),
                    singleStatus: $('.filter .dantiao-lowTrace').val(),
                };
                LowerHistory.searchTrace('getLowerTraces', params);
            } else if (nowtyp == 'dividents') {
                tab.hide();
                devideTab.show();
                devideTab.find('li').eq(0).addClass('on').siblings().removeClass('on');
                $node.find('.panel-tab[name=' + nowtyp + '] .list[name="summary"]').show().siblings('.list').hide();
                $node.find('.panel-tab[name=' + nowtyp + '] .list[name="summary"] .listhead').html(me.tit.myContract);
                $("#admin_report li[name=myContract]").trigger("click");
            } else if (nowtyp == 'daySalary') {
                tab.hide();
                daySalaryTab.show();
                daySalaryTab.find('li').eq(0).addClass('on').siblings().removeClass('on');
                $node.find('.panel-tab[name=' + nowtyp + '] .list[name="summary"]').show().siblings('.list').hide();
                $node.find('.panel-tab[name=' + nowtyp + '] .list[name="summary"] .listhead').html(me.tit.myDayContract);
                $("#admin_report li[name=myDayContract]").trigger("click");
            } else if (nowtyp == 'sifan') {
                tab.hide();
                sifanTab.show();
                sifanTab.find('li').eq(0).addClass('on').siblings().removeClass('on');
                $node.find('.panel-tab[name=' + nowtyp + '] .list[name="summary"]').show().siblings('.list').hide();
                $node.find('.panel-tab[name=' + nowtyp + '] .list[name="summary"] .listhead').html(me.tit.myDayContract);
                $("#admin_report li[name=myDayContract]").trigger("click");
            }
            nowtab.show();

            $('#main .back').hide();
           
        });

        //报表头部tab
        $node.find('ul.reportTab li').unbind('click').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            var nowtyp = $side.find('li.on').attr('name');
            var clicktyp = $(this).attr('name');
            Report.teamReportParam = {
                'currPage': 1,
                'page': 1
            };
            Report.dayReportParam = {
                'currPage': 1,
                'page': 1
            };
            if (nowtyp == 'searchteam') {
                switch (clicktyp) {
                    case 'lottery':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="lottery"]').show().siblings('.list').hide();
                        $('.panel-search-month').eq(1).addClass('hide');
                        $('.panel-search-month').eq(0).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="lottery"] .listhead').html(me.tit.lottery);
                        Report.getTeamSearch();
                        break;
                    case 'ag_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="ag_game"]').show().siblings('.list').hide();
                        $('.panel-search-month').eq(1).addClass('hide');
                        $('.panel-search-month').eq(0).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="ag_game"] .listhead').html(me.tit.ag_game);
                        Report.getTeamSearchAG();
                        break;
                    case 'pt_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="pt_game"]').show().siblings('.list').hide();
                        $('.panel-search-month').eq(1).addClass('hide');
                        $('.panel-search-month').eq(0).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="pt_game"] .listhead').html(me.tit.game);
                        Report.getTeamSearchPT();
                        break;
                    case 'by_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="by_game"]').show().siblings('.list').hide();
                        $('.panel-search-month').eq(1).addClass('hide');
                        $('.panel-search-month').eq(0).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="by_game"] .listhead').html(me.tit.game);
                        Report.getTeamSearchBY();
                        break;
                    case 'bbin_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="bbin_game"]').show().siblings('.list').hide();
                        $('.panel-search-month').eq(1).addClass('hide');
                        $('.panel-search-month').eq(0).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="bbin_game"] .listhead').html(me.tit.game);
                        Report.getTeamSearchBBIN();
                        break;
                    case 'sb_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="sb_game"]').show().siblings('.list').hide();
                        $('.panel-search-month').eq(1).addClass('hide');
                        $('.panel-search-month').eq(0).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="sb_game"] .listhead').html(me.tit.sb_game);
                        Report.getTeamSearchSB();
                        break;
                    case 'idn_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="idn_game"]').show().siblings('.list').hide();
                        $('.panel-search-month').eq(1).addClass('hide');
                        $('.panel-search-month').eq(0).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="idn_game"] .listhead').html(me.tit.game);
                        Report.getTeamSearchIDN();
                        break;
                    case 'kgame':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="kgame"]').show().siblings('.list').hide();
                        $('.panel-search-month').eq(1).addClass('hide');
                        $('.panel-search-month').eq(0).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="kgame"] .listhead').html(me.tit.game);
                        Report.getTeamSearchKgame();
                        break;
                    case 'HKLHC':
                        $node.find(".panel-tab[name=" + nowtyp + '] .list[name="hklhc_game"]').show().siblings(".list").hide();
                        $('.panel-search-month').eq(1).addClass('hide');
                        $('.panel-search-month').eq(0).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="hklhc_game"] .listhead').html(me.tit.hklhc_game);
                        Report.getTeamSearchHKLHC();
                        break;
                    case 'third_game':
                        $node.find(".panel-tab[name=" + nowtyp + '] .list[name="third_game"]').show().siblings(".list").hide();
                        $('.panel-search-month').eq(0).addClass('hide');
                        $('.panel-search-month').eq(1).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="third_game"] .listhead').html(me.tit.third_game);
                        Report.getTeamSearchThird();
                        break;
                    case 'summary':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="summary"]').show().siblings('.list').hide();
                        $('.panel-search-month').eq(1).addClass('hide');
                        $('.panel-search-month').eq(0).removeClass('hide');
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="summary"] .listhead').html(me.tit.total);
                        Report.getTeamSearchTotal();
                        break;
                }
            } else {
                switch (clicktyp) {
                    case 'lottery':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="lottery"]').show().siblings('.list').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .listhead').html(me.tit.dayLot);
                        Report.getDaySearch();
                        break;
                    case 'ag_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="ag_game"]').show().siblings('.list').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .listhead').html(me.tit.dayAgGame);
                        Report.getDaySearchAG();
                        break;
                    case 'pt_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="pt_game"]').show().siblings('.list').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .listhead').html(me.tit.dayGame);
                        Report.getDaySearchPT();
                        break;
                    case 'by_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="by_game"]').show().siblings('.list').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .listhead').html(me.tit.dayGame);
                        Report.getDaySearchBY();
                        break;
                    case 'bbin_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="bbin_game"]').show().siblings('.list').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .listhead').html(me.tit.dayGame);
                        Report.getDaySearchBBIN();
                        break;
                    case 'sb_game':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="sb_game"]').show().siblings('.list').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .listhead').html(me.tit.daySbGame);
                        Report.getDaySearchSB();
                        break;
                    case 'idn_game':
                        $node.find(".panel-tab[name=" + nowtyp + '] .list[name="idn_game"]').show().siblings(".list").hide();
                        $node.find(".panel-tab[name=" + nowtyp + "] .listhead").html(me.tit.dayGame);
                        Report.getDaySearchIDN();
                        break;
                    case 'kgame':
                        $node.find(".panel-tab[name=" + nowtyp + '] .list[name="kgame"]').show().siblings(".list").hide();
                        $node.find(".panel-tab[name=" + nowtyp + "] .listhead").html(me.tit.dayGame);
                        Report.getDaySearchKgame();
                        break;
                    case 'HKLHC':
                        $node.find(".panel-tab[name=" + nowtyp + '] .list[name="hklhc_game"]').show().siblings(".list").hide();
                        $node.find(".panel-tab[name=" + nowtyp + "] .listhead").html(me.tit.dayHKLHCGame);
                        Report.getDaySearchHKLHC();
                        break;
                    case 'third_game':
                        $node.find(".panel-tab[name=" + nowtyp + '] .list[name="third_game"]').show().siblings(".list").hide();
                        $node.find(".panel-tab[name=" + nowtyp + "] .listhead").html(me.tit.dayGame);
                        Report.getDaySearchThird();
                        break;
                    case 'summary':
                        $node.find('.panel-tab[name=' + nowtyp + '] .list[name="summary"]').show().siblings('.list').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .listhead').html(me.tit.dayTotal);
                        Report.getDaySearchTotal();
                        break;
                }
            }
            
        });
        //下级游戏记录头部tab
        $node.find('ul.recordTab li').unbind('click').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            var clicktyp = $(this).attr('name');
            switch (clicktyp) {
                case 'lottery':
                    $node.find('.panel-tab[name=LowLottery]').show().siblings('.panel-tab').hide();
                    var params = {
                        orderStartTime: $(".date_from").val(),
                        orderEndTime: $(".date_end").val(),
                        lottery: $('.lotteryList').val(),
                        method: $('.methodList').val(),
                        currPage: 1,
                        pageSize: 20,
                        status: $('.status').val(),
                        userName: $('.lowerText').val()
                    };
                    LowerHistory.searchLowerHistory(params);
                    break;
                case 'lottery_trace':
                    $node.find('.panel-tab[name=LowTrace]').show().siblings('.panel-tab').hide();
                    var params = {
                        orderStartTime: $(".date_from_trace").val(),
                        orderEndTime: $(".date_end_trace").val(),
                        lottery: $('.lotteryList').val(),
                        method: $('.methodList').val(),
                        currPage: 1,
                        pageSize: 20,
                        userName: $('.lowerText_trace').val()
                    };
                    LowerHistory.searchTrace('getLowerTraces', params);
                    break;
                case 'ag_game':
                    $node.find('.panel-tab[name=LowAGgame]').show().siblings('.panel-tab').hide();
                    var params = {
                        startTime: $(".date_from_AGgame").val(),
                        endTime: $(".date_end_AGgame").val(),
                        currPage: 1,
                        pageSize: 20,
                        userName: $('.lowerText_AGgame').val(),
                        queryType: 2
                    };
                    LowerHistory.searchLowerAGgame(params);
                    break;
                case 'pt_game':
                    $node.find('.panel-tab[name=LowPTgame]').show().siblings('.panel-tab').hide();
                    var params = {
                        orderStartTime: $(".date_from_PTgame").val(),
                        orderEndTime: $(".date_end_PTgame").val(),
                        currPage: 1,
                        pageSize: 20,
                        userName: $('.lowerText_PTgame').val()
                    };
                    LowerHistory.searchLowerPTgame(params);
                    break;
                case 'by_game':
                    $node.find('.panel-tab[name=LowBYgame]').show().siblings('.panel-tab').hide();
                    var params = {
                        orderStartTime: $(".date_from_BYgame").val(),
                        orderEndTime: $(".date_end_BYgame").val(),
                        currPage: 1,
                        pageSize: 20,
                        userName: $('.lowerText_BYgame').val()
                    };
                    LowerHistory.searchLowerBYgame(params);
                    break;
                case 'bbin_game':
                    $node.find('.panel-tab[name=LowBBINgame]').show().siblings('.panel-tab').hide();
                    var params = {
                        orderStartTime: $(".date_from_BBINgame").val(),
                        orderEndTime: $(".date_end_BBINgame").val(),
                        currPage: 1,
                        pageSize: 20,
                        userName: $('.lowerText_BBINgame').val()
                    };
                    LowerHistory.searchLowerBBINgame(params);
                    break;
                case 'sb_game':
                    $node.find('.panel-tab[name=LowSBgame]').show().siblings('.panel-tab').hide();
                    var params = {
                        orderStartTime: $(".date_from_SBgame").val(),
                        orderEndTime: $(".date_end_SBgame").val(),
                        currPage: 1,
                        pageSize: 20,
                        userName: $('.lowerText_SBgame').val(),
                        gameType: $("select[name='sbGameList']").val(),
                        settleStatus: $(".sb-status").val(),
                    };
                    LowerHistory.searchLowerSBgame(params);
                    break;
                case 'idn_game':
                    $node.find('.panel-tab[name=LowIDNgame]').show().siblings('.panel-tab').hide();
                    var params = {
                        orderStartTime: $(".date_from_IDNgame").val(),
                        orderEndTime: $(".date_end_IDNgame").val(),
                        currPage: 1,
                        pageSize: 20,
                        userName: $('.lowerText_IDNgame').val(),
                        gameType: $("select[name='idnGameList']").val(),
                    };
                    LowerHistory.searchLowerIDNgame(params);
                    break;
                case 'kgame':
                    $node.find('.panel-tab[name=LowKgame]').show().siblings('.panel-tab').hide();
                    var params = {
                        orderStartTime: $(".date_from_Kgame").val(),
                        orderEndTime: $(".date_end_Kgame").val(),
                        currPage: 1,
                        pageSize: 20,
                        userName: $('.lowerText_Kgame').val(),
                        gameType: $("select[name='kameList']").val(),
                    };
                    LowerHistory.searchLowerKgame(params);
                    break;
                case 'HKLHC':
                    $node.find('.panel-tab[name=LowerHKLHC]').show().siblings('.panel-tab').hide();
                    var params = {
                        lottery: 'XGLHC',
                        orderStartTime: $(".date_from_HKLHC").val(),
                        orderEndTime: $(".date_end_HKLHC").val(),
                        currPage: 1,
                        pageSize: 20,
                        status: $('#LowerHKLHC .status').val(),
                        userName: $('.lowerText_HKLHC').val(),
                    };
                    LowerHistory.searchLowerHKLHC(params);
                    break;
            }
            
        });
        //分红管理头部tab
        $node.find('ul.devideTab li').unbind('click').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            var nowtyp = $side.find('li.on').attr('name');
            var clicktyp = $(this).index();
            if (nowtyp === "dividents") {
                switch (clicktyp) {
                    case 0:
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myContract"]').show().siblings('.item').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myContract"] .listhead').html(me.tit.myContract);
                        Contract.getMyContract(1);
                        break;
                    case 1:
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myDevident"]').show().siblings('.item').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myDevident"] .listhead').html(me.tit.myDevident);
                        Contract.getMyDevident(1);
                        break;
                    case 2:
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="lowersContract"]').show().siblings('.item').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="lowersContract"] .listhead').html(me.tit.lowersContract);
                        Contract.getLowersContract(1);
                        break;
                    case 3:
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="lowerDevidents"]').show().siblings('.item').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="lowerDevidents"] .listhead').html(me.tit.lowerDevidents);
                        Contract.getLowerDevidents(1);
                        break;
                }
            }
            
        });
        //分红日工资管理头部tab
        $node.find('ul.daySalaryTab li').unbind('click').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            var nowtyp = $side.find('li.on').attr('name');
            var clicktyp = $(this).index();
            if (nowtyp === "daySalary") {
                switch (clicktyp) {
                    case 0:
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myDayContract"]').show().siblings('.item').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myDayContract"] .listhead').html(me.tit.myDayContract);
                        Contract.getMyDayContract(1);
                        break;
                    case 1:
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myDayDevident"]').show().siblings('.item').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myDayDevident"] .listhead').html(me.tit.myDayDevident);
                        Contract.getMyDayDevident(1);
                        break;
                    case 2:
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="lowersDayContract"]').show().siblings('.item').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="lowersDayContract"] .listhead').html(me.tit.lowersDayContract);
                        Contract.getLowersDayContract(1);
                        break;
                    case 3:
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="lowerDayDevidents"]').show().siblings('.item').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="lowerDayDevidents"] .listhead').html(me.tit.lowerDayDevidents);
                        Contract.getLowerDayDevidents(1);
                        break;
                }
            }
           
        });
        //私返管理头部tab
        $node.find('ul.sifanTab li').unbind('click').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            var nowtyp = $side.find('li.on').attr('name');
            var clicktyp = $(this).index();
            if (nowtyp === "sifan") {
                switch (clicktyp) {
                    case 0:
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myDayContract"]').show().siblings('.item').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myDayContract"] .listhead').html(me.tit.myDayContract);
                        Contract.getSifanContract(1);
                        break;
                    case 1:
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myDayDevident"]').show().siblings('.item').hide();
                        $node.find('.panel-tab[name=' + nowtyp + '] .item[name="myDayDevident"] .listhead').html(me.tit.mySifan);
                        Contract.getSifan(1);
                        break;
                }
            }
           
        });
        $node.find('ul.lowerTransferTab li').unbind('click').click(function () {
            $(this).addClass('on').siblings().removeClass('on');
            var clickTyp = $(this).index();
            switch (clickTyp) {
                case 0:
                    $node.find('.panel-tab[name=lowerTansferIn]').show().siblings('.panel-tab').hide();
                    Lower.getTransferList();
                    break;
                case 1:
                    $node.find('.panel-tab[name=lowerTansferOut]').show().siblings('.panel-tab').hide();
                    Lower.getTransferListOut();
                    break;
            }
            
        });

        function showTab(){
            var href = window.location.href;
            if (href.indexOf("#dayReport") >= 0) {
                $(".agencyTab li[name=dayReport]").trigger("click");
            } else if (href.indexOf("#lower") >= 0) {
                $(".agencyTab li[name=lower]").trigger("click");
            } else if (href.indexOf("#reg") >= 0) {
                $(".agencyTab li[name=reg]").trigger("click");
            } else if (href.indexOf("#link") >= 0) {
                $(".agencyTab li[name=link]").trigger("click");
            } else if (href.indexOf("#LowerRecord") >= 0) {
                $(".agencyTab li[name=LowerRecord]").trigger("click");
            } else if(href.indexOf("#lowLevelTransfer") >= 0) {
                $(".agencyTab li[name=lowLevelTransfer]").click();
            } else if (href.indexOf("#lowTansfer") >= 0) {
                $(".agencyTab li[name=lowTansfer]").click();
            } else if (href.indexOf("#dividents") >= 0) {
                $(".agencyTab li[name=dividents]").trigger("click");
            } else if (href.indexOf("#daySalary") >= 0) {
                $(".agencyTab li[name=daySalary]").trigger("click");
            } else if (href.indexOf("#sifan") >= 0) {
                $(".agencyTab li[name=sifan]").trigger("click");
            } else {
                $(".agencyTab li[name=searchteam]").trigger("click");
            }
        }
        showTab();
        //点击头部导航切换tab
        $headAgent.find('a').unbind('click').click(function(){
            $headerMenu.css('display','none');
            setTimeout(function(){
                $headerMenu.css('display','');
                showTab();
            },100)
            
        })
    }
};
//解决诡异的IE浏览器网页 title 会带上地址栏 #hash 值的问题
(function () {
    var rememberTitle = document.title; //记住原有的窗口标题
    try {
        document.attachEvent('onpropertychange', function () {
            if (document.title !== rememberTitle) {
                document.title = rememberTitle;
            }
        });
    } catch (e) {}
})();