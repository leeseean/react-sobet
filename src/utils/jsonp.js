import jsonp from 'easy-jsonp';

export function getLoginState() {
    return jsonp({
        url: 'http://www.mc188.com/sso/u/getUserLoginState',
        callback: 'jsonp1',
        params: {
            appId: 5
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