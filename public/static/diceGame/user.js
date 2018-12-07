var User = User || {};
User = {
  roleType: {
    TOP_LEVEL_1: 1,
    TOP_LEVEL_2: 2,
    DIRECT: 3,
    AGENT: 4,
    PLAYER: 5
  },
  platformNum: {
    ONE: 1,
    TWO: 2
  },
  sso: globeEnv[envFlag].auth, //sso登录地址
  app: globeEnv[envFlag].sso,
  ssoapi: {
    'login': globeEnv[envFlag].auth + '/login', //1.1.单点登录 [SSO接口,非用户中心接口，需提供appId参数]
    'logout': globeEnv[envFlag].auth + '/logout', //1.2.登出 [SSO接口,非用户中心接口]
    'status': globeEnv[envFlag].auth + '/u/getUserLoginState', //1.3.查询用户登录状态 [SSO接口,非用户中心接口，需提供appId参数]
    'msgs': globeEnv[envFlag].auth + '/u/getUserNewsCount', //1.4.查询用户最新的消息条数 [SSO接口,非用户中心接口，需提供appId参数]
    'balance': globeEnv[envFlag].auth + '/u/getUserBalance', //1.5.查询用户余额 [SSO接口,非用户中心接口，需提供appId参数]
    'verify': globeEnv[envFlag].auth + '/validateImageCode' //1.6.验证码输入判断接口
  },
  api: {
    'verify': globeEnv[envFlag].sso + '/validateImageCode', //2.1.验证码输入判断接口
    'exist': globeEnv[envFlag].sso + '/customerRegister/cnValidate', //2.2.验证用户是否存在
    'register': globeEnv[envFlag].sso + '/customerRegister', //2.3.验证码输入判断接口 [用户中心接口，需提供appId参数]
    'logout': globeEnv[envFlag].sso + '/logout', //2.4.退出
    '': ''
  },
  looptime: 30000,
  local_url: window.location.origin || (window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '')),
  local_path: window.location.pathname,
  app_context: "", //加载该js的应用的名称
  loginOutRedirectUrl: null, //登出登出之后重定向url
  userLogout: null, //登出成功之后回调函数
  looprefresh: null,
  name: '',
  isShow: null,//是否显示上下级转账
  isCrossShow: null, // 是否显示跨级转账
  balance: 0,
  init: function() {
    var $body = $('body');
    if (!$body.hasClass('mc-2') && this.isPlatformTwo()) {
      $body.addClass('mc-2');
    } else {
      if (this.isPlatformOne()) {
        !$body.hasClass('mc-1') && $body.addClass('mc-1');
      }
    }
    // !$('body').hasClass('mc-2') && $('body').addClass(this.isPlatformTwo() ? 'mc-2' : '');
  },
  platformId: function() {
    return localStorage.getItem('platformId');
  },
  isPlatformOne: function() {
    return this.platformId() == this.platformNum.ONE;
  },
  isPlatformTwo: function() {
    return this.platformId() == this.platformNum.TWO;
  },
  clearPlatformData: function() {
    localStorage.removeItem('platformId');
    localStorage.removeItem('roleType');
  },
  //[封][SSO接口1.1,非用户中心接口，需提供appId参数] //登陆成功之后回调函数,参数1为传入回调函数
  userLogin: function () {
    var loginbackfn;
    var login_platform = window.location.pathname + '/';
    login_platform = login_platform.replace(/\/+/g, '/');
    login_platform = login_platform.match(/\/([^\/]+)/i) ? login_platform.match(/\/([^\/]+)/i)[0] : '/';
    if (arguments.length > 0) {
      loginbackfn = arguments[0];
    }

    $(document.body).append('<iframe id="login-iframe" style="display: none;"></iframe>');
    $("iframe#login-iframe").attr('src', login_platform + '/u/login?backType=0&t=' + (new Date()).getTime());
    $("iframe#login-iframe").load(function () {
      if (typeof loginbackfn === 'function') {
        loginbackfn();
      }

      if (typeof User.loginOk === 'function') {
        User.loginOk();
      }

      //获取用户总消息数 和 用户余额
      User.updateMsg();
      User.updateMoney();

      setTimeout(function () {
        $("iframe#login-iframe").remove();
      }, 1000);
    });
  },
  //[封][SSO接口1.1,非用户中心接口，需提供appId参数] //注册成功之后的回调函数
  registerCallback: function (usr, pwd) {
    User.ssoUserLogin({
      backurl: '?',
      context: $('.loginform'),
      name: usr,
      pwd: pwd
    }, function (res) {
      if (res.code == 0) {
        if ($('.loginform #rememberme:checked').size() > 0) {
          Cookies.set('lastlogin', usrname, {
            expires: 7
          });
        } else {
          Cookies.remove('lastlogin');
        }
        User.updateMoney();
        User.userLogin();

        $("ul.welcome li.guest").hide();
        $("ul.welcome li.customer").show();
      }
    });
  },
  //[原][SSO接口1.1,非用户中心接口，需提供appId参数]
  ssoUserLogin: function (s, fn) {
    var ssoParams = [
      User.ssoapi['login'],
      '?',
      'callback=', s.backurl,
      '&way=pwd',
      '&from=portal',
      '&cn=', s.name,
      '&appId=', globeId(User.local_path),
      '&password=', md5(s.pwd)
    ];

    if (typeof s.capchaCode !== 'undefined') {
      ssoParams.push('&capchaCode=' + s.capchaCode);
    }
    $.ajax({
      url: ssoParams.join(''),
      async: false,
      context: s.context,
      dataType: 'jsonp',
      async: false,
      jsonpCallback: 'jsonp1',
      cache: false,
      error: function (xhr) {
        fn(xhr);
      },
      success: function (res) {
        fn(res);
      }
    });
  },
  //[原][SSO接口1.2,非用户中心接口]IFRAME方式
  iframeLogout: function () {
    $(document.body).append('<iframe id="logout-iframe" style="display: none;"></iframe>');
    $("iframe#logout-iframe").attr('src', User.ssoapi['logout'] + '?cn=' + User.name + '&noRedirect=true&t=' + (new Date()).getTime());
    $("iframe#logout-iframe").load(function () {
      $("#globe-welcome .customer span.nickname").empty();
      $("#globe-welcome .customer .cash").empty();
      $("#globe-welcome .showmoney").attr('rel', 0);
      $('#globe-welcome .customer').hide();
      $('#globe-welcome .guest').show();

      if (typeof Lottery !== 'undefined') {
        //Lottery.updateRecency();
      }

      setTimeout(function () {
        $("iframe#logout-iframe").remove();
      }, 1000);

      window.location = Navigation.path;

    });
  },
  //[封][SSO接口1.2,非用户中心接口] //快速退出
  userQuit: function () {
    $('.quitall').unbind('click').click(function () {
      var d = dialog({
        title: '温馨提示',
        content: '您确定要退出吗？',
        skin: 'confirm-again',
        fixed: true,
        button: [{
          id: 'logout-ok',
          value: '确定',
          callback: function () {
            User.clearPlatformData();
            if (User.userLogout) {
              User.userLogout(function (res) {
                User.iframeLogout();
              });
            } else {
              User.iframeLogout();
            }
          }
        }, {
          id: 'logout-cancel',
          skin: 'cancel',
          value: '取消'
        }]
      }).showModal();
    });
  },
  //[原][SSO接口1.3,非用户中心接口，需提供appId参数]
  getStatus: function (fn) {
    $.ajax({
      url: User.ssoapi['status'] + '?appId=' + globeId(User.local_path),
      type: 'GET',
      async: false,
      dataType: 'jsonp',
      jsonpCallback: 'jsonp1',
      cache: false,
    }).done(function (res) {
      fn(res);
    }).fail(function (res) {
      fn(res);
    });
  },
  //[封][SSO接口1.3,非用户中心接口，需提供appId参数] //前置检查登录状态
  chkLogin: function () {
    var backfn;
    if (arguments.length > 0) {
      backfn = arguments[0];
    }
    User.getStatus(function (d) {
      if (d.server && d.server === 'maintenance') { //系统维护提示
        var content = d.tipinfo ? d.tipinfo : 　'系统维护正，预计' + d.time + '结束!';
        dialog({
          content: content,
          button: [{
            'value': '确定',
          }],
        }).showModal();
        return;
      }
      if (d.code === 0) {
        if ($('#loginiframe').length) {
          $('#loginiframe').remove();
        }
        User.userLogin(backfn);
      } else if (d.code === -1) {
        // 需要登录
        if (!$(".loginlnk").hasClass('waiting')) {
          var loginTip = dialog({
            id: "",
            skin: "loginTip",
            title: "温馨提示",
            content: d.msg,
            fixed: true,
            cancel: false,
            button: [{
              id: 'logout-ok',
              value: '确定',
              callback: function () {
                $(".loginlnk").trigger('click');
              }
            }]
          }).showModal();
        }
      } else if (d.code === -2) {
        var loginTip = dialog({
          id: "",
          skin: "loginTip",
          title: "温馨提示",
          content: d.msg,
          fixed: true,
          cancel: false,
          button: [{
            id: 'logout-ok',
            value: '确定',
            callback: function () {
              $(".loginlnk").trigger('click');
            }
          }]
        }).showModal();
      }
    });
  },
  //[原][SSO接口1.4,非用户中心接口，需提供appId参数]
  getMsg: function (fn) {
    $.ajax({
      url: User.ssoapi['msgs'] + '?appId=' + globeId(User.local_path),
      type: 'GET',
      dataType: 'json',
      cache: false,
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  //[封][SSO接口1.4,非用户中心接口，需提供appId参数] //显示信息提示红点
  updateMsg: function () {
    User.getMsg(function (data) {
      if (data.code === 0 && parseInt(data.result, 10) > 0) {
        $('i.newstotal').html(parseInt(data.result, 10)).show();
      } else {
        $('i.newstotal').hide();
      }
      setTimeout(function () {
        User.updateMsg();
      }, 300000)
    });
  },
  //获取用户总余额
  getUserMoney: function (fn) {
    $.ajax({
      url: User.ssoapi['balance'],
      type: 'GET',
      dataType: 'json',
      data: 'appId=' + globeId(User.local_path),
      cache: false
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn('error');
    });
  },
  //获取账户是否返点7.5以上
  agentTransferIsShow: function (fn) {
    $.ajax({
      url: '/sobet/pay/agentTransferIsShow',
      type: 'GET',
      dataType: 'json',
      cache: false
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn('error');
    });
  },
  //[原][SSO接口1.5,非用户中心接口，需提供appId参数]
  getMoney: function (fn) {
    $.ajax({
      url: User.ssoapi['balance'] + '?appId=' + globeId(User.local_path),
      type: 'GET',
      cache: false,
      dataType: 'json'
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  //[封][SSO接口1.5,非用户中心接口，需提供appId参数]
  updateMoney: function () {
    var me = this;
    me.getMoney(function (d) {
      var d = d.result;

      var path = window.location.pathname;
      var lastpast = User.sso.split('/'),
        fullpath, pathprefix = '';
      if (lastpast.length > 3) {
        fullpath = '/' + lastpast[lastpast.length - 1] + '/login';
        pathprefix = '/' + lastpast[lastpast.length - 1];
      }

      if (typeof d == 'undefined') {
        $("#globe-welcome .customer span.nickname").empty();
        $("#globe-welcome .customer .cash").empty();
        $("#globe-welcome .showmoney").attr('rel', 0);
        $('#globe-welcome .customer').hide();
        if (path != '/sobet/login' && path != '/') {
          $('#globe-welcome .guest').show();
        }

        return false;
      }
      if (typeof d.userMoney != 'undefined') {
        User.name = d.name;
        //填充昵称
        $("#globe-welcome .customer span.nickname").html(d.name);
        $('#globe-welcome span.nickname').html(d.name);
        $('#globe-welcome span.nickname').attr('typ', d.type);
        $('#globe-welcome .guest').hide();
        $('#globe-welcome .customer').show();
        $('#ucenter .user-info h2 a').html(d.name);
        // 返回用户类型5为管理员账号
        if (parseInt(d.type, 10) === 5) {
          $('#globe-welcome li.customer:gt(0):lt(4)').hide();
          $('#globe-welcome li.customer a.sso').attr('href', 'javascript:;').attr('target', '_self');
          $('.aside a.go-history,.aside a.go-report').addClass('disabled');
          $('#globe-welcome li.box-nav div.yue').hide();
          $('a.submit').addClass('locked');
        } else {
          $('#globe-welcome li.box-nav div.yue').show();
          $('#globe-welcome li.customer:gt(0):lt(4)').show();
        }
        $('.aside .btns').removeClass('btns-half');
        $('.aside a.go-agent').removeClass('disabled').show();
        $('.shoplnk').show();
        //$("#globe-welcome .customer .cash").html(d.point);
        //填充金额
        $("#globe-welcome .showmoney").attr('rel', Number(d.userMoney.avail).toFixed(4));

        if (d.userMoney.avail && d.userMoney.avail !== '') {
          var num = Number(d.userMoney.avail).toFixed(4);
          var n = num / 15;
          $('.showmoney em').html(Number(n).toFixed(4));

          var money_t = setInterval(function () {
            n = n + num / 10;
            if (n >= num) {
              n = num;
              clearInterval(money_t);
            }
            $('.showmoney em').html(Number(n).toFixed(4));
          }, 150);

        }

      } else {
        $("#globe-welcome .customer span.nickname").empty();
        $("#globe-welcome .customer .cash").empty();
        $("#globe-welcome .showmoney").attr('rel', 0);
        $('#globe-welcome .customer').hide();

        if (path === pathprefix + '/login' || path === '/sobet/login' || path === pathprefix + '/registerPage' || path === pathprefix + '/userInfo/forgetPassword' || path === pathprefix + '/views/index.jsp' || path === fullpath) {
          $('#globe-welcome .guest').hide();
        } else {
          $('#globe-welcome .guest').show();
        }
      }
    });
  },
  //[用户中心接口2.1]OLD
  chkVerifyCode: function (type, code, fn) {
    $.ajax({
      url: User[type]['verify'],
      type: 'POST',
      dataType: "jsonp",
      cache: false,
      data: {
        'imageCode': code
      }
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  //[用户中心接口2.2]OLD
  chkUserExist: function (username, fn) {
    $.ajax({
      url: User.api['exist'],
      type: 'POST',
      cache: false,
      dataType: "jsonp",
      data: {
        'type': 'jsonp',
        'cn': username,
        'userName': username
      }
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  //[用户中心接口2.3]OLD //用户中心注册新用户 [需提供appId参数]
  ssoUserReg: function (s, fn) {
    $.ajax({
      url: User.api['register'] + '?appId=' + globeId(User.local_path),
      type: 'POST',
      dataType: 'jsonp',
      cache: false,
      data: {
        'cn': s.cn,
        'password': md5(s.pwd),
        'authCode': s.code
      }
    }).done(function (res) {
      fn(res);
    }).fail(function () {
      fn("error");
    });
  },
  //[用户中心接口2.4]OLD //[用户中心退出]跨域方式，暂未使用
  ssoUserLogout: function (s, fn) {
    var ssoParams = [
      User.api['logout'],
      '?',
      'appContext=', User.sso
    ];
    $.ajax({
      url: ssoParams.join(''),
      dataType: 'jsonp',
      cache: false,
      error: function (xhr) {
        fn(xhr)
      },
      success: function (res) {
        fn(res);
      }
    });
  },
  //[用户中心接口2.5]获取用户公告，position为top时，显示在顶部翻滚显示
  getAlertMessage: function (s, fn) {
    $.ajax({
      url: '/sobet/adminCommon/getAdminNotice.do',
      dataType: 'json',
      data: s,
      cache: false,
      error: function (xhr) {
        fn(xhr)
      },
      success: function (res) {
        fn(res);
      }
    });
  },
  //[用户中心接口2.6]获取滚动BANNER
  getSlides: function (s, fn) {
    if (!s.hasOwnProperty('platformId')) {
      s.platformId = this.platformId();
    }
    $.ajax({
      url: '/sobet/api/i/anon/activity/queryCurrentActivity',
      dataType: 'json',
      data: s,
      cache: false,
      error: function (xhr) {
        fn(xhr)
      },
      success: function (res) {
        fn(res);
      }
    });
  },
  /* INPUT输入格式验证 */
  inputChk: function (a, fn) {
    var waitsecond = 400;
    if (arguments.length > 2) {
      waitsecond = arguments[2];
    }
    a.keyup(User.debouncer(fn, waitsecond));
    a.blur(User.debouncer(fn, 200));
    a.on("paste", User.debouncer(fn, 200));
    a.change(User.debouncer(fn, 200));
  },
  /* INPUT输入格式验证空 */
  inputBlankCheck: function (a, form, blank) {
    var waitsecond = 400;
    if (arguments.length > 3) {
      waitsecond = arguments[3];
    }

    var chkfun = function () {
      var taginput = a.attr('name');
      var cls = 'errorcount';
      var blabktip = blank;
      if (a.val() == '') {
        form.find('.regform-error[name="' + taginput + '"]').html(blabktip).css('opacity', 1).addClass(cls);
      } else {
        form.find('.regform-error[name="' + taginput + '"]').css('opacity', 0).removeClass(cls);
        $('.loginform #loginnow').removeClass('loading');
      }
    };

    User.inputChk(a, chkfun, waitsecond);
  },
  /* INPUT输入格式验证用户名 */
  inputFormatCheck: function (a, re, form, blank) {
    var waitsecond = 400;
    if (arguments.length > 4) {
      waitsecond = arguments[4];
    }

    var f = function () {
      var event = arguments[0];
      var taginput = a.attr('name');
      var cls = 'errorcount';
      var blabktip = blank;
      var errorCode = 3;
      var errorCodeDict = {
        '1': blabktip,
        '2': a.attr('rel')
      };
      errorCodeDict['type'] = event.type;
      if (a.val() == '') {
        errorCode = 1;
      } else {
        if (!re.test(a.val())) {
          errorCode = 2;
        } else {
          errorCode = 3;
        }
      }

      if (errorCode < 3) {
        if (typeof form === 'function') {
          form(errorCode, errorCodeDict);
          return;
        }
        form.find('.regform-error[name="' + taginput + '"]').html(errorCodeDict[errorCode]).css('opacity', 1).addClass(cls);
      } else {
        if (typeof form === 'function') {
          form(errorCode, {
            'type': event.type
          });
          return;
        }
        form.find('.regform-error[name="' + taginput + '"]').css('opacity', 0).removeClass(cls);
      }
    };
    User.inputChk(a, f, waitsecond);
  },
  /* INPUT输入格式验证密码配对 */
  inputPwdFormatCheck: function (a, re, form, blank, pairname, pair) {
    var f = function () {
      var taginput = a.attr('name');
      if (a.val() == '') {
        form.find('.regform-error[name="' + taginput + '"]').html(blank).css('opacity', 1).addClass('errorcount');
      } else {

        if (!re.test(a.val())) {
          form.find('.regform-error[name="' + taginput + '"]').html(a.attr('rel')).css('opacity', 1).addClass('errorcount');
        } else {
          if (a.val() != pair.val()) {
            if (pair.val() != '') {
              form.find('.regform-error[name="' + taginput + '"]').html('两次输入的密码不一致').css('opacity', 1).addClass('errorcount');
            } else {
              form.find('.regform-error[name="' + taginput + '"]').css('opacity', 0).removeClass('errorcount');
            }
          } else {
            form.find('.regform-error[name="' + taginput + '"]').css('opacity', 0).removeClass('errorcount');
            form.find('.regform-error[name="' + pairname + '"]').css('opacity', 0).removeClass('errorcount');
          }
        }
      }
    }
    User.inputChk(a, f);
  },
  /* INPUT输入格式验证密码配对 */
  inputRegexCheck: function (a, re) {
    return !re.test(a.val());
  },
  /* 简单随机函数 */
  getRandom: function () {
    return Math.floor(Math.random() * 8 + 1);
  },
  /* 延迟函数 */
  debouncer: function (func, timeout) {
    var timeoutID, timeout = timeout || 200;
    return function () {
      var scope = this,
        args = arguments;
      clearTimeout(timeoutID);
      timeoutID = setTimeout(function () {
        func.apply(scope, Array.prototype.slice.call(args));
      }, timeout);
    };
  },
  /* 字符截取函数 */
  cutcombine: function (str, n) {
    var r = /[^\x00-\xff]/g;
    if (str.replace(r, "mm").length <= n) {
      return str;
    }
    var m = Math.floor(n / 2);
    for (var i = m; i < str.length; i++) {
      if (str.substr(0, i).replace(r, "mm").length >= n) {
        return str.substr(0, i) + "...";
      }
    }
    return str;
  },
  datetimeFormat: function (datetime, format) {
    //将 2016-01-01 转换成 2016/01/01 兼容IE8
    datetime = datetime.replace(/-/g, "/");
    var date = new Date(datetime);
    if (format === undefined) {
      return 'Error Format';
    }
    return date.Format(format);
  }
};

/*日期格式化函数*/
Date.prototype.Format = function (formatStr) {
  var str = formatStr;
  str = str.replace(/YYYY/, this.getFullYear());
  str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
  str = str.replace(/DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
  str = str.replace(/hh/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
  str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
  str = str.replace(/ss/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());

  return str;
};

function jsonp1(obj) { //jsonp 数据转换
  return obj;
}

User.init();