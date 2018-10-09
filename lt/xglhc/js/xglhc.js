var Lottery = Lottery || {};

Lottery = {
    lt: 'XGLHC',
    type: 'lottery',
    issue: '',
    next: [],
    countDownSec: 2,
    get method() {
        return Plate.method;
    },
    isStop: false,
    noanimation: false,
    printStatus: localStorage.getItem('printStatus'),
    submitType: null,
    ifClientEnv() { //判断是web端还是pc客户端,公司客户端嵌套网页，用这个做投注类型判断
        return window.navigator.userAgent.indexOf('mcbrowser') !== -1 || window.navigator.userAgent.indexOf('SobetClient') !== -1;
    },
    descFormat(code, method) {
        var me = this;
        var m = method.split('_');
        var desc = code.split('|');

        return code.split(',').join('').split('|').join(',');
    },
    showLogout() {
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
    },
    init() {
        const me = this;
        me.initEvent();
        me.updateIssueInfo(1);
        me.getIssueInfoLast();
        Trace.init({
            'lottery': 1
        });
    },
    initEvent() {
        const me = this;
        //添加选号
        $('.js-confirm').off('click').on('click', function (event) {
            event.preventDefault();
            if ($(this).hasClass('disabled')) {
                return false;
            }
            if ($('.trace-box .trace-icon').hasClass('on')) {
                $('.trace-box .hand').trigger('click');
            }
            const $orderList = $('.js-orders-list');
            const orderHtml = me.getOrder();
            $orderList.prepend(orderHtml);
            $('.js-submit').removeClass('disabled');
            if (Trace.chkRateTrace()) {
                Trace.toggleRateTab(true);
            } else {
                Trace.toggleRateTab(false);
            }
            $orderList.find('li').removeClass('blink animated').eq(0).addClass('blink animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('blink animated');
            });
            $(this).addClass('disabled');
            me.resetPlate();
            me.setSubmitData();
        });
        //删除订单
        $('.js-orders-list').off('click').on('click', '.delete', function (e) {
            e.preventDefault();

            $(this).parent('li').remove();

            if (Trace.chkRateTrace()) {
                Trace.toggleRateTab(true);
            } else {
                Trace.toggleRateTab(false);
            }

            if ($('.js-orders-list').children('li').length === 0) {
                $('.js-submit').addClass('disabled');
            }
            // 计算提交注单总注数、总金额，并准备提交注单需要的数据
            me.setSubmitData();
        });
        //投注
        $('.js-submit').off('click').on('click', function (event) {
            event.preventDefault();
            me.submitType = '正常投注';
            if ($(this).hasClass('disabled')) {
                return false;
            }
            if (dialog.get('lottery_submit')) {
                dialog.get('lottery_submit').close().remove();
            }
            const tip = dialog({
                id: 'lottery_submit',
                align: 'top',
                skin: 'tip'
            });
            const $btn = $(event.target);
            const btnTxt = $btn.text();
            if ($btn.hasClass('loading')) {
                tip.content('请不要频繁点击！');
                tip.show($btn[0]);
                setTimeout(() => {
                    tip.close().remove();
                }, 600);
                return false;
            }
            if (me.isStop) {
                tip.content('当前彩种暂停销售，请关注官方动态！');
                tip.show($btn[0]);
                setTimeout(() => {
                    tip.close().remove();
                }, 2000);
                return false;
            }
            
            const orderObj = me.getOrderObj();
            const confirmDialogHtml = me.getConfirmDialogHtml();
           
            const confirmOpt = {
                width: 396,
                content: confirmDialogHtml,
                skin: 'confirm-again',
                fixed: true,
                cancel: false,
                button: [{
                    id: 'lt_ok',
                    value: '确&nbsp;&nbsp;定',
                    callback: function (evt) {
                        $btn.html('操作中').addClass('loading');
                        orderObj["issue"] = me.issue;
                        me.addOrderApi(orderObj, $btn, btnTxt);
                    }
                }, {
                    id: 'lt_cancel',
                    skin: 'cancel',
                    value: '取&nbsp;&nbsp;消',
                    callback: function (evt) {
                        
                    }
                }],
                onshow: function () {
                    if (me.printStatus) {
                        $('.printStatus input').attr("checked", "checked");
                    } else {
                        $('.printStatus input').removeAttr("checked");
                    }
                    if ($('.printStatus').find('input').is(':checked')) {
                        $('.printStatus').click(function () {
                            $(this).find('input').removeAttr("checked");
                            localStorage.set('printStatus', false);
                            me.printStatus = false;
                        });
                    } else {
                        $('.printStatus').click(function () {
                            $(this).find('input').attr("checked", "checked");
                            localStorage.set('printStatus', true);
                            me.printStatus = true;
                        });
                    }
                }
            };
            dialog(confirmOpt).showModal();
        });
        //快速投注
        $('.js-quickSubmit').off('click').on('click', function (event) {
            event.preventDefault();
            me.submitType = '快速投注';
            const $btn = $(this);
            const btnTxt = $(this).text();
            if (dialog.get('lottery_submit')) {
                dialog.get('lottery_submit').close().remove();
            }
            const tip = dialog({
                id: 'lottery_submit',
                align: 'top',
                skin: 'tip'
            });
            if ($(this).hasClass('disabled')) {
                return false;
            }
            if ($(this).hasClass('loading')) {
                let tip = dialog({
                    id: 'lottery_quickSubmit',
                    align: 'top',
                    skin: 'tip'
                });
                tip.content('请不要频繁点击！');
                tip.show($btn[0]);
                setTimeout(function () {
                    tip.close().remove();
                }, 600);
                return false;
            }
            if (me.isStop) {
                tip.content('当前彩种暂停销售，请关注官方动态！');
                tip.show($btn[0]);
                setTimeout(() => {
                    tip.close().remove();
                }, 2000);
                return false;
            }
            const orderObj = me.getQuickOrderObj();
            const confirmDialogHtml = me.getQuickConfirmDialogHtml();
            const confirmOpt = {
                width: 396,
                content: confirmDialogHtml,
                skin: 'confirm-again',
                fixed: true,
                cancel: false,
                button: [{
                    id: 'lt_ok',
                    value: '确&nbsp;&nbsp;定',
                    callback: function (evt) {
                        $btn.html('操作中').addClass('loading');
                        orderObj["issue"] = me.issue;
                        me.addOrderApi(orderObj, $btn, btnTxt);
                    }
                }, {
                    id: 'lt_cancel',
                    skin: 'cancel',
                    value: '取&nbsp;&nbsp;消',
                    callback: function (evt) {}
                }],
                onshow: function () {
                    if (me.printStatus) {
                        $('.printStatus input').attr("checked", "checked");
                    } else {
                        $('.printStatus input').removeAttr("checked");
                    }
                    if ($('.printStatus').find('input').is(':checked')) {
                        $('.printStatus').click(function () {
                            $(this).find('input').removeAttr("checked");
                            localStorage.set('printStatus', false);
                            me.printStatus = false;
                        });
                    } else {
                        $('.printStatus').click(function () {
                            $(this).find('input').attr("checked", "checked");
                            localStorage.set('printStatus', true);
                            me.printStatus = true;
                        });
                    }
                }
            };
            dialog(confirmOpt).showModal();
        });
        window.addEventListener('beforeunload', () => {
            sessionStorage.removeItem('Odds');//刷新页面的去掉赔率缓存防止一直从缓存拿赔率
        });
    },
    //正常投注提交订单参数
    getOrderObj() {
        const me = this;
        const order = [];
        $('.js-orders-item').each((index, item) => {
            const wanfa = $(item).data('wanfa');
            const m_method = $(item).data('type');
            let code = String($(item).data('code'));
            code = /^tm_tm_ws|^ztws_ztws_ztws/.test(m_method) ? code.replace('尾','') : code;//尾数“0尾”只传0
            const countArr = $(item).data('count').split('|');
            const money = $(item).data('money');
            const price = $(item).data('price'); 
            const nums = $(item).data('nums');                                   
            const odd = $(item).data('odd');
            const point = $(item).data('point');
            order.push({
                "method": m_method,
                "code": String(code),
                "nums": nums,
                "piece": "1",
                "price": String(price),
                "odds": String(odd),
                "point": String(point),
                "amount": String(money)
            });
        });
        const orderObj = {
            "lottery": me.lt,
            "issue": me.issue,
            "order": JSON.stringify(order),
            "betType": 2,
            "sourceType": me.ifClientEnv() ? 6 : 0
        };
        return orderObj;
    },
    //快速投注提交订单参数
    getQuickOrderObj() {
        const me = this;
        const order = [];
        if (Plate.plateType === 'input') {
            $('.js-plate-item').each((index, item) => {
                const m_method = $(item).find('.js-odd-value').attr('m_method');
                let code = $(item).find('.js-plate-item-num').attr('code');
                code = /^tm_tm_ws|^ztws_ztws_ztws/.test(m_method) ? code.replace('尾','') : code;//尾数“0尾”只传0
                const odd = $(item).find('.js-odd-value').attr('odd');
                const point = $(item).find('.js-odd-value').attr('point');
                const money = $(item).find('.js-plate-item-input').val();
                if ($(item).find('.js-plate-item-input').val()) {
                    order.push({
                        "method": m_method,
                        "code": String(code),
                        "nums": "1",
                        "piece": "1",
                        "price": String(money),
                        "odds": String(odd),
                        "point": String(point),
                        "amount": String(money)
                    });
                }
            });
        }
        if (Plate.plateType === 'click') {
            switch (Plate.method) {
                case 'lx_lx_2lx':
                case 'lx_lx_3lx':
                case 'lx_lx_4lx':                    
                case 'lm_lm_2z2':
                case 'lm_lm_3z2':
                case 'lm_lm_3z3':    
                    const code = [];
                    $('.js-click-num-item.on').each((index, item) => {
                        const cn = $(item).attr('cn');
                        code.push(cn);
                    });
                    const method = Plate.method;    
                    const nums = $('.js-count-num').text();                    
                    const money = $('.js-total-money').text();
                    const point = Plate.odds[method][`rate${Plate.rateType}`];
                    const odd =  Plate.odds[method][`bonus${Plate.rateType}`];
                    order.push({
                        "method": method,
                        "code": String(code),
                        "nums": nums,
                        "piece": "1",
                        "price": $('.js-clickType-per-input').val(),
                        "odds": String(odd),
                        "point": String(point),
                        "amount": String(money)
                    });
                    break;
                case 'hzdxds_hzdxds_hzdxds':
                    //拆单
                    $('.js-click-num-item.on').each((index, item) => {
                        const m_method = $(item).attr('m_method');
                        const cn = $(item).attr('cn');
                        const code = cn;
                        const money = $('.js-clickType-per-input').val();
                        const point = Plate.odds[m_method][`rate${Plate.rateType}`];
                        const odd =  Plate.odds[m_method][`bonus${Plate.rateType}`];
                        order.push({
                            "method": m_method,
                            "code": String(code),
                            "nums": "1",
                            "piece": "1",
                            "price": $('.js-clickType-per-input').val(),
                            "odds": String(odd),
                            "point": String(point),
                            "amount": String(money)
                        });
                    });
                    break;
                default:
                    break;
            }
        }
        const orderObj = {
            "lottery": me.lt,
            "issue": me.issue,
            "order": JSON.stringify(order),
            "betType": 2,
            "sourceType": me.ifClientEnv() ? 6 : 0
        };
        return orderObj;
    },
    //正常投注提交订单的提示框内容
    getConfirmDialogHtml() {
        const me = this;
        const htmlWelcome = `<h2>请确认投注香港六合彩</h2>`;
        const htmlMoney = `<h4>投注总金额：<em>${parseInt($('.js-amount').text())}</em>元`;        
        let htmlList = '';
        $('.js-orders-item').each((index,item)=>{
            const wanfa = $(item).data('wanfa');
            const code = $(item).data('code');
            const money = $(item).data('money');
            htmlList += `
                <dd>
                    <p>${wanfa}</p><em>${code}</em><span>投注金额:<i>${money}</i></span>
                </dd>
            `;
        });
        const confirmDialogHtml = `
            ${htmlWelcome}
            <div class="list">
                <dt><em class="issue js-submit-issue">期号${me.issue}</em></dt>
                ${htmlList}
            </div>
            ${htmlMoney}
            <label class="printStatus"><input type="checkbox" value="print">打印注单</label>
        `;
        return confirmDialogHtml;
    },
    //快速投注提交订单的提示框内容
    getQuickConfirmDialogHtml() {
        const me = this;
        const htmlWelcome = `<h2>请确认投注香港六合彩</h2>`;
        const htmlMoney = `<h4>投注总金额：<em>${$('.js-total-money').text()}</em>元`;        
        let htmlList = '';
        if (Plate.plateType === 'input') {
            $('.js-plate-item').each((index, item) => {
                const wanfa = $('.js-subTab.on').text();
                const code = $(item).find('.js-plate-item-num').text();
                const money = $(item).find('.js-plate-item-input').val();
                if (money) {
                    htmlList += `
                        <dd>
                            <p>${wanfa}</p><em>${code}</em><span>投注金额:<i>${money}</i></span>
                        </dd>
                    `;
                }
            });
        }
        if (Plate.plateType === 'click') {
            switch (Plate.method) {
                case 'lx_lx_2lx':
                case 'lx_lx_3lx':
                case 'lx_lx_4lx':                    
                case 'lm_lm_2z2':
                case 'lm_lm_3z2':
                case 'lm_lm_3z3':    
                    const code = [];
                    $('.js-click-num-item.on').each((index, item) => {
                        const cn = $(item).attr('cn');
                        code.push(cn);
                    });
                    const wanfa = $('.js-subTab.on').text();
                    const money = $('.js-total-money').text();
                    htmlList += `
                        <dd>
                            <p>${wanfa}</p><em>${code.join(',')}</em><span>投注金额:<i>${money}</i></span>
                        </dd>
                    `;
                    break;
                case 'hzdxds_hzdxds_hzdxds':
                    //拆单
                    $('.js-click-num-item.on').each((index, item) => {
                        const cn = $(item).attr('cn');
                        const code = cn;
                        const wanfa = $('.js-subTab.on').text();
                        const money = $('.js-clickType-per-input').val();
                        htmlList += `
                            <dd>
                                <p>${wanfa}</p><em>${code}</em><span>投注金额:<i>${money}</i></span>
                            </dd>
                        `;
                    });
                    break;
                default:
                    break;
            }
        }
        const confirmDialogHtml = `
            ${htmlWelcome}
            <div class="list">
                <dt><em class="issue js-submit-issue">期号${me.issue}</em></dt>
                ${htmlList}
            </div>
            ${htmlMoney}
            <label class="printStatus"><input type="checkbox" value="print">打印注单</label>
        `;
        return confirmDialogHtml;
    },
    //下单
    addOrderApi(obj, btn, txt) {
        var me = this;
        var tip = dialog({
            id: 'lottery_submit',
            align: 'top',
            skin: 'tip',
        });
        Api.addOrder(obj, function (d) {
            // 重置提交注单状态
            btn.html(txt).removeClass('loading');
            if (d === -1) {
                // 判断用户中心登录
                User.chkLogin(function () {
                    me.addOrderApi(obj, btn, txt, tip);
                });
            } else {
                d.code = parseInt(d.code, 10);

                if (d.code === 1) {
                    if (me.submitType === '快速投注') {
                        me.resetPlate();
                    } else {
                        me.resetOrders();//追号和正常投注清空订单栏
                    }
                   
                    $('#lottery .number').find('i.on').each(function () {
                        $(arguments[1]).click();
                    });

                    tip.content('订单提交成功！');
                    tip.show();
                    me.printStatus && me.printOrder(obj);
                    me.getUserMoney();
                } else if (d.code === 4001) {
                    var tip1 = dialog({
                        title: '余额不足',
                        skin: 'noBalance',
                        fixed: true,
                        content: '<p>对不起，您的余额不足，为保证您可以顺利购彩</p><p>建议您充值后再进行购彩。</p><a href="' + User.app + '/pay/rechargeIndexView" target="_blank" class="btn-recharge">立刻充值</a>',
                        onshow: function () {
                            $(this.node).find('.btn-recharge').unbind('click').click(function (evt) {
                                tip1.close().remove();
                            });
                        }
                    }).showModal();
                } else if (d.msg) {
                    tip.content(d.msg);
                    tip.show(btn[0]);
                }

                setTimeout(function () {
                    tip.close().remove();
                }, 2000);

                if ($('.orders').find('.list>ul li').length < 1) {
                    $('.orders .bottom .submit').addClass('disabled');
                }
            }
        });
    },
    //重置提交数据
    setSubmitData() {
        var me = this;
        var _el = $('#' + me.type);
        var orders = _el.find('> div.orders')[0];
        var list = $(orders).find('.list > ul > li');
        var total = 0;
        var amount = 0;
        var profit = 0;
        var profitTimes = [];
        var traceper = 0;
        var profitper = 0;
        var saleper = 0;
        var saleprofitper = 0;
        var buyper = 0;
        var buyprofitper = 0;

        if (list.length > 0) {
            if (me.type === 'lottery') {
                profitTimes = [];
                for (var i = 0, len = list.length; i < len; i++) {
                    var d = $(list[i]).attr("data-count").split('|');
                    total += parseInt(d[0], 10);
                    amount += Q.floatMul(parseFloat(d[5], 10), 10000);
                    profit += (parseFloat(d[3], 10) * parseFloat(d[1], 10)) - parseFloat(d[5], 10);
                    traceper += (parseFloat(d[5], 10) / parseFloat(d[1], 10));
                    profitper += parseFloat(d[3], 10) * (parseFloat(d[2] / 2)) * parseInt(d[7], 10);
                    profitTimes.push(parseInt(d[7], 10));
                }
                $(orders).find('.total').html(total + '&nbsp;注');
            }
            amount = amount / 10000;

            var traceAllData = {
                type: me.type,
                traceM: traceper,
                times: 1,
                amount: amount,
                profixP: profitper,
                money: amount,
                traceMSale: saleper,
                profixPSale: saleprofitper,
                traceMBuy: buyper,
                profixPBuy: buyprofitper,
                profixPer: (profitper - traceper),
                profixRate: parseFloat((profitper - traceper) / traceper) * 100
            };

            $(orders).data('trace', traceAllData).find('.amount').html(amount + '&nbsp;元');

            Trace.updateTimes($(orders).find('>div.trace-data'), $(orders).find('>div.trace-data>a:eq(0)'), traceAllData);

            if ($('.bottom .hand .trace-icon').hasClass('on')) {
                $(orders).find('.bottom .submit').addClass('disabled');
            } else {
                $(orders).find('.bottom .submit').removeClass('disabled');
            }
        } else {
            if ($('.bottom .hand .trace-icon').hasClass('on')) {
                $('.bottom .hand').click();
            }
            me.resetOrders();
        }
    },
    resetPlate() {
        Plate.reset();
    },
    //重置订单栏
    resetOrders() {
        var me = this;
        var _el = $('#lottery');
        var orders = _el.find('.orders');

        $(orders).find('.total, .amount').html(0);
       
        $(orders).find('.list > ul').empty();
        // 重置追号选择
        Trace.resetTraceBox($(orders));
    },
    getMethodName(method) {
        const m = `${method.split('_')[0]}_${method.split('_')[1]}_${method.split('_')[2]}`;
        const obj = {
            'tm_tm_zx' : '特码直选',
            'tm_tm_sx' : '特码生肖',
            'tm_tm_sb' : '特码色波',
            'tm_tm_dxds': '特码大小单双',
            'tm_tm_ws': '特码尾数',
            'zt1m_zt1m_zt1m': '正特一码',
            'zt1x_zt1x_zt1x': '正特一肖',
            'ztws_ztws_ztws': '正特尾数',
            'lx_lx_2lx': '二连肖',
            'lx_lx_3lx': '三连肖',
            'lx_lx_4lx': '四连肖',
            'lm_lm_2z2': '连码二中二',
            'lm_lm_3z2': '连码三中二',
            'lm_lm_3z3': '连码三中三',
            'hzdxds_hzdxds_hzdxds': '总和大小单双'
        };
        return obj[m];
    },
    //打印订单
    printOrder(p) {
        var me = this;
        Api.getRecency(p, function (d) {
            var order = JSON.parse(p.order);
            var len = order.length;
            d = d.result;
            var istrace = d[0].istrace;
            var total = 0;
            if (istrace == 0) {
                var lottery_content = '<div class="PrintArea area1 all"><h2>彩票投注单</h2><ul><li><span>下单时间:</span><em>' + Q.convertStamp(d[0].orderTime, Q.formatOne) + '</em></li>' +
                    '<li><span>投注彩种:</span><em>香港六合彩</em></li>' +
                    '<li class="lottime"><span>投注期号:</span><em>' + d[0].issue + '</em></li>';
                for (var i = 0; i <= len - 1; i++) {
                    lottery_content += '<li class="lotbh"><span>注单编号:</span><em class="smallNum">' + d[i].orderId + '</em></li>' +
                        '<li><span>投注玩法:</span><em>' + me.getMethodName(d[i].method) + '</em></li>' +
                        '<li><span>投注内容:</span><em class="printContent">' + order[i].code + '</em></li>' +
                        '<li class="lotje"><span>投注金额:</span><em>' + d[i].amount + '元</em></li>';
                    total += d[i].amount;
                }

                lottery_content += '<li class="lotmon"><span>总金额:</span><em>' + parseFloat(total.toFixed(4)) + '元</em></li></ul></div><div class="button b1">确认打印</div>';

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

            } else if (istrace == 1) {
                var trace = JSON.parse(p.trace);
                var trace_content = '<div class="PrintArea area2"><h2>彩票追号投注单</h2><ul><li><span>下单时间:</span><em>' + Q.convertStamp(d[0].orderTime, Q.formatOne) + '</em></li>' +
                    '<li><span>投注彩种:</span><em>香港六合彩</em></li>' +
                    '<li><span>开始期号:</span><em>' + d[0].issue + '</em></li>' +
                    '<li><span>追号期数:</span><em>' + trace.totalCount + '</em></li>' +
                    '<li class="lottime"><span>追号模式:</span><em>' + Q.traceType(trace.mode) + '</em></li>';
                for (var i = 0; i <= len - 1; i++) {
                    trace_content += '<li><span>追号编号:</span><em class="smallNum">' + d[i].traceId + '</em></li>' +
                        '<li><span>投注玩法:</span><em>' + me.getMethodName(d[i].method) + '</em></li>' +
                        '<li><span>追号内容:</span><em class="printContent">' + d[i].code + '</em></li>' +
                        '<li><span>投注金额:</span><em>' + d[i].traceTotalPrice + '元</em></li>' +
                        '<ul class="trace_each"><li><span>奖期</span><em>金额(元)</em></li>';
                    total += d[i].traceTotalPrice;
                    var obj = trace.counts;
                    $.each(obj, function (m, n) {
                        trace_content += '<li><span>' + m + '</span><em>' + obj[m] * d[i].amount + '</em></li>';
                    });
                    trace_content += '</ul>';
                };
                trace_content += '<li class="lotmon"><span>总金额:</span><em>' + parseFloat(total.toFixed(4)) + '元</em></li></ul></div><div class="button b1">确认打印</div>';

                var preview_trace = dialog({
                    title: '彩票追号投注单',
                    width: 160,
                    skin: 'trace_preview',
                    content: trace_content
                }).showModal();

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
            }
        });
    },
    getOrder() {// return orderListHtml
        const me = this;
        let html = '';
        switch (Plate.plateType) {
            case 'input':
                $('.js-plate-item').each((index, item) => {
                    const m_method = $(item).find('.js-odd-value').attr('m_method');
                    const wanfa = $('.js-subTab.on').text();
                    let code = $(item).find('.js-plate-item-num').attr('code');
                    code = /^tm_tm_ws|^ztws_ztws_ztws/.test(m_method) ? code.replace('尾','') : code;//尾数“0尾”只传0
                    const odd = $(item).find('.js-odd-value').attr('odd');
                    const point = $(item).find('.js-odd-value').attr('point');
                    const nums = 1;
                    const price = $(item).find('.js-plate-item-input').val();
                    const money = $(item).find('.js-plate-item-input').val();
                    if ($(item).find('.js-plate-item-input').val()) {
                        html += `
                            <li data-nums="${nums}" data-price="${price}" data-money="${money}" data-point="${point}"  data-odd="${odd}" data-wanfa="${wanfa}" data-type="${m_method}" data-code="${code}" data-desc="${wanfa} ${code}" data-count="${nums}|1|${price}|${odd}|${point}|${money}||1" class="js-orders-item">
                                <div class="codes">${wanfa} <em>${code}</em></div>
                                <div class="odd">${odd}</div>
                                <div class="money">${money}</div>
                                <a href="javascript:;" class="delete" title="删除"></a> 
                            </li>
                        `;
                    }
                });
                break;
            case 'click':
                switch (Plate.method) {
                    case 'lx_lx_2lx':
                    case 'lx_lx_3lx':
                    case 'lx_lx_4lx':                    
                    case 'lm_lm_2z2':
                    case 'lm_lm_3z2':
                    case 'lm_lm_3z3':    
                        const code = [];
                        $('.js-click-num-item.on').each((index, item) => {
                            const cn = $(item).attr('cn');
                            code.push(cn);
                        });                     
                        const method = Plate.method;                          
                        const wanfa = $('.js-subTab.on').text();
                        const price = $('.js-clickType-per-input').val();
                        const nums = $('.js-count-num').text();
                        const money = $('.js-total-money').text();
                        let point = Plate.odds[method][`rate${Plate.rateType}`];
                        let odd =  Plate.odds[method][`bonus${Plate.rateType}`];
                        /* if (Plate.method === 'lm_lm_3z2') {
                            const pointZ2 = Plate.odds['lm_lm_3z2_z2'][`rate${Plate.rateType}`];
                            const oddZ2 = Plate.odds['lm_lm_3z2_z2'][`bonus${Plate.rateType}`];
                            if (Number(oddZ2) > Number(odd)) {
                                point = pointZ2;
                                odd = oddZ2;
                            }
                        } */
                        /* if (Plate.method === 'lx_lx_2lx' || Plate.method === 'lx_lx_3lx' || Plate.method === 'lx_lx_4lx') {
                            if (code.indexOf(Plate.bmnsx) !== -1 && nums === '1') {// 有本命年生肖且只有1注，用生肖赔率
                                point = Plate.odds[`${method}_bnsx`][`rate${Plate.rateType}`];
                                odd =  Plate.odds[`${method}_bnsx`][`bonus${Plate.rateType}`];
                            }
                        } */
                        html += `
                            <li class="js-orders-item" data-nums="${nums}" data-price="${price}" data-money="${money}" data-point="${point}"  data-odd="${odd}" data-wanfa="${wanfa}" data-type="${Plate.method}" data-code="${code.join(',')}" data-desc="${wanfa} ${code.join('')}" data-count="${nums}|1|${price}|${odd}|${point}|${money}||1">
                                <div class="codes">${wanfa} <em>${code.join(',')}</em></div>
                                <div class="odd">${odd}</div>
                                <div class="money">${money}</div>
                                <a href="javascript:;" class="delete" title="删除"></a> 
                            </li>
                        `;
                        break;
                    case 'hzdxds_hzdxds_hzdxds':
                        //拆单
                        $('.js-click-num-item.on').each((index, item) => {
                            const m_method = $(item).attr('m_method');
                            const en = $(item).attr('en');
                            const cn = $(item).attr('cn');
                            const code = cn;
                            const wanfa = $('.js-subTab.on').text();
                            const price = $('.js-clickType-per-input').val(); 
                            const nums = 1;                           
                            const money = $('.js-total-money').text();
                            const point = Plate.odds[m_method][`rate${Plate.rateType}`];
                            const odd =  Plate.odds[m_method][`bonus${Plate.rateType}`];
                            html += `
                                <li data-nums="${nums}" data-price="${price}" data-money="${money}" data-point="${point}"  data-odd="${odd}" data-wanfa="${wanfa}" data-type="${m_method}" data-code="${code}" data-desc="${wanfa} ${code}" data-count="${nums}|1|${price}|${odd}|${point}|${money}||1" class="js-orders-item">
                                    <div class="codes">${wanfa} <em>${code}</em></div>
                                    <div class="odd">${odd}</div>
                                    <div class="money">${money}</div>
                                    <a href="javascript:;" class="delete" title="删除"></a> 
                                </li>
                            `;
                        });
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
        
        return html;
    },
    updateIssueInfo() {
        var me = this;
        var skiptime = false;

        $('.main').attr('class', 'main lt-' + me.lt.toLowerCase());
        if (arguments.length > 0) {
            skiptime = arguments[0];
        }

        Api.getIssueInfo({
            'lottery': me.lt
        }, function (d) {
            if (d == '-1') {
                me.showLogout();
                return;
            }

            var info = $('.js-main-info');
            var countTime = $('.js-main-countTime'); //投注按钮下方倒计时

            var timeArr = [];
            var t = 0;
            var tip; //倒计时关闭提示框 3秒后自动关闭

            if (d.result) {
                d = d.result;
                //追号
                me.next = d.next;
                //期号
                me.issue = d.issue;
                
                info.find('.js-info-logo').css('display', 'block');

                info.find('.js-info-issue').html(d.issue ? d.issue : '-');
                $('.js-submit-issue').html(`期号${d.issue}` ? `期号${d.issue}` : '期号-');
                $('.js-main-countTimeBox').show();
                $('.js-trace-box').show();

                info.find('.js-issue, .js-last-issue').show();
                info.find('.js-clock').show();

                // 重置追号数据
                if ($('#' + me.type + ' .orders input[name=autoTrace]').is(':checked')) {
                    Trace.resetTraceDate();
                }


                me.isStop = d.second < 0;

                if (d.second === 0) {
                    me.updateIssueInfo(1);
                    return false;
                } else if (d.second === -1) {
                    info.find('.js-clock').addClass('stop').find('span').html('等待开售');
                    countTime.hide();
                    return false;
                } else if (d.second === -2) {
                    info.find('.js-clock').addClass('stop').find('span').html('暂停销售');
                    countTime.hide();
                    return false;
                }

                countTime.show();

                info.find('.js-clock').removeClass('stop');

                var _date = new Date().valueOf() + d.second * 1000;

                info.find('.js-clock').countdown(_date.toString(), function (event) {
                    let H = `${event.offset.days * 24 + event.offset.hours}`;
                    H = H.length === 1 ? `0${H}` : H;
                    const M = `0${event.offset.minutes}`.slice(-2);
                    const S = `0${event.offset.seconds}`.slice(-2);

                    $('.clock_b0').html(`${H >= 99 ? 99 : H}`);
                    $('.clock_b1').html(M);
                    $('.clock_b2').html(S);
                    
                    countTime.find('em').html(`${H >= 99 ? 99 : H}:${M}:${S}`);

                    if (t > 0 && t <= 30) {
                        $(this).addClass('warning');
                    } else {
                        $(this).removeClass('warning');
                    }
                }).on('finish.countdown', function () {
                    if (!dialog.get('go-next-issue')) {
                        var tip = dialog({
                            id: 'go-next-issue',
                            skin: 'go-next-issue',
                            title: '温馨提示',
                            content: `<h3>香港六合彩</h3><p class="t">第<em>${$('.js-info-issue').html()}</em>期售彩已结束</p><p>点击进入下一期购彩</p>`,
                            cancel: false,
                            fixed: true,
                            onshow: function () {
                                //自动倒计时
                                var startSec = me.countDownSec;

                                var nowCountDown = $(this.node).find('.cdown');
                                var startCT = setInterval(function () {
                                    if (startSec === 0) {
                                        tip.close().remove();
                                        clearInterval(startCT);
                                        me.updateIssueInfo(1);
                                        return false;
                                    }
                                    nowCountDown.html(['(', startSec--, ')'].join(''));
                                }, 1000);
                            },
                            onremove: function () {},
                            onclose: function () {
                                if (dialog.get('order-cancel')) {
                                    dialog.get('order-cancel').close().remove();
                                }
                                if (!$('.confirm-again').hasClass('confirm-again-trace')) {
                                    setTimeout(function () {
                                        $('.confirm-again em.issue').html('期号' + me.issue);
                                    }, 3000);
                                }
                            },
                            button: [{
                                id: 'clock_ok',
                                value: '确&nbsp;&nbsp;&nbsp;&nbsp;定<em class="cdown">(' + me.countDownSec + ')</em>',
                                callback: function () {
                                    me.updateIssueInfo(1);
                                }
                            }]
                        });
                        tip.showModal();
                    }
                });
                // 显示追号
                $('.js-trace-box').show();
            }
        });

    },
    getIssueInfoLast() {
        var me = this;
        var info = $('.js-main-info');
        Api.getIssueInfoLast({
            'lottery': me.lt,
        }, function (d) {
            if (d && d.length > 0) {
                info.find('.js-last-issueNo').html(d[0].issueNo);
                var codeArr = d[0].code.split(',');
                var lastUl = codeArr.map((v, i, arr) => {
                    if (i === arr.length - 1) {//最后一个是特码
                        return `
                            <li class="js-last-issue-codeItem lhc-open-code-tm-${v}">${v}</li>
                        `;
                    }
                    return `
                        <li class="js-last-issue-codeItem lhc-open-code-${v}">${v}</li>
                    `;
                }).join('');

                //最近一期开奖号码动画效果
                info.find('.js-last-issue-code').html(lastUl);
                if (!me.noanimation) {
                    info.find('.js-last-issue-codeItem').removeClass('bounceInDown').addClass('bounceInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass('bounceInDown');
                        me.noanimation = true;
                    });
                }
            }
        });
    },
    getUserMoney() {
        var headMoneyCount = $('.head-money-count');
        headMoneyCount.html('').append(`<i class="ui-dialog-loading reloading"></i>`);;
        Api.getPtBalance({
            'cbId': 'sobet_01'
        }, function (res) {
            var cash = res.cash;
            headMoneyCount.html(cash.toFixed(4));
        });
    },
};

User.getStatus((res) => {
    Navigation.init(res, () => {});
});
Live.start();
Lottery.init();
