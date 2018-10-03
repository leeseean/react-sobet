/**
 * Created by thomas on 2016/10/29.
 */
var LowerHistory = LowerHistory || {};

LowerHistory = {
    w: 1070,
    h: 560,
    maxrate: 7.5,
    usermax: 6,
    tit: {
        'lottery': '<span class="wd1">投注时间</span><span class="wd5">彩种</span><span>玩法</span><span class="wd2">期号</span><span>投注内容</span><span>投注金额</span><span>奖金</span><span class="wd4">状态</span><span class="wd3">追号</span>',
        'lowerlottery': '<span class="wd1">投注时间</span><span class="wd4">用户名</span><span class="wd6">彩种</span><span class="wd6">玩法</span><span class="wd6">期号</span><span class="wd6">投注内容</span><span class="wd6">投注金额</span><span class="wd6">奖金</span><span class="wd3">状态</span><span class="wd3 js-tit-trace">追号</span>',
        'trace': '<span class="wd1">追号时间</span><span>彩种</span><span class="wd5">用户名</span><span>玩法</span><span class="wd2">开始期数</span><span>投注内容</span><span style="width:70px;">总金额</span><span style="width:70px;">完成金额</span><span style="width:70px;">中奖即停</span><span class="wd3">状态</span>',
        'AG_game': '<span class="">投注时间</span><span>会员账号</span><span>注单流水号</span><span class="">游戏类型</span><span>游戏局号</span><span>投注金额</span><span>盈亏金额</span><span>订单状态</span>',
        'BY_game': '<span class="wd1">开始时间</span><span class="wd1">结束时间</span><span>会员账号</span><span class="wd3">房间号</span><span>盈亏</span><span>投注额度</span><span>中奖</span><span>jackpot中奖</span><span>第一名奖励</span>',
        'PT_game': '<span class="">游戏时间</span><span>会员账号</span><span>游戏类型</span><span class="">游戏名称</span><span>游戏局号</span><span>投注金额</span><span>派奖金额</span><span>奖池派奖金额</span>',
        "BBIN_game": '<span  class="wd1">投注时间</span><span class="wd4">用户名</span><span  class="wd1">注单流水号</span><span class="wd4">游戏类型</span><span class="wd2">开奖结果</span><span>下注金额</span><span class="wd4">派彩金额</span><span  class="wd2">会员有效投注额</span>',
        'SB_game': '<span class="transactionTime">下注时间</span><span class="userName">用户名</span><span class="sportTypeName">游戏类型</span><span class="competitionDetail">事项</span><span class="orderDetail">详情</span><span class="settleStatusName">结算状态</span><span class="stake">投注额</span><span class="validStake">输/赢</span><span class="validBetAmount2">有效投注</span><span class="winLoseAmount">中奖金额</span>',
        'IDN_game': '<span>用户名</span><span>结算时间</span><span>游戏类型</span><span>房间号</span><span>牌局</span><span>投注金额</span><span>返奖</span><span>输/赢</span>',
        'kgame': '<span class="kgame-lower-head-col">用户名</span><span class="kgame-lower-head-col">结算时间</span><span class="kgame-lower-head-col">游戏类型</span><span class="kgame-lower-head-col">牌局ID</span><span class="kgame-lower-head-col">下注额</span><span class="kgame-lower-head-col">有效投注</span><span class="kgame-lower-head-col">返奖</span><span class="kgame-lower-head-col">盈亏</span>'
    },
    selectParam: {},

    init: function () {
        var me = this;
        me.initSelect();
        me.initDatePicker();
        me.initEvent();
    },

    getHistoryParams: function () {
        var me = this;
        Api.getCommon('getHistoryParams', {}, function (res) {
            if (!res.result) {
                return false;
            }
            me.selectParam = res.result;
            me.initSelect();
        });
    },

    initSelect: function () {
        var me = this;

        var lt_option = '<option value="" selected="selected">所有彩种</option>';

        var nameDict = Q.nameDict();
        for (var i in nameDict) {
            lt_option += '<option value="' + i + '">' + nameDict[i] + '</option>';
        }
        $('.report-pop .lotteryList').html(lt_option);
    },

    initDatePicker: function () {
        var $node = $('.report-pop');
        var date = new Date();
        var dateStart = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + ' 00:00';
        var dateEnd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + ' 23:59';

        var $from = $node.find(".date_from");
        var $end = $node.find(".date_end");
        var $from_trace = $node.find(".date_from_trace");
        var $end_trace = $node.find(".date_end_trace");
        var $from_AGgame = $node.find(".date_from_AGgame");
        var $end_AGgame = $node.find(".date_end_AGgame");
        var $from_PTgame = $node.find(".date_from_PTgame");
        var $end_PTgame = $node.find(".date_end_PTgame");
        var $from_BYgame = $node.find(".date_from_BYgame");
        var $end_BYgame = $node.find(".date_end_BYgame");
        var $from_BBINgame = $node.find(".date_from_BBINgame");
        var $end_BBINgame = $node.find(".date_end_BBINgame");
        var $from_SBgame = $node.find(".date_from_SBgame");
        var $end_SBgame = $node.find(".date_end_SBgame");
        var $from_IDNgame = $node.find(".date_from_IDNgame");
        var $end_IDNgame = $node.find(".date_end_IDNgame");
        var $from_Kgame = $node.find(".date_from_Kgame");
        var $end_Kgame = $node.find(".date_end_Kgame");
        var $from_HKLHC = $node.find(".date_from_HKLHC");
        var $end_HKLHC = $node.find(".date_end_HKLHC");
        $from_HKLHC.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateStart,
            type: ':first',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_HKLHC li.on').removeClass('on');
            }
        });
        $end_HKLHC.datetimepicker({
            id: 'dp_end',
            lang: 'zh',
            value: '+1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_HKLHC li.on').removeClass('on');
            }
        });
        $from.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateStart,
            type: ':first',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate li.on').removeClass('on');
            }
        });
        $end.datetimepicker({
            id: 'dp_end',
            lang: 'zh',
            value: '+1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate li.on').removeClass('on');
            }
        });
        $from_trace.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateStart,
            type: ':first',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_trace li.on').removeClass('on');
            }
        });
        $end_trace.datetimepicker({
            id: 'dp_end',
            lang: 'zh',
            value: '+1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_trace li.on').removeClass('on');
            }
        });
        $from_AGgame.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateStart,
            type: ':first',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_AGgame li.on').removeClass('on');
            }
        });
        $end_AGgame.datetimepicker({
            id: 'dp_end',
            lang: 'zh',
            value: '+1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_AGgame li.on').removeClass('on');
            }
        });
        $from_PTgame.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateStart,
            type: ':first',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_PTgame li.on').removeClass('on');
            }
        });
        $end_PTgame.datetimepicker({
            id: 'dp_end',
            lang: 'zh',
            value: '+1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_PTgame li.on').removeClass('on');
            }
        });
        $from_BYgame.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateStart,
            type: ':first',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_BYgame li.on').removeClass('on');
            }
        });
        $end_BYgame.datetimepicker({
            id: 'dp_end',
            lang: 'zh',
            value: '+1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_BYgame li.on').removeClass('on');
            }
        });
        $from_BBINgame.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateStart,
            type: ':first',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_BBINgame li.on').removeClass('on');
            }
        });
        $end_BBINgame.datetimepicker({
            id: 'dp_end',
            lang: 'zh',
            value: '+1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_BBINgame li.on').removeClass('on');
            }
        });
        $from_SBgame.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateStart,
            type: ':first',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_SBgame li.on').removeClass('on');
            }
        });
        $end_SBgame.datetimepicker({
            id: 'dp_end',
            lang: 'zh',
            value: '+1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_SBgame li.on').removeClass('on');
            }
        });
        $from_IDNgame.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateStart,
            type: ':first',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_IDNgame li.on').removeClass('on');
            }
        });
        $end_IDNgame.datetimepicker({
            id: 'dp_end',
            lang: 'zh',
            value: '+1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_IDNgame li.on').removeClass('on');
            }
        });
        $from_Kgame.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateStart,
            type: ':first',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_Kgame li.on').removeClass('on');
            }
        });
        $end_Kgame.datetimepicker({
            id: 'dp_end',
            lang: 'zh',
            value: '+1970/01/01',
            minDate: '-1970/03/31',
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate_Kgame li.on').removeClass('on');
            }
        });
    },

    initEvent: function () {
        var me = this;

        $('.quickDate_HKLHC').on('click', 'li', function () {
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

            $(".date_from_HKLHC").val(dateStart);
            $(".date_end_HKLHC").val(dateEnd);
        });

        $('.quickDate').on('click', 'li', function () {
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

            $(".date_from").val(dateStart);
            $(".date_end").val(dateEnd);
        });

        $('.quickDate_trace').on('click', 'li', function () {
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

            $(".date_from_trace").val(dateStart);
            $(".date_end_trace").val(dateEnd);
        });

        $('.quickDate_PTgame').on('click', 'li', function () {
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

            $(".date_from_PTgame").val(dateStart);
            $(".date_end_PTgame").val(dateEnd);
        });

        $('.quickDate_AGgame').on('click', 'li', function () {
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

            $(".date_from_AGgame").val(dateStart);
            $(".date_end_AGgame").val(dateEnd);
        });
        $('.quickDate_BYgame').on('click', 'li', function () {
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

            $(".date_from_BYgame").val(dateStart);
            $(".date_end_BYgame").val(dateEnd);
        });
        $('.quickDate_BBINgame').on('click', 'li', function () {
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

            $(".date_from_BBINgame").val(dateStart);
            $(".date_end_BBINgame").val(dateEnd);
        });
        $('.quickDate_SBgame').on('click', 'li', function () {
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

            $(".date_from_SBgame").val(dateStart);
            $(".date_end_SBgame").val(dateEnd);
        });

        $('.quickDate_IDNgame').on('click', 'li', function () {
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

            $(".date_from_IDNgame").val(dateStart);
            $(".date_end_IDNgame").val(dateEnd);
        });

        $('.quickDate_Kgame').on('click', 'li', function () {
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

            $(".date_from_Kgame").val(dateStart);
            $(".date_end_Kgame").val(dateEnd);
        });

        $('a.query').unbind('click').click(function () {
            var mode = $('.recordTab li.on').attr('name');
            var params = {
                currPage: 1,
                pageSize: 20
            };
            if (mode === 'lottery') {
                params.lottery = $('.report-pop .lotteryList').val();
                params.orderStartTime = $(".date_from").val();
                params.orderEndTime = $(".date_end").val();
                params.status = $('.status').val();
                params.userName = $('.lowerText').val();
                params.singleStatus = $('.filter .dantiao-lowerBet').val();
                me.searchLowerHistory(params);
            } else if (mode === 'lottery_trace') {
                params.lottery = $('.report-pop .lotteryList').val();
                params.orderStartTime = $(".date_from_trace").val();
                params.orderEndTime = $(".date_end_trace").val();
                params.userName = $('.lowerText_trace').val();
                params.singleStatus = $('.filter .dantiao-lowTrace').val();
                me.searchTrace('getLowerTraces', params);
            } else if (mode === 'ag_game') {
                params.startTime = $(".date_from_AGgame").val();
                params.endTime = $(".date_end_AGgame").val();
                params.userName = $('.lowerText_AGgame').val();
                params.queryType = 2;
                LowerHistory.searchLowerAGgame(params);
            } else if (mode === 'pt_game') {
                params.orderStartTime = $(".date_from_PTgame").val();
                params.orderEndTime = $(".date_end_PTgame").val();
                params.userName = $('.lowerText_PTgame').val();
                LowerHistory.searchLowerPTgame(params);
            } else if (mode === 'by_game') {
                params.orderStartTime = $(".date_from_BYgame").val();
                params.orderEndTime = $(".date_end_BYgame").val();
                params.userName = $('.lowerText_BYgame').val();
                LowerHistory.searchLowerBYgame(params);
            } else if (mode === 'bbin_game') {
                params.orderStartTime = $(".date_from_BBINgame").val();
                params.orderEndTime = $(".date_end_BBINgame").val();
                params.userName = $('.lowerText_BBINgame').val();
                LowerHistory.searchLowerBBINgame(params);
            } else if (mode === 'sb_game') {
                params.orderStartTime = $(".date_from_SBgame").val();
                params.orderEndTime = $(".date_end_SBgame").val();
                params.userName = $('.lowerText_SBgame').val();
                params.gameType = $("select[name='sbGameList']").val();
                params.settleStatus = $(".sb-status").val();
                LowerHistory.searchLowerSBgame(params);
            } else if (mode === 'idn_game') {
                params.orderStartTime = $(".date_from_IDNgame").val();
                params.orderEndTime = $(".date_end_IDNgame").val();
                params.userName = $('.lowerText_IDNgame').val();
                params.gameType = $("select[name='idnGameList']").val();
                LowerHistory.searchLowerIDNgame(params);
            } else if (mode === 'HKLHC') {
                params.lottery = 'XGLHC';
                params.orderStartTime = $(".date_from_HKLHC").val();
                params.orderEndTime = $(".date_end_HKLHC").val();
                params.status = $('#LowerHKLHC .status').val();
                params.userName = $('.lowerText_HKLHC').val();
                me.searchLowerHKLHC(params);
            } else if (mode === 'kgame') {
                params.orderStartTime = $(".date_from_Kgame").val();
                params.orderEndTime = $(".date_end_Kgame").val();
                params.userName = $('.lowerText_Kgame').val();
                params.gameType = $("select[name='kgameList']").val();
                LowerHistory.searchLowerKgame(params);
            }
            
        });
    },

    //查询下级投注
    searchLowerHistory: function (params) {
        var me = this;
        var $el = $('.report-pop');
        $el.find('.notran').hide();
        $el.find('.list .box ul').hide();
        $el.find('.box .pagging').html('');
        var searchName = $('#LowerLottery > div.lowerhistory > input.lowerText');
        $el.find('.spppinner').css({
            'top': 88
        }).show(); //loading效果

        Api.getCommon('getLowerHistory', params, function (d) {
            $el.find('.list .tit').html(me.tit.lowerlottery);
            
            if (d === -1) {
                $el.find('.spppinner').hide(); //loading效果
                $(".loginlnk").trigger("click");
                return false;
            }
            if (d.code == 0 || d.code == -1 || d.code == 1001) {
                $el.find('.spppinner').hide(); //loading效果
                $el.find('#LowerLottery .notran>h6').text(d.msg);
                // $el.find('.notran').show();
                $el.find('.list .box ul').hide().html('<div class="blank"></div>');
                $el.find('.box .pagging').html('');
                return;
            }
            var res = d;
            if (d.result !== undefined) {
                d = d.result;

                if (d.his_orders.length == 0) {
                    $el.find('.spppinner').hide(); //loading效果
                    if (searchName.val()) {
                        $el.find('#LowerLottery .notran>h6').text('您搜索的下级用户在该时间段内无投注记录');
                    } else { //搜索下级输入框为空表示所有下级
                        $el.find('#LowerLottery .notran>h6').text('您的下级在该时间段内无投注记录');
                    }
                    $el.find('.notran').show();
                    $el.find('.list .box ul').hide().html('<div class="blank"></div>');
                    $el.find('.box .pagging').html('');
                    return false;
                }


                
                //数据绑定
                $el.find('.notran').hide();
                var list_html = '';
                $(d.his_orders).each(function () {
                    var obj = arguments[1];
                    list_html += '<li data-id="' + obj.orderItemId + '" data-istrace="' + obj.istrace + '" class="' + Q.oddEven(arguments[0]) + '">\
	  	      		<span class="wd1">' + obj.orderTime + '</span>\
	  	      		<span class="wd4">' + obj.userName + '</span>\
	  	      		<span class="wd6">' + Q.nameLottery(obj.lottery) + '</span>\
	  	      		<span class="wd6" title="' + Q.getMethodName(Q.getLottryCode(obj.method), obj.lottery) + '">' + Q.getMethodName(Q.getLottryCode(obj.method), obj.lottery) + '</span>\
	  	      		<span class="wd6">' + obj.issue + '</span>\
	  	      		<span class="grid-toggle" alt="号码详情："><div class="wrapbox"><em>' + Q.descFormat(obj.code, obj.method) + '</em></div></span>\
	  	      		<span class="wd6">' + obj.amount + '</span>';
                    if (obj.awardMoney > 0) {
                        list_html += '<span class="wd6 his_red">' + obj.awardMoney + '</span>\
                                      <span class="wd3 his_red">' + Q.statusChs(obj.status) + '</span>';
                    } else {
                        list_html += '<span class="wd6">' + obj.awardMoney + '</span>\
                                      <span class="wd3">' + Q.statusChs(obj.status) + '</span>';
                    }
                    list_html += '<span class="wd3">' + Q.istraceCh(obj.istrace) + '</span></li>';
                });
                // $el.find('.spppinner').hide();
                $el.find('.list .box ul').html(list_html).attr('type', 'lowerlottery').show();
                $el.find('.list .box').removeClass('hide');
                // $el.find('.list .box-trace').addClass('hide');

                $el.find('.list .box ul li span.grid-toggle').each(function (i, el) {
                    if (!$(el).find('em').text()) {
                        $(el).addClass('grid-hover').find('em').html('<a href="javascript:;" class="hand viewfull">查看全部</a>');
                    }
                });

                //合计
                $el.find('.list .box .grid-total .grid-amount').html(Q.doubleFormat(d.dealMoneyCount));
                $el.find('.list .box .grid-total .grid-award').html(Q.doubleFormat(d.awardMoneyCount));
                $el.find('.list .box .grid-total').show();
                setTimeout(function () {
                    $el.find('.spppinner').hide(); //延时让可以看到loading效果
                }, 500);
                //翻页
                $el.find('.box .pagging').html(Q.showPagination(d.currPage, d.pageSize, d.totalItem, d.totalPage));
                $el.find('.box .pagging a').unbind('click').click(function () {
                    params.currPage = $(this).attr('page');
                    me.searchLowerHistory(params);
                });

                // 点击弹出历史记录详情
                $el.find('.list .box ul:eq(0)').off('click').on('click', 'li', function (evt) {
                    evt.preventDefault();

                    var p = {
                        'orderId': $(this).attr('data-id'),
                        'width': 460
                    };
                    if ($(this).parent('ul').attr('type') === 'lowerlottery') {
                        me.popDetail($(this).attr('data-istrace'), p, params);
                    }
                });
            }
        });
    },
    //查询香港六合彩
    searchLowerHKLHC: function (params) {
        var me = this;
        var $el = $('.report-pop');
        $el.find('.notran').hide();
        $el.find('.list .box-XGLHC ul').hide();
        $el.find('.box-XGLHC .pagging').html('');
        var searchName = $('#LowerHKLHC > div.lowerhistory > input.lowerText_HKLHC');
        $el.find('.spppinner').css({
            'top': 88
        }).show(); //loading效果

        Api.getCommon('getLowerHistory', params, function (d) {
            $el.find('.list .tit').html(me.tit.lowerlottery);
            $('.js-tit-trace').hide();
            if (d === -1) {
                $el.find('.spppinner').hide(); //loading效果
                $(".loginlnk").trigger("click");
                return false;
            }
            if (d.code == 0 || d.code == -1 || d.code == 1001) {
                $el.find('.spppinner').hide(); //loading效果
                $el.find('#LowerHKLHC .notran>h6').text(d.msg).show();
                // $el.find('.notran').show();
                $el.find('.list .box-XGLHC ul').hide().html('<div class="blank"></div>');
                $el.find('.box-XGLHC .pagging').html('');
                return;
            }
            var res = d;
            if (d.result !== undefined) {
                d = d.result;

                if (d.his_orders.length === 0) {
                    $el.find('.spppinner').hide(); //loading效果
                    if (searchName.val()) {
                        $el.find('#LowerHKLHC .notran>h6').text('您搜索的下级用户在该时间段内无投注记录');
                    } else { //搜索下级输入框为空表示所有下级
                        $el.find('#LowerHKLHC .notran>h6').text('您的下级在该时间段内无投注记录');
                    }
                    $el.find('.notran').show();
                    $el.find('.list .box-XGLHC ul').hide().html('<div class="blank"></div>');
                    $el.find('.box-XGLHC .pagging').html('');
                    return false;
                }


                
                //数据绑定
                $el.find('.notran').hide();
                var list_html = '';
                $(d.his_orders).each(function () {
                    var obj = arguments[1];
                    list_html += '<li data-id="' + obj.orderItemId + '" data-istrace="' + obj.istrace + '" class="' + Q.oddEven(arguments[0]) + '">\
	  	      		<span class="wd1">' + obj.orderTime + '</span>\
	  	      		<span class="wd4">' + obj.userName + '</span>\
	  	      		<span class="wd6">' + Q.nameLottery(obj.lottery) + '</span>\
	  	      		<span class="wd6" title="' + Q.getMethodName(Q.getLottryCode(obj.method), obj.lottery) + '">' + Q.getMethodName(Q.getLottryCode(obj.method), obj.lottery) + '</span>\
	  	      		<span class="wd6">' + obj.issue + '</span>\
	  	      		<span class="grid-toggle" alt="号码详情："><div class="wrapbox"><em>' + Q.descFormat(obj.code, obj.method) + '</em></div></span>\
	  	      		<span class="wd6">' + obj.amount + '</span>';
                    if (obj.awardMoney > 0) {
                        list_html += '<span class="wd6 his_red">' + obj.awardMoney + '</span>\
                                      <span class="wd3 his_red">' + Q.statusChs(obj.status) + '</span>';
                    } else {
                        list_html += '<span class="wd6">' + obj.awardMoney + '</span>\
                                      <span class="wd3">' + Q.statusChs(obj.status) + '</span>';
                    }
                    list_html += '<span class="wd3" style="display:none;">' + Q.istraceCh(obj.istrace) + '</span></li>';
                });
                $el.find('.list .box-XGLHC ul').html(list_html).attr('type', 'lowerlottery').show();
                $el.find('.list .box-XGLHC').removeClass('hide');

                $el.find('.list .box-XGLHC ul li span.grid-toggle').each(function (i, el) {
                    if (!$(el).find('em').text()) {
                        $(el).addClass('grid-hover').find('em').html('<a href="javascript:;" class="hand viewfull">查看全部</a>');
                    }
                });

                //合计
                $el.find('.list .box-XGLHC .grid-total .grid-amount').html(Q.doubleFormat(d.dealMoneyCount));
                $el.find('.list .box-XGLHC .grid-total .grid-award').html(Q.doubleFormat(d.awardMoneyCount));
                $el.find('.list .box-XGLHC .grid-total').show();
                setTimeout(function () {
                    $el.find('.spppinner').hide(); //延时让可以看到loading效果
                }, 500);
                //翻页
                $el.find('.box-XGLHC .pagging').html(Q.showPagination(d.currPage, d.pageSize, d.totalItem, d.totalPage));
                $el.find('.box-XGLHC .pagging a').unbind('click').click(function () {
                    params.currPage = $(this).attr('page');
                    me.searchLowerHKLHC(params);
                });

                // 点击弹出历史记录详情
                $el.find('.list .box-XGLHC ul:eq(0)').off('click').on('click', 'li', function (evt) {
                    evt.preventDefault();

                    var p = {
                        'orderId': $(this).attr('data-id'),
                        'width': 460
                    };
                    if ($(this).parent('ul').attr('type') === 'lowerlottery') {
                        me.popDetail($(this).attr('data-istrace'), p, params);
                    }
                });
            }
        });
    },

    searchTrace: function (url, params) {
        var me = this;
        var $el = $('.report-pop');
        $el.find('.notran').hide();
        $el.find('.list .box-trace ul').hide();
        $el.find('.box .pagging').html('');
        $el.find('.spppinner').css({
            'top': 88
        }).show();

        Api.getCommon(url, params, function (d) {
            $el.find('.list .tit_trace').html(me.tit.trace);
            if (d === -1) {
                $el.find('.spppinner').hide();
                $(".loginlnk").trigger("click");
                return false;
            }
            if (d.code == 0 || d.code == -1 || d.code == 1001) {
                $el.find('.spppinner').hide(); //loading效果
                $el.find('#LowerTrace .notran>h6').text(d.msg || '暂无数据');
                // $el.find('.notran').show();
                $el.find('.list .box-trace ul').hide().html('<div class="blank"></div>');
                $el.find('.box-trace .pagging').html('');
                return;
            }
            if (d.result !== undefined) {
                d = d.result;

                if (d.list.length === 0) {
                    $el.find('.spppinner').hide();
                    $el.find('#LowerTrace .notran>h6').text('暂无数据');
                    $el.find('.notran').show();
                    $el.find('.list .box-trace ul').hide().html('<div class="blank"></div>');
                    $el.find('.box-trace .pagging').html('');
                    return false;
                }

                //数据绑定
                $el.find('.notran').hide();
                var his_html = '';
                var his_orders = d.list;
                $(his_orders).each(function () {
                    var i = arguments[0];
                    var e = arguments[1];

                    his_html += '<li data-id="' + e.traceId + '" class="' + Q.itemTyp(e.buyTypey) + ' ' + Q.oddEven(i) + '">\
                        <span class="wd1">' + e.createTime + '</span>\
                        <span>' + Q.nameLottery(e.lottery) + '</span>\
						<span class="wd5">' + Q.getIcon(e.buyType) + e.userName + '</span>\
						<span>' + Q.getMethodName(Q.getLottryCode(e.method), e.lottery) + '</span>\
						<span class="wd2">' + e.start + '</span>\
						<span class="grid-toggle" alt="号码详情：" style="width:108px;"><div class="wrapbox"><em alt="' + Q.descFormat(e.code, e.method) + '">' + Q.descFormat(e.code, e.method) + '</em></div></span>\
						<span style="width:70px;">' + e.totalMoney + '</span>\
						<span style="width:70px;">' + e.finishMoney + '</span>\
						<span style="width:70px;">' + Q.istraceCh(e.winStop) + '</span>\
						<span class="wd3">' + e.status + '</span>\
						</li>';
                })
                // $el.find('.spppinner').hide();
                $el.find('.list .box-trace ul').html(his_html).attr('type', 'trace').show();
                $el.find('.list .box-trace').removeClass('hide');
                $el.find('.list .box').addClass('hide');
                // $el.find('.list').addClass('trace');

                $el.find('.list .box-trace ul li span.grid-toggle').each(function (i, el) {
                    if (!$(el).find('em').attr('alt')) {
                        $(el).addClass('grid-hover').find('em').html('<a href="javascript:;" class="hand viewfull">查看全部</a>');
                    }
                });
                for (var i = 0; i < d.list.length; i++) {
                    if ((d.list)[i].finishMoney > 0) {
                        $('.box li').eq(i).find('span').eq(6).css('color', '#ff4d4d');
                    }
                }

                //合计
                $el.find('.list .box-trace .grid-total .grid-amount').html(Q.doubleFormat(d.totalMoney));
                $el.find('.list .box-trace .grid-total .grid-finish').html(Q.doubleFormat(d.finishMoney));
                $el.find('.list .box-trace .grid-total .grid-cancel').html(Q.doubleFormat(d.cancelMoney));
                $el.find('.list .box-trace .grid-total').show();
                setTimeout(function () {
                    $el.find('.spppinner').hide();
                }, 500);

                //投注内容点击弹出提示
                $('.grid-hover').unbind('click').click(function () {
                    var tip = dialog({
                        skin: 'tip',
                        align: 'top',
                        content: $(this).attr('alt') + '<div class="all-code">' + $(this).find('em').attr('alt') + '</div>',
                        quickClose: true // 点击空白处快速关闭
                    });
                    tip.show($(this)[0]);
                    return false;
                });

                // 接口缺少字段  暂时这样处理
                d.totalItem = d.pageSize * d.totalPage;

                //翻页
                if (d.list.length > 0) {
                    $el.find('.box-trace .pagging').html(Q.showPagination(d.currPage, d.pageSize, d.totalItem, d.totalPage));
                } else {
                    $el.find('.list .box-trace ul').html('<div class="blank">暂无数据</div>');
                    $el.find('.list .box-trace ul div.blank').height(200);
                    $el.find('.list .box-trace .grid-total .grid-amount,.list .box-trace .grid-total .grid-finish,.list .box-trace .grid-total .grid-cancel').html('');
                }

                $el.find('.box-trace .pagging a').unbind('click').click(function () {
                    params.currPage = $(this).attr('page');

                    // $el.find('.spppinner').css({'top':88}).show();
                    LowerHistory.searchTrace(url, params);
                });

                // 追号查询点击弹出历史记录详情
                $el.find('.box-trace ul:eq(0)').off('click').on('click', 'li', function (evt) {
                    evt.preventDefault();
                    var p = {
                        'traceId': $(this).attr('data-id')
                    };
                    if ($(this).parent('ul').attr('type') === 'trace') {
                        var pop_lt = dialog({
                            skin: 'sobet recency-pop recency-pop-h',
                            title: '追号详情',
                            fixed: true,
                            onshow: function () {
                                var that = this;
                                LowerHistory.chkTraceDetail(p, that, that, params);
                            }
                        });
                        pop_lt.showModal();
                    }
                });
            }
        });
    },

    searchLowerAGgame: function (params) {
        var me = this;
        var $el = $('#admin_report #LowerAGgame');
        $el.find('.notran').hide();
        $el.find('.list .box-AGgame ul').hide();
        $el.find('.box .pagging').html('');
        $el.find('.spppinner').css({
            'top': 88
        }).show();

        Api.getCommon('getAgHistory', params, function (d) {
            $el.find('.list .tit_AGgame').show().html(me.tit.AG_game);
            if (d.code === 0 || d.code === -1 || d.code === 1001) {
                $el.find('.spppinner').hide();
                $el.find('#LowerAGgame .notran>h6').text(d.msg || '暂无数据');
                // $el.find('.notran').show();
                // $el.find('.tit_AGgame').hide();
                $el.find('.list .box-AGgame ul').hide().html('<div class="blank"></div>');
                $el.find('.box-AGgame .pagging').html('');
                return false;
            }
            if (d.code == 1 && d.result !== undefined) {
                d = d.result;

                if (d.datas.length == 0) {
                    $el.find('.spppinner').hide();
                    $el.find('#LowerAGgame .notran>h6').text('暂无数据');
                    $el.find('.notran').show();
                    // $el.find('.tit_AGgame').hide();
                    $el.find('.list .box-AGgame ul').hide().html('<div class="blank"></div>');
                    return false;
                }

                //数据绑定
                $el.find('.notran').hide();

                var his_html = '';
                var his_orders = d.datas;
                $(his_orders).each(function () {
                    var i = arguments[0];
                    var e = arguments[1];
                    his_html += '<li class="' + Q.oddEven(i) + '">\
						<span class="">' + e.betTime + '</span>\
						<span class="">' + e.playerName + '</span>\
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
                // $el.find('.spppinner').hide();
                $el.find('.list .box-AGgame ul').html(his_html).attr('type', 'AG_game').show();
                $el.find('.list .box-AGgame').removeClass('hide');
                // $el.find('.list').removeClass('trace').addClass('AG_game');
                $el.find('.box-AGgame .tip').show();


                //合计
                setTimeout(function () {
                    $el.find('.spppinner').hide();
                }, 500);

                //翻页
                $el.find('.box-AGgame .pagging').html(Q.showPagination(d.currPage, params.pageSize, d.totalCount, d.pageCount));
                $el.find('.box-AGgame .pagging a').unbind('click').click(function () {
                    // $el.find('.spppinner').css({'top':88}).show();
                    params.currPage = $(this).attr('page');
                    me.searchLowerAGgame(params);
                });
            }
        });
    },
    searchLowerBYgame: function (params) {
        var me = this;
        var $el = $('#admin_report #LowerBYgame');
        $el.find('.notran').hide();
        $el.find('.list .box-BYgame ul').hide();
        $el.find('.box .pagging').html('');
        $el.find('.spppinner').css({
            'top': 88
        }).show();


        Api.getCommon('getLowerBYHistory', params, function (d) {
            $el.find('.list .tit_BYgame').show().html(me.tit.BY_game);
            if (d.code == 0 || d.code == -1 || d.code === 1001) {
                $el.find('.spppinner').hide();
                $el.find('#LowerBYgame .notran>h6').text(d.msg || '暂无数据');
                $el.find('.notran').show();
                // $el.find('.tit_BYgame').hide();
                $el.find('.box-BYgame .pagging').html('');
                $el.find('.list .box-BYgame ul').hide().html('<div class="blank"></div>');
                return false;
            }
            if (d.code == 1 && d.result !== undefined) {
                d = d.result;

                if (d.his_orders.length == 0) {
                    $el.find('.spppinner').hide();
                    $el.find('#LowerBYgame .notran>h6').text('暂无数据');
                    $el.find('.notran').show();
                    // $el.find('.tit_BYgame').hide();
                    $el.find('.list .box-BYgame ul').hide().html('<div class="blank"></div>');
                    return false;
                }

                //数据绑定
                $el.find('.notran').hide();

                var his_html = '';
                var his_orders = d.his_orders;
                $(his_orders).each(function () {
                    var i = arguments[0];
                    var e = arguments[1];
                    his_html += '<li class="' + Q.oddEven(i) + '">\
						<span class="wd1">' + e.sceneStarttime + '</span>\
						<span class="wd1">' + e.sceneEndtime + '</span>';
                    if (e.playerName == null) {
                        his_html += '<span class="">其他</span>';
                    } else {
                        his_html += '<span class="">' + e.playerName + '</span>';
                    }
                    if (e.roomId == null) {
                        his_html += '<span class="wd3">其他</span>';
                    } else {
                        his_html += '<span class="wd3">' + e.roomId + '</span>';
                    }
                    his_html += '<span class="">' + e.profitAndLoss + '</span>\
						        <span class="">' + e.bet + '</span>';
                    if (e.win > 0) {
                        his_html += '<span class="his_red">' + e.win + '</span>';
                    } else {
                        his_html += '<span>' + e.win + '</span>';
                    }
                    if (e.progressiveWin > 0) {
                        his_html += '<span class="his_red">' + e.progressiveWin + '</span>';
                    } else {
                        his_html += '<span>' + e.progressiveWin + '</span>';
                    }
                    if (e.encourageWin > 0) {
                        his_html += '<span class="his_red">' + e.encourageWin + '</span></li>';
                    } else {
                        his_html += '<span class="">' + e.encourageWin + '</span></li>';
                    }
                });

                $el.find('.list .box-BYgame ul').html(his_html).attr('type', 'BY_game').show();
                $el.find('.list .box-BYgame').removeClass('hide');
                // $el.find('.list').removeClass('trace').addClass('BY_game');
                $el.find('.box-BYgame .tip').show();


                //合计
                setTimeout(function () {
                    $el.find('.spppinner').hide();
                }, 444);



                //翻页
                $el.find('.box-BYgame .pagging').html(Q.showPagination(d.currPage, params.pageSize, d.totalItem, d.totalPage));
                $el.find('.box-BYgame .pagging a').unbind('click').click(function () {
                    // $el.find('.spppinner').css({'top':88}).show();
                    params.currPage = $(this).attr('page');
                    me.searchLowerBYgame(params);
                });
            }
        });
    },
    searchLowerBBINgame: function (params) {
        var me = this;
        var $el = $('#admin_report #LowerBBINgame');
        $el.find('.notran').hide();
        $el.find('.list .box-BBINgame ul').hide();
        $el.find('.box .pagging').html('');
        $el.find('.spppinner').css({
            'top': 88
        }).show();


        Api.getCommon('getLowerBBINHistory', params, function (d) {
            $el.find('.list .tit_BBINgame').show().html(me.tit.BBIN_game);
            if (d.code == 0 || d.code == -1 || d.code === 1001) {
                $el.find('.spppinner').hide();
                $el.find('#LowerBBINgame .notran>h6').text(d.msg || '暂无数据');
                $el.find('.notran').show();
                // $el.find('.tit_BBINgame').hide();
                $el.find('.box-BBINgame .pagging').html('');
                $el.find('.list .box-BBINgame ul').hide().html('<div class="blank"></div>');
                return false;
            }
            if (d.code == 1 && d.result !== undefined) {
                d = d.result;

                if (d.his_orders.length == 0) {
                    $el.find('.spppinner').hide();
                    $el.find('#LowerBBINgame .notran>h6').text('暂无数据');
                    $el.find('.notran').show();
                    // $el.find('.tit_BBINgame').hide();
                    $el.find('.list .box-BBINgame ul').hide().html('<div class="blank"></div>');
                    return false;
                }

                //数据绑定
                $el.find('.notran').hide();

                var his_html = '';
                var his_orders = d.his_orders;
                $(his_orders).each(function () {
                    var i = arguments[0];
                    var e = arguments[1];
                    his_html += '<li class="' + Q.oddEven(i) + '">\
						<span class="wd1">' + e.gameTime + '</span>\
						<span class="wd4">' + e.userName + '</span>\
						<span class="wd1">' + e.orderId + '</span>\
						<span class="wd4">' + e.gameType + '</span>\
						<span class="wd2">' + e.result + '</span>\
						<span class="">' + e.betAmount + '</span>'
                    if (e.winAmount > 0) {
                        his_html += '<span class="his_red wd4">' + e.winAmount + '</span>';
                    } else {
                        his_html += '<span class="wd4">' + e.winAmount + '</span>';
                    }
                    his_html += '<span class="wd2">' + e.validAmount + '</span></li>';
                });

                // $el.find('.spppinner').hide();
                $el.find('.list .box-BBINgame ul').html(his_html).attr('type', 'BBIN_game').show();
                $el.find('.list .box-BBINgame').removeClass('hide');
                // $el.find('.list').removeClass('trace').addClass('BBIN_game');
                $el.find('.box-BBINgame .tip').show();


                //合计
                setTimeout(function () {
                    $el.find('.spppinner').hide();
                }, 500);



                //翻页
                $el.find('.box-BBINgame .pagging').html(Q.showPagination(d.currPage, params.pageSize, d.totalItem, d.totalPage));
                $el.find('.box-BBINgame .pagging a').unbind('click').click(function () {
                    // $el.find('.spppinner').css({'top':88}).show();
                    params.currPage = $(this).attr('page');
                    me.searchLowerBBINgame(params);
                });
            }
        });
    },
    searchLowerPTgame: function (params) {
        var me = this;
        var $el = $('#admin_report #LowerPTgame');
        $el.find('.notran').hide();
        $el.find('.list .box-PTgame ul').hide();
        $el.find('.box .pagging').html('');
        $el.find('.spppinner').css({
            'top': 88
        }).show();


        Api.getCommon('getLowerPTHistory', params, function (d) {
            $el.find('.list .tit_PTgame').show().html(me.tit.PT_game);
            if (d.code == 0 || d.code == -1 || d.code === 1001) {
                $el.find('.spppinner').hide();
                $el.find('#LowerPTgame .notran>h6').text(d.msg || '暂无数据');
                $el.find('.notran').show();
                // $el.find('.tit_PTgame').hide();
                $el.find('.box-PTgame .pagging').html('');
                $el.find('.list .box-PTgame ul').hide().html('<div class="blank"></div>');
                return false;
            }
            if (d.code == 1 && d.result !== undefined) {
                d = d.result;

                if (d.his_orders.length == 0) {
                    $el.find('.spppinner').hide();
                    $el.find('#LowerPTgame .notran>h6').text('暂无数据');
                    $el.find('.notran').show();
                    // $el.find('.tit_PTgame').hide();
                    $el.find('.list .box-PTgame ul').hide().html('<div class="blank"></div>');
                    return false;
                }

                //数据绑定
                $el.find('.notran').hide();

                var his_html = '';
                var his_orders = d.his_orders;
                $(his_orders).each(function () {
                    var i = arguments[0];
                    var e = arguments[1];
                    his_html += '<li class="' + Q.oddEven(i) + '">\
						<span class="">' + e.gamedate + '</span>\
						<span class="">' + e.playername + '</span>';
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

                // $el.find('.spppinner').hide();
                $el.find('.list .box-PTgame ul').html(his_html).attr('type', 'PT_game').show();
                $el.find('.list .box-PTgame').removeClass('hide');
                // $el.find('.list').removeClass('trace').addClass('PT_game');
                $el.find('.box-PTgame .tip').show();


                //合计
                setTimeout(function () {
                    $el.find('.spppinner').hide();
                }, 500);



                //翻页
                $el.find('.box-PTgame .pagging').html(Q.showPagination(d.currPage, params.pageSize, d.totalItem, d.totalPage));
                $el.find('.box-PTgame .pagging a').unbind('click').click(function () {
                    // $el.find('.spppinner').css({'top':88}).show();
                    params.currPage = $(this).attr('page');
                    me.searchLowerPTgame(params);
                });
            }
        });
    },
    searchLowerSBgame: function (params) {
        var me = this;
        var $el = $('#admin_report #LowerSBgame');
        $el.find('.notran').hide();
        $el.find('.list .box-SBgame ul').hide();
        $el.find('.box .pagging').html('');
        $el.find('.spppinner').css({
            'top': 88
        }).show();

        Api.getCommon('getLowerSBHistory', params, function (res) {
            $el.find('.list .tit_SBgame').show().html(me.tit.SB_game);
            if (res.code === 0 || res.code === -1 || res.code === 1001) {
                $el.find('.spppinner').hide();
                $el.find('#LowerSBgame .notran>h6').text(res.msg || '暂无数据');
                $el.find('.notran').show();
                // $el.find('.tit_SBgame').hide();
                $el.find('.box-SBgame .pagging').html('');
                $el.find('.list .box-SBgame ul').hide().html('<div class="blank"></div>');
                return false;
            }
            if (res.code === 1 && res.result) {
                let his_orders = res.result.his_orders;

                if (his_orders.length === 0) {
                    $el.find('.spppinner').hide();
                    $el.find('#LowerSBgame .notran>h6').text('暂无数据');
                    $el.find('.notran').show();
                    // $el.find('.tit_SBgame').hide();
                    $el.find('.list .box-SBgame ul').hide().html('<div class="blank"></div>');
                    return false;
                }

                //数据绑定
                $el.find('.notran').hide();

                let his_html = his_orders.map((item, index) => {
                    return `
                        <li class="${Q.oddEven(index)}">
                            <span class="transactionTime">${item.transactionTime}</span>
                            <span class="userName">${item.userName}</span>
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

                // $el.find('.spppinner').hide();
                $el.find('.list .box-SBgame ul').html(his_html).attr('type', 'SB_game').show();
                $el.find('.list .box-SBgame').removeClass('hide');
                // $el.find('.list').removeClass('trace').removeClass("BY_game").removeClass('BBIN_game').removeClass('AG_game').addClass('SB_game');
                $el.find('.box-SBgame .tip').show();

                //合计
                setTimeout(function () {
                    $el.find('.spppinner').hide();
                }, 500);

                //翻页
                $el.find('.box-SBgame .pagging').html(Q.showPagination(params.currPage,  res.result.pageSize, res.result.totalItem, res.result.totalPage));
                $el.find('.box-SBgame .pagging a').unbind('click').click(function () {
                    params.currPage = $(this).attr('page');
                    me.searchLowerSBgame(params);
                });
            }
        });
    },

    searchLowerIDNgame: function (params) {
        var me = this;
        var $el = $('#admin_report #LowerIDNgame');
        $el.find('.notran').hide();
        $el.find('.list .box-IDNgame ul').hide();
        $el.find('.box .pagging').html('');
        $el.find('.spppinner').css({
            'top': 88
        }).show();

        Api.getCommon('getLowerIDNHistory', params, function (res) {
            $el.find('.list .tit_IDNgame').show().html(me.tit.IDN_game);
            if (res.code === 0 || res.code === -1 || res.code === 1001) {
                $el.find('.spppinner').hide();
                $el.find('#LowerIDNgame .notran>h6').text(res.msg || '暂无数据');
                $el.find('.notran').show();
                // $el.find('.tit_IDNgame').hide();
                $el.find('.box-IDNgame .pagging').html('');
                $el.find('.list .box-IDNgame ul').hide().html('<div class="blank"></div>');
                return false;
            }
            if (res.code === 1 && res.result) {
                let his_orders = res.result.his_orders;

                if (his_orders.length === 0) {
                    $el.find('.spppinner').hide();
                    $el.find('#LowerIDNgame .notran>h6').text('暂无数据');
                    $el.find('.notran').show();
                    // $el.find('.tit_IDNgame').hide();
                    $el.find('.list .box-IDNgame ul').hide().html('<div class="blank"></div>');
                    return false;
                }

                //数据绑定
                $el.find('.notran').hide();

                let his_html = his_orders.map((item, index) => {
                    return `
                        <li class="${Q.oddEven(index)}">
                            <span>${item.userName}</span>
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

                // $el.find('.spppinner').hide();
                $el.find('.list .box-IDNgame ul').html(his_html).attr('type', 'IDN_game').show();
                $el.find('.list .box-IDNgame').removeClass('hide');
                // $el.find('.list').removeClass('trace').removeClass("BY_game").removeClass('BBIN_game').addClass('AG_game');
                $el.find('.box-IDNgame .tip').show();

                //合计
                setTimeout(function () {
                    $el.find('.spppinner').hide();
                }, 500);

                //翻页
                $el.find('.box-IDNgame .pagging').html(Q.showPagination(params.currPage,  res.result.pageSize, res.result.totalItem, res.result.totalPage));
                $el.find('.box-IDNgame .pagging a').unbind('click').click(function () {
                    params.currPage = $(this).attr('page');
                    me.searchLowerIDNgame(params);
                });
            }
        });
    },

    searchLowerKgame: function (params) {
        var me = this;
        var $el = $('#admin_report #LowerKgame');
        $el.find('.notran').hide();
        $el.find('.list .box-Kgame ul').hide();
        $el.find('.box-Kgame .pagging').html('');
        $el.find('.spppinner').css({
            'top': 88
        }).show();

        Api.getCommon('getLowerKgameHistory', params, function (res) {
            $el.find('.list .tit_Kgame').show().html(me.tit.kgame);
            if (res.code === 0 || res.code === -1 || res.code === 1001) {
                $el.find('.spppinner').hide();
                $el.find('#LowerKgame .notran>h6').text(res.msg || '暂无数据');
                $el.find('.notran').show();
                // $el.find('.tit_Kgame').hide();
                $el.find('.box-Kgame .pagging').html('');
                $el.find('.list .box-Kgame ul').hide().html('<div class="blank"></div>');
                return false;
            }
            if (res.code === 1 && res.result) {
                let his_orders = res.result.his_orders;

                if (his_orders.length === 0) {
                    $el.find('.spppinner').hide();
                    $el.find('#LowerKgame .notran>h6').text('暂无数据');
                    $el.find('.notran').show();
                    // $el.find('.tit_Kgame').hide();
                    $el.find('.list .box-Kgame ul').hide().html('<div class="blank"></div>');
                    return false;
                }

                //数据绑定
                $el.find('.notran').hide();

                let his_html = his_orders.map((item, index) => {
                    return `
                        <li class="${Q.oddEven(index)}">
                            <span class="kgame-lower-col ellipsis">${item.userName}</span>
                            <span class="kgame-lower-col ellipsis">${item.betTime}</span>
                            <span class="kgame-lower-col ellipsis">${item.game}</span>
                            <span class="kgame-lower-col ellipsis">${item.periode}</span>
                            <span class="kgame-lower-col ellipsis">${item.betAmount}</span>
                            <span class="kgame-lower-col ellipsis">${item.validBetAmount}</span>
                            <span class="kgame-lower-col ellipsis">${item.winAmount}</span>
                            <span class="kgame-lower-col ellipsis">${item.profitAndLoss}</span>
                        </li>
                    `;
                }).join('');

                $el.find('.list .box-Kgame ul').html(his_html).attr('type', 'kgame').show();
                $el.find('.list .box-Kgame').removeClass('hide');
                $el.find('.box-Kgame .tip').show();

                //合计
                setTimeout(function () {
                    $el.find('.spppinner').hide();
                }, 500);

                //翻页
                $el.find('.box-Kgame .pagging').html(Q.showPagination(params.currPage,  res.result.pageSize, res.result.totalItem, res.result.totalPage));
                $el.find('.box-Kgame .pagging a').off('click').click(function () {
                    params.currPage = $(this).attr('page');
                    me.searchLowerKgame(params);
                });
            }
        });
    },


    //点击弹出投注详情  istrace-是否追号  p-参数，订单id
    popDetail: function (istrace, p, params) {
        var me = this;
        var html = '<table><tbody>';
        var detail = dialog({
            id: 'recency-details',
            skin: 'sobet recency-pop recency-pop-h',
            title: '投注详细',
            fixed: true,
            onshow: function () {
                var that = this;
                if (parseInt(istrace, 10) === 1) {
                    me.chkTraceDetail(p, that, detail, params);
                }
            }
        });

        me.queryRecencyDetail(detail, detail, html, p, params);
    },

    //查询订单详情
    queryRecencyDetail: function (detail, pop, html, p, params) {
        var me = this;
        var tmp = [];
        var th = [];
        if (params.lottery === 'XGLHC') {
            th = [
                '<th>注单编号：</th>',
                '<th>游戏用户：</th>',
                '<th>投注时间：</th>',
                '<th>彩种：</th>',
                '<th>玩法：</th>',
                '<th>期号：</th>',
                '<th>投注内容：</th>',
                '<th>投注注数：</th>',
                '<th>赔率：</th>',
                '<th>投注总金额：</th>',
                '<th>奖金：</th>',
                '<th>开奖号码：</th>',
                '<th>状态：</th>',
                '<tbody>'
            ];
        } else {
            th = [
                '<th>注单编号：</th>',
                '<th>游戏用户：</th>',
                '<th>投注时间：</th>',
                '<th>彩种：</th>',
                '<th>玩法：</th>',
                '<th>期号：</th>',
                '<th>投注内容：</th>',
                '<th>投注注数：</th>',
                '<th>是否单挑：</th>',
                '<th>投注总金额：</th>',
                '<th>奖金：</th>',
                '<th>开奖号码：</th>',
                '<th>状态：</th>',
                '<tbody>'
            ];
        }
        var cancel = '';
        var traceInfo = '';

        Api.getRecencyDetail(p, function (d) {
            if (d.result !== undefined) {
                d = d.result;
                //注单编号
                tmp.push(d.orderId);
                //游戏用户
                tmp.push(d.username);
                //投注时间
                tmp.push(d.orderTime);
                //彩种
                tmp.push(Q.nameLottery(d.lottery));
                //玩法
                tmp.push(Q.getMethodName(Q.getLottryCode(d.method), d.lottery) + Q.getPositionName(d.position,d.lottery));
                //期号
                tmp.push('<em>' + d.issue + '</em>');
                //投注内容
                tmp.push('<em class="desc">' + Q.descFormat(d.code, d.method) + '</em>');
                tmp.push(d.nums);
                if (d.lottery === 'XGLHC') {
                    //赔率
                    tmp.push(d.odds);
                } else {
                    //是否单挑
                    tmp.push(`${d.singleStatus === 3 ? '是' : '否'}`);
                }
                //投注总金额
                tmp.push(d.amount);
                //奖金
                tmp.push(d.awardMoney);
                //开奖号码
                tmp.push(d.lotteryNumber);
                //状态
                tmp.push(d.status);

                for (var i = 0; i < tmp.length; i++) {
                    if (i === 0 && d.cancel !== undefined) {
                        var cl = parseInt(d.cancel, 10);
                        html += '<tr>' + th[i] + '<td><em>' + tmp[i] + '</em>';
                        if (cl === 0 && d.isCurrentIssue === 1) {
                            //cancel = '<a href="javascript:;" data-id="' + tmp[i] + '" id="cancel_order" class="btnCancel">撤 单</a>';
                        } else if (cl === 1) {
                            //html += '<a href="javascript:;" class="btnCancel disabled">个人撤单</a>';
                        }
                        html += '</td></tr>';
                    } else {
                        html += '<tr>' + th[i] + '<td>' + tmp[i] + '</td></tr>';
                    }
                }
                html += '</tbody></table>';

                //如果此订单是追号订单
                if (parseInt(d.istrace, 10) === 1) {
                    traceInfo = '<a class="traceview hand xxxx">查看追号信息</a>';
                }
                //$('.ui-dialog-grid').append(cancel);
                if ($(pop.node).find('.ui-dialog-grid .traceview').length == 0) {
                    $(pop.node).find('.ui-dialog-grid').append(traceInfo);
                } else {
                    $(pop.node).find('.ui-dialog-grid .traceview').show();
                }

                if (typeof detail.selector != 'undefined') {
                    detail.html(html).show();
                    if (detail.height() != parseInt(p['relheight'], 10)) {
                        pop.height(detail.height());
                    }
                    $(pop.node).find('a.traceview').off('click').on('click', function (e) {
                        pop.width(960).height('auto');
                        $(pop.node).find('.ui-dialog-title a').attr('rel', '0').show();
                        detail.hide();
                        detail.prev().show();
                        $(this).hide();
                    }).show();
                } else {
                    detail.content(html);
                    detail.width((p.width ? p.width : 640)).showModal();
                    $(pop.node).find('a.traceview').off('click').on('click', function (e) {
                        pop.width(960).height('auto');
                        detail.hide();
                        detail.prev().show();
                        $(this).hide();
                    }).show();
                }

                var chkcancelbtn = $(detail.node).find('a#cancel_order');

                if (chkcancelbtn.length == 0) {
                    chkcancelbtn = $(detail).find('a#cancel_order');
                }

                //绑定撤单事件
                chkcancelbtn.off('click').on('click', function (e) {
                    var btn = $(this);
                    var _p = {
                        orderId: btn.attr('data-id')
                    };
                    if (btn.hasClass('disabled')) {
                        return false;
                    }
                    var pop_tip = dialog({
                        title: '温馨提示',
                        skin: 'confirm-again',
                        content: '您确定要撤销' + d.issue + '期的这一注单吗？',
                        button: [{
                            id: 'cancle_ok',
                            value: '确定',
                            callback: function () {
                                pop_tip.close().remove();
                                btn.addClass('disabled');
                                Api.cancelOrder(_p, function (res) {
                                    if (res && res.code && res.msg) {
                                        var tip = dialog({
                                            align: 'right',
                                            skin: 'tip',
                                            content: res.msg
                                        }).show(btn[0]);
                                        if (parseInt(res.code, 10) === 0) {
                                            btn.addClass('disabled').html('个人撤单');
                                            //Lottery.updateRecency();

                                            if ($("#" + _p.orderId).length > 0) {
                                                $("#" + _p.orderId).find('label').html('已取消');
                                            }
                                        }
                                        setTimeout(function () {
                                            tip.close().remove();
                                        }, 2000);
                                    }
                                });
                            }
                        }, {
                            id: 'cancle_cancel',
                            skin: 'cancel',
                            value: '取消'
                        }]
                    }).showModal();
                });
            }
        });
    },

    //查询追号信息 	p-订单id  that-当前弹出框
    chkTraceDetail: function (p, that, pop, params) {
        var me = this;
        Api.getTrace(p, function (d) {
            d = d.result;
            var traceTableHorizontal;
            //切换追号详情
            if (d.lottery === 'XGLHC') {
                traceTableHorizontal = [
                    '<table class="traceTable traceHTable"><tbody>',
                    '<tr>',
                    '<th>追号编号：</th>',
                    '<td>', d.traceId, '</td>',
                    '<td rowspan="18" class="fixtrace">',
                    '<ul class="traceInner"></ul>',
                    '<div class="tracePager popdetails-page"></div>',
                    /*'<div class="cancelTrace"><a class="hand disabled" name="', d.traceId, '">追号终止</a></div>',*/
                    '</td></tr>',
                    '<tr><th>游戏用户：</th><td>', d.userName, '</td></tr>',
                    '<tr><th>追号时间：</th><td>', d.createTime, '</td></tr>',
                    '<tr><th>彩种：</th><td>', Q.nameLottery(d.lottery), '</td></tr>',
                    '<tr><th>追号内容：</th><td><em class="desc">', Q.descFormat(d.code, d.method), '</em></td></tr>',
                    '<tr><th>是否单挑：</th><td>', `${d.singleStatus === 3 ? '是' : '否'}`, '</td></tr>',
                    '<tr><th>玩法：</th><td>', Q.getMethodName(Q.getLottryCode(d.method), d.lottery), '</td></tr>',
                    '<tr><th>追号模式：</th><td>', Q.traceType(d.traceType), '</td></tr>',
                    '<tr><th>开始期号：</th><td>', d.start, '</td></tr>',
                    '<tr><th>赔率：</th><td>', d.odds, '</td></tr>',
                    '<tr><th>追号期数：</th><td>', d.issues.length, '</td></tr>',
                    '<tr><th>追号总金额：</th><td>¥', d.totalMoney, '</td></tr>',
                    '<tr><th>完成期数：</th><td>', d.finishCount, '</td></tr>',
                    '<tr><th>完成金额：</th><td>¥', d.finishMoney, '</td></tr>',
                    '<tr><th>取消期数：</th><td>', d.cancelCount, '</td></tr>',
                    '<tr><th>取消金额：</th><td>¥', d.cancelMoney, '</td></tr>',
                    '<tr><th>追号状态：</th><td>', d.status, '</td></tr>',
                    '<th>&nbsp;&nbsp;中奖后终止：</th><td>', Q.traceChs(d.winStop), '</td></tr>',
                    '</tbody></table><div class="traceInnerDetails"></div>'
                ].join('');
            } else {
                traceTableHorizontal = [
                    '<table class="traceTable traceHTable"><tbody>',
                    '<tr>',
                    '<th>追号编号：</th>',
                    '<td>', d.traceId, '</td>',
                    '<td rowspan="18" class="fixtrace">',
                    '<ul class="traceInner"></ul>',
                    '<div class="tracePager popdetails-page"></div>',
                    /*'<div class="cancelTrace"><a class="hand disabled" name="', d.traceId, '">追号终止</a></div>',*/
                    '</td></tr>',
                    '<tr><th>游戏用户：</th><td>', d.userName, '</td></tr>',
                    '<tr><th>追号时间：</th><td>', d.createTime, '</td></tr>',
                    '<tr><th>彩种：</th><td>', Q.nameLottery(d.lottery), '</td></tr>',
                    '<tr><th>追号内容：</th><td><em class="desc">', Q.descFormat(d.code, d.method), '</em></td></tr>',
                    '<tr><th>是否单挑：</th><td>', `${d.singleStatus === 3 ? '是' : '否'}`, '</td></tr>',
                    '<tr><th>玩法：</th><td>', Q.getMethodName(Q.getLottryCode(d.method), d.lottery), '</td></tr>',
                    '<tr><th>追号模式：</th><td>', Q.traceType(d.traceType), '</td></tr>',
                    '<tr><th>开始期号：</th><td>', d.start, '</td></tr>',
                    '<tr><th>奖金模式：</th><td>', d.odds, '</td></tr>',
                    '<tr><th>模式：</th><td>', Q.modeName(d.perAmount), '</td></tr>',
                    '<tr><th>追号期数：</th><td>', d.issues.length, '</td></tr>',
                    '<tr><th>追号总金额：</th><td>¥', d.totalMoney, '</td></tr>',
                    '<tr><th>完成期数：</th><td>', d.finishCount, '</td></tr>',
                    '<tr><th>完成金额：</th><td>¥', d.finishMoney, '</td></tr>',
                    '<tr><th>取消期数：</th><td>', d.cancelCount, '</td></tr>',
                    '<tr><th>取消金额：</th><td>¥', d.cancelMoney, '</td></tr>',
                    '<tr><th>追号状态：</th><td>', d.status, '</td></tr>',
                    '<th>&nbsp;&nbsp;中奖后终止：</th><td>', Q.traceChs(d.winStop), '</td></tr>',
                    '</tbody></table><div class="traceInnerDetails"></div>'
                ].join('');
            }

            var trace_tpl = ['<li class="traceHead"><span><input type="checkbox" class="chkall hand">奖期</span><em>投注金额(元)</em><em>追号状态</em><em>注单详情</em></li>',
                '<% for ( var i = 0; i < issues.length; i++ ) { %>', '<li id="<%=issues[i].orderId%>">',
                '<span><input type="checkbox" rel="<%=issues[i].orderId%>" class="hand<%=issues[i].status|Q.traceClsDisable%>" <%=issues[i].orderId|Q.traceDisable%> name="<%=issues[i].issue%>" <%=issues[i].status|Q.tracestatusDisable%>><%=issues[i].issue%></span>',
                '<em><%=issues[i].money%></em>',
                '<em><label><%=issues[i].status|Q.statusCh%></label></em>',
                '<em><%=issues[i].orderId|Q.checkDetailByStatus,issues[i].status%></em>',
                '</li><% } %>'
            ].join('');

            //如果没有tracetable
            if ($(that.node).find('.ui-dialog-content table.traceTable').size() == 0) {
                if ($(that.node).find('.ui-dialog-content table:eq(0)').length > 0) {
                    $(that.node).find('.ui-dialog-content table:eq(0)').after(traceTableHorizontal);
                } else {
                    $(that.node).find('.ui-dialog-content').html(traceTableHorizontal);
                    $(that.node).find('.ui-dialog-content > table.traceTable').show();
                    pop.width(960).height('auto');
                    $(that.node).find('.ui-dialog-title').html('<em>追号详情</em> <a class="hand backInfo" rel="0">(返回)</a>');
                }
            }

            //绑定查看追号信息按钮事件
            $(that.node).find('a.traceview').unbind('click').click(function () {
                if ($(that.node).find('.ui-dialog-content table.traceTable').size() == 0) {
                    $(that.node).find('.ui-dialog-content table:eq(0)').after(traceTable);
                } else {
                    $(that.node).find('.ui-dialog-content table.traceTable').show();
                    $(that.node).find('.ui-dialog-title a').show();
                    pop.width(960).height('auto');
                }
                $(that.node).find('.ui-dialog-content table:eq(0)').hide();
                $(that.node).find('.ui-dialog-content .traceInnerDetails').hide();
                $(this).hide();
            });

            $(that.node).find('.traceInner').html(tmpl.apply(this, ['traceInner', trace_tpl, d]));

            $(that.node).find('.ui-dialog-title a').unbind('click').click(function () {
                if ($(this).attr('rel') == '0') {
                    $(that.node).find('.ui-dialog-title em').html('投注详细');
                    if ($(that.node).find('.traceInnerDetails').size() > 0) {
                        if ($(that.node).find('.traceInnerDetails').html() != '') {
                            $(that.node).find('.traceInnerDetails').show();
                            $(that.node).find('.traceHTable').hide();
                        } else {
                            $(that.node).find('.ui-dialog-content table.traceTable').hide();
                            $(that.node).find('.ui-dialog-content table:eq(0)').show();
                        }
                    } else {
                        $(that.node).find('.ui-dialog-content table.traceTable').hide();
                        $(that.node).find('.ui-dialog-content table:eq(0)').show();
                    }
                    $(that.node).find('.ui-dialog-title a').hide();
                    pop.width(460).height('auto');
                } else {
                    $(that.node).find('.ui-dialog-title em').html('追号详情');
                    $(that.node).find('.ui-dialog-content table.traceTable').show();
                    $(that.node).find('.ui-dialog-content table:eq(0),.ui-dialog-content div.traceInnerDetails').hide();
                    $(that.node).find('.ui-dialog-title a').attr('rel', '0');
                    pop.width(960).height('auto');
                }
            });

            //追号明细列表前端分页
            var tracePageSize = 10;
            var totalTrace = d.issues.length;
            if (totalTrace > tracePageSize && $(that.node).find('.tracePager').html() == '') {
                $(that.node).find('.traceInner li:gt(' + tracePageSize + ')').hide();
                me.queryTracePage(1, that, tracePageSize, totalTrace);
            } else {
                var startIndex = (parseInt($(that.node).find('.tracePager a.on').attr('page'), 10) - 1) * tracePageSize;
                var endIndex = startIndex + tracePageSize - 1;
                if (isNaN(startIndex)) {
                    startIndex = 0;
                }
                $(that.node).find('.traceInner li:visible:not(.traceHead)').hide();
                $(that.node).find('.traceInner li:gt(' + startIndex + '):lt(' + tracePageSize + ')').show();
            }

            //追号明细详情
            $(that.node).find('a.traceDetails').attr('rel', $(pop.node).find('div.ui-dialog-content').height());
            $(that.node).find('a.traceDetails').unbind('click').click(function () {
                var _p = {
                    'orderId': $(this).attr('data-id')
                };
                var relheight = $(this).attr('rel');
                var innerhtml = '<table><tbody>';
                $(that.node).find('.ui-dialog-content > table').hide();
                $(that.node).find('.ui-dialog-title em').html('投注详细');
                $(that.node).find('.ui-dialog-title a').attr('rel', '1').hide();
                pop.width(460).height(relheight);
                _p['relheight'] = relheight;
                me.queryRecencyDetail($(that.node).find('.ui-dialog-content div.traceInnerDetails'), pop, innerhtml, _p, params);
            });


            $(that.node).find('li:not(.traceHead) span > input:not(.disabled)').off('click').on('click', function (e) {
                if ($(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled):checked').length > 0) {
                    $(that.node).find('div.cancelTrace a').removeClass('disabled');
                } else {
                    $(that.node).find('div.cancelTrace a').addClass('disabled');
                }

                //联动全选
                if ($(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled):checked').length == $(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled)').length) {
                    $(that.node).find('li.traceHead input.chkall').prop('checked', true);
                } else {
                    $(that.node).find('li.traceHead input.chkall').attr('checked', false);
                }
            });

            // 追号终止全选
            $(that.node).find('li.traceHead input.chkall').off('click').on('click', function (e) {
                if ($(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled)').length == 0) {
                    return false;
                }
                if ($(this).prop('checked')) {
                    $(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(:checked):not(.disabled)').prop('checked', true);
                } else {
                    $(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled):checked').prop('checked', false);
                }

                if ($(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled):checked').length > 0) {
                    $(that.node).find('div.cancelTrace a').removeClass('disabled');
                } else {
                    $(that.node).find('div.cancelTrace a').addClass('disabled');
                }
            });

            // 追号终止事件
            $(that.node).find('div.cancelTrace a').off('click').on('click', function (e) {
                var btn = $(this);
                var cancel_p = {
                    traceId: btn.attr('name')
                };
                cancel_p['issues'] = $(that.node).find('.traceInner li:visible:not(.traceHead) span input:checked').map(function () {
                    return $(this).attr('name');
                }).get();


                if (btn.hasClass('disabled') || cancel_p['issues'].length == 0) {
                    return false;
                }
                Api.cancelTrace(cancel_p, function (d) {
                    if (d === -1) {
                        $(".loginlnk").trigger("click");
                        return false;
                    }
                    if (d && d.code && d.msg) {
                        var tip = dialog({
                            align: 'top',
                            skin: 'tip',
                            content: '追号终止成功'
                        }).show(btn[0]);
                        if (parseInt(d.code, 10) === 1) {
                            $(that.node).find('div.cancelTrace a').addClass('disabled');
                            me.chkTraceDetail(p, that, pop, params);
                        }
                        setTimeout(function () {
                            tip.close().remove();
                        }, 1000);
                    }
                });
            });

            // 追号终止控制显示
            if ($(that.node).find('.traceInner li:not(.traceHead)').length == $(that.node).find('.traceInner li:not(.traceHead) input.disabled').length) {
                $(that.node).find('div.cancelTrace a').addClass('disabled');
            }

        });
    },
    queryTracePage: function (now, that, tracePageSize, totalTrace) {
        var me = this;
        $(that.node).find('.tracePager').html(Q.showPagination(now, tracePageSize, totalTrace, null)).show();

        $(that.node).find('.tracePager a').unbind('click').click(function () {
            $(that.node).find('.traceInner li.traceHead input.chkall').prop('checked', false);
            $(that.node).find('.traceInner li:gt(0) input').prop('checked', false);

            var startIndex = (parseInt($(this).attr('page'), 10) - 1) * tracePageSize;
            var endIndex = startIndex + tracePageSize - 1;
            $(that.node).find('.traceInner li:visible:not(.traceHead)').hide();
            $(that.node).find('.traceInner li:gt(' + startIndex + '):lt(' + tracePageSize + ')').show();
            me.queryTracePage(parseInt($(this).attr('page'), 10), that, tracePageSize, totalTrace);
        });
    }
};