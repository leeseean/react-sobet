var LotteryClass;
var LotteryTips;
if (sessionStorage.getItem('LotteryClass') && sessionStorage.getItem('LotteryTips')){
    LotteryClass = JSON.parse(sessionStorage.getItem('LotteryClass'));
    LotteryTips = JSON.parse(sessionStorage.getItem('LotteryTips'));
} else {
    document.write(`<script src="/static/lottery/scripts/config.js"></script>`);
}