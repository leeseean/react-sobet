/**
 * @author conrad
 * @date 2018/11/07
 * @desc 多个界面组件公用接口api
 */

import $http from './axios.js'

// 获取余额 /sobet/pay/getPlayerBalance?cbId=sobet_01
export function getPlayerBalance(params) {
    return $http({
        params,
        url: '/sobet/pay/getPlayerBalance',
        method: 'GET'
    });
}

// 校验资金密码
export function validatePayPassword(params){
    return $http({
        params,
        url: '/sobet/userInfo/validatePayPassword',
        method: 'GET'
    });
}