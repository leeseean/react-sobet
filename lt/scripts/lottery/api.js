/* jshint devel:true */

var Api = Api || {};
Api = {
  url: globeEnv[envFlag].caipiao,
  sso: globeEnv[envFlag].sso,
  cache: {},
  apimap: {
    route: {
      'getOdds': '/api/anon/v1/lottery/odds',
      'getOddsByLt': "/api/anon/v1/lottery/odds_app",
      'getMarketOdds': '/api/anon/v1/lottery_market/odds',
      'getIssueInfo': '/api/anon/v1/lottery/issue_info',
      'getIssueInfoApp': '/api/m/v1/lottery/issue_info_app', //日本30秒用app这个接口
      'getIssueInfoLast': '/api/anon/v1/lottery/simpleLast?size=30',
      'getLotteryTimes': '/api/call/v1/lottery/times',
      'getSimilar': '/api/anon/v1/lottery/matches',
      'getDish': '/api/anon/v1/lottery_market/top_odds_code',
      'getUserTradeVolume': '/api/anon/v1/lottery_market/trade_volume',
      'getSameNumber': '/api/anon/v1/lottery_market/same_number',
      'qusrpermission': '/api/u/v1/agent/queryUserPermission', //12.3 查询用户权限
      'getproxyinfo': '/api/u/v1/agent/getProxyInfo', //12.3 查询代理信息[很慢]
      'qpermissionlist': '/api/u/v1/agent/queryPermissionList', //12.4 查询代理目前的全部权限
      'qpermissionbyid': '/api/u/v1/agent/queryUserPermissionById', //12.5 查询当前ID的全部权限
      'mpermission': '/api/u/v1/agent/modifyPermission', //12.6 修改管理账号权限
      'addOrder': '/api/u/v1/lottery/add_order',
      'addOrderMMC': '/api/u/v1/lottery/add_order_now',
      'uploadCode': '/api/u/v1/lottery/uploadCode',
      'getRecency': '/api/u/v1/lottery/recent_order',
      'getRecencyDetail': '/api/u/v1/lottery/recent_detail',
      'addOrderMarket': '/api/u/v1/lottery_market/add_order',
      'getTradeNumber': '/api/u/v1/lottery_market/trade_number',
      'getOrderDetail': '/api/u/v1/lottery_market/order_detail',
      'getMoney': '/api/u/money',
      'getHistoryParams': '/api/u/v1/lottery/search_params',
      'getHistory': '/api/u/v1/lottery/history_orders',
      'getMarketHistory': '/api/u/v1/lottery_market/history_orders',
      'cancelOrder': '/api/u/v1/lottery/cancel_order',
      'cancelOrderMarket': '/api/u/v1/lottery_market/cancel_order',
      'getTraces': '/api/u/v1/lottery/lottery_trace',
      'getMarketTraces': '/api/u/v1/lottery_market/lottery_trace',
      'getTrace': '/api/u/v1/lottery/trace',
      'getMarketTrace': '/api/u/v1/lottery_market/trace',
      'cancelTrace': '/api/u/v1/lottery/trace_cancel', //traceId=79&issues[]=20150605-585&issues[]=20150605-584
      'cancelMarketTrace': '/api/u/v1/lottery_market/trace_cancel', //?traceId=83&issues[]=20150605-585&issues[]=20150605-584
      'agentlink': '/api/u/v1/agent/user_link', //9.1 获取代理链接 - 代理用户获取自己推广链接 CHECKED
      'updatepoint': '/api/u/v1/agent/update_point', //9.3 设置推广自助注册返点

      'createlink': '/api/u/v1/agent/create_link', // 推广链接 → 生成链接
      'getlinks': '/api/u/v1/agent/links', // 推广链接 → 获取链接列表
      'deletelink': '/api/u/v1/agent/delete_link', // 推广链接 → 删除一条链接

      'lotterypoints': '/api/u/v1/agent/lottery_points', //9.2 用户当前代理彩种返点信息 - 代理用户当前代理的彩票返点信息 //9.5 彩种玩法返点详情 CHECKED
      'lotterypointrate': '/api/u/v1/agent/point_info', //9.2 用户当前代理彩种返点信息 - 代理用户当前代理的彩票返点信息 //9.5 彩种玩法返点详情(缺：玩法的返点)
      'users': '/api/u/v1/agent/users', //9.4 代理用户 (缺：用户ID未返回，balance字段是用户余额还是返点率不明确，按用户名查询和按余额范围查询的参数)
      'agentregister': '/api/u/v1/agent/agent_register', //9.6 代理开户
      'userinfo': '/api/u/v1/agent/user_info', //10.1 用户信息
      'teambalance': '/api/u/v1/agent/team_balance', //10.2 用户团队余额 CHECKED
      'transfer': '', //10.3 转账 (直接调用用户中心接口)
      'setpoints': '/api/u/v1/agent/set_user_point', //10.4 设定用户返点
      'accountinfo': '/api/u/v1/agent/account_info', //10.5 账变查询
      'getteamreport': '/api/u/v1/agent/getTeamReport', //10.6 团队报表 (String startTime, String endTime, Integer currPage, Integer pageSize)

      'accountinforeport': '/api/u/v1/report/account_info', //11.3 账变查询
      'pointinfo': '/api/u/v1/agent/point_info', //10.6 返点查询,用户查询返点信息(缺：玩法的返点)
      'summary': '/api/u/v1/agent/summary', //10.7 摘要
      'reportquery': '/api/u/v1/report/report_query', //11.1 传统投注模式报表查询接口
      'reportquerymarket': '/api/u/v1/report/report_query', //11.2 交易市场模式报表查询接口
      'commission': '/api/u/v1/report/commission', //11.4 佣金总额查询接口
      'getteaminfo': '/api/u/v1/agent/getTeamInfo', //11.5 团队报表新接口 startTime=2015-11-05%2013:30:15&endTime=2015-11-08%2013:46:15
      'getagentquota': '/api/u/v1/agent/getAgentquota', //'/api/u/v1/agent/getAgentquota',//11.6 读取当前用户配额
      'getagentquotabyusr': '/api/u/v1/agent/getAgentquotaByUser', //'/api/u/v1/agent/getAgentquota',//11.7 获取某下级用户配额
      'quotaassign': '/api/u/v1/agent/quotaAssign', //'/api/u/v1/agent/quotaAssign',//11.8 更新某下级用户赠送配额
      'quotagc': '/api/u/v1/agent/quotagc', //'/api/u/v1/agent/quotagc',//11.9 更新某下级用户回收配额
      'haveContractInfo': '/api/u/v1/contractBonusRelease/haveContractInfo', //查询自己是否有契约
      'agent': {
        'html': '/lottery/agent.html'
      }, // 10.8 代理
      'report': {
        'html': '/lottery/report.html'
      }, // 10.9 报表
      'queryActivity': '/api/i/anon/activity/queryCurrentActivity',
      'getWinResultsList': '/api/call/v1/lottery/getLotteryWinTop10',
      'getNewActivityMoney': '/api/i/u/activity/getNewActivityMoney',
      'userSign': '/api/i/u/activity/userSign',
      'getUserSignData': '/api/i/u/activity/getUserSignData',
      'getUserLotteryAmount': '/api/i/u/activity/getUserLotteryAmount',
      'queryOrderTotalInfo': '/api/v1/userOrder/queryOrderTotalInfo',
    }
  },
  geturl: function (apiName) {
    //函数重载1.Api.geturl('getTradeNumber',{p:1})；2.Api.geturl('agent','html')；
    var params;
    var ps = arguments;
    if (arguments.length > 1) {
      params = arguments[1];
    }
    if (typeof Api.apimap.route[apiName] == 'object') {
      if (params) {
        if (arguments.length > 2) {
          pageparams = arguments[2];
          return [String(Api.apimap.route[apiName][params]).replace('.json', (pageparams.page > 1 ? '_' + pageparams.page : '') + '.json')].join('');
        }
        return [Api.apimap.route[apiName][params]].join('');
      }
    }
    var pspage = 0;
    if (ps.length > 1) {
      pspage = ps[1].page;
    }
    return [Api.url, String(Api.apimap.route[apiName]).replace('.json', (pspage > 1 ? '_' + pspage : '') + '.json')].join('');
  },
  getCommon: function (route, p, fn) {
    var args = arguments;
    //同一接口增加cache时，有10秒钟缓存
    if (typeof p.cache !== 'undefined') {
      if (typeof Api.cache[route] === 'object') {
        var res = Api.cache[route];
        if (res === -1 && args[3] !== undefined && args[3] === true && !$(".loginlnk").hasClass('waiting')) {
          $(".loginlnk").trigger('click');
          return false;
        } else {
          fn(res);
          setTimeout(function () {
            delete Api.cache[route];
          }, 10000);
          return false;
        }
      } else {
        Api.cache[route] = 1;
      }
    }
    $.ajax({
      url: Api.geturl(route, p),
      type: (typeof p.action !== 'undefined' ? p.action : 'GET'),
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      // 缓存控制
      if (typeof Api.cache[route] !== 'undefined') {
        if (Api.cache[route]) {
          Api.cache[route] = res;
        }
      }
      // arguments[3] 为true的时候，未登录需要弹框
      if (res === -1 && args[3] !== undefined && args[3] === 1 && !$(".loginlnk").hasClass('waiting')) {
        $(".loginlnk").trigger('click');
        if (typeof p.failed === 'function') {
          p.failed();
        }

        return false;
      } else {
        fn(res);
      }
    }).fail(function () {
      if (typeof p.failed === 'function') {
        p.failed();
      }
      fn("error");
    });
  },
  getHtml: function (route, path, p, fn) {
    $.ajax({
      url: Api.geturl(route, path, p),
      type: 'GET',
      cache: false,
      dataType: (typeof p.type != 'undefined' ? p.type : 'html'),
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getOdds: function (fn) {
    $.ajax({
      url: Api.geturl('getOdds'),
      type: 'GET',
      cache: false,
      dataType: 'json'
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getptList: function (fn) {
    $.ajax({
      url: Api.sso + '/pay/getPcodeCbBaseList',
      type: 'GET',
      dataType: 'json',
      cache: false,
    }).done(function (res) {
      $(".spinner").hide();
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getPtBalance: function (d, fn) {
    $.ajax({
      url: Api.sso + '/pay/getPlayerBalance',
      type: 'GET',
      dataType: 'json',
      cache: false,
      data: d
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getAgcbPointTransfer: function (d, fn) {
    $.ajax({
      type: 'POST',
      url: '/sobet/pay/cbPointTransfer',
      dataType: 'json',
      cache: false,
      timeout: 30000,
      data: d,
      beforeSend: function () {
        $(this).html('<i class="fa fa-spinner fa-spin"></i>');
      },
      success: function (res) {
        fn(res)
      },
      error: function (res) {
        fn("error");
      }
    });
  },
  getOddsByLt: function (p, fn) {
    $.ajax({
      url: Api.geturl('getOddsByLt', p),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getMarketOdds: function (fn) {
    $.ajax({
      url: Api.geturl('getMarketOdds'),
      type: 'GET',
      cache: false,
      dataType: 'json'
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getIssueInfo: function (p, fn) {
    $.ajax({
      url: Api.geturl('getIssueInfo', p),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getIssueInfoLast: function (p, fn) {
    $.ajax({
      url: Api.geturl('getIssueInfoLast', p),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  getIssueInfoApp: function (p, fn) {
    $.ajax({
      url: Api.geturl('getIssueInfoApp', p),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  getLotteryTimes: function (p, fn) {
    $.ajax({
      url: Api.geturl('getLotteryTimes', p),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getSimilar: function (p, fn) {
    $.ajax({
      url: Api.geturl('getSimilar', p),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  addOrder: function (obj, fn) {
    $.ajax({
      url: obj.lottery === 'WBGMMC' ? Api.url + '/api/u/v1/lottery/add_order_now' : Api.url + '/api/u/v1/lottery/add_order',
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  cancelOrder: function (obj, fn) {
    $.ajax({
      url: Api.geturl('cancelOrder', obj),
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  cancelOrderMarket: function (obj, fn) {
    $.ajax({
      url: Api.geturl('cancelOrderMarket', obj),
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  getLotteryFavorite: function (fn) {
    $.ajax({
      url: Api.url + '/api/u/v1/lottery/getLotteryFavorite',
      type: 'GET',
      cache: false,
      dataType: 'json'
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  updateLotteryFavorite: function (obj, fn) {
    $.ajax({
      url: Api.url + '/api/u/v1/lottery/updateLotteryFavorite',
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  addLotteryFavorite: function (obj, fn) {
    $.ajax({
      url: Api.url + '/api/u/v1/lottery/addLotteryFavorite',
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  delLotteryFavorite: function (obj, fn) {
    $.ajax({
      url: Api.url + '/api/u/v1/lottery/delLotteryFavorite',
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  getRecency: function (obj, fn) {
    $.ajax({
      url: Api.geturl('getRecency', obj),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  getRecencyDetail: function (obj, fn) {
    $.ajax({
      url: Api.url + '/api/u/v1/lottery/recent_detail',
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  addOrderMarket: function (obj, fn) {
    $.ajax({
      url: Api.url + '/api/u/v1/lottery_market/add_order',
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  getSameNumber: function (obj, fn) {
    $.ajax({
      url: Api.geturl('getSameNumber', obj),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getTradeNumber: function (obj, fn) {
    $.ajax({
      url: Api.geturl('getTradeNumber', obj),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getOrderDetail: function (obj, fn) {
    $.ajax({
      url: Api.url + '/api/u/v1/lottery_market/order_detail',
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getDish: function (obj, fn) {
    $.ajax({
      url: Api.geturl('getDish', obj),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: obj
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getUserTradeVolume: function (s, fn) {
    $.ajax({
      url: Api.geturl('getUserTradeVolume', s),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: s
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  getMoney: function (fn) {
    $.ajax({
      url: Api.url + '/api/u/money',
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: s
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  getTrace: function (p, fn) {
    Api.getCommon('getTrace', p, fn);
  },
  getMarketTrace: function (p, fn) {
    Api.getCommon('getMarketTrace', p, fn);
  },
  cancelTrace: function (p, fn) {
    Api.getCommon('cancelTrace', p, fn);
  },
  cancelMarketTrace: function (p, fn) {
    Api.getCommon('cancelMarketTrace', p, fn);
  },
  //活动列表页数据
  getActivity: function (p, fn) {
    var url = Api.geturl('queryActivity').replace('/lottery/', '/sobet/');
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      cache: false,
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn('error');
    });
  },
  //中奖喜报
  getWinResultsList: function (cb) {
    var url = Api.url + Api.apimap.route['getWinResultsList'];
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      cache: false,
    }).done(function (res) {
      cb(res);
    }).fail(function (err) {
      cb(err);
    });
  },
  //是否有契约
  haveContractInfo: function (p, fn) {
    $.ajax({
      url: Api.geturl('haveContractInfo', p),
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    })
  },
  //骰宝中奖金额
  queryOrderTotalInfo: function (p, cb) {
    var url = Api.url + Api.apimap.route['queryOrderTotalInfo'];
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      cache: false,
      data: p,
    }).done(function (res) {
      cb(res);
    }).fail(function (err) {
      cb(err);
    });
  },
  //获取昵称
  getNickname: function (fn) {
    $.ajax({
      url: "/sobet/userInfo/userInfoAjax",
      type: 'GET',
      cache: false,
      dataType: 'json',
      timeout: 30000,
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  //查询下级
  getLower: function (p, fn) {
    $.ajax({
      url: '/lottery/api/u/v1/chat/sub_contact',
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    })
  },

  //查询最近联系人
  recentContact: function (p, fn) {
    $.ajax({
      url: '/lottery/api/u/v1/chat/recent_contact',
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    })
  },

  //查询上级
  agentSearch: function (fn) {
    $.ajax({
      url: '/lottery/api/u/v1/chat/agent_search',
      type: 'POST',
      cache: false,
      dataType: 'json'
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    })
  },

  //查询用户历史记录
  historyMsg: function (p, fn) {
    $.ajax({
      url: '/lottery/api/u/v1/chat/history_message',
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    })
  },

  //查询管理员消息
  adminMsg: function (p, fn) {
    $.ajax({
      url: Api.sso + '/message/getPreAdminMessage_ajaxList_history',
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    })
  },

  //精确搜索下级
  searchLower: function (p, fn) {
    $.ajax({
      url: '/lottery/api/u/v1/chat/sub_search',
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    })
  },
  //更新读取上级的信息
  setMsgStatus: function (p) {
    $.ajax({
      url: '/lottery/api/u/v1/chat/set_msg_status',
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: p
    })
  },
  //更新我读取的信息
  setUserMsgStatus: function (p) {
    $.ajax({
      url: '/lottery/api/u/v1/chat/set_user_msg_status',
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: p
    })
  },
  //查询右侧栏是否有信息
  checkMsg: function (fn) {
    $.ajax({
      url: '/lottery/api/u/v1/chat/check_message',
      type: 'POST',
      cache: false,
      dataType: 'json'
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    })
  }
};