import $http from './axios'

// 获取余额 /sobet/pay/getPlayerBalance?cbId=sobet_01
export function getPlayerBalance(params) {
    return $http({
        params,
        url: '/sobet/pay/getPlayerBalance',
        method: 'GET'
    });
}