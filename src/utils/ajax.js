
import $http from './axios';

//中奖喜报
export function getLotteryWinTop10() {
    return $http({
        url: '/lottery/api/call/v1/lottery/getLotteryWinTop10',
        method: 'GET'
    });
}
//公告 
export function getNoticeList(params) {
    return $http({
        params,
        url: '/sobet/adminCommon/getAdminNotice.do',
        method: 'GET'
    })
}
//获取捕鱼王游戏链接
export function getAGHURUrl() {
    return $http({
        url: '/sobet/ag/getAGHURUrl',
        method: 'GET'
    });
}
//获取IDN棋牌游戏链接
export function getIdnUrl() {
    return $http({
        url: '/sobet/idn/getIdnUrl',
        method: 'GET'
    });
}
//获取kgame棋牌accesstoken
export function getKGAccessToken() {
    return $http({
        url: '/sobet/KG/getKGAccessToken',
        method: 'GET'
    });
}
//获取kgame棋牌游戏链接
export function getKGGameUrl(dataOrParams) {
    return $http({
        url: '/sobet/KG/getKGGameUrl',
        method: 'GET',
        params: dataOrParams
    });
}
//真人娱乐页面中间滚动数据
export function queryTopBetData(dataOrParams) {
    return $http({
        url: '/lottery/api/u/v1/ag/queryTopBetData',
        method: 'GET',
        params: dataOrParams
    });
}
//获取沙巴体育cookie
export function getSportCookie() {
    return $http({
        url: '/sobet/userInfo/getIbcLoginSessionToken',
        method: 'GET'
    });
}
//老虎机热们游戏
export function getHotSlotGamesData({
    currPage = 1,
    pageSize = 6,
}) {
    return $http({
        url: '/sport/api/pt/recommend_games',
        method: 'GET',
        params: {
            currPage,
            pageSize,
        }
    });
}

//老虎机游戏
export function getSlotGamesData({
    currPage = 1,
    pageSize = 6,
    typeId = '',
    chsName = '',
    isProgressive = '',
    payLine = ''
}) {
    return $http({
        url: '/sport/api/pt/games',
        method: 'GET',
        params: {
            currPage,
            pageSize,
            typeId,
            chsName,
            isProgressive,
            payLine
        }
    });
}

//老虎机中奖喜报
export function getSlotReward() {
    return $http({
        url: '/sport/api/pt/reward_rankings',
        method: 'GET'
    });
}
//活动 /sobet/api/i/anon/activity/queryCurrentActivity?platformId=1
export function queryCurrentActivity(params) {
    return $http({
        params,
        url: '/sobet/api/i/anon/activity/queryCurrentActivity',
        method: 'GET'
    });
}
//活动详情 /sobet/api/i/anon/activity/queryActivityById?id=106
export function queryActivityById(params) {
    return $http({
        params,
        url: '/sobet/api/i/anon/activity/queryActivityById',
        method: 'GET'
    });
}
//彩票最近30期走势 /lottery/api/anon/v1/lottery/simpleLast?size=30&lottery=RDLFC&method=sx_zx_fs
export function queryTrendData(params) {
    return $http({
        params,
        url: '/lottery/api/anon/v1/lottery/simpleLast',
        method: 'GET'
    });
}
//彩票奖期 /lottery/api/m/v1/lottery/issue_info_app?lottery=RDFFC
export function updateIssue(params) {
    return $http({
        params,
        // url: '/lottery/api/m/v1/lottery/issue_info_app',
        url: '/lottery/v2/api/u/lottery/issue_info_app',
        method: 'GET'
    });
}
//获取常玩彩种列表　/lottery/api/u/v1/lottery/getLotteryFavorite
export function getLotteryFavorite() {
    return $http({
        // url: '/lottery/api/u/v1/lottery/getLotteryFavorite',
        url: '/lottery/v2/api/u/lottery/getLotteryFavorite',
    });
}
// 选中删除常玩       /lottery/api/u/v1/lottery/delLotteryFavorite?lottery=hlj11y
export function delLotteryFavorite(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/delLotteryFavorite',
        method: 'GET'
    });
}
export function addLotteryFavorite(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/addLotteryFavorite',
        method: 'GET'
    });
}
//获取倒计时列表 /lottery/api/call/v1/lottery/times
export function getCountdowns() {
    return $http({
        url: '/lottery/api/call/v1/lottery/times',
        method: 'GET'
    });
}
//获取游戏记录 /lottery/api/u/v1/lottery/recent_order?lottery=WBGMMC
export function getRecord(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/recent_order',
        method: 'GET'
    });
}
//获取游戏记录详情 /lottery/api/u/v1/lottery/recent_detail?orderId=201810090T2Nehg17msP0001
export function getRecordDetail(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/recent_detail',
        method: 'GET'
    });
}
//查询追号详情 /lottery/api/u/v1/lottery/trace?orderId=20181009012LEpl18jJm0001
export function getTraceDetail(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/recent_detail',
        method: 'GET'
    });
}
//取消订单  /lottery/api/u/v1/lottery/cancel_order
export function cancelOrder(data) {
    return $http({
        data,
        url: '/lottery/api/u/v1/lottery/trace_cancel',
        method: 'POST',
        transformRequest: [data => {
            // Do whatever you want to transform the data
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}
//追号终止  /lottery/api/u/v1/lottery/trace_cancel?traceId=''&issues=[]
export function cancelTrace(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/trace_cancel',
        method: 'GET'
    });
}
//获取彩种tab配置
export function getLotteryTabConfig(params) {
    return $http({
        params,
        // url: `/lottery_config/${params.lottery}.json`,
        url: '/lottery/v2/api/u/lottery/method_classify',
        method: 'GET'
    });
}
//投注 /lottery/api/u/v1/lottery/add_order
export function submitOrder(data) {
    return $http({
        data,
        url: '/lottery/api/u/v1/lottery/add_order',
        method: 'POST',
        transformRequest: [data => {
            // Do whatever you want to transform the data
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}
//渺渺彩投注/lottery/api/u/v1/lottery/add_order_now
export function submitOrderMmc(data) {
    return $http({
        data,
        url: '/lottery/api/u/v1/lottery/add_order_now',
        method: 'POST',
        transformRequest: [data => {
            // Do whatever you want to transform the data
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}
// 获取余额 /sobet/pay/getPlayerBalance?cbId=sobet_01
export function getPlayerBalance(params) {
    return $http({
        params,
        url: '/sobet/pay/getPlayerBalance',
        method: 'GET'
    });
}
//获取用户信息 /sobet/userInfo/userInfoAjax?
export function getUserInfo() {
    return $http({
        // url: '/sobet/userInfo/userInfoAjax',
        url: '/sobet/v2/userinfo/userInfoAjax',
        method: 'GET'
    });
}
//获取彩种赔率 /lottery/api/anon/v1/lottery/odds_app
export function getOddsByLt(params) {
    return $http({
        params,
        url: '/lottery/v2/api/anon/lottery/odds_app',
        // url: `/odds/${params.lottery}.json`,
        method: 'GET'
    });
}
//首页轮播图接口 /v2/userinfo/adminNotice
export function getBannerConfig() {
    return $http({
        url: '/sobet/v2/userinfo/adminNotice',
        method: 'GET'
    });
}
/* 
http://new.mochen111.net/
获取odds接口:/v2/api/anon/lottery/odds_app
获取用户前10彩种:/v2/api/u/lottery/getLotteryFavorite
去掉lastFive:/v2/api/u/lottery/issue_info_app
获取彩种分类:/v2/api/u/lottery/method_classify
首页接口（sobet）
获取用户信息:/v2/userinfo/userInfoAjax
轮播图:/v2/userinfo/adminNotice
*/