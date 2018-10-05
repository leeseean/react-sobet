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
    config = Object.assign(config, {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    });
    return axios(config);
};

export default $http;

const isDev = true;
// const isDev = false;

//中奖喜报
export function getLotteryWinTop10() {
    return $http({
        // url: '/api/lottery/api/call/v1/lottery/getLotteryWinTop10',
        url: '/win-list.json',
        method: 'GET'
    });
}
//获取余额
export function getPlayerBalance(dataOrParams) {
    return $http({
        url: (isDev ? '/dev' : '') + '/sobet/pay/getPlayerBalance',
        method: 'GET',
        params: dataOrParams
    });
}
//获取捕鱼王游戏链接
export function getAGHURUrl() {
    return $http({
        url: (isDev ? '/dev' : '') + '/sobet/ag/getAGHURUrl',
        method: 'GET'
    });
}
//获取IDN棋牌游戏链接
export function getIdnUrl() {
    return $http({
        url: (isDev ? '/dev' : '') + '/sobet/idn/getIdnUrl',
        method: 'GET'
    });
}
//获取kgame棋牌accesstoken
export function getKGAccessToken() {
    return $http({
        url: (isDev ? '/dev' : '') + '/sobet/KG/getKGAccessToken',
        method: 'GET'
    });
}
//获取kgame棋牌游戏链接
export function getKGGameUrl(dataOrParams) {
    return $http({
        url: (isDev ? '/dev' : '') + '/sobet/KG/getKGGameUrl',
        method: 'GET',
        params: dataOrParams
    });
}
//真人娱乐页面中间滚动数据
export function queryTopBetData(dataOrParams) {
    return $http({
        url: (isDev ? '/dev' : '') + '/lottery/api/u/v1/ag/queryTopBetData',
        method: 'GET',
        params: dataOrParams
    });
}
//获取沙巴体育cookie
export function getSportCookie() {
    return $http({
        url: (isDev ? '/dev' : '') + '/sobet/userInfo/getIbcLoginSessionToken',
        method: 'GET'
    });
}
//老虎机热们游戏
export function getHotSlotGamesData({
    currPage = 1,
    pageSize = 6,
}) {
    return $http({
        url: '/hot-game.json',
        method: 'GET',
        params: {
            currPage,
            pageSize,
        }
    });
}

//老虎机热们游戏
export function getSlotGamesData({
    currPage = 1,
    pageSize = 6,
    typeId = '',
    chsName = '',
    isProgressive = '',
    payLine = ''
}) {
    return $http({
        url: '/slot-game.json',
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
        url: '/slot-reward.json',
        method: 'GET'
    });
}
//活动 /sobet/api/i/anon/activity/queryCurrentActivity
export function queryCurrentActivity() {
    return $http({
        url: (isDev ? '/dev' : '') + '/sobet/api/i/anon/activity/queryCurrentActivity',
        method: 'GET'
    });
}
//活动详情 /sobet/api/i/anon/activity/queryActivityById?id=106
export function queryActivityById(params) {
    return $http({
        params,
        url: (isDev ? '/dev' : '') + '/sobet/api/i/anon/activity/queryActivityById',
        method: 'GET'
    });
}
//彩票最近30期走势 /lottery/api/anon/v1/lottery/simpleLast?size=30&lottery=RDLFC&method=sx_zx_fs
export function queryTrendData(params) {
    return $http({
        params,
        url: '/trend.json',
        // url: (isDev ? '/dev' : '') + '/lottery/api/anon/v1/lottery/simpleLast',
        method: 'GET'
    });
}
//彩票奖期 /lottery/api/m/v1/lottery/issue_info_app?lottery=RDFFC
export function updateIssue(params) {
    return $http({
        params,
        url: '/issue.json',
        // url: (isDev ? '/dev' : '') + '/lottery/api/m/v1/lottery/issue_info_app',
        method: 'GET'
    });
}