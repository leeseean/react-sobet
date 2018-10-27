
import axios from 'axios';

// 添加请求拦截器
axios
    .interceptors
    .request
    .use(config => {
        // 在发送请求之前做些什么
        return config;
    }, error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

// 添加响应拦截器
axios
    .interceptors
    .response
    .use(response => {
        // 对响应数据做点什么
        return response;
    }, error => {
        // 对响应错误做点什么
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    /*  store.commit(types.LOGOUT);
                        router.replace({
                        path: 'login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                        }) */
                    break;
                default:
                    break;
            }
        }
        return Promise.reject(error);
    });

const $http = (config) => {
    if (process.env.NODE_ENV === 'development') {
        if (!/\.json/.test(config.url)) {
            config.url = '/dev' + config.url;
        }
    }
    config = Object.assign(config, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    return axios(config);
};

export default $http;

const proxyPrefix = '';

//中奖喜报
export function getLotteryWinTop10() {
    return $http({
        url: proxyPrefix + '/lottery/api/call/v1/lottery/getLotteryWinTop10',
        // url: '/win-list.json',
        method: 'GET'
    });
}
//公告 
export function getNoticeList(params) {
    return $http({
        params,
        url: proxyPrefix + '/sobet/adminCommon/getAdminNotice.do',
        // url: '/notice.json',
        method: 'GET'
    })
}
//获取余额
export function getPlayerBalance(dataOrParams) {
    return $http({
        url: proxyPrefix + '/sobet/pay/getPlayerBalance',
        method: 'GET',
        params: dataOrParams
    });
}
//获取捕鱼王游戏链接
export function getAGHURUrl() {
    return $http({
        url: proxyPrefix + '/sobet/ag/getAGHURUrl',
        method: 'GET'
    });
}
//获取IDN棋牌游戏链接
export function getIdnUrl() {
    return $http({
        url: proxyPrefix + '/sobet/idn/getIdnUrl',
        method: 'GET'
    });
}
//获取kgame棋牌accesstoken
export function getKGAccessToken() {
    return $http({
        url: proxyPrefix + '/sobet/KG/getKGAccessToken',
        method: 'GET'
    });
}
//获取kgame棋牌游戏链接
export function getKGGameUrl(dataOrParams) {
    return $http({
        url: proxyPrefix + '/sobet/KG/getKGGameUrl',
        method: 'GET',
        params: dataOrParams
    });
}
//真人娱乐页面中间滚动数据
export function queryTopBetData(dataOrParams) {
    return $http({
        url: proxyPrefix + '/lottery/api/u/v1/ag/queryTopBetData',
        method: 'GET',
        params: dataOrParams
    });
}
//获取沙巴体育cookie
export function getSportCookie() {
    return $http({
        url: proxyPrefix + '/sobet/userInfo/getIbcLoginSessionToken',
        method: 'GET'
    });
}
//老虎机热们游戏
export function getHotSlotGamesData({
    currPage = 1,
    pageSize = 6,
}) {
    return $http({
        url: proxyPrefix + '/sport/api/pt/recommend_games',
        // url: '/hot-game.json',
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
        url: proxyPrefix + '/sport/api/pt/games',
        // url: '/slot-game.json',
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
        url: proxyPrefix + '/sport/api/pt/reward_rankings',
        // url: '/slot-reward.json',
        method: 'GET'
    });
}
//活动 /sobet/api/i/anon/activity/queryCurrentActivity
export function queryCurrentActivity() {
    return $http({
        // url: '/activity.json',
        url: proxyPrefix + '/sobet/api/i/anon/activity/queryCurrentActivity',
        method: 'GET'
    });
}
//活动详情 /sobet/api/i/anon/activity/queryActivityById?id=106
export function queryActivityById(params) {
    return $http({
        params,
        url: proxyPrefix + '/sobet/api/i/anon/activity/queryActivityById',
        method: 'GET'
    });
}
//彩票最近30期走势 /lottery/api/anon/v1/lottery/simpleLast?size=30&lottery=RDLFC&method=sx_zx_fs
export function queryTrendData(params) {
    return $http({
        params,
        // url: '/trend.json',
        url: proxyPrefix + '/lottery/api/anon/v1/lottery/simpleLast',
        method: 'GET'
    });
}
//彩票奖期 /lottery/api/m/v1/lottery/issue_info_app?lottery=RDFFC
export function updateIssue(params) {
    return $http({
        params,
        // url: '/issue.json',
        url: proxyPrefix + '/lottery/api/m/v1/lottery/issue_info_app',
        method: 'GET'
    });
}
//获取常玩彩种列表　/lottery/api/u/v1/lottery/getLotteryFavorite
export function getLotteryFavorite() {
    return $http({
        // url: '/favorite.json',
        url: proxyPrefix + '/lottery/api/u/v1/lottery/getLotteryFavorite',
    });
}
// 选中删除常玩       /lottery/api/u/v1/lottery/delLotteryFavorite?lottery=hlj11y
export function delLotteryFavorite(params) {
    return $http({
        params,
        url: proxyPrefix + '/lottery/api/u/v1/lottery/delLotteryFavorite',
        method: 'GET'
    });
}
export function addLotteryFavorite(params) {
    return $http({
        params,
        url: proxyPrefix + '/lottery/api/u/v1/lottery/addLotteryFavorite',
        method: 'GET'
    });
}
//获取倒计时列表 /lottery/api/call/v1/lottery/times
export function getCountdowns() {
    return $http({
        // url: '/times.json',
        url: proxyPrefix + '/lottery/api/call/v1/lottery/times',
        method: 'GET'
    });
}
//获取游戏记录 /lottery/api/u/v1/lottery/recent_order?lottery=WBGMMC
export function getRecord(params) {
    return $http({
        params,
        // url: '/record.json',
        url: proxyPrefix + '/lottery/api/u/v1/lottery/recent_order',
        method: 'GET'
    });
}
//获取游戏记录详情 /lottery/api/u/v1/lottery/recent_detail?orderId=201810090T2Nehg17msP0001
export function getRecordDetail(params) {
    return $http({
        params,
        // url: '/recordDetail.json',
        url: proxyPrefix + '/lottery/api/u/v1/lottery/recent_detail',
        method: 'GET'
    });
}
//查询追号详情 /lottery/api/u/v1/lottery/trace?orderId=20181009012LEpl18jJm0001
export function getTraceDetail(params) {
    return $http({
        params,
        // url: '/traceDetail.json',
        url: proxyPrefix + '/lottery/api/u/v1/lottery/recent_detail',
        method: 'GET'
    });
}
//取消订单  /lottery/api/u/v1/lottery/cancel_order
export function cancelOrder(data) {
    return $http({
        data,
        url: proxyPrefix + '/lottery/api/u/v1/lottery/trace_cancel',
        method: 'POST'
    });
}
//追号终止  /lottery/api/u/v1/lottery/trace_cancel?traceId=''&issues=[]
export function cancelTrace(params) {
    return $http({
        params,
        url: proxyPrefix + '/lottery/api/u/v1/lottery/trace_cancel',
        method: 'GET'
    });
}
//获取彩种tab配置
export function getLotteryTabConfig(params) {
    return $http({
        params,
        url: `/lottery_config/${params.lottery}.json`,
        method: 'GET'
    });
}