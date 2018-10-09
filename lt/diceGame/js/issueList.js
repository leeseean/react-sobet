let IssueList = IssueList || {};
IssueList = {
    issue: '', //当前奖期
    oddsObj: null, //从后台获取的赔率json
    socketMsg: null, //socket推送的获奖信息
    getIssueInfoCount: 0, //防止多次促发issueinfo接口 flag
    lastIssueBetCodes: {}, //过去1期投注的号码，根据这个开奖的时候判断中不中奖来判断刷不刷新余额
    init() {
        this.getWinResultsList();
        this.getIssueInfo();
        this.getRecent30Issue();
        this.renderOdds(1);
        //模拟滚动条
        let r30ScrollUl = $('.diceRecent .diceRecentDetail ul');
        let r30ScrollBar = $('.diceRecent .diceRecentDetail .r30ScrollBar'); //滚动条
        r30ScrollUl.scroll(function () {
            r30ScrollBar.css({ //460为scrollTop的最大值,190为模拟滚动条在底部的top值
                'top': (this.scrollTop / 460) * 190 + 4,
            });
        });

    },
    getWinResultsList() {
        Api.getWinResultsList(function (res) {
            var winResultsList = $('.winResultsList');
            var winNoticeWrap = $('.winResultsList>.winLine .winNoticeWrap');
            if (res.status == 404 || res.code == 1001 || (res && res.result && res.result.length == 0)) {
                winResultsList.hide();
            } else {
                winResultsList.show();
            }

            winNoticeWrap.html('');

            var results = res.result;
            var html = '<span style="float:left">';
            html += results.map(function (item, index) {
                var time = Math.floor((Number((new Date().getTime())) - Number(item.winTime)) / 60000);
                time = time > 60 ? Math.floor(time / 60) + '小时前' : (time <= 0 ? "刚刚" : time + '分钟前');
                var desWinUserName = item.winUserName.length > 2 ? item.winUserName.slice(0, 3) + '***' : item.winUserName + '***';
                return '<span class="winNotice">' + desWinUserName + '投注<i style="color:orange">' + item.winLotteryName + '</i>喜中<i style="color:orange">' + item.winMoney + '元</i><i style="color: gray">(' + time + ')</i></span>';
            }).join('') + '</span>';
            winNoticeWrap.append(html);

            var winLine = $('.winResultsList>.winLine');

            var winNoticeMarginChange = $('.winResultsList>.winLine>.winNoticeMarginChange');

            var winLineWidth = parseInt(winLine.width());
            var marqueeWidth = parseInt(winNoticeWrap[0].scrollWidth);
            $('#marqueeLeftStyle').remove();
            createMarqueeStyle(marqueeWidth);
            if (marqueeWidth > winLineWidth) {
                winNoticeWrap.append(html);
                !winNoticeMarginChange.hasClass('marqueeLeft') && winNoticeMarginChange.addClass('marqueeLeft');
            } else {
                winNoticeMarginChange.hasClass('marqueeLeft') && winNoticeMarginChange.removeClass('marqueeLeft');
            }
            winNoticeMarginChange.hover(function () { //移入暂停
                $(this).addClass('animation_paused');
            }, function () {
                $(this).removeClass('animation_paused');
            });
            var marginLeft = winLineWidth;
            //删除滚动条
            var winResultsList = $('.winResultsList');
            $('.winResultsList>.winLine>.winLineClose').off('click').click(function (e) {
                e.stopPropagation();
                winResultsList.hide();
            });
        });
    },
    getIssueInfo() {
        let _this = this;
        Api.getIssueInfoApp({
            'lottery': 'MCK3',
        }, function (response) {
            if (response === -1) {
                _this.showLogout();
                return;
            }
            if (response.status === 404 || response.status === 0) {
                return;
            }
            _this.issue = response.result.issue;
            let diceIssueTop = $('.diceIssueTop');
            let diceIssueCountDown = $('.diceIssueCountDown');
            diceIssueTop.text(response.result.issue);
            let dateString = new Date().valueOf() + response.result.second * 1000;
            diceIssueCountDown.countdown(dateString, function (event) {
                let minutes_sw = ('0' + event.offset.minutes).slice(-2)[0]; //十位
                let minutes_gw = ('0' + event.offset.minutes).slice(-2)[1]; //个位
                let seconds_sw = ('0' + event.offset.seconds).slice(-2)[0]; //十位
                let seconds_gw = ('0' + event.offset.seconds).slice(-2)[1]; //个位
                diceIssueCountDown.html(`
                        <div class="diceIssueCountDownNum diceIssueCountDown${minutes_sw}"></div>
                        <div class="diceIssueCountDownNum diceIssueCountDown${minutes_gw}"></div>
                        <div class="diceIssueCountDownNum diceIssueCountDown${seconds_sw}"></div>
                        <div class="diceIssueCountDownNum diceIssueCountDown${seconds_gw}"></div>
                `);
            }).on('finish.countdown', function (event) {
                _this.getIssueInfoCount++;
                if (_this.getIssueInfoCount > 1) { //防止多次促发
                    return;
                }
                setTimeout(() => {
                    _this.getIssueInfoCount = 0; //0秒后恢复初始值
                }, 1500);
                setTimeout(() => {
                    _this.getIssueInfo();
                }, 2000);
            });
        })
    },
    getRecent30Issue() { //最近30期
        let args = arguments;
        let _this = this;
        Api.getIssueInfoLast({
            'lottery': 'MCK3',
        }, function (response) {
            if (response.length === 0) { //无数据情况
                return;
            }
            let diceResultDetail = $('.diceResultDetail');
            let diceRecentDetail = $('.diceRecentDetail>.scrollWrap>ul');
            let diceCup = $('.diceCup');
            let diceInCup_left = $('.diceCup .diceInCup_left');
            let diceInCup_center = $('.diceCup .diceInCup_center');
            let diceInCup_right = $('.diceCup .diceInCup_right');
            let resultIssues = response;

            let openResultHtml = `
                <div class="diceResultDetailFirst diceResult_${resultIssues[0]['code'].split(',')[0]}"></div>
                <div class="diceResultDetailSecond diceResult_${resultIssues[0]['code'].split(',')[1]}"></div>
                <div class="diceResultDetailThird diceResult_${resultIssues[0]['code'].split(',')[2]}"></div>
            `;
            let diceRecentDetailHtmlArr = resultIssues.map((item, index) => {
                let codeArr = item.code.split(',');
                return `
                    <li class="clearfix">
                        <div class="diceRD_left">${item.issueNo.slice(-4)}</div>
                        <div class="diceRD_center">
                            <div class="diceRD diceRD_${codeArr[0]}"></div>
                            <div class="diceRD diceRD_${codeArr[1]}"></div>
                            <div class="diceRD diceRD_${codeArr[2]}"></div>
                        </div>
                        <div class="diceRD_right">
                            <div class="diceRD_xt_r">${calcDxDsHz(codeArr)['dx']}</div>
                            <div class="diceRD_xt_m">${calcDxDsHz(codeArr)['ds']}</div>
                            <div class="diceRD_xt_l">${calcDxDsHz(codeArr)['hz']}</div>
                        </div>
                    </li>
                `;
            });
            let diceRecentDetailHtml = diceRecentDetailHtmlArr.join('');
            if (args[0] === 'message') { //socketMsg,后台开奖时的逻辑
                $('.diceRecent .diceRecentDetail ul').scrollTop(0); //最近30期开奖结果置顶
                DiceGame.disableBet = true; //开奖时禁止投注
                createDiceRollStyle($('#diceRollStyle')[0]); //把骰子翻滚样式动态随机生成
                diceResultDetail.html('');
                diceRecentDetail.html(diceRecentDetailHtmlArr.slice(1).join(''));
                diceCup.addClass('diceCup_animate'); //动画
                let timeoutOne = setTimeout(() => { //2秒后将里面的骰子改成开奖结果的骰子
                    diceInCup_left.attr('diceInCup', resultIssues[0]['code'].split(',')[0]); //不同属性值对应不用的显示号码样式
                    diceInCup_center.attr('diceInCup', resultIssues[0]['code'].split(',')[1]);
                    diceInCup_right.attr('diceInCup', resultIssues[0]['code'].split(',')[2]);
                    clearTimeout(timeoutOne);
                }, 2000);
                let timeoutTwo = setTimeout(() => { //动画完成后显示开奖号码和最近30期数据,对应的选号区域闪烁
                    diceResultDetail.html(openResultHtml);
                    diceRecentDetail.html(diceRecentDetailHtml);
                    diceCup.removeClass('diceCup_animate');
                    //对应的选号区域闪烁
                    $('[rel="selectCode"]').each(function (index, item) { //获取所有的value值存到数组
                        //和值value为number类型，其余为string类型
                        let value = $(item).attr('method').indexOf('hz_hz_hz') !== -1 ? Number($(item).attr('value').slice(-2)) : $(item).attr('value');
                        let code = resultIssues[0]['code'];
                        let blinkAreaCodes = blinkArea(code);
                        //value.indexOf(code.replace(/,/g,''))是value值为111|222|333|444|555|666的特殊情况
                        if (blinkAreaCodes.indexOf(value) !== -1 || (typeof value === 'string' && value.indexOf(code.replace(/,/g, '')) !== -1)) {
                            $(item).addClass('diceBgBlink');
                            let timeout = setTimeout(() => {
                                $(item).removeClass('diceBgBlink');
                                $(`[rel="betChip"][issue="${resultIssues[0]['issueNo']}"].bettedChip`).remove(); //投注过的筹码都删除
                                DiceGame.renderTotalMoney();
                                clearTimeout(timeout);
                            }, 4000);
                        }
                    });
                    DiceGame.Elements_Betted[resultIssues[0]['issueNo']] = DiceGame.Elements_Betted[resultIssues[0]['issueNo']] || [];
                    if (DiceGame.Elements_Betted[resultIssues[0]['issueNo']].length > 0) { //投注过才弹出盈利
                        let timeout = setTimeout(function () {
                            Api.queryOrderTotalInfo({ //显示中奖金额
                                'issueNo': resultIssues[0]['issueNo'],
                                'lotteryId': 'MCK3',
                            }, function (res) {
                                let dialogObj = {
                                    content: `<p style="text-align:center;">${resultIssues[0]['issueNo']}期，盈利金额${res.result}元</p>`,
                                    align: 'top',
                                    skin: 'tip',
                                    onshow: function () {
                                        let timeout = setTimeout(() => {
                                            this.close();
                                            clearTimeout(timeout);
                                        }, 2000);
                                    },
                                };
                                if (res.code === 1) {
                                    dialog(dialogObj).show();
                                    //更新余额和滚动条
                                    Navigation.getUserMoney();
                                    _this.getWinResultsList();
                                } else {
                                    dialogObj.content = `<p style="text-align:center;">${res.msg}</p>`;
                                    dialog(dialogObj).show();
                                }
                            });
                            clearTimeout(timeout);
                        }, 4000);
                    }
                    DiceGame.Elements_Betted[resultIssues[0]['issueNo']].length = 0; //之前期投注过的筹码记录清空
                    DiceGame.disableBet = false; //开奖完成可以投注
                    clearTimeout(timeoutTwo);
                }, 7000);
            } else if (args.length === 0) {
                diceResultDetail.html(openResultHtml);
                diceRecentDetail.html(diceRecentDetailHtml);
                diceInCup_left.attr('diceInCup', resultIssues[0]['code'].split(',')[0]); //不同属性值对应不用的显示号码样式
                diceInCup_center.attr('diceInCup', resultIssues[0]['code'].split(',')[1]);
                diceInCup_right.attr('diceInCup', resultIssues[0]['code'].split(',')[2]);
            }

        });
    },
    renderOdds(priceNum) {
        let _this = this;
        Api.getOddsByLt({
            lottery: 'MCK3',
        }, function (response) {
            if (response.code !== 1) {
                return;
            }
            window.postMessage('oddsOk', '*'); //告诉大家这个数据请求好了，可以用了
            let oddsObj = response.result['MCK3'];
            _this.oddsObj = oddsObj;
            for (let method in oddsObj) {
                $(`[method="${method}"]`).each(function (index, item) {
                    $(item).attr('odds', caclOdds(priceNum, oddsObj[method])['bonus']);
                    $(item).attr('point', caclOdds(priceNum, oddsObj[method])['point']);
                    $(item).find('.peilv').text(`1中${caclOdds(priceNum, oddsObj[method])['bonus']}`);
                });
            }
        });
    },
    showLogout() {
        let msg = dialog({
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
};
IssueList.init();
//工具函数，最近三十期大小单双
function calcDxDsHz(arr) {
    let hz = arr.reduce((a, b) => Number(a) + Number(b));
    let dx = (hz >= 11 && hz <= 18) ? '大' : '小';
    let ds = (hz % 2 === 0) ? '双' : '单';
    return {
        dx,
        ds,
        hz,
    };
}
//计算赔率,奖金模式浮点数
function caclOdds(priceNum, oddObj) { //priceNum是筹码金额数字,obj从夫赔率接口获取的当个玩法的赔率对象
    let mode;
    switch (priceNum) {
        case 1:
            mode = 0.5;
            break;
        case 5:
            mode = 2.5;
            break;
        case 10:
            mode = 5;
            break;
        case 20:
            mode = 10;
            break;
        case 50:
            mode = 25;
            break;
        case 100:
            mode = 50;
            break;
        case 1000:
            mode = 500;
            break;
        case 5000:
            mode = 2500;
            break;
        default:
            break;
    }
    //bonus显示的一中多少奖金的值,bonusValue是mode为1时的值，提交到后台的值,point点数写死为0
    let bonus = Q.floatMul((oddObj.odds + oddObj.x * oddObj.point), mode);
    bonus = bonus.toFixed(2);
    let bonusValue = (+(oddObj.odds + oddObj.x * oddObj.point)).toFixed(2);
    let point = 0;
    return {
        bonus,
        bonusValue,
        point,
    };
}
//创建骰子运动样式
function createDiceRollStyle(styleDom) {
    let styleStr_left = ``;
    let styleStr_center = ``;
    let styleStr_right = ``;
    for (let i = 0; i < 99; i += 2) {
        styleStr_left += `${i}%{transform: translate3d(${Math.random()*168}px, ${Math.random()*80-40}px, ${Math.random()*10}px) rotate(${Math.random()*5}deg);}`;
        styleStr_center += `${i}%{transform: translate3d(${Math.random()*168-84}px, ${Math.random()*80-40}px, ${Math.random()*10}px) rotate(${Math.random()*5}deg);}`;
        styleStr_right += `${i}%{transform: translate3d(${Math.random()*168-168}px, ${Math.random()*80-40}px, ${Math.random()*10}px) rotate(${Math.random()*5}deg);}`;
    }
    let results = [
        ['transform: translate3d(4px,0px,0px)', 'transform: translate3d(4px,-8px,0px)', 'transform: translate3d(0px,0px,0px)'],
        ['transform: translate3d(4px,0px,0px)', 'transform: translate3d(10px,4px,0px)', 'transform: translate3d(-15px,-8px,0px)'],
        ['transform: translate3d(30px,0px,0px)', 'transform: translate3d(8px,0px,0px)', 'transform: translate3d(-18px,6px,0px)'],
        ['transform: translate3d(30px,0px,0px)', 'transform: translate3d(8px,18px,0px)', 'transform: translate3d(-18px,-6px,0px)'],
        ['transform: translate3d(0px,0px,0px)', 'transform: translate3d(0px,0px,0px)', 'transform: translate3d(0px,0px,0px)'],
    ];

    let result = results[Math.floor(Math.random() * 4)];

    styleStr_left += `100% {${result[0]}  rotate(0deg);}`; //最后的位置可以写个数组指定几个位置随机translate3d(-4px,0px,-4px)，translate3d(4px,0px,-4px)，translate3d(-4px,0px,4px)，translate3d(4px,0px,4px)
    styleStr_center += `100% {${result[1]}  rotate(0deg);}`;
    styleStr_right += `100% {${result[2]}  rotate(0deg);}`;
    styleDom.innerHTML = `
        @keyframes diceShake_left {
            ${styleStr_left}
        }
        @keyframes diceShake_center {
            ${styleStr_center}
        }
        @keyframes diceShake_right {
            ${styleStr_right}
        }
    `;
}
//底部滚动条样式
function createMarqueeStyle(marqueeWidth) {
    let style = document.createElement('style');
    style.id = "marqueeLeftStyle";
    style.innerHTML = `
        .marqueeLeft {
            animation: marqueeLeft ${marqueeWidth/50}s linear infinite;
        }
        @keyframes marqueeLeft {
            100% {
                margin-left: -${marqueeWidth}px;
            }
        }
    `;
    document.head.appendChild(style);
}
//计算开奖后闪烁选号区域
function blinkArea(openCode) {
    let openCode_arr = openCode.split(','); //"1,2,3" => [1,2,3];
    let dxdshz = calcDxDsHz(openCode_arr); //大小单双和值
    let openCodeValue_3w = openCode_arr.join(''); //[1,2,3] => 123
    let openCodeValue_2w = choose(openCode_arr, 2).map(itemArr => String(itemArr).split(',').join('')); //[1,2,3] =>[12,13,23]
    let openCodeValue_1w = openCode_arr;
    return [...openCodeValue_1w, ...openCodeValue_2w, openCodeValue_3w, dxdshz['dx'], dxdshz['ds'], dxdshz['hz']];
}

//求数组组合的所有组合方式[1,2,3]->[1,2],[1,3],[2,3]
function choose(arr, size) {
    var allResult = [];

    function _choose(arr, size, result) {
        var arrLen = arr.length;
        if (size > arrLen) {
            return;
        }
        if (size == arrLen) {
            allResult.push([].concat(result, arr))
        } else {
            for (var i = 0; i < arrLen; i++) {
                var newResult = [].concat(result);
                newResult.push(arr[i]);

                if (size == 1) {
                    allResult.push(newResult);
                } else {
                    var newArr = [].concat(arr);
                    newArr.splice(0, i + 　1);
                    _choose(newArr, size - 1, newResult);
                }
            }
        }
    }
    _choose(arr, size, []);

    return allResult;
}
// 求两个数组的交集([1, 2, 3], [3, 4, 5]) →  [3]
Math.intersection = function (a, b) {
    return a.filter(function (n) {
        return b.indexOf(n) != -1;
    });
};