import $http from '../../../utils/axios';

//彩票投注数据接口 香港六合彩数据接口
export function lotteryAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/history_orders',
        method: 'GET'
    });
}

//彩票追投数据接口
export function traceAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/lottery_trace',
        method: 'GET'
    });
}

//AG数据接口
export function agyxAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/ag/queryBetData',
        method: 'GET'
    });
}

//ag捕鱼数据接口
export function fishAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/history_orders_ag_hunter',
        method: 'GET'
    });
}

//pt老虎数据接口
export function ptyxAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/history_orders_pt',
        method: 'GET'
    });
}
//bbin数据接口
export function bbinAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/history_orders_bbin',
        method: 'GET'
    });
}
//bbin数据接口
export function sportAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/history_orders_sb',
        method: 'GET'
    });
}
//idn数据接口
export function idnAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/history_orders_idn',
        method: 'GET'
    });
}
//kgame数据接口
export function kgameAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/history_orders_kg',
        method: 'GET'
    });
}
//盈亏数据接口
export function statisticsAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/agent/getDayReportByQueryName',
        method: 'GET'
    });
}

//获取站内信消息
export function getPreAdminMessage(params){
    return $http({
        params,
        url: 'sobet/message/getPreAdminMessage_ajaxList',
        method: 'GET'
    });
}

//更新站内信已读未读消息
export function updateMessageUserById(params){
    return $http({
        params,
        url: 'sobet/message/updateMessageUserById',
        method: 'GET'
    });
}

//删除站内信消息
export function deletePreAdminMessageAjax(params){
    return $http({
        params,
        url: '/sobet/message/deletePreAdminMessageAjax',
        method: 'GET'
    });
}

//修改密码时获取 cn token
export function updatePassword(params){
    return $http({
        params,
        url: '/sobet/userInfo/updatePassword',
        method: 'GET'
    });
}

//修改密码提交
export function updatePasswordAjax(params){
    return $http({
        params,
        url: '/sobet/userInfo/updatePasswordAjax',
        method: 'POST'
    });
}

//充值获取md5key,token, 返回-4 代表没有绑定银行卡
export function rechargeIndexAjax(){
     return $http({
        url: '/sobet/pay/rechargeIndexAjax?clientType=0',
        method: 'GET'
    });
}

//获取充值渠道
export function queryChannel() {
    return $http({
        url: '/sobet/pay/queryChannel?clientType=0',
        method: 'GET'
    });
}

//获取钱包
export function getWallets(){
    return $http({
        url: '/sobet/pay/transferIndexAjax',
        method: 'GET'
    })
}

//钱包互转
export function cbPointTransfer(params){
    return $http({
        params,
        url: 'sobet/pay/cbPointTransfer',
        method: 'POST',
    })
}

//获取用户绑银行卡信息
export function drawCashIndexAjax(){
    return $http({
        url: '/sobet/pay/drawCashIndexAjax',
        method: 'POST',
    })
}

//申请提现接口
export function withdrawCashAjax(params){
    return $http({
        params,
        url: 'sobet/pay/withdrawCashAjax',
        method: 'POST',
    })
}
