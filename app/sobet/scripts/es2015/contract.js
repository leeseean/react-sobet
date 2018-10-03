var Contract = Contract || {};
Contract = {
    platform: null, //是否平台直签（0平台，1代理）
    ruleType: null, //日工资模式（1整额模式,2比例模式)
    myMaxDayRatio: null, //我的最高日工资分红比例
    myMaxBonus: null, //我的最高日工资分红额度
    ratioOptions: function (myMaxDayRatio, bonus) { //创建日工资时选择框的比例
        let max = myMaxDayRatio * 1000;
        let html = '';
        for (let i = 1; i <= max; i++) {
            let val = (i/1000).toFixed(3);
            html += `<option value="${val}" ${val == bonus?'selected':''}>${(i/10).toFixed(1)}%</option>`;
        }
        return html;
    },
    formatMoney(type, thisInput) {
        const regObj = {
            'dividents': /^(\d+|\d+\.\d{1,4})$///至多4位小数
        };
        if (Number(thisInput.value) < Number(thisInput.min)) {
            thisInput.value = thisInput.min;
        }
        if (Number(thisInput.value) > Number(thisInput.max)) {
            thisInput.value =thisInput.max;
        }
        thisInput.value = /^(\d+|\d+\.\d{1,4})$/.test(thisInput.value) ? thisInput.value : thisInput.value = Number(thisInput.value).toFixed(4);
    },
    betMoneyHtml(type, betMoney) {
        return `
            <input type="number" min="1" max="9999" name="betMoney" class="dayBetMoneyOne" value="${betMoney?betMoney/10000:''}" onchange="Contract.formatMoney('${type}', this)">
        `;
    },
    statusReflect: {
        '0': '契约待签订',
        '1': '契约已签订',
        '5': '契约被拒绝',
        '2': '上级已取消',
        '3': '契约已替换',
        '4': '契约已终止'
    },
    stampSealSrc: {
        '0': './images/contract/new.png',
        '5': './images/contract/refuse.png',
        '3': './images/contract/replace.png',
        '2': './images/contract/cancel.png',
        '1': './images/contract/signed.png',
        '4': './images/contract/stop.png'
    },
    contractLeftSrc: {
        '0': './images/contract/leftOne.png',
        '5': './images/contract/leftTwo.png',
        '3': './images/contract/leftTwo.png',
        '2': './images/contract/leftTwo.png',
        '1': './images/contract/leftOne.png',
        '4': './images/contract/leftTwo.png'
    },
    numberToCn: {
        '0': '*',
        '1': '一',
        '2': '二',
        '3': '三',
        '4': '四',
        '5': '五',
        '6': '六',
        '7': '七',
        '8': '八'
    },
    dvdStatus: {
        0: '未到账',
        1: '已到账',
    },
    dvdLowerStatusMani: {
        0: '发放分红',
        6: '--', //已发放
        7: '--' //平台代发
    },
    dvdDayLowerStatusMani: {
        0: '发放日工资',
        6: '--', //已发放
        7: '--' //平台代发
    },
    dvdLowerStatus: {
        0: '未发放',
        6: '已发放',
        7: '平台代发'
    },
    canCreatContract: false,
    canDayCreatContract: false,
    lowerContractStartDate: '',
    lowerDayContractStartDate: '',
    minLowerDayStartDate: '',
    minLowerStartDate: '',
    dialogWidth: 800,
    dayDialogWidth: 652,
    dutyDeclareText: ' <div class="caption">摩臣娱乐平台契约分红免责声明</div>\
                    <div class="wrapDuty">\
                    <p>1.摩臣娱乐“契约分红协议”</p><p style="text-indent:24px;">为保障代理的分红利益,平台推出“契约分红协议”，该协议由上下级代理以自愿为原则签署，并接受平台的监督。</p>\
                    <p>2.服务说明</p>\
                    <p class="red">（1）“契约分红”就是上级与下级在平台内部建立的一种分红约定并由平台监督和监管,尽量保障下级分红利益。</p>\
                    <p class="red">（2）当前代理需要与上级签订契约，才可以给下级建立契约并签订。</p>\
                    <p class="red">（3）上级代理有义务按照分红契约中约定的比例发放分红。</p>\
                    <p class="red">（4）平台彩票分红每半月发放一次，分红发放开始于每月1日和16日，结束于每月11日和26日。如在结束时间后仍未发放分红，平台有权强制发放并计入不良记录。</p>\
                    <p>3.免责声明</p>\
                    <p class="red">（1）“契约分红协议”属于上下级代理之间的协议，平台有权监督契约执行情况。</p>\
                    <p class="red">（2）契约分红原则上必须经由平台发放，平台不鼓励上级代理经由平台外的第三方途径发放分红(出现纠纷平台不承担任何责任和义务)。</p>\
                    <p class="red">（3）分红尚未发放完成时，上级代理的账号资金暂时冻结，不得提现，投注，上下级转账等，直至分红发放完毕！对于拒绝发放分红的上级，平台有权强制发放，情节严重者平台有权永久冻结其帐号并转移其下级！</p>\
                    <p>4.最终解释权</p>\
                    <p style="font-size:13px;font-weight:bold;">关于本平台中所有规则与条款，本平台保留所有最终解释权。</p>\
                    </div>',
    dutyDayDeclareText() {
        const _hash = window.location.hash;
        const obj = {
            '#daySalary': '日工资',
            '#sifan': '私返'
        };
        return `
            <div class="caption">摩臣娱乐平台契约${obj[_hash]}免责声明</div>
            <div class="wrapDuty">
                <p>1.摩臣娱乐“契约${obj[_hash]}协议”</p><p style="text-indent:24px;"> 为保障代理的利益,平台推出“契约${obj[_hash]}协议”，该协议由上下级代理以自愿为原则签署，并接受平台的监督。协议从下级代理确认签订起即时生效，从所属周期计算${obj[_hash]}。已签订协议后，由上下级代理相商可重新签订契约，该契约由上级新建下发到下级代理，契约签订后替换旧契约，表示契约生效。</p>
                <p>2.服务说明</p>
                <p class="red">（1）“契约${obj[_hash]}”就是上级与下级在平台内部建立的一种${obj[_hash]}约定并会由平台监督和监管。尽量保障下级${obj[_hash]}利益。</p>
                <p class="red">（2）当前代理需要与上级签订契约，才可以给下级建立契约并签订。</p>
                <p class="red">（3）上级代理有义务按照${obj[_hash]}契约中约定的比例发放${obj[_hash]}。</p>
                <p class="red">（4）平台彩票${obj[_hash]}每日发放一次，逾期10日未发放${obj[_hash]}，平台有权强制发放并计入不良记录。</p>
                <p>3.免责声明</p>
                <p class="red">（1）“契约${obj[_hash]}协议”属于上下级代理之间的协议，平台有权监督契约执行情况。</p>
                <p class="red">（2）契约${obj[_hash]}原则上必须经由平台发放，平台不鼓励上级代理经由平台外的第三方途径发放${obj[_hash]}(出现纠纷平台不承担任何责任和义务)。</p>
                <p class="red">（3）${obj[_hash]}尚未发放完成时，上级代理的账号资金暂时冻结，不得买单，兑换礼金，提现，向下代充等，直至${obj[_hash]}发放完成！对于拒绝发放${obj[_hash]}的上级，平台有权强制发放，情节严重者平台有权永久冻结其帐号并转移其下级！</p>
                <p>4.最终解释权</p>
                <p style="font-size:13px;font-weight:bold;">关于本平台中所有规则与条款，本平台保留所有最终解释权。</p>
            </div>
        `;
    },
    alignDialog: function () {
        //弹窗参照物，为了契约和免责高度一致
        if ($('#alignDialog').length === 0) {
        $('body').append('<div id="alignDialog"></div>');
        }
        let selfWidth;
        setTimeout(() => {
            switch (window.location.hash) {
                case '#daySalary':
                    selfWidth = this.dayDialogWidth;
                    break;
                case '#dividents':
                    selfWidth = this.dialogWidth;
                    break;
                default:
                    selfWidth = this.dialogWidth;
            }
        $('#alignDialog').css({
            position: 'fixed',
            top: '135px',
                left: `${(window.innerWidth - selfWidth - 40)/2}px`, //（屏幕总宽度-弹框宽度）/2
            width: '1px',
            height: '1px',
            background: 'transparent',
        });
        }, 500);
    },
    //分红周期日期生成
    yearAndMonth: function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = Number(date.getMonth()) + 1;
        var flagMonth = Number(date.getMonth()) + 1; //2月情况特殊处理
        var day = date.getDate();
        var arr = [];
        //小于6显示半年
        for (let i = 0; i < 6; i++) {
            //二月上半月是1号到14号
            if (day > 15 && flagMonth != 2) {
                if (month - i == 0) {
                    month += 12;
                    year--;
                }
                arr.push(`${year}年${('0'+(month-i)).slice(-2)}月上半月,${year}年${('0'+(month-1-i)).slice(-2)}月下半月`);
            } else if (day <= 15 && flagMonth != 2) {
                if (month - i - 1 == 0) {
                    month += 12;
                    year--;
                }
                arr.push(`${year}年${('0'+(month-1-i)).slice(-2)}月下半月,${year}年${('0'+(month-1-i)).slice(-2)}月上半月`);
            } else if (day <= 14 && flagMonth == 2) {
                if (month - i - 1 == 0) {
                    month += 12;
                    year--;
                }
                arr.push(`${year}年${('0'+(month-1-i)).slice(-2)}月下半月,${year}年${('0'+(month-1-i)).slice(-2)}月上半月`);
            } else if (day > 14 && flagMonth == 2) {
                if (month - i == 0) {
                    month += 12;
                    year--;
                }
                arr.push(`${year}年${('0'+(month-i)).slice(-2)}月上半月,${year}年${('0'+(month-1-i)).slice(-2)}月下半月`);
            }
        }
        arr = arr.toString().split(',');
        var yearAndMonthHtml = `<option value=" ">全部</option>` + arr.map((item, index) => {
            return `<option value="${item}">${item}</option>`;
        }).join('');
        $('.queryArea_three').html(yearAndMonthHtml);
        $('.queryLowerArea_three').html(yearAndMonthHtml);
    },
    initDividentEvent: function () {
        //hover问号提示
        (()=> {
            var xOffset;
            var yOffset;
            $('.dvdDetailQuestion,.dvdLowerDetailQuestion').hover((e)=> {
                var content = `<div class="toolTip" style="width:338px;"><p>在满足协议规则条件下：分红金额=（中奖+返点+会员活动+代理活动-投注）*分红比例</p><div class="triangle" style="left:158px;"></div></div>`;
                $('body').append(content);
                yOffset = 80;
                $('.toolTip').css({
                    'top': (e.pageY - yOffset) + 'px',
                    'left': (e.pageX - $('.toolTip').width() / 2) + 'px',
                }).fadeIn('fast');
            }, ()=> {
                $('.toolTip').remove();
            });
            //lottery/api/u/v1/bonus/getBonusDayActiveUserLimit //获取充值最大值M接口
            $.ajax({
                url: '/lottery/api/u/v1/bonus/getBonusDayActiveUserLimit',
                type: 'GET',
                cache: false,
                dataType: 'json',
                data: {}
            }).done(function (res) {
                const dataArr = res.data;//[{},{}]
                let minCharge;
                let minBet;
                let text;
                for (let i = 0; i < dataArr.length; i++) {
                    if (dataArr[i]['type'] === 'RECHARGE_AMOUNT') {
                        minCharge = dataArr[i]['amount'];
                    }
                    if (dataArr[i]['type'] === 'BET_AMOUNT') {
                        minBet = dataArr[i]['amount'];
                    }
                }
                if (minCharge && minBet) {
                    text = `
                        当日累计充值金额≥${minCharge}元且当日累计有效投注额≥${minBet}元的用户人数，计为活跃人数
                    `;
                } else if (!minCharge && minBet) {
                    text = `
                        当日累计有效投注额≥${minBet}元的用户人数，计为活跃人数
                    `;
                } else if (minCharge && !minBet) {
                    text = `
                        当日累计充值金额≥${minCharge}元的用户人数，计为活跃人数
                    `;
                } else if (!minCharge && !minBet) {//默认
                    text = `
                        当日累计充值金额≥100元的用户人数，计为活跃人数
                    `;
                }
                $('.queBonusAmount,.queBonusDayAmount,.activePeopleQuestion,.activePeopleLowerQuestion').hover((e)=> {
                    var content = `<div class="toolTip" style="width:324px;"><p>${text}</p><div class="triangle" style="left:150px;"></div></div>`;
                    $('body').append(content);
                    yOffset = 75;
                    $('.toolTip').css({
                        'top': (e.pageY - yOffset) + 'px',
                        'left': (e.pageX - $('.toolTip').width() / 2) + 'px',
                    }).fadeIn('fast');
                }, ()=> {
                    $('.toolTip').remove();
                });
            });
        })();
        var xOffset;
        var yOffset;
        $('.questionMyDayDvd,.questionLowerDayDvd').hover((e)=> {
            var content;
            xOffset = 500;
            yOffset = 0;
            if ($(this).hasClass('questionMyDayDvd')) {
                content = `<div class="toolTip"><p>已收日工资为上级代理给予当前代理的本日工资金额</p>
                            <p>待发日工资为当前代理需要支付于下级代理账户的日工资总金额，该金额用于发放下级代理日工资，不能用于投注、上下级转账以及提现操作</p>
                           </div>`;
            } else {
                content = `<div class="toolTip"><p>已发日工资为当前代理已支付于下级代理的日工资金额</p>
                            <p>待发日工资为当前代理未支付于下级代理的日工资金额，该金额用于发放下级代理日工资，不能用于投注、上下级转账及提现操作</p>
                           </div>`;
            }

            $('body').append(content);
            $('.toolTip').css({
                'top': (e.pageY + yOffset) + 'px',
                'left': (e.pageX - xOffset) + 'px',
                'width': '500px',
            }).fadeIn('fast');
        }, (e)=> {
            $('.toolTip').remove();
        });
        $('.dvdQuestion,.dvdLowerResultQuestion').hover((e)=> {
            var content;
            xOffset = 500;
            yOffset = 0;
            if ($(this).hasClass('dvdQuestion')) {
                content = `<div class="toolTip"><p>已收分红为上级代理给予当前代理的本周期分红金额</p>
                <p>待发分红为当前代理需要支付下级代理的分红金额，该金额用于发放下级代理分红，不能用于投注、上下级转账以及提现操作</p>
                </div>`;
            } else {
                content = `<div class="toolTip"><p>已发分红：表示当前代理已支付于下级代理的分红总额</p>
                <p>待发分红：表示当前代理未支付于下级代理的分红总额，该金额用于发放下级代理分红，不能用于投注、上下级转账及提现操作</p>
                </div>`;
            }
            $('body').append(content);
            $('.toolTip').css({
                'top': (e.pageY - yOffset) + 'px',
                'left': (e.pageX - xOffset) + 'px',
                'width': '500px',
            }).fadeIn('fast');
        }, (e)=> {
            $('.toolTip').remove();
        });
    },
    getUserPointInfo: function (type) {
        //分红1日工资2
        Api.getUserPointInfo({
            type: type
        }, function (res) {
            if (type == 1) {
                $('.dividents .item[name="myDevident"] .dvdResult .receivedDvd').text(res.result.releasedAmount);
                $('.dividents .item[name="myDevident"] .dvdResult .frozenMoney').text(res.result.lockAmount);
            } else if (type == 2) {
                $('#admin_report > div.panel-tab.daySalary > div:nth-child(2) > div.clearfix.dvdResult > div > span.receivedDvd').text(res.result.releasedAmount);
                $('#admin_report > div.panel-tab.daySalary > div:nth-child(2) > div.clearfix.dvdResult > div > span.frozenMoney').text(res.result.lockAmount);
            }

        });
    },
    getAgentPointInfo: function (type) {
        Api.getAgentPointInfo({
            type: type
        }, function (res) {
            if (type == 1) {
                $('.dividents .item[name="lowerDevidents"] .dvdLowerResult .receivedDvdLower').text(res.result.releasedAmount);
                $('.dividents .item[name="lowerDevidents"] .dvdLowerResult .frozenMoneyLower').text(res.result.unreleaseAmount);
            } else if (type == 2) {
                $('#admin_report > div.panel-tab.daySalary > div:nth-child(4) > div.clearfix.dvdLowerResult > div > span.receivedDvdLower').text(res.result.releasedAmount);
                $('#admin_report > div.panel-tab.daySalary > div:nth-child(4) > div.clearfix.dvdLowerResult > div > span.frozenMoneyLower').text(res.result.unreleaseAmount);
            }

        });
    },
    getMyContract: function (currentPage) {
        var me = this;
        var tab = $('.panel-tab.dividents');
        var ulData = tab.find('.item[name="myContract"] ul.data');
        var liHtml = '';
        me.yearAndMonth();
        me.alignDialog();
        var contractsWrap = $('.dividents .item[name="myContract"] .contractsWrap');
        $('#admin_report > div.panel-tab.dividents > div:nth-child(1) > div.list > ul.head > li.listhead').hide();
        //最近两期契约
        Api.getRecentTwoContract({
            currPage: currentPage,
            pageSize: 6
        }, function (res) {
            if (res.result.list.length == 0) {
                return;
            }
            if (res.code == 1001) {
                dialog({
                    content: `<p>${res.msg}</p>`,
                    onshow: function () {
                        setTimeout(() => {
                            this.close();
                        }, 3000);
                    }
                }).showModal();
                return;
            }
            //platform是否平台直签（0平台，1代理）
            me.platform = res.result.list[0]['platform'];
            me.ruleType = res.result.list[0]['ruleType'];
            //下级契约默认开始日期
            me.lowerContractStartDate = Math.min(...(res.result.list.map((item, index) => {
                return (new Date(item.createTime)).getTime();
            })));

            //创建下级契约的金额起算日期必须大于等于上级代理的金额起算日期
            me.minLowerStartDate = res.result.list.filter((item, index) => item.status == 1)[0] ? res.result.list.filter((item, index) => item.status == 1)[0].startDate : '2016-01-01';
            var contractsWrapContent = res.result.list.map((item, index) => {

                let rulesContent = item.contractRuleList.filter((item, index) => {
                    return item.ruleSort != 0;
                }).sort(function (a, b) {
                    return a.ruleSort - b.ruleSort;
                }).slice(0, 2).map((rule, ruleIndex) => {
                    //规则类型(1.既有亏损又有投注，2.只有投注，3.只有亏损，4.日工资)
                    switch (rule.type) {
                        case '1':
                            return `<p class="rule ellipsis"><span>契约规则${Contract.numberToCn[rule.ruleSort]}</span><span style="margin-left: 15px;">日均投注额：大于等于${rule.betMoney/10000}万元,周期内活跃人数大于等于：${rule.activePeople}人,且半月亏损大于等于：${rule.lossMoney}元，月底分红：${(rule.bonus*100).toFixed(1)}%</span></p>`;
                        case '2':
                            return `<p class="rule ellipsis"><span>契约规则${Contract.numberToCn[rule.ruleSort]}</span><span style="margin-left: 15px;">日均投注额：大于等于${rule.betMoney/10000}万元,周期内活跃人数大于等于：${rule.activePeople}人,月底分红：${(rule.bonus*100).toFixed(1)}%</span></p>`;
                        case '3':
                            return `<p class="rule ellipsis"><span>契约规则${Contract.numberToCn[rule.ruleSort]}</span><span style="margin-left: 15px;">周期内活跃人数大于等于：${rule.activePeople}人,半月亏损大于等于：${rule.lossMoney}元,月底分红：${(rule.bonus*100).toFixed(1)}%</span></p>`;
                        default:
                            return '';
                    }
                }).join('');
                if (item.contractRuleList.length > 2) {
                    rulesContent += '<p>...</p>';
                }
                return `<div class="eachCttWrap clearfix" idval="${item.id}">
                            <div class="contractLeft fl"><img src="${Contract.contractLeftSrc[item.status]}" width="70"></div>
                            <div class="contractRight fr">
                                <div class="rulesTopWrap clearfix">
                                    <span class="fl ruleTitle">分红契约</span>
                                    <span class="fr ruleDate">金额起算日期：${item.startDate}</span></div>
                                <div class="rulesContentWrap">
                                    ${rulesContent}
                                </div>
                            </div>
                            <div class="linkCttDetail" idval="${item.id}">查看详情</div>
                            <div class="stampSeal"><img src="${Contract.stampSealSrc[item.status]}" height="100"></div>
                        </div>`;
            }).join('');
            //未签订不能创建新契约
            me.canCreatContract = res.result.list.some(function (item, index) {
                return item.status == 0;
            });

            contractsWrap.html(contractsWrapContent);
            //点击最近两期契约弹窗契约详情
            $('[name="myContract"] .contractsWrap>div').off('click').on('click', function (e) {
                var $this = $(this);
                e.stopPropagation();
                e.preventDefault();
                Api.getDetailContract({
                    id: $this.attr('idval')
                }, function (response) {
                    if (response.code === '10001') {
                        dialog({
                            content: `<p>${res.msg}</p>`,
                            onshow: function () {
                                setTimeout(() => {
                                    this.close()
                                }, 5000);
                            }
                        }).showModal();
                        return;
                    }
                    let contractRuleList = response.result.contractRuleList;
                    let RuleListHtml = contractRuleList.filter((item, index) => {
                        return item.ruleSort != 0;
                    }).sort((a, b) => {
                        return a.ruleSort - b.ruleSort;
                    }).map((item, index) => {
                        //规则类型(1.既有亏损又有投注，2.只有投注，3.只有亏损，4.日工资)
                        if (item.type == 1) {
                            return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数：≥&nbsp;${item.activePeople}人，且半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                        } else if (item.type == 2) {
                            return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数：≥&nbsp;${item.activePeople}人，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                        } else if (item.type == 3) {
                            return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;周期内活跃人数：≥&nbsp;${item.activePeople}人，半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                        } else {
                            return '';
                        }
                    }).join('');
                    //3.只有亏损
                    let specialRule = contractRuleList.filter((item) => {
                        return item.ruleSort == 0;
                    });
                    let specialRuleHtml;
                    if (specialRule.length > 0) {
                        specialRuleHtml = specialRule.map((item, index) => {
                            //规则类型(1.既有亏损又有投注，2.只有投注，3.只有亏损，4.日工资)
                            if (item.type == 1) {
                                return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数：≥&nbsp;${item.activePeople}人，且半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                            } else if (item.type == 2) {
                                return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数：≥&nbsp;${item.activePeople}人，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                            } else if (item.type == 3) {
                                return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;周期内活跃人数：≥&nbsp;${item.activePeople}人，半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                            } else {
                                return '';
                            }
                        }).join('');
                    } else {
                        specialRuleHtml = '';
                    }
                    //不同状态显示不同契约弹窗
                    var showContract;
                    var content = null;
                    var button = null;
                    var contentHeight = null;
                    if (response.result.status == 0) {
                        content = `<p class="rulesTitle">您的上级：想与您签订契约分红协议</p>
									  <p class="rules">分红契约规则如下：</p>
									  ${RuleListHtml}
                                      ${specialRuleHtml}
									  <p class="rulesFive"  style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
									  <p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
									  <p class="rulesEight">*与上级签订分红契约，全力保障您的代理分红！</p>`;
                        button = [{
                            id: 'ruleBtnOne',
                            value: '接受契约',
                            callback: function () {
                                Api.updateContractStatus({
                                    contractId: response.result.id,
                                    status: 1
                                }, function (res) {
                                    dialog({
                                        content: `<p style="text-align:center">您已接受契约</p>`,
                                        cancel: true,
                                        fixed: true,
                                        width: '200px',
                                        height: '16px',
                                        onshow: function () {
                                            setTimeout(() => {
                                                this.close();
                                            }, 5000);
                                        }
                                    }).showModal();
                                    me.getMyContract(currentPage);
                                });
                            }
                        }, {
                            id: 'ruleBtnTwo',
                            value: '拒绝契约',
                            callback: function () {
                                Api.updateContractStatus({
                                    contractId: response.result.id,
                                    status: 5
                                }, function (res) {
                                    dialog({
                                        content: `<p>您已拒绝契约</p>`,
                                        cancel: true,
                                        fixed: true,
                                        width: '200px',
                                        height: '16px',
                                        onshow: function () {
                                            setTimeout(() => {
                                                this.close();
                                            }, 5000);
                                        }
                                    }).showModal();
                                    me.getMyContract(currentPage);
                                });
                            }
                        }];
                        showContract = dialog({
                            id: 'showContract',
                            title: '契约签订',
                            width: Contract.dialogWidth,
                            height: 'auto',
                            content: content,
                            button: button,
                            align: 'right top',
                            onshow: function () {
                                var that = this;
                                $('[i-id="cancel"]').hide();
                                /*$('.ui-dialog-footer').css({
                                    'height': 60
                                });*/
                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                    'background-color': 'rgba(115,123,248,1)'
                                });
                                // contentHeight = $('.ui-popup .ui-dialog-content').height();
                                $('[id="content:showContract"] .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                    e.stopPropagation();
                                    // $('.ui-popup .ui-dialog-content').height(contentHeight);
                                    that.title('免责声明');
                                    that.content(me.dutyDeclareText);
                                    $('[i-id="cancel"]').show();
                                    $('[i-id="ruleBtnOne"],[i-id="ruleBtnTwo"]').hide();
                                });

                            },
                            cancel: function () {
                                if ($('.ui-dialog-title').text() == '免责声明') {
                                    var that = this;
                                    this.content(content);
                                    this.title('契约签订');
                                    $('[i-id="cancel"]').hide();
                                    $('[i-id="ruleBtnOne"],[i-id="ruleBtnTwo"]').show();
                                    $('[id="content:showContract"] .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                        e.stopPropagation();
                                        that.title('免责声明');
                                        $('[i-id="ruleBtnOne"],[i-id="ruleBtnTwo"]').hide();
                                        $('[i-id="cancel"]').show();
                                        that.content(me.dutyDeclareText);
                                    });
                                    return false;
                                }
                            },
                        });
                        showContract.showModal($('#alignDialog')[0]);
                    } else {
                        content = ` <table class="m0_auto textCenter"><tbody> 
                                <tr><td>协议签订日期</td><td>${response.result.contractDate?new Date(response.result.contractDate).Format('YYYY-MM-DD'):'未签订'}</td><td>金额起算日期</td><td>${response.result.startDate}</td></tr></tbody></table>
								<p class="rules">契约状态：<span class="green">${Contract.statusReflect[response.result.status]}</span></p>
                                ${RuleListHtml}
                                ${specialRuleHtml}
								<p class="rulesFive" style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''}</span></p>
								<p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
								<p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
								<p class="rulesEight">*与上级签订分红契约，全力保障您的代理分红！</p>`;
                        showContract = dialog({
                            id: 'showContract',
                            fixed: true,
                            title: '契约签订',
                            width: Contract.dialogWidth,
                            height: 'auto',
                            align: 'right top',
                            // quickClose: true,
                            content: content,
                            onshow: function () {
                                var that = this;
                                // contentHeight = $('.ui-popup .ui-dialog-content').height();
                                $('[i-id="cancel"]').hide();
                                $('.ui-dialog-footer').css({
                                    'padding': 0
                                });
                                $('.ui-dialog-content table td').css({
                                    'border': '1px solid',
                                    'font-size': '12px',
                                    'padding': '5px 20px'
                                });
                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                    'background-color': 'rgba(115,123,248,1)'
                                });
                                $('[id="content:showContract"] .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                    e.stopPropagation();
                                    // $('.ui-popup .ui-dialog-content').height(contentHeight);
                                    that.title('免责声明');
                                    $('[i-id="cancel"]').show();
                                    $('.ui-dialog-footer').css({
                                        'padding': '0 0 20px 0',
                                    });
                                    that.content(me.dutyDeclareText);
                                });
                            },
                            cancel: function () {
                                if ($('.ui-dialog-title').text() == '免责声明') {
                                    var that = this;
                                    this.content(content);
                                    this.title('契约签订');
                                    $('[i-id="cancel"]').hide();
                                    $('.ui-dialog-footer').css({
                                        'padding': 0
                                    });
                                    $('[id="content:showContract"] .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                        e.stopPropagation();
                                        that.title('免责声明');
                                        $('[i-id="cancel"]').show();
                                        $('.ui-dialog-footer').css({
                                            'padding': '0 0 20px 0',
                                        });
                                        that.content(me.dutyDeclareText);
                                    });
                                    return false;
                                }
                            },
                        });
                        showContract.showModal($('#alignDialog')[0]);
                    }
                });
            });

            //分页
            var pageHtml = Q.showPagination(currentPage || 1, res.result.pageSize, null, res.result.totalPage);
            if (res.result.list.length == 0) {
                $('.dividents .item[name="myContract"] div.pager').html('<p>暂无数据！</p>');
            } else {
                $('.dividents .item[name="myContract"] div.pager').html(pageHtml);
            }

            $('.dividents .item[name="myContract"] div.pager a').off('click').on('click', function (e) {
                var currPage = $(this).attr('page');
                me.getMyContract(currPage);
            });
        });
    },
    getMyDevident: function (currentPage, sortName = 'bonusCycTitle', sortType = 'desc') {

        var me = this;
        var tab = $('.panel-tab.dividents');
        var ulData = tab.find('.item[name="myDevident"] ul.data');
        var liHtml = '';

        me.initDividentEvent();
        // me.getUserPointInfo(1);
        //点击查询分红列表
        $('.dividents .item[name="myDevident"] .queryArea_six').off('click').on('click', function (e) {
            Api.getBonusCycList({
                bonusCycTitle: $('.dividents .item[name="myDevident"] .queryArea_three').val(),
                actionStatusDetail: $('.dividents .item[name="myDevident"] .queryArea_five').val(),
                currPage: currentPage,
                pageSize: 10,
                sortName: sortName,
                sortType: sortType,
            }, function (res) {
                if (res.status == 404) {
                    return;
                }
                if (res.code == 1001) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close()
                            }, 5000);
                        }
                    }).showModal();
                    return;
                }
                if (res.code == 1) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close();
                            }, 3000);
                        }
                    }).showModal();
                    return;
                }
                var list = res.result.list || [];

                function renderHtml() {
                    liHtml = list.map((item, index) => {
                        return `<li><span rel="bonusCycTitle">${item.bonusCycTitle}</span><span rel="betAmount">${item.betAmount}</span><span rel="activePeople">${item.activeUserCount}</span><span rel="profitLossCount">${item.profitLossCount}</span><span class="bonusRatio" rel="bonusRatio">${item.bonusRatio==0?'---':`${(item.bonusRatio*100).toFixed(2)}%`}</span><span rel="bonusAmount" class="bonusAmount" bonusRatio="${item.bonusRatio}" tip="${item.computeDetailInfo}" contractNo="${item.agreementNo}">${item.bonusAmount}</span><span class="actionStatusDetail" rel="actionStatusDetail">${Contract.dvdStatus[item.actionStatusDetail]}</span></li>`;
                    }).join('');
                    ulData.html(liHtml);
                }
                renderHtml();
                $('.dividents .item[name="myDevident"] .dvdResult .receivedDvd').text(res.result.bonusedAmount);
                $('.dividents .item[name="myDevident"] .dvdResult .frozenMoney').text(res.result.freezeAmount);
                //排序
                $('#admin_report > div.panel-tab.dividents > div:nth-child(2) > div.list > ul.head > li > span.dvd').off('click').on('click', function () {
                    if ($(this).find('span.up').hasClass('on')) {
                        localStorage.setItem('sortType', 'desc');
                        $(this).find('span.up').removeClass('on');
                        $(this).find('span.down').addClass('on');
                    } else if ($(this).find('span.down').hasClass('on')) {
                        localStorage.setItem('sortType', 'asc');
                        $(this).find('span.down').removeClass('on');
                        $(this).find('span.up').addClass('on');
                    } else {
                        localStorage.setItem('sortType', 'desc');
                        $(this).find('span.up').removeClass('on');
                        $(this).find('span.down').addClass('on');
                    }
                    $(this).siblings().find('span.on').removeClass('on');

                    switch ($(this).attr('rel')) {
                        case 'bonusCycTitle':
                            localStorage.setItem('sortName', 'bonusCycTitle');
                            me.getMyDevident(currentPage, 'bonusCycTitle', localStorage.getItem('sortType'));
                            break;
                        case 'betAmount':
                            localStorage.setItem('sortName', 'betAmount');
                            me.getMyDevident(currentPage, 'betAmount', localStorage.getItem('sortType'));
                            break;
                        case 'profitLossCount':
                            localStorage.setItem('sortName', 'profitLossCount');
                            me.getMyDevident(currentPage, 'profitLossCount', localStorage.getItem('sortType'));
                            break;
                        case 'bonusRatio':
                            localStorage.setItem('sortName', 'bonusRatio');
                            me.getMyDevident(currentPage, 'bonusRatio', localStorage.getItem('sortType'));
                            break;
                        case 'bonusAmount':
                            localStorage.setItem('sortName', 'bonusAmount');
                            me.getMyDevident(currentPage, 'bonusAmount', localStorage.getItem('sortType'));
                            break;
                        case 'activePeople':
                            localStorage.setItem('sortName', 'activeUserCount');
                            me.getMyDevident(currentPage, 'activeUserCount', localStorage.getItem('sortType'));
                            break;
                        default:
                            break;
                    }

                    bonusAmountPop();
                    bonusRatioPop();
                });
                //点击分红金额弹窗分红公式
                function bonusAmountPop() {
                    $('.bonusAmount').click(function (e) {
                        var $this = $(this);
                        dialog({
                            quickClose: true,
                            align: 'left top',
                            content: `<p>${$this.attr('tip')}</p>
                                        <p>计算公式：在满足协议规则条件下：分红金额=（投注-中奖-返点-代理活动-会员活动）*分红比例.</p>
                                        <p><span>根据签约协议的规则，您当前的分红比例为${$this.attr('bonusRatio')*100}%</span><span class="readContract fr">查看分红契约</span></p>`,
                            onshow: function () {
                                $('.ui-dialog-body').css({
                                    'border': '#f2ea91 solid 2px',
                                    'background': '#fef6e1',
                                });
                                $('.readContract').css({
                                    color: '#01b0ff',
                                    cursor: 'pointer'
                                });
                                $('.readContract:hover').css({
                                    'text-decoration': 'underline'
                                });
                                $('.readContract').on('click', function (e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    Api.getDetailContract({
                                        contractNo: $this.attr('contractNo')
                                    }, function (response) {
                                        if (response.code == '1001') {
                                            dialog({
                                                content: `<p>${response.msg}</p>`,
                                                onshow: function () {
                                                    setTimeout(() => {
                                                        this.close();
                                                    }, 5000);
                                                }
                                            }).showModal();
                                            return;
                                        }
                                        let contractRuleList = response.result.contractRuleList;
                                        let specialRuleHtml = contractRuleList.filter(item => item.ruleSort == 0).map((item, index) => {
                                            //规则类型(1.既有亏损又有投注，2.只有投注，3.只有亏损，4.日工资)
                                            if (item.type === 1) {
                                                return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数：≥&nbsp;${item.activePeople}人，且半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                                            } else if (item.type === 2) {
                                                return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数：≥&nbsp;${item.activePeople}人，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                                            } else if (item.type === 3) {
                                                return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;周期内活跃人数：≥&nbsp;${item.activePeople}人，半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                                            } else {
                                                return '';
                                            }
                                        }).join('');
                                        let RuleListHtml = contractRuleList.filter(item => item.ruleSort != 0).sort((a, b) => {
                                            return a.ruleSort - b.ruleSort;
                                        }).map((item, index) => {
                                            //规则类型(1.既有亏损又有投注，2.只有投注，3.只有亏损，4.日工资)
                                            if (item.type === 1) {
                                                return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数：≥&nbsp;${item.activePeople}人，且半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                                            } else if (item.type === 2) {
                                                return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数：≥&nbsp;${item.activePeople}人，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                                            } else if (item.type === 3) {
                                                return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;周期内活跃人数：≥&nbsp;${item.activePeople}人，半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                                            } else {
                                                return '';
                                            }
                                        }).join('');
                                        var contentHeight = null;
                                        var showContract = dialog({
                                            id: 'showContract',
                                            fixed: true,
                                            title: '契约签订',
                                            width: Contract.dialogWidth,
                                            align: 'right top',
                                            // quickClose: true,
                                            height: 'auto',
                                            content: `
                                                <table class="m0_auto textCenter"><tbody> 
                                                <tr><td>协议签订日期</td><td>${response.result.contractDate?new Date(response.result.contractDate).Format('YYYY-MM-DD'):'未签订'}</td><td>金额起算日期</td><td>${response.result.startDate}</td></tr></tbody></table>
                                                <p class="rules">契约状态：<span class="green">${Contract.statusReflect[response.result.status]}</span></p>
                                                ${RuleListHtml}
                                                ${specialRuleHtml}
                                                <p class="rulesFive"  style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''}</span></p>
                                                <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
                                                <p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
                                                <p class="rulesEight">*与上级签订分红契约，全力保障您的代理分红！</p>`,
                                            onshow: function () {
                                                var that = this;
                                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                                    'background-color': 'rgba(115,123,248,1)'
                                                });

                                                $('.ui-dialog-content .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                                    e.stopPropagation();
                                                    var dutyDeclare = dialog({
                                                        id: 'dutyDeclare',
                                                        title: '免责声明',
                                                        align: 'right top',
                                                        width: Contract.dialogWidth,
                                                        height: 'auto',
                                                        cancel: function () {
                                                            that.showModal();
                                                        },
                                                        // quickClose: true,
                                                        content: me.dutyDeclareText,
                                                        onshow: function () {}
                                                    });
                                                    that.close();
                                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                                });
                                            },
                                        });
                                        showContract.showModal($('#alignDialog')[0]);
                                    });

                                });
                            }
                        }).show($(this)[0]);
                    });
                }
                bonusAmountPop();
                //点击分红比例显示分红比例
                function bonusRatioPop() {
                    $('.bonusRatio').click(function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        dialog({
                            quickClose: true,
                            content: `<p>根据签约协议的规则，您当前的分红比例为${$(this).text()}</p>`,
                            onshow: function () {
                                $('.ui-dialog-body').css({
                                    'border': '#f2ea91 solid 2px',
                                    'background': '#fef6e1',
                                });
                            }
                        }).show($(this)[0]);

                    });
                }
                bonusRatioPop();
                //分页
                var pageHtml = Q.showPagination(currentPage || 1, res.page.pageSize, null, res.page.totalPage);
                if (res.result.list.length === 0) {
                    $('.dividents .item[name="myDevident"] div.pager').html('<p>暂无数据!</p>');
                } else {
                    $('.dividents .item[name="myDevident"] div.pager').html(pageHtml);
                }

                $('.dividents .item[name="myDevident"] div.pager a').off('click').on('click', function (e) {
                    var currPage = $(this).attr('page');
                    me.getMyDevident(currPage, localStorage.getItem('sortName'), localStorage.getItem('sortType'));
                });

            });
        });
        $('.dividents .item[name="myDevident"] .queryArea_six').trigger('click');

    },
    getLowersContract: function (currentPage) {
        var me = this;
        var tab = $('.panel-tab.dividents');
        var ulData = tab.find('.item[name="lowersContract"] ul.data');
        var liHtml = '';
        $('.item[name="lowersContract"] .lctQuery .lctTimeStart').datetimepicker({
            format: 'Y-m-d',
            defaultDate: new Date(),
            lang: 'zh',
            value: $('.item[name="lowersContract"] .lctQuery .lctTimeStart').val() || new Date(me.lowerContractStartDate)
        });
        $('.item[name="lowersContract"] .lctQuery .lctTimeEnd').datetimepicker({
            format: 'Y-m-d',
            defaultDate: new Date(),
            lang: 'zh',
            value: $('.item[name="lowersContract"] .lctQuery .lctTimeEnd').val() || new Date()
        });
        //列表
        $('.item[name="lowersContract"] .lctQuery').off('click').on('click', '.lctButton', function (e) {
            e.preventDefault();
            Api.getLowerContract({
                userName: $('.item[name="lowersContract"] .lctQuery .lctName').val(),
                createDateBegin: $('.item[name="lowersContract"] .lctQuery .lctTimeStart').val(),
                createDateEnd: $('.item[name="lowersContract"] .lctQuery .lctTimeEnd').val(),
                status: $('.item[name="lowersContract"] .lctQuery .lctState').val(),
                currPage: currentPage,
                pageSize: 10
            }, function (res) {
                // res == -1 && (window.location.href = window.location.protocol + '//' + window.location.host);
                if (res.code == '10001') {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close();
                            }, 5000);
                        }
                    }).showModal();
                    return;
                }
                let resultList = res.result.list;
                liHtml = resultList.map(function (item, index) {
                    if (item.status == 0) {
                        return `<li><span class="w_p15">${item.userName}</span><span class="w_p15">${item.createTime}</span><span class="w_p15">${item.contractDate==null?'尚未签约':new Date(item.contractDate.split(' ')[0]).Format('YYYY-MM-DD')}</span><span class="w_p15">${item.startDate}</span><span class="w_p15"><i class="statusCircle${item.status}"></i>${Contract.statusReflect[item.status]}</span><span class="w_p25"><em class="readLowerContract" idVal="${item.id}">查看</em><em class="m0_10 cancelLowerContract" idval="${item.id}">取消</em><em class="modifyLowerContract" idval="${item.id}" userName="${item.userName}">修改</em><em idval="${item.id}" userName="${item.userName}" class="m0_10 createByThis mr0">复制</em></span></li>`;
                    } else if (item.status == 5) {
                        return `<li><span class="w_p15">${item.userName}</span><span class="w_p15">${item.createTime}</span><span class="w_p15">${item.contractDate==null?'尚未签约':new Date(item.contractDate.split(' ')[0]).Format('YYYY-MM-DD')}</span><span class="w_p15">${item.startDate}</span><span class="w_p15"><i class="statusCircle${item.status}"></i>${Contract.statusReflect[item.status]}</span><span class="w_p25"><em idval="${item.id}" class="readLowerContract">查看</em><em idval="${item.id}" userName="${item.userName}" class="m0_10 createByThis mr0">复制</em></span></li>`;
                    }
                    return `<li><span class="w_p15">${item.userName}</span><span class="w_p15">${item.createTime}</span><span class="w_p15">${item.contractDate==null?'尚未签约':new Date(item.contractDate.split(' ')[0]).Format('YYYY-MM-DD')}</span><span class="w_p15">${item.startDate}</span><span class="w_p15"><i class="statusCircle${item.status}"></i>${Contract.statusReflect[item.status]}</span><span class="w_p25"><em idval="${item.id}" class="readLowerContract">查看</em><em idval="${item.id}" userName="${item.userName}" class="m0_10 createByThis mr0">复制</em></span></li>`;
                }).join('');
                ulData.html(liHtml);
                //查看契约
                $('.dividents .readLowerContract').off('click').on('click', function (e) {
                    e.stopPropagation();
                    const idval = $(this).attr('idval');
                    Api.getDetailContract({
                        id: idval
                    }, function (res) {
                        let contractRuleList = res.result.contractRuleList;
                        let RuleListHtml = contractRuleList.sort((a, b) => {
                            return a.ruleSort - b.ruleSort;
                        }).map((item, index) => {
                            return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数：≥&nbsp;${item.activePeople}人，且半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                        }).join('');
                        var readLowerContract;
                        if (res.result.status == 0) {
                            readLowerContract = dialog({
                                id: 'readLowerContract',
                                title: '契约详情',
                                fixed: true,
                                width: Contract.dialogWidth,
                                height: 'auto',
                                align: 'right top',
                                // quickClose: true,
                                content: `
									  <p class="rules">分红契约规则如下：</p>
									  ${RuleListHtml}
									  <p class="rulesFive"  style="display:${res.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${res.result.cancelContractCondition||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${res.result.startDate}日</p>
									  <p class="rulesEight" style="transform:translateY(60px);">*与上级签订分红契约，全力保障您的代理分红！</p>`,
                                button: [{
                                    id: 'modifyButton',
                                    value: '修改契约',
                                    callback: function () {
                                        $(`.dividents .modifyLowerContract[idval=${idval}]`).trigger('click');
                                    }
                                }, {
                                    id: 'cancelButton',
                                    value: '取消发送',
                                    callback: function () {
                                        $(`.dividents .cancelLowerContract[idval=${idval}]`).trigger('click');
                                        me.getLowersContract(currentPage);
                                    }
                                }],
                                onshow: function () {
                                    $('.ui-dialog-footer button[i-id=modifyButton]').css({
                                        'background-color': 'rgba(115,123,248,1)'
                                    });
                                }
                            });
                            readLowerContract.showModal($('#alignDialog')[0]);
                        } else if (res.result.status == 5) {
                            readLowerContract = dialog({
                                id: 'readLowerContract',
                                title: '契约详情',
                                fixed: true,
                                width: Contract.dialogWidth,
                                height: 'auto',
                                align: 'right top',
                                // quickClose: true,
                                button: [{
                                    id: 'createByThisButton',
                                    value: '复制',
                                    callback: function () {
                                        $(`.dividents .createByThis[idval=${idval}]`).trigger('click');
                                    }
                                }],
                                onshow: function () {
                                    $('.ui-dialog-button button[i-id="createByThisButton"]').css({
                                        'width': '150px'
                                    });
                                },
                                content: `
									  <p class="rules">契约状态：<span class="green">${Contract.statusReflect[res.result.status]}</span></p>
									  ${RuleListHtml}
									  <p class="rulesFive"  style="display:${res.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${res.result.cancelContractCondition||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${res.result.startDate}</p>
									  <p class="rulesEight" style="transform:translateY(60px);">*与上级签订分红契约，全力保障您的代理分红！</p>`,
                            });
                            readLowerContract.showModal($('#alignDialog')[0]);
                        } else {
                            readLowerContract = dialog({
                                id: 'readLowerContract',
                                title: '契约详情',
                                fixed: true,
                                width: Contract.dialogWidth,
                                height: 'auto',
                                align: 'right top',
                                // quickClose: true,
                                content: `
									  <p class="rules">契约状态：<span class="green">${Contract.statusReflect[res.result.status]}</span></p>
									  ${RuleListHtml}
									  <p class="rulesFive"  style="display:${res.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${res.result.cancelContractCondition||''||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${res.result.startDate}</p>
									  <p class="rulesEight">*与上级签订分红契约，全力保障您的代理分红！</p>`,
                            });
                            readLowerContract.showModal($('#alignDialog')[0]);
                        }

                    });
                });
                //修改契约
                $('.dividents .modifyLowerContract').off('click').on('click', function (e) {
                    e.stopPropagation();
                    var $this = $(this);
                    Api.getDetailContract({
                        id: $(this).attr('idval'),
                    }, function (res) {
                        // res == -1 && (window.location.href = window.location.protocol + '//' + window.location.host);

                        let contractRuleList = res.result.contractRuleList;
                        let ruleList;
                        if (contractRuleList.length > 0) {
                            ruleList = contractRuleList.sort((a, b) => {
                                return a.ruleSort - b.ruleSort;
                            }).map(function (item, index) {
                                if (index === 0) {
                                    return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents', item.betMoney)}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople" value="${item.activePeople}">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne" value="${item.lossMoney}"><em>元，分红</em><input name="dvdPerBonus" type="number" min="1" class="dvdPerOne" value="${(item.bonus*100).toFixed(1)}" onblur="value<1?value=1:value"><em>%</em><button class="m0_4 addRuleFirst">+</button></p>`;
                                } else if (index === 4) {
                                    return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents', item.betMoney)}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople" value="${item.activePeople}">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne" value="${item.lossMoney}"><em>元，分红</em><input name="dvdPerBonus" type="number" min="1" class="dvdPerOne" value="${(item.bonus*100).toFixed(1)}" onblur="value<1?value=1:value"><em>%</em><button class="m0_4 reduceRule">-</button></p>`;
                                }
                                return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents', item.betMoney)}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople" value="${item.activePeople}">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne" value="${item.lossMoney}"><em>元，分红</em><input name="dvdPerBonus" type="number" min="1" class="dvdPerOne" value="${(item.bonus*100).toFixed(1)}" onblur="value<1?value=1:value"><em>%</em><button class="m0_4 addRule">+</button><button class="m0_4 reduceRule">-</button></p>`;
                            }).join('');
                        } else {
                            ruleList = `<p class="ruleFlag"><span>契约规则一：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents')}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople" value="${item.activePeople}">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne m0_4"><em>元，分红</em><input name="dvdPerBonus" type="number" min="1" class="dvdPerOne m0_4" onblur="value<1?value=1:value"><em>%</em><button class="m0_4 addRuleFirst">+</button></p>`
                        }

                        var modifyLowerContract = dialog({
                            id: 'modifyLowerContract',
                            skin: 'modifyLower',
                            title: '契约详情',
                            fixed: true,
                            width: Contract.dialogWidth,
                            height: 'auto',
                            align: 'right top',
                            // quickClose: true,
                            button: [{
                                id: "modifyButton",
                                value: '修改契约',
                                callback: function () {
                                    var rules = [];
                                    $('[id="content:modifyLowerContract"] .ruleFlag').each(function (index, item) {
                                        rules.push({
                                            'bet': $(this).find('input[name="betMoney"]').val() * 10000,
                                            'loss': $(this).find('input[name="lostMoney"]').val(),
                                            'bonus': $(this).find('input[name="dvdPerBonus"]').val(),
                                            'activePeople': $(this).find('input[name="activePeople"]').val(),
                                            'sort': index + 1
                                        });
                                    });
                                    if (!$('[id="content:modifyLowerContract"] p.dutyDetail input[type="checkbox"]').prop('checked')) {
                                        dialog({
                                            cancel: true,
                                            content: `<p>需遵循免责声明才能发送契约</p>`,
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 3000);
                                            }
                                        }).showModal();
                                        return false;
                                    }
                                    Api.modifyContract({
                                        edit: JSON.stringify({
                                            contractId: $('[id="content:modifyLowerContract"] p .proxyName').attr('idval'),
                                            startDate: $('[id="content:modifyLowerContract"] p .moneyStartDate').val(),
                                            condition: $('[id="content:modifyLowerContract"] .cancalCondition textarea').val(),
                                            rules: rules
                                        })
                                    }, function (res) {

                                        if (res.code == 1) {
                                            dialog({
                                                content: `<p>修改成功！</p>`,
                                                cancel: true,
                                                onshow: function () {
                                                    setTimeout(() => {
                                                        this.close();
                                                    }, 5000);
                                                }
                                            }).showModal();
                                            me.getLowersContract(currentPage);
                                            $('button[i-id="cancelButton"]').trigger('click');
                                        } else {
                                            dialog({
                                                content: `<p>${res.msg}</p>`,
                                                cancel: true,
                                                onshow: function () {
                                                    setTimeout(() => {
                                                        this.close();
                                                    }, 5000);
                                                }
                                            }).showModal();
                                        }

                                    });
                                    return false;
                                }
                            }, {
                                id: "cancelButton",
                                value: '取消',
                                callback: function () {}
                            }],
                            onshow: function () {
                                var that = this;
                                $('.ui-dialog-footer button[i-id=modifyButton]').css({
                                    'background-color': 'rgba(101, 78, 189, 1)'
                                });
                                $('[id="content:modifyLowerContract"] p .moneyStartDate').datetimepicker({
                                    format: 'Y-m-d',
                                    lang: 'zh',
                                });
                                //规则加减
                                var numToCn = {
                                    0: '一',
                                    1: '二',
                                    2: '三',
                                    3: '四',
                                    4: '五'
                                };
                                var rulesCount = $('p.ruleFlag').length - 1;

                                function addRule() {
                                    $('.modifyLower p.ruleFlag .addRule').off('click').on('click', function () {
                                        $('.modifyLower p.ruleFlag .addRuleFirst').trigger('click');
                                    });
                                }
                                $(document).off('click').on('click', '.modifyLower p.ruleFlag .addRuleFirst', function (e) {
                                    if (rulesCount >= 4) {
                                        return;
                                    }
                                    rulesCount++;
                                    $(this).parents('.ruleFlag').parent('.ruleFlagWrap').append(`<p class="ruleFlag"><span>契约规则${numToCn[rulesCount]}：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents')}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne"><em>元，分红</em><input name="dvdPerBonus" min="1" step="0.1" type="number" class="dvdPerOne" onblur="value<1?value=1:value"><em>%</em><button class="m0_4 addRule" style="display:${rulesCount==4?'none':'inline-block'};">+</button><button class="m0_4 reduceRule">-</button></p>`);

                                    $('.modifyLower p.ruleFlag').each(function (index, item) {
                                        $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                    });
                                    addRule();
                                    $('.modifyLower p.ruleFlag .reduceRule').off('click').on('click', function (e) {
                                        rulesCount == 4 && $(this).parents('.ruleFlag').index() < 4 && $(this).parents('.ruleFlag').siblings('.ruleFlag').last().find('.reduceRule').before(`<button class="m0_4 addRule">+</button>`);
                                        addRule();
                                        $(this).parents('.ruleFlag').remove();
                                        rulesCount--;
                                        $('.modifyLower p.ruleFlag').each(function (index, item) {
                                            $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                        });
                                    });
                                });
                                addRule();
                                $('.modifyLower p.ruleFlag .reduceRule').off('click').on('click', function (e) {
                                    rulesCount == 4 && $(this).parents('.ruleFlag').index() < 4 && $(this).parents('.ruleFlag').siblings('.ruleFlag').last().find('.reduceRule').before(`<button class="m0_4 addRule">+</button>`);
                                    addRule();
                                    $(this).parents('.ruleFlag').remove();
                                    rulesCount--;
                                    $('.modifyLower p.ruleFlag').each(function (index, item) {
                                        $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                    });
                                });
                                $('.dutyDeclare').off('click').on('click', function (e) {
                                    e.stopPropagation();
                                    var dutyDeclare = dialog({
                                        id: 'dutyDeclare',
                                        title: '免责声明',
                                        width: Contract.dialogWidth,
                                        height: 'auto',
                                        align: 'right top',
                                        // quickClose: true,
                                        content: me.dutyDeclareText,
                                        button: [{
                                            id: 'agreeBtn',
                                            value: '同意',
                                            callback: function () {
                                                $('[id="content:modifyLowerContract"] p.dutyDetail input[type="checkbox"]').prop('checked', true);
                                                that.showModal($('#alignDialog')[0]);
                                            }
                                        }, {
                                            id: 'unAgreeBtn',
                                            value: '返回',
                                            callback: function () {
                                                that.showModal($('#alignDialog')[0]);
                                            }
                                        }],
                                        onshow: function () {
                                            $('.ui-dialog-footer button[i-id=agreeBtn]').css({
                                                'background-color': 'rgba(101, 78, 189, 1)'
                                            });
                                        },
                                        onclose: function () {
                                            that.showModal($('#alignDialog')[0]);
                                        },
                                    });
                                    that.close();
                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                });
                            },
                            content: `<p><span>代理用户名：</span><input type="text" class="proxyName" value="${$this.attr('userName')}" idval="${$this.attr('idval')}" disabled></p>
									  <p style="text-indent:26px;"><span>金额起算日期：</span><input type="text" class="moneyStartDate" value="${res.result.startDate}"></p>
									  <div class="ruleFlagWrap">${ruleList}</div>
									  <div class="cancalCondition" style="text-indent:50px;"><span>解约条件：</span><textarea>${res.result.cancelContractCondition||''||''}</textarea></div>
									  <p class="dutyDetail"><input type="checkbox"><em>同意</em><em class="m0_12">请详细阅读</em><em class="dutyDeclare">契约免责声明</em></p>`,
                        });
                        modifyLowerContract.showModal($('#alignDialog')[0]);
                    });
                });
                //取消发送
                $('.dividents .cancelLowerContract').off('click').on('click', function (e) {
                    e.stopPropagation();
                    Api.updateContractStatus({
                        contractId: $(this).attr('idval'),
                        status: 2
                    }, function (statusRes) {
                        // statusRes == -1 && (window.location.href = window.location.protocol + '//' + window.location.host);

                        if (statusRes.code == 1) {
                            dialog({
                                content: `<p style="text-align:center">您已取消发送</p>`,
                                cancel: true,
                                fixed: true,
                                width: '200px',
                                height: '16px',
                                onshow: function () {
                                    setTimeout(() => {
                                        this.close();
                                    }, 5000);
                                }
                            }).showModal();
                            me.getLowersContract(currentPage);
                        } else {
                            dialog({
                                content: `<p style="text-align:center">${statusRes == -1?'服务异常':statusRes.msg}</p>`,
                                cancel: true,
                                fixed: true,
                                width: '200px',
                                height: '16px',
                                onshow: function () {
                                    setTimeout(() => {
                                        this.close();
                                    }, 5000);
                                }
                            }).showModal();
                            me.getLowersContract(currentPage);
                        }

                    });
                });
                //以此为模板进行创建
                $('.dividents .createByThis').off('click').on('click', function (e) {
                    e.stopPropagation();
                    var $this = $(this);
                    Api.getDetailContract({
                        id: $(this).attr('idval'),
                    }, function (res) {
                        // res == -1 && (window.location.href = window.location.protocol + '//' + window.location.host);

                        let contractRuleList = res.result.contractRuleList;
                        let ruleList;
                        if (contractRuleList.length > 0) {
                            ruleList = contractRuleList.sort((a, b) => {
                                return a.ruleSort - b.ruleSort;
                            }).map(function (item, index) {
                                if (index == 0) {
                                    return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents', item.betMoney)}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople" value="${item.activePeople}">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne" value="${item.lossMoney}"><em>元，分红</em><input name="dvdPerBonus" min="1" step="0.1" type="number" onblur="value<1?value=1:value" class="dvdPerOne" value="${(item.bonus*100).toFixed(1)}"><em>%</em><button class="m0_4 addRuleFirst">+</button></p>`;
                                } else if (index == 4) {
                                    return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents', item.betMoney)}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople" value="${item.activePeople}">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne" value="${item.lossMoney}"><em>元，分红</em><input name="dvdPerBonus" min="1" step="0.1" type="number" onblur="value<1?value=1:value" class="dvdPerOne" value="${(item.bonus*100).toFixed(1)}"><em>%</em><button class="m0_4 reduceRule">-</button></p>`;
                                }
                                return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents', item.betMoney)}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople" value="${item.activePeople}">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne" value="${item.lossMoney}"><em>元，分红</em><input name="dvdPerBonus" min="1" step="0.1" type="number" onblur="value<1?value=1:value" class="dvdPerOne" value="${(item.bonus*100).toFixed(1)}"><em>%</em><button class="m0_4 addRule">+</button><button class="m0_4 reduceRule">-</button></p>`;
                            }).join('');
                        } else {
                            ruleList = `<p class="ruleFlag"><span>契约规则一：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents')}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne"><em>元，分红</em><input name="dvdPerBonus" min="1" onblur="value<1?value=1:value" step="0.1" type="number" class="dvdPerOne"><em>%</em><button class="m0_4 addRuleFirst">+</button></p>`
                        }

                        var createByThis = dialog({
                            id: 'createByThis',
                            skin: 'copyLower',
                            title: '契约详情',
                            fixed: true,
                            width: Contract.dialogWidth,
                            height: 'auto',
                            align: 'right top',
                            // quickClose: true,
                            button: [{
                                id: "createButton",
                                value: '创建契约',
                                callback: function () {
                                    if (!$('[id="content:createByThis"] p.dutyDetail input[type="checkbox"]').prop('checked')) {
                                        dialog({
                                            cancel: true,
                                            content: `<p>需遵循免责声明才能发送契约</p>`,
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close()
                                                }, 3000);
                                            }
                                        }).showModal();
                                        return false;
                                    }

                                    var sendContract = function() {
                                        var rules = []; //input[name="betMoney"]
                                        $('[id="content:createByThis"] .ruleFlag').each(function (index, item) {
                                            rules.push({
                                                "bet": $(this).find('input[name="betMoney"]').val() * 10000,
                                                "loss": $(this).find('input[name="lostMoney"]').val(),
                                                "bonus": $(this).find('input[name="dvdPerBonus"]').val(),
                                                'activePeople': $(this).find('input[name="activePeople"]').val(),
                                                "sort": index + 1
                                            });
                                        });
                                        
                                        Api.addContract({
                                            add: JSON.stringify({
                                                useridB: $('[id="content:createByThis"] p .proxyName').val(),
                                                startDate: $('[id="content:createByThis"] p .moneyStartDate').val(),
                                                condition: $('[id="content:createByThis"] .cancalCondition textarea').val(),
                                                rules: rules
                                            })
                                        }, function (res) {

                                            if (res.code == 1) {
                                                dialog({
                                                    content: `<p>创建成功！</p>`,
                                                    cancel: true,
                                                    onshow: function () {
                                                        setTimeout(() => {
                                                            this.close();
                                                        }, 5000);
                                                    }
                                                }).showModal();
                                                me.getLowersContract(currentPage);
                                                $('button[i-id="cancelButton"]').trigger('click');
                                            } else {
                                                dialog({
                                                    content: '<p>' + (/已经签订/.test(res.msg) ? '该下级存在“待签订”的协议，不能再对其发送协议！': res.msg) + '</p>',
                                                    cancel: true,
                                                    onshow: function () {
                                                        setTimeout(() => {
                                                            this.close();
                                                        }, 5000);
                                                    }
                                                }).showModal();
                                            }
                                        });
                                    };

                                    Api.getLowerContract({userName: $('.proxyName').val(), currentPage: 1, pageSize: 10}, 
                                        res => {
                                            var flag = false;
                                            res = res.result.list;
                                            if(res.length === 0) {
                                                sendContract();
                                            } else {
                                                for(let i=0, len=res.length; i<len; i++) {
                                                    if(res[i].status === '0') {
                                                        flag = true;
                                                        break;
                                                    }
                                                }
                                                if(!flag) {
                                                    var repeat = dialog({
                                                        content: `<div>温馨提醒</div>
                                                                  <p>该下级已签订过契约，请确认是否发送契约？<br/>若新契约被签订，原契约将被替换。</p>`,
                                                        button: [{
                                                            id: "sendContract",
                                                            value: '发送契约',
                                                            callback: function() {
                                                                sendContract();
                                                            } 
                                                        }, {
                                                            id: "cancelContract",
                                                            value: '取消',
                                                            callback: function () {}
                                                        }],
                                                        onshow: function() {
                                                            $('.ui-dialog-footer button[i-id=sendContract]').css({
                                                                'background-color': 'rgba(101, 78, 189, 1)'
                                                            });
                                                        }
                                                    }).showModal();
                                                } else {
                                                    flag = false;
                                                    sendContract();
                                                }
                                            }
                                        }
                                    );
                                    
                                    return false;
                                }
                            }, {
                                id: "cancelButton",
                                value: '取消',
                                callback: function () {}
                            }],
                            onshow: function () {
                                var that = this;
                                $('.ui-dialog-footer button[i-id=createButton]').css({
                                    'background-color': 'rgba(101, 78, 189, 1)'
                                });
                                $('[id="content:createByThis"] p .moneyStartDate').datetimepicker({
                                    format: 'Y-m-d',
                                    lang: 'zh',
                                });
                                //规则加减
                                var numToCn = {
                                    0: '一',
                                    1: '二',
                                    2: '三',
                                    3: '四',
                                    4: '五'
                                };
                                var rulesCount = $('p.ruleFlag').length - 1;

                                function addRule() {
                                    $('.copyLower p.ruleFlag .addRule').off('click').on('click', function () {
                                        $('.copyLower p.ruleFlag .addRuleFirst').trigger('click');
                                    });
                                }
                                
                                $('.copyLower p.ruleFlag .addRuleFirst').off('click').on('click', function (e) {
                                    if (rulesCount >= 4) {
                                        return;
                                    }
                                    rulesCount++;
                                    $(this).parents('.ruleFlag').parent('.ruleFlagWrap').append(`<p class="ruleFlag"><span>契约规则${numToCn[rulesCount]}：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents')}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne"><em>元，分红</em><input name="dvdPerBonus" type="number" min="1" step="0.1" class="dvdPerOne" onblur="value<1?value=1:value"><em>%</em><button class="m0_4 addRule" style="display:${rulesCount==4?'none':'inline-block'};">+</button><button class="m0_4 reduceRule">-</button></p>`);

                                    $('.copyLower p.ruleFlag').each(function (index, item) {
                                        $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                    });
                                    addRule();
                                    $('.copyLower p.ruleFlag .reduceRule').off('click').on('click', function (e) {
                                        rulesCount == 4 && $(this).parents('.ruleFlag').index() < 4 && $(this).parents('.ruleFlag').siblings('.ruleFlag').last().find('.reduceRule').before(`<button class="m0_4 addRule">+</button>`);
                                        addRule();
                                        $(this).parents('.ruleFlag').remove();
                                        rulesCount--;
                                        $('.copyLower p.ruleFlag').each(function (index, item) {
                                            $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                        });
                                    });

                                });
                                addRule();
                                $('.copyLower p.ruleFlag .reduceRule').off('click').on('click', function (e) {
                                    rulesCount == 4 && $(this).parents('.ruleFlag').index() < 4 && $(this).parents('.ruleFlag').siblings('.ruleFlag').last().find('.reduceRule').before(`<button class="m0_4 addRule">+</button>`);
                                    addRule();
                                    $(this).parents('.ruleFlag').remove();
                                    rulesCount--;
                                    $('.copyLower p.ruleFlag').each(function (index, item) {
                                        $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                    });
                                });
                                $('.dutyDeclare').off('click').on('click', function (e) {
                                    e.stopPropagation();
                                    var dutyDeclare = dialog({
                                        id: 'dutyDeclare',
                                        title: '免责声明',
                                        width: Contract.dialogWidth,
                                        height: 'auto',
                                        align: 'right top',
                                        // quickClose: true,
                                        content: me.dutyDeclareText,
                                        button: [{
                                            id: 'agreeBtn',
                                            value: '同意',
                                            callback: function () {
                                                $('[id="content:createByThis"] p.dutyDetail input[type="checkbox"]').prop('checked', true);
                                                that.showModal($('#alignDialog')[0]);
                                            }
                                        }, {
                                            id: 'unAgreeBtn',
                                            value: '返回',
                                            callback: function () {
                                                that.showModal($('#alignDialog')[0]);
                                            }
                                        }],
                                        onshow: function () {
                                            $('.ui-dialog-footer button[i-id=agreeBtn]').css({
                                                'background-color': 'rgba(101, 78, 189, 1)'
                                            });
                                        },
                                        onclose: function () {
                                            that.showModal($('#alignDialog')[0]);
                                        },
                                    });
                                    that.close();
                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                });
                            },
                            content: `<p><span>代理用户名：</span><input type="text" class="proxyName" value="${$this.attr('userName')}" idval="${$this.attr('idval')}"></p>
									  <p style="text-indent:26px;"><span>金额起算日期：</span><input type="text" class="moneyStartDate" value="${res.result.startDate}"></p>
									  <div class="ruleFlagWrap">${ruleList}</div>
									  <div class="cancalCondition" style="text-indent:50px;"><span>解约条件：</span><textarea>${res.result.cancelContractCondition||''}</textarea></div>
									  <p class="dutyDetail"><input type="checkbox"><em>同意</em><em class="m0_12">请详细阅读</em><em class="dutyDeclare">契约免责声明</em></p>`,
                        });
                        createByThis.showModal($('#alignDialog')[0]);
                    });
                });
                //分页
                var pageHtml = Q.showPagination(currentPage || 1, res.result.pageSize, null, res.result.totalPage);
                if (res.result.list.length == 0) {
                    $('.dividents .item[name="lowersContract"] div.pager').html('<p>暂无数据!</p>');
                } else {
                    $('.dividents .item[name="lowersContract"] div.pager').html(pageHtml);
                }
                $('.dividents .item[name="lowersContract"] div.pager a').off('click').on('click', function (e) {
                    var currPage = $(this).attr('page');
                    me.getLowersContract(currPage);
                });
            });
        });
        $('.item[name="lowersContract"] .lctQuery .lctButton').off('click').trigger('click');
        //创建契约分红
        $('.dividents .lctQuery .lctCreateButton').off('click').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            var lctCreateButton = dialog({
                id: 'lctCreateButton',
                skin: 'createLower',
                title: '签订契约',
                width: Contract.dialogWidth,
                height: 'auto',
                align: 'right top',
                // quickClose: true,
                content: `<p><span>代理用户名：</span><input type="text" class="proxyName"></p>
						  <p style="text-indent:26px;"><span>金额起算日期：</span><input type="text" class="moneyStartDate"></p>
						  <div class="ruleFlagWrap"><p class="ruleFlag"><span>契约规则一：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents')}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne"><em>元，分红</em><input name="dvdPerBonus" type="number" min="1" step="0.1" class="dvdPerOne" onblur="value<1?value=1:value"><em>%</em><button class="m0_4 addRuleFirst">+</button></p></div>
						  <div class="cancalCondition" style="text-indent:50px;"><span>解约条件：</span><textarea rows="" cols=""></textarea></div>
						  <p class="dutyDetail"><input type="checkbox"><em>同意</em><em class="m0_12">请详细阅读</em><em class="dutyDeclare">契约免责声明</em></p>`,
                button: [{
                    id: "sendContract",
                    value: '发送契约',
                    callback: function () {
                        if (!$('[id="content:lctCreateButton"] p.dutyDetail input[type="checkbox"]').prop('checked')) {
                            dialog({
                                cancel: true,
                                content: `<p>需遵循免责声明才能发送契约</p>`,
                                onshow: function () {
                                    setTimeout(() => {
                                        this.close();
                                    }, 3000);
                                }
                            }).showModal();
                            return false;
                        }
                        var sendContract = function() {
                            var rules = []; //input[name="betMoney"]
                            $('[id="content:lctCreateButton"] .ruleFlag').each(function (index, item) {
                                rules.push({
                                    "bet": $(this).find('input[name="betMoney"]').val() * 10000,
                                    "loss": $(this).find('input[name="lostMoney"]').val(),
                                    "bonus": $(this).find('input[name="dvdPerBonus"]').val(),
                                    'activePeople': $(this).find('input[name="activePeople"]').val(),
                                    "sort": index + 1
                                });
                            });
                            Api.addContract({
                                add: JSON.stringify({
                                    useridB: $('[id="content:lctCreateButton"] p .proxyName').val(),
                                    startDate: $('[id="content:lctCreateButton"] p .moneyStartDate').val(),
                                    condition: $('[id="content:lctCreateButton"] .cancalCondition textarea').val(),
                                    rules: rules
                                })
                                }, function (res) {
                                    // res == -1 && (window.location.href = window.location.protocol + '//' + window.location.host);

                                    if (res.code == 1) {
                                        dialog({
                                            content: `<p>创建成功!</p>`,
                                            cancel: true,
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 5000);
                                            }
                                        }).showModal();
                                        me.getLowersContract(currentPage);
                                        $('button[i-id="cancelContract"]').trigger('click');
                                    } else {
                                        dialog({
                                            content: '<p>' + (/已经签订/.test(res.msg) ? '该下级存在“待签订”的协议，不能再对其发送协议！': res.msg) + '</p>',
                                            cancel: true,
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 5000);
                                            }
                                        }).showModal();
                                    }

                                });
                            };
                        Api.getLowerContract({userName: $('.proxyName').val(), currentPage: 1, pageSize: 10}, 
                            res => {
                                var flag = false;
                                res = res.result.list;
                                if(res.length === 0) {
                                    sendContract();
                                } else {
                                    for(let i=0, len=res.length; i<len; i++) {
                                        if(res[i].status === '0') {
                                            flag = true;
                                            break;
                                        }
                                    }
                                    if(!flag) {
                                        var repeat = dialog({
                                            content: `<div>温馨提醒</div>
                                                      <p>该下级已签订过契约，请确认是否发送契约？<br/>若新契约被签订，原契约将被替换。</p>`,
                                            button: [{
                                                id: "sendContract",
                                                value: '发送契约',
                                                callback: function() {
                                                    sendContract();
                                                } 
                                            }, {
                                                id: "cancelContract",
                                                value: '取消',
                                                callback: function () {}
                                            }],
                                            onshow: function() {
                                                $('.ui-dialog-footer button[i-id=sendContract]').css({
                                                    'background-color': 'rgba(101, 78, 189, 1)'
                                                });
                                            }
                                        }).showModal();
                                    } else {
                                        flag = false;
                                        sendContract();
                                    }
                                }
                            }
                        );

                        return false;
                    }
                }, {
                    id: "cancelContract",
                    value: '取消',
                    callback: function () {}
                }],
                onshow: function () {
                    var that = this;
                    $('.ui-dialog-footer button[i-id=sendContract]').css({
                        'background-color': 'rgba(101, 78, 189, 1)'
                    });
                    $('[id="content:lctCreateButton"] p .moneyStartDate').datetimepicker({
                        format: 'Y-m-d',
                        lang: 'zh',
                        minDate: new Date(me.minLowerStartDate || '2016-06-06'),
                    });
                    //免责声明显示
                    $('.dutyDeclare').off('click').on('click', function (e) {
                        e.stopPropagation();
                        var dutyDeclare = dialog({
                            id: 'dutyDeclare',
                            title: '免责声明',
                            width: Contract.dialogWidth,
                            height: 'auto',
                            align: 'right top',
                            // quickClose: true,
                            content: me.dutyDeclareText,
                            button: [{
                                id: 'agreeBtn',
                                value: '同意',
                                callback: function () {
                                    $('[id="content:lctCreateButton"] p.dutyDetail input[type="checkbox"]').prop('checked', true);
                                    that.showModal();
                                }
                            }, {
                                id: 'unAgreeBtn',
                                value: '返回',
                                callback: function () {
                                    that.showModal();
                                }
                            }],
                            onshow: function () {
                                $('.ui-dialog-footer button[i-id=agreeBtn]').css({
                                    'background-color': 'rgba(101, 78, 189, 1)'
                                });
                            },
                            onclose: function () {
                                that.showModal();
                            },
                        });
                        that.close();
                        dutyDeclare.showModal($('#alignDialog')[0]);
                        $('.dutyBack').off('click').on('click', function (e) {
                            e.stopPropagation();
                            dutyDeclare.close();
                            that.showModal($('#alignDialog')[0]);
                        });
                    });
                    //规则加减
                    var numToCn = {
                        0: '一',
                        1: '二',
                        2: '三',
                        3: '四',
                        4: '五'
                    };
                    var rulesCount = 0;

                    function addRule() {
                        $('.createLower p.ruleFlag .addRule').off('click').on('click', function () {
                            $('.createLower p.ruleFlag .addRuleFirst').trigger('click');
                        });
                    }
                    $('.createLower p.ruleFlag .addRuleFirst').off('click').on('click', function (e) {
                        if (rulesCount >= 4) {
                            return;
                        }
                        rulesCount++;
                        $(this).parents('.ruleFlag').parent('.ruleFlagWrap').append(`<p class="ruleFlag"><span>契约规则${numToCn[rulesCount]}：</span><span>日均投注额</span><em class="m0_4">≥</em>${me.betMoneyHtml('dividents')}<em>万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople">，且半月亏损<em class="m0_4">≥</em><input type="number" min="0" name="lostMoney" class="lostMoneyOne"><em>元，分红</em><input name="dvdPerBonus" type="number" min="1" step="0.1" class="dvdPerOne" onblur="value<1?value=1:value"><em>%</em><button class="m0_4 addRule" style="display:${rulesCount==4?'none':'inline-block'};">+</button><button class="m0_4 reduceRule">-</button></p>`);
                        addRule();
                        $('.createLower p.ruleFlag').each(function (index, item) {
                            $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                        });
                        $('.createLower p.ruleFlag .reduceRule').off('click').on('click', function (e) {
                            rulesCount == 4 && $(this).parents('.ruleFlag').index() < 4 && $(this).parents('.ruleFlag').siblings('.ruleFlag').last().find('.reduceRule').before(`<button class="m0_4 addRule">+</button>`);
                            addRule(); //新加元素重新注册点击事件
                            $(this).parents('.ruleFlag').remove();
                            rulesCount--;
                            $('.createLower p.ruleFlag').each(function (index, item) {
                                $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                            });
                        });
                    });
                },
            });
            lctCreateButton.showModal($('#alignDialog')[0]);
        });
    },
    getLowerDevidents: function (currentPage, sortName = 'bonusCycTitle', sortType = 'desc') {
        var me = this;

        me.initDividentEvent();
        // me.getAgentPointInfo(1);

        var tab = $('.panel-tab.dividents');
        var ulData = tab.find('.item[name="lowerDevidents"] ul.data');
        var liHtml = '';
        $('.dividents .item[name="lowerDevidents"] .queryLowerArea_six').off('click').on('click', function (e) {
            Api.getLowerBonusCycList({
                bonusCycTitle: $('.dividents .item[name="lowerDevidents"] .queryLowerArea_three').val(),
                actionStatusDetail: $('.dividents .item[name="lowerDevidents"] .queryLowerArea_five').val(),
                userName: $('.dividents .item[name="lowerDevidents"] .lowerDvdInputName').val(),
                currPage: currentPage,
                pageSize: 10,
                sortName: sortName,
                sortType: sortType,
            }, function (res) {
                if (res.status == 404) {
                    return;
                }
                if (res.code == 1) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close();
                            }, 3000);
                        }
                    }).showModal();
                    return;
                }
                if (res.code == 1001) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close();
                            }, 3000);
                        }
                    }).showModal();
                    return;
                }
                var list = res.result.list || [];

                function renderHtml() {
                    if (list.length !== 0) {
                        liHtml = list.map((item, index) => {
                            if (item.actionStatusDetail == 0) {
                                return `<li><span><input type="checkbox" idval="${item.id}"></span><span rel="lowerUserName">${item.lowerUserName}</span><span rel="bonusCycTitle">${item.bonusCycTitle}</span><span rel="betAmount">${item.betAmount}</span><span rel="activePeople">${item.activeUserCount}</span><span rel="profitLossCount">${item.profitLossCount}</span><span class="bonusRatio" rel="bonusRatio">${item.bonusRatio==0?'---':`${(item.bonusRatio*100).toFixed(2)}%`}</span><span rel="bonusAmount" class="bonusAmount" bonusRatio="${item.bonusRatio}" tip="${item.computeDetailInfo}" contractNo="${item.agreementNo}">${item.bonusAmount}</span><span rel="dvdLowerStatus">${Contract.dvdLowerStatus[item.actionStatusDetail]}</span><span rel="dvdLowerManipulate"><em class="sendLowerDvd" idval="${item.id}">${item.bonusAmount?Contract.dvdLowerStatusMani[item.actionStatusDetail]:'--'}</em></span></li>`;
                            }
                            return `<li><span><input type="checkbox" disabled idval="${item.id}"></span><span rel="lowerUserName">${item.lowerUserName}</span><span rel="bonusCycTitle">${item.bonusCycTitle}</span><span rel="betAmount">${item.betAmount}</span><span rel="activePeople">${item.activeUserCount}</span><span rel="profitLossCount">${item.profitLossCount}</span><span rel="bonusRatio" class="bonusRatio">${item.bonusRatio==0?'---':`${(item.bonusRatio*100).toFixed(2)}%`}</span><span rel="bonusAmount" class="bonusAmount" bonusRatio="${item.bonusRatio}" tip="${item.computeDetailInfo}" contractNo="${item.agreementNo}">${item.bonusAmount}</span><span rel="dvdLowerStatus">${Contract.dvdLowerStatus[item.actionStatusDetail]}</span><span rel="dvdLowerManipulate"><em idval="${item.id}">${item.bonusAmount?Contract.dvdLowerStatusMani[item.actionStatusDetail]:'--'}</em></span></li>`;
                        }).join('') + `<li><span class="select-reverse textLeft "><em class="selectAll">全&nbsp;&nbsp;选</em><em class="reverseSelect">反&nbsp;&nbsp;选</em></span><span class="batchSendWrap"><em class="batchSendLowerDvd">批量发放分红</em></span></li>`;
                    } else {
                        liHtml = '';
                    }
                    ulData.html(liHtml);
                }
                renderHtml();
                $('.dividents .item[name="lowerDevidents"] .dvdLowerResult .receivedDvdLower').text(res.result.bonusedAmount);
                $('.dividents .item[name="lowerDevidents"] .dvdLowerResult .frozenMoneyLower').text(res.result.freezeAmount);

                //排序
                $('#admin_report > div.panel-tab.dividents > div:nth-child(4) > div.list > ul.head > li > span.ldd').off('click').on('click', function () {
                    if ($(this).find('span.up').hasClass('on')) {
                        localStorage.setItem('sortType', 'desc');
                        $(this).find('span.up').removeClass('on');
                        $(this).find('span.down').addClass('on');
                    } else if ($(this).find('span.down').hasClass('on')) {
                        localStorage.setItem('sortType', 'asc');
                        $(this).find('span.down').removeClass('on');
                        $(this).find('span.up').addClass('on');
                    } else {
                        localStorage.setItem('sortType', 'desc');
                        $(this).find('span.up').removeClass('on');
                        $(this).find('span.down').addClass('on');
                    }
                    $(this).siblings().find('span.on').removeClass('on');

                    switch ($(this).attr('rel')) {
                        case 'bonusCycTitle':
                            localStorage.setItem('sortName', 'bonusCycTitle');
                            me.getLowerDevidents(currentPage, 'bonusCycTitle', localStorage.getItem('sortType'));
                            break;
                        case 'betAmount':
                            localStorage.setItem('sortName', 'betAmount');
                            me.getLowerDevidents(currentPage, 'betAmount', localStorage.getItem('sortType'));
                            break;
                        case 'profitLossCount':
                            localStorage.setItem('sortName', 'profitLossCount');
                            me.getLowerDevidents(currentPage, 'profitLossCount', localStorage.getItem('sortType'));
                            break;
                        case 'bonusRatio':
                            localStorage.setItem('sortName', 'bonusRatio');
                            me.getLowerDevidents(currentPage, 'bonusRatio', localStorage.getItem('sortType'));
                            break;
                        case 'bonusAmount':
                            localStorage.setItem('sortName', 'bonusAmount');
                            me.getLowerDevidents(currentPage, 'bonusAmount', localStorage.getItem('sortType'));
                            break;
                        case 'activePeople':
                            localStorage.setItem('sortName', 'activeUserCount');
                            me.getLowerDevidents(currentPage, 'activeUserCount', localStorage.getItem('sortType'));
                            break;
                        default:
                            break;
                    }

                    selectAll();
                    fanSelect();
                    sendLowerDvd();
                    batchSendLowerDvd();
                    bonusAmountPop();
                    bonusRatioPop();
                });
                //全选
                function selectAll() {
                    $('.item[name="lowerDevidents"] .listhead input[type="checkbox"]').on('change', function (e) {
                        if ($(this).prop('checked')) {
                            $('.item[name="lowerDevidents"] .data input[type="checkbox"]').not(':disabled').each(function (index, item) {

                                $(this).prop('checked', true);

                            });
                        } else {
                            $('.item[name="lowerDevidents"] .data input[type="checkbox"]').not(':disabled').each(function (index, item) {

                                $(this).prop('checked', false);

                            });
                        }
                    });
                    $('.item[name="lowerDevidents"] .selectAll').off('click').on('click', function (event) {
                        event.stopPropagation();
                        $('.item[name="lowerDevidents"] input[type="checkbox"]').not(':disabled').each(function (index, item) {

                            $(this).prop('checked', true);

                        });
                    });
                }
                selectAll();
                //反选
                function fanSelect() {
                    $('.item[name="lowerDevidents"] .reverseSelect').off('click').on('click', function (event) {
                        event.stopPropagation();
                        $('.item[name="lowerDevidents"] .data input[type="checkbox"]').not(':disabled').each(function (index, item) {
                            $('.item[name="lowerDevidents"] .listhead input[type="checkbox"]').prop("checked", false);

                            if ($(this).is(':checked')) {
                                $(this).prop('checked', false);
                            } else {
                                $(this).prop('checked', true);
                            }

                        });
                    });
                }
                fanSelect();
                //发放分红弹窗
                function sendLowerDvd() {
                    $('.sendLowerDvd').off('click').on('click', function (e) {
                        var $this = $(this);
                        e.stopPropagation();
                        Api.releaseBonusById({
                            id: $(this).attr('idval')
                        }, function (res) {
                            if (res.code == -2) {
                                var sendLowerDvdFail = dialog({
                                    id: 'sendLowerDvdFail',
                                    title: '余额不足',
                                    content: '<p>对不起，您的余额不足，为保证您可以顺利的为下级发放分红建议您充值后再进行发放。</p>',
                                    button: [{
                                        value: '立即充值',
                                        callback: function () {
                                            window.location.href = window.location.protocol + "//" + window.location.host + '/static/sobet/transaction-center.html#recharge';
                                        }
                                    }]
                                }).showModal();
                                $this.parent().parent('li').find('input[type="checkbox"]').prop('checked', false); //恢复未选中状态
                            } else if (res.code == 1) {
                                var sendLowerDvdSuc = dialog({
                                    id: 'sendLowerDvdSuc',
                                    content: '<p>发送成功</p>',
                                    onshow: function () {
                                        setTimeout(() => {
                                            this.close();
                                        }, 2000);
                                    }
                                }).showModal();
                                $this.parent().parent('li').find('input[type="checkbox"]').prop('checked', false); //恢复未选中状态
                                $this.parent().parent('li').find('input[type="checkbox"]').prop('disabled', true); //发送成功后不能再选，防止多选时被选到
                                me.getLowerDevidents(currentPage);
                                me.getAgentPointInfo(1);
                            } else {
                                var sendLowerDvd = dialog({
                                    id: 'sendLowerDvd',
                                    content: `<p>${res.msg}</p>`,
                                    onshow: function () {
                                        setTimeout(() => {
                                            this.close();
                                        }, 2000);
                                    }
                                }).showModal();
                                $this.parent().parent('li').find('input[type="checkbox"]').prop('checked', false); //恢复未选中状态
                            }
                        });
                    });
                }
                sendLowerDvd();
                //批量发送
                function batchSendLowerDvd() {
                    $('.batchSendLowerDvd').off('click').on('click', function (e) {
                        var batchIds = [];
                        $('.item[name="lowerDevidents"] .data input[type="checkbox"]').each(function (index, item) {
                            if ($(this).prop('checked')) {
                                batchIds.push($(this).attr('idval'));
                            }
                            return;
                        });
                        if (batchIds.length == 0) {
                            dialog({
                                content: '<p>请选择要发送的分红选项</p>',
                                onshow: function () {
                                    setTimeout(() => {
                                        this.close();
                                    }, 3000);
                                }
                            }).showModal();
                            return;
                        }
                        Api.batchReleaseBonusById({
                            ids: batchIds.join(',')
                        }, function (res) {
                            if (res.code == -2) {
                                var batchSendLowerDvdFail = dialog({
                                    id: 'batchSendLowerDvdFail',
                                    title: '余额不足',
                                    content: '<p>对不起，您的余额不足，为保证您可以顺利的为下级发放分红建议您充值后再进行发放。</p>',
                                    button: [{
                                        value: '立即充值',
                                        callback: function () {
                                            window.location.href = window.location.protocol + "//" + window.location.host + '/static/sobet/transaction-center.html#recharge';
                                        }
                                    }]
                                }).showModal();
                            } else if (res.code == 1) {
                                var batchSendLowerDvdSuc = dialog({
                                    id: 'batchSendLowerDvdSuc',
                                    content: '<p>发送成功</p>',
                                    onshow: function () {
                                        setTimeout(() => {
                                            this.close();
                                        }, 2000);
                                    }
                                }).showModal();
                                me.getAgentPointInfo(1);
                                me.getLowerDevidents(currentPage);
                            } else {
                                var batchSendLowerDvd = dialog({
                                    id: 'batchSendLowerDvd',
                                    content: `<p>${res.msg}</p>`,
                                    onshow: function () {
                                        setTimeout(() => {
                                            this.close();
                                        }, 2000);
                                    }
                                }).showModal();
                            }
                        });
                    });
                }
                batchSendLowerDvd();
                //点击分红金额弹窗分红公式
                function bonusAmountPop() {
                    $('.bonusAmount').off('click').on('click', function (e) {
                        var $this = $(this);
                        dialog({
                            quickClose: true,
                            align: 'left top',
                            content: `<p>${$this.attr('tip')}</p>
                        <p>计算公式：在满足协议规则条件下：分红金额=（投注-中奖-返点-代理活动-会员活动）*分红比例.</p>
                        <p><span>根据签约协议的规则，您当前的分红比例为${$this.attr('bonusRatio')*100}%</span><span class="readContract fr">查看分红契约</span></p>`,
                            onshow: function () {
                                $('.ui-dialog-body').css({
                                    'border': '#f2ea91 solid 2px',
                                    'background': '#fef6e1',
                                });
                                $('.readContract').css({
                                    color: '#01b0ff',
                                    cursor: 'pointer'
                                });
                                $('.readContract:hover').css({
                                    'text-decoration': 'underline'
                                });
                                $('.readContract').on('click', function (e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    Api.getDetailContract({
                                        contractNo: $this.attr('contractNo')
                                    }, function (response) {
                                        if (response.code == '1001') {
                                            dialog({
                                                content: `<p>${response.msg}</p>`,
                                                onshow: function () {
                                                    setTimeout(() => {
                                                        this.close();
                                                    }, 5000);
                                                }
                                            }).showModal();
                                            return;
                                        }
                                        let contractRuleList = response.result.contractRuleList;
                                        let specialRuleHtml = contractRuleList.filter(item => item.ruleSort == 0).map((item, index) => {
                                            return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople" value="${item.activePeople}">，且半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                                        }).join('');
                                        let RuleListHtml = contractRuleList.filter(item => item.ruleSort != 0).sort((a, b) => {
                                            return a.ruleSort - b.ruleSort;
                                        }).map((item, index) => {
                                            return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日均投注额：≥&nbsp;${item.betMoney/10000}万元，周期内活跃人数<em class="m0_4">≥</em><input type="number" min="1" max="10000" name="activePeople" class="activePeople" value="${item.activePeople}">，且半月亏损额：≥&nbsp;${item.lossMoney}元，分红：${(item.bonus*100).toFixed(1)}%</p>`;
                                        }).join('');
                                        var showContract = dialog({
                                            id: 'showContract',
                                            fixed: true,
                                            title: '契约签订',
                                            width: Contract.dialogWidth,
                                            align: 'right top',
                                            // quickClose: true,
                                            height: 'auto',
                                            content: `
                                                <table class="m0_auto textCenter"><tbody> 
                                                <tr><td>协议签订日期</td><td>${response.result.contractDate?new Date(response.result.contractDate).Format('YYYY-MM-DD'):'未签订'}</td><td>金额起算日期</td><td>${response.result.startDate}</td></tr></tbody></table>
                                                <p class="rules">契约状态：<span class="green">${Contract.statusReflect[response.result.status]}</span></p>
                                                ${RuleListHtml}
                                                ${specialRuleHtml}
                                                <p class="rulesFive" style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''}</span></p>
                                                <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
                                                <p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
                                                <p class="rulesEight">*与上级签订分红契约，全力保障您的代理分红！</p>`,
                                            onshow: function () {
                                                var that = this;
                                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                                    'background-color': 'rgba(115,123,248,1)'
                                                });

                                                $('.ui-dialog-content .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                                    e.stopPropagation();
                                                    var dutyDeclare = dialog({
                                                        id: 'dutyDeclare',
                                                        title: '免责声明',
                                                        width: Contract.dialogWidth,
                                                        height: 'auto',
                                                        align: 'right top',
                                                        cancel: function () {
                                                            that.showModal($('#alignDialog')[0]);
                                                        },
                                                        // quickClose: true,
                                                        content: me.dutyDeclareText,
                                                    });
                                                    that.close();
                                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                                });
                                            },
                                        });
                                        showContract.showModal($('#alignDialog')[0]);
                                    });

                                });
                            }
                        }).show($(this)[0]);
                    });
                }
                bonusAmountPop();
                //点击分红比例显示分红比例
                function bonusRatioPop() {
                    $('.bonusRatio').off('click').on('click', function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        dialog({
                            quickClose: true,
                            content: `<p>根据签约协议的规则，您当前的分红比例为${$(this).text()}</p>`,
                            onshow: function () {
                                $('.ui-dialog-body').css({
                                    'border': '#f2ea91 solid 2px',
                                    'background': '#fef6e1',
                                });
                            }
                        }).show($(this)[0]);

                    });
                }
                bonusRatioPop();
                //分页pageSize
                var pageHtml = Q.showPagination(currentPage || 1, res.page.pageSize, null, res.page.totalPage);
                if (res.result.list.length == 0) {
                    $('.dividents .item[name="lowerDevidents"] div.pager').html('<p>暂无数据!</p>');
                } else {
                    $('.dividents .item[name="lowerDevidents"] div.pager').html(pageHtml);
                }
                $('.dividents .item[name="lowerDevidents"] div.pager a').off('click').on('click', function (e) {
                    var currPage = $(this).attr('page');
                    me.getLowerDevidents(currPage, localStorage.getItem('sortName'), localStorage.getItem('sortType'));

                });
            });
        });
        $('.dividents .item[name="lowerDevidents"] .queryLowerArea_six').trigger('click');

    },
    getMyDayContract: function (currentPage) {
        var me = this;
        var tab = $('.panel-tab.daySalary');
        var ulData = tab.find('.item[name="myDayContract"] ul.data');
        var liHtml = '';
        me.alignDialog();
        var contractsWrap = $('.daySalary .item[name="myDayContract"] .contractsWrap');
        $('#admin_report > div.panel-tab.daySalary > div:nth-child(1) > div.list > ul.head > li.listhead').hide();
        //最近两期契约
        Api.getDayRecentTwoContract({
            currPage: currentPage,
            pageSize: 6
        }, function (res) {
            var rulesContentOne = '';
            var rulesContentTwo = '';
            if (res.result.list.length == 0) {
                return;
            }
            if (res.code == 1001) {
                dialog({
                    content: `<p>${res.msg}</p>`,
                    onshow: function () {
                        setTimeout(() => {
                            this.close();
                        }, 3000);
                    }
                }).showModal();
                return;
            }
            //platform是否平台直签（0平台，1代理）
            me.platform = res.result.list[0]['platform'];
            me.ruleType = res.result.list[0]['ruleType'];
            //我的最高日工资分红比例
            let signedItem = res.result.list.find(item => item.status === "1"); //是否签订flag
            let signedRatioItem = res.result.list.find(item => item.status === "1" && item.ruleType === 2); //比例模式
            let signedBonusItem = res.result.list.find(item => item.status === "1" && item.ruleType === 1); //整额模式
            if (signedRatioItem) {
                me.myMaxDayRatio = Math.max(...signedRatioItem.contractRuleList.map(item => item.bonus));
                me.myMaxBonus = Math.max(...signedRatioItem.contractRuleList.map(item => item.bonus)) * 10000;
            } else if (signedBonusItem) {
                const Salary = Math.max(...signedBonusItem.contractRuleList.map(item => item.daySalary));
                const maxDaySalary =  Salary >= 10 ? Salary : 10;
                me.myMaxDayRatio = Math.floor(maxDaySalary / 10) / 1000;
                me.myMaxBonus = Math.max(...signedBonusItem.contractRuleList.map(item => item.daySalary));
            } else{
                me.myMaxDayRatio = 0.013;
                me.myMaxBonus = 130;
            }
            //下级契约默认开始日期
            me.lowerDayContractStartDate = Math.min(...(res.result.list.map((item, index) => {
                return (new Date(item.createTime)).getTime();
            })));
            //创建下级契约的金额起算日期必须大于等于上级代理的金额起算日期
            me.minLowerDayStartDate = res.result.list.filter((item, index) => item.status == 1)[0] ? res.result.list.filter((item, index) => item.status == 1)[0].startDate : '2016-01-01';
            var contractsWrapContent = res.result.list.map((item, index) => {
                let ruleType = item.ruleType;
                let rulesContent = item.contractRuleList.sort(function (a, b) {
                    return a.ruleSort - b.ruleSort;
                }).slice(0, 2).map((rule, ruleIndex) => {
                    return `<p class="rule ellipsis"><span>契约规则${Contract.numberToCn[rule.ruleSort]}</span><span style="margin-left: 10px;">日投注额：<span>${rule.betMoney}元以上</span><span>活跃人数：<span>${rule.activePeople}人以上</span></span><span>日工资：<span>${ruleType === 1?`${rule.daySalary}元/万`:`${(rule.bonus*100).toFixed(2)}%`}</span></span></p>`;
                }).join('');
                if (item.contractRuleList.length > 2) {
                    rulesContent += '<p>...</p>';
                }
                return `<div class="eachCttWrap clearfix" idval="${item.id}">
                            <div class="contractLeft fl"><img src="${Contract.contractLeftSrc[item.status]}" width="70"></div>
                            <div class="contractRight fr">
                                <div class="rulesTopWrap clearfix">
                                    <span class="fl ruleTitle">日工资契约</span>
                                    <span class="fr ruleDate">金额起算日期：${item.startDate}</span></div>
                                <div class="rulesContentWrap">
                                    ${rulesContent}
                                </div>
                            </div>
                            <div class="linkCttDetail" idval="${item.id}">查看详情</div>
                            <div class="stampSeal"><img src="${Contract.stampSealSrc[item.status]}" height="100"></div>
                        </div>`;
            }).join('');
            //未签订不能创建新契约
            me.canDayCreatContract = res.result.list.some(function (item, index) {
                return item.status == 0;
            });
            contractsWrap.html(contractsWrapContent);
            //点击最近两期契约弹窗契约详情
            $('[name="myDayContract"] .contractsWrap>div').off('click').on('click', function (e) {
                var $this = $(this);
                e.stopPropagation();
                e.preventDefault();
                Api.getDayDetailContract({
                    id: $this.attr('idval')
                }, function (response) {
                    if (response.code === '10001') {
                        dialog({
                            content: `<p>${res.msg}</p>`,
                            onshow: function () {
                                setTimeout(() => {
                                    this.close();
                                }, 5000);
                            }
                        }).showModal();
                        return;
                    }
                    let ruleType = response.result.ruleType;
                    let contractRuleList = response.result.contractRuleList;
                    let specialRuleHtml = contractRuleList.filter(item => item.ruleSort == 0).map((item, index) => {
                        return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;日投注额：≥&nbsp;${item.betMoney}元，且活跃人数：≥&nbsp;${item.activePeople}人，日工资：${ruleType == 1?`${item.daySalary}元/万`:`${(item.bonus*100).toFixed(2)}%`}</p>`;
                    }).join('');
                    let RuleListHtml = contractRuleList.filter(item => item.ruleSort != 0).sort((a, b) => {
                        return a.ruleSort - b.ruleSort;
                    }).map((item, index) => {
                        return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日投注额：≥&nbsp;${item.betMoney}元，且活跃人数：≥&nbsp;${item.activePeople}人，日工资：${ruleType == 1?`${item.daySalary}元/万`:`${(item.bonus*100).toFixed(2)}%`}</p>`;
                    }).join('');

                    //不同状态显示不同契约弹窗
                    var showDayContract;
                    if (response.result.status == 0) {
                        showDayContract = dialog({
                            id: 'showDayContract',
                            fixed: true,
                            title: '契约签订',
                            width: Contract.dayDialogWidth,
                            align: 'right top',
                            height: 'auto',
                            // quickClose: true,
                            content: `<p class="rulesTitle">您的上级：想与您签订契约日工资协议</p>
									  <p class="rules">日工资契约规则如下：</p>
									  ${RuleListHtml}
                                      ${specialRuleHtml}
									  <p class="rulesFive" style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
									  <p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
									  <p class="rulesEight">*与上级签订日工资契约，全力保障您的代理日工资！</p>`,
                            button: [{
                                id: 'ruleBtnOne',
                                value: '接受契约',
                                callback: function () {
                                    Api.updateDayContractStatus({
                                        contractId: response.result.id,
                                        status: 1
                                    }, function (res) {
                                        dialog({
                                            content: `<p style="text-align:center">您已接受契约</p>`,
                                            cancel: true,
                                            fixed: true,
                                            width: '200px',
                                            height: '16px',
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 5000);
                                            }
                                        }).showModal();
                                        me.getMyDayContract(currentPage);
                                    });
                                }
                            }, {
                                id: 'ruleBtnTwo',
                                value: '拒绝契约',
                                callback: function () {
                                    Api.updateDayContractStatus({
                                        contractId: response.result.id,
                                        status: 5
                                    }, function (res) {
                                        dialog({
                                            content: `<p>您已拒绝契约</p>`,
                                            cancel: true,
                                            fixed: true,
                                            width: '200px',
                                            height: '16px',
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 5000);
                                            }
                                        }).showModal();
                                        me.getMyDayContract(currentPage);
                                    });
                                }
                            }],
                            onshow: function () {
                                var that = this;
                                $('[i-id="cancel"]').hide();
                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                    'background-color': 'rgba(115,123,248,1)'
                                });

                                $('[id="content:showDayContract"] .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                    e.stopPropagation();
                                    var dutyDeclare = dialog({
                                        id: 'dutyDeclare',
                                        title: '免责声明',
                                        width: Contract.dayDialogWidth,
                                        height: 'auto',
                                        align: 'right top',
                                        // quickClose: true,
                                        content: me.dutyDayDeclareText(),
                                        cancel: function () {
                                            that.showModal($('#alignDialog')[0]);
                                        },
                                        onshow: function () {
                                            $('[i-id="cancel"]').show();
                                        }
                                    });
                                    that.close();
                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                });
                            },
                        });
                        showDayContract.showModal($('#alignDialog')[0]);
                    } else {
                        showDayContract = dialog({
                            id: 'showDayContract',
                            fixed: true,
                            title: '契约签订',
                            align: 'right top',
                            width: Contract.dayDialogWidth,
                            height: 'auto',
                            // quickClose: true,
                            content: `
                                      <table class="m0_auto textCenter"><tbody>
                                      <tr><td>协议签订日期</td><td>${response.result.contractDate?new Date(response.result.contractDate).Format('YYYY-MM-DD'):'未签订'}</td><td>金额起算日期</td><td>${response.result.startDate}</td></tr></tbody></table>
									  <p class="rules">契约状态：<span class="green">${Contract.statusReflect[response.result.status]}</span></p>
									  ${RuleListHtml}
                                      ${specialRuleHtml}
									  <p class="rulesFive" style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
									  <p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
									  <p class="rulesEight">*与上级签订日工资契约，全力保障您的代理日工资！</p>`,
                            onshow: function () {
                                var that = this;
                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                    'background-color': 'rgba(115,123,248,1)'
                                });

                                $('[id="content:showDayContract"] .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                    e.stopPropagation();
                                    var dutyDeclare = dialog({
                                        id: 'dutyDeclare',
                                        title: '免责声明',
                                        align: 'right top',
                                        width: Contract.dayDialogWidth,
                                        height: 'auto',
                                        // quickClose: true,
                                        cancel: function () {
                                            that.showModal($('#alignDialog')[0]);
                                        },
                                        content: me.dutyDayDeclareText(),
                                    });
                                    that.close();
                                    dutyDeclare.showModal($('#alignDialog')[0]);
                                });
                            },
                            onclose() {
                                this.remove();
                            }
                        });
                        showDayContract.showModal($('#alignDialog')[0]);
                    }
                });
            });

            //分页
            var pageHtml = Q.showPagination(currentPage || 1, res.result.pageSize, null, res.result.totalPage);
            if (res.result.list.length == 0) {
                $('.daySalary .item[name="myDayContract"] div.pager').html('<p>暂无数据!</p>');
            } else {
                $('.daySalary .item[name="myDayContract"] div.pager').html(pageHtml);
            }
            $('.daySalary .item[name="myDayContract"] div.pager a').off('click').on('click', function (e) {
                var currPage = $(this).attr('page');
                me.getMyDayContract(currPage);
            });
        });
    },
    getMyDayDevident: function (currentPage, sortName = 'date', sortType = 'desc') {
        var me = this;
        me.initDividentEvent();
        var tab = $('.panel-tab.daySalary');
        var ulData = tab.find('.item[name="myDayDevident"] ul.data');
        var liHtml = '';
        $('.item[name="myDayDevident"] .queryArea .dayStart').datetimepicker({
            format: 'Y-m-d',
            defaultDate: new Date(),
            minDate: new Date(new Date().getTime() - 89 * 24 * 60 * 60 * 1000), //限制只能查90天
            lang: 'zh',
            value: $('.item[name="myDayDevident"] .queryArea .dayStart').val() || new Date(new Date().getTime() - 7 * 24 * 3600 * 1000),
        });
        $('.item[name="myDayDevident"] .queryArea .dayEnd').datetimepicker({
            format: 'Y-m-d',
            defaultDate: new Date(),
            maxDate: new Date(),
            lang: 'zh',
            value: $('.item[name="myDayDevident"] .queryArea .dayEnd').val() || new Date(),
        });
        $('#admin_report > div.panel-tab.daySalary  div.queryArea > span.queryArea_six').off('click').on('click', function (e) {

            Api.getBonusDayList({
                startDate: $('#admin_report > div.panel-tab.daySalary > div:nth-child(2) > div.queryArea > input.dayStart').val(),
                endDate: $('#admin_report > div.panel-tab.daySalary > div:nth-child(2) > div.queryArea > input.dayEnd').val(),
                actionStatusDetail: $('#admin_report > div.panel-tab.daySalary > div:nth-child(2) > div.queryArea > select.queryArea_five').val(),
                currPage: currentPage,
                pageSize: 10,
                sortName: sortName,
                sortType: sortType,
            }, function (res) {
                if (res.status == 404) {
                    return;
                }
                if (res.code == 1001) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close();
                            }, 3000);
                        }
                    }).showModal();
                    return;
                }
                if (res.code == 1) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close();
                            }, 3000);
                        }
                    }).showModal();
                    return;
                }

                $('#admin_report > div.panel-tab.daySalary > div:nth-child(2) > div.clearfix.dvdResult > div > span.receivedDvd').text(res.result.bonusedAmount);
                $('#admin_report > div.panel-tab.daySalary > div:nth-child(2) > div.clearfix.dvdResult > div > span.frozenMoney').text(res.result.freezeAmount);
                var list = res.result.list || [];

                function renderHtml() {
                    liHtml = list.map(function (item, index) {
                        return `<li>
                            <span class="w_p20">${item.date}</span>
                            <span class="w_p16" style="width: 13.3%;">${item.betAmount}</span>
                            <span class="w_p16" style="width: 13.3%;">${item.activeUserCount}</span>
                            <span class="w_p16 bonusRatio" style="width: 13.3%;" contractId="${item.id}" contractNo="${item.agreementNo}">${item.bonusRatio == 0?'---':item.bonusRatio>1?`${item.bonusRatio}元/万`:`${(item.bonusRatio*100).toFixed(2)}%`}</span>
                            <span class="w_p16" style="width: 13.3%;">${item.betAmountReal}</span>
                            <span class="w_p16 bonusAmount" style="width: 13.3%;" bonusRatio="${item.bonusRatio}" tip="${item.computeDetailInfo}" betAmount="${item.betAmount}" contractNo="${item.agreementNo}">${item.bonusAmount?item.bonusAmount:'0'}</span>
                            <span class="w_p16 actionStatusDetail" style="width: 13.3%;">${Contract.dvdStatus[item.actionStatusDetail]}</span></li>`;
                    }).join('');
                    ulData.html(liHtml);
                }
                renderHtml();
                //排序
                $('#admin_report > div.panel-tab.daySalary > div:nth-child(2) > div.list > ul.head > li > span.dvd').off('click').on('click', function () {
                    if ($(this).find('span.up').hasClass('on')) {
                        localStorage.setItem('sortType', 'desc');
                        $(this).find('span.up').removeClass('on');
                        $(this).find('span.down').addClass('on');
                    } else if ($(this).find('span.down').hasClass('on')) {
                        localStorage.setItem('sortType', 'asc');
                        $(this).find('span.down').removeClass('on');
                        $(this).find('span.up').addClass('on');
                    } else {
                        localStorage.setItem('sortType', 'desc');
                        $(this).find('span.up').removeClass('on');
                        $(this).find('span.down').addClass('on');
                    }
                    $(this).siblings().find('span.on').removeClass('on');
                    switch ($(this).attr('rel')) {
                        case 'date':
                            localStorage.setItem('sortName', 'date');
                            me.getMyDayDevident(currentPage, 'date', localStorage.getItem('sortType'));
                            break;
                        case 'betAmount':
                            localStorage.setItem('sortName', 'betAmount');
                            me.getMyDayDevident(currentPage, 'betAmount', localStorage.getItem('sortType'));
                            break;
                        case 'activeUserCount':
                            localStorage.setItem('sortName', 'activeUserCount');
                            me.getMyDayDevident(currentPage, 'activeUserCount', localStorage.getItem('sortType'));
                            break;
                        case 'bonusRatio':
                            localStorage.setItem('sortName', 'bonusRatio');
                            me.getMyDayDevident(currentPage, 'bonusRatio', localStorage.getItem('sortType'));
                            break;
                        case 'bonusAmount':
                            localStorage.setItem('sortName', 'bonusAmount');
                            me.getMyDayDevident(currentPage, 'bonusAmount', localStorage.getItem('sortType'));
                            break;
                        case 'betAmountReal':
                            localStorage.setItem('sortName', 'betAmountReal');
                            me.getMyDayDevident(currentPage, 'betAmountReal', localStorage.getItem('sortType'));
                            break;
                        default:
                            break;
                    }
                    bonusAmountPop();
                    bonusRatioPop();
                });
                //点击分红金额弹窗分红公式
                function bonusAmountPop() {
                    $('.bonusAmount').click(function (e) {
                        var me = $(this);
                        let content = me.attr('bonusRatio') > 1 ? `投注额每满一万计日工资${me.attr('bonusRatio')}元` : `日工资为投注额的${(me.attr('bonusRatio')*100).toFixed(2)}%`;
                        dialog({
                            quickClose: true,
                            align: 'left',
                            content: `<p>${me.attr('tip')}</p>
                        <p>满足协议条件,${content}，投注额${me.attr('betAmount')}计日工资${me.text()}元</p>
                        `,
                            onshow: function () {
                                $('.ui-dialog-body').css({
                                    'border': '#f2ea91 solid 2px',
                                    'background': '#fef6e1',
                                });
                            }
                        }).show($(this)[0]);
                    });
                }
                bonusAmountPop();
                //点击分红比例弹出冒泡
                function bonusRatioPop() {
                    $('.bonusRatio').off('click').on('click', function (evt) {
                        var $this = $(this);
                        evt.stopPropagation();
                        evt.preventDefault();
                        dialog({
                            quickClose: true,
                            content: `<p>根据签约协议的规则，您当前的日工资比例为${$(this).text()}</p>
                                      <p class="readContract fr">查看协议</p>`,
                            onshow: function () {
                                $('.ui-dialog-body').css({
                                    'border': '#f2ea91 solid 2px',
                                    'background': '#fef6e1',
                                });
                                $('.readContract').css({
                                    'color': '#01b0ff',
                                    'cursor': 'pointer',
                                    'transform': 'translateY(10px)',
                                });
                                $('.readContract:hover').css({
                                    'text-decoration': 'underline'
                                });
                                $('.readContract').on('click', function (e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    Api.getDayDetailContract({
                                        contractNo: $this.attr('contractNo')
                                    }, function (response) {
                                        if (response.code === '10001') {
                                            dialog({
                                                content: `<p>${response.msg}</p>`,
                                                onshow: function () {
                                                    setTimeout(() => {
                                                        this.close()
                                                    }, 5000);
                                                }
                                            }).showModal();
                                            return;
                                        }
                                        let contractRuleList = response.result.contractRuleList;
                                        let lowerRuleType = response.result.ruleType;
                                        let specialRuleHtml = contractRuleList.filter(item => item.ruleSort == 0).map((item, index) => {
                                            return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;日投注额：≥&nbsp;${item.betMoney}元，且活跃人数：≥&nbsp;${item.activePeople}人，日工资：${lowerRuleType == 1?`${item.daySalary}元/万`:`${(item.bonus*100).toFixed(2)}%`}</p>`;
                                        }).join('');
                                        let RuleListHtml = contractRuleList.filter(item => item.ruleSort != 0).sort((a, b) => {
                                            return a.ruleSort - b.ruleSort;
                                        }).map((item, index) => {
                                            return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日投注额：≥&nbsp;${item.betMoney}元，且活跃人数：≥&nbsp;${item.activePeople}人，日工资：${lowerRuleType == 1?`${item.daySalary}元/万`:`${(item.bonus*100).toFixed(2)}%`}</p>`;
                                        }).join('');
                                        var showContract = dialog({
                                            id: 'showContract',
                                            fixed: true,
                                            title: '契约签订',
                                            width: Contract.dayDialogWidth,
                                            height: 'auto',
                                            align: 'right top',
                                            // quickClose: true,
                                            content: `
                                                <table  class="m0_auto textCenter"><tbody>
                                                <tr><td>协议签订日期</td><td>${new Date(response.result.contractDate).Format('YYYY-MM-DD')}</td><td>金额起算日期</td><td>${response.result.startDate}</td></tr></tbody></table>
                                                <p class="rules">契约状态：<span class="green">${Contract.statusReflect[response.result.status]}</span></p>
                                                ${RuleListHtml}
                                                ${specialRuleHtml}
                                                <p class="rulesFive" style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''}</span></p>
                                                <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
                                                <p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
                                                <p class="rulesEight">*与上级签订日工资契约，全力保障您的代理日工资！</p>`,
                                            onshow: function () {
                                                var that = this;
                                                // $('.ui-dialog-footer').css({
                                                //     'height': 60
                                                // });
                                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                                    'background-color': 'rgba(115,123,248,1)'
                                                });

                                                $('.ui-dialog-content .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                                    e.stopPropagation();
                                                    var dutyDeclare = dialog({
                                                        id: 'dutyDeclare',
                                                        title: '免责声明',
                                                        align: 'right top',
                                                        width: Contract.dayDialogWidth,
                                                        height: 'auto',
                                                        cancel: function () {
                                                            that.showModal($('#alignDialog')[0]);
                                                        },
                                                        content: me.dutyDayDeclareText(),
                                                    });
                                                    that.close();
                                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                                });
                                            },
                                        });
                                        showContract.showModal($('#alignDialog')[0]);
                                    });

                                });
                            }
                        }).show($(this)[0]);
                    });
                }
                bonusRatioPop();
                //分页
                var pageHtml = Q.showPagination(currentPage || 1, res.page.pageSize, null, res.page.totalPage);
                if (res.result.list.length == 0) {
                    $('.daySalary .item[name="myDayDevident"] div.pager').html('<p>暂无数据!</p>');
                } else {
                    $('.daySalary .item[name="myDayDevident"] div.pager').html(pageHtml);
                }
                $('.daySalary .item[name="myDayDevident"] div.pager a').off('click').on('click', function (e) {
                    var currPage = $(this).attr('page');
                    me.getMyDayDevident(currPage, localStorage.getItem('sortName'), localStorage.getItem('sortType'));
                });
            });
        });
        $('#admin_report > div.panel-tab.daySalary  div.queryArea > span.queryArea_six').trigger('click');
    },
    getLowersDayContract: function (currentPage) {
        var me = this;
        var tab = $('.panel-tab.daySalary');
        var ulData = tab.find('.item[name="lowersDayContract"] ul.data');
        var liHtml = '';
        $('.item[name="lowersDayContract"] .lctQuery .lctTimeStart').datetimepicker({
            format: 'Y-m-d',
            defaultDate: new Date(),
            lang: 'zh',
            value: $('.item[name="lowersDayContract"] .lctQuery .lctTimeStart').val() || new Date(me.lowerDayContractStartDate),
        });
        $('.item[name="lowersDayContract"] .lctQuery .lctTimeEnd').datetimepicker({
            format: 'Y-m-d',
            defaultDate: new Date(),
            lang: 'zh',
            value: $('.item[name="lowersDayContract"] .lctQuery .lctTimeEnd').val() || new Date(),
        });
        //列表
        $('.item[name="lowersDayContract"] .lctQuery .lctButton').off('click').on('click', function (e) {
            e.preventDefault();
            Api.getDayLowerContract({
                userName: $('.item[name="lowersDayContract"] .lctQuery .lctName').val(),
                createDateBegin: $('.item[name="lowersDayContract"] .lctQuery .lctTimeStart').val(),
                createDateEnd: $('.item[name="lowersDayContract"] .lctQuery .lctTimeEnd').val(),
                status: $('.item[name="lowersDayContract"] .lctQuery .lctState').val(),
                currPage: currentPage,
                pageSize: 10,
            }, function (res) {
                // res == -1 && (window.location.href = window.location.protocol + '//' + window.location.host);

                if (res.code == 1001) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close()
                            }, 5000);
                        }
                    }).showModal();
                    return;
                }
                let resultList = res.result.list;

                liHtml = resultList.map(function (item, index) {
                    if (item.status == 0) {
                        return `<li><span class="w_p15">${item.userName}</span><span class="w_p15">${item.createTime}</span><span class="w_p15">${item.contractDate==null?'尚未签约':new Date(item.contractDate.split(' ')[0]).Format('YYYY-MM-DD')}</span><span class="w_p15">${item.startDate}</span><span class="w_p15"><i class="statusCircle${item.status}"></i>${Contract.statusReflect[item.status]}</span><span class="w_p25"><em class="readLowerContract" idVal="${item.id}">查看</em><em class="m0_10 cancelLowerContract" idVal="${item.id}">取消</em><em class="modifyLowerContract" idval="${item.id}" userName="${item.userName}">修改</em><em idval="${item.id}" userName="${item.userName}" class="m0_10 mr0 createByThis">复制</em></span></li>`;
                    } else if (item.status == 5) {
                        return `<li><span class="w_p15">${item.userName}</span><span class="w_p15">${item.createTime}</span><span class="w_p15">${item.contractDate==null?'尚未签约':new Date(item.contractDate.split(' ')[0]).Format('YYYY-MM-DD')}</span><span class="w_p15">${item.startDate}</span><span class="w_p15"><i class="statusCircle${item.status}"></i>${Contract.statusReflect[item.status]}</span><span class="w_p25"><em idval="${item.id}" class="readLowerContract">查看</em><em idval="${item.id}" userName="${item.userName}" class="m0_10 mr0 createByThis">复制</em></span></li>`;
                    }
                    return `<li><span class="w_p15">${item.userName}</span><span class="w_p15">${item.createTime}</span><span class="w_p15">${item.contractDate==null?'尚未签约':new Date(item.contractDate.split(' ')[0]).Format('YYYY-MM-DD')}</span><span class="w_p15">${item.startDate}</span><span class="w_p15"><i class="statusCircle${item.status}"></i>${Contract.statusReflect[item.status]}</span><span class="w_p25"><em idval="${item.id}" class="readLowerContract">查看</em><em idval="${item.id}" userName="${item.userName}" class="m0_10 mr0 createByThis">复制</em></span></li>`;
                }).join('');
                ulData.html(liHtml);
                //查看契约
                $('.daySalary .readLowerContract').off('click').on('click', function (e) {
                    e.stopPropagation();
                    const idval = $(this).attr('idval');
                    Api.getDayDetailContract({
                        id: idval
                    }, function (res) {
                        // res == -1 && (window.location.href = window.location.protocol + '//' + window.location.host);
                        let lowerRuleType = res.result.ruleType;
                        let contractRuleList = res.result.contractRuleList;
                        let RuleListHtml = contractRuleList.sort((a, b) => {
                            return a.ruleSort - b.ruleSort;
                        }).map((item, index) => {
                            return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日投注额：≥&nbsp;${item.betMoney}元，且活跃人数:≥&nbsp;${item.activePeople}人，日工资：${lowerRuleType == 1?`${item.daySalary}元/万`:`${(item.bonus*100).toFixed(2)}%`}</p>`;
                        }).join('');
                        var readLowerContract;
                        if (res.result.status == 0) {
                            readLowerContract = dialog({
                                id: 'readLowerContract',
                                title: '契约详情',
                                fixed: true,
                                width: Contract.dayDialogWidth,
                                height: 'auto',
                                align: 'right top',
                                // quickClose: true,
                                content: `
									  <p class="rules">日工资契约规则如下：</p>
									  ${RuleListHtml}
									  <p class="rulesFive" style="display:${res.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${res.result.cancelContractCondition||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${res.result.startDate}</p>
									  <p class="rulesEight" style="transform:translateY(60px);">*与上级签订日工资契约，全力保障您的代理日工资！</p>`,
                                button: [{
                                    id: 'modifyButton',
                                    value: '修改契约',
                                    callback: function () {
                                        $(`.daySalary .modifyLowerContract[idval=${idval}]`).trigger('click');
                                    }
                                }, {
                                    id: 'cancelButton',
                                    value: '取消发送',
                                    callback: function () {
                                        $(`.daySalary .cancelLowerContract[idval=${idval}]`).trigger('click');
                                        me.getLowersDayContract(currentPage);
                                    }
                                }],
                                onshow: function () {
                                    $('.ui-dialog-footer button[i-id=modifyButton]').css({
                                        'background-color': 'rgba(115,123,248,1)'
                                    });
                                }
                            });
                            readLowerContract.showModal($('#alignDialog')[0]);
                        } else if (res.result.status == 5) {
                            readLowerContract = dialog({
                                id: 'readLowerContract',
                                title: '契约详情',
                                fixed: true,
                                width: Contract.dayDialogWidth,
                                align: 'right top',
                                height: 'auto',
                                // quickClose: true,
                                content: `
									  <p class="rules">契约状态：<span class="green">${Contract.statusReflect[res.result.status]}</span></p>
									  ${RuleListHtml}
									  <p class="rulesFive" style="display:${res.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${res.result.cancelContractCondition||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${res.result.startDate}</p>
									  <p class="rulesEight" style="transform:translateY(60px);">*与上级签订日工资契约，全力保障您的代理日工资！</p>`,
                                button: [{
                                    id: 'createByThisButton',
                                    value: '复制',
                                    callback: function () {
                                        $(`.daySalary .modifyLowerContract[idval=${idval}]`).trigger('click');
                                    }
                                }],
                                onshow: function () {
                                    $('.ui-dialog-footer button[i-id=createByThisButton]').css({
                                        'background-color': 'rgba(115,123,248,1)'
                                    });
                                }
                            });
                            readLowerContract.showModal($('#alignDialog')[0]);
                        } else {
                            readLowerContract = dialog({
                                id: 'readLowerContract',
                                title: '契约详情',
                                fixed: true,
                                align: 'right top',
                                width: Contract.dayDialogWidth,
                                height: 'auto',
                                // quickClose: true,
                                content: `
									  <p class="rules">契约状态：<span class="green">${Contract.statusReflect[res.result.status]}</span></p>
									  ${RuleListHtml}
									  <p class="rulesFive" style="display:${res.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${res.result.cancelContractCondition||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${res.result.startDate}</p>
									  <p class="rulesEight">*与上级签订日工资契约，全力保障您的代理日工资！</p>`,
                            });
                            readLowerContract.showModal($('#alignDialog')[0]);
                        }

                    });
                });
                //修改契约
                $('.daySalary .modifyLowerContract').off('click').on('click', function (e) {
                    e.stopPropagation();
                    var $this = $(this);
                    Api.getDayDetailContract({
                        id: $(this).attr('idval'),
                    }, function (res) {

                        let contractRuleList = res.result.contractRuleList;
                        let lowerRuleType = res.result.ruleType;
                        let ruleList;
                        let limitInput = lowerRuleType == 1 ? 10000 : 1;
                        if (contractRuleList.length > 0) {
                            ruleList = contractRuleList.sort((a, b) => {
                                return a.ruleSort - b.ruleSort;
                            }).map(function (item, index) {
                                if (index == 0) {
                                    return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" max="999999999" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4" value="${item.betMoney}"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4" value="${item.activePeople}"><em>人，日工资</em>
                                        ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4" value="${item.daySalary}"><em>元/万</em>`
                                        :`<select name="dvdPerBonusSelect">${me.ratioOptions(me.myMaxDayRatio, item.bonus)}</select>`}                  
                                        <button class="m0_4 addRuleFirst">+</button></p>`;
                                } else if (index == 4) {
                                    return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" max="999999999" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4" value="${item.betMoney}"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4" value="${item.activePeople}"><em>人，日工资</em>
                                        ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4" value="${item.daySalary}"><em>元/万</em>`
                                        :`<select name="dvdPerBonusSelect">${me.ratioOptions(me.myMaxDayRatio, item.bonus)}</select>`}                  
                                        <button class="m0_4 reduceRule">-</button></p>`;
                                }
                                return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" max="999999999" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4" value="${item.betMoney}"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4" value="${item.activePeople}"><em>人，日工资</em>
                                    ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4" value="${item.daySalary}"><em>元/万</em>`
                                    :`<select name="dvdPerBonusSelect">${me.ratioOptions(me.myMaxDayRatio, item.bonus)}</select>`}                  
                                    <button class="m0_4 addRule">+</button><button class="m0_4 reduceRule">-</button></p>`;
                            }).join('');
                        } else {
                            ruleList = `<p class="ruleFlag"><span>契约规则一：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" max="999999999" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4"><em>人，日工资</em>
                            ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4"><em>元/万</em>`
                            :`<select name="dvdPerBonusSelect">${me.ratioOptions(me.myMaxDayRatio, item.bonus)}</select>`}                  
                            <button class="m0_4 addRuleFirst">+</button></p>`
                        }

                        var modifyLowerContract = dialog({
                            id: 'modifyLowerContract',
                            skin: 'modifyDayLower',
                            title: '契约详情',
                            fixed: true,
                            width: Contract.dayDialogWidth,
                            align: 'right top',
                            height: 'auto',
                            // quickClose: true,
                            button: [{
                                id: "modifyButton",
                                value: '修改契约',
                                callback: function () {
                                    var rules = [];
                                    $('[id="content:modifyLowerContract"] .ruleFlag').each(function (index, item) {
                                        if (lowerRuleType == 1) {
                                            rules.push({
                                                "bet": $(this).find('input[name="betMoney"]').val(),
                                                "activePeople": $(this).find('input[name="lostMoney"]').val(),
                                                "daySalary": $(this).find('input[name="dvdPerBonus"]').val(),
                                                "sort": index + 1,
                                            });
                                        } else if (lowerRuleType == 2) {
                                            rules.push({
                                                "bet": $(this).find('input[name="betMoney"]').val(),
                                                "activePeople": $(this).find('input[name="lostMoney"]').val(),
                                                "bonus": $(this).find('select[name="dvdPerBonusSelect"]').val(),
                                                "sort": index + 1,
                                            });
                                        }
                                    });
                                    if (!$('[id="content:modifyLowerContract"] p.dutyDetail input[type="checkbox"]').prop('checked')) {
                                        dialog({
                                            cancel: true,
                                            content: `<p>需遵循免责声明才能发送契约</p>`,
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 3000);
                                            }
                                        }).showModal();
                                        return false;
                                    }
                                    Api.modifyDayContract({
                                        edit: JSON.stringify({
                                            contractId: $('[id="content:modifyLowerContract"] p .proxyName').attr('idval'),
                                            startDate: $('[id="content:modifyLowerContract"] p .moneyStartDate').val(),
                                            condition: $('[id="content:modifyLowerContract"] .cancalCondition textarea').val(),
                                            rules: rules
                                        })
                                    }, function (res) {
                                        if (res.code == 1) {
                                            dialog({
                                                content: `<p>修改成功！</p>`,
                                                cancel: true,
                                                onshow: function () {
                                                    setTimeout(() => {
                                                        this.close();
                                                    }, 5000);
                                                }
                                            }).showModal();
                                            me.getLowersDayContract(currentPage);
                                            $('button[i-id="cancelButton"]').trigger('click');
                                        } else {
                                            dialog({
                                                content: `<p>${res.msg}</p>`,
                                                cancel: true,
                                                onshow: function () {
                                                    setTimeout(() => {
                                                        this.close();
                                                    }, 5000);
                                                }
                                            }).showModal();
                                        }

                                    });
                                    return false;
                                }
                            }, {
                                id: "cancelButton",
                                value: '取消',
                                callback: function () {}
                            }],
                            onshow: function () {
                                var that = this;
                                $('.ui-dialog-footer button[i-id=modifyButton]').css({
                                    'background-color': 'rgba(101, 78, 189, 1)'
                                });
                                $('[id="content:modifyLowerContract"] p .moneyStartDate').datetimepicker({
                                    format: 'Y-m-d',
                                    lang: 'zh',
                                });

                                //规则加减
                                var numToCn = {
                                    0: '一',
                                    1: '二',
                                    2: '三',
                                    3: '四',
                                    4: '五'
                                };
                                var rulesCount = $('p.ruleFlag').length - 1;

                                function addRule() {
                                    $('.modifyDayLower p.ruleFlag .addRule').off('click').on('click', function () {
                                        $('.modifyDayLower p.ruleFlag .addRuleFirst').trigger('click');
                                    });
                                }
                                $('.modifyDayLower p.ruleFlag .addRuleFirst').off('click').on('click', function (e) {
                                    if (rulesCount >= 4) {
                                        return;
                                    }
                                    rulesCount++;
                                    $(this).parent('.ruleFlag').parent('.ruleFlagWrap').append(`<p class="ruleFlag"><span>契约规则${numToCn[rulesCount]}：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4"><em>人，日工资</em>
                                    ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4"><em>元/万</em><select name="dvdPerBonusSelect" style="display:none;"><option value="">请选择</option>${me.ratioOptions(me.myMaxDayRatio, '')}</select>`
                                    :`<input name="dvdPerBonus" style="display:none;" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4"><em style="display:none;">元/万</em><select name="dvdPerBonusSelect"><option value="">请选择</option>${me.ratioOptions(me.myMaxDayRatio, '')}</select>`}                  
                                    <button class="m0_4 addRule" style="display:${rulesCount==4?'none':'inline-block'};">+</button><button class="m0_4 reduceRule">-</button></p>`);

                                    $('.modifyDayLower p.ruleFlag').each(function (index, item) {
                                        $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                    });
                                    addRule();

                                    $('.modifyDayLower p.ruleFlag .reduceRule').off('click').on('click', function (e) {
                                        rulesCount == 4 && $(this).parent('.ruleFlag').index() < 4 && $(this).parent('.ruleFlag').siblings('.ruleFlag').last().find('.reduceRule').before(`<button class="m0_4 addRule">+</button>`);
                                        addRule(); //新加元素重新注册点击事件
                                        $(this).parent('.ruleFlag').remove();
                                        rulesCount--;
                                        $('.modifyDayLower p.ruleFlag').each(function (index, item) {
                                            $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                        });
                                    });
                                });

                                addRule();

                                $('.modifyDayLower p.ruleFlag .reduceRule').off('click').on('click', function (e) {
                                    rulesCount == 4 && $(this).parent('.ruleFlag').index() < 4 && $(this).parent('.ruleFlag').siblings('.ruleFlag').last().find('.reduceRule').before(`<button class="m0_4 addRule">+</button>`);
                                    addRule(); //新加元素重新注册点击事件
                                    $(this).parent('.ruleFlag').remove();
                                    rulesCount--;
                                    $('.modifyDayLower p.ruleFlag').each(function (index, item) {
                                        $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                    });
                                });

                                $('.dutyDeclare').off('click').on('click', function (e) {
                                    e.stopPropagation();
                                    var dutyDeclare = dialog({
                                        id: 'dutyDeclare',
                                        title: '免责声明',
                                        width: Contract.dayDialogWidth,
                                        height: 'auto',
                                        align: 'right top',
                                        // quickClose: true,
                                        content: me.dutyDayDeclareText(),
                                        button: [{
                                            id: 'agreeBtn',
                                            value: '同意',
                                            callback: function () {
                                                that.showModal();
                                                $('.dutyDetail>input[type="checkbox"]').prop('checked', true);
                                            }
                                        }, {
                                            id: 'unAgreeBtn',
                                            value: '返回',
                                            callback: function () {
                                                that.showModal($('#alignDialog')[0]);
                                            }
                                        }],
                                        onshow: function () {
                                            $('.ui-dialog-footer button[i-id=agreeBtn]').css({
                                                'background-color': 'rgba(101, 78, 189, 1)'
                                            });
                                        },
                                        onclose: function () {
                                            that.showModal($('#alignDialog')[0]);
                                        },
                                    });
                                    that.close();
                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                });
                            },
                            content: `<p><span>代理用户名：</span><input type="text" class="proxyName" value="${$this.attr('userName')}" idval="${$this.attr('idval')}" disabled></p>
									  <p style="text-indent:26px;"><span>金额起算日期：</span><input type="text" class="moneyStartDate" value="${res.result.startDate}"></p>
									  <div class="ruleFlagWrap">${ruleList}</div>
									  <div class="cancalCondition" style="text-indent:50px;"><span>解约条件：</span><textarea>${res.result.cancelContractCondition||''}</textarea></div>
									  <p class="dutyDetail"><input type="checkbox"><em>同意</em><em class="m0_12">请详细阅读</em><em class="dutyDeclare">契约免责声明</em></p>`,
                        });
                        modifyLowerContract.showModal($('#alignDialog')[0]);
                    });
                });
                //取消发送
                $('.daySalary .cancelLowerContract').off('click').on('click', function (e) {
                    e.stopPropagation();
                    Api.updateDayContractStatus({
                        contractId: $(this).attr('idval'),
                        status: 2
                    }, function (statusRes) {
                        // statusRes == -1 && (window.location.href = window.location.protocol + '//' + window.location.host);

                        if (statusRes.code == 1) {
                            dialog({
                                content: `<p style="text-align:center">您已取消发送</p>`,
                                cancel: true,
                                fixed: true,
                                width: '200px',
                                height: '16px',
                                onshow: function () {
                                    setTimeout(() => {
                                        this.close();
                                    }, 5000);
                                }
                            }).showModal();
                            me.getLowersDayContract(currentPage);
                        } else {
                            dialog({
                                content: `<p style="text-align:center">${statusRes == -1?'服务异常':statusRes.msg}</p>`,
                                cancel: true,
                                fixed: true,
                                width: '200px',
                                height: '16px',
                                onshow: function () {
                                    setTimeout(() => {
                                        this.close();
                                    }, 5000);
                                }
                            }).showModal();
                            me.getLowersDayContract(currentPage);
                        }

                    });
                });
                //以此为模板进行创建
                $('.daySalary .createByThis').off('click').on('click', function (e) {
                    e.stopPropagation();
                    var $this = $(this);
                    Api.getDayDetailContract({
                        id: $(this).attr('idval'),
                    }, function (res) {
                        // res == -1 && (window.location.href = window.location.protocol + '//' + window.location.host);
                        let lowerRuleType = res.result.ruleType;
                        let contractRuleList = res.result.contractRuleList;
                        let ruleList;
                        let limitInput = lowerRuleType == 1 ? 10000 : 1;
                        if (contractRuleList.length > 0) {
                            ruleList = contractRuleList.sort((a, b) => {
                                return a.ruleSort - b.ruleSort;
                            }).map(function (item, index) {
                                if (index == 0) {
                                    return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" max="999999999" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4" value="${item.betMoney}"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4" value="${item.activePeople}"><em>人，日工资</em>
                                        ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4" value="${item.daySalary}"><em>元/万</em>`
                                        :`<select name="dvdPerBonusSelect">${me.ratioOptions(me.myMaxDayRatio, item.bonus)}</select>`}                  
                                        <button class="m0_4 addRuleFirst">+</button></p>`;
                                } else if (index == 4) {
                                    return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" max="999999999" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4" value="${item.betMoney}"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4" value="${item.activePeople}"><em>人，日工资</em>
                                        ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4" value="${item.daySalary}"><em>元/万</em>`
                                            :`<select name="dvdPerBonusSelect">${me.ratioOptions(me.myMaxDayRatio, item.bonus)}</select>`}                  
                                        <button class="m0_4 reduceRule">-</button></p>`;
                                }
                                return `<p class="ruleFlag"><span>契约规则${Contract.numberToCn[item.ruleSort]}：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" max="999999999" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4" value="${item.betMoney}"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4" value="${item.activePeople}"><em>人，日工资</em>
                                    ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4" value="${item.daySalary}"><em>元/万</em>`
                                        :`<select name="dvdPerBonusSelect">${me.ratioOptions(me.myMaxDayRatio, item.bonus)}</select>`}                  
                                    <button class="m0_4 addRule">+</button><button class="m0_4 reduceRule">-</button></p>`;
                            }).join('');
                        } else {
                            ruleList = `<p class="ruleFlag"><span>契约规则一：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" max="999999999" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4"><em>人，日工资</em>
                            ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4" value="${item.daySalary}"><em>元/万</em>`
                            :`<select name="dvdPerBonusSelect">${me.ratioOptions(me.myMaxDayRatio, item.bonus)}</select>`}                  
                            <button class="m0_4 addRuleFirst">+</button></p>`
                        }

                        var createByThis = dialog({
                            id: 'createByThis',
                            skin: 'copyDayLower',
                            title: '契约详情',
                            fixed: true,
                            width: Contract.dayDialogWidth,
                            align: 'right top',
                            height: 'auto',
                            // quickClose: true,
                            button: [{
                                id: "createButton",
                                value: '创建契约',
                                callback: function () {
                                    if (!$('[id="content:createByThis"] p.dutyDetail input[type="checkbox"]').prop('checked')) {
                                        dialog({
                                            cancel: true,
                                            content: `<p>需遵循免责声明才能发送契约</p>`,
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close()
                                                }, 3000);
                                            }
                                        }).showModal();
                                        return false;
                                    }

                                    var sendContract = function() {
                                        var rules = []; //input[name="betMoney"]
                                        $('[id="content:createByThis"] .ruleFlag').each(function (index, item) {
                                            if (lowerRuleType == 1) {
                                                rules.push({
                                                    "bet": $(this).find('input[name="betMoney"]').val(),
                                                    "activePeople": $(this).find('input[name="lostMoney"]').val(),
                                                    "daySalary": $(this).find('input[name="dvdPerBonus"]').val(),
                                                    "sort": index + 1,
                                                });
                                            } else if (lowerRuleType == 2) {
                                                rules.push({
                                                    "bet": $(this).find('input[name="betMoney"]').val(),
                                                    "activePeople": $(this).find('input[name="lostMoney"]').val(),
                                                    "bonus": $(this).find('select[name="dvdPerBonusSelect"]').val(),
                                                    "sort": index + 1,
                                                });
                                            }
                                        });

                                        
                                        Api.addDayContract({
                                            add: JSON.stringify({
                                                useridB: $('[id="content:createByThis"] p .proxyName').val(),
                                                startDate: $('[id="content:createByThis"] p .moneyStartDate').val(),
                                                condition: $('[id="content:createByThis"] .cancalCondition textarea').val(),
                                                rules: rules,
                                                ruleType: lowerRuleType,
                                            })
                                        }, function (res) {

                                            if (res.code == 1) {
                                                dialog({
                                                    content: `<p>创建成功!</p>`,
                                                    cancel: true,
                                                    onshow: function () {
                                                        setTimeout(() => {
                                                            this.close();
                                                        }, 5000);
                                                    }
                                                }).showModal();
                                                me.getLowersDayContract(currentPage);
                                                $('button[i-id="cancelButton"]').trigger('click');
                                            } else {
                                                dialog({
                                                    content: '<p>' + (/已经签订/.test(res.msg) ? '该下级存在“待签订”的协议，不能再对其发送协议！': res.msg) + '</p>',
                                                    cancel: true,
                                                    onshow: function () {
                                                        setTimeout(() => {
                                                            this.close();
                                                        }, 5000);
                                                    }
                                                }).showModal();
                                            }
                                        });
                                    };

                                    Api.getDayLowerContract({userName: $('.proxyName').val(), currentPage: 1, pageSize: 10}, 
                                        res => {
                                            var flag = false;
                                            res = res.result.list;
                                            if(res.length === 0) {
                                                sendContract();
                                            } else {
                                                for(let i=0, len=res.length; i<len; i++) {
                                                    if(res[i].status === '0') {
                                                        flag = true;
                                                        break;
                                                    }
                                                }
                                                if(!flag) {
                                                    var repeat = dialog({
                                                        content: `<div>温馨提醒</div>
                                                                  <p>该下级已签订过契约，请确认是否发送契约？<br/>若新契约被签订，原契约将被替换。</p>`,
                                                        button: [{
                                                            id: "sendContract",
                                                            value: '发送契约',
                                                            callback: function() {
                                                                sendContract();
                                                            } 
                                                        }, {
                                                            id: "cancelContract",
                                                            value: '取消',
                                                            callback: function () {}
                                                        }],
                                                        onshow: function() {
                                                            $('.ui-dialog-footer button[i-id=sendContract]').css({
                                                                'background-color': 'rgba(101, 78, 189, 1)'
                                                            });
                                                        }
                                                    }).showModal();
                                                } else {
                                                    flag = false;
                                                    sendContract();
                                                }
                                            }
                                        }
                                    );                                    
                                    return false;
                                }
                            }, {
                                id: "cancelButton",
                                value: '取消',
                                callback: function () {}
                            }],
                            onshow: function () {
                                var that = this;
                                $('.ui-dialog-footer button[i-id=createButton]').css({
                                    'background-color': 'rgba(101, 78, 189, 1)'
                                });
                                $('[id="content:createByThis"] p .moneyStartDate').datetimepicker({
                                    format: 'Y-m-d',
                                    lang: 'zh',
                                });
                                //规则加减
                                var numToCn = {
                                    0: '一',
                                    1: '二',
                                    2: '三',
                                    3: '四',
                                    4: '五'
                                };
                                var rulesCount = $('p.ruleFlag').length - 1;

                                function addRule() {
                                    $('.copyDayLower .ruleFlagWrap .addRule').off('click').on('click', function () {
                                        $('.copyDayLower p.ruleFlag .addRuleFirst').trigger('click');
                                    });
                                }
                                $('.copyDayLower p.ruleFlag .addRuleFirst').off('click').on('click', function (e) {
                                    if (rulesCount >= 4) {
                                        return;
                                    }
                                    rulesCount++;

                                    $(this).parent('.ruleFlag').parent('.ruleFlagWrap').append(`<p class="ruleFlag"><span>契约规则${numToCn[rulesCount]}：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4"><em>人，日工资</em>
                                    ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4"><em>元/万</em>`
                                    :`<select name="dvdPerBonusSelect"><option value="">请选择</option>${me.ratioOptions(me.myMaxDayRatio, '')}</select>`}                  
                                    <button class="m0_4 addRule" style="display:${rulesCount==4?'none':'inline-block'};">+</button><button class="m0_4 reduceRule">-</button></p>`);

                                    $('.copyDayLower p.ruleFlag').each(function (index, item) {
                                        $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                    });
                                    addRule();
                                    $('.copyDayLower .ruleFlagWrap ').off('click').on('click', '.reduceRule', function (e) {
                                        rulesCount == 4 && $(this).parent('.ruleFlag').index() < 4 && $(this).parent('.ruleFlag').siblings('.ruleFlag').last().find('.reduceRule').before(`<button class="m0_4 addRule">+</button>`);
                                        addRule(); //新加元素重新注册点击事件
                                        $(this).parent('.ruleFlag').remove();
                                        rulesCount--;
                                        $('.copyDayLower p.ruleFlag').each(function (index, item) {
                                            $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                        });
                                    });
                                });
                                addRule();

                                $('.copyDayLower .ruleFlagWrap .reduceRule').off('click').on('click', function (e) {
                                    rulesCount == 4 && $(this).parent('.ruleFlag').index() < 4 && $(this).parent('.ruleFlag').siblings('.ruleFlag').last().find('.reduceRule').before(`<button class="m0_4 addRule">+</button>`);
                                    addRule(); //新加元素重新注册点击事件
                                    $(this).parent('.ruleFlag').remove();
                                    rulesCount--;
                                    $('.copyDayLower p.ruleFlag').each(function (index, item) {
                                        $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                                    });
                                });

                                $('.dutyDeclare').off('click').on('click', function (e) {
                                    e.stopPropagation();
                                    var dutyDeclare = dialog({
                                        id: 'dutyDeclare',
                                        title: '免责声明',
                                        width: Contract.dayDialogWidth,
                                        height: 'auto',
                                        align: 'right top',
                                        // quickClose: true,
                                        content: me.dutyDayDeclareText(),
                                        button: [{
                                            id: 'agreeBtn',
                                            value: '同意',
                                            callback: function () {
                                                that.showModal($('#alignDialog')[0]);
                                                $('.dutyDetail>input[type="checkbox"]').prop('checked', true);
                                            }
                                        }, {
                                            id: 'unAgreeBtn',
                                            value: '返回',
                                            callback: function () {
                                                that.showModal($('#alignDialog')[0]);
                                            }
                                        }],
                                        onshow: function () {
                                            $('.ui-dialog-footer button[i-id=agreeBtn]').css({
                                                'background-color': 'rgba(101, 78, 189, 1)'
                                            });
                                        },
                                        onclose: function () {
                                            that.showModal($('#alignDialog')[0]);
                                        },
                                    });
                                    that.close();
                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                });
                            },
                            content: `<p><span>代理用户名：</span><input type="text" class="proxyName" value="${$this.attr('userName')}" idval="${$this.attr('idval')}"></p>
									  <p style="text-indent:26px;"><span>金额起算日期：</span><input type="text" class="moneyStartDate" value="${res.result.startDate}"></p>
									  <div class="ruleFlagWrap">${ruleList}</div>
									  <div class="cancalCondition" style="text-indent:50px;"><span>解约条件：</span><textarea>${res.result.cancelContractCondition||''}</textarea></div>
									  <p class="dutyDetail"><input type="checkbox"><em>同意</em><em class="m0_12">请详细阅读</em><em class="dutyDeclare">契约免责声明</em></p>`,
                        });
                        createByThis.showModal($('#alignDialog')[0]);
                    });
                });
                //分页
                var pageHtml = Q.showPagination(currentPage || 1, res.result.pageSize, null, res.result.totalPage);
                if (res.result.list.length == 0) {
                    $('.daySalary .item[name="lowersDayContract"] div.pager').html('<p>暂无数据！</p>');
                } else {
                    $('.daySalary .item[name="lowersDayContract"] div.pager').html(pageHtml);
                }
                $('.daySalary .item[name="lowersDayContract"] div.pager a').off('click').on('click', function (e) {
                    var currPage = $(this).attr('page');
                    me.getLowersDayContract(currPage);
                });
            });
        });
        $('.item[name="lowersDayContract"] .lctQuery .lctButton').trigger('click');
        //创建契约分红
        $('.daySalary .lctQuery').off('click').on('click', '.lctCreateButton', function (e) {
            e.stopPropagation();
            e.preventDefault();

        //     let content1 = `${me.platform == "0"?`<div class="contractModel"><span class="model model1 on" ruleType="1">模式1</span><span class="model model2" ruleType="2">模式2</span></div>`:''}
        //                   <p><span>代理用户名：</span><input type="text" class="proxyName" ></p>
						  // <p style="text-indent:26px;"><span>金额起算日期：</span><input type="text" class="moneyStartDate"></p>
						  // <div class="ruleFlagWrap"><p class="ruleFlag"><span>契约规则一：</span><span>日投注额</span><em class="m0_4">≥</em>
        //                   <input type="number" min="10000" max="999999999" onblur="value<10000?value=10000:value" name="betMoney" class="dayBetMoneyOne m0_4"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4">
        //                   <em>人，日工资</em>
        //                   <input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4"><em>元/万</em>'
        //                   <button class="m0_4 addRuleFirst">+</button></p></div>
						  // <div class="cancalCondition" style="text-indent:50px;"><span>解约条件：</span><textarea></textarea></div>
						  // <p class="dutyDetail"><input type="checkbox"><em>同意</em><em class="m0_12">请详细阅读</em><em class="dutyDeclare">契约免责声明</em></p>`;
        //     let content2 = `${me.platform == "0"?`<div class="contractModel"><span class="model model1" ruleType="1">模式1</span><span class="model model2 on" ruleType="2">模式2</span></div>`:''}
        //                   <p><span>代理用户名：</span><input type="text" class="proxyName" ></p>
						  // <p style="text-indent:26px;"><span>金额起算日期：</span><input type="text" class="moneyStartDate"></p>
						  // <div class="ruleFlagWrap"><p class="ruleFlag"><span>契约规则一：</span><span>日投注额</span><em class="m0_4">≥</em>
        //                   <input type="number" min="10000" max="999999999" onblur="value<10000?value=10000:value" name="betMoney" class="dayBetMoneyOne m0_4"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4">
        //                   <em>人，日工资</em>
        //                   <select name="dvdPerBonusSelect"><option value="">请选择</option>${me.ratioOptions(me.myMaxDayRatio)}</select>                
        //                   <button class="m0_4 addRuleFirst">+</button></p></div>
						  // <div class="cancalCondition" style="text-indent:50px;"><span>解约条件：</span><textarea></textarea></div>
						  // <p class="dutyDetail"><input type="checkbox"><em>同意</em><em class="m0_12">请详细阅读</em><em class="dutyDeclare">契约免责声明</em></p>`;
            let content1 = `<div class="contractModel"><span class="model model1 on" ruleType="1">模式1</span><span class="model model2" ruleType="2">模式2</span></div>
                          <p><span>代理用户名：</span><input type="text" class="proxyName" ></p>
                          <p style="text-indent:26px;"><span>金额起算日期：</span><input type="text" class="moneyStartDate"></p>
                          <div class="ruleFlagWrap"><p class="ruleFlag"><span>契约规则一：</span><span>日投注额</span><em class="m0_4">≥</em>
                          <input type="number" min="10000" max="999999999" onblur="value<10000?value=10000:value" name="betMoney" class="dayBetMoneyOne m0_4"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4">
                          <em>人，日工资</em>
                          <input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus?me.myMaxBonus:me.maxBonus[typeText]}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4"><em>元/万</em>'
                          <button class="m0_4 addRuleFirst">+</button></p></div>
                          <div class="cancalCondition" style="text-indent:50px;"><span>解约条件：</span><textarea></textarea></div>
                          <p class="dutyDetail"><input type="checkbox"><em>同意</em><em class="m0_12">请详细阅读</em><em class="dutyDeclare">契约免责声明</em></p>`;
            let content2 = `<div class="contractModel"><span class="model model1" ruleType="1">模式1</span><span class="model model2 on" ruleType="2">模式2</span></div>
                          <p><span>代理用户名：</span><input type="text" class="proxyName" ></p>
                          <p style="text-indent:26px;"><span>金额起算日期：</span><input type="text" class="moneyStartDate"></p>
                          <div class="ruleFlagWrap"><p class="ruleFlag"><span>契约规则一：</span><span>日投注额</span><em class="m0_4">≥</em>
                          <input type="number" min="1" max="999999999" onblur="value<1?value=1:value" name="betMoney" class="dayBetMoneyOne m0_4"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4">
                          <em>人，日工资</em>
                          <select name="dvdPerBonusSelect"><option value="">请选择</option>${me.myMaxDayRatio?me.ratioOptions(me.myMaxDayRatio):me.ratioOptions(0.013, '')}</select>                
                          <button class="m0_4 addRuleFirst">+</button></p></div>
                          <div class="cancalCondition" style="text-indent:50px;"><span>解约条件：</span><textarea></textarea></div>
                          <p class="dutyDetail"><input type="checkbox"><em>同意</em><em class="m0_12">请详细阅读</em><em class="dutyDeclare">契约免责声明</em></p>`;
            var lctCreateButton = dialog({
                id: 'lctCreateButton',
                skin: 'createDayLower',
                title: '签订契约',
                width: Contract.dayDialogWidth,
                height: 'auto',
                fixed: true,
                align: 'right top',
                // quickClose: true,
                content: me.ruleType == 1 ? content1 : content2,
                button: [{
                    id: "sendContract",
                    value: '发送契约',
                    callback: function () {
                        var that = this;
                        var rules = []; //input[name="betMoney"]
                        if (!$('[id="content:lctCreateButton"] p.dutyDetail input[type="checkbox"]').prop('checked')) {
                            dialog({
                                cancel: true,
                                content: `<p>需遵循免责声明才能发送契约</p>`,
                                onshow: function () {
                                    setTimeout(() => {
                                        this.close();
                                    }, 3000);
                                }
                            }).showModal();
                            return false;
                        }

                        var sendContract = function() {
                            $('[id="content:lctCreateButton"] .ruleFlag').each(function (index, item) {
                                // if (me.platform == "0") {
                                //     if (that.lowerRuleType == 1) {
                                //         rules.push({
                                //             "bet": $(this).find('input[name="betMoney"]').val(),
                                //             "activePeople": $(this).find('input[name="lostMoney"]').val(),
                                //             "daySalary": $(this).find('input[name="dvdPerBonus"]').val(),
                                //             "sort": index + 1
                                //         });
                                //     } else if (that.lowerRuleType == 2) {
                                //         rules.push({
                                //             "bet": $(this).find('input[name="betMoney"]').val(),
                                //             "activePeople": $(this).find('input[name="lostMoney"]').val(),
                                //             "bonus": $(this).find('select[name="dvdPerBonusSelect"]').val(),
                                //             "sort": index + 1
                                //         });
                                //     }
                                // } else {
                                //     if (me.ruleType == 1) {
                                //         rules.push({
                                //             "bet": $(this).find('input[name="betMoney"]').val(),
                                //             "activePeople": $(this).find('input[name="lostMoney"]').val(),
                                //             "daySalary": $(this).find('input[name="dvdPerBonus"]').val(),
                                //             "sort": index + 1
                                //         });
                                //     } else if (me.ruleType == 2) {
                                //         rules.push({
                                //             "bet": $(this).find('input[name="betMoney"]').val(),
                                //             "activePeople": $(this).find('input[name="lostMoney"]').val(),
                                //             "bonus": $(this).find('select[name="dvdPerBonusSelect"]').val(),
                                //             "sort": index + 1
                                //         });
                                //     }
                                // }
                                if($('.model1').hasClass('on')) {
                                    rules.push({
                                        "bet": $(this).find('input[name="betMoney"]').val(),
                                        "activePeople": $(this).find('input[name="lostMoney"]').val(),
                                        "daySalary": $(this).find('input[name="dvdPerBonus"]').val(),
                                        "sort": index + 1
                                    });
                                } else {
                                    rules.push({
                                        "bet": $(this).find('input[name="betMoney"]').val(),
                                        "activePeople": $(this).find('input[name="lostMoney"]').val(),
                                        "bonus": $(this).find('select[name="dvdPerBonusSelect"]').val(),
                                        "sort": index + 1
                                    });
                                }
                            });
                            
                            let ruleType = $('.contractModel').find('.model.on').attr('ruleType');
                            Api.addDayContract({
                                add: JSON.stringify({
                                    useridB: $('[id="content:lctCreateButton"] p .proxyName').val(),
                                    startDate: $('[id="content:lctCreateButton"] p .moneyStartDate').val(),
                                    condition: $('[id="content:lctCreateButton"] .cancalCondition textarea').val(),
                                    rules: rules,
                                    // ruleType: me.platform == "0" ? ruleType : me.ruleType,
                                    ruleType: ruleType
                                })
                            }, function (res) {

                                if (res.code == 1) {
                                    dialog({
                                        content: `<p>创建成功</p>`,
                                        cancel: true,
                                        onshow: function () {
                                            setTimeout(() => {
                                                this.close();
                                            }, 5000);
                                        }
                                    }).showModal();
                                    me.getLowersDayContract(currentPage);
                                    $('button[i-id="cancelContract"]').trigger('click');
                                } else {
                                    dialog({
                                        content: '<p>' + (/已经签订/.test(res.msg) ? '该下级存在“待签订”的协议，不能再对其发送协议！': res.msg) + '</p>',
                                        cancel: true,
                                        onshow: function () {
                                            setTimeout(() => {
                                                this.close();
                                            }, 5000);
                                        }
                                    }).showModal();
                                }
                            });
                        };


                        Api.getDayLowerContract({userName: $('.proxyName').val(), currentPage: 1, pageSize: 10}, 
                            res => {
                                var flag = false;
                                res = res.result.list;
                                if(res.length === 0) {
                                    sendContract();
                                } else {
                                    for(let i=0, len=res.length; i<len; i++) {
                                        if(res[i].status === '0') {
                                            flag = true;
                                            break;
                                        }
                                    }
                                    if(!flag) {
                                        var repeat = dialog({
                                            content: `<div>温馨提醒</div>
                                                      <p>该下级已签订过契约，请确认是否发送契约？<br/>若新契约被签订，原契约将被替换。</p>`,
                                            button: [{
                                                id: "sendContract",
                                                value: '发送契约',
                                                callback: function() {
                                                    sendContract();
                                                } 
                                            }, {
                                                id: "cancelContract",
                                                value: '取消',
                                                callback: function () {}
                                            }],
                                            onshow: function() {
                                                $('.ui-dialog-footer button[i-id=sendContract]').css({
                                                    'background-color': 'rgba(101, 78, 189, 1)'
                                                });
                                            }
                                        }).showModal();
                                    } else {
                                        flag = false;
                                        sendContract();
                                    }
                                }
                            }
                        );
                        
                        return false;
                    }
                }, {
                    id: "cancelContract",
                    value: '取消',
                    callback: function () {
                        $(document).off('click', '.dutyDeclare');
                    }
                }],
                onshow: function () {
                    var that = this;
                    let lowerRuleType = me.ruleType;
                    let limitInput = lowerRuleType == 1 ? 10000 : 1;
                    $('.ui-dialog-footer button[i-id=sendContract]').css({
                        'background-color': 'rgba(101, 78, 189, 1)',
                    });
                    $('[id="content:lctCreateButton"] p .moneyStartDate').datetimepicker({
                        format: 'Y-m-d',
                        lang: 'zh',
                        minDate: new Date(me.minLowerDayStartDate || '2016-06-06'),
                    });
                    $(document).off('click').on('click', '.dutyDeclare', function (e) {
                        e.stopPropagation();
                        var dutyDeclare = dialog({
                            id: 'dutyDeclare',
                            title: '免责声明',
                            align: 'right top',
                            width: Contract.dayDialogWidth,
                            height: 'auto',
                            // quickClose: true,
                            content: me.dutyDayDeclareText(),
                            button: [{
                                id: 'agreeBtn',
                                value: '同意',
                                callback: function () {
                                    that.showModal();
                                    $('.dutyDetail>input[type="checkbox"]').prop('checked', true);
                                }
                            }, {
                                id: 'unAgreeBtn',
                                value: '返回',
                                callback: function () {
                                    that.showModal($('#alignDialog')[0]);
                                }
                            }],
                            onshow: function () {
                                $('.ui-dialog-footer button[i-id=agreeBtn]').css({
                                    'background-color': 'rgba(101, 78, 189, 1)'
                                });
                            },
                            onclose: function () {
                                that.showModal($('#alignDialog')[0]);
                            },
                        });
                        that.close();
                        dutyDeclare.showModal($('#alignDialog')[0]);
                    });
                    $(document).on('click', '.contractModel .model1,.contractModel .model2', function (e) {
                        let proxyName = $('[id="content:lctCreateButton"] input.proxyName').val();
                        let moneyStartDate = $('[id="content:lctCreateButton"] p .moneyStartDate').val();
                        let cancalCondition = $('.cancalCondition textarea').val();
                        let checked = $('p.dutyDetail > input[type="checkbox"]').prop('checked');
                        lowerRuleType = $(this).attr('ruleType');
                        setTimeout(() => {
                            if (lowerRuleType == 1) {
                                that.content(content1);
                                $('[id="content:lctCreateButton"] input.proxyName').val(proxyName);
                                $('[id="content:lctCreateButton"] p .moneyStartDate').datetimepicker({
                                    format: 'Y-m-d',
                                    lang: 'zh',
                                    minDate: new Date(me.minLowerDayStartDate || '2016-06-06'),
                                });
                                $('[id="content:lctCreateButton"] p .moneyStartDate').val(moneyStartDate);
                                $('.cancalCondition textarea').val(cancalCondition);
                                $('p.dutyDetail > input[type="checkbox"]').prop('checked', checked);
                            } else {
                                that.content(content2);
                                $('[id="content:lctCreateButton"] input.proxyName').val(proxyName);
                                $('[id="content:lctCreateButton"] p .moneyStartDate').datetimepicker({
                                    format: 'Y-m-d',
                                    lang: 'zh',
                                    minDate: new Date(me.minLowerDayStartDate || '2016-06-06'),
                                });
                                $('[id="content:lctCreateButton"] p .moneyStartDate').val(moneyStartDate);
                                $('.cancalCondition textarea').val(cancalCondition);
                                $('p.dutyDetail > input[type="checkbox"]').prop('checked', checked);
                            }
                        }, 200);
                        that.lowerRuleType = lowerRuleType;
                        $(this).addClass('on').siblings('.model').removeClass('on');
                    });
                    $('.contractModel .model.on').trigger('click');
                    //规则加减
                    var numToCn = {
                        0: '一',
                        1: '二',
                        2: '三',
                        3: '四',
                        4: '五'
                    };
                    var rulesCount = {
                        1: 0,
                        2: 0,
                    };
                    $(document).on('click', '.createDayLower p.ruleFlag .addRule', function () {
                        $('.createDayLower p.ruleFlag .addRuleFirst').trigger('click');
                    });
                    $(document).on('click', '.createDayLower p.ruleFlag .addRuleFirst', function (e) {
                        if (rulesCount[lowerRuleType] >= 4) {
                            return;
                        }
                        rulesCount[lowerRuleType]++;
                        $(this).parent('.ruleFlag').parent('.ruleFlagWrap').append(`<p class="ruleFlag"><span>契约规则${numToCn[rulesCount[lowerRuleType]]}：</span><span>日投注额</span><em class="m0_4">≥</em><input type="number" min="${limitInput}" max="999999999" onblur="value<${limitInput}?value=${limitInput}:value" name="betMoney" class="dayBetMoneyOne m0_4"><em>元，且活跃人数</em><em class="m0_4">≥</em><input type="number" min="1" onblur="value<1?value=1:value" name="lostMoney" class="lostMoneyOne m0_4"><em>人，日工资</em>
                        ${ lowerRuleType == 1?`<input name="dvdPerBonus" type="number" min="1" max="${me.myMaxBonus}" onblur="value>${me.myMaxBonus}?value=${me.myMaxBonus}:(value<1?value=1:value)" class="dvdPerOne m0_4"><em>元/万</em>`
                        :`<select name="dvdPerBonusSelect"><option value="">请选择</option>${me.ratioOptions(me.myMaxDayRatio, '')}</select>`}
                        <button class="m0_4 addRule" style="display:${rulesCount[lowerRuleType]==4?'none':'inline-block'};">+</button><button class="m0_4 reduceRule">-</button></p>`);
                        $('.createDayLower p.ruleFlag').each(function (index, item) {
                            $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                        });
                        if (lowerRuleType == 1) {
                            content1 = $('[id="content:lctCreateButton"]').html();
                        } else {
                            content2 = $('[id="content:lctCreateButton"]').html();
                        }
                    });

                    $(document).on('click', '.createDayLower p.ruleFlag .reduceRule', function (e) {
                        rulesCount[lowerRuleType] == 4 && $(this).parent('.ruleFlag').index() < 4 && $(this).parent('.ruleFlag').siblings('.ruleFlag').last().find('.reduceRule').before(`<button class="m0_4 addRule">+</button>`);
                        $(this).parent('.ruleFlag').remove();
                        rulesCount[lowerRuleType]--;
                        $('.createDayLower p.ruleFlag').each(function (index, item) {
                            $(this).find('span:first-child').text(`契约规则${numToCn[index]}：`);
                        });
                        if (lowerRuleType == 1) {
                            content1 = $('[id="content:lctCreateButton"]').html();
                        } else {
                            content2 = $('[id="content:lctCreateButton"]').html();
                        }
                    });
                },
            });
            lctCreateButton.showModal($('#alignDialog')[0]);
        });
    },
    getLowerDayDevidents: function (currentPage, sortName = 'date', sortType = 'desc') {
        var me = this;
        me.initDividentEvent();
        var tab = $('.panel-tab.daySalary');
        var ulData = tab.find('.item[name="lowerDayDevidents"] ul.data');
        var liHtml = '';
        $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] div.queryLowerArea > input.dayStart').datetimepicker({
            format: 'Y-m-d',
            defaultDate: new Date(),
            minDate: new Date(new Date().getTime() - 89 * 24 * 60 * 60 * 1000),
            lang: 'zh',
            value: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] input.dayStart').val() || new Date(new Date().getTime() - 7 * 24 * 3600 * 1000)
        });
        $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] div.queryLowerArea > input.dayEnd').datetimepicker({
            format: 'Y-m-d',
            defaultDate: new Date(),
            maxDate: new Date(),
            lang: 'zh',
            value: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] input.dayEnd').val() || new Date()
        });
        $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] div.queryLowerArea > span.queryLowerArea_six').off('click').on('click', function (e) {
            Api.getLowerBonusDayList({
                startDate: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] input.dayStart').val(),
                endDate: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] input.dayEnd').val(),
                actionStatusDetail: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] div.queryLowerArea > select.queryLowerArea_five').val(),
                userName: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] div.queryLowerArea > input.lowerDvdInputName').val(),
                currPage: currentPage,
                pageSize: 10,
                sortName: sortName,
                sortType: sortType,
            }, function (res) {
                if (res.status == 404) {
                    return;
                }
                if (res.code == 1) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close();
                            }, 3000);
                        }
                    }).showModal();
                    return;
                }
                if (res.code == 1001) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close();
                            }, 3000);
                        }
                    }).showModal();
                    return;
                }

                $('#admin_report > div.panel-tab.daySalary > div:nth-child(4) > div.clearfix.dvdLowerResult > div > span.receivedDvdLower').text(res.result.bonusedAmount);
                $('#admin_report > div.panel-tab.daySalary > div:nth-child(4) > div.clearfix.dvdLowerResult > div > span.frozenMoneyLower').text(res.result.freezeAmount);
                var list = res.result.list || [];

                function renderHtml() {
                    if (list.length != 0) {
                        liHtml = list.map(function (item, index) {
                            if (item.actionStatusDetail == 0) {
                                return `<li>
                                    <span class="w_p4"><input type="checkbox" idval="${item.id}"></span>
                                    <span class="w_p11">${item.lowerUserName}</span>
                                    <span class="w_p11">${item.date}</span>
                                    <span class="w_p11">${item.betAmount}</span>
                                    <span class="w_p11">${item.activeUserCount}</span>
                                    <span class="w_p11 bonusRatio" contractNo="${item.agreementNo}">${item.bonusRatio == 0?'---':item.bonusRatio>1?`${item.bonusRatio}元/万`:`${(item.bonusRatio*100).toFixed(2)}%`}</span>
                                    <span class="w_p11">${item.betAmountReal?item.betAmountReal:'0'}</span>
                                    <span class="w_p11 bonusAmount" bonusRatio="${item.bonusRatio}" tip="${item.computeDetailInfo}" betAmount="${item.betAmount}" contractNo="${item.agreementNo}">${item.bonusAmount?item.bonusAmount:'0'}</span>
                                    <span class="w_p11">${Contract.dvdLowerStatus[item.actionStatusDetail]}</span>
                                    <span class="w_p8"><em class="sendLowerDvd" style="padding-left:7px; padding-right:7px;" idval="${item.id}">${item.betAmount?Contract.dvdDayLowerStatusMani[item.actionStatusDetail]:'--'}</em></span>
                                </li>`;
                            }
                            return `<li>
                                    <span class="w_p4"><input type="checkbox" disabled idval="${item.id}"></span>
                                    <span class="w_p11">${item.lowerUserName}</span>
                                    <span class="w_p11">${item.date}</span>
                                    <span class="w_p11">${item.betAmount}</span>
                                    <span class="w_p11">${item.activeUserCount}</span>
                                    <span class="w_p11 bonusRatio" contractNo="${item.agreementNo}">${item.bonusRatio == 0?'---':item.bonusRatio>1?`${item.bonusRatio}元/万`:`${(item.bonusRatio*100).toFixed(2)}%`}</span>
                                    <span class="w_p11" bonusRatio="${item.bonusRatio}" tip="${item.computeDetailInfo}" betAmount="${item.betAmount}" contractNo="${item.agreementNo}">${item.betAmountReal?item.betAmountReal:'0'}</span>
                                    <span class="w_p11 bonusAmount" bonusRatio="${item.bonusRatio}" tip="${item.computeDetailInfo}" betAmount="${item.betAmount}" contractNo="${item.agreementNo}">${item.bonusAmount?item.bonusAmount:'0'}</span>
                                    <span class="w_p11">${Contract.dvdLowerStatus[item.actionStatusDetail]}</span>
                                    <span class="w_p8"><em style="padding-left:7px; padding-right:7px;" idval="${item.id}">${item.betAmount?Contract.dvdDayLowerStatusMani[item.actionStatusDetail]:'--'}</em></span>
                                </li>`
                            }).join('') + '<li><span class="w_p88 textLeft"><em class="selectAll">全&nbsp;&nbsp;选</em><em class="reverseSelect">反&nbsp;&nbsp;选</em></span><span class="w_p12"><em class="batchSendLowerDvd">批量发放日工资</em></span></li>';
                    } else {
                        liHtml = '';
                    }
                    ulData.html(liHtml);
                }

                renderHtml();

                //排序
                $('#admin_report > div.panel-tab.daySalary > div:nth-child(4) > div.list > ul.head > li > span.ldd').off('click').on('click', function () {

                    if ($(this).find('span.up').hasClass('on')) {
                        localStorage.setItem('sortType', 'desc');
                        $(this).find('span.up').removeClass('on');
                        $(this).find('span.down').addClass('on');
                    } else if ($(this).find('span.down').hasClass('on')) {
                        localStorage.setItem('sortType', 'asc');
                        $(this).find('span.down').removeClass('on');
                        $(this).find('span.up').addClass('on');
                    } else {
                        localStorage.setItem('sortType', 'desc');
                        $(this).find('span.up').removeClass('on');
                        $(this).find('span.down').addClass('on');
                    }
                    $(this).siblings().find('span.on').removeClass('on');
                    switch ($(this).attr('rel')) {
                        case 'date':
                            localStorage.setItem('sortName', 'date');
                            me.getLowerDayDevidents(currentPage, 'date', localStorage.getItem('sortType'));
                            break;
                        case 'betAmount':
                            localStorage.setItem('sortName', 'betAmount');
                            me.getLowerDayDevidents(currentPage, 'betAmount', localStorage.getItem('sortType'));
                            break;
                        case 'activeUserCount':
                            localStorage.setItem('sortName', 'activeUserCount');
                            me.getLowerDayDevidents(currentPage, 'activeUserCount', localStorage.getItem('sortType'));
                            break;
                        case 'bonusRatio':
                            localStorage.setItem('sortName', 'bonusRatio');
                            me.getLowerDayDevidents(currentPage, 'bonusRatio', localStorage.getItem('sortType'));
                            break;
                        case 'bonusAmount':
                            localStorage.setItem('sortName', 'bonusAmount');
                            me.getLowerDayDevidents(currentPage, 'bonusAmount', localStorage.getItem('sortType'));
                            break;
                        case 'betAmountReal':
                            localStorage.setItem('sortName', 'betAmountReal');
                            me.getLowerDayDevidents(currentPage, 'betAmountReal', localStorage.getItem('sortType'));
                            break;
                        default:
                            break;
                    }
                    selectAll();
                    fanSelect();
                    sendLowerDvd();
                    batchSendLowerDvd();
                    bonusAmountPop();
                    bonusRatioPop();
                });

                //全选
                function selectAll() {
                    $('.item[name="lowerDayDevidents"] .listhead input[type="checkbox"]').on('change', function (e) {
                        if ($(this).prop('checked')) {
                            $('.item[name="lowerDayDevidents"] .data input[type="checkbox"]').not(':disabled').each(function (index, item) {

                                $(this).prop('checked', true);

                            });
                        } else {
                            $('.item[name="lowerDayDevidents"] .data input[type="checkbox"]').not(':disabled').each(function (index, item) {

                                $(this).prop('checked', false);

                            });
                        }
                    });
                    $('.item[name="lowerDayDevidents"] .selectAll').off('click').on('click', function (event) {
                        event.stopPropagation();
                        $('.item[name="lowerDayDevidents"] input[type="checkbox"]').not(':disabled').each(function (index, item) {

                            $(this).prop('checked', true);

                        });
                    });
                }
                selectAll();

                function fanSelect() {
                    $('.item[name="lowerDayDevidents"] .reverseSelect').off('click').on('click', function (event) {
                        event.stopPropagation();
                        $('.item[name="lowerDayDevidents"] .data input[type="checkbox"]').not(':disabled').each(function (index, item) {
                            $('.item[name="lowerDayDevidents"] .listhead input[type="checkbox"]').prop("checked", false);

                            if ($(this).is(':checked')) {
                                $(this).prop('checked', false);
                            } else {
                                $(this).prop('checked', true);
                            }

                        });
                    });
                }
                //反选
                fanSelect();
                //发放分红弹窗
                function sendLowerDvd() {
                    $('.item[name="lowerDayDevidents"] .sendLowerDvd').off('click').on('click', function (e) {
                        e.stopPropagation();
                        var $this = $(this);
                        Api.releaseSalaryById({
                            id: $(this).attr('idval')
                        }, function (res) {

                            if (res.code == -2) {
                                var sendLowerDvdFail = dialog({
                                    id: 'sendLowerDvdFail',
                                    title: '余额不足',
                                    content: '<p>对不起，您的余额不足，为保证您可以顺利的为下级发放分红建议您充值后再进行发放。</p>',
                                    button: [{
                                        value: '立即充值',
                                        callback: function () {
                                            window.location.href = window.location.protocol + "//" + window.location.host + '/static/sobet/transaction-center.html#recharge';
                                        }
                                    }]
                                }).showModal();
                                $this.parent().parent('li').find('input[type="checkbox"]').prop('checked', false);
                            } else if (res.code == 1) {
                                var sendLowerDvdSuc = dialog({
                                    id: 'sendLowerDvdSuc',
                                    content: '<p>发送成功</p>',
                                    onshow: function () {
                                        setTimeout(() => {
                                            this.close();
                                        }, 2000);
                                    }
                                }).showModal();
                                $this.parent().parent('li').find('input[type="checkbox"]').prop('checked', false);
                                $this.parent().parent('li').find('input[type="checkbox"]').prop('disabled', true); //发送成功后不能再选，防止多选时被选到
                                Api.getLowerBonusDayList({
                                    startDate: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] input.dayStart').val(),
                                    endDate: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] input.dayEnd').val(),
                                    actionStatusDetail: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] div.queryLowerArea > select.queryLowerArea_five').val(),
                                    userName: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] div.queryLowerArea > input.lowerDvdInputName').val(),
                                    currPage: currentPage,
                                    pageSize: 10,
                                    sortName: sortName,
                                    sortType: sortType,
                                }, function (res) {
                                    if (res.status == 404) {
                                        return;
                                    }
                                    if (res.code == 1) {
                                        dialog({
                                            content: `<p>${res.msg}</p>`,
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 3000);
                                            }
                                        }).showModal();
                                        return;
                                    }
                                    if (res.code == 1001) {
                                        dialog({
                                            content: `<p>${res.msg}</p>`,
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 3000);
                                            }
                                        }).showModal();
                                        return;
                                    }

                                    $('#admin_report > div.panel-tab.daySalary > div:nth-child(4) > div.clearfix.dvdLowerResult > div > span.receivedDvdLower').text(res.result.releasedAmount);
                                    $('#admin_report > div.panel-tab.daySalary > div:nth-child(4) > div.clearfix.dvdLowerResult > div > span.frozenMoneyLower').text(res.result.unreleaseAmount);
                                });
                                me.getLowerDayDevidents(currentPage);
                            } else {
                                var sendLowerDvd = dialog({
                                    id: 'sendLowerDvd',
                                    content: `<p>${res.msg}</p>`,
                                    onshow: function () {
                                        setTimeout(() => {
                                            this.close();
                                        }, 2000);
                                    }
                                }).showModal();
                                $this.parent().parent('li').find('input[type="checkbox"]').prop('checked', false); //恢复未选中状态
                            }
                        });
                    });
                }
                sendLowerDvd();
                //批量发送
                function batchSendLowerDvd() {
                    $('.item[name="lowerDayDevidents"] .batchSendLowerDvd').off('click').on('click', function (e) {
                        var batchIds = [];
                        $('.item[name="lowerDayDevidents"] .data input[type="checkbox"]').each(function (index, item) {
                            if ($(this).prop('checked')) {
                                batchIds.push($(this).attr('idval'));
                            }
                        });
                        if (batchIds.length == 0) {
                            dialog({
                                content: '<p>请选择要发送的日工资选项</p>',
                                onshow: function () {
                                    setTimeout(() => {
                                        this.close();
                                    }, 3000);
                                }
                            }).showModal();
                            return;
                        }
                        Api.batchReleaseSalaryById({
                            ids: batchIds.join(',')
                        }, function (res) {
                            if (res.code == -2) {
                                var batchSendLowerDvdFail = dialog({
                                    id: 'batchSendLowerDvdFail',
                                    title: '余额不足',
                                    content: '<p>对不起，您的余额不足，为保证您可以顺利的为下级发放分红建议您充值后再进行发放。</p>',
                                    button: [{
                                        value: '立即充值',
                                        callback: function () {
                                            window.location.href = window.location.protocol + "//" + window.location.host + '/static/sobet/transaction-center.html#recharge';
                                        }
                                    }]
                                }).showModal();
                            } else if (res.code == 1) {
                                var batchSendLowerDvdSuc = dialog({
                                    id: 'batchSendLowerDvdSuc',
                                    content: '<p>发送成功</p>',
                                    onshow: function () {
                                        setTimeout(() => {
                                            this.close();
                                        }, 2000);
                                    }
                                }).showModal();
                                Api.getLowerBonusDayList({
                                    startDate: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] input.dayStart').val(),
                                    endDate: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] input.dayEnd').val(),
                                    actionStatusDetail: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] div.queryLowerArea > select.queryLowerArea_five').val(),
                                    userName: $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] div.queryLowerArea > input.lowerDvdInputName').val(),
                                    currPage: currentPage,
                                    pageSize: 10,
                                    sortName: sortName,
                                    sortType: sortType,
                                }, function (res) {
                                    if (res.status == 404) {
                                        return;
                                    }
                                    if (res.code == 1) {
                                        dialog({
                                            content: `<p>${res.msg}</p>`,
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 3000);
                                            }
                                        }).showModal();
                                        return;
                                    }
                                    if (res.code == 1001) {
                                        dialog({
                                            content: `<p>${res.msg}</p>`,
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 3000);
                                            }
                                        }).showModal();
                                        return;
                                    }

                                    $('#admin_report > div.panel-tab.daySalary > div:nth-child(4) > div.clearfix.dvdLowerResult > div > span.receivedDvdLower').text(res.result.releasedAmount);
                                    $('#admin_report > div.panel-tab.daySalary > div:nth-child(4) > div.clearfix.dvdLowerResult > div > span.frozenMoneyLower').text(res.result.unreleaseAmount);
                                });
                                me.getLowerDayDevidents(currentPage);
                            } else {
                                var batchSendLowerDvd = dialog({
                                    id: 'batchSendLowerDvd',
                                    content: `<p>${res.msg}</p>`,
                                    onshow: function () {
                                        setTimeout(() => {
                                            this.close();
                                        }, 2000);
                                    }
                                }).showModal();
                            }
                        });
                    });
                }
                batchSendLowerDvd();
                //点击日工资金额弹窗日工资公式
                function bonusAmountPop() {
                    $('.bonusAmount').off('click').on('click', function (e) {
                        var me = $(this);
                        let content = me.attr('bonusRatio') > 1 ? `投注额每满一万计日工资${me.attr('bonusRatio')}元` : `日工资为投注额的${(me.attr('bonusRatio')*100).toFixed(2)}%`;
                        dialog({
                            quickClose: true,
                            content: `<p>${me.attr('tip')}</p>
                                      <p>满足协议条件，${content}，投注额${me.attr('betAmount')}计日工资${me.text()}元</p>
                            `,
                            onshow: function () {
                                $('.ui-dialog-body').css({
                                    'border': '#f2ea91 solid 2px',
                                    'background': '#fef6e1',
                                });
                            }
                        }).show($(this)[0]);
                    });
                }
                bonusAmountPop();
                //点击分红比例弹出冒泡
                function bonusRatioPop() {
                    $('.bonusRatio').off('click').on('click', function (evt) {
                        var $this = $(this);
                        evt.stopPropagation();
                        evt.preventDefault();
                        dialog({
                            quickClose: true,
                            align: 'left',
                            content: `<p>根据签约协议的规则，您当前的日工资比例为${$(this).text()}</p>
                                      <p class="readContract fr">查看协议</p>`,
                            onshow: function () {
                                $('.ui-dialog-body').css({
                                    'border': '#f2ea91 solid 2px',
                                    'background': '#fef6e1',
                                });
                                $('.readContract').css({
                                    'color': '#01b0ff',
                                    'cursor': 'pointer',
                                    'transform': 'translateY(10px)',
                                });
                                $('.readContract:hover').css({
                                    'text-decoration': 'underline'
                                });
                                $('.readContract').on('click', function (e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    Api.getDayDetailContract({
                                        contractNo: $this.attr('contractNo')
                                    }, function (response) {
                                        if (response.code === '10001') {
                                            dialog({
                                                content: `<p>${response.msg}</p>`,
                                                onshow: function () {
                                                    setTimeout(() => {
                                                        this.close()
                                                    }, 5000);
                                                }
                                            }).showModal();
                                            return;
                                        }
                                        let contractRuleList = response.result.contractRuleList;
                                        let lowerRuleType = response.result.ruleType;
                                        let RuleListHtml = contractRuleList.sort((a, b) => {
                                            return a.ruleSort - b.ruleSort;
                                        }).map((item, index) => {
                                            return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日投注额：≥&nbsp;${item.betMoney}元，且活跃人数:≥&nbsp;${item.activePeople}人，日工资：${lowerRuleType == 1?`${item.daySalary}元/万`:`${(item.bonus*100).toFixed(2)}%`}</p>`;
                                        }).join('');
                                        var showContract = dialog({
                                            id: 'showContract',
                                            fixed: true,
                                            title: '契约签订',
                                            align: 'right top',
                                            width: Contract.dayDialogWidth,
                                            height: 'auto',
                                            // quickClose: true,
                                            content: `
                                                <table  class="m0_auto textCenter"><tbody>
                                                <tr><td>协议签订日期</td><td>${new Date(response.result.contractDate).Format('YYYY-MM-DD')}</td><td>金额起算日期</td><td>${response.result.startDate}</td></tr></tbody></table>
                                                <p class="rules">契约状态：<span class="green">${Contract.statusReflect[response.result.status]}</span></p>
                                                ${RuleListHtml}
                                                <p class="rulesFive" style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''}</span></p>
                                                <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
                                                <p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
                                                <p class="rulesEight">*与上级签订日工资契约，全力保障您的代理日工资！</p>`,
                                            onshow: function () {
                                                var that = this;
                                                // $('.ui-dialog-footer').css({
                                                //     'height': 60
                                                // });
                                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                                    'background-color': 'rgba(115,123,248,1)'
                                                });

                                                $('.ui-dialog-content .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                                    e.stopPropagation();
                                                    var dutyDeclare = dialog({
                                                        id: 'dutyDeclare',
                                                        title: '免责声明',
                                                        width: Contract.dayDialogWidth,
                                                        align: 'right top',
                                                        height: 'auto',
                                                        // quickClose: true,
                                                        cancel: function () {
                                                            that.showModal($('#alignDialog')[0]);
                                                        },
                                                        content: me.dutyDayDeclareText(),
                                                    });
                                                    that.close();
                                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                                });
                                            },
                                        });
                                        showContract.showModal($('#alignDialog')[0]);
                                    });

                                });
                            }
                        }).show($(this)[0]);
                    });
                }
                bonusRatioPop();
                //分页pageSize
                var pageHtml = Q.showPagination(currentPage || 1, res.page.pageSize, null, res.page.totalPage);
                if (res.result.list.length == 0) {
                    $('.daySalary .item[name="lowerDayDevidents"] div.pager').html('<p>暂无数据！</p>');
                } else {
                    $('.daySalary .item[name="lowerDayDevidents"] div.pager').html(pageHtml);
                }
                $('.daySalary .item[name="lowerDayDevidents"] div.pager a').off('click').on('click', function (e) {
                    var currPage = $(this).attr('page');
                    me.getLowerDayDevidents(currPage, localStorage.getItem('sortName'), localStorage.getItem('sortType'));
                });
            });
        });
        $('#admin_report > div.panel-tab.daySalary .item[name="lowerDayDevidents"] div.queryLowerArea > span.queryLowerArea_six').trigger('click');
    },
    getSifanContract: function (currentPage) {
        var me = this;
        var tab = $('.panel-tab.sifan');
        var ulData = tab.find('.item[name="myDayContract"] ul.data');
        var liHtml = '';
        me.alignDialog();
        var contractsWrap = $('.sifan .item[name="myDayContract"] .contractsWrap');
        $('#admin_report > div.panel-tab.sifan > div:nth-child(1) > div.list > ul.head > li.listhead').hide();
        //最近两期契约
        Api.getDayRecentTwoContract({
            currPage: currentPage,
            pageSize: 6
        }, function (res) {
            var rulesContentOne = '';
            var rulesContentTwo = '';
            if (res.result.list.length == 0) {
                return;
            }
            if (res.code == 1001) {
                dialog({
                    content: `<p>${res.msg}</p>`,
                    onshow: function () {
                        setTimeout(() => {
                            this.close();
                        }, 3000);
                    }
                }).showModal();
                return;
            }
            //platform是否平台直签（0平台，1代理）
            me.platform = res.result.list[0]['platform'];
            me.ruleType = res.result.list[0]['ruleType'];
            //我的最高日工资分红比例
            let signedItem = res.result.list.find(item => item.status === "1"); //是否签订flag
            let signedRatioItem = res.result.list.find(item => item.status === "1" && item.ruleType === 2); //比例模式
            let signedBonusItem = res.result.list.find(item => item.status === "1" && item.ruleType === 1); //整额模式
            if (signedRatioItem) {
                me.myMaxDayRatio = Math.max(...signedRatioItem.contractRuleList.map(item => item.bonus));
                me.myMaxBonus = Math.max(...signedRatioItem.contractRuleList.map(item => item.bonus)) * 10000;
            } else if (signedBonusItem) {
                const Salary = Math.max(...signedBonusItem.contractRuleList.map(item => item.daySalary));
                const maxDaySalary =  Salary >= 10 ? Salary : 10;
                me.myMaxDayRatio = Math.floor(maxDaySalary / 10) / 1000;
                me.myMaxBonus = Math.max(...signedBonusItem.contractRuleList.map(item => item.daySalary));
            } else{
                me.myMaxDayRatio = 0.013;
                me.myMaxBonus = 130;
            }
            //下级契约默认开始日期
            me.lowerDayContractStartDate = Math.min(...(res.result.list.map((item, index) => {
                return (new Date(item.createTime)).getTime();
            })));
            //创建下级契约的金额起算日期必须大于等于上级代理的金额起算日期
            me.minLowerDayStartDate = res.result.list.filter((item, index) => item.status == 1)[0] ? res.result.list.filter((item, index) => item.status == 1)[0].startDate : '2016-01-01';
            var contractsWrapContent = res.result.list.map((item, index) => {
                let ruleType = item.ruleType;
                let rulesContent = item.contractRuleList.sort(function (a, b) {
                    return a.ruleSort - b.ruleSort;
                }).slice(0, 2).map((rule, ruleIndex) => {
                    return `<p class="rule ellipsis"><span>契约规则${Contract.numberToCn[rule.ruleSort]}</span><span style="margin-left: 10px;">日投注额：<span>${rule.betMoney}元以上</span><span>活跃人数：<span>${rule.activePeople}人以上</span></span><span>私返：<span>${ruleType === 1?`${rule.daySalary}元/万`:`${(rule.bonus*100).toFixed(2)}%`}</span></span></p>`;
                }).join('');
                if (item.contractRuleList.length > 2) {
                    rulesContent += '<p>...</p>';
                }
                return `<div class="eachCttWrap clearfix" idval="${item.id}">
                            <div class="contractLeft fl"><img src="${Contract.contractLeftSrc[item.status]}" width="70"></div>
                            <div class="contractRight fr">
                                <div class="rulesTopWrap clearfix">
                                    <span class="fl ruleTitle">私返契约</span>
                                    <span class="fr ruleDate">金额起算日期：${item.startDate}</span></div>
                                <div class="rulesContentWrap">
                                    ${rulesContent}
                                </div>
                            </div>
                            <div class="linkCttDetail" idval="${item.id}">查看详情</div>
                            <div class="stampSeal"><img src="${Contract.stampSealSrc[item.status]}" height="100"></div>
                        </div>`;
            }).join('');
            //未签订不能创建新契约
            me.canDayCreatContract = res.result.list.some(function (item, index) {
                return item.status == 0;
            });
            contractsWrap.html(contractsWrapContent);
            //点击最近两期契约弹窗契约详情
            $('.sifan [name="myDayContract"] .contractsWrap>div').off('click').on('click', function (e) {
                var $this = $(this);
                e.stopPropagation();
                e.preventDefault();
                Api.getDayDetailContract({
                    id: $this.attr('idval')
                }, function (response) {
                    if (response.code === '10001') {
                        dialog({
                            content: `<p>${res.msg}</p>`,
                            onshow: function () {
                                setTimeout(() => {
                                    this.close();
                                }, 5000);
                            }
                        }).showModal();
                        return;
                    }
                    let ruleType = response.result.ruleType;
                    let contractRuleList = response.result.contractRuleList;
                    let specialRuleHtml = contractRuleList.filter(item => item.ruleSort == 0).map((item, index) => {
                        return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;日投注额：≥&nbsp;${item.betMoney}元，且活跃人数：≥&nbsp;${item.activePeople}人，私返：${ruleType == 1?`${item.daySalary}元/万`:`${(item.bonus*100).toFixed(2)}%`}</p>`;
                    }).join('');
                    let RuleListHtml = contractRuleList.filter(item => item.ruleSort != 0).sort((a, b) => {
                        return a.ruleSort - b.ruleSort;
                    }).map((item, index) => {
                        return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日投注额：≥&nbsp;${item.betMoney}元，且活跃人数：≥&nbsp;${item.activePeople}人，私返：${ruleType == 1?`${item.daySalary}元/万`:`${(item.bonus*100).toFixed(2)}%`}</p>`;
                    }).join('');

                    //不同状态显示不同契约弹窗
                    var showDayContract;
                    if (response.result.status == 0) {
                        showDayContract = dialog({
                            id: 'showDayContract',
                            fixed: true,
                            title: '契约签订',
                            width: Contract.dayDialogWidth,
                            align: 'right top',
                            height: 'auto',
                            // quickClose: true,
                            content: `<p class="rulesTitle">您的上级：想与您签订契约私返协议</p>
									  <p class="rules">私返契约规则如下：</p>
									  ${RuleListHtml}
                                      ${specialRuleHtml}
									  <p class="rulesFive" style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
									  <p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
									  <p class="rulesEight">*与上级签订私返契约，全力保障您的代理私返！</p>`,
                            button: [{
                                id: 'ruleBtnOne',
                                value: '接受契约',
                                callback: function () {
                                    Api.updateDayContractStatus({
                                        contractId: response.result.id,
                                        status: 1
                                    }, function (res) {
                                        dialog({
                                            content: `<p style="text-align:center">您已接受契约</p>`,
                                            cancel: true,
                                            fixed: true,
                                            width: '200px',
                                            height: '16px',
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 5000);
                                            }
                                        }).showModal();
                                        me.getSifanContract(currentPage);
                                    });
                                }
                            }, {
                                id: 'ruleBtnTwo',
                                value: '拒绝契约',
                                callback: function () {
                                    Api.updateDayContractStatus({
                                        contractId: response.result.id,
                                        status: 5
                                    }, function (res) {
                                        dialog({
                                            content: `<p>您已拒绝契约</p>`,
                                            cancel: true,
                                            fixed: true,
                                            width: '200px',
                                            height: '16px',
                                            onshow: function () {
                                                setTimeout(() => {
                                                    this.close();
                                                }, 5000);
                                            }
                                        }).showModal();
                                        me.getMyDayContract(currentPage);
                                    });
                                }
                            }],
                            onshow: function () {
                                var that = this;
                                $('[i-id="cancel"]').hide();
                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                    'background-color': 'rgba(115,123,248,1)'
                                });

                                $('[id="content:showDayContract"] .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                    e.stopPropagation();
                                    var dutyDeclare = dialog({
                                        id: 'dutyDeclare',
                                        title: '免责声明',
                                        width: Contract.dayDialogWidth,
                                        height: 'auto',
                                        align: 'right top',
                                        // quickClose: true,
                                        content: me.dutyDayDeclareText(),
                                        cancel: function () {
                                            that.showModal($('#alignDialog')[0]);
                                        },
                                        onshow: function () {
                                            $('[i-id="cancel"]').show();
                                        }
                                    });
                                    that.close();
                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                });
                            },
                            onclose() {
                                this.remove();
                            }
                        });
                        showDayContract.showModal($('#alignDialog')[0]);
                    } else {
                        showDayContract = dialog({
                            id: 'showDayContract',
                            fixed: true,
                            title: '契约签订',
                            align: 'right top',
                            width: Contract.dayDialogWidth,
                            height: 'auto',
                            // quickClose: true,
                            content: `
                                      <table class="m0_auto textCenter"><tbody>
                                      <tr><td>协议签订日期</td><td>${response.result.contractDate?new Date(response.result.contractDate).Format('YYYY-MM-DD'):'未签订'}</td><td>金额起算日期</td><td>${response.result.startDate}</td></tr></tbody></table>
									  <p class="rules">契约状态：<span class="green">${Contract.statusReflect[response.result.status]}</span></p>
									  ${RuleListHtml}
                                      ${specialRuleHtml}
									  <p class="rulesFive" style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''||''}</span></p>
									  <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
									  <p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
									  <p class="rulesEight">*与上级签订私返契约，全力保障您的代理私返！</p>`,
                            onshow: function () {
                                var that = this;
                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                    'background-color': 'rgba(115,123,248,1)'
                                });

                                $('[id="content:showDayContract"] .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                    e.stopPropagation();
                                    var dutyDeclare = dialog({
                                        id: 'dutyDeclare',
                                        title: '免责声明',
                                        align: 'right top',
                                        width: Contract.dayDialogWidth,
                                        height: 'auto',
                                        // quickClose: true,
                                        cancel: function () {
                                            that.showModal($('#alignDialog')[0]);
                                            this.remove();
                                        },
                                        content: me.dutyDayDeclareText(),
                                    });
                                    that.close();
                                    dutyDeclare.showModal($('#alignDialog')[0]);
                                });
                            },
                            onclose() {
                                this.remove();
                            }
                        });
                        showDayContract.showModal($('#alignDialog')[0]);
                    }
                });
            });

            //分页
            var pageHtml = Q.showPagination(currentPage || 1, res.result.pageSize, null, res.result.totalPage);
            if (res.result.list.length == 0) {
                $('.sifan .item[name="myDayContract"] div.pager').html('<p>暂无数据!</p>');
            } else {
                $('.sifan .item[name="myDayContract"] div.pager').html(pageHtml);
            }
            $('.sifan .item[name="myDayContract"] div.pager a').off('click').on('click', function (e) {
                var currPage = $(this).attr('page');
                me.getSifanContract(currPage);
            });
        });
    },
    getSifan: function (currentPage, sortName = 'date', sortType = 'desc') {
        var me = this;
        me.initDividentEvent();
        var tab = $('.panel-tab.sifan');
        var ulData = tab.find('.item[name="myDayDevident"] ul.data');
        var liHtml = '';
        $('.sifan .item[name="myDayDevident"] .queryArea .dayStart').datetimepicker({
            format: 'Y-m-d',
            defaultDate: new Date(),
            minDate: new Date(new Date().getTime() - 89 * 24 * 60 * 60 * 1000), //限制只能查90天
            lang: 'zh',
            value: $('.item[name="myDayDevident"] .queryArea .dayStart').val() || new Date(new Date().getTime() - 7 * 24 * 3600 * 1000),
        });
        $('.sifan .item[name="myDayDevident"] .queryArea .dayEnd').datetimepicker({
            format: 'Y-m-d',
            defaultDate: new Date(),
            maxDate: new Date(),
            lang: 'zh',
            value: $('.item[name="myDayDevident"] .queryArea .dayEnd').val() || new Date(),
        });
        $('#admin_report > div.panel-tab.sifan  div.queryArea > span.queryArea_six').off('click').on('click', function (e) {

            Api.getBonusDayList({
                startDate: $('#admin_report > div.panel-tab.sifan > div:nth-child(2) > div.queryArea > input.dayStart').val(),
                endDate: $('#admin_report > div.panel-tab.sifan > div:nth-child(2) > div.queryArea > input.dayEnd').val(),
                actionStatusDetail: $('#admin_report > div.panel-tab.sifan > div:nth-child(2) > div.queryArea > select.queryArea_five').val(),
                currPage: currentPage,
                pageSize: 10,
                sortName: sortName,
                sortType: sortType,
            }, function (res) {
                if (res.status == 404) {
                    return;
                }
                if (res.code == 1001) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close();
                            }, 3000);
                        }
                    }).showModal();
                    return;
                }
                if (res.code == 1) {
                    dialog({
                        content: `<p>${res.msg}</p>`,
                        onshow: function () {
                            setTimeout(() => {
                                this.close();
                            }, 3000);
                        }
                    }).showModal();
                    return;
                }

                $('#admin_report > div.panel-tab.sifan > div:nth-child(2) > div.clearfix.dvdResult > div > span.receivedDvd').text(res.result.bonusedAmount);
                $('#admin_report > div.panel-tab.sifan > div:nth-child(2) > div.clearfix.dvdResult > div > span.frozenMoney').text(res.result.freezeAmount);
                var list = res.result.list || [];

                function renderHtml() {
                    liHtml = list.map(function (item, index) {
                        return `<li>
                            <span class="w_p20">${item.date}</span>
                            <span class="w_p16" style="width: 13.3%;">${item.betAmount}</span>
                            <span class="w_p16" style="width: 13.3%;">${item.activeUserCount}</span>
                            <span class="w_p16 bonusRatio" style="width: 13.3%;" contractId="${item.id}" contractNo="${item.agreementNo}">${item.bonusRatio == 0?'---':item.bonusRatio>1?`${item.bonusRatio}元/万`:`${(item.bonusRatio*100).toFixed(2)}%`}</span>
                            <span class="w_p16" style="width: 13.3%;">${item.betAmountReal}</span>
                            <span class="w_p16 bonusAmount" style="width: 13.3%;" bonusRatio="${item.bonusRatio}" tip="${item.computeDetailInfo}" betAmount="${item.betAmount}" contractNo="${item.agreementNo}">${item.bonusAmount?item.bonusAmount:'0'}</span>
                            <span class="w_p16 actionStatusDetail" style="width: 13.3%;">${Contract.dvdStatus[item.actionStatusDetail]}</span></li>`;
                    }).join('');
                    ulData.html(liHtml);
                }
                renderHtml();
                //排序
                $('#admin_report > div.panel-tab.sifan > div:nth-child(2) > div.list > ul.head > li > span.dvd').off('click').on('click', function () {
                    if ($(this).find('span.up').hasClass('on')) {
                        localStorage.setItem('sortType', 'desc');
                        $(this).find('span.up').removeClass('on');
                        $(this).find('span.down').addClass('on');
                    } else if ($(this).find('span.down').hasClass('on')) {
                        localStorage.setItem('sortType', 'asc');
                        $(this).find('span.down').removeClass('on');
                        $(this).find('span.up').addClass('on');
                    } else {
                        localStorage.setItem('sortType', 'desc');
                        $(this).find('span.up').removeClass('on');
                        $(this).find('span.down').addClass('on');
                    }
                    $(this).siblings().find('span.on').removeClass('on');
                    switch ($(this).attr('rel')) {
                        case 'date':
                            localStorage.setItem('sortName', 'date');
                            me.getMyDayDevident(currentPage, 'date', localStorage.getItem('sortType'));
                            break;
                        case 'betAmount':
                            localStorage.setItem('sortName', 'betAmount');
                            me.getMyDayDevident(currentPage, 'betAmount', localStorage.getItem('sortType'));
                            break;
                        case 'activeUserCount':
                            localStorage.setItem('sortName', 'activeUserCount');
                            me.getMyDayDevident(currentPage, 'activeUserCount', localStorage.getItem('sortType'));
                            break;
                        case 'bonusRatio':
                            localStorage.setItem('sortName', 'bonusRatio');
                            me.getMyDayDevident(currentPage, 'bonusRatio', localStorage.getItem('sortType'));
                            break;
                        case 'bonusAmount':
                            localStorage.setItem('sortName', 'bonusAmount');
                            me.getMyDayDevident(currentPage, 'bonusAmount', localStorage.getItem('sortType'));
                            break;
                        case 'betAmountReal':
                            localStorage.setItem('sortName', 'betAmountReal');
                            me.getMyDayDevident(currentPage, 'betAmountReal', localStorage.getItem('sortType'));
                            break;
                        default:
                            break;
                    }
                    bonusAmountPop();
                    bonusRatioPop();
                });
                //点击分红金额弹窗分红公式
                function bonusAmountPop() {
                    $('.bonusAmount').click(function (e) {
                        var me = $(this);
                        let content = me.attr('bonusRatio') > 1 ? `投注额每满一万计私返${me.attr('bonusRatio')}元` : `私返为投注额的${(me.attr('bonusRatio')*100).toFixed(2)}%`;
                        dialog({
                            quickClose: true,
                            align: 'left',
                            content: `<p>${me.attr('tip')}</p>
                        <p>满足协议条件,${content}，投注额${me.attr('betAmount')}计私返${me.text()}元</p>
                        `,
                            onshow: function () {
                                $('.ui-dialog-body').css({
                                    'border': '#f2ea91 solid 2px',
                                    'background': '#fef6e1',
                                });
                            }
                        }).show($(this)[0]);
                    });
                }
                bonusAmountPop();
                //点击分红比例弹出冒泡
                function bonusRatioPop() {
                    $('.bonusRatio').off('click').on('click', function (evt) {
                        var $this = $(this);
                        evt.stopPropagation();
                        evt.preventDefault();
                        dialog({
                            quickClose: true,
                            content: `<p>根据签约协议的规则，您当前的私返比例为${$(this).text()}</p>
                                      <p class="readContract fr">查看协议</p>`,
                            onshow: function () {
                                $('.ui-dialog-body').css({
                                    'border': '#f2ea91 solid 2px',
                                    'background': '#fef6e1',
                                });
                                $('.readContract').css({
                                    'color': '#01b0ff',
                                    'cursor': 'pointer',
                                    'transform': 'translateY(10px)',
                                });
                                $('.readContract:hover').css({
                                    'text-decoration': 'underline'
                                });
                                $('.readContract').on('click', function (e) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    Api.getDayDetailContract({
                                        contractNo: $this.attr('contractNo')
                                    }, function (response) {
                                        if (response.code === '10001') {
                                            dialog({
                                                content: `<p>${response.msg}</p>`,
                                                onshow: function () {
                                                    setTimeout(() => {
                                                        this.close()
                                                    }, 5000);
                                                }
                                            }).showModal();
                                            return;
                                        }
                                        let contractRuleList = response.result.contractRuleList;
                                        let lowerRuleType = response.result.ruleType;
                                        let specialRuleHtml = contractRuleList.filter(item => item.ruleSort == 0).map((item, index) => {
                                            return `<p class="rulesP" style="text-indent:84px;">特殊规则&nbsp;&nbsp;&nbsp;&nbsp;日投注额：≥&nbsp;${item.betMoney}元，且活跃人数：≥&nbsp;${item.activePeople}人，私返：${lowerRuleType == 1?`${item.daySalary}元/万`:`${(item.bonus*100).toFixed(2)}%`}</p>`;
                                        }).join('');
                                        let RuleListHtml = contractRuleList.filter(item => item.ruleSort != 0).sort((a, b) => {
                                            return a.ruleSort - b.ruleSort;
                                        }).map((item, index) => {
                                            return `<p class="rulesP">规则${Contract.numberToCn[item.ruleSort]}&nbsp;&nbsp;&nbsp;&nbsp;日投注额：≥&nbsp;${item.betMoney}元，且活跃人数：≥&nbsp;${item.activePeople}人，私返：${lowerRuleType == 1?`${item.daySalary}元/万`:`${(item.bonus*100).toFixed(2)}%`}</p>`;
                                        }).join('');
                                        var showContract = dialog({
                                            id: 'showContract',
                                            fixed: true,
                                            title: '契约签订',
                                            width: Contract.dayDialogWidth,
                                            height: 'auto',
                                            align: 'right top',
                                            // quickClose: true,
                                            content: `
                                                <table  class="m0_auto textCenter"><tbody>
                                                <tr><td>协议签订日期</td><td>${new Date(response.result.contractDate).Format('YYYY-MM-DD')}</td><td>金额起算日期</td><td>${response.result.startDate}</td></tr></tbody></table>
                                                <p class="rules">契约状态：<span class="green">${Contract.statusReflect[response.result.status]}</span></p>
                                                ${RuleListHtml}
                                                ${specialRuleHtml}
                                                <p class="rulesFive" style="display:${response.result.cancelContractCondition?"block":"none"};">解约条件&nbsp;&nbsp;&nbsp;&nbsp;<span>${response.result.cancelContractCondition||''}</span></p>
                                                <p class="rulesSix">金额起算日期&nbsp;&nbsp;&nbsp;&nbsp;${response.result.startDate}</p>
                                                <p class="rulesSeven">请详细阅读&nbsp;&nbsp;&nbsp;&nbsp;<span class="dutyDeclare">契约免责声明</span></p>
                                                <p class="rulesEight">*与上级签订私返契约，全力保障您的代理私返！</p>`,
                                            onshow: function () {
                                                var that = this;
                                                $('.ui-dialog-footer button[i-id=ruleBtnOne]').css({
                                                    'background-color': 'rgba(115,123,248,1)'
                                                });

                                                $('.ui-dialog-content .rulesSeven .dutyDeclare').off('click').on('click', function (e) {
                                                    e.stopPropagation();
                                                    var dutyDeclare = dialog({
                                                        id: 'dutyDeclare',
                                                        title: '免责声明',
                                                        align: 'right top',
                                                        width: Contract.dayDialogWidth,
                                                        height: 'auto',
                                                        cancel: function () {
                                                            that.showModal($('#alignDialog')[0]);
                                                        },
                                                        content: me.dutyDayDeclareText(),
                                                    });
                                                    that.close();
                                                    dutyDeclare.showModal($('#alignDialog')[0]);

                                                });
                                            },
                                            onclose() {
                                                this.remove();
                                            }
                                        });
                                        showContract.showModal($('#alignDialog')[0]);
                                    });

                                });
                            }
                        }).show($(this)[0]);
                    });
                }
                bonusRatioPop();
                //分页
                var pageHtml = Q.showPagination(currentPage || 1, res.page.pageSize, null, res.page.totalPage);
                if (res.result.list.length == 0) {
                    $('.sifan .item[name="myDayDevident"] div.pager').html('<p>暂无数据!</p>');
                } else {
                    $('.sifan .item[name="myDayDevident"] div.pager').html(pageHtml);
                }
                $('.sifan .item[name="myDayDevident"] div.pager a').off('click').on('click', function (e) {
                    var currPage = $(this).attr('page');
                    me.getSifan(currPage, localStorage.getItem('sortName'), localStorage.getItem('sortType'));
                });
            });
        });
        $('#admin_report > div.panel-tab.sifan  div.queryArea > span.queryArea_six').trigger('click');
    },
};