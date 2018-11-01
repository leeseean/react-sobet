import $http from '../../utils/axios';

export function forgetPassword(params) {
    return $http({
        params,
        url: '/sobet/userInfo/forgetPassword',
        method: 'POST'
    });
}