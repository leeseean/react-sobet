/* jshint devel:true */

var Q = Q || {};

Q = {
  /* 格式化日期 */
  formatOne: 'MM-dd hh:mm:ss',
  convertStamp: function (d, format) {
    var date = new Date(parseInt(d));
    if (format === undefined) {
      return 'Error Format';
    }
    var map = {
      'M': date.getMonth() + 1,
      'd': date.getDate(),
      'h': date.getHours(),
      'm': date.getMinutes(),
      's': date.getSeconds(),
      'q': Math.floor((date.getMonth() + 3) / 3), //季度
      'S': date.getMilliseconds() //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
      var v = map[t];
      if (v !== undefined) {
        if (all.length > 1) {
          v = '0' + v;
          v = v.substr(v.length - 2);
        }
        return v;
      } else if (t === 'y') {
        return (date.getFullYear() + '').substr(4 - all.length);
      }
      return all;
    });
    return format;
  },
  datetimeFormat: function (datetime, format) {
    //YYYYMMDDhhmmss
    var date = new Date(datetime);
    if (format === undefined) {
      return 'Error Format';
    }
    return date.Format(format);
  },
  secondFormat: function (s) {
    var sec_num = parseInt(s, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    var time = s > 3600 ? hours + ':' + minutes + ':' + seconds : minutes + ':' + seconds;
    return time;
  },
  formatNull: function (d) {
    return d === null ? 0 : d;
  },
  unique: function (array) {
    var n = {},
      arr = [];
    for (var i = 0; i < array.length; i++) {
      if (!n[array[i]]) {
        n[array[i]] = true;
        arr.push(array[i]);
      }
    }
    return arr;
  },
  nameLottery: function (lottery) {
    return LotteryClass.names[lottery] || '';
  },
  //赔率保留小数变化
  keepDecimal: function (number) {
    var n = parseInt(number).toString().length;
    if (n >= 2) {
      return number.toFixed(2);
    } else {
      return number.toFixed(3);
    }
  },
  getIcon: function (t) {
    if (t !== undefined) {
      return '<div class="icon"><i>' + (parseInt(t, 10) ? '卖' : '买') + '</i></div>';
    } else {
      return '';
    }
  },
  nameCode: function (desc) {
    if (desc == null) {
      return '';
    }
    var idx = desc.indexOf(' ');
    return {
      name: desc.substr(0, idx),
      code: desc.substr(idx + 1)
    };
  },
  iconGreenChs: function (typ) {
    var typCls = {
      '买': 0,
      '卖': 1
    };
    return typCls[typ];
  },
  traceType: function (type) {
    var traceType = ['利润率追号', '同倍追号', '翻倍追号', '买彩票同倍追号', '卖彩票同倍追号'];
    return traceType[parseInt(type, 10) - 1] || '未指定';
  },
  traceChs: function (typ) {
    var traceCls = ['追中继续', '追中即停'];
    return traceCls[typ];
  },
  iconGreen: function (typ) {
    var typCls = ['买', '卖'];
    return typCls[typ];
  },
  itemTyp: function (typ) {
    var typCls = ['buy', 'sale'];
    return typCls[typ] || '';
  },
  getMethodName: function (method, lottery) {
    if (method === null || method === '') {
      return '-';
    }
    /* 
      显示微信端的pk10定位胆玩法名，因为微信端拆单了这边没拆
    */
    const wxPkDwdOBj = {
      'dwd_dwd_d1': '第一名定位胆',
      'dwd_dwd_d2': '第二名定位胆',
      'dwd_dwd_d3': '第三名定位胆',
      'dwd_dwd_d4': '第四名定位胆',
      'dwd_dwd_d5': '第五名定位胆',
      'dwd_dwd_d6': '第六名定位胆',
      'dwd_dwd_d7': '第七名定位胆',
      'dwd_dwd_d8': '第八名定位胆',
      'dwd_dwd_d9': '第九名定位胆',
      'dwd_dwd_d10': '第十名定位胆',
      'dwd_dwd_dwd11y_d1': '第一名定位胆',
      'dwd_dwd_dwd11y_d2': '第二名定位胆',
      'dwd_dwd_dwd11y_d3': '第三名定位胆',
    };
    if (wxPkDwdOBj[method]) {
      return wxPkDwdOBj[method] || '-';
    } else {
      var m = method.split('_');
      if(!LotteryClass[lottery]['ltMethod'][m[0]] || !LotteryClass[lottery]['ltMethod'][m[0]][m[1]] || !LotteryClass[lottery]['ltMethod'][m[0]][m[1]]['method'][m[2]]) {
        return '-';
      } else {
        return LotteryClass[lottery]['ltMethod'][m[0]][m[1]]['method'][m[2]]['name']
      }
    }
  },

  getLottryCode: function(method) {
    if (Q.oldToNew[method] !== undefined) {
      return Q.oldToNew[method]
    } else {
      return method
    }
  },
  getPositionName: function (pos, lottery) {
    var posConf = ["万", "千", "百", "十", "个"];
    if (lottery === 'HNKY481') {
      posConf = ["自由泳", "仰泳", "蛙泳", "蝶泳"];
    }
    pos = pos ? ' ' + pos : '';
    return pos.replace(/\d/g, function ($1) {
      return posConf[$1 - 1];
    });
  },
  nameContent: function (desc) {
    return Q.nameCode(desc).code;
  },
  expireFormat: function (d) {
    return parseInt(d, 10) > 0 ? d + '天' : '永久有效';
  },
  urlFormat: function (url) {
    return 'http://' + window.location.host + url;
  },
  statusFormat: function (n) {
    var s = ['正常', '过期'];
    return s[n] || '';
  },
  percentFormat: function (num) {
    var dotnum = 2;
    if (arguments.length > 1) dotnum = arguments[1];

    if (num == 0 || parseInt(num * 100, 10).toFixed(dotnum) == Number(num * 100).toFixed(dotnum)) {
      return parseInt(num * 100, 10);
    }
    return parseFloat(num * 100).toFixed((dotnum == 2 ? 1 : dotnum));
  },
  percentStyle: function (num) {
    if (num == -1) {
      return ' rateabnormal';
    }
    return ' ratenormal';
  },
  doubleFormat: function (num) {
    var defaultnum = 3;
    if (num == 0 || parseInt(num, 10).toFixed(3) == Number(num).toFixed(3)) {
      return parseInt(num, 10);
    }
    if (arguments.length > 1) defaultnum = arguments[1];
    return parseFloat(num).toFixed(defaultnum);
  },
  lotteryPointDiff: function (num) {
    return parseFloat((num * 100 - 0.1)).toFixed(1);
  },
  descFormat: function (code, method) {
    var me = this;
    var m = method.split('_');
    var desc = code.split('|');

    // 苦逼的产品需求 投注详情号码样式展示
    if ((m[1] === 'zx' || m[1] === 'dwd') && (m[2] === 'fs' || m[2] === 'zh' || m[2] === 'hfs' || m[2] === 'qfs' || m[2] === 'dwd')) {
      for (var i = 0; i < desc.length; i++) {
        if (desc[i] === '') {
          desc[i] = '-';
        } else {
          desc[i] = desc[i].replace(/[,]/g, '');
        }
      }
      // 四星 三码对应位置加中划线
      switch (m[0]) {
        case 'sx':
          desc.unshift('-');
          break;
        case 'hsm':
          desc.unshift('-');
          desc.unshift('-');
          break;
        case 'qsm':
          desc.push('-');
          desc.push('-');
          break;
        case 'zsm':
          desc.unshift('-');
          desc.push('-');
          break;
        default:
          break;
      }

      // 单独处理后二复式 前二码复式
      if (m[2] === 'hfs') {
        if (me.cls === '3d') {
          desc.unshift('-');
        } else {
          desc.unshift('-');
          desc.unshift('-');
          desc.unshift('-');
        }
      }
      if (m[2] === 'qfs') {
        if (me.cls === '3d') {
          desc.push('-');
        } else {
          desc.push('-');
          desc.push('-');
          desc.push('-');
        }
      }
      desc = desc.join(',');
    } else if (m[2] === 'hz' || m[2] === 'qhz' || m[2] === 'hhz') {
      desc = desc.join('').replace(/,/g, ';');
    } else if (m[1] === 'zux' || m[2] === 'ds' || m[2] === 'qds' || m[2] === 'hds' || m[2] === 'zxds' || m[2] === 'zuxds' || m[0] === 'rxds' || m[1] === 'dxds') {
      desc = desc.join(';');
    }

    // 11选5的一些东东
    if ((m[0] === 'sm' && m[2] === 'zxfs') || m[2] === 'dwd11y') {
      desc.push('-');
      desc.push('-');
      desc.join('');
    } else if (m[0] === 'em' && m[2] === 'zxfs') {
      desc.push('-');
      desc.push('-');
      desc.push('-');
      desc.join('');
    } else if (m[1] === 'rxdt') {
      desc = code;
    }
    // 苦逼结束 他奶奶的

    return desc;
  },
  /* 投注模式 */
  modeName: function (mode) {
    var modeNameDict = {
      '2': '2元',
      '1': '1元',
      '0.2': '2角',
      '0.1': '1角',
      '0.02': '2分',
      '0.002': '2厘'
    };
    return modeNameDict[String(parseFloat(mode))] || '-';
  },
  modeNameVal: function (val) {
    var modeName = {
      '2元': 2,
      '1元': 1,
      '2角': 0.2,
      '1角': 0.1,
      '2分': 0.02,
      '2厘': 0.002
    };
    return modeName[val];
  },
  getItemIdForChange: function (id) {
    return id ? '<a class="change-issue" data-id="' + id + '">' + id + '</a>' : '-';
  },
  // 投注状态
  statusCls: function (status) {
    return parseFloat(status) > 0 ? ' status' : '';
  },
  // 投注状态
  statusChs: function (state) {
    var s = ['未开奖', '未中奖', '已派奖', '等待派奖', '个人撤单', '系统撤单', '已退款', '已中奖', '异常状态'];
    return s[state] || '';
  },
  istraceCh: function (a) {
    if (a === 1) return '是';
    return '否';
  },
  traceStatusChs: function (a) {
    var sCh = {
      '1': '<i class="altrace">已追</i>',
      '0': '未开始'
    };
    return sCh[a];
  },
  lotteryStatusChs: function (a) {
    var sCh = {
      '1': '<i class="already">已派奖</i>',
      '0': '未开奖'
    };
    return sCh[a];
  },
  agentStatusChs: function (a) {
    var sCh = {
      '1': '暂停',
      '0': '正常'
    };
    return sCh[a];
  },
  statusCh: function (a) {
    var sCh = {
      '0': '进行中',
      '1': '已完成',
      '2': '已取消',
      '4': '已撤单'
    };
    return sCh[a];
  },
  userChs: function (typ) {
    var sCh = ['普通用户', '代理用户', '代理用户', '代理用户', '商家', '管理用户']
    return sCh[typ];
  },
  combineChs: function (typ) {
    // 0：合庄 1：补充合庄资金 2:撤庄
    var sCh = ['合庄资金', '补充合庄资金', '撤庄资金']
    return sCh[typ];
  },
  setBalance: function (typ, id, point) {
    if (typeof point !== 'number') {
      return '';
    }
    if (point < 0.0751) {
      return '';
    }
    if (typ == '5') {
      return '';
    }
    return '<a class="hand balance" name="' + id + '" rel="balance">充值</a>';
  },
  setPermission: function (typ, id) {
    if (typ == '5') {
      return '<a class="hand setting" name="' + id + '" rel="permission">修改权限</a>';
    }
    return '';
  },
  lotteryChs: function (code) {
    var pauseLottery = {
      'CQ11Y': '重庆11选5'
    };

    if ($("#lotteryClass dd[data-lt=" + code + "] em").size() > 0) {
      return $("#lotteryClass dd[data-lt=" + code + "] em").html();
    } else {
      if (typeof pauseLottery[code] !== 'undefined') {
        return pauseLottery[code];
      }
      return '-';
    }
  },
  ltDesc: function (lottery) {
    var desc = {
      'WBG': '10:00-02:00 3分钟一期 共320期',
      'WBG5FC': '5分钟一期 全天参与',
      'RBSSM': '30秒一期 全天参与',
      'WBGFFC': '每分钟开奖 全天参与',
      'WBGMMC': '即买即开 无需等待',
      'CQSSC': '<span>10:00-22:00</span> 10分钟一期 共72期',
      'JXSSC': '<span>09:10-23:00</span> 10分钟一期 共84期',
      'XJSSC': '<span>10:10-02:00</span> 10分钟一期 共96期',
      'CQ11Y': '<span>9:10-23:00</span> 10分钟一期 共84期',
      'GD11Y': '<span>9:10-23:00</span> 10分钟一期 共84期',
      'JX11Y': '<span>9:10-23:00</span> 10分钟一期 共84期',
      'SD11Y': '<span>9:05-21:55</span> 10分钟一期 共78期',
      'HUB11Y': '<span>8:36-21:56</span> 10分钟一期 共81期',
      '3DFC': '每天一期 20:30开奖',
      'TCP3': '每天一期 20:30开奖',
      'BJPK10': '<span>9:02-23:57</span> 5分钟一期 共179期',
      'XGPK10': '<span>9:02-23:57</span> 5分钟一期 共179期',
      'HG1F5': '<span>07:00-05:00</span> 1.5分钟一期 共880期',
      'TJSSC': '<span>09:10-23:00</span> 10分钟一期 共84期',
      'SHSSL': '<span>10:30-21:30</span> 30分钟一期 共23期',
      'TCP5': '每天一期 20:30开奖',
      'SH11Y': '<span>9:00-23:50</span> 10分钟一期 共90期',
      'AH11Y': '<span>8:40-22:00</span> 10分钟一期 共81期',
      'HB11Y': '<span>8:30-22:30</span> 10分钟一期 共85期',
      'YN11Y': '<span>9:00-22:00</span> 10分钟一期 共85期',
      'SCKL12': '<span>9:00-22:00</span> 10分钟一期 连续开奖78期',
      'HNKY481': '<span>8:29-22:59</span> 10分钟一期 连续开奖88期',
    };
    var now = new Date();
    if (lottery === 'CQSSC' && (now.getHours() > 21 || now.getHours() < 2)) {
      desc['CQSSC'] = '22:00—01:55 5分钟一期 共48期';
    }
    return desc[lottery] || ''
  },
  checkDetail: function (id) {
    return id === undefined ? '&nbsp;' : '<a class="hand traceDetails" data-id="' + id + '">详情</a>';
  },
  checkDetailByStatus: function (id, status) {
    return (id === undefined || status === 4) ? '&nbsp;' : '<a class="hand traceDetails" data-id="' + id + '">详情</a>';
  },
  tracestatusChs: function (a) {
    var chs = {
      '1': '已追号',
      '0': '追号中',
      '2': '追号撤销',
      '3': '系统撤销'
    };
    return chs[a];
  },
  tracestatusDisable: function (a) {
    var chs = {
      '1': ' disabled="disabled"',
      '0': '追号中',
      '2': ' disabled="disabled"',
      '3': ' disabled="disabled"'
    };
    return chs[a];
  },
  traceDisable: function (id) {
    return id === undefined ? '' : ' disabled="disabled"';
  },
  traceClsDisable: function (a) {
    var chs = {
      '1': ' disabled',
      '0': '',
      '2': ' disabled',
      '3': ' disabled',
      '4': ' disabled'
    };
    return chs[a];
    //return id === undefined ? '' : ' disabled';
  },
  traceClsDisableId: function (orderid) {
    return orderid === undefined ? '' : ' disabled';
  },
  modeTyp: function (a, b) {
    if (typeof a === 'undefined') {
      return '';
    }
    var modeDict = {
      '0': 'Y',
      '1': 'SHI',
      '2': '是'
    };
    if (b === '0') {
      return modeDict[a];
    } else {
      return '否';
    }
  },
  /* 判断是否为数字类型 */
  isNumber: function (o) {
    return typeof o === 'number' && isFinite(o);
  },
  /* 千分位逗号 */
  thousandSep: function (num) {
    if (!Q.isNumber(num)) {
      return '-';
    }
    var n = num.toString(),
      p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, function ($0, i) {
      return p < 0 || i < p ? ($0 + ',') : $0;
    });
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
  /* INPUT输入格式验证 */
  inputChk: function (a, fn) {
    a.keyup(Q.debouncer(fn, 600));

    a.on("paste", function (e) {
      Q.debouncer(fn, 200);
    });

    a.change(function () {
      Q.debouncer(fn, 200);
    });
  },
  /* INPUT输入格式验证空 */
  inputBlankCheck: function (a, form, blank) {
    var f = function () {
      var taginput = a.attr('name');
      var cls = 'errorcount';
      var blabktip = blank;
      if (a.val() === '') {
        form.find('.regform-error[name="' + taginput + '"]').html(blabktip).css('opacity', 1).addClass(cls);
      } else {
        form.find('.regform-error[name="' + taginput + '"]').css('opacity', 0).removeClass(cls);
      }
    };
    Q.inputChk(a, f);
  },
  /* INPUT输入格式验证用户名 */
  inputFormatCheck: function (a, re, form, blank) {
    var f = function () {
      var taginput = a.attr('name');
      var cls = 'errorcount';
      var blabktip = blank;
      if (a.val() === '') {
        form.find('.regform-error[name="' + taginput + '"]').html(blabktip).css('opacity', 1).addClass(cls);
      } else {
        if (!re.test(a.val())) {
          form.find('.regform-error[name="' + taginput + '"]').html(a.attr('rel')).css('opacity', 1).addClass(cls);
        } else {
          form.find('.regform-error[name="' + taginput + '"]').css('opacity', 0).removeClass(cls);
        }
      }
    };
    Q.inputChk(a, f);
  },
  /* INPUT输入格式验证密码配对 */
  inputPwdFormatCheck: function (a, re, form, blank, pairname, pair) {
    var f = function () {
      var taginput = a.attr('name');
      if (a.val() === '') {
        form.find('.regform-error[name="' + taginput + '"]').html(blank).css('opacity', 1).addClass('errorcount');
      } else {
        if (!re.test(a.val())) {
          form.find('.regform-error[name="' + taginput + '"]').html(a.attr('rel')).css('opacity', 1).addClass('errorcount');
        } else {
          if (a.val() !== pair.val()) {
            if (pair.val() !== '') {
              form.find('.regform-error[name="' + taginput + '"]').html('两次输入的密码不一致').css('opacity', 1).addClass('errorcount');
            }
          } else {
            form.find('.regform-error[name="' + taginput + '"]').css('opacity', 0).removeClass('errorcount');
            form.find('.regform-error[name="' + pairname + '"]').css('opacity', 0).removeClass('errorcount');
          }
        }
      }
    };
    Q.inputChk(a, f);
  },
  getRandom: function () {
    return Math.floor(Math.random() * 8 + 1);
  },
  smartResize: function () {
    (function ($) {

      var $event = $.event,
        $special,
        resizeTimeout;

      $special = $event.special.debouncedresize = {
        setup: function () {
          $(this).on("resize", $special.handler);
        },
        teardown: function () {
          $(this).off("resize", $special.handler);
        },
        handler: function (event, execAsap) {
          // Save the context
          var context = this,
            args = arguments,
            dispatch = function () {
              // set correct event type
              event.type = "debouncedresize";
              $event.dispatch.apply(context, args);
            };

          if (resizeTimeout) {
            clearTimeout(resizeTimeout);
          }

          execAsap ?
            dispatch() :
            resizeTimeout = setTimeout(dispatch, $special.threshold);
        },
        threshold: 75
      };

    })(jQuery);
  },
  showPagination: function (page_no, page_size, total, totalpage) {
    $('#page').val(page_no);
    var total_page = Math.ceil(total / page_size);
    if (total_page !== totalpage && totalpage !== null) {
      total_page = totalpage;
    }
    if (total === 0) {
      return '';
    }
    var prev_page = '';
    var num_page = '';
    var next_page = '';
    if (page_no != 1) {
      prev_page = '<a href="javascript:void(0);" class="prev" page="' + (page_no - 1) + '">上一页</a>';
    }
    if (page_no !== total_page) {
      next_page = '<a href="javascript:void(0);" class="next" page="' + (page_no + 1) + '">下一页</a>';
    }

    if (page_no - 2 >= 1) {
      num_page += '<a href="javascript:void(0);" page="' + (page_no - 2) + '">' + (page_no - 2) + '</a>';
    }
    if (page_no - 1 >= 1) {
      num_page += '<a href="javascript:void(0);" page="' + (page_no - 1) + '">' + (page_no - 1) + '</a>';
    }
    //num_page += '<span class="page-cur">' + page_no + '</span>';
    num_page += '<a href="javascript:;" class="on" page="' + page_no + '">' + page_no + '</a>';
    if (page_no + 1 <= total_page) {
      num_page += '<a href="javascript:void(0);" page="' + (page_no + 1) + '">' + (page_no + 1) + '</a>';
      if (total_page > page_no + 2 && total_page < 4) {
        num_page += '<span class="page-break">...</span>';
      }
    }
    if (page_no + 2 <= total_page) {
      num_page += '<a href="javascript:void(0);" page="' + (page_no + 2) + '">' + (page_no + 2) + '</a>';
      if (page_no >= 2 && total_page > 6 && page_no > 99) {
        num_page += '<span class="page-break">...</span>';
      }
    }
    if (page_no + 3 <= total_page && page_no < 100) {
      num_page += '<a href="javascript:void(0);" page="' + (page_no + 3) + '">' + (page_no + 3) + '</a>';
      if (page_no >= 3 && total_page > 6) {
        num_page += '<span class="page-break">...</span>';
      }
    }
    if (page_no - 2 < 1 && page_no + 4 <= total_page) {
      num_page += '<a href="javascript:void(0);" page="' + (page_no + 4) + '">' + (page_no + 4) + '</a>';
      if (page_no == 2 && total_page > 6) {
        num_page += '<span class="page-break">...</span>';
      }
    }
    if (page_no == 1 && total_page >= 6) {
      num_page += '<a href="javascript:void(0);" page="' + (page_no + 5) + '">' + (page_no + 5) + '</a>';
      if (total_page > 6) {
        num_page += '<span class="page-break">...</span>';
      }
    }
    var pagination_html = [prev_page, num_page, next_page].join('');
    return pagination_html;
    //$('#pagination').html(pagination_html);
  },
  changeTypeChs: function (index) {
    var changeChs = [
      '游戏投注', '追号扣款', '奖金派送', '投注返点', '佣金收入', '撤单返款',
      '撤销追号', '撤销派奖', '撤销返点', '撤销佣金', '成交金额', '冻结返款', '', '', '', '活动红利'
    ];
    return changeChs[index - 1];
  },
  orderTypeChs: function (index) {
    var changeChs = [
      '交易市场', '传统投注'
    ];
    return changeChs[index];
  },
  isSelf: function (n) {
    return n !== undefined && parseInt(n, 10) === 1 ? 'highlight' : '';
  },
  calTxtwidth: function (el) {
    var html_org = el.html();
    var html_calc = '<span>' + html_org + '</span>';
    el.html(html_calc);
    var width = el.find('span:first').width();
    el.html(html_org);
    return width;
  },
  oddEven: function (intellect) {
    if (intellect % 2 === 0) {
      return intellect === 0 ? 'evenTr first' : 'evenTr';
    }
  },
  traceNumber: function (date, next, number) {
    if (number > 119) {
      var tempn = Math.abs(119 - number);
      number = tempn < 10 ? ('0' + tempn) : tempn;
      return next + '-' + number;
    } else {
      number = number + 1;
      return date + '-' + number;
    }

  },
  minutePer: function (start, per) {
    return (start + 1) * per;
  },
  nextDay: function (index, start) {
    if (start > 119) {
      return ' nextDay';
    }
    return '';
  },
  initChk: function (index) {
    if (index < 5) {
      return ' checked="checked"';
    }
    return '';
  },
  rightChk: function (index) {
    if (index) {
      return ' checked="checked"';
    }
    return '';
  },
  itemChk: function (index) {
    if (index < 5) {
      return ' chkitem';
    }
    return '';
  },
  itemNextDay: function (issue, time) {
    var lottery = Lottery.lt;
    if (issue.indexOf('-') > -1) {
      var now = new Date();
      if (String(issue.split('-')[0]) === now.Format('YYYYMMDD')) {
        return '';
      }
    } else {
      var now = new Date();
      if (String(time.split(' ')[0]) === now.Format('YYYY-MM-DD')) {
        return '';
      }
    }
    return ' nextDay';
  },
  sameTimes: function () {
    return 1;
  },
  doubleTimes: function () {
    return [
      1, 1, 2, 2, 4, 4, 8, 8, 16, 16,
      32, 32, 64, 64, 128, 128, 256, 256, 512, 512,
      1024, 1024, 2048, 2048, 4096, 4096, 8192, 8192, 16384, 16384,
      32768, 32768, 65536, 65536, 99999
    ];
  },
  initTraceList: function (index) {
    var max = Trace.maxtimes;
    var initlst = Q.doubleTimes();

    if (index < initlst.length) {
      return initlst[index];
    } else {
      return max
    }
  },
  initSameTraceList: function (index) {
    var initlst = Q.sameTimes();
    return initlst;
  },
  getUrlVars: function () {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  },
  numberConuter: function (els, maxs) {
    var initNumber = [];
    var speed = [40, 50, 20, 15, 30];
    if (arguments.length > 2) initNumber = arguments[2];
    if (arguments.length > 3) speed = arguments[3];

    Counter = (function () {
      function Counter() {}

      Counter.prototype.init = function (elments) {
        var most = Math.max.apply(null, maxs);
        var mindex = maxs.indexOf(String(most));

        for (j = 0; j < elments.length; j++) {
          if (initNumber.length > 0) {
            Counter.prototype['n' + j] = initNumber[j];
          } else {
            Counter.prototype['n' + j] = 1;
          }
        }

        return this.render = setInterval((function (_this) {
          return function () {
            for (i = 0; i < elments.length; i++) {

              if (_this['n' + i] == '0') {
                continue
              }

              if (i == mindex) {
                speed[i] = Math.min.apply(null, speed);
              }

              _this['n' + i] += Math.round(_this['n' + i] * Math.random() * speed[i]) / 100;

              if (_this['n' + i] > maxs[i]) {
                _this['n' + i] = maxs[i] + '.00';

                if (parseInt(maxs[i]) == maxs[i]) {
                  _this['n' + i] = maxs[i] + '.00';
                } else {
                  _this['n' + i] = maxs[i];
                }

              }
              if (_this['n' + i] <= parseFloat(maxs[i])) {

                if (parseInt(_this['n' + i]) == _this['n' + i]) {
                  elments[i].html(Q.thousandSep(parseFloat(_this['n' + i])) + '.00');
                } else {
                  elments[i].html(Q.thousandSep(Math.round(_this['n' + i] * 100) / 100));
                }

              }
            }

            if (els.length > 1 && maxs.length > 1) {
              if (_this['n' + mindex] == most) {
                return clearInterval(_this.render);
              }
            } else {
              if (_this['n0'] == most) {
                return clearInterval(_this.render);
              }
            }
          };
        })(this), 1000 / 60);
      };

      return Counter;

    })();
    var sTACounter = new Counter;
    var nowLoop = sTACounter.init(els);
    return nowLoop;
  },
  chkquota: function (num) {
    return parseFloat(num * 100) < 7.6 ? '0' : '1';
  },
  //加法  
  floatAdd: function (a, b) {
    var c, d, e;
    try {
      c = a.toString().split(".")[1].length;
    } catch (f) {
      c = 0;
    }
    try {
      d = b.toString().split(".")[1].length;
    } catch (f) {
      d = 0;
    }
    e = Math.pow(10, Math.max(c, d))
    return (Q.floatMul(a, e) + Q.floatMul(b, e)) / e;
  },

  //减法  
  floatSub: function (a, b) {
    var c, d, e;
    try {
      c = a.toString().split(".")[1].length;
    } catch (f) {
      c = 0;
    }
    try {
      d = b.toString().split(".")[1].length;
    } catch (f) {
      d = 0;
    }
    e = Math.pow(10, Math.max(c, d));
    return (Q.floatMul(a, e) - Q.floatMul(b, e)) / e;
  },

  //乘法  
  floatMul: function (a, b) {
    var c = 0,
      d = a.toString(),
      e = b.toString();
    try {
      c += d.split(".")[1].length;
    } catch (f) {}
    try {
      c += e.split(".")[1].length;
    } catch (f) {}
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
  },

  //除法  
  floatDiv: function (a, b) {
    var c, d, e = 0,
      f = 0;
    try {
      e = a.toString().split(".")[1].length;
    } catch (g) {}
    try {
      f = b.toString().split(".")[1].length;
    } catch (g) {}
    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), Q.floatMul(c / d, Math.pow(10, f - e));
  },

  floatSlice: function (a) {
    if (typeof a == 'number') {
      var arr = String(a).split('.');
      if (arr.length > 1) {
        arr[1] = arr[1].substring(0, 4);
      }
      return Number(arr.join('.'));
    }
  },

  locationName: function (name) {
    var location = {
      '12': '万千',
      '13': '万百',
      '14': '万十',
      '15': '万个',
      '23': '千百',
      '24': '千十',
      '25': '千个',
      '34': '百十',
      '35': '百个',
      '45': '十个',
      '123': '万千百',
      '124': '万千十',
      '125': '万千个',
      '134': '万百十',
      '135': '万百个',
      '145': '万十个',
      '234': '千百十',
      '235': '千百个',
      '245': '千十个',
      '345': '百十个',
      '1234': '万千百十',
      '1235': '万千百个',
      '1245': '万千十个',
      '1345': '万百十个',
      '2345': '千百十个'
    };
    return location[name];
  },
  //数学排列组合，从m个元素中取n个元素，元素相同但排列顺序不同算不同的组
  queueMath: function (arr, size) {
    if (size > arr.length) {
      return;
    }
    var allResult = [];

    function queue(arr, size, result) {
      if (result.length == size) {
        allResult.push(result);
      } else {
        for (var i = 0, len = arr.length; i < len; i++) {
          var newArr = [].concat(arr),
            curItem = newArr.splice(i, 1);
          queue(newArr, size, [].concat(result, curItem));
        }
      }
    }
    queue(arr, size, []);

    return allResult;
  },
  //数学排列组合，从m个元素中取n个元素，元素相同（不考虑排列顺序）算一组
  chooseMath: function (arr, size) {
    var allResult = [];

    function choose(arr, size, result) {
      var arrLen = arr.length;
      if (size > arrLen) {
        return;
      }
      if (size == arrLen) {
        allResult.push([].concat(result, arr))
      } else {
        for (var i = 0; i < arrLen; i++) {
          var newResult = [].concat(result);
          newResult.push(arr[i]);

          if (size == 1) {
            allResult.push(newResult);
          } else {
            var newArr = [].concat(arr);
            newArr.splice(0, i + 1);
            choose(newArr, size - 1, newResult);
          }
        }
      }
    }
    choose(arr, size, []);

    return allResult;
  },

  K3Num: {
    "hz_hz_hz": ['3_18', '4_17', '5_16', '6_15', '7_14', '8_13', '9_12', '10_11'],
  },
  PkNum: {
    hz_hz_q2: ['3_19', '4_18', '5_17', '6_16', '7_15', '8_14', '9_13', '10_12', '11'],
    hz_hz_q3: ['6_27', '7_26', '8_25', '9_24', '10_23', '11_22', '12_21', '13_20', '14_19', '15_18', '16_17'],
  },
  y11Num: {
    qw_qw_dds: ['50', '41', '32', '23', '14', '05'], //11选5定单双
    qw_qw_czw: ['3_9', '4_8', '5_7', '6', '5_7', '4_8', '3_9']//11选5猜中位
  },
  PkQ2Hz: {
    ds_ds_q2: ['dan', 'shuang'],
    dx_dx_q2: ['da', 'xiao'],
  },

  PKDXDS: {
    DX: ['da', 'xiao', 'he'],
    DS: ['dan', 'shuang', 'he'],
    WX: ['qd_qx', '41_14', '32_23', '32_23', '41_14', 'qd_qx'],
    SX: ['qd_qx', '31_13', '2d2x', '31_13', 'qd_qx'],
    SM: ['qd_qx', '21_12', '21_12', 'qd_qx']
  },

  SSCLHH: ['long', 'hu', 'he'],
  PKLHH: ['long', 'hu'],

  SDLHH: ['lh', 'lh', 'he'],
  SSCXT: [/*'bz', */'sz', 'dz', 'bs', 'zl'],
  SDXT: ['bz', 'sz', 'dz', 'bs', 'zl'],
  SSCWXXT: ['sitiao', 'hl', 'sz', 'santiao', 'ld', 'yd', 'dp'],
  SSCBJL: ['zhuang', 'xian', 'he', 'zhuangdui', 'xiandui', 'super6'],
  SSCNN: [ 'nda', 'nx', 'ndan', 'ns', 'wn', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9', 'nn'],
  SSC5XHZ: ['', '', '', '', 'dd', 'ds', 'xd', 'xs'],
  SSC5XHZ_CN: ['大', '小', '单', '双', '大单', '大双', '小单', '小双'],
  chaidanCn: { //单挑拆单对应显示文字
    /*'1':'万位',定位但不拆就不需要这了
    '2':'千位',
    '3':'百位',
    '4':'十位',
    '5':'个位',*/
    'dan': '单',
    'shuang': '双',
    'da': '大',
    'xiao': '小',
    'he': '和',
    'qd_qx': '全单（全双）',
    '41_14': '4单1双（4双1单）',
    '32_23': '3单2双（3双2单）',
    '31_13': '3单1双（3双1单）',
    '2d2x': '2单2双',
    '21_12': '2单1双（2双1单）',
    'lh': '龙虎',
    'long': '龙',
    'hu': '虎',
    'zh': '大小单双组合',
    'bz': '豹子',
    'sz': '顺子',
    'dz': '对子',
    'bs': '半顺',
    'zl': '杂六',
    'sitiao': '四条',
    'hl': '葫芦',
    'santiao': '三条',
    'ld': '两对',
    'yd': '一对',
    'dp': '单牌',
    'zhuang': '庄',
    'xian': '闲',
    'zhuangdui': '庄对',
    'xiandui': '闲对',
    'super6': 'S6',
    'wn': '无牛',
    'n1': '牛1',
    'n2': '牛2',
    'n3': '牛3',
    'n4': '牛4',
    'n5': '牛5',
    'n6': '牛6',
    'n7': '牛7',
    'n8': '牛8',
    'n9': '牛9',
    'nn': '牛牛',
    'nda': '牛大',
    'nx': '牛小',
    'ndan': '牛单',
    'ns': '牛双',
  },

  //号码不同，赔率不同的玩法
  PkOddsArr: ['hz_hz_q2', 'hz_hz_q3', 'dx_dx_q2', 'ds_ds_q2', 'lh_lh_1v10', 'lh_lh_5v6', 'lh_lh_3v8', 'lh_lh_2v9', 'lh_lh_4v7'],
  SSCOddsArr: ['qw_lhh_wq', 'qw_lhh_wb', 'qw_lhh_ws', 'qw_lhh_wg', 'qw_lhh_qb',
    'qw_lhh_qs', 'qw_lhh_qg', 'qw_lhh_bs', 'qw_lhh_bg', 'qw_lhh_sg',
    'qw_xt_q3', 'qw_xt_z3', 'qw_xt_h3', 'qw_xt_wx', 'dxds_dxgs_wx',
    'dxds_dxgs_sx', 'dxds_dxgs_qs', 'dxds_dxgs_zs', 'dxds_dxgs_hs',
    'dxds_dsgs_wx', 'dxds_dsgs_sx', 'dxds_dsgs_qs', 'dxds_dsgs_zs',
    'dxds_dsgs_hs', 'qw_bjl_bjl', 'nn_nn_nn', 'zh_hzdxds_5xhz',
    'sh_sh_wx', 'bjl_bjl_bjl'
  ],
  y11OddsArr: ['qw_qw_dds', 'qw_qw_czw'],
  K3OddsArr: ['hz_hz_hz'],
  SDOddsArr: ['qw_lhh_bs', 'qw_lhh_bg', 'qw_lhh_sg', 'qw_xt_xt'],

  //趣味玩法拆分
  oldToNew: {
    "dxds_hzdxds_5xhz": "zh_hzdxds_5xhz",
    "dxds_hzdxds_q3hz": "zh_hzdxds_q3hz",
    "dxds_hzdxds_z3hz": "zh_hzdxds_z3hz",
    "dxds_hzdxds_h3hz": "zh_hzdxds_h3hz",
    "dxds_hzdxds_5xhz_dd": "zh_hzdxds_5xhz_dd",
    "dxds_hzdxds_5xhz_ds": "zh_hzdxds_5xhz_ds",
    "dxds_hzdxds_5xhz_xd": "zh_hzdxds_5xhz_xd",
    "dxds_hzdxds_5xhz_xs": "zh_hzdxds_5xhz_xs",
    "qw_xt_wx_sitiao": "sh_sh_wx_sitiao",
    "qw_xt_wx_hl":	 "sh_sh_wx_hl",
    "qw_xt_wx_sz": "sh_sh_wx_sz",
    "qw_xt_wx_santiao": "sh_sh_wx_santiao",
    "qw_xt_wx_ld":	"sh_sh_wx_ld",
    "qw_xt_wx_yd":	"sh_sh_wx_yd",
    "qw_xt_wx_dp":	"sh_sh_wx_dp",
    "qw_bjl_bjl_zhuang": "bjl_bjl_bjl_zhuang",
    "qw_bjl_bjl_xian": "bjl_bjl_bjl_xian",
    "qw_bjl_bjl_he": "bjl_bjl_bjl_he",
    "qw_bjl_bjl_zhuangdui": "bjl_bjl_bjl_zhuangdui",
    "qw_bjl_bjl_xiandui": "bjl_bjl_bjl_xiandui",
    "qw_bjl_bjl_super6":	"bjl_bjl_bjl_super6"
  },

  newToOld: {
    "zh_hzdxds_5xhz": "dxds_hzdxds_5xhz",
    "zh_hzdxds_q3hz": "dxds_hzdxds_q3hz",
    "zh_hzdxds_z3hz": "dxds_hzdxds_z3hz",
    "zh_hzdxds_h3hz": "dxds_hzdxds_h3hz",
    "zh_hzdxds_5xhz_dd": "dxds_hzdxds_5xhz_dd",
    "zh_hzdxds_5xhz_ds": "dxds_hzdxds_5xhz_ds",
    "zh_hzdxds_5xhz_xd": "dxds_hzdxds_5xhz_xd",
    "zh_hzdxds_5xhz_xs": "dxds_hzdxds_5xhz_xs",
    "sh_sh_wx_sitiao": "qw_xt_wx_sitiao",
    "sh_sh_wx_hl":	 "qw_xt_wx_hl",
    "sh_sh_wx_sz": "qw_xt_wx_sz",
    "sh_sh_wx_santiao": "qw_xt_wx_santiao",
    "sh_sh_wx_ld":	"qw_xt_wx_ld",
    "sh_sh_wx_yd":	"qw_xt_wx_yd",
    "sh_sh_wx_dp":	"qw_xt_wx_dp",
    "bjl_bjl_bjl_zhuang": "qw_bjl_bjl_zhuang",
    "bjl_bjl_bjl_xian": "qw_bjl_bjl_xian",
    "bjl_bjl_bjl_he": "qw_bjl_bjl_he",
    "bjl_bjl_bjl_zhuangdui": "qw_bjl_bjl_zhuangdui",
    "bjl_bjl_bjl_xiandui": "qw_bjl_bjl_xiandui",
    "bjl_bjl_bjl_super6":	"qw_bjl_bjl_super6"
  },

  getUrlParam: function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]).toUpperCase();
    return null;
  },
  getStrLength: function (str) { //汉字算两个字节
    return str.replace(/[\u0391-\uFFE5]/g, 'aa').length; //把汉字转成两个英文字母再计算长度
  },
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

//IE8 数组不支持 indexOf
(function () {
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt /*, from*/ ) {
      var len = this.length >>> 0;
      var from = Number(arguments[1]) || 0;
      from = (from < 0) ?
        Math.ceil(from) :
        Math.floor(from);
      if (from < 0)
        from += len;
      for (; from < len; from++) {
        if (from in this &&
          this[from] === elt)
          return from;
      }
      return -1;
    };
  }
})();

/*日期计算*/
Date.prototype.DateAdd = function (strInterval, Number) {
  var dtTmp = this;
  switch (strInterval) {
    case 's':
      return new Date(Date.parse(dtTmp) + (1000 * Number));
    case 'n':
      return new Date(Date.parse(dtTmp) + (60000 * Number));
    case 'h':
      return new Date(Date.parse(dtTmp) + (3600000 * Number));
    case 'd':
      return new Date(Date.parse(dtTmp) + (86400000 * Number));
    case 'w':
      return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
    case 'q':
      return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
    case 'm':
      return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
    case 'y':
      return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
  }
};

/*日期差计算*/
Date.prototype.DaysBetween = function (date2) {
  var dtTmp = this;
  var ONE_DAY = 1000 * 60 * 60 * 24;
  var date1_ms = dtTmp.getTime();
  var date2_ms = date2.getTime();
  var difference_ms = Math.abs(date1_ms - date2_ms)
  return Math.round(difference_ms / ONE_DAY) + 1;
};

// 秒秒彩滚动数字
(function ($) {
  function F(t, o) {
    this.opts = $.extend({
      ballsize: 5, // 彩球个数
      initball: '0,0,0,0,0', // 初始化彩球数据
      loop: 5, // 彩球滚动循环次数（必须为整数）
      timeout: 5000, // 彩球滚动动画执行时间基数
      delay: 150, // 每个彩球动画执行延迟时间基数
      offset: [50, 80], // 球的宽高
      handbar: '.handle_hand', // 拉杆元素
      lamp: '.lamp', // 跑马灯元素
      debugs: true // 是否支持debug [0/false, 1=>对象级输出, 2=>字符串级输出]
    }, o);
    this.slides = [];
    this.size = this.opts.ballsize;
    this.$t = $(t);
    this.balls = [];
    // CALLBACK
    this.callback = function () {
      'sss'
    };
    this.errors = {
      'invalidBallFormat': '彩球数据格式错误'
    };
    this.debugs = this.opts.debugs;
    this.init();
  }

  F.prototype = {
    init: function () {
      var me = this,
        opts = me.opts;
      if (me.checkballs(opts.initball) != me.size) {
        alert(me.errors['invalidBallFormat']);
      }
      me.$handles = $(opts.handbar).children();
      me.createdom();
      // me.flip(me.balls, false);
      me.preloadLightImg();
    },
    checkballs: function (balls) {
      var me = this,
        k = 0;
      if (balls && typeof balls === 'string') {
        balls = balls.split(',');
      }
      // balls存在、为数组，且其长度为size
      if (balls &&
        Object.prototype.toString.call(balls) === '[object Array]' &&
        balls.length == me.size
      ) {
        me.balls = balls;
        for (var i = 0; i < balls.length; i++) {
          var ball = Number(balls[i]);
          if (ball < 0 || ball > 9) {
            break;
          }
          k++;
        }
      }
      // me.debug(k);
      return k;
    },
    createdom: function () {
      var me = this,
        opts = me.opts,
        balls = me.balls;
      for (var i = 0; i < me.size; i++) {
        var _style = 'position:absolute;top:0;left:' + i * me.opts.offset[0] + 'px;float:none;';
        /* ball_number*ball_height*(ball_max_loop+3) */
        _style += 'height:' + 10 * opts.offset[1] * (opts.loop + 3) + 'px';
        me.slides.push(
          $('<div>', {
            'class': 'flipball flipball_' + (i + 1),
            'style': _style,
            text: balls[i]
          })
        );
      }
      me.$t.html(me.slides)
    },
    preloadLightImg: function () {
      var me = this,
        $img = $('img', this.opts.lamp),
        src = $img.data('imgholder');
      $('<img/>').load(function () {
        me.$lampimg = $img;
        me.originsrc = $img.attr('src');
        me.lampsrc = src;
      }).attr('src', src);
    },
    // 跑马灯效果
    marquee: function (status) {
      if (this.lampsrc && this.$lampimg.length) {
        if (status == 'on') {
          this.$lampimg.attr('src', this.lampsrc);
        } else if (status == 'off') {
          this.$lampimg.attr('src', this.originsrc);
        }
      }
    },
    // 拉杆动画效果
    drawbar: function (callback) {
      this.$handles.eq(0).animate({
        opacity: 'hide'
      }, 300, function () {
        $(this).animate({
          opacity: 'show'
        }, 300, function () {
          callback && callback();
        });
      });
    },
    play: function () {
      this.marquee('on');
      this.drawbar();
    },
    stop: function () {
      this.marquee('off');
    },
    // 数字球滚动效果
    flip: function (balls, anim, callback) {
      var me = this,
        opts = me.opts,
        balls = balls || me.balls,
        callback = callback || me.callback;
      if (me.checkballs(balls) != me.size) {
        return alert(me.errors['invalidBallFormat']);
      }
      if (!me.$t.hasClass('.hasball')) me.$t.addClass('hasball');
      balls = me.balls;
      me.callback = callback;
      if (anim === false || anim === 'undefined') {
        me.stop();
        $.each(me.slides, function (idx, slide) {
          var ball_num = Number(balls[idx]);
          slide.stop().css('marginTop', -(10 + ball_num) * opts.offset[1]);
        });
        me.doCallback(me.callback);
      } else {
        me.play();
        $.each(me.slides, function (idx, slide) {
          var ball_num = Number(balls[idx]),
            timeout = opts.timeout + opts.delay * idx,
            // 一圈是10个数，循环opts.loop圈后，在移动ball_num单位个高度(opts.offset[1])
            step = (opts.loop * 10 + ball_num) * opts.offset[1];
          slide.stop().animate({
            marginTop: '+=' + (opts.offset[1] * .6)
          }).stop().animate({
            marginTop: -step
          }, timeout, function () {
            $(this).css('marginTop', -(10 + ball_num) * opts.offset[1]);
            if (idx == me.size - 1) {
              me.stop();
              me.doCallback(me.callback);
            }
          });
        });
      }
    },
    quickflip: function (callback1) {
      var me = this,
        opts = me.opts,
        balls = balls || me.balls,
        callback = callback || me.callback;
      //快速开奖后立即重置掉当前的CALLBACK缓存
      //防止正常开奖逻辑再次执行回调
      me.callback = null;
      if (me.checkballs(balls) != me.size) {
        return alert(me.errors['invalidBallFormat']);
      }
      $.each(me.slides, function (idx, slide) {
        var ball_num = Number(balls[idx]);
        slide.stop().css({
          marginTop: -(10 + ball_num) * opts.offset[1]
        }).animate({
          marginTop: -(10 + ball_num + 10) * opts.offset[1]
        }, 1000, function () {

          if (idx == me.size - 1) {
            me.doCallback(callback);
            callback1 && callback1();
          }
        });
      });
    },
    doCallback: function (callback) {
      if (callback && Object.prototype.toString.call(callback) === '[object Function]') {
        callback();
      }
    },
    // debug
    debug: function () {
      this.debugs && window.console && console.log && console.log('[flipball] ' + Array.prototype.join.call(arguments, ' '));
    }
  }

  $.fn.flipball = function (o) {
    var instance;
    this.each(function () {
      instance = $.data(this, 'flipball');
      // instance = $(this).data( 'flipball' );
      /*if (instance) {
        // instance.init();
      } else {
        instance = $.data(this, 'flipball', new F(this, o));
      }*/
      instance = $.data(this, 'flipball', new F(this, o));
    });
    return instance;
  }
})(jQuery);


// jQuery editable select
(function (c) {
  c.extend(c.expr[":"], {
    nic: function (a, c, d, b) {
      return !(0 <= (a.textContent || a.innerText || "").toLowerCase().indexOf((d[3] || "").toLowerCase()))
    }
  });
  c.fn.editableSelect = function (a) {
    var g = this.clone(),
      d = c('<input type="text">'),
      b = c('<ul class="es-list">');
    a = c.extend({}, {
      filter: !0,
      effect: "default",
      duration: "fast",
      onCreate: null,
      onShow: null,
      onHide: null,
      onSelect: null
    }, a);
    switch (a.effects) {
      case "default":
      case "fade":
      case "slide":
        break;
      default:
        a.effects = "default"
    }
    isNaN(a.duration) && "fast" == a.duration &&
      "slow" == a.duration && (a.duration = "fast");
    this.replaceWith(d);
    ({
      init: function () {
        var f = this;
        f.copyAttributes(g, d);
        d.addClass("es-input");
        c(document.body).append(b);
        g.find("option").each(function () {
          var a = c("<li>");
          a.html(c(this).text());
          f.copyAttributes(this, a);
          b.append(a);
          c(this).attr("selected") && d.val(c(this).text())
        });
        d.on("focus input click", f.show);
        c(document).click(function (a) {
          c(a.target).is(d) || c(a.target).is(b) || f.hide()
        });
        f.initializeList();
        f.initializeEvents();
        a.onCreate && a.onCreate.call(this,
          d)
      },
      initializeList: function () {
        var a = this;
        b.find("li").each(function () {
          c(this).on("mousemove", function () {
            b.find(".selected").removeClass("selected");
            c(this).addClass("selected")
          });
          c(this).click(function () {
            a.setField.call(this, a)
          })
        });
        b.mouseenter(function () {
          b.find("li.selected").removeClass("selected")
        })
      },
      initializeEvents: function () {
        var a = this;
        d.bind("input keydown", function (c) {
          switch (c.keyCode) {
            case 40:
              a.show();
              c = b.find("li:visible");
              var e = c.filter("li.selected");
              b.find(".selected").removeClass("selected");
              e = c.eq(0 < e.size() ? c.index(e) + 1 : 0);
              e = (0 < e.size() ? e : b.find("li:visible:first")).addClass("selected");
              a.scroll(e, !0);
              break;
            case 38:
              a.show();
              c = b.find("li:visible");
              e = c.filter("li.selected");
              b.find("li.selected").removeClass("selected");
              e = c.eq(0 < e.size() ? c.index(e) - 1 : -1);
              (0 < e.size() ? e : b.find("li:visible:last")).addClass("selected");
              a.scroll(e, !1);
              break;
            case 13:
              b.is(":visible") && (a.setField.call(b.find("li.selected"), a), c.preventDefault());
            case 9:
            case 27:
              a.hide();
              break;
            default:
              a.show()
          }
        })
      },
      show: function () {
        b.find("li").show();
        b.css({
          top: d.offset().top + d.outerHeight() - 1,
          left: d.offset().left,
          width: d.innerWidth()
        });
        if ((a.filter ? b.find("li:nic(" + d.val() + ")").hide().size() : 0) == b.find("li").size()) b.hide();
        else switch (a.effects) {
          case "fade":
            b.fadeIn(a.duration);
            break;
          case "slide":
            b.slideDown(a.duration);
            break;
          default:
            b.show(a.duration)
        }
        a.onShow && a.onShow.call(this, d)
      },
      hide: function () {
        switch (a.effects) {
          case "fade":
            b.fadeOut(a.duration);
            break;
          case "slide":
            b.slideUp(a.duration);
            break;
          default:
            b.hide(a.duration)
        }
        a.onHide && a.onHide.call(this,
          d)
      },
      scroll: function (a, d) {
        var e = 0,
          h = b.find("li:visible").index(a);
        b.find("li:visible").each(function (a, b) {
          a < h && (e += c(b).outerHeight())
        });
        if (e + a.outerHeight() >= b.scrollTop() + b.outerHeight() || e <= b.scrollTop()) d ? b.scrollTop(e + a.outerHeight() - b.outerHeight()) : b.scrollTop(e)
      },
      copyAttributes: function (a, b) {
        var e = c(a)[0].attributes,
          d;
        for (d in e) c(b).attr(e[d].nodeName, e[d].nodeValue)
      },
      setField: function (b) {
        if (!c(this).is("li:visible")) return !1;
        d.val(c(this).text());
        b.hide();
        a.onSelect && a.onSelect.call(d, c(this))
      }
    }).init();
    return d
  }
})(jQuery);