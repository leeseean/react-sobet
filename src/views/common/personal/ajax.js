import $http from '../../../utils/axios';

//彩票投注数据接口
export function lotteryAjax(params) {
    return $http({
        params,
        url: '/lottery/api/u/v1/lottery/history_orders?',
        method: 'GET'
    });
}