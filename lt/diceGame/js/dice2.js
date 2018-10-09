let DiceGame = DiceGame || {};
DiceGame = {
    scale: 1,
    priceNum: null, //筹码数字
    params: {}, //参数json串，order
    totalCount: {}, //每个code对应的总金额，函数calculateIcon要用到,key值为每个选号的value值
    totalBetMoney: 0, //投注总金额
    Elements_forBet: [],
    Elements_Betted: {}, //要存每期的所以只能用对象的形式
    pieceCount: 0, //投注前点击翻倍按钮的次数
    dialogCommonObj: { //余额不足dialog
        content: `<p style="text-align:center;">余额不足，请充值！</p>`,
        align: 'top',
        skin: 'tip',
        onshow: function () {
            let timeout = setTimeout(() => {
                this.close();
                clearTimeout(timeout);
            }, 2000);
        },
    },
    methodToCn: {
        'bth2_bth2_ds': '二不同号单式',
        'bth2_bth2_fs': '二不同号复式',
        'bth3_bs_dx': '半顺单选',
        'bth3_bs_tx': '半顺通选',
        'bth3_bth3_ds': '三不同号单选',
        'bth3_bth3_fs': '三不同号复选',
        'bth3_lh3_dx': '三连号单选',
        'bth3_lh3_tx': '三连号通选',
        'bth3_z6_dx': '杂六单选',
        'bth3_z6_tx': '杂六通选',
        'cygh_cygh_cygh': '猜一个号',
        'dxds_dxds_dxds': '大小单双',
        'hz_hz_hz_3_18': '和值(3|18)',
        'hz_hz_hz_4_17': '和值(4|17)',
        'hz_hz_hz_5_16': '和值(5|16)',
        'hz_hz_hz_6_15': '和值(6|15)',
        'hz_hz_hz_7_14': '和值(7|14)',
        'hz_hz_hz_8_13': '和值(8|13)',
        'hz_hz_hz_9_12': '和值(9|12)',
        'hz_hz_hz_10_11': '和值(10|11)',
        'th2_th2dx_ds': '二同号单式',
        'th2_th2dx_fs': '二同号复式',
        'th2_th2fx_fx': '二同号复选',
        'th3_th3_th3dx': '三同号通选',
        'th3_th3_th3tx': '三同号单选',
    },
    cancelDantiao: false,
    disableBet: false,
    init() {
        let _this = this;
        let cancelButton = $('.cancelButton');
        let betButton = $('.betButton');
        let pieceButton = $('.pieceButton');

        _this.selfAdaption(); //屏幕自适应
        _this.reset(); //重置各项

        //确定所用筹码
        $('.chips>.chip').off('click').on('click', function (e) {
            $(this).addClass('on').siblings('.chip').removeClass('on');
            _this.priceNum = +$(this).attr('value');
        });
        $('.chips>.chip10').trigger('click'); //默认10筹码

        //点击桌面选号
        $('[rel="selectCode"]').off('click').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (_this.disableBet) { //开奖的时候禁止投注
                let disableBetObj = jQuery.extend(_this.dialogCommonObj, {
                    content: `<p style="text-align:center;">请开奖完成后再投注，谢谢！</p>`,
                });
                dialog(disableBetObj).show();
                return;
            }
            let params = _this.params;
            let priceNum = _this.priceNum;
            let totalCount = _this.totalCount;
            let Elements_forBet = _this.Elements_forBet;
            if (!priceNum) { //如果没有选定筹码，不能下注
                return;
            }
            let method = $(this).attr('method');
            let value = $(this).attr('value'); //code
            let odds = $(this).attr('odds');

            _this.pieceModel = false;
            let balanceAmount = parseFloat($('.balanceAmount').text()) || store.get('balanceAmount');
            if (_this.calculateBetMoney() + priceNum > balanceAmount) {
                let yebzObj = jQuery.extend(_this.dialogCommonObj, {
                    content: `<p style="text-align:center;">余额不足，请充值！</p>`,
                });
                dialog(yebzObj).show();
                return;
            }

            totalCount[value] += priceNum;
            letChipFly(priceNum, $(this), Elements_forBet, _this.scale);
            setTimeout(() => {
                renderIcon(calculateIcon(totalCount[value]), $(this), _this.scale);
                setTimeout(() => {
                    _this.renderTotalMoney();
                }, 300);
            }, 250);
            //计算要投注的各个参数值
            let countObj = calculateIcon(totalCount[value]);
            for (let price in countObj) {
                if (countObj[price]) {
                    params[value][price].method = method;
                    params[value][price].code = method.indexOf('hz_hz_hz') !== -1 ? value.slice(-2) : value; //和值value前面因为加了hz，所以特殊处理
                    params[value][price].piece = countObj[price];
                    params[value][price].price = price;
                    params[value][price].amount = price * params[value][price].piece;
                    params[value][price].odds = odds;
                }
            }
        });
        //取消投注
        cancelButton.off('click').on('click', function (e) {
            let Elements_forBet = _this.Elements_forBet;
            if (_this.disableBet) { //开奖的时候禁止投注
                let disableBetObj = jQuery.extend(_this.dialogCommonObj, {
                    content: `<p style="text-align:center;">请开奖完成后再进行操作，谢谢！</p>`,
                });
                dialog(disableBetObj).show();
                return;
            }

            if (Elements_forBet.length === 0) { //没有可撤销的禁止后续操作
                return;
            }
            let totalCount = _this.totalCount;
            let params = _this.params;
            for (let i = 0; i < Elements_forBet.length; i++) {
                letChipFlyBack(Elements_forBet, totalCount, params);
            }
            _this.reset();
            _this.pieceCount = 0;
        });
        //翻倍投注
        pieceButton.off('click').on('click', function (e) {
            if (_this.disableBet) { //开奖的时候禁止投注
                let disableBetObj = jQuery.extend(_this.dialogCommonObj, {
                    content: `<p style="text-align:center;">请开奖完成后再操作，谢谢！</p>`,
                });
                dialog(disableBetObj).show();
                return;
            }
            if (_this.Elements_forBet.length === 0 && _this.Elements_Betted[IssueList.issue].length === 0) { //桌面没筹码禁止翻倍

                return;
            }
            if (_this.pieceCount > 5) {
                let obj = jQuery.extend(_this.dialogCommonObj, {
                    content: `<p style="text-align:center;">勿频繁翻倍,请选择大额筹码！</p>`,
                });
                dialog(obj).show();
                return;
            }
            let totalCount = _this.totalCount;
            if (parseFloat($('.betMoneyAmount').text()) * 2 > parseFloat($('.balanceAmount').text())) { //余额不足时返回
                let yebzObj = jQuery.extend(_this.dialogCommonObj, {
                    content: `<p style="text-align:center;">余额不足，请充值！</p>`,
                });
                dialog(yebzObj).show();
                return;
            } else {
                let betForLen = _this.Elements_forBet.length;
                for (let i = 0; i < betForLen; i++) {
                    _this.priceNum = +_this.Elements_forBet[i]['chip'].attr('price');
                    let element = _this.Elements_forBet[i]['context'];
                    element.trigger('click');
                }
                _this.Elements_Betted[IssueList.issue] = _this.Elements_Betted[IssueList.issue] || [];
                let bettedLen = _this.Elements_Betted[IssueList.issue].length;
                for (let i = 0; i < bettedLen; i++) {
                    _this.priceNum = +_this.Elements_Betted[IssueList.issue][i]['chip'].attr('price');
                    let element = _this.Elements_Betted[IssueList.issue][i]['context'];
                    element.trigger('click');
                }
                _this.pieceCount++;
                _this.renderTotalMoney();
            }
        });
        //确认投注
        betButton.off('click').on('click', function (e) {
            if (_this.disableBet) { //开奖的时候禁止投注
                let disableBetObj = jQuery.extend(_this.dialogCommonObj, {
                    content: `<p style="text-align:center;">请开奖完成后再投注，谢谢！</p>`,
                });
                dialog(disableBetObj).show();
                return;
            }
            let canBet = false;
            $('[rel="betChip"]').each(function (index, chip) {
                if (!$(chip).hasClass('bettedChip')) { //判断有米有可投注的筹码，可投注的不含这个class
                    canBet = true;
                }
            });
            if (!canBet) { //没有可投注筹码禁止投注
                let tipBetObj = jQuery.extend(_this.dialogCommonObj, {
                    content: `<p style="text-align:center;">请先下注！</p>`,
                });
                dialog(tipBetObj).show();
                return;
            }

            if (parseFloat($('.betMoneyAmount').text()) > parseFloat($('.balanceAmount').text())) {
                let tipBetObj = jQuery.extend(_this.dialogCommonObj, {
                    content: `<p style="text-align:center;">下注金额超过余额！</p>`,
                });
                dialog(tipBetObj).show();
                return;
            }

            //单挑提示
            let dantiaoFlag = _this.getDantiaoData()['dantiaoFlag'];
            if (dantiaoFlag) {
                _this.dantiaoDialog();
                if (_this.cancelDantiao) {
                    return;
                }
            } else {
                _this.addOrder();
            }

        });
    },
    selfAdaption() { //自适应
        let _this = this;
        let diceGameContentWrap = $('.diceGameContentWrap');
        let diceGameContent = $('.diceGameContent');
        //屏幕自适应
        diceGameContent.css({
            'width': document.body.clientWidth,
        });
        if (screen.width < 1500) { //笔记本屏幕
            diceGameContentWrap.css({
                'transform': 'scale(0.73)',
                'transform-origin': 'top center',
            });
            _this.scale = 0.73;
            diceGameContent.css('height', '600px');
            $('.diceGameBar').css('zoom', '0.73');
        }
    },
    getStorage() { //取出缓存数据,重现关闭页面之前场景
        //取出缓存数据
        let _this = this;
        let userName = $('#mc_header .username>em').text();
        let lastForBetDice = store.get('lastForBetDice');
        for (let i = 0; i < lastForBetDice.length; i++) {
            _this.priceNum = +lastForBetDice[i]['priceNum'];
            let value = lastForBetDice[i]['valueAttr'];
            let storeUserName = lastForBetDice[i]['userName'];
            if (userName === storeUserName) { //同一个用户才执行操作
                $(`[value="${value}"`).trigger('click');
                $(`.chips .chip${_this.priceNum}`).trigger('click');
            }
        }
    },
    reset() {
        let _this = this;
        let betMoneyAmount = $('.betMoneyAmount');
        let params = _this.params;
        let totalCount = _this.totalCount; //总金额，函数calculateIcon要用到
        let common_param = {
            "method": null,
            "code": null,
            "odds": null, //后台传过来的
            "point": 0 //后台传过来的
        };
        let param = { //不同筹码提交的时候算不同的obj
            1: jQuery.extend({
                "nums": 1,
                "piece": 0,
                "price": 1,
                "amount": null
            }, common_param),
            5: jQuery.extend({
                "nums": 1,
                "piece": 0,
                "price": 5,
                "amount": null
            }, common_param),
            10: jQuery.extend({
                "nums": 1,
                "piece": 0,
                "price": 10,
                "amount": null
            }, common_param),
            20: jQuery.extend({
                "nums": 1,
                "piece": 0,
                "price": 20,
                "amount": null
            }, common_param),
            50: jQuery.extend({
                "nums": 1,
                "piece": 0,
                "price": 50,
                "amount": null
            }, common_param),
            100: jQuery.extend({
                "nums": 1,
                "piece": 0,
                "price": 100,
                "amount": null
            }, common_param),
            1000: jQuery.extend({
                "nums": 1,
                "piece": 0,
                "price": 1000,
                "amount": null
            }, common_param),
            5000: jQuery.extend({
                "nums": 1,
                "piece": 0,
                "price": 5000,
                "amount": null
            }, common_param)
        };
        let allValues = [];

        $('[rel="selectCode"]').each(function (index, item) { //获取所有的value值存到数组
            if ($(item).attr('value')) {
                allValues.push($(item).attr('value'));
            }
        });
        allValues.forEach((item, index) => { //每个value值对应提交对象
            params[item] = copyJSON(param); //浅复制，消除引用影响
            totalCount[item] = 0; //初始每个选号投的筹码个数为0，投的金额为0
        });
        _this.Elements_forBet.length = 0; //重置飞出去的盘收集
    },
    getDantiaoData() {
        let _this = this;
        let dantiaoFlag = false;
        let dantiaoOrders = [];
        let singleMaxBonus = null;
        $('[rel="selectCode"]').each((index, item) => {
            if ($(item).find('[rel="betChip"]:not(.bettedChip)').length > 0) {
                let method = $(item).attr('method');
                if (IssueList.oddsObj[method]['s'] === 1 && 1 < IssueList.oddsObj[method]['n']) {
                    dantiaoFlag = true;
                    dantiaoOrders.push(_this.methodToCn[method]);
                    singleMaxBonus = IssueList.oddsObj[method]['m'];
                }
            }
        });
        dantiaoOrders = [...new Set(dantiaoOrders)]; //去重
        return {
            dantiaoFlag,
            dantiaoOrders,
            singleMaxBonus,
        };
    },
    dantiaoDialog() {
        let _this = this;

        let dantiaoOrders = _this.getDantiaoData()['dantiaoOrders'];
        let singleMaxBonus = _this.getDantiaoData()['singleMaxBonus'];
        let dantiaoHtml = `您的注单：${dantiaoOrders.map(v=>`【${v}】`).join('')}为单挑，将有当期单挑最高盈利${singleMaxBonus}元的限制，您确定要继续吗？`;
        let dantiao = dialog({
            title: '温馨提示',
            width: 300,
            fixed: true,
            id: 'lottery_tiao',
            skin: 'lottery_dan',
            content: dantiaoHtml,
            button: [{
                id: 'dt_ok',
                value: '确&nbsp;&nbsp;定',
                callback: function (evt) {
                    _this.addOrder();
                    this.close().remove();
                }
            }, {
                id: 'dt_cancel',
                skin: 'cancel',
                value: '取&nbsp;&nbsp;消',
                callback: function (evt) {
                    _this.cancelDantiao = true;
                    return;
                }
            }]
        });

        dantiao.showModal();
    },
    calculateBetMoney() { //计算总投注金额
        let _this = this;
        let betMoneyTotal = 0;
        let result = 0;
        $('[rel="betChip"]').each(function (index, chip) {
            if ($(chip).hasClass('bettedChip')) {
                let priceNum = +$(chip).attr('class').match(/flyChip(\d+)/)[1];
                result += priceNum;
            }
        });
        betMoneyTotal = calculateTotalCount(_this.totalCount) + result;
        return betMoneyTotal;
    },
    renderTotalMoney() {
        let _this = this;
        let total = _this.calculateBetMoney();
        $('.betMoneyAmount').text(`${total}元`);
    },
    addOrder() {
        let _this = this;
        let betButton = $('.betButton');
        let params = _this.params;
        let totalCount = _this.totalCount;
        let order = createOrder(params, totalCount);
        let orderCopy = copyJSON(order); //防止引用污染
        let orderParam = orderCopy;
        let OrderObj = {
            'lottery': 'MCK3',
            'issue': IssueList.issue,
            'betType': 1,
            'sourceType': 9, //9表示骰宝类型
            'order': JSON.stringify(mergeOrder(orderParam)),
        };
        betButton.text('投注中....');
        Api.addOrder(OrderObj, function (response) {
            let dialogObj = {
                content: `<p style="text-align:center;">${response.msg}</p>`,
                align: 'top',
                skin: 'tip',
                onshow: function () {
                    let timeout = setTimeout(() => {
                        betButton.text('确认投注');
                        this.close();
                        clearTimeout(timeout);
                    }, 2000);
                },
            };
            if (response.code !== 1) {
                if (response.code === 4004) {
                    dialogObj.content = `<p style="text-align:center;">奖期错误，请稍后再投注！</p>`;
                } else if (response.code === 4003) { //超过投注倍数将骰子撤回
                    $('.cancelButton').trigger('click');
                }
                dialog(dialogObj).show();
                return;
            } else if (response.code === 1) {
                $('[rel="betChip"]').each(function (index, chip) {
                    if (!$(chip).hasClass('bettedChip')) {
                        $(chip).addClass('bettedChip').attr('issue', IssueList.issue);
                    }
                });
                dialogObj.content = `<p style="text-align:center;">订单提交成功</p>`;
                _this.Elements_Betted[IssueList.issue] = _this.Elements_Betted[IssueList.issue] || [];
                _this.Elements_Betted[IssueList.issue] = _this.Elements_Betted[IssueList.issue].concat(_this.Elements_forBet); //记录投注过的筹码                                
                _this.pieceCount = 0;
                _this.reset(); //重置投注金额等回到初始状态
                dialog(dialogObj).show();
                let timeout = setTimeout(() => {
                    Navigation.getUserMoney();
                    clearTimeout(timeout);
                }, 2000);
            }
        });
    },
};

DiceGame.init();

function createFlyChip(num, value, scale) { //创建飞出去的筹码
    let ele = document.createElement('div');
    $(ele).addClass(`flyChip${+num}`).attr({
        'rel': 'betChip',
        'price': +num,
        'code': value,
    }).css({
        "transform": `scale(${scale})`,
        "transform-origin": "0 0",
    });
    return $(ele);
}

function letChipFly(priceNum, element, Elements_forBet, scale) { //筹码飞出去方法
    let value = element.attr('value');
    let documentFragment = document.createDocumentFragment(); //创建文档碎片代替一个一个append提高性能
    let flyingChip = createFlyChip(priceNum, value, scale);

    flyingChip.attr('flyTo', `${value}_${priceNum}`);

    flyingChip.css({
        "position": 'absolute',
        "left": $(`.chips>.chip${priceNum}`).offset().left,
        "top": $(`.chips>.chip${priceNum}`).offset().top,
        "transition": 'all 0.2s ease',
    });
    $(documentFragment).append(flyingChip);
    $('body').append($(documentFragment));
    flyingChip.css({
        "left": element.offset().left + element[0].offsetWidth * scale / 2 - $('.chips>.chip').width() * scale / 2,
        "top": element.offset().top + element[0].offsetHeight * scale / 2 - $('.chips>.chip').height() * scale / 2,
    });
    Elements_forBet.push({ //存储飞出去的筹码，用在取消投注的时候用
        "chip": flyingChip,
        "value": element.attr('value'),
        "context": element,
    });
    setTimeout(() => {
        $(`[flyTo="${value}_${priceNum}"]`).remove();
    }, 300);
}

function letChipFlyBack(Elements_forBet, totalCount, params) { //取消投注让筹码飞回来
    if (Elements_forBet.length === 0) {
        return;
    }
    for (let elemObj of Elements_forBet) {
        let elem = elemObj['chip'];
        let value = elemObj['value'];
        let context = elemObj['context'];
        let priceNum = +elem.attr('price');
        let method = context.attr('method');
        let odds = context.attr('odds');
        totalCount[value] -= priceNum;
        let countObj = calculateIcon(totalCount[value]);
        for (let price in countObj) {
            if (countObj[price]) {
                params[value][price].method = method;
                params[value][price].code = method.indexOf('hz_hz_hz') !== -1 ? value.slice(-2) : value; //和值value前面因为加了hz，所以特殊处理
                params[value][price].piece = countObj[price];
                params[value][price].price = price;
                params[value][price].amount = price * params[value][price].piece;
                params[value][price].odds = odds;
            }
        }
        $('body').append(elem);
        new Promise(function (resolve, reject) {
            setTimeout(function () {
                elem.css({
                    "left": $(`.chips>.chip${priceNum}`).offset().left,
                    "top": $(`.chips>.chip${priceNum}`).offset().top,
                }).attr('flyBack', `yes`);
                resolve();
            }, 250);
        }).then(function () {
            setTimeout(() => {
                $('[rel="betChip"]').each(function (index, chip) {
                    if (!$(chip).hasClass('bettedChip')) {
                        $(chip).remove();
                    }
                });
                DiceGame.renderTotalMoney();
            }, 250);
        });
    }
}
/* 计算筹码图标，各种面额硬币并非实体，只有1分这个计量单位。
然后每次投钱或者去掉钱，自动把分换算成相应图标。 */
function calculateIcon(count) { //count 1分钱的个数,chipTypes = [1,5,10,20,50,100,1000,5000]
    //5k筹码的个数
    let result = {};
    result[5000] = Math.floor(count / 5000);
    result[1000] = Math.floor((count - result[5000] * 5000) / 1000);
    result[100] = Math.floor((count - result[5000] * 5000 - result[1000] * 1000) / 100);
    result[50] = Math.floor((count - result[5000] * 5000 - result[1000] * 1000 - result[100] * 100) / 50);
    result[20] = Math.floor((count - result[5000] * 5000 - result[1000] * 1000 - result[100] * 100 - result[50] * 50) / 20);
    result[10] = Math.floor((count - result[5000] * 5000 - result[1000] * 1000 - result[100] * 100 - result[50] * 50 - result[20] * 20) / 10);
    result[5] = Math.floor((count - result[5000] * 5000 - result[1000] * 1000 - result[100] * 100 - result[50] * 50 - result[20] * 20 - result[10] * 10) / 5);
    result[1] = Math.floor(count - result[5000] * 5000 - result[1000] * 1000 - result[100] * 100 - result[50] * 50 - result[20] * 20 - result[10] * 10 - result[5] * 5);
    return result;
}
//根据calculateIcon出的钱种个数生成对应图标
function renderIcon(iconObj, clickedElem, scale) {
    let value = clickedElem.attr('value');
    let method = clickedElem.attr('method');
    $(`[rel="betChip"][code="${value}"]`).each(function (index, chip) {
        if ($(chip).hasClass('bettedChip')) {

        } else {
            $(chip).remove();
        }
    });
    for (let key in iconObj) {
        let translateY;
        switch (+key) { //不同面额筹码放置的位置错开
            case 5000:
                translateY = -8;
                break;
            case 1000:
                translateY = -6;
                break;
            case 100:
                translateY = -4;
                break;
            case 50:
                translateY = -2;
                break;
            case 20:
                translateY = 0;
                break;
            case 10:
                translateY = 2;
                break;
            case 5:
                translateY = 4;
                break;
            case 1:
                translateY = 6;
                break;
            default:
                break;
        }
        if (iconObj[key]) {
            for (let i = 0; i < iconObj[key]; i++) {
                let elem = createFlyChip(key, value, scale).css({
                    "position": 'absolute',
                    "left": 0,
                    "right": 0,
                    "top": 0,
                    "bottom": 0,
                    "margin": "auto",
                    "transform-origin": "center",
                }).attr({
                    'method_value': `${method}_${value}`,
                });
                elem.css({
                    "transform": `translateY(${translateY - i * 2}px) scale(${scale}`,
                });
                clickedElem.append(elem);
            }
        }
    }
}

function calculateTotalCount(totalCount) { //计算总金额
    let count = 0;
    for (let codeValue in totalCount) {
        if (totalCount[codeValue]) {
            count += totalCount[codeValue];
        }
    }
    return count;
}
//生成订单
function createOrder(params, totalCount) {
    let orders = [];
    params = copyJSON(params);
    for (let codeValue in params) {
        for (let chipNum in params[codeValue]) {
            params[codeValue][chipNum]['piece'] = calculateIcon(totalCount[codeValue])[chipNum];
            params[codeValue][chipNum]['piece'] = params[codeValue][chipNum]['piece']; //翻倍投注
            if (params[codeValue][chipNum]['piece']) {
                if (Number(params[codeValue][chipNum]['price']) > 1) { //5,20,100,..5000的全部转成1元模式
                    params[codeValue][chipNum]['piece'] = Number(params[codeValue][chipNum]['piece']) * Number(params[codeValue][chipNum]['price']);
                    params[codeValue][chipNum]['price'] = 1;
                }
                if (params[codeValue][chipNum]['code'].length > 1 && params[codeValue][chipNum]['method'] !== 'th2_th2fx_fx') { //'111'=>1,1,1。2同号不要加逗号，params[codeValue][chipNum]['code'].length > 1的意思,猜一个号，大小单双页不要加
                    if (params[codeValue][chipNum]['method'].indexOf('hz_hz_hz') !== -1) { //和值也不加逗号
                        params[codeValue][chipNum]['code'] = +params[codeValue][chipNum]['code'];
                    } else {
                        params[codeValue][chipNum]['code'] = params[codeValue][chipNum]['code'].replace(/(\d)(?=\d)/g, '$1,');
                    }
                }
                orders.push(params[codeValue][chipNum]);
            }
        }
    }
    return orders;
}
//合单 order为[];
function mergeOrder(order) {
    return order.reduce((a, b) => {
        let flagIndex = a.findIndex((item, index) => {
            return item.method === b.method && item.code === b.code;
        });
        if (flagIndex !== -1) {
            a[flagIndex].piece += b.piece;
            a[flagIndex].amount += b.amount;
        } else {
            a.push(b);
        }
        return a;
    }, [{
        method: '',
        code: '',
    }]).slice(1);
}
//无引用复制
function copyJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
}
//存在下注号码进入页面时恢复筹码所押注的区域
window.onbeforeunload = function () {
    let result = [];
    let userName = $('#mc_header .username>em').text();
    DiceGame.Elements_forBet.forEach((obj) => {
        result.push({
            valueAttr: obj['context'].attr('value'),
            priceNum: obj['chip'].attr('price'),
            userName: userName,
        });
    });

    store.set('lastForBetDice', result);
    store.set('balanceAmount', parseFloat($('.balanceAmount').text()));
};