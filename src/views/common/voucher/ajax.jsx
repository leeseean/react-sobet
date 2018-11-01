import $http from '../../../utils/axios.js';

//获取充值渠道
export function queryChannel() {
    return $http({
        url: '/sobet/pay/queryChannel?clientType=0&_=1540448537656',
        method: 'GET'
    });
}
