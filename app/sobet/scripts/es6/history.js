/* jshint devel:true */

var History = History || {};

History = {
    w: 1070,
    h: 560,
    maxrate: 7.5,
    usermax: 6,
    tit: {
        'lottery': '<span class="wd1">投注时间</span><span class="wd5">彩种</span><span>玩法</span><span class="wd2">期号</span><span>投注内容</span><span>投注金额</span><span>奖金</span><span class="wd4">状态</span><span class="wd3 js-tit-trace">追号</span><span class="wd7">操作</span>',
        'lowerlottery': '<span class="wd1">投注时间</span><span class="wd4">用户名</span><span class="wd6">彩种</span><span class="wd6">玩法</span><span class="wd6">期号</span><span class="wd6">投注内容</span><span class="wd6">投注金额</span><span class="wd6">奖金</span><span class="wd3">状态</span><span class="wd3">追号</span>',
        'trace': '<span class="wd1">追号时间</span><span>彩种</span><span>玩法</span><span class="wd2">开始期数</span><span>投注内容</span><span style="width:75px;">总金额</span><span style="width:75px;">完成金额</span><span style="width:75px;">中奖即停</span><span class="wd3">状态</span><span class="wd8">操作</span>',
        'AG_game': '<span>投注时间</span><span>注单流水号</span><span>游戏类型</span><span>游戏局号</span><span>投注金额</span><span>盈亏金额</span><span>订单状态</span>',
        'BY_game': '<span class="wd1">开始时间</span><span class="wd1">结束时间</span><span class="wd3">房间号</span><span>盈亏</span><span>投注金额</span><span>中奖</span><span>jackpot中奖</span><span>第一名奖励</span><span class="wd1">记录时间</span>',
        'PT_game': '<span>游戏时间</span><span>游戏类型</span><span>游戏名称</span><span>游戏局号</span><span>投注金额</span><span>派奖金额</span><span>奖池派奖金额</span>',
        'BBIN_game': '<span class="wd1">投注时间</span><span class="wd1">注单流水号</span><span>游戏类型</span><span class="wd1">开奖结果</span><span>下注金额</span><span class="wd1">派彩金额</span><span class="wd1">会员有效投注额</span>',
        'SB_game': '<span class="transactionTime">下注时间</span><span class="sportTypeName">游戏类型</span><span class="competitionDetail">事项</span><span class="orderDetail">详情</span><span class="settleStatusName">结算状态</span><span class="stake">投注额</span><span class="validStake">输/赢</span><span class="validBetAmount2">有效投注</span><span class="winLoseAmount">中奖金额</span>',
        'IDN_game': '<span>结算时间</span><span>游戏类型</span><span>房间号</span><span>牌局</span><span>下注金额</span><span>返奖</span><span>输/赢</span>',
        'kgame_game': '<span class="kgame-personal-table-head">结算时间</span><span class="kgame-personal-table-head">游戏名称</span><span class="kgame-personal-table-head">牌局ID</span><span class="kgame-personal-table-head">下注额</span><span class="kgame-personal-table-head">有效下注<span class="question" title="统计有效投注，部分游戏可能产生平局结果，平局投注不计算在内"></span></span><span class="kgame-personal-table-head">返奖</span><span class="kgame-personal-table-head">盈亏</span>',
        'statisticsLottery': '<span class="sl">日期</span><span class="sl">投注</span><span class="sl">中奖</span><span class="sl">返点</span><span class="sl">会员活动</span><span class="sl">代理活动</span><span class="sl">盈亏</span>',
        'statisticsGame': '<span class="sg">日期</span><span class="sg">投注</span><span class="sg">中奖</span><span class="sg js-sg-act" style="position:relative;">活动</span><span class="sg">盈亏</span>'
    },
    selectParam: {},

    init: function () {
        var me = this;
        Api.getHtml('history', 'html', {}, function (res) {
            $('#admin_history').html(res);

            me.initSelect();
            me.initDatePicker();
            me.initEvent();

            var href = window.location.href.split('#');
            if (href[1] == 'trace') {
                $(".historyMenu li[data-type=trace]").trigger("click");
            } else if (href[1] == 'AG_game') {
                $(".historyMenu li[data-type=AG_game]").trigger("click");
            } else if (href[1] == 'PT_game') {
                $(".historyMenu li[data-type=PT_game]").trigger("click");
            } else if (href[1] == 'BY_game') {
                $(".historyMenu li[data-type=BY_game]").trigger("click");
            } else if (href[1] == 'BBIN_game') {
                $(".historyMenu li[data-type=BBIN_game]").trigger("click");
            } else if (href[1] == 'statistics') {
                $(".historyMenu li[data-type=statistics]").trigger("click");
            } else if (href[1] == 'SB_game') {
                $(".historyMenu li[data-type=SB_game]").trigger("click");
            } else if (href[1] == 'IDN_game') {
                $(".historyMenu li[data-type=IDN_game]").trigger("click");
            } else if (href[1] == 'kgame_game') {
                $(".historyMenu li[data-type=kgame_game]").trigger("click");
            } else if (href[1] == 'HKLHC_game') {
                $(".historyMenu li[data-type=HKLHC_game]").trigger("click");
            } else {
                $(".historyMenu li[data-type=lottery]").trigger("click");
            }
        });

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

        $('.history-pop .lotteryList').html(lt_option);
    },

    initDatePicker: function () {
        var $node = $('#admin_history');
        var date = new Date();
        var dateStart = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + ' 00:00';
        var dateEnd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + ' 23:59';

        var $from = $node.find("#date_from");
        var $end = $node.find("#date_end");

        $from.datetimepicker({
            id: 'dp_from',
            lang: 'zh',
            value: '-1970/01/01',
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
            maxDate: '+1970/01/01',
            step: 1,
            value: dateEnd,
            type: ':last',
            closeOnDateSelect: true,
            onChangeDateTime: function () {
                $('.quickDate li.on').removeClass('on');
            }
        });
    },

    initEvent: function () {
        var me = this;
        Api.getCommon("getBbinGameType", {}, function (data) {
            if (data.code == 1) {
                var data = data.result;
                var html = "<option value=''>全部游戏类型</option>"
                $.each(data, function (i, v) {
                    html += "<option value=" + v.typeId + ">" + v.typeName + "</option>"
                });
                $('.bbinGameList').html(html);
            }
        });
        $('.historyMenu').on('click', 'li', function () {
            window.location.hash = $(this).data('type');
            $(this).addClass('on').siblings().removeClass('on');
            $('.list .notran h6').html('暂无数据');
            $('.list .notran').hide();
            var lotteryList = $('.filter .lotteryList');
            var ag_status = $('.filter .ag-status');
            var sb_status = $('.filter .sb-status');
            var status = $('.filter .status');
            var typeList = $('.filter .typeList');
            var agGameList = $('.filter .agGameList');
            var ptGameList = $('.filter .ptGameList');
            var byGameList = $('.filter .byGameList');
            var bbinGameList = $('.filter .bbinGameList');
            var sbGameList = $('.filter .sbGameList');
            var idnGameList = $('.filter .idnGameList');
            var kgameList = $('.filter .kgameList');
            var statistics = $('.filter .statistics-hide');
            var tiploading = $(".tiploading");
            var hklhcHistory =  $('.filter .HKLHC-history');

            var $node = $('#admin_history');
            var $from = $node.find("#date_from");
            var $end = $node.find("#date_end");
            var date = new Date();
            var dateStart = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + ' 00:00';
            var dateEnd = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + ' 23:59';
            var dantiaoStatus = $('.filter .dantiao-status');
            var dateSelectLast = $('.quickDate li').last();

            $('.quickDate li').removeClass('on');
            switch ($(this).index()) {
                case 0:
                    lotteryList.show();
                    status.show();
                    tiploading.show();
                    dantiaoStatus.show();
                    ag_status.hide();
                    sb_status.hide();
                    sbGameList.hide();
                    idnGameList.hide();
                    kgameList.hide();
                    typeList.hide();
                    agGameList.hide();
                    ptGameList.hide();
                    byGameList.hide();
                    bbinGameList.hide();
                    statistics.hide();
                    dateSelectLast.show();
                    hklhcHistory.hide();
                    $('.list .box').show();
                    $('.list .box-trace').hide();
                    $('.list .box-ag').hide();
                    $('.list .box-pt').hide();
                    $('.list .box-by').hide();
                    $('.list .box-bbin').hide();
                    $('.list .box-statistics').hide();
                    $('.list .box-sb').hide();
                    $('.list .box-idn').hide();
                    $('.list .box-kgame').hide();

                    $from.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    $end.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    break;
                case 1:
                    lotteryList.show();
                    tiploading.show();
                    dantiaoStatus.show();
                    status.hide();
                    ag_status.hide();
                    sb_status.hide();
                    sbGameList.hide();
                    idnGameList.hide();
                    kgameList.hide();
                    typeList.hide();
                    agGameList.hide();
                    ptGameList.hide();
                    byGameList.hide();
                    bbinGameList.hide();
                    statistics.hide();
                    dateSelectLast.show();
                    hklhcHistory.hide();
                    $('.list .box').hide();
                    $('.list .box-trace').show();
                    $('.list .box-ag').hide();
                    $('.list .box-pt').hide();
                    $('.list .box-by').hide();
                    $('.list .box-bbin').hide();
                    $('.list .box-statistics').hide();
                    $('.list .box-sb').hide();
                    $('.list .box-idn').hide();
                    $('.list .box-kgame').hide();

                    $from.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    $end.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    break;
                case 2:
                    lotteryList.hide();
                    tiploading.show();
                    status.hide();
                    dantiaoStatus.hide();
                    ag_status.show();
                    sb_status.hide();
                    sbGameList.hide();
                    idnGameList.hide();
                    kgameList.hide();
                    typeList.hide();
                    agGameList.show();
                    ptGameList.hide();
                    byGameList.hide();
                    bbinGameList.hide();
                    statistics.hide();
                    dateSelectLast.show();
                    hklhcHistory.hide();
                    $('.list .box').hide();
                    $('.list .box-trace').hide();
                    $('.list .box-ag').show();
                    $('.list .box-pt').hide();
                    $('.list .box-by').hide();
                    $('.list .box-bbin').hide();
                    $('.list .box-statistics').hide();
                    $('.list .box-sb').hide();
                    $('.list .box-idn').hide();
                    $('.list .box-kgame').hide();

                    $from.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    $end.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    break;
                case 3:
                    lotteryList.hide();
                    status.hide();
                    ag_status.hide();
                    typeList.hide();
                    agGameList.hide();
                    sb_status.hide();
                    sbGameList.hide();
                    idnGameList.hide();
                    kgameList.hide();
                    ptGameList.hide();
                    bbinGameList.hide();
                    dantiaoStatus.hide();
                    byGameList.show();
                    tiploading.show();
                    statistics.hide();
                    dateSelectLast.show();
                    hklhcHistory.hide();
                    $('.list .box').hide();
                    $('.list .box-trace').hide();
                    $('.list .box-ag').hide();
                    $('.list .box-pt').hide();
                    $('.list .box-bbin').hide();
                    $('.list .box-by').show();
                    $('.list .box-statistics').hide();
                    $('.list .box-sb').hide();
                    $('.list .box-idn').hide();
                    $('.list .box-kgame').hide();

                    $from.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    $end.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    break;
                case 4:
                    lotteryList.hide();
                    status.hide();
                    dantiaoStatus.hide();
                    tiploading.show();
                    ag_status.hide();
                    sb_status.hide();
                    sbGameList.hide();
                    idnGameList.hide();
                    kgameList.hide();
                    typeList.show();
                    agGameList.hide();
                    ptGameList.show();
                    byGameList.hide();
                    bbinGameList.hide();
                    statistics.hide();
                    dateSelectLast.show();
                    hklhcHistory.hide();
                    $('.list .box').hide();
                    $('.list .box-trace').hide();
                    $('.list .box-ag').hide();
                    $('.list .box-pt').show();
                    $('.list .box-by').hide();
                    $('.list .box-bbin').hide();
                    $('.list .box-statistics').hide();
                    $('.list .box-sb').hide();
                    $('.list .box-idn').hide();
                    $('.list .box-kgame').hide();

                    $from.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    $end.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    break;
                case 5:
                    lotteryList.hide();
                    status.hide();
                    dantiaoStatus.hide();
                    ag_status.hide();
                    typeList.hide();
                    agGameList.hide();
                    sb_status.hide();
                    sbGameList.hide();
                    idnGameList.hide();
                    kgameList.hide();
                    tiploading.show();
                    ptGameList.hide();
                    byGameList.hide();
                    bbinGameList.show();
                    statistics.hide();
                    dateSelectLast.show();
                    hklhcHistory.hide();
                    $('.list .box').hide();
                    $('.list .box-trace').hide();
                    $('.list .box-ag').hide();
                    $('.list .box-pt').hide();
                    $('.list .box-by').hide();
                    $('.list .box-bbin').show();
                    $('.list .box-statistics').hide();
                    $('.list .box-sb').hide();
                    $('.list .box-idn').hide();
                    $('.list .box-kgame').hide();

                    $from.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    $end.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    break;
                
                case 6:
                    lotteryList.hide();
                    status.hide();
                    dantiaoStatus.hide();
                    ag_status.hide();
                    typeList.hide();
                    agGameList.hide();
                    sbGameList.show();
                    idnGameList.hide();
                    kgameList.hide();
                    sb_status.show();
                    tiploading.show();
                    ptGameList.hide();
                    sb_status.hide();
                    sbGameList.hide();
                    byGameList.hide();
                    bbinGameList.hide();
                    statistics.hide();
                    dateSelectLast.show();
                    hklhcHistory.hide();
                    $('.list .box').hide();
                    $('.list .box-trace').hide();
                    $('.list .box-ag').hide();
                    $('.list .box-sb').show();
                    $('.list .box-pt').hide();
                    $('.list .box-by').hide();
                    $('.list .box-bbin').hide();
                    $('.list .box-statistics').hide();
                    $('.list .box-idn').hide();
                    $('.list .box-kgame').hide();

                    $from.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31',
                    });
                    $end.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31',
                    });
                    break;
                case 7:
                    lotteryList.hide();
                    status.hide();
                    dantiaoStatus.hide();
                    ag_status.hide();
                    typeList.hide();
                    agGameList.hide();
                    sbGameList.hide();
                    idnGameList.show();
                    kgameList.hide();
                    sb_status.hide();
                    tiploading.show();
                    ptGameList.hide();
                    sb_status.hide();
                    sbGameList.hide();
                    byGameList.hide();
                    bbinGameList.hide();
                    statistics.hide();
                    dateSelectLast.show();
                    hklhcHistory.hide();
                    $('.list .box').hide();
                    $('.list .box-trace').hide();
                    $('.list .box-ag').hide();
                    $('.list .box-sb').hide();
                    $('.list .box-idn').show();
                    $('.list .box-pt').hide();
                    $('.list .box-by').hide();
                    $('.list .box-bbin').hide();
                    $('.list .box-statistics').hide();
                    $('.list .box-kgame').hide();

                    $from.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31',
                    });
                    $end.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31',
                    });
                    break;
                case 8:
                    lotteryList.hide();
                    status.hide();
                    dantiaoStatus.hide();
                    ag_status.hide();
                    typeList.hide();
                    agGameList.hide();
                    sbGameList.hide();
                    idnGameList.hide();
                    kgameList.show();
                    sb_status.hide();
                    tiploading.show();
                    ptGameList.hide();
                    sb_status.hide();
                    sbGameList.hide();
                    byGameList.hide();
                    bbinGameList.hide();
                    statistics.hide();
                    dateSelectLast.show();
                    hklhcHistory.hide();
                    $('.list .box').hide();
                    $('.list .box-trace').hide();
                    $('.list .box-ag').hide();
                    $('.list .box-sb').hide();
                    $('.list .box-idn').hide();
                    $('.list .box-kgame').show();
                    $('.list .box-pt').hide();
                    $('.list .box-by').hide();
                    $('.list .box-bbin').hide();
                    $('.list .box-statistics').hide();

                    $from.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31',
                    });
                    $end.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31',
                    });
                    break;
                case 9:
                    lotteryList.hide();
                    status.show();
                    tiploading.show();
                    dantiaoStatus.hide();
                    ag_status.hide();
                    sb_status.hide();
                    sbGameList.hide();
                    idnGameList.hide();
                    kgameList.hide();
                    typeList.hide();
                    agGameList.hide();
                    ptGameList.hide();
                    byGameList.hide();
                    bbinGameList.hide();
                    statistics.hide();
                    dateSelectLast.show();
                    // hklhcHistory.show();
                    hklhcHistory.find('select').val('1');
                    $('.list .box').show();
                    $('.list .box-trace').hide();
                    $('.list .box-ag').hide();
                    $('.list .box-pt').hide();
                    $('.list .box-by').hide();
                    $('.list .box-bbin').hide();
                    $('.list .box-statistics').hide();
                    $('.list .box-sb').hide();
                    $('.list .box-idn').hide();
                    $('.list .box-kgame').hide();

                    $from.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    $end.datetimepicker({
                        timepicker: true,
                        minDate: '-1970/03/31'
                    });
                    break;
                case 10:
                    lotteryList.hide();
                    status.hide();
                    dantiaoStatus.hide();
                    ag_status.hide();
                    typeList.hide();
                    agGameList.hide();
                    tiploading.show();
                    ptGameList.hide();
                    sb_status.hide();
                    sbGameList.hide();
                    idnGameList.hide();
                    kgameList.hide();
                    byGameList.hide();
                    bbinGameList.hide();
                    statistics.show();
                    dateSelectLast.hide();
                    hklhcHistory.hide();
                    $('.list .box').hide();
                    $('.list .box-trace').hide();
                    $('.list .box-ag').hide();
                    $('.list .box-pt').hide();
                    $('.list .box-by').hide();
                    $('.list .box-bbin').hide();
                    $('.list .box-statistics').show();
                    $('.list .box-sb').hide();
                    $('.list .box-idn').hide();
                    $('.list .box-kgame').hide();

                    $from.datetimepicker({
                        timepicker: false,
                        value: dateStart,
                        minDate: new Date(new Date().getTime() - 7 * 24 * 3600 * 1000),
                    });
                    $end.datetimepicker({
                        timepicker: false,
                        value: dateEnd,
                        minDate: new Date(new Date().getTime() - 7 * 24 * 3600 * 1000),
                    });
                    break;
                default:
                    break;
            }
            me.initSelect();
            $('.query').trigger('click');
            
        });

        $('.his_radio').on('change', function () {
            var disable = $(this).val() == '0' ? true : false;
            $('.lowerText').attr('disabled', disable);
        });

        $('.filter .HKLHC-history select').on('change', function () {
            var val = $(this).val();
            if (val === '1') {
                $('.filter .status').show();
            } else {
                $('.filter .status').hide();
            }
            $('#admin_history > div.filter > a').trigger('click');
        });

        $('.quickDate').on('click', 'li', function () {
            var v = parseInt($(this).find('a').attr('data-value'));
            var date = new Date();
            $(this).addClass('on').siblings().removeClass('on');

            var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
            var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
            var dateEnd = date.getFullYear() + "/" + month + "/" + day;
            date.setDate(date.getDate() + v);
            month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
            day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
            var dateStart = date.getFullYear() + "/" + month + "/" + day;
            if (v == '-1') {
                dateEnd = date.getFullYear() + "/" + month + "/" + day;
            }
            dateStart += ' 00:00';
            dateEnd += ' 23:59';

            $("#date_from").val(dateStart);
            $("#date_end").val(dateEnd);
        });


        $('.query').unbind('click').click(function () {
            var mode = $('.historyMenu li.on').attr('data-type');
            var params = {
                orderStartTime: $("#date_from").val(),
                orderEndTime: $("#date_end").val(),
                currPage: 1,
                pageSize: 20
            };
            var HKLHC = $('.filter .HKLHC-history select').val();
            if (mode === 'lottery') {
                params.lottery = $('.history-pop .lotteryList').val();
                params.status = $('.status').val();
                params.singleStatus = $('.filter .dantiao-status').val();
                me.searchHistory(params);
            } else if (mode === 'trace') {
                params.lottery = $('.history-pop .lotteryList').val();
                params.singleStatus = $('.filter .dantiao-status').val();
                me.searchTrace('getTraces', params);
            } else if (mode === 'AG_game') {
                params.queryType = 1;
                params.startTime = $("#date_from").val();
                params.endTime = $("#date_end").val();
                params.gameType = $(".agGameList").val();
                params.orderStatus = $(".ag-status").val();
                me.searchAgGame(params);
            } else if (mode === 'PT_game') {
                params.gameType = $(".typeList").val();
                params.gameId = $(".gameList").val();
                me.searchPtGame(params);
            } else if (mode === "BY_game") {
                params.startTime = $("#date_from").val();
                params.endTime = $("#date_end").val();
                me.searchByGame(params);
            } else if (mode === "BBIN_game") {
                params.startTime = $("#date_from").val();
                params.endTime = $("#date_end").val();
                params.gameType = $("select[name='bbinGameList']").val();
                me.searchBbinGame(params);
            } else if (mode === "statistics") {
                params.startTime = $("#date_from").val().slice(0, 10);
                params.endTime = $("#date_end").val().slice(0, 10);
                params.queryType = 2;
                params.queryName = $("select[name='game-lists']").val();
                me.searchStatistics(params);
            } else if (mode === "SB_game") {
                params.startTime = $("#date_from").val();
                params.endTime = $("#date_end").val();
                params.gameType = $("select[name='sbGameList']").val();
                params.settleStatus = $(".sb-status").val();
                me.searchSbGame(params);
            } else if (mode === "IDN_game") {
                params.gameType = $("select[name='idnGameList']").val();
                me.searchIdnGame(params);
            } else if (mode === "kgame_game") {
                params.gameType = $("select[name='kgameList']").val();
                me.searchKgame(params);
            } else if (mode === "HKLHC_game" && HKLHC === '1') {
                params.lottery = 'XGLHC';
                params.status = $('.status').val();
                me.searchHistory(params);
            } else if (mode === "HKLHC_game" && HKLHC === '2') {
                params.lottery = 'XGLHC';
                me.searchTrace('getTraces', params);
            }
            
        });
    },
    showBbinGameList: function () {
        var me = this;
        var html = "";

    },
    searchHistory: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.list .box ul').show();
        $el.find('.list').removeClass('AG_game').removeClass("BBIN_game").removeClass('SB_game').removeClass('BY_game').removeClass('trace');
        $el.find('.box .tip').hide();
        $el.find('.notran').hide();
        $el.find('.list .tit').html(me.tit.lottery);
        params.lottery === 'XGLHC' && $('.js-tit-trace').hide();
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
                    $el.find('.list .box ul').html('<div class="blank"></div>');
                    $el.find('.box .tip').show();
                    return false;
                }
              
                //数据绑定
                $el.find('.notran').hide();

                var his_html = '';
                var his_orders = d.his_orders;
                $(his_orders).each(function () {
                    var i = arguments[0];
                    var e = arguments[1];
                    his_html += '<li data-id="' + e.orderItemId + '" data-istrace="' + e.istrace + '" class="' + Q.oddEven(i) + '">\
						<span class="wd1">' + e.orderTime + '</span>\
						<span class="wd5">' + Q.nameLottery(e.lottery) + '</span>\
						<span title="' + Q.getMethodName(Q.getLottryCode(e.method), e.lottery) + '">' + Q.getMethodName(Q.getLottryCode(e.method), e.lottery) + '</span>\
						<span class="wd2">' + e.issue + '</span>\
						<span class="grid-toggle" alt="号码详情："><div class="wrapbox"><em alt="' + Q.descFormat(e.code, e.method) + '">' + Q.descFormat(e.code, e.method) + '</em></div></span>\
						<span>' + e.amount + '</span>';

                    if (e.awardMoney > 0 && e.status === 2) {
                        his_html += '<span class="his_red">' + e.awardMoney + '</span>\
							<span class="wd4 his_red">' + Q.statusChs(e.status) + '</span>';
                    } else {
                        his_html += '<span>' + e.awardMoney + '</span>\
							<span class="wd4">' + Q.statusChs(e.status) + '</span>';
                    }

                    his_html += '<span class="wd3 js-li-trace">' + Q.istraceCh(e.istrace) + `</span><span class="wd7 userprint" nums="${e.nums}">打印</span></li>`;
                });
                $el.find('.list .box ul').html(his_html).attr('type', 'lottery');
                params.lottery === 'XGLHC' && $('.js-li-trace').hide();                
                $el.find('.list .box').removeClass('hide');
                $el.find('.list .box-trace').addClass('hide');

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
                //投注内容点击弹出提示

                //翻页
                $el.find('.box .pagging').html(Q.showPagination(d.currPage, d.pageSize, d.totalItem, d.totalPage));
                $el.find('.box .pagging a').unbind('click').click(function () {
                    $el.find('.sppinner').css({
                        'top': 88
                    }).show();
                    params.currPage = $(this).attr('page');
                    me.searchHistory(params);
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
                        me.popDetail(li.attr('data-istrace'), p, params);
                    }
                });

                //点击打印操作
                $('.userprint').unbind('click').on('click', function (evt) {
                    evt.stopPropagation();
                    var me = $(this).parent();
                    var time = me.find('span').eq(0).html();
                    time = time.substr(5, time.length - 1);
                    var lottery_content = '<div class="PrintArea area1 all" style="color:#000;"><h2>彩票投注单</h2><ul><li><span>下单时间:</span><em>' + time + '</em></li>' +
                        '<li><span>投注彩种:</span><em>' + me.find('span').eq(1).html() + '</em></li>' +
                        '<li class="lottime"><span>投注期号:</span><em>' + me.find('span').eq(3).html() + '</em></li>' +
                        '<li class="lotbh"><span>注单编号:</span><em class="smallNum">' + me.attr('data-id') + '</em></li>' +
                        '<li><span>投注玩法:</span><em>' + me.find('span').eq(2).html() + '</em></li>' +
                        '<li><span>投注内容:</span><em class="printContent">' + me.find('span').eq(4).find('em').attr('alt') + '</em></li>' +
                        '<li><span>投注注数:</span><em>' + $(this).attr('nums') + '</em></li>' +                        
                        '<li class="lotje"><span>投注金额:</span><em>' + me.find('span').eq(5).html() + '元</em></li>' +
                        '<li class="lotmon"><span>总金额:</span><em>' + me.find('span').eq(5).html() + '元</em></li></ul></div><div class="button b1">确认打印</div>';
                    var preview = dialog({
                        title: '彩票投注单',
                        skin: 'lottery_preview',
                        width: 160,
                        content: lottery_content
                    }).showModal();

                    var mode = 'iframe';
                    var extraCss = '';
                    var print = 'div.PrintArea.area1';
                    var keepAttr = ['class', 'id', 'style'];
                    var headElements = '<meta charset="utf-8" />,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
                    var options = {
                        mode: mode,
                        popClose: false,
                        extraCss: extraCss,
                        retainAttr: keepAttr,
                        extraHead: headElements
                    };
                    $(print).printArea(options);
                    $('.lottery_preview .ui-dialog-close').trigger('click');

                })
            } else {
                $el.find('.tiploading').hide();
                $el.find('.notran').show();
                $el.find('.list .box ul').html('<div class="blank"></div>');
            }
            $el.find('.box .tip').show();
        });
    },

    searchTrace: function (url, params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.list').removeClass('AG_game').removeClass("BBIN_game").removeClass('SB_game').removeClass('BY_game').addClass('trace');
        $el.find('.box-trace .pagging').html('');
        $el.find('.box-trace .tip').hide();
        $el.find('.notran').hide();
        $el.find('.list .tit').html(me.tit.trace);
        $el.find('.list .box ul').hide();
        $el.find('.list .box-trace ul').html("");
        $el.find('.tiploading').show();
        Api.getCommon(url, params, function (d) {
            if (d === -1) {
                $(".loginlnk").trigger("click");
                return false;
            }
            if (d.result !== undefined) {
                d = d.result;

                if (d.list.length === 0) {
                    $el.find('.notran').show();
                    $el.find('.tiploading').hide();
                    $el.find('.list .box-trace ul').html('<div class="blank"></div>');
                    $el.find('.box-trace .tip').show();
                    return false;
                }

                //数据绑定
                $el.find('.notran').hide();
                $el.find('.tiploading').hide();
                $el.find('.tiploading').hide();

                var his_html = '';
                var his_orders = d.list;
                $(his_orders).each(function () {
                    var i = arguments[0];
                    var e = arguments[1];

                    his_html += '<li data-id="' + e.traceId + '" class="' + Q.itemTyp(e.buyTypey) + ' ' + Q.oddEven(i) + '">\
                        <span class="wd1">' + e.createTime + '</span>\
                        <span>' + Q.nameLottery(e.lottery) + '</span>\
						<span>' + Q.getMethodName(Q.getLottryCode(e.method), e.lottery) + '</span>\
						<span class="wd2">' + e.start + '</span>\
						<span class="grid-toggle" alt="号码详情："><div class="wrapbox"><em alt="' + Q.descFormat(e.code, e.method) + '">' + Q.descFormat(e.code, e.method) + '</em></div></span>\
						<span style="width:75px;">¥' + e.totalMoney + '</span>\
						<span style="width:75px;">¥' + e.finishMoney + '</span>\
						<span style="width:75px;">' + Q.istraceCh(e.winStop) + '</span>\
						<span class="wd3">' + e.status + '</span>\
						<span class="wd8 traceprint">打印</span>\
						</li>';
                });

                $el.find('.list .box-trace ul').html(his_html).attr('type', 'trace');
                $el.find('.list .box-trace').removeClass('hide');
                $el.find('.list .box-trace').show();
                $el.find('.list .box').addClass('hide');

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
                $el.find('.list .box-trace .grid-total .grid-amount').html('¥' + Q.doubleFormat(d.totalMoney));
                $el.find('.list .box-trace .grid-total .grid-finish').html('¥' + Q.doubleFormat(d.finishMoney));
                $el.find('.list .box-trace .grid-total .grid-cancel').html('¥' + Q.doubleFormat(d.cancelMoney));
                $el.find('.list .box-trace .grid-total').show();
                $el.find('.sppinner').hide();
                $el.find('.list').removeClass('SB_game');

                $el.find('.box-trace .tip').show();

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

                    $el.find('.sppinner').css({
                        'top': 88
                    }).show();
                    History.searchTrace(url, params);
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
                                History.chkTraceDetail(p, that, that, params);
                            }
                        });
                        pop_lt.showModal();
                    }
                });

                //点击操作打印按钮弹出打印框
                $el.find('.traceprint').off('click').on('click', function (evt) {
                    evt.stopPropagation();
                    var p = {
                        'traceId': $(this).parent().attr('data-id')
                    };
                    Api.getTrace(p, function (d) {
                        d = d.result;
                        d.createTime = (d.createTime).substring(5, d.createTime.length - 1);
                        var preview_trace = dialog({
                            title: '彩票追号投注单',
                            width: 160,
                            skin: 'trace_preview',
                            content: '<div class="PrintArea area2" style="color:#000;"><h2>彩票追号投注单</h2><ul><li><span>下单时间:</span><em>' + d.createTime + '</em></li>' +
                                '<li><span>投注彩种:</span><em>' + Q.nameLottery(d.lottery) + '</em></li>' +
                                '<li><span>开始期号:</span><em>' + d.start + '</em></li>' +
                                '<li><span>追号期数:</span><em>' + d.issues.length + '</em></li>' +
                                '<li class="lottime"><span>追号模式:</span><em>' + Q.traceType(d.traceType) + '</em></li>' +
                                '<li class="lotbh"><span>追号编号:</span><em class="smallNum">' + d.traceId + '</em></li>' +
                                '<li><span>投注玩法:</span><em>' + Q.getMethodName(Q.getLottryCode(d.method), d.lottery) + '</em></li>' +
                                '<li><span>追号内容:</span><em class="printContent">' + Q.descFormat(d.code, d.method) + '</em></li>' +
                                '<li><span>投注金额:</span><em>' + d.totalMoney + '元</em></li></ul>' +
                                '<ul class="trace_each lotje"></ul><li class="lotmon"><span>总金额:</span><em>' + d.totalMoney + '元</em></li></div><div class="button b1">确认打印</div>'
                        }).showModal();
                        var trace_every = '<li><span>奖期</span><em>金额(元)</em></li>';
                        for (var i = 0; i < d.issues.length; i++) {
                            trace_every += '<li><span>' + d.issues[i].issue + '</span><em>' + d.issues[i].money + '</em></li>'
                        }
                        $('.trace_preview').find('.trace_each').append(trace_every);

                        var mode = 'iframe';
                        var extraCss = '';
                        var print = 'div.PrintArea.area2';
                        var keepAttr = ['class', 'id', 'style'];
                        var headElements = '<meta charset="utf-8" />,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
                        var options = {
                            mode: mode,
                            popClose: false,
                            extraCss: extraCss,
                            retainAttr: keepAttr,
                            extraHead: headElements
                        };
                        $(print).printArea(options);
                        $('.trace_preview .ui-dialog-close').trigger('click');

                    })
                });
            }
        });
    },

    searchAgGame: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.list').removeClass('trace').removeClass("BBIN_game").removeClass('SB_game').removeClass('BY_game').addClass('AG_game');
        $el.find('.box-ag .pagging').html('');
        $el.find('.box-ag .tip').hide();
        $el.find('.notran').hide();
        $el.find('.list .tit').html(me.tit.AG_game);
        $el.find('.list .box-ag ul').html("");
        $el.find('.tiploading').show();


        Api.getCommon('getAgHistory', params, function (d) {
            if (d.result !== undefined) {
                d = d.result;

                if (d.datas.length == 0) {
                    $el.find('.notran').show();
                    $el.find('.tiploading').hide();
                    // $el.find('.tit').hide();
                    $el.find('.list .box-ag ul').html('<div class="blank"></div>');
                    $el.find('.box-ag .tip').show();
                    return false;
                }


                // $el.find('.list .tit').show().html(me.tit.AG_game);
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
                    me.searchAgGame(params);
                });
                $el.find('.notran').hide();


            }
        });
    },

    searchPtGame: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.list').removeClass('trace').removeClass("BBIN_game").removeClass('SB_game').removeClass('BY_game').addClass('AG_game');
        $el.find('.box-pt .pagging').html('');
        $el.find('.box-pt .tip').hide();
        $el.find('.notran').hide();
        $el.find('.list .tit').html(me.tit.PT_game);
        $el.find('.list .box-pt ul').html("");
        $el.find('.tiploading').show();


        Api.getCommon('getPtHistory', params, function (d) {
            if (d.result !== undefined) {
                d = d.result;

                if (d.his_orders.length == 0) {
                    $el.find('.notran').show();
                    $el.find('.tiploading').hide();
                    // $el.find('.tit').hide();
                    $el.find('.list .box-pt ul').html('<div class="blank"></div>');
                    $el.find('.box-pt .tip').show();
                    return false;
                }


                $el.find('.notran').hide();
                $el.find('.tiploading').hide();
                // $el.find('.list .tit').show().html(me.tit.PT_game);
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
                    me.searchPtGame(params);
                });
                $el.find('.notran').hide();



            }
        });
    },
    searchByGame: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.list').removeClass('trace').removeClass("BBIN_game").removeClass('SB_game').removeClass('AG_game').addClass('BY_game');
        $el.find('.box-by .pagging').html('');
        $el.find('.list .tit').html(me.tit.BY_game);
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
                    // $el.find('.tit').hide();
                    $el.find('.list .box-by ul').html('<div class="blank"></div>');
                    $el.find('.box-by .tip').show();
                    return false;
                }


                $el.find('.notran').hide();
                $el.find('.tiploading').hide();
                // $el.find('.list .tit').show().html(me.tit.BY_game);
                //数据绑定

                var his_html = '';
                var his_orders = d.his_orders;
                $(his_orders).each(function () {
                    var i = arguments[0];
                    var e = arguments[1];
                    his_html += '<li class="' + Q.oddEven(i) + '">\
						<span class="wd1">' + e.sceneStarttime + '</span>\
						<span class="wd1">' + e.sceneEndtime + '</span>\
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
                    me.searchByGame(params);
                });
                $el.find('.notran').hide();
                // 点击弹出历史记录详情


            }
        });
    },
    searchBbinGame: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.list').removeClass('trace').removeClass("BY_game").removeClass('SB_game').removeClass('AG_game').addClass('BBIN_game');
        $el.find('.box-bbin .pagging').html('');
        $el.find('.box-bbin .tip').hide();
        $el.find('.list .tit').html(me.tit.BBIN_game);
        $el.find('.list .box-bbin ul').html("");
        $el.find('.notran').hide();
        $el.find('.tiploading').show();

        Api.getCommon('getBbinHistory', params, function (d) {
            if (d.result !== undefined) {
                d = d.result;

                if (d.his_orders.length == 0) {
                    $el.find('.notran').show();
                    // $el.find('.tit').hide();
                    $el.find('.tiploading').hide();
                    $el.find('.list .box-bbin ul').html('<div class="blank"></div>');
                    $el.find('.box-bbin .tip').show();
                    return false;
                }


                $el.find('.notran').hide();
                $el.find('.tiploading').hide();
                // $el.find('.list .tit').show().html(me.tit.BBIN_game);
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
                    me.searchBbinGame(params);
                });
                $el.find('.notran').hide();
                // 点击弹出历史记录详情


            }
        });
    },
    searchSbGame: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.list').removeClass('trace').removeClass("BY_game").removeClass('BBIN_game').removeClass('AG_game').addClass('SB_game');
        $el.find('.box-sb .pagging').html('');
        $el.find('.box-sb .tip').hide();
        $el.find('.notran').hide();
        $el.find('.list .tit').html(me.tit.SB_game);
        $el.find('.list .box-sb ul').html("");
        $el.find('.tiploading').show();


        Api.getCommon('getSbHistory', params, function (res) {
            if (res.code === 1) {
                let his_orders = res.result.his_orders;
                if (his_orders.length === 0) {
                    $el.find('.notran').show();
                    $el.find('.tiploading').hide();
                    // $el.find('.tit').hide();
                    $el.find('.list .box-sb ul').html('<div class="blank"></div>');
                    $el.find('.box-sb .tip').show();
                    return false;
                }


                // $el.find('.list .tit').show().html(me.tit.SB_game);
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


                //合计
                $el.find('.sppinner').hide();

                //翻页
                $el.find('.box-sb .pagging').html(Q.showPagination(params.currPage, res.result.pageSize, res.result.totalItem, res.result.totalPage));
                $el.find('.box-sb .pagging a').unbind('click').click(function () {
                    $el.find('.sppinner').css({
                        'top': 88
                    }).show();
                    params.currPage = $(this).attr('page');
                    me.searchSbGame(params);
                });
                $el.find('.notran').hide();

                // 自适应高度
                $el.find('.list .box-sb ul li').each(function() {
                    var height = 35;
                    $(this).find('span').each(function() {
                        console.log($(this).height());
                        if($(this).height() > height) {
                            height = $(this).height();
                        }
                    });
                    $(this).height(height);
                });

                $el.find('.box-sb .tip').show();
            }
        });
    },
    searchIdnGame: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.list').removeClass('trace').removeClass("BY_game").removeClass('BBIN_game').removeClass('SB_game').addClass('AG_game');
        $el.find('.box-idn .pagging').html('');
        $el.find('.box-idn .tip').hide();
        $el.find('.notran').hide();
        $el.find('.list .tit').html(me.tit.IDN_game);
        $el.find('.list .box-idn ul').html("");
        $el.find('.tiploading').show();


        Api.getCommon('getIdnHistory', params, function (res) {
            if (res.code === 1) {
                let his_orders = res.result.his_orders;
                if (his_orders.length === 0) {
                    $el.find('.notran').show();
                    $el.find('.tiploading').hide();
                    // $el.find('.tit').hide();
                    $el.find('.list .box-idn ul').html('<div class="blank"></div>');
                    $el.find('.box-idn .tip').show();
                    return false;
                }


                // $el.find('.list .tit').show().html(me.tit.IDN_game);
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


                //合计
                $el.find('.sppinner').hide();

                //翻页
                $el.find('.box-idn .pagging').html(Q.showPagination(params.currPage, res.result.pageSize, res.result.totalItem, res.result.totalPage));
                $el.find('.box-idn .pagging a').unbind('click').click(function () {
                    $el.find('.sppinner').css({
                        'top': 88
                    }).show();
                    params.currPage = $(this).attr('page');
                    me.searchIdnGame(params);
                });
                $el.find('.notran').hide();

                // 自适应高度
                $el.find('.list .box-idn ul li').each(function() {
                    var height = 35;
                    $(this).find('span').each(function() {
                        if($(this).height() > height) {
                            height = $(this).height();
                        }
                    });
                    $(this).height(height);
                });

                $el.find('.box-idn .tip').show();
            }
        });
    },
    searchKgame: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.list').removeClass('trace').removeClass("BY_game").removeClass('BBIN_game').removeClass('SB_game').addClass('AG_game');
        $el.find('.box-kgame .pagging').html('');
        $el.find('.box-kgame .tip').hide();
        $el.find('.notran').hide();
        $el.find('.list .tit').html(me.tit.kgame_game);
        $el.find('.list .box-kgame ul').html("");
        $el.find('.tiploading').show();


        Api.getCommon('getKgameHistory', params, function (res) {
            if (res.code === 1) {
                let his_orders = res.result.his_orders;
                if (his_orders.length === 0) {
                    $el.find('.notran').show();
                    $el.find('.tiploading').hide();
                    // $el.find('.tit').hide();
                    $el.find('.list .box-kgame ul').html('<div class="blank"></div>');
                    $el.find('.box-kgame .tip').show();
                    return false;
                }


                // $el.find('.list .tit').show().html(me.tit.IDN_game);
                //数据绑定
                $el.find('.notran').hide();
                $el.find('.tiploading').hide();

                let his_html = his_orders.map((item, index) => {
                    return `
                        <li class="${Q.oddEven(index)}">
                            <span class="kgame-personal-table-item ellipsis">${item.betTime}</span>
                            <span class="kgame-personal-table-item ellipsis">${item.game}</span>
                            <span class="kgame-personal-table-item ellipsis">${item.periode}</span>
                            <span class="kgame-personal-table-item ellipsis">${item.betAmount}</span>
                            <span class="kgame-personal-table-item ellipsis">${item.validBetAmount}</span>
                            <span class="kgame-personal-table-item ellipsis">${item.winAmount}</span>
                            <span class="kgame-personal-table-item ellipsis">${item.profitAndLoss}</span>
                        </li>
                    `;
                }).join('');

                $el.find('.list .box-kgame ul').html(his_html).attr('type', 'IDN_game');
                $el.find('.list .box-kgame').removeClass('hide');


                //合计
                $el.find('.sppinner').hide();

                //翻页
                $el.find('.box-kgame .pagging').html(Q.showPagination(params.currPage, res.result.pageSize, res.result.totalItem, res.result.totalPage));
                $el.find('.box-kgame .pagging a').unbind('click').click(function () {
                    $el.find('.sppinner').css({
                        'top': 88
                    }).show();
                    params.currPage = $(this).attr('page');
                    me.searchKgame(params);
                });
                $el.find('.notran').hide();

                // 自适应高度
                $el.find('.list .box-kgame ul li').each(function() {
                    var height = 35;
                    $(this).find('span').each(function() {
                        if($(this).height() > height) {
                            height = $(this).height();
                        }
                    });
                    $(this).height(height);
                });

                $el.find('.box-kgame .tip').show();
            }
        });
    },
    searchStatistics: function (params) { // 查询盈亏统计
        var me = this;
        var $el = $('#admin_history');
        $el.find('.list').removeClass('AG_game').removeClass("BBIN_game").removeClass('SB_game').removeClass('BY_game').removeClass('trace');
        $el.find('.box-statistics .pagging').html('');
        $el.find('.box-statistics .tip').hide();
        if (params.queryName === 'CP') {
            $el.find('.list .tit').html(me.tit.statisticsLottery);
        } else {
            $el.find('.list .tit').show().html(me.tit.statisticsGame);
        }
        
        $el.find('.list .box-statistics ul').html("");
        $el.find('.notran').hide();
        $el.find('.tiploading').show();

        Api.getCommon('getStatistics', params, function (d) {
            if (d.result !== undefined) {
                d = d.result;

                if (d.totleSum.length == 0) {
                    $el.find('.notran').show();
                    // $el.find('.tit').hide();
                    $el.find('.tiploading').hide();
                    $el.find('.list .box-statistics ul').html('<div class="blank"></div>');
                    $el.find('.box-statistics .tip').show();
                    return false;
                }

                $el.find('.notran').hide();
                $el.find('.tiploading').hide();
                //数据绑定

                var his_html = '';
                var totalSum = '';
                if (params.queryName === 'CP') {
                    var his_orders = d.list;
                    var his_totalSum = d.totleSum;
                    $el.find('.list .tit').show().html(me.tit.statisticsLottery);
                    $(his_orders).each(function () {
                        var i = arguments[0];
                        var e = arguments[1];
                        his_html += `<li><span class="sl">${e.betDate}</span><span class="sl">${e.betAmount}</span><span class="sl">${e.bonusAmount}</span><span class="sl">${e.rebateAmount}</span><span class="sl">${e.mbrAtvtCash}</span><span class="sl">${e.agtAtvtCash}</span><span class="sl">${e.profitAndLoss}</span>`;
                    });
                    totalSum = `<li class="count"><span class="sl">总计</span><span class="sl">${his_totalSum.totalBetAmount}</span><span class="sl">${his_totalSum.totalBonusAmount}</span><span class="sl">${his_totalSum.totalRebateAmount}</span><span class="sl">${his_totalSum.totalMbrAtvtCash}</span><span class="sl">${his_totalSum.totalAgtAtvtCash}</span><span class="sl">${his_totalSum.totalProfitAndLoss}</span>`;
                } else {
                    var his_orders = d.reportList;
                    var his_totalSum = d.totleSum;
                    $el.find('.list .tit').show().html(me.tit.statisticsGame);
                    $(his_orders).each(function () {
                        var i = arguments[0];
                        var e = arguments[1];
                        his_html += `<li><span class="sg">${e.gameTime}</span><span class="sg">${e.betAmount}</span><span class="sg">${e.bonusAmount}</span><span class="sg">${params.queryName==='HKLHC'?e.rebateAmount:e.activityBonus}</span><span class="sg">${e.profitAndLoss}</span>`;
                    });
                    totalSum = `<li class="count"><span class="sg">总计</span><span class="sg">${his_totalSum.betAmount}</span><span class="sg">${his_totalSum.bonusAmount}</span><span class="sg">${params.queryName==='HKLHC'?his_totalSum.rebateAmount:his_totalSum.activityBonus}</span><span class="sg">${his_totalSum.profitAndLoss}</span>`;
                }
                if (params.queryName === 'HKLHC') {
                    $('.js-sg-act').append(`<em class="question" style="position: absolute; width: 18px; height:18px; background: url(../sobet/images/question.png) no-repeat;top: 0;bottom: 0;margin: auto;margin-left: 10px;" title="活动显示数据实际为返点数据"></em>`);
                }
                $el.find('.list .box-statistics ul').html(his_html).attr('type', 'statistics');
                $el.find('.list .box-statistics ul').append(totalSum);
                $el.find('.list .box-statistics').removeClass('hide');
                $el.find('.box-statistics .tip').show();
                //合计

                $el.find('.sppinner').hide();

                //翻页
                /* $el.find('.box-statistics .pagging').html(Q.showPagination(d.currPage, params.pageSize, d.totalItem, d.totalPage));
                 $el.find('.box-statistics .pagging a').unbind('click').click(function() {
                     $el.find('.sppinner').css({'top':88}).show();
                     params.currPage = $(this).attr('page');
                     me.searchStatistics(params);
                 });*/
                $el.find('.notran').hide();
            } else {
                if (d.code === -1) {
                    $el.find('.tiploading').hide();
                    $el.find('.list .box-statistics ul').html('<div class="blank"></div>');
                    $el.find('.box-statistics .tip').show();
                    $el.find('.notran h6').html(d.msg);
                    $el.find('.notran').show();
                    return;
                }
            }
        });
    },
    //点击弹出投注详情  istrace-是否追号  p-参数，订单id
    popDetail: function (istrace, p, params) {
        var me = this;
        var html = '<a href="javascript:;" class="check_deal">打印</a><table><tbody>';
        var detail = dialog({
            id: 'recency-details',
            skin: 'sobet recency-pop recency-pop-h',
            title: '投注详细',
            fixed: true,
            onshow: function () {
                $('.list .box ul li.load').removeClass('load');
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
        if(params.lottery === 'XGLHC') {
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
                /* '<th>是否追号：</th>', */
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
                '<th>是否追号：</th>',
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
                tmp.push(Q.getMethodName(Q.getLottryCode(d.method), d.lottery) + Q.getPositionName(d.position, d.lottery));
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
                //是否追号
                if (d.lottery !== 'XGLHC') {
                    tmp.push(`${d.istrace === 0 ? '否' : '是'}`)
                };
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
                            cancel = '<a href="javascript:;" data-id="' + tmp[i] + '" id="cancel_order" class="btnCancel">撤 单</a>';
                        } else if (cl === 1) {
                            html += '<a href="javascript:;" class="btnCancel disabled">个人撤单</a>';
                        }
                        html += '</td></tr>';
                    } else {
                        html += '<tr>' + th[i] + '<td>' + tmp[i] + '</td></tr>';
                    }
                }
                html += '</tbody></table>';
                //html += '<a href="javascript:;" class="check_deal">投注单预览</a>';

                //如果此订单是追号订单
                if (parseInt(d.istrace, 10) === 1) {
                    traceInfo = '<a class="traceview hand xxxx">查看追号信息</a>';
                }
                if ($('#cancel_order').length == 0) {
                    $(pop.node).find('.ui-dialog-grid').append(cancel);
                }

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
                    $('.check_deal').hide();
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
                                Navigation.getUserMoney();
                            }
                        }, {
                            id: 'cancle_cancel',
                            skin: 'cancel',
                            value: '取消'
                        }]
                    }).showModal();
                });

                d.orderTime = (d.orderTime).substr(5, d.orderTime.length - 1);
                var lottery_content = '<div class="PrintArea area1 all" style="color:#000;"><h2>彩票投注单</h2><ul><li><span>下单时间:</span><em>' + d.orderTime + '</em></li>' +
                    '<li><span>投注彩种:</span><em>' + Q.nameLottery(d.lottery) + '</em></li>' +
                    '<li class="lottime"><span>投注期号:</span><em>' + d.issue + '</em></li>' +
                    '<li class="lotbh"><span>注单编号:</span><em class="smallNum">' + d.orderId + '</em></li>' +
                    '<li><span>投注玩法:</span><em>' + Q.getMethodName(Q.getLottryCode(d.method), d.lottery) + Q.getPositionName(d.position, d.lottery) + '</em></li>' +
                    '<li><span>投注内容:</span><em class="printContent">' + Q.descFormat(d.code, d.method) + '</em></li>' +
                    '<li><span>投注注数:</span><em>' + d.nums + '</em></li>' +                    
                    '<li class="lotje"><span>投注金额:</span><em>' + d.amount + '元</em></li>' +
                    '<li class="lotmon"><span>总金额:</span><em>' + d.amount + '元</em></li></ul></div><div class="button b1">确认打印</div>';
                //查看投注订单预览
                var checkdeal = $(detail.node).find('.check_deal');
                checkdeal.off('click').on('click', function () {
                    var preview = dialog({
                        title: '彩票投注单',
                        skin: 'lottery_preview',
                        width: 160,
                        content: lottery_content
                    }).showModal();

                    var mode = 'iframe';
                    var extraCss = '';
                    var print = 'div.PrintArea.area1';
                    var keepAttr = ['class', 'id', 'style'];
                    var headElements = '<meta charset="utf-8" />,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
                    var options = {
                        mode: mode,
                        popClose: false,
                        extraCss: extraCss,
                        retainAttr: keepAttr,
                        extraHead: headElements
                    };
                    $(print).printArea(options);
                    $('.lottery_preview .ui-dialog-close').trigger('click');

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
                    '<div class="cancelTrace"><a class="hand disabled" name="', d.traceId, '">追号终止</a></div>',
                    '</td></tr>',
                    '<tr><th>追号时间：</th><td>', d.createTime, '</td></tr>',
                    '<tr><th>彩种：</th><td>', Q.nameLottery(d.lottery), '</td></tr>',
                    '<tr><th>追号内容：</th><td><em class="desc">', Q.descFormat(d.code, d.method), '</em></td></tr>',
                    '<tr><th>玩法：</th><td>', Q.getMethodName(Q.getLottryCode(d.method), d.lottery), '</td></tr>',
                    /* '<tr><th>追号模式：</th><td>', Q.traceType(d.traceType), '</td></tr>', */
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
                    '<div class="cancelTrace"><a class="hand disabled" name="', d.traceId, '">追号终止</a></div>',
                    '</td></tr>',
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
                    $(that.node).find('.ui-dialog-title').html('<em>追号详情</em> <a class="hand backInfo" rel="0">(返回)</a><a href="javascript:;" class="check_trace">打印</a>');
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

            $(that.node).find('.ui-dialog-title a.backInfo').unbind('click').click(function () {
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

            $(that.node).find('.ui-dialog-title a.check_trace').unbind('click').click(function () {
                d.createTime = (d.createTime).substring(5, d.createTime.length - 1);
                var preview_trace = dialog({
                    title: '彩票追号投注单',
                    width: 160,
                    skin: 'trace_preview',
                    content: '<div class="PrintArea area2" style="color:#000;"><h2>彩票追号投注单</h2><ul><li><span>下单时间:</span><em>' + d.createTime + '</em></li>' +
                        '<li><span>投注彩种:</span><em>' + Q.nameLottery(d.lottery) + '</em></li>' +
                        '<li><span>开始期号:</span><em>' + d.start + '</em></li>' +
                        '<li><span>追号期数:</span><em>' + d.issues.length + '</em></li>' +
                        '<li class="lottime"><span>追号模式:</span><em>' + Q.traceType(d.traceType) + '</em></li>' +
                        '<li class="lotbh"><span>追号编号:</span><em class="smallNum">' + d.traceId + '</em></li>' +
                        '<li><span>投注玩法:</span><em>' + Q.getMethodName(Q.getLottryCode(d.method), d.lottery) + '</em></li>' +
                        '<li><span>追号内容:</span><em class="printContent">' + Q.descFormat(d.code, d.method) + '</em></li>' +
                        '<li><span>投注金额:</span><em>' + d.totalMoney + '元</em></li></ul>' +
                        '<ul class="trace_each lotje"></ul><li class="lotmon"><span>总金额:</span><em>' + d.totalMoney + '元</em></li></div><div class="button b1">确认打印</div>'
                }).showModal();
                var trace_every = '<li><span>奖期</span><em>金额(元)</em></li>';
                for (var i = 0; i < d.issues.length; i++) {
                    trace_every += '<li><span>' + d.issues[i].issue + '</span><em>' + d.issues[i].money + '</em></li>'
                }
                $('.trace_preview').find('.trace_each').append(trace_every);

                var mode = 'iframe';
                var extraCss = '';
                var print = 'div.PrintArea.area2';
                var keepAttr = ['class', 'id', 'style'];
                var headElements = '<meta charset="utf-8" />,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
                var options = {
                    mode: mode,
                    popClose: false,
                    extraCss: extraCss,
                    retainAttr: keepAttr,
                    extraHead: headElements
                };
                $(print).printArea(options);
                $('.trace_preview .ui-dialog-close').trigger('click');

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
                        Navigation.getUserMoney();
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