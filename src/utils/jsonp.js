import jsonp from 'easy-jsonp';

//获取登录状态
export function getLoginState() {
  return jsonp({
    url: '/dev/jsonp/u/getUserLoginState',
    callback: 'jsonp1',
    params: {
      appId: 5
    }
  });
}

//登录
export function ssoLogin(username, password) {
  return jsonp({
    url: 'http://www.mochen111.net/sso/u/getUserLoginState',
    callback: 'jsonp1',
    params: {
      way: 'pwd',
      from: 'portal',
      cn: username,
      appId: 5,
      password: password
    }
  });
}


/* 
jsonp({
  url: 'http://localhost',
  // global function named `callback` will be invoked when JSONP response
  callback: 'callback', // any different name from request module
  timeout: 3000,
  params: {
    // eg. ?key0=0&key1=1...
    key0: 0,
    key1: 1
  }
})
  .then(res => console.log(res))
  .catch(err => console.error(err))
*/