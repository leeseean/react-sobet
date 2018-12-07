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
                case 404:
                case 401:
                case 500:
                    /* console.log(error.response.status)
                    localStorage.removeItem('logined');                    
                    window.location.href = '/'; */
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
    config = Object.assign({
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        }
    }, config);
    return axios(config);
};

export default $http;