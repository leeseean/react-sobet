/**
 * Created by whyson on 2017/3/29.
 */
/* jshint devel:true */

var nowTrace = nowTrace || {};

nowTrace = {
    w: 1070,
    h: 560,
    maxrate: 7.5,
    usermax: 6,
    tit: {
        'recharger': '<span style="width:25%">时间</span><span style="width: 25%">订单编号</span><span style="width: 20%">充值方式</span><span style="width: 20%">金额</span><span style="width: 10%">状态</span>',
        'draw': '<span style="width:20%">时间</span><span style="width:20%">订单编号</span><span style="width:15%">金额</span><span style="width:15%">手续费</span><span style="width:20%">实际金额</span><span style="width:10%">状态</span>',
        'boxTrace': '<span style="width:25%">时间</span><span style="width:25%">订单编号</span><span style="width:10%">转账从</span><span style="width:10%">转账到</span><span style="width:20%">金额(元)</span><span style="width:10%">状态</span>',
        'nowMoney': '<span style="width:15%">交易时间</span><span style="width:10%">钱包类型</span><span style="width:10%">交易类型</span><span style="width:15%">交易金额(元)</span><span style="width:15%">交易前账户余额(元)</span><span style="width:15%">交易后账户余额(元)</span><span style="width:20%">关联订单编号</span>',
    },
    selectParam: {},
    init: function () {
        var me = this;
        Api.getHtml('recharge', 'html', {}, function (res) {
            $('#admin_history').html(res);
            me.initDatePicker();
            me.initEvent();

            var href = window.location.href.split('#');
            if (href[1] == 'recharger') {
                $(".historyMenu li[data-type=recharger]").trigger("click");
            } else if (href[1] == 'draw') {
                $(".historyMenu li[data-type=draw]").trigger("click");
            } else if (href[1] == 'boxTrace') {
                $(".historyMenu li[data-type=boxTrace]").trigger("click");
            } else if (href[1] == 'nowMoney') {
                $(".historyMenu li[data-type=nowMoney]").trigger("click");
            } else {
                $(".historyMenu li[data-type=nowMoney]").trigger("click");
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
            minDate: new Date(new Date().getTime() - 7 * 24 * 3600 * 1000),
            maxDate: new Date(),
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
            minDate: new Date(new Date().getTime() - 7 * 24 * 3600 * 1000),
            maxDate: new Date(),
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
        var recharger = $('.filter .recharger');
        var boxTrace = $('.filter .boxTrace');
        var nowMoney = $('.filter .nowMoney');
        var tiploading = $(".tiploading");
        var optgame = {};
        Api.getptList(function (data) {
            var data = data;
            var html = "";
            let htmlcb = "";
            $.each(data, function (i, v) {
                html += "<option value=" + v.cbId + ">" + v.cbName + "</option>";
                if (v.cbId !== "sobet_01") {
                    htmlcb += "<option value=" + v.cbId + ">" + v.cbName + "</option>";
                }
                optgame[v.cbId] = v.cbName;
            })
            $("#turnOut").append(html);
            $('#cbType').append(htmlcb);
            $(".nowMoney select[name=queryType]").show().val(0);
            $(".nowMoney select[name=gamequeryType]").hide().val(0)
        });
        $("#turnOut").off().on("change", function () {
            var html = "";
            var id = $(this).val();
            if (id === "") {
                html = "<option value=''>请选择</option>";
                $("#turnIn").html(html);
                return;
            }
            $.each(optgame, function (i, v) {
                if (id === "sobet_01") {
                    if (i !== "sobet_01") {
                        html += "<option value=" + i + ">" + v + "</option>";
                    }
                } else {
                    html = "<option value='sobet_01'>彩票钱包</option>";
                }
            })
            $("#turnIn").html(html)
        });

        $("#cbType").off().on("change", function () {
            var id = $(this).val();
            if (id === "cb_01") {
                $(".nowMoney select[name=queryType]").show().val(0);
                $(".nowMoney select[name=gamequeryType]").hide().val(0);
            } else {
                $(".nowMoney select[name=queryType]").hide().val(0);
                $(".nowMoney select[name=gamequeryType]").show().val(0);
                if (id === "idn_01") {
                    $('.nowMoney select[name=gamequeryType] option').last().attr('value', 32);
                    $('.nowMoney select[name=gamequeryType] option').last().html('&nbsp;&nbsp;&nbsp;> 购买虚拟物品');
                } else {
                    $('.nowMoney select[name=gamequeryType] option').last().attr('value', 26);
                    $('.nowMoney select[name=gamequeryType] option').last().html('&nbsp;&nbsp;&nbsp;> 小费');
                }
            }
        });
        Api.getCommon("getlinks", {
            currPage: 1
        }, (d) => {
            let data = d.result;
            let contract1 = sessionStorage.getItem('contract1');
            let contract0 = sessionStorage.getItem('contract0');
            let userType = sessionStorage.getItem('userType');
            if (userType === '0') {
                $('.nowMoney .queryType option[value=7]').remove();
                $('.nowMoney .queryType option[value=8]').remove();
                $('.nowMoney .queryType option[value=9]').remove();
                $('.nowMoney .queryType option[value=10]').remove();
                $('.nowMoney .queryType option[value=15]').remove();
                $('.nowMoney .queryType option[value=16]').remove();
                $('.nowMoney .queryType option[value=23]').remove();
                $('.nowMoney .queryType option[value=28]').remove();
                $('.nowMoney .queryType option[value=29]').remove();
            } else {
                if (data.maxPoint < 0.078) {
                    if (contract1 !== 1) {
                        $('.nowMoney .queryType option[value=29]').remove();
                        $('.nowMoney .queryType option[value=10]').remove();
                    }
                    if (contract0 !== 1) {
                        $('.nowMoney .queryType option[value=28]').remove();
                        $('.nowMoney .queryType option[value=9]').remove();
                    }
                } else {
                    if (contract1 !== 1) {
                        $('.nowMoney .queryType option[value=29]').remove();
                    }
                    if (contract0 !== 1) {
                        $('.nowMoney .queryType option[value=28]').remove();
                    }
                }
            }
        });
        $('.historyMenu').on('click', 'li', function () {
            window.location.hash = $(this).data('type');
            $(this).addClass('on').siblings().removeClass('on');
            $('.list .notran').hide();
            switch ($(this).index()) {
                case 0:
                    tiploading.show();
                    recharger.hide();
                    boxTrace.hide();
                    nowMoney.show();
                    break;
                case 1:
                    tiploading.show();
                    recharger.show();
                    boxTrace.hide();
                    nowMoney.hide();
                    break;
                case 2:
                    tiploading.show();
                    recharger.show();
                    boxTrace.hide();
                    nowMoney.hide();
                    break;
                case 3:
                    tiploading.show();
                    recharger.hide();
                    boxTrace.show();
                    nowMoney.hide();
                    break;
            }
            $('.query').trigger('click');
        });

        $('.query').unbind('click').click(function () {
            var mode = $('.historyMenu li.on').attr('data-type');
            tiploading.show();
            var params = {
                startDate: $("#date_from").val(),
                endDate: $("#date_end").val(),
                page: 1,
                pageSize: 10
            };
            if (mode == 'recharger') {
                params.queryType = $('.recharger #queryType').val();
                me.searchHistory(params);
            } else if (mode == 'draw') {
                params.queryType = $('.recharger #queryType').val();
                me.searchTrace(params);
            } else if (mode == 'boxTrace') {
                params.turnOut = $("#turnOut").val();
                params.turnIn = $("#turnIn").val();
                params.queryType = $('.boxTrace #queryType').val();
                me.searchboxTrace(params);
            } else if (mode == 'nowMoney') {
                params.gameType = $(".typeList").val();
                params.gameId = $(".gameList").val();
                params.bagType = $("#cbType").val();
                if ($(".nowMoney select[name=queryType]").css("display") != "none") {
                    params.changeType = $(".nowMoney select[name=queryType]").val()
                } else {
                    params.changeType = $(".nowMoney select[name=gamequeryType]").val()
                }
                params.spsn = $(".gldd").val();
                me.searchnowMoney(params);
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
        $el.find('.notran').hide();
        $el.find('.pagging').html('');
        $el.find('.list .tit').html(me.tit.recharger);
        $el.find('.list .box  ul').html("");
        $el.find('.list .box-draw ul').html("");
        $el.find('.list .box-boxTrace  ul').html("");
        $el.find('.list .box-nowMoney  ul').html("");
        $el.find('.list .box ul').html("");
        $el.find('.tiploading').show();
        $el.find('.box .tip').hide();        

        function callfont(x) {
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

        let q = ["其他", "转账", "第三方支付"];
        Api.getpageList(params, function (d) {
            if (d === -1) {
                $(".loginlnk").trigger("click");
                return false;
            }
            $el.find('.tiploading').show();
            if (d.result !== undefined) {
                d = d.result;

                if (!d.data || d.data == "") {
                    // $el.find('.tit').hide();
                    $el.find('.notran').show();
                    $el.find('.tiploading').hide();
                    $el.find('.list .box ul').html('<div class="blank"></div>').show();
                    $el.find('.box .tip').show();        
                    return false;
                }

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
						<span style="width:10%">' + callfont(parseInt(e.status)) + '</span>\
						</li>';
                });

                $el.find('.list .box ul').html(his_html).attr('type', 'recharger');
                $el.find('.list .box').removeClass('hide').show();
                $el.find('.list .box-draw').addClass('hide').hide();
                $el.find('.list .box-boxTrace ').addClass('hide').hide();
                $el.find('.list .box-nowMoney').addClass('hide').hide();
                $el.find('.list').removeClass('draw').removeClass('nowMoney').removeClass("boxTrace");

                $el.find('.sppinner').hide();

                //翻页
                $el.find('.box .pagging').html(Q.showPagination(d.page, d.pageSize, d.total, d.pageCount));
                $el.find('.box .pagging a').unbind('click').click(function () {
                    $el.find('.sppinner').css({
                        'top': 88
                    }).show();
                    params.page = $(this).attr('page');
                    me.searchHistory(params);
                });
            } else {
                $el.find('.notran').show();
                $el.find('.tiploading').hide();
                $el.find('.list .box ul').html('<div class="blank"></div>');
            }
            $el.find('.box .tip').hide();        
        });
    },
    searchTrace: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.notran').hide();
        $el.find('.pagging').html('');
        $el.find('.list .tit').html(me.tit.draw);
        $el.find('.list .box ul').html("");
        $el.find('.list .box-draw .tip').hide();
        $el.find('.list .box-draw ul').html("");
        $el.find('.list .box-boxTrace  ul').html("");
        $el.find('.list .box-nowMoney  ul').html("");
        $el.find('.tiploading').show();

        function callfont(x, failText) {
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
                    return `失败${failText ? `(<b title="${failText}">${failText.length >　4 ? failText.slice(0,4) + '...' : failText}</b>)` : ''}`;
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
                    $el.find('.notran').show();
                    $el.find('.tiploading').hide();
                    $el.find('.list .box-trace ul').html('<div class="blank"></div>').show();
                    $el.find('.list .box-draw .tip').show();
                    return false;
                }

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
						<span style="width:10%">' + callfont(parseInt(e.status), e.errorCode) + '</span>\
						</li>';
                });

                $el.find('.list .box-draw ul').html(his_html).attr('type', 'draw');
                $el.find('.list .box-draw').removeClass('hide').show();
                $el.find('.list .box').addClass('hide').hide();
                $el.find('.list .box-boxTrace ').addClass('hide').hide();
                $el.find('.list .box-nowMoney').addClass('hide').hide();
                $el.find('.list').addClass('draw').removeClass('nowMoney').removeClass("boxTrace");


                $el.find('.sppinner').hide();

                //翻页
                if (d.data && d.data.length > 0) {
                    $el.find('.box-draw .pagging').html(Q.showPagination(d.page, d.pageSize, d.total, d.pageCount));
                } else {
                    $el.find('.list .box-draw ul').html('<div class="blank">暂无数据</div>');
                    $el.find('.list .box-draw ul div.blank').height(200);
                    $el.find('.list .box-draw .grid-total .grid-amount,.list .box-draw .grid-total .grid-finish,.list .box-draw .grid-total .grid-cancel').html('');
                }

                $el.find('.box-draw .pagging a').unbind('click').click(function () {
                    params.page = $(this).attr('page');
                    $el.find('.sppinner').css({
                        'top': 88
                    }).show();
                    me.searchTrace(params);
                });
            } else {
                $el.find('.notran').show();
                $el.find('.tiploading').hide();
                $el.find('.list .box ul').html('<div class="blank"></div>').show();
            }
            $el.find('.list .box-draw .tip').show();
        });
    },
    searchboxTrace: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.notran').hide();
        $el.find('.pagging').html('');
        $el.find('.list .tit').html(me.tit.boxTrace);
        $el.find('.box-boxTrace .tip').hide();
        $el.find('.list .box  ul').html("");
        $el.find('.list .box-draw ul').html("");
        $el.find('.box-boxTrace .tip').hide();
        $el.find('.list .box-boxTrace  ul').html("");
        $el.find('.list .box-nowMoney  ul').html("");
        $el.find('.tiploading').show();

        function callfont(x) {
            switch (x) {
                case 0:
                    return "成功";
                    break;
                case 1:
                    return "待处理";
                    break;
                case 2:
                    return "失败";
                    break;
                default:
                    return "其他";
            }
        }

        Api.gettransferList(params, function (d) {
            if (d === -1) {
                $(".loginlnk").trigger("click");
                return false;
            }
            $el.find('.tiploading').show();
            if (d.result !== undefined) {
                d = d.result;

                if (!d.data || d.data == "") {
                    $el.find('.notran').show();
                    $el.find('.tiploading').hide();
                    $el.find('.list .box-boxTrace ul').html('<div class="blank"></div>').show();
                    $el.find('.box-boxTrace .tip').show();
                    return false;
                }

                //数据绑定
                $el.find('.notran').hide();
                $el.find('.tiploading').hide();

                var his_html = '';
                var his_orders = d.data;
                $(his_orders).each(function () {
                    var i = arguments[0];
                    var e = arguments[1];
                    his_html += '<li class="' + Q.oddEven(i) + '">\
						<span style="width:25%">' + e.createTime + '</span>\
						<span style="width:25%">' + e.spsnNo + '</span>\
						<span style="width:10%">' + e.switchToCbId + '</span>\
						<span style="width:10%">' + e.removeToCbId + '</span>\
						<span style="width:20%">' + me.toFixedNum(e.cash) + '</span>\
						<span style="width:10%">' + callfont(e.status) + '</span>';
                });

                $el.find('.list .box-boxTrace ul').html(his_html).attr('type', 'boxTrace');
                $el.find('.list .box-boxTrace').removeClass('hide').show();

                $el.find('.list .box').addClass('hide').hide();
                $el.find('.list .box-draw ').addClass('hide').hide();
                $el.find('.list .box-nowMoney').addClass('hide').hide();
                $el.find('.list').removeClass('draw').removeClass("nowMoney").addClass('boxTrace');

                //合计
                $el.find('.sppinner').hide();

                //翻页
                $el.find('.box-boxTrace .pagging').html(Q.showPagination(d.page, d.pageSize, d.total, d.pageCount + 1));
                $el.find('.box-boxTrace .pagging a').unbind('click').click(function () {
                    $el.find('.sppinner').css({
                        'top': 88
                    }).show();
                    params.page = $(this).attr('page');
                    me.searchboxTrace(params);
                });
                $el.find('.notran').hide();
            } else {
                $el.find('.notran').show();
                $el.find('.tiploading').hide();
                $el.find('.list .box-boxTrace ul').html('<div class="blank"></div>').show();
            }
            $el.find('.box-boxTrace .tip').show();            
        });
    },
    searchnowMoney: function (params) {
        var me = this;
        var $el = $('#admin_history');
        $el.find('.notran').hide();
        const bagType = {
            "cb_01": "彩票钱包",
            "pt_01": "PT钱包",
            "ag_01": "AG钱包",
            "bbin_01": "BBIN钱包",
            "sb_01": "沙巴钱包",
            "idn_01": "IDN钱包",
            "kg_01": "KG钱包",
        };
        $el.find('.list .tit').html(me.tit.nowMoney);
        $el.find('.pagging').html('');

        $el.find('.box-nowMoney .tip').hide();
        $el.find('.list .box  ul').html("");
        $el.find('.list .box-draw ul').html("");
        $el.find('.list .box-boxTrace  ul').html("");
        $el.find('.list .box-nowMoney  ul').html("");
        $el.find('.tiploading').show();

        function optType(x, cases) {
            return x == 1 ? "+" + cases : "-" + cases;
        };

        function befores(opttype, cases, point) {
            if (opttype == 1) {
                return point - cases
            } else {
                return point + cases
            }
        }

        Api.getubsList(params, function (d) {
            if (d === -1) {
                $(".loginlnk").trigger("click");
                return false;
            }
            $el.find('.tiploading').show();
            if (d.result !== undefined) {
                d = d.result;
                if (!d.data || d.data == "") {
                    $el.find('.notran').show();
                    $el.find('.tiploading').hide();
                    $el.find('.list .box-nowMoney ul').html('<div class="blank"></div>').show();
                    $el.find('.box-nowMoney .tip').show();
                    return false;
                }

                $el.find('.notran').hide();
                $el.find('.tiploading').hide();
                //数据绑定

                var his_html = '';
                var his_orders = d.data;

                $(his_orders).each(function () {
                    var i = arguments[0];
                    var e = arguments[1];
                    his_html += '<li class="' + Q.oddEven(i) + '">\
                    <span style="width:15%">' + e.createTime + '</span>\
                    <span style="width:10%">' + bagType[e.bagType] + '</span>\
                    <span style="width:10%">' + e.changeTypeString + '</span>\
                    <span style="width:15%" class="addColor">' + optType(e.optType, e.amount) + '</span>'
                    if (e.bagType == 'bbin_01') {
                        if (e.point) {
                            his_html += ' <span style="width:15%">' + me.toFixedNum3(parseFloat(befores(e.optType, e.amount, e.point))) + '</span>\
                                    <span style="width:15%">' + me.toFixedNum3(e.point) + '</span>';
                        } else {
                            his_html += ' <span style="width:15%">--</span>\
                                      <span style="width:15%">--</span>';
                        }

                    } else {
                        his_html += ' <span style="width:15%">' + me.toFixedNum3(parseFloat(befores(e.optType, e.amount, e.point))) + '</span>\
                                    <span style="width:15%">' + me.toFixedNum3(e.point) + '</span>';
                    }
                    his_html += '	<span style="width:20%">' + e.spsn + '</span>'
                });


                $el.find('.list .box-nowMoney ul').html(his_html).attr('type', 'nowMoney');

                $(".addColor").each((i, v) => {
                    if ($(v).text().toString().indexOf("+") !== -1) {
                        $(v).css("color", "red")
                    } else {
                        $(v).css("color", "green")
                    }
                });
                $el.find('.list .box-nowMoney').removeClass('hide').show();

                $el.find('.list .box').addClass('hide').hide();
                $el.find('.list .box-draw ').addClass('hide').hide();
                $el.find('.list .box-boxTrace').addClass('hide').hide();
                $el.find('.list').removeClass('draw').removeClass("boxTrace").addClass('nowMoney');

                //合计

                $el.find('.sppinner').hide();

                //翻页
                $el.find('.box-nowMoney .pagging').html(Q.showPagination(d.page, params.pageSize, d.total, d.pageCount));
                $el.find('.box-nowMoney .pagging a').unbind('click').click(function () {
                    $el.find('.sppinner').css({
                        'top': 88
                    }).show();
                    params.page = $(this).attr('page');
                    me.searchnowMoney(params);
                });
                $el.find('.notran').hide();
            } else {
                $el.find('.notran').show();
                $el.find('.tiploading').hide();
                $el.find('.list .box-nowMoney ul').html('<div class="blank"></div>').show();
            }
            $el.find('.box-nowMoney .tip').show();            
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
    },
    toFixedNum3(num) {
        var stringNum = String(num);
        var strNumArr = stringNum.split('.');
        if (strNumArr.length >= 2) {
            stringNum = strNumArr[1] + '000';
            num = strNumArr[0] + '.' + stringNum.substring(0, 3) + '';
        } else {
            num = strNumArr[0] + '.000';
        }
        return "¥" + " " + num;
    }
};
$(document.body).append('<iframe id="login-iframe" style="display: none;"></iframe>');
$("iframe#login-iframe").attr('src', '/lottery/u/login?backType=0&t=' + new Date().getTime());
$("iframe#login-iframe").load(function () {
    var $headGreet = $('.head-greet'),
        $headerMenu = $headGreet.find('.header_menu');
    function showTab(){
        var b = window.location.href.split("#")[1];
        if (b == "recharger" || b == "draw" || b == "boxTrace" || b == "nowMoney") {
            nowTrace.init();
            $("#aside dl").eq(1).find("a").addClass("on");
            $("#aside dl").eq(1).siblings().find("a").removeClass("on");
        } else if (b == "personal" || b == "password" || b == "emails" || b == "mib" || b == "capitalPw" || b == "bank" || b === 'webind' || /webind/ig.test(b)) {
            Api.getNickname(function (nickRes) {
                accountManagement.init(nickRes.userInfo.nikeName, nickRes.userInfo.cn, nickRes.userInfo.logined);
            });
            $("#aside dl").eq(3).find("a").addClass("on");
            $("#aside dl").eq(3).siblings().find("a").removeClass("on");
        } else if (b == "lottery" || b == "trace" || b == "AG_game" || b == "PT_game" || b == "BY_game" || b == "BBIN_game" || b == "statistics" || b == "SB_game" || b == "kgame_game" || b == "IDN_game" || b == "HKLHC_game") {
            History.init();
            $("#aside dl").eq(0).find("a").addClass("on");
            $("#aside dl").eq(0).siblings().find("a").removeClass("on");
        } else if (b == "inbox") {
            message.init();
            $("#aside dl").eq(2).find("a").addClass("on");
            $("#aside dl").eq(2).siblings().find("a").removeClass("on");
        }
    }
    showTab();
    $("#aside dl dt").on("click", function () {
        let on = $(this).find("a").data("name");
        $(this).parent().siblings().find("a").removeClass("on");
        $(this).parent().siblings().find(".mc_icon").css("color", "#eee");
        if (on === "deals") {
            History.init();
        } else if (on === "rechargeOrderList") {
            nowTrace.init();
        } else if (on === "userCenter") {
            window.location.hash = 'personal';
            Api.getNickname(function (nickRes) {
                accountManagement.init(nickRes.userInfo.nikeName, nickRes.userInfo.cn, nickRes.userInfo.logined);
            });
        } else if (on === "inbox") {
            window.location.hash = on;
            message.init();
        }
        
    })
    $headGreet.find('.headR a').unbind('click').click(function(){
        $headerMenu.css('display','none');
        setTimeout(function(){
            $headerMenu.css('display','');
            showTab();
        },100)
    })

});