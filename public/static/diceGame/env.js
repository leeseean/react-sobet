/* 环境变量 */
var envFlag = 'online';//local,test,online
var globeEnv = {
  'online': {
    sso: "/sobet",
    caipiao: "/lottery",
    index: '',
    auth: '/sso', 
    sport: "/sport"
  }
};
/* 验证中心APP编号 */
var globeId = function(url) {
  var nearpath = url.split('/');
  var chkpath;
  if (url=='/') {
    chkpath = url;  
  }else {
    chkpath = '/'+nearpath[1];  
  }

  var iddict = {
    '/':5,//用户中心
    '/sobet':5,//用户中心
    '/sport':4,//体育
    '/lottery':1,//普通彩票
    //'/shopadmin':3//商家中心商家店铺后台
  }

  if (typeof iddict[chkpath] === 'undefined') {
    //return 2;//商家中心彩票
    return 5;//用户中心
  }else {
    return iddict[chkpath];
  }
}