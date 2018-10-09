let horses = [...document.querySelectorAll('.horse')];
let innerHorseWrap = document.querySelector('.innerHorseWrap');
let viewWidth = parseInt(window.getComputedStyle(innerHorseWrap).width); //动画可视区宽度
let horseWrap = document.querySelector('.horseWrap');
let horseSky = document.querySelector('.horseSky');
let horseOrders = document.querySelector('.horseOrders');
let horseOrderArr = [...document.querySelectorAll('.horseOrders .horseOrder')];
let horseWrapLeftValue;
let horseSkyLeftValue;
let horseLineLeft = document.querySelector('.horseLineLeft');
let horseLineRight = document.querySelector('.horseLineRight');
let horseQuan = document.querySelector('.horseQuan');
let bottomSpace = document.querySelector('.bottomSpace');
let resultDialog = document.querySelector('.resultDialog'); //弹幕
let closeResultDialog = document.querySelector('.resultDialog .closeResultDialog'); //关闭檀木按钮
let horseQuanRightValue;
let horseLineRightValue;
let horseLineLeftValue;
let horseOrdersLeftValue;
let horseNumElems = [...document.querySelectorAll('.rangeNums>div.horseNum')]; //排序马匹
let totalDistance = 15000; //总共要跑的距离 草地宽度800-马身150-终点线距离右边75
let duration = [38, 38.5, 39, ...Array(7).fill(1).map(() => 39 * (randomBetween(1.01, 1.05))).sort()]; //预先设定每匹马要跑的时间
let openData = [8, 4, 5, 6, 1, 3, 2, 7, 9, 10]; //从后台传回的开奖结果
let horsesLeftsValues = null;
let rangeNumImg = Array(10).fill(1).map((item, index) => `${-6-index*62.35}px -9px`); //底部排序

let timeout = null;

function horseInit(horses, horseOrders, horseNums, openData, rangeNumImg) { //初始位置
    innerHorseWrap.scrollLeft = 0; //回到最左边
    if (isIE()) { //如果是IE，bottomSpace采用fixed定位，因为ie环境下滚动时动态改变left值会抖动

    } else {
        bottomSpace.style.left = 0; //回到最左边
    }
    horsesLeftsValues = Array(10).fill(0);
    horses.forEach((horse, index) => {
        horse.style.backgroundImage = `url(./images/horse_${index+1}.png)`;
        horse.style.backgroundSize = '512px';
        horse.style.backgroundPosition = '25px 0';
        horse.style.top = `${28+index*29}px`;
        horse.style.left = '-95px'; //一开始的位置
        horse.style.animation = '';
    });
    resultDialog.style.display = 'none'; //彈窗開獎結果隱藏
    horseNumElems.forEach((num, i) => { //底部数字
        num.style.backgroundPosition = rangeNumImg[reverse_array(openData)[i] - 1];
    });
    horseOrders.style.left = '65px';
    horseOrderArr.forEach((order, i) => {
        order.style.top = `${15+i*29.15}px`;
    });
    horseLineLeftValue = 40; //css里面的值
    horseLineRightValue = -85; //css里面的值 终点线
    horseOrdersLeftValue = 65; //css里面的值
    horseQuanRightValue = -160; //css里面的值终点上角圈圈
    horseWrapLeftValue = 0; //运动的云朵和草地初始背景位置为0
    horseSkyLeftValue = 0; //运动的云朵和草地初始背景位置为0

    clearTimeout(timeout); //
}

function horseRun(horses) { //马跑的动作函数
    horses.forEach((horse, index) => {
        horse.style.animation = `horse_run infinite 360ms forwards step-start`;
    });
}
/*把路程分成5段，每段的速度不一样，可中慢快，中快慢，慢快中，慢中快，快慢中，快中慢随机;
 * 把时间分成5段，[[0.35,0.5,0.15,....],[0.35,0.15,0.5,...],...等;
 * */

// let timeMaps = queue([0.19,0.215,0.2,0.225,0.17], 5);//分5段处理
let timeMaps = queue([0.14, 0.105, 0.115, 0.125, 0.135, 0.145, 0.135], 7); //0.17把速度最快的一段單獨拿出來??後期改成8段
function createTimeMap(horses, timeMaps) { //随机每匹马的时间分配
    let timeObj = new Object();
    horses.forEach((horse, index) => {
        timeObj[horse.id] = timeMaps[Math.floor(randomBetween(0, timeMaps.length))];
    });
    return timeObj;
}

function horseMove(horses, total = totalDistance, timeMaps, duration, openData, rangeNumImg) { //赛马
    if (isIE()) { //如果是IE，bottomSpace采用fixed定位，因为ie环境下滚动时动态改变left值会抖动
        bottomSpace.style.position = 'fixed';
        bottomSpace.style.left = `${innerHorseWrap.getBoundingClientRect().left}px`;
        bottomSpace.style.top = `${horseWrap.getBoundingClientRect().bottom}px`;
        window.addEventListener('scroll', (() => {
            bottomSpace.style.left = `${innerHorseWrap.getBoundingClientRect().left}px`;
            bottomSpace.style.top = `${horseWrap.getBoundingClientRect().bottom}px`;
        }));
    }
    horseRun(horses); //跑的动作
    window.parent.postMessage('gameStarted', '*');
    let openResult = new Object(); //声明一个对象来存储openData和duration的对应关系
    openData.forEach((item, index) => { //openData和duration对应
        openResult[`horse_${item}`] = duration[index];
    });
    let speeds = {},
        leftValue = {}; //盛放各皮马的速度，盛放个屁马的left值

    let timeMap = createTimeMap(horses, timeMaps);

    let eachTotal = total / 8; //每段的长度

    function move() {

        let horsesLefts = getHorsesLeft(horses);
        horses.forEach((horse, index) => { //处理10段里面每段速度
            timeMap[horse.id].push(0.1); //最后一段，大家都是速度最快
            if (parseInt(horsesLefts[horse.id]) < eachTotal) { //第一段的速度
                speeds[horse.id] = eachTotal / (openResult[horse.id] * (timeMap[horse.id][0]) * 60); //第一段
            } else if (parseInt(horsesLefts[horse.id]) >= eachTotal && parseInt(horsesLefts[horse.id]) < eachTotal * 2) { //第二段的速度
                speeds[horse.id] = eachTotal / (openResult[horse.id] * (timeMap[horse.id][1]) * 60); //第二段
            } else if (parseInt(horsesLefts[horse.id]) >= eachTotal * 2 && parseInt(horsesLefts[horse.id]) < eachTotal * 3) { //第三段的速度
                speeds[horse.id] = eachTotal / (openResult[horse.id] * (timeMap[horse.id][2]) * 60); //第三段
            } else if (parseInt(horsesLefts[horse.id]) >= eachTotal * 3 && parseInt(horsesLefts[horse.id]) < eachTotal * 4) { //第4段的速度
                speeds[horse.id] = eachTotal / (openResult[horse.id] * (timeMap[horse.id][3]) * 60); //第4段
            } else if (parseInt(horsesLefts[horse.id]) >= eachTotal * 4 && parseInt(horsesLefts[horse.id]) < eachTotal * 5) { //第5段的速度
                speeds[horse.id] = eachTotal / (openResult[horse.id] * (timeMap[horse.id][4]) * 60); //第5段
            } else if (parseInt(horsesLefts[horse.id]) >= eachTotal * 5 && parseInt(horsesLefts[horse.id]) < eachTotal * 6) { //第6段的速度
                speeds[horse.id] = eachTotal / (openResult[horse.id] * (timeMap[horse.id][5]) * 60); //第6段
            } else if (parseInt(horsesLefts[horse.id]) >= eachTotal * 6 && parseInt(horsesLefts[horse.id]) < eachTotal * 7) { //第7段的速度
                speeds[horse.id] = eachTotal / (openResult[horse.id] * (timeMap[horse.id][6]) * 60); //第7段
            } else if (parseInt(horsesLefts[horse.id]) >= eachTotal * 7 && parseInt(horsesLefts[horse.id]) < eachTotal * 8) { //第8段的速度
                speeds[horse.id] = eachTotal / (openResult[horse.id] * (timeMap[horse.id][7]) * 60); //第8段
            }

            leftValue[horse.id] = leftValue[horse.id] || 0;
            leftValue[horse.id] += speeds[horse.id];
            horse.style.left = `${leftValue[horse.id]}px`;

        });
        let speedMin = Math.min(...Object.values(speeds));
        let speedMax = Math.max(...Object.values(speeds));
        let leftMax = Math.max(...Object.values(horsesLefts).map(value => parseInt(value)));
        let leftMin = Math.min(...Object.values(horsesLefts).map(value => parseInt(value)));
        let horsesLeftsKeys = Object.keys(horsesLefts); //马的id数组,马排序
        horsesLeftsValues = Object.values(horsesLefts); //马的距离数组
        let sort_horsesLeftsValues = horsesLeftsValues.sort((a, b) => parseInt(a) - parseInt(b)); //按跑动距离从小道大排序后的数组
        let sort_horsesLeftKeys = sort_horsesLeftsValues.map((value) => getKeyFromValue(horsesLefts, value)); //horseid排序
        if (!JSON.parse(localStorage.getItem('sort_horsesLeftKeys')) || JSON.parse(localStorage.getItem('sort_horsesLeftKeys')).toString() != sort_horsesLeftKeys.toString()) {
            sortHorseRange(horseNumElems, horsesLefts, sort_horsesLeftsValues, total, reverse_array(openData), rangeNumImg); //底部实时排名,排名发生改变时重新排名。
        }
        localStorage.setItem('sort_horsesLeftKeys', JSON.stringify(sort_horsesLeftKeys)); //把旧的排名存起来，和之后的排名做比较

        let innerHorseWrap_scrollLeft = innerHorseWrap.scrollLeft;
        if (innerHorseWrap_scrollLeft < total - viewWidth) { //未到达终点线区域
            innerHorseWrap.scrollLeft = leftMax - (viewWidth - 200); //防止前面的马跑出屏幕外，保持在屏幕前200
        } else { //到达终点线区域后，不滚动
            innerHorseWrap.scrollLeft += 0;
        }
        if (!isIE()) { //ie这样会抖动，不使用这个方案
            bottomSpace.style.left = `${innerHorseWrap.scrollLeft}px`; //底部实时排序div跟随移动，以防看不到
        }
        resultDialog.style.left = `${innerHorseWrap.scrollLeft + viewWidth/2}px`; //结果弹屏也跟着走吧，免得到了终点看不到

        if (leftMax > total) { //totalDistance
        }

        if (leftMin > total) {
            let yajunHorse = document.querySelector('.yajunHorse .horse2');
            let guanjunHorse = document.querySelector('.guanjunHorse .horse1');
            let jijunHorse = document.querySelector('.jijunHorse .horse3');
            let yajunNum = document.querySelector('.yajunHorse .yajunNum');
            let guanjunNum = document.querySelector('.guanjunHorse .guanjunNum');
            let jijunNum = document.querySelector('.jijunHorse .jijunNum');
            let resultOrders = [...document.querySelectorAll('.resultOrders .resultOrder')];
            yajunHorse.style.backgroundImage = `url(./images/horse_${openData[1]}.png)`;
            guanjunHorse.style.backgroundImage = `url(./images/horse_${openData[0]}.png)`;
            jijunHorse.style.backgroundImage = `url(./images/horse_${openData[2]}.png)`;
            yajunNum.style.backgroundPosition = rangeNumImg[openData[1] - 1];
            guanjunNum.style.backgroundPosition = rangeNumImg[openData[0] - 1];
            jijunNum.style.backgroundPosition = rangeNumImg[openData[2] - 1];
            resultOrders.forEach((v, i) => { //弹出开奖结果底部排列
                v.style.backgroundPosition = rangeNumImg[openData[i + 3] - 1];
            });
            resultDialog.style.display = 'block';
            window.parent.postMessage('gameOver', '*');
            setTimeout(() => {
                window.clearTimeout(timeout); //1秒后关闭动画
            }, 1000);
            setTimeout(() => { //10秒后關閉彈窗
                horseInit(horses, horseOrders, horseNumElems, openData, rangeNumImg);
            }, 10000);
        }



        timeout = setTimeout(move, 1000 / 60);
    }
    move();
}
horseInit(horses, horseOrders, horseNumElems, openData, rangeNumImg); //初始位置
// horseMove(horses,totalDistance,timeMaps,duration,openData,rangeNumImg);//启动 


function getHorsesLeft(horses) { //获取每匹马的left值,即跑的距离
    let horsesLefts = new Object();
    horses.forEach(horse => horsesLefts[horse.id] = window.getComputedStyle(horse).left);
    return horsesLefts;
}


//底部实时排名函数
function sortHorseRange(horseNumElems, horsesLefts, sort_horsesLeftsValues, totalDistance, openData, rangeNumImg) {
    let horsesLeftsValues = Object.values(horsesLefts).map(v => parseInt(v));
    let completedHorseNums = horsesLeftsValues.filter(v => v >= totalDistance).length; //已经跑完的马数量
    let rest_horseNumElems = horseNumElems.slice(0, horseNumElems.length - completedHorseNums);
    if (completedHorseNums == 10) {
        sortHorseRangeLast(horseNumElems, reverse_array(openData), rangeNumImg);
        return;
    }
    rest_horseNumElems.forEach((numElem, index) => {
        if (sort_horsesLeftsValues.length == [...new Set(sort_horsesLeftsValues)].length) { //防止value值相同情况
            numElem.style.backgroundPosition = rangeNumImg[getKeyFromValue(horsesLefts, sort_horsesLeftsValues[index]).split('_')[1] - 1];
        }
    });
}
//最终排名函数
function sortHorseRangeLast(horseNumElems, openData, rangeNumImg) {
    horseNumElems.forEach((numElem, index) => {
        numElem.style.backgroundPosition = rangeNumImg[reverse_array(openData)[index] - 1];
    });
}
//工具函数
function randomBetween(a, b) { //获取两个数之间的随机数
    return Math.random() * (b - a) + a;
}

function getKeyFromValue(obj, value) { //通过对象的value值查找与其映射的key值,对象有相同value值的话只检索第一个
    let objArr = Object.keys(obj).map((item, index) => { //{a:1}->[{_key:'a',_value:1}]
        return {
            '_key': item,
            '_value': obj[item]
        };
    });
    return objArr.find((k, i) => k['_value'] == value)['_key'];
}

function queue(arr, size) { //求数组排列的所有排列方式[1,2,3]->[1,2],[1,3],[2,3],[2,1],[3,1],[3,2]
    if (size > arr.length) {
        return;
    }
    var allResult = [];

    function queue(arr, size, result) {
        if (result.length == size) {
            allResult.push(result);
        } else {
            for (var i = 0, len = arr.length; i < len; i++) {
                var newArr = [].concat(arr),
                    curItem = newArr.splice(i, 1);
                queue(newArr, size, [].concat(result, curItem));
            }
        }
    }
    queue(arr, size, []);

    return allResult;
}

function reverse_array(arr) {
    return arr.map((v, i) => arr[arr.length - 1 - i]); //反转排序
}

function isIE() { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window)   return true;
    else   return false;
}
/*function createSpeed(){//随机生成跑步速度
 return Array(8).fill(1).map(()=>(randomBetween(0.7,1)*5));
 }*/
//开奖结果弹幕关闭
closeResultDialog.onclick = function () {
    resultDialog.style.display = 'none';
    horseInit(horses, horseOrders, horseNumElems, openData, rangeNumImg); //回到初始位置
};
//获取开奖结果后赛马
window.addEventListener('message', function (msg) {
    if (msg.data[0] && msg.data[0].code) {
        if (msg.data.bottomSpaceRank) { //首次進入頁面執行這個渲染底部排序
            let openDataStr = msg.data.bottomSpaceRank.replace(/([0-9])(?=(\d{2})+$)/g, '$1,');
            let openData = openDataStr.split(',').map(v => +v);
            horseNumElems.forEach((num, i) => { //底部数字
                num.style.backgroundPosition = rangeNumImg[reverse_array(openData)[i] - 1];
            });
        } else { //開獎后接收消息跑
            let openDataStr = msg.data[0].code.replace(/([0-9])(?=(\d{2})+$)/g, '$1,');
            let openData = openDataStr.split(',').map(v => +v);
            if (openDataStr && new Date().getTime() - Number(sessionStorage.getItem('messageTime') || 0) > 1000) {
                horseInit(horses, horseOrders, horseNumElems, openData, rangeNumImg); //初始化
                horseMove(horses, totalDistance, timeMaps, duration, openData, rangeNumImg); //启动 
                sessionStorage.setItem('messageTime', new Date().getTime());
            }
        }
    }
});
innerHorseWrap.addEventListener('touchmove', (e) => {
    e.preventDefault(); //防止滑動賽道
});
innerHorseWrap.addEventListener('mousemove', (e) => {
    e.preventDefault(); //防止滑動賽道
});

document.addEventListener('visibilitychange', function (e) { //頁面最小化或者切換標籤時動畫會停止，用這個作判斷
    if (window.parent.window.document.querySelector('.lt-xgpk10 .clock_b0')) {
        if ((+window.parent.window.document.querySelector('.lt-xgpk10 .clock_b0').innerText) * 60 + (+window.parent.window.document.querySelector('.lt-xgpk10 .clock_b1').innerText) < 220) {
            horseInit(horses, horseOrders, horseNumElems, openData, rangeNumImg);
            window.parent.postMessage('gameOver', '*');
        }
    }
});