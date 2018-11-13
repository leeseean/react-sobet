import $http from '../../../utils/axios.js';

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

