/**
 * Template
 */

/**
 * method: parse 用来将数据配合对应的模板渲染dom
 */
LotteryChart.parse = function ( /* template */ t, /* data */ d) {
  var lottery = Q.getUrlVars()['lt'];
  var h = '',
    e = null,
    type = '',
    data = [],
    td = 10,
    i = 0,
    len = 0,
    p = /{([^}]+)}/g,
    handler = function ($0, $1) {
      switch ($1) {
        case 'head_td':
          return LotteryChart.parse(LotteryChart.HEAD_TD, e);
          break;
        case 'wei':
          data.data = data.wei;
          return LotteryChart.parse(LotteryChart.HEAD_WEI, data);
          break;
        case 'issue':
          return e.issue;
          break;
        case 'td':
          return td;
          break;
        case 'td_code':
          return data.wei.length;
          break;
        case 'code':
          return LotteryChart.parse(LotteryChart.TD_CODE, e.code);
          break;
        case 'width':
          var width = 19;
          if (len === 3) {
            width = 32;
            if (i === 2) {
              width = 33;
            }
          } else if (len === 4) {
            width = 24;
          }
          if ($('#container').hasClass('pk10')) {
            width = 25;
          }

          return width;
          break;
        case 'val':
          if (e === undefined) {
            e = '';
          }
          return e;
          break;
        case 'row':
          var arr = [],
            obj = {},
            flag = 0;
          if (type === 'kl12' || type === '11y' || type === 'k3' || type === "pk10" || lottery === 'HNKY481') {
            flag = 1;
          }
          arr.length = e.code.length * td;
          for (var j = 0, l = e.code.length; j < l; j++) {
            arr[j * td + parseInt(e.code[j]) - flag] = e.code[j];
          }
          obj.type = type;
          obj.data = arr;

          return LotteryChart.parse(LotteryChart.TD_SINGLE, obj);
          break;
        case 'cls':
          var cls = 'p';
          cls += len / td - 1 - Math.floor(i / td);
          if (e != undefined) {
            cls += ' cur';
          }
          return cls;
          break;
        default:
          break;
      }
    };

  if (d.wei != undefined) {
    data = d;
  }
  if (d.type != undefined) {
    type = d.type;
    d = d.data;
  }
  if (type === '11y') {
    td = 11;
  }
  if (type === 'kl12') {
    td = 12;
  }
  if (type === 'k3') {
    td = 6;
  }
  if (lottery === 'HNKY481') {
    td = 8;
  }
  len = d.length;
  for (i; i < len; i++) {
    e = d[i];
    h += t.replace(p, handler);
  }

  return h;
};
LotteryChart.HEAD = '<tr><th width="79" rowspan="2"><h4>奖期</h4></th><th width="99" rowspan="2" class="th_codes"><h4>开奖号码</h4></th>{wei}</tr><tr>{head_td}</tr>';
LotteryChart.FOOT = '<tr><td width="79" rowspan="2"><h4>奖期</h4></td><td width="99" rowspan="2" class="th_codes"><h4>开奖号码</h4></td>{head_td}</tr><tr>{wei}</tr>';
LotteryChart.HEAD_WEI = '<th colspan="{td}"><h4>{val}</h4></th>';
LotteryChart.HEAD_TD = '<td><i>{val}</i></td>';
LotteryChart.BODY = '<tr><td width="79">{issue}</td>{code}{row}</tr>';
LotteryChart.TD_CODE = '<td width="{width}"><span>{val}</span></td>';
LotteryChart.TD_SINGLE = '<td><i class="{cls}">{val}</i></td>';
LotteryChart.BODY_ISSUE = '<tr><td width="79"><h4>出现总次数</h4></td><td width="99" colspan="{td_code}">&nbsp;</td>{head_td}</tr>';
LotteryChart.BODY_PERCENT = '<tr><td width="79"><h4>平均遗漏值</h4></td><td width="99" colspan="{td_code}">&nbsp;</td>{head_td}</tr>';

LotteryChart.drawPath = function ( /* template */ t, /* data */ d) {
  var h = '';
  var i = 0;
  var p = /{([^}]+)}/g;
  var handler = function ($0, $1) {
    return d[i][$1];
  };

  while (d[i]) {
    h += t.replace(p, handler);
    i++;
  }

  return h;
};

LotteryChart.getPath = function ( /* points */ p, /* td width */ w, /* td height */ h) {
  var path = '';
  for (var i = 0; i < p.length - 1; i++) {
    var x = parseInt(p[i][1]) * w + w / 2;
    var y = i * h + h / 2 + 6;
    var x1 = parseInt(p[i + 1][1]) * w + w / 2;
    var y1 = (i + 1) * h + h / 2 - 6;
    path += 'M' + x + ' ' + y + ' L' + x1 + ' ' + y1 + ' ';
  }
  return path;
};
LotteryChart.getIE8Path = function ( /* points */ p, /* td width */ w, /* td height */ h) {
  var path = '';
  for (var i = 0; i < p.length - 1; i++) {
    var x = parseInt(p[i][1]) * w + parseInt(w / 2);
    var y = i * h + parseInt(h / 2) + 6;
    var x1 = parseInt(p[i + 1][1]) * w + parseInt(w / 2);
    var y1 = (i + 1) * h + parseInt(h / 2) - 6;
    path += 'M ' + x + ',' + y + ' L ' + x1 + ',' + y1 + ' ';
  }
  path += 'E';
  return path;
};
LotteryChart.PATH = '<svg class="{cls}" style="width:{width}px; left:{left}px; top:{top}px;" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="{path}" style="fill:none;stroke:{color};stroke-width:1.5px" /></svg>';
LotteryChart.PATH_IE8 = '<shape class="{cls}" style="z-index:1; position:absolute; width:{width}px; display:inline-block; height:1px; visibility:visible; top:{top}px; left:{left}px; behavior: url(#default#vml)" xmlns="urn:schemas-microsoft-com:vml" stroke-linejoin="round" stroke-linecap="round" coordsize="{width},1" filled="f" fillcolor="none" stroked="t" strokecolor="{color}" strokeweight="1.2pt" path="{path}"></shape>';

/*
 * Main
 */
function LotteryChart(id) {
  this.element = $("#" + id);
}

LotteryChart.prototype.parse = function ( /* template */ t, /* data */ d) {
  var e = this.element;

  switch (t) {
    case LotteryChart.HEAD:
    case LotteryChart.FOOT:
      if (t === LotteryChart.HEAD) {
        e = e.find('.head').find('tbody');
      } else {
        e = e.find('.foot').find('tbody');
      }

      var arr = [],
        obj = {};
      if (d.type === '11y') {
        for (var i = 0; i < 55; i++) {
          arr[i] = (i + 1) % 11 || 11;
        }
      } else if (d.type === 'kl12') {
        for (var i = 0; i < 60; i++) {
          arr[i] = (i + 1) % 12 || 12;
        }
      } else if (d.type === 'k3') {
        for (var i = 0; i < 18; i++) {
          arr[i] = (i + 1) % 6 || 6;
        }
      } else if (d.type === 'pk10') {
        for (var i = 0; i < d.wei.length * 10; i++) {
          var temp_i = String(i > 9 ? parseInt(String(i).split('')[1]) + 1 : i + 1);
          temp_i = temp_i.length == 1 ? '0' + temp_i : temp_i;
          arr[i] = temp_i;
        }
      } else {
        if (d.lt === 'HNKY481') {
          for (var i = 0; i < 32; i++) {
            arr[i] = (i + 1) % 8 || 8;
          }
        } else {
          for (var i = 0; i < d.wei.length * 10; i++) {
            arr[i] = i % 10;
          }
        }

      }
      obj.lt = d.lt;
      obj.type = d.type;
      obj.wei = d.wei;
      obj.data = [arr];
      d = obj;
      break;
    case LotteryChart.BODY:
      e = e.find('.body').find('tbody').empty();
      break;
    default:
      break;
  }

  if (d != null) {
    e.html(LotteryChart.parse(t, d));
  }

  if (t === LotteryChart.BODY) {
    var obj = {},
      arr = [],
      arr2 = [];
    var len = e.children('tr').length;
    e.children('tr').each(function (i) {
      $(this).find('i').each(function (j, el) {
        if ($(el).html() != '') {
          if (arr[j] === undefined) {
            arr[j] = 1;
          } else {
            arr[j] += 1;
          }
        } else {
          if (arr[j] === undefined) {
            arr[j] = 0;
          }
        }
      });
    });
    for (var i = 0; i < arr.length; i++) {
      arr2[i] = arr[i] ? Math.floor(len / arr[i]) : len + 1;
    }
    obj.lt = d.lt;
    obj.type = d.type;
    obj.wei = d.wei;
    obj.data = [arr];
    e.append(LotteryChart.parse(LotteryChart.BODY_ISSUE, obj));
    obj.data = [arr2];
    e.append(LotteryChart.parse(LotteryChart.BODY_PERCENT, obj));
  }
  return e;
};


/**
 * method: drawLine 用来将数据配合对应的模板渲染dom
 */
LotteryChart.prototype.drawLine = function ( /* data */ d, /* type */ t) {
  var e = this.element;
  var lottery = Q.getUrlVars()['lt'];

  var ie8 = document.documentMode && document.documentMode <= 8;
  // data = [[cls, color, left, path]]
  var data = [];

  if (d && d.length > 0) {
    for (var i = 0; i < d.length; i++) {
      var obj = {};
      var td = $('i.p' + i).parent('td').eq(0);
      obj.cls = d[i].style.cls;
      obj.color = d[i].style.color;
      obj.left = td.position().left;
      obj.top = td.position().top;
      if (t === '11y') {
        obj.width = td.outerWidth() * 11;
      } else if (t === 'kl12') {
        obj.width = td.outerWidth() * 12;
      } else if (t === 'k3') {
        obj.width = td.outerWidth() * 6;
      } else if (lottery === 'HNKY481') {
        obj.width = td.outerWidth() * 8;
      } else {
        obj.width = td.outerWidth() * 10;
      }

      if (ie8) {
        obj.path = LotteryChart.getIE8Path(d[i].code, td.outerWidth(), td.outerHeight());
      } else {
        obj.path = LotteryChart.getPath(d[i].code, td.outerWidth(), td.outerHeight());
      }
      data.push(obj);
    }

    e.find('.path').remove();

    if (ie8) {
      // document.namespaces.add('v',"urn:schemas-microsoft-com:vml", "#default#VML");
      e.append(LotteryChart.drawPath(LotteryChart.PATH_IE8, data));
    } else {
      e.append(LotteryChart.drawPath(LotteryChart.PATH, data));
    }
  }

  return e;
};


$(function () {
  var lc = new LotteryChart("chart");
  var colors = ['#ff773d', '#8c0a91', '#650019', '#3686ab', '#00a0d2'];
  var ie8 = document.documentMode && document.documentMode <= 8;
  var lt = Q.getUrlVars()['lt'];
  var p = {
    'lottery': lt || '',
    'issuecount': 30
  };
  var type = {
    'WBG': 'ssc',
    'WBG5FC': 'ssc',
    'WBGFFC': 'ssc',
    'WBGMMC': 'ssc',
    'CQSSC': 'ssc',
    'JXSSC': 'ssc',
    'XJSSC': 'ssc',
    'TXFFC': 'ssc',
    /*'HG1F5': 'ssc',*/
    'BJ5FC': 'ssc',
    'XN5FC': 'ssc',
    'HN5FC': 'ssc',
    'TW5FC': 'ssc',
    'RDFFC': 'ssc',
    'RDLFC': 'ssc',
    'RBSSM': 'ssc',
    'QQSSM': 'ssc',
    'TX1FC': 'ssc',
    'CQ11Y': '11y',
    'GD11Y': '11y',
    'JX11Y': '11y',
    'SD11Y': '11y',
    'HLJ11Y': '11y',
    'MC11Y': '11y',
    'HUB11Y': '11y',
    '3DFC': '3d',
    'MC3D': '3d',
    'BJKL8': 'kl8',
    'BJPK10': 'pk10',
    'XGPK10': 'pk10',
    'MCPK10': 'pk10',
    'TJSSC': 'ssc',
    'SHSSL': '3d',
    'TCP3': '3d',
    'TCP5': 'ssc',
    'SH11Y': '11y',
    'AH11Y': '11y',
    'YN11Y': '11y',
    'JSK3': 'k3',
    'HNK3': 'k3',
    'MCK3': 'k3',
    'HBK3': "k3",
    'JLK3': "k3",
    'AHK3': "k3",
    'SCKL12': 'kl12',
    'HNKY481': 'ssc',
  };
  var name = {
    'WBG': 'WBG亿万彩',
    'WBG5FC': 'WBG5分彩',
    'WBGFFC': 'WBG分分彩',
    'WBGMMC': 'WBG秒秒彩',
    'CQSSC': '重庆时时彩',
    'RDFFC': '瑞典1分彩',
    'RDLFC': '瑞典2分彩',
    'RBSSM': '日本30秒彩',
    'QQSSM': 'QQ30秒彩',
    'JXSSC': '江西时时彩',
    'XJSSC': '新疆时时彩',
    'TXFFC': '腾讯分分彩',
    'TX1FC': '腾讯1分彩',
    'CQ11Y': '重庆11选5',
    'GD11Y': '广东11选5',
    'JX11Y': '江西11选5',
    'SD11Y': '山东11选5',
    'HLJ11Y': '黑龙江11选5',
    'MC11Y': '摩臣11选5',
    '3DFC': '3D福彩',
    'MC3D': '摩臣3D',
    'BJKL8': '北京快乐8',
    'BJPK10': '北京PK10',
    'XGPK10': '香港PK10',
    'MCPK10': '摩臣PK10',
    'SCKL12': '四川快乐12',
    'TJSSC': '天津时时彩',
    'SHSSL': '上海时时乐',
    'TCP3': '排列三',
    'TCP5': '排列五',
    'SH11Y': '上海11选5',
    'AH11Y': '安徽11选5',
    'YN11Y': '云南11选5',
    'HUB11Y': '湖北11选5',
    'JSK3': '江苏快3',
    'HNK3': '河南快3',
    'MCK3': '摩臣快3',
    'HBK3': "湖北快3",
    'JLK3': "吉林快3",
    'AHK3': "安徽快3",
    'XN5FC': '悉尼5分彩',
    'HN5FC': '河内5分彩',
    'BJ5FC': '北京5分彩',
    'TW5FC': '台湾5分彩',
    'HNKY481': '河南快赢481'
  };

  var pkTitle = ['冠军', '第二名', '第三名', '第四名', '第五名', '第六名', '第七名', '第八名', '第九名', '第十名'];

  var checkDate = function (start, end, $i) {
    var OneDay = 1000 * 3600 * 24;
    var tip = dialog({
      id: 'date-tip',
      title: '温馨提示',
      skin: 'sobet chart',
      width: '400px',
      fixed: true,
      button: [{
        value: '确定',
        callback: {}
      }]
    });

    if (end - start > OneDay) {
      tip.content('输入的时间跨度不能超过1天');
      tip.showModal();
      return false;
    } else if (end - start < 0) {
      tip.content('输入的日期不符合逻辑');
      tip.showModal();
      return false;
    }

    return true;
  };

  $("#header .lt-name").html(name[lt] + "基本走势");

  $('#date_from').datetimepicker({
    id: 'dp_from',
    lang: 'zh',
    value: '-1970/01/02',
    minDate: '-1970/03/31',
    maxDate: '+1970/01/01',
    format: 'Y/m/d',
    timepicker: false,
    closeOnDateSelect: true,
    onSelectDate: function (ct, $i) {
      checkDate(ct, new Date($('#date_end').val()), $i);
    }
  });
  $('#date_end').datetimepicker({
    id: 'dp_end',
    lang: 'zh',
    value: '+1970/01/01',
    minDate: '-1970/03/31',
    maxDate: '+1970/01/01',
    format: 'Y/m/d',
    timepicker: false,
    closeOnDateSelect: true,
    onSelectDate: function (ct, $i) {
      checkDate(new Date($('#date_end').val()), ct, $i);
    }
  });

  if (type[lt] === 'pk10') {
    $('#container').addClass('pk10');
  }

  if (type[lt] === 'kl12' || type[lt] === '11y' || type[lt] === 'pk10') {
    $('body').css('font-size', '12px');
  }

  var queryChart = function (p) {
    var chartData = {};
    var lineData = [];

    $.ajax({
      url: '/lottery/api/u/v1/lottery/trend',
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: p
    }).done(function (d) {

      d = d.result;
      //d.data.reverse();

      for (var i = d.data.length - 1; i >= 0; i--) {
        if (d.data[i]['code'].indexOf(',') !== -1) {
          d.data[i]['code'] = d.data[i]['code'].split(',');
        } else {
          d.data[i]['code'] = type[lt] === '11y' || type[lt] === 'kl12' ? d.data[i]['code'].split(/(?=(?:\d{2})+?$)/) : d.data[i]['code'].split('');
        }
      }
      chartData.lt = lt;
      chartData.type = type[lt];

      if (chartData.type === "pk10") {
        var pkType = $('#header .pk10-a.on').attr('data-val').split('-');
        $(d.data).each(function () {
          arguments[1].code = arguments[1].code.slice(pkType[0], pkType[1]);
        });

        chartData.wei = pkTitle.slice(pkType[0], pkType[1]);;
      } else {
        chartData.wei = ['万位', '千位', '百位', '十位', '个位'];
        if (lt === 'HNKY481') {
          chartData.wei = ['自由泳', '仰泳', '蛙泳', '蝶泳'];
        }
      }

      if (chartData.type === '3d') {
        chartData.wei = ['百位', '十位', '个位'];
        colors = ['#650019', '#3686ab', '#00a0d2'];
      }

      if (chartData.type === 'k3') {
        chartData.wei = ['一', '二', '三'];
        colors = ['#650019', '#3686ab', '#00a0d2'];
      }

      chartData.data = d.data;

      // 渲染数据表格
      lc.parse(LotteryChart.HEAD, chartData);
      lc.parse(LotteryChart.BODY, chartData);
      lc.parse(LotteryChart.FOOT, chartData);

      // 画曲线
      if (chartData.data.length === 0) {
        $('.path').remove();
        return false;
      }
      for (var i = chartData.data[0].code.length - 1; i >= 0; i--) {
        var obj = {};
        var pos = [];
        for (var j = 0; j < chartData.data.length; j++) {
          if (lt === 'HNKY481' || chartData.type === 'kl12' || chartData.type === '11y' || chartData.type === 'k3' || chartData.type === 'pk10') {
            pos.push([j, chartData.data[j].code[i] - 1]);
          } else {
            pos.push([j, chartData.data[j].code[i]]);
          }
        }
        obj.cls = 'path p' + i;
        obj.color = colors[i];
        lineData.push({
          code: pos,
          style: obj
        });
      }
      lc.drawLine(lineData, chartData.type);

      if ($('.chart-line').hasClass('on')) {
        if (ie8) {
          $(".path").addClass('hide');
        } else {
          $(".path").hide();
        }
      }

    }).fail(function () {
      // 请求失败处理
    });
  };
  //Navigation.init();
  queryChart(p);

  $(".chart-line").on("click", function (evt) {
    evt.preventDefault();

    if ($(this).hasClass('on')) {
      if (ie8) {
        $(".path").removeClass('hide');
      } else {
        $(".path").show();
      }
      $(this).removeClass('on').html('隐藏走势图折线');
    } else {
      if (ie8) {
        $(".path").addClass('hide');
      } else {
        $(".path").hide();
      }
      $(this).addClass('on').html('显示走势图折线');
    }
  });

  $(".recent-issue").on('click', function (evt) {
    evt.preventDefault();

    queryChart({
      'lottery': p.lottery,
      'issuecount': $(this).attr('data-val')
    });
    $(this).addClass('on').siblings('.recent-issue').removeClass('on');
  });


  $(".pk10-a").on('click', function (evt) {
    evt.preventDefault();

    $(this).addClass('on').siblings('.pk10-a').removeClass('on');

    queryChart({
      'lottery': p.lottery,
      'issuecount': $(".recent-issue.on").attr('data-val')
    });

  });

  $(".chart-query").on('click', function (evt) {
    evt.preventDefault();

    p.issuecount = '';
    p.startTime = $('#date_from').val();
    p.endTime = $('#date_end').val();

    var check = checkDate(new Date(p.startTime), new Date(p.endTime), $('#date_from'));
    if (!check) {
      return;
    }
    queryChart(p);
    $('.recent-issue').removeClass('on');
  });
});