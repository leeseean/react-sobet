/* jshint devel:true */
var Trace = Trace || {};

Trace = {
  lottery: null,
  market: null,
  queueDict: {
    'lottery': 0
  },
  tracetab: [],
  tracechange: [],
  tracebtn: [],
  tracelist: {},
  orders: [],
  submitbtn: [],
  dish: 0,
  maxtimes: 99999,
  cashier: 0,
  minratelimite: 1,
  counter: {
    'lottery': 0
  },
  traceitems: {
    items: []
  },
  submitBtn: {
    'lottery': '#lottery > div.orders:eq(0) > div.trace-data:eq(0)'
  },
  genButton: {
    'lottery': '#lgenTrace'
  },
  traceTpl: function () {
    var me = this;
    //细节模板
    var traceTpl;
    if (Lottery.cls === 'lhc') {
      traceTpl = [
        '<div class="trace-fixed">',
        '<span class="chk"><label for="traceall" class="chkall"><input type="checkbox" id="traceall" class="nochk chkall"/>全选</label></span>',
        '<span class="wide">期号</span>',
        '<span class="wide">投注金额</span>',
        '<span class="medium">倍数</span>',
        '<span>追号金额</span>',
        '</div><ul class="trace-items">',
        '<% for ( var i = 0; i < items.length; i++ ) { %>',
        '<li class="<%=i|Q.oddEven%><%=items[i].cls%><%=items[i].issue|Q.itemNextDay,items[i].time%>">',
        '<span class="chk"><%=(i+1)%>.<label><input type="checkbox" class="nochk" index="<%=i%>"/></label></span>',
        '<span class="wide issue"><%=items[i].issue%></span>',
        '<span class="wide lottery_amount"><%=Lottery.lottryAmount%></span>',
        '<span class="medium"><input type="text" index="<%=i%>" disabled="disabled" onmouseover="Trace.bindNumber(this);" class="spinner times medium" min="1" max="' + me.maxtimes + '" step="1" value="0" data-issue="<%=items[i].issue%>" data-index="<%=i%>" data-v="<%=i|Q.initTraceList%>" data-same="<%=i|Q.initSameTraceList%>" data-rate="0"></span>',
        '<span><em class="traceM" data-index="<%=(i+1)%>">0.00<%=items[i].amount%></em></span>',
        '</li><% } %>', '</ul>'
      ].join('');
    } else {
      traceTpl = [
        '<div class="trace-fixed">',
        '<span class="chk"><label for="traceall" class="chkall"><input type="checkbox" id="traceall" class="nochk chkall"/>全选</label></span>',
        '<span class="wide">期数</span>',
        '<span class="medium">倍数</span>',
        '<span class="wide">日期</span>',
        '<span>追号金额</span>',
        '</div><ul class="trace-items">',
        '<% for ( var i = 0; i < items.length; i++ ) { %>',
        '<li class="<%=i|Q.oddEven%><%=items[i].cls%><%=items[i].issue|Q.itemNextDay,items[i].time%>">',
        '<span class="chk"><%=(i+1)%>.<label><input type="checkbox" class="nochk" index="<%=i%>"/></label></span>',
        '<span class="wide issue"><%=items[i].issue%></span>',
        '<span class="medium"><input type="text" index="<%=i%>" disabled="disabled" onmouseover="Trace.bindNumber(this);" class="spinner times medium" min="1" max="' + me.maxtimes + '" step="1" value="0" data-issue="<%=items[i].issue%>" data-index="<%=i%>" data-v="<%=i|Q.initTraceList%>" data-same="<%=i|Q.initSameTraceList%>" data-rate="0"></span>',

        '<span class="wide"><%=items[i].time%></span>',
        '<span><em class="traceM" data-index="<%=(i+1)%>">0.00<%=items[i].amount%></em></span>',
        '</li><% } %>', '</ul>'
      ].join('');
    }
    return traceTpl;
  },
  //生成追号启用区域
  outTraceBox: function (type) {
    var traceHtml = ['<div id="trace-box-', type, '" class="trace-box">',
      '<label class="hand"><input type="checkbox" name="autoTrace" data-type="', type, '" value="0" /><span>追号</span></label>',
      '<label class="hand disabled"><input type="checkbox" name="autoStop" disabled="disabled" value="0" checked="checked"/><span alt="中奖后停追">追中即停</span></label>',
      '</div>'
    ].join('');
    return traceHtml;
  },
  //生成追号数据区域
  outTraceData: function (index, type) {
    var me = this;
    var traceTab = {
      '0': [
        '<div id="trace-data-', type, '" class="trace-data">',
        '<ul class="trace-tab">',
        '<li data-type="double" class="on" data-no="3" name="', type, '"><span>翻倍追号</span></li>',
        '<li data-type="same" data-no="2" name="', type, '"><span>同倍追号</span></li>',
        '<li data-type="rate" data-no="1" name="', type, '"><span>利润率追号</span></li>',
        '</ul>',
        '<a id="lgenTrace" href="javascript:;" name="rate" rel="lottery">生成追号计划</a>',
        '<div id="trace-rate" class="trace-rate trace-change trace-hidden" name="lottery">',
        '<ul class="trace-details"><li>最低收益率<input type="text" name="startRate" class="spinner tracemsg" min="' + me.minratelimite + '" step="1" max="100" value="' + me.minratelimite + '"/>%</li>',
        '<li>起始倍数<input type="text" name="startTimes" class="spinner biggerw tracemsg" min="1" step="1" max="99999" value="1"/></li>',
        '<li>追号期数<input type="text" name="initTotals" class="spinner" min="1" max="120" step="1" value="5"/></li>',
        '</ul>',
        '</div>',
        '<div id="trace-same" class="trace-same trace-change trace-hidden" name="lottery">',
        '<ul class="trace-details"><li>起始倍数<input type="text" name="startTimes" class="spinner biggerw tracemsg" min="1" max="99999" step="1" value="1"/></li>',

        '<li>追号期数<input type="text" name="initTotals" class="spinner" min="1" max="120" step="1" value="5"/></li>',

        '</ul>', , '</div>',
        '<div id="trace-double" class="trace-double trace-change" name="lottery">',
        '<ul class="trace-details"><li>起始倍数<input type="text" name="startTimesFb" class="spinner biggerw tracemsg" min="1" max="99999" step="1" value="1"/>隔<input type="text" name="gaps" class="spinner tracemsg" min="1" max="120" step="1" value="2"/>期</li>',
        '<li>倍×<input type="text" name="doubles" class="spinner tracemsg" min="1" max="9999" step="1" value="2"/></li>',
        '<li>追号期数<input type="text" name="initTotals" class="spinner" min="1" max="120" step="1" value="5"/></li>',
        '</ul>',
        '</div>',
        '<div class="trace-list trace-hidden"></div>', '<div class="trace-otherlist trace-hidden"></div>', '<div class="trace-otherlist trace-hidden"></div>',
        '<div id="trace-double" class="trace-double trace-change" name="lottery">',
        '<ul class="trace-details">',
        '<li class="totalIssue">共追<em>0</em>期</li>',
        '<li class="totalTraceMoney">共计 <em>-</em>元</li>',
        '</ul>',
        '</div>',
        '<div id="trace-same" class="trace-same trace-change trace-hidden" name="lottery">',
        '<ul class="trace-details">',
        '<li class="totalIssue">共追<em>0</em>期</li>',
        '<li class="totalTraceMoney">共计 <em>-</em>元</li>',
        '</ul></div>',
        '<div id="trace-rate" class="trace-rate trace-change trace-hidden" name="lottery">',
        '<ul class="trace-details">',
        '<li class="totalIssue">共追<em>0</em>期</li>',
        '<li class="totalTraceMoney">共计 <em>-</em>元</li>',
        '</ul></div>',
        '<input type="checkbox" name="autoTrace" data-type="lottery" value="0" style="display:none"/>',
        '<label class="hand disabled trace-autoStop"><i class="trace-icon"></i><span alt="中奖后停追">追中即停</span></label>',
        '<a href="javascript:;" class="submit">立即追号</a>',
        '</div>'
      ].join('')
    };

    return traceTab[index];
  },
  //初始化
  init: function () {
    var me = this;
    var opt = arguments[0];

    //1-有追号  0-没有追号 
    if (opt.lottery === '0') {
      return false;
    }
    var switchTrace = {
      '1': '#lottery .orders .bottom a.submit'
    };
    var traceBoxCount = 1;

    //追号面板初始化
    $(switchTrace[[opt.lottery]]).map(function (k, el) {
      //初始化面板
      var queue = ['lottery'];
      var traceinit = [3, 4];
      var bottom = $(el).closest('.bottom');
      //$(el).before(me.outTraceBox(queue[k]));
      bottom.after(me.outTraceData(k, queue[k]));
      //初始化INPUT增减控件
      me[queue[k]] = $('#trace-data-' + queue[k]);
      me[queue[k]].find('.trace-change input[type="text"].spinner').inputNumber();
      //缓存生成追号按钮dom
      var tracebutton = me[queue[k]].find(me.genButton[queue[k]]);
      var tracechange = me[queue[k]].find('.trace-change');
      var tracetabs = me[queue[k]].find('.trace-tab>li');
      var submitbtn = me[queue[k]].parent().find('div.bottom a.submit');
      var noworders = $('#' + queue[k] + '>div.orders:eq(0)');

      tracebutton.data('no', traceinit[k]);
      //生成追号按钮
      me.tracebtn.push(tracebutton);
      //追号方式切换按钮
      me.tracetab.push(tracetabs);
      //追号方式内容tab
      me.tracechange.push(tracechange);
      //追号方式内容tab
      me.orders.push(noworders);
      //追号方式内容tab
      me.submitbtn.push(submitbtn);
    });

    // 追号期数数据列表

    // 发起追号复选框
    $('.trace-box>label').unbind('click').click(function () {
      var checkbox = $(this).prev('input');
      var icon = $(this).find('i');

      checkbox.click();
      if (checkbox.is(":checked")) {
        icon.addClass('on');
        var high = $('.orders').offset().top;
        $('html,body.theme').animate({
          scrollTop: parseInt(high) - 30
        }, 200);
      } else {
        icon.removeClass('on');
      }
    });
    /////////////
    $('.trace-data>label').unbind('click').click(function () {
      var checkbox = $(this).prev('input');
      var icon = $(this).find('i');
      icon.toggleClass('on');
    });


    $('.trace-box input[name="autoTrace"]').off('click').on('click', function () {
      var winstop = $('#trace-data-lottery .trace-icon');
      if ($(this).hasClass('disabled')) {
        return false;
      }
      var $ordersList = $('#' + Lottery.type + ' .orders .list > ul li');
      var tip = dialog({
        id: 'trace-tip',
        align: 'top',
        skin: 'tip',
        content: '请先选号'
      });
      if ($ordersList.length === 0 && $('#trace-data-lottery').is(':hidden')) {
        winstop.removeClass('on');
        tip.show($(this).next()[0]);
        setTimeout(function () {
          tip.close().remove();
        }, 600);
      }
      var traceTyp = $(this).data('type');
      var indexTyp = me.queueDict;
      var nowTraceBox = $('#trace-data-' + traceTyp);
      var submitBtn = me.submitbtn[indexTyp[traceTyp]];
      var traceBtn = me.tracebtn[indexTyp[traceTyp]];
      //追中即停
      winstop.addClass('on');
      winstop.parent().prev('input').attr('checked', 'checked');
      var autoStopTrace = $('.trace-box').nextAll('label.trace-autoStop');

      var handTraceIcon = $('.trace-box .hand .trace-icon');

      if (!handTraceIcon.hasClass('on')) {
        handTraceIcon.addClass('on');
        //显示追号
        if (submitBtn.hasClass('disabled')) {
          return false;
        }
        $('.orders .bottom a.submit').addClass('disabled');

        autoStopTrace.prev('input').removeAttr('disabled').attr('checked', 'checked');

        //填充追号期数
        me.initDetails(traceBtn, nowTraceBox, 1, me.traceitems, true);

        me.prepareSubmit(nowTraceBox, traceBtn, traceTyp, traceBtn.data('sel'));
        $('#lottery .orders .bottom').addClass('tracing');

      } else {
        //隐藏追号
        autoStopTrace.addClass('disabled');
        winstop.removeClass('on');
        winstop.parent().prev('input').removeAttr('checked');

        autoStopTrace.prev('input').attr('disabled', 'disabled');
        nowTraceBox.hide();
        $('.tracing').removeClass('tracing');
        $('.orders .bottom a.submit').removeClass('disabled');

      }

    });

    $('.trace-data a.submit').off('click').on('click', function (evt) {
      if ($(this).hasClass('locked')) {
        return false;
      }

      evt.preventDefault();
      Lottery.submitType = '追号投注';

      if ($(this).hasClass('disabled')) {
        return false;
      }

      var list = $(this).closest('.orders').find('.list ul');
      var order = [];

      if (dialog.get('lottery_submitTrace')) {
        dialog.get('lottery_submitTrace').close().remove();
      }
      if (dialog.get('lottery_submit_mmc2')) {
        dialog.get('lottery_submit_mmc2').close().remove();
      }
      var tip = dialog({
        id: 'lottery_submitTrace',
        align: 'top',
        skin: 'tip'
      });

      var tip_mmc = dialog({
        id: 'lottery_submit_mmc2',
        align: 'top',
        skin: 'tip'
      });

      var confirmAgain;
      var html = '';
      var mode = '';
      var mode1 = '';
      var mode2 = '';
      var mode3 = '';
      var mode4 = '';
      var mode5 = '';
      var mode6 = '';

      var quickSubmit = $('.quickSubmit-orders').length;
      var quickBtn = $('#lottery .count').find('a.quickSubmit');

      var btn = $(evt.target);
      if (quickSubmit > 0) {
        btn = quickBtn;
        $(this).addClass('disabled');
      }
      var txt = btn.html();

      if (btn.hasClass('loading')) {
        tip.content('请不要频繁点击！');
        tip.show(btn[0]);
        setTimeout(function () {
          tip.close().remove();
        }, 600);
        return false;
      }

      if (Lottery.isStop) {
        tip.content('当前彩种暂停销售，请关注官方动态！');
        tip.show(btn[0]);
        if ($('.quickSubmit-orders').length > 0) {
          Lottery.resetOrders();
        }
        setTimeout(function () {
          tip.close().remove();
        }, 2000);
        return false;
      }

      for (var i = 0, len = list.children('li').length; i < len; i++) {
        var li = $(list).children('li').eq(i);
        var type = li.attr("data-type");
        var code = li.attr("data-code");
        var desc = li.attr("data-desc");
        var d = li.attr("data-count").split('|');
        var tmp_order = null;

        // 计算结果 将投注模式归为正常格式 200 20 2 变为 2 0.2 0.02
        if (Lottery.lt === 'JSLHC') {
          mode += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em></dd>';
        } else {
          switch (d[2]) {
            case '2':
              mode1 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em></dd>';
              break;
            case '1':
              mode5 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em></dd>';
              break;
            case '0.2':
              mode2 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em></dd>';
              break;
            case '0.1':
              mode6 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em></dd>';
              break;
            case '0.02':
              mode3 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em></dd>';
              break;
            case '0.002':
              mode4 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em></dd>';
              break;
            default:
              break;
          }
        }
        // d[2] = d[2] / 100;
        tmp_order = {
          "method": type,
          "code": code,
          "nums": d[0],
          "piece": d[1],
          "price": d[2],
          "odds": d[3],
          "point": d[4],
          "amount": d[5]
        };
        if (d[6] !== undefined && d[6] !== '') {
          tmp_order['position'] = d[6];
        }
        order.push(tmp_order);
      }

      if (mode) {
        mode = `<dl><dt><em class="issue">期号${(me.issue || '/')}</em></dt>${mode}</dl>`;
      }
      if (mode1) {
        mode1 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + `</em><em class="mode">模式：2元</em></dt>${mode1}</dl>`;
      }
      if (mode5) {
        mode5 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + `</em><em class="mode">模式：1元</em></dt>${mode5}</dl>`;
      }
      if (mode2) {
        mode2 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + `</em><em class="mode">模式：2角</em></dt>${mode2}</dl>`;
      }
      if (mode6) {
        mode6 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + `</em><em class="mode">模式：1角</em></dt>${mode6}</dl>`;
      }
      if (mode3) {
        mode3 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + `</em><em class="mode">模式：2分</em></dt>${mode3}</dl>`;
      }
      if (mode4) {
        mode4 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + `</em><em class="mode">模式：2厘</em></dt>${mode4}</dl>`;
      }

      var htmlwelcome = '<h2>请确认投注' + $('#lotteryClass dd.on em').html() || '香港六合彩' + '</h2>';
      
      var htmlmoney = '<h4>总金额：<em>' + $('#lottery .orders').find('.amount').html();

      if (Lottery.lt === 'JSLHC') {
        var obj = Lottery.getOrderObjLHC();
      } else {
        var obj = {
          "lottery": Lottery.lt,
          "issue": Lottery.issue,
          "order": JSON.stringify(order)
        };
      }



      var traceBtn = $('#lottery .orders').find('.trace-data > a:eq(0)');
      if ($('#lottery .orders').find('input[name="autoTrace"]:checked').size() > 0 && traceBtn.data('traceCount') > 0) {
        var winStop = $('#lottery .orders').find('.trace-autoStop i').hasClass('on');
        var traceMode = $('#lottery .orders').find('.trace-tab li.on').data('no');
        obj["istrace"] = $('#lottery .orders').find('input[name="autoTrace"]:checked').size() > 0 ? true : false;
        obj["trace"] = JSON.stringify({
          'start': Lottery.issue,
          'totalMoney': traceBtn.data('money'),
          'totalCount': traceBtn.data('traceCount'),
          'mode': traceMode,
          'winStop': winStop,
          'counts': traceBtn.data('trace')
        });

        if (traceBtn.data('trace') === undefined) {
          obj["istrace"] = false;
        } else {
          if (traceBtn.data('trace').length == 0) {
            obj["istrace"] = false;
          }
        }


        htmlwelcome = '<h2>您确定要追号' + ($('#lotteryClass dd.on em').html() || '香港六合彩') + '&nbsp;&nbsp;&nbsp;<em class="issue-num">' + traceBtn.data('traceCount') + '</em>期吗？</h2><p class="trace-tip"><span>温馨提示:</span><span>追号单生成的投注单，在当期封单前5分钟内不允许撤单。</span></p>';
        htmlmoney = '<h4>总金额：￥<em>' + parseFloat(traceBtn.data('money')).toFixed(3);
      } else {
        if ($('#lottery .orders').find('input[name="autoTrace"]:checked').size() > 0 && traceBtn.data('traceCount') == 0) {
          obj["istrace"] = false;
          htmlwelcome = '<h3 class="highmsg">您未选择追号期数，确定加入' + Lottery.issue + '期？</h3>';
        }
      }

      html = htmlwelcome;
      html += '<div class="list">' + mode + mode1 + mode2 + mode3 + mode4 + mode5 + mode6 + '</div>';
      html += htmlmoney;
      html += '<label class="printStatus"><input type="checkbox" value="print">打印注单</label>';

      obj['betType'] = obj["istrace"] ? 4 : $(orders).hasClass('quickSubmit-orders') ? 1 : 2; //1 快速投注，2常规投注，3再次投注，4追号投注，5挂机投注  


      if (Lottery.lt === 'WBGMMC') {
        btn.html('操作中').addClass('loading');
        obj["issue"] = Lottery.issue;

        // 判断连投是不是大于1
        var mmcLoopTimes = parseInt($("#mmcLoop input[type=text]").val(), 10);
        if (mmcLoopTimes > 1) {
          if (dialog.get('mmc_loop_box')) {
            dialog.get('mmc_loop_box').remove();
          }
          Lottery.addOrderMMCLoopApi(obj, btn, txt, tip, mmcLoopTimes);
        } else {
          Lottery.addOrderApi(obj, btn, txt, tip_mmc);
        }
      } else {
        var confirmOpt = {
          title: '温馨提示',
          width: 396,
          content: html,
          skin: 'confirm-again confirm-again-trace',
          fixed: true,
          cancel: false,
          button: [{
            id: 'lt_ok',
            value: '确&nbsp;&nbsp;定',
            callback: function (evt) {
              btn.html('操作中').addClass('loading');
              obj["issue"] = Lottery.issue;
              Lottery.addOrderApi(obj, btn, txt, tip);
            }
          }, {
            id: 'lt_cancel',
            skin: 'cancel',
            value: '取&nbsp;&nbsp;消',
            callback: function (evt) {
              if ($('.quickSubmit-orders').length > 0) {
                Lottery.resetOrders();
              }
              $(".quickSubmit").removeClass("disabled");
              $(".confirm").removeClass("disabled");
            }
          }],
          onshow: function () {
            if (Lottery.printStatus != undefined && Lottery.printStatus) {
              $('.printStatus input').attr("checked", "checked");
            } else {
              $('.printStatus input').removeAttr("checked");
            }
            if ($('.printStatus').find('input').is(':checked')) {
              $('.printStatus').click(function () {
                $('this').find('input').removeAttr("checked");
                Cookies.set('printStatus', false);
                Lottery.printStatus = false;
              });
            } else {
              $('.printStatus').click(function () {
                $('this').find('input').attr("checked", "checked");
                Cookies.set('printStatus', true);
                Lottery.printStatus = true;
              });
            }
          }
        };

        if (mode1.length > 200000) {
          confirmOpt['height'] = 350;
        }

        confirmAgain = dialog(confirmOpt).showModal();

      }

    });
    // 追号面板初始化切换
    $('.trace-data').off('click').on('click', 'ul.trace-tab li,a#lgenTrace', function (evt) {
      // TAB切换
      if (evt.target.tagName !== 'A') {
        var thistab = $(this);
        var nowTyp = thistab.attr('name');
        var nowTab = thistab.data('type');
        var indexTyp = me.queueDict[nowTyp];
        var nowData = $('#trace-data-' + nowTyp);
        var alltabs = me.tracetab[indexTyp];
        var allchange = me.tracechange[indexTyp];
        var tracebtn = me.tracebtn[indexTyp];
        var tracelist = me.tracelist[nowTyp];
        if ($(this).hasClass('disabled')) {
          if ($(this).data('type') == 'rate' && me.chkRateTrace()) {
            me.showConfirmTip('仅支持复式及对应的单式选号投注可以同时使用利润率追号！', tracebtn);
          }
          return false;
        }
        alltabs.removeClass('on');
        thistab.addClass('on');
        allchange.addClass('trace-hidden');
        allchange.filter('#trace-' + nowTab).removeClass('trace-hidden');
        var nowSel = tracebtn.data('sel');
        var nowNo = $(this).data('no');
        tracebtn.data('no', nowNo);
        //交易市场TAB颜色切换
        if (parseInt(nowNo, 10) > 3) {
          if (nowTab == 'salesame') {
            alltabs.filter('li.tracebuy').removeClass('tracebuy');
            thistab.parent().removeClass('tracebuy');
          } else {
            thistab.parent().addClass('tracebuy');
            thistab.addClass('tracebuy');
          }
        }
        //初始化金额汇总
        me.cashier = 0;
        me.counter[nowTyp] = 0;
        //恢复select
        allchange.find('select.lotteryList').val(5);
        //同步全选
        var syncchkall = tracelist.prev().find('input.chkall');
        syncchkall.attr('checked', false).addClass('nochk');

        //第一次清空选择的追号
        if (typeof nowSel != 'undefined') {
          nowData.find('.trace-list').html(nowData.find('.trace-list').data('init'));
          me.tracelist[nowTyp] = nowData.find('.trace-list>ul.trace-items');
          //绑定事件
          me.bindEvt(tracelist, tracebtn, nowTyp);
          if (typeof nowSel[$(this).data('no')] != 'undefined' && nowSel[$(this).data('no')].length > 0) {
            me.counter[nowTyp] = nowSel[$(this).data('no')].length;
          } else {
            me.counter[nowTyp] = 0;
          }
        } else {
          me.counter[nowTyp] = 0;
        }

        me.prepareSubmit(nowData, tracebtn, nowTyp, nowSel);
        //生成追号
      } else {
        var genBtn = $(this);
        var nowNo = genBtn.data('no');
        var indexTyp = me.queueDict[Lottery.type];
        var nowtab = me.tracetab[indexTyp];
        var nowTraceBox = $('#trace-data-' + Lottery.type);
        var tabonTyp = nowtab.filter('li.on').data('type');
        var nowchg = me.tracechange[indexTyp].filter('#trace-' + tabonTyp);
        var traceBtn = me.tracebtn[indexTyp];
        var rateinsert = nowchg.find('input[name=startRate]');

        //单倍利润为负，利润率小于[minratelimite]%时无法追号
        if (genBtn.data('rate') <= me.minratelimite && nowNo == 1) {
          var tip = dialog({
            id: 'tracerateno',
            align: 'top',
            skin: 'tip',
            content: '利润不足' + me.minratelimite + '%，无法选择利润率追号！',
            onshow: function () {
              var that = this;
              setTimeout(function () {
                that.close().remove();
              }, 2000);
              return false;
            }
          }).show(genBtn[0]);
          return false;
        }
        //利润率小于所填利润率时无法追号
        if (genBtn.data('rate') < rateinsert.val() && nowNo == 1) {
          var tip = dialog({
            id: 'tracerateno',
            align: 'top',
            skin: 'tip',
            content: '当前利润率为' + Q.doubleFormat(genBtn.data('rate')) + '%，利润不足' + rateinsert.val() + '%，无法按此利润率追号！',
            onshow: function () {
              var that = this;
              //恢复错误利润率之前的合法利润率
              if (typeof nowtab.filter('li.on').data('vr') !== 'undefined') {
                rateinsert.val(nowtab.filter('li.on').data('vr'));
              }

              setTimeout(function () {
                that.close().remove();
              }, 3000);
              return false;
            }
          }).show(genBtn[0]);
          return false;
        }

        var traceMsg = nowchg.find('.tracemsg');
        var totalTrace = nowchg.find('input[name=initTotals]').val();

        var alltraceMsg = traceMsg.map(function () {
          var $li = $(this).parents('li');
          return $li.html().replace(/<(.*?)>/g, '___').replace(/\r\n/g, '').replace(/(_)\1+/g, ' ' + $(this).val());
        }).get();

        var traceAgainMsg = {
          '1': '<h3>利润率追号：</h3><div class="list listmsg">' + alltraceMsg.join('，') + '<br/>确定要追号 ' + totalTrace + ' 期？</div>',
          '2': '<h3>同倍追号：</h3><div class="list listmsg">' + alltraceMsg.join('，') + '<br/>确定要追号 ' + totalTrace + ' 期？</div>',
          '3': '<h3>翻倍追号：</h3><div class="list listmsg">' + alltraceMsg.join('，') + '<br/>确定要追号 ' + totalTrace + ' 期？</div>',
          '4': '<h3>买彩票 同倍追号：</h3><div class="list listmsg">' + alltraceMsg.join('，') + '<br/>确定要追号 ' + totalTrace + ' 期？</div>',
          '5': '<h3>卖彩票 同倍追号：</h3><div class="list listmsg">' + alltraceMsg.join('，') + '<br/>确定要追号 ' + totalTrace + ' 期？</div>'
        };

        if (typeof nowNo == 'undefined') {
          nowNo = nowtab.filter('li.on').data('no');
        }
        //清除手动倍数缓存
        nowtab.filter('li.on').removeData('manual');
        //填充追号期数
        me.initDetails(traceBtn, nowTraceBox, 1, me.traceitems, false);

      }
    });
  },
  //初始化细节
  initDetails: function (genBtn, nowData, type, traceList, isreset) {
    var me = this;
    var tracetpl = me.traceTpl();
    var traceTyp = genBtn.attr('rel');
    var typindex = me.queueDict[traceTyp];
    var tracetabs = me.tracetab[typindex];
    var allchange = me.tracechange[typindex];
    var tabon = tracetabs.filter('li.on');
    var nowchg = me.tracechange[typindex].filter('#trace-' + tabon.data('type'));
    var traceBtn = me.tracebtn[typindex];
    var orders = me.orders[typindex];

    var nowlist = me.tracelist[traceTyp];
    var nowTraceBox = $('#trace-data-' + traceTyp);

    traceList.items = Lottery.next;
    var tracelist = nowData.find('.trace-list');

    /*生成追号参数*/
    var chooseNum = parseInt(nowchg.find('input[name=initTotals]').val(), 10);

    if (isreset) {
      if (tracelist.find('>li').size() == 0 || nowData.find('.trace-list').html() == '') {

        if (typeof traceList.items == 'undefined') {
          return false;
        }
        var htmlcache = tmpl.apply(this, ['list_trace', tracetpl, traceList]);
        tracelist.data('init', htmlcache).html(htmlcache).removeClass('trace-hidden');
        //初始化各追号倍数
        tracetabs.filter('li[data-type=double]').data('v', Q.doubleTimes());
        tracetabs.filter('li[data-type=same]').data('v', [1]);
        //初始化最大倍数
        allchange.find('input[name=initTotals]').attr('max', traceList.items.length);
        allchange.find('input[name=gaps]').attr('max', traceList.items.length);
        if (traceTyp == 'market') {
          tracetabs.data('v', [1]);
        }
      } else {
        tracelist.removeClass('trace-hidden');
      }
    } else {
      var nowpercent = nowchg.find('input[name=startRate]').val();
      var nowallv = me.updateMoney(tabon.data('no'), nowchg, orders.data('trace'));

      var nowtabno = tracetabs.filter('li.on').data('no');
      var setSel = {};
      if (nowallv) {

        tabon.data({
          'v': nowallv,
          'vr': nowpercent
        });
        if (typeof traceBtn.data('sel') === 'undefined') {
          setSel = {};
          setSel[nowtabno] = [];
        } else {
          setSel = traceBtn.data('sel');
        }

        var wantSel = $.map($(Array(chooseNum)), function (val, i) {
          return i;
        });
        setSel[nowtabno] = wantSel;
      } else {
        setSel[nowtabno] = [];
        nowlist.parent().html(nowlist.parent().data('init'));
      }

      setSel[nowtabno] = wantSel;
      me.prepareSubmit(nowlist, traceBtn, traceTyp, setSel);
    }

    nowTraceBox.show();

    me.tracelist[traceTyp] = tracelist.find('>ul.trace-items');
    var traceData = orders.data('trace');
    traceBtn.data('rate', traceData.profixRate);

    //绑定点选事件(单选，全选，手动倍数)
    me.bindEvt(tracelist, genBtn, traceTyp);

    //期数小于5禁用下拉选期菜单
    var chooseIssue = me.tracechange[typindex].find('select.lotteryList');
    if (traceList.items.length < 5) {
      chooseIssue.attr('disabled', 'disabled');
    } else {
      chooseIssue.removeAttr('disabled');
    }

    //追号下拉菜单
    chooseIssue.off('change').on('change', function (evt) {
      var nowMax = traceList.items.length;
      var tabon = tracetabs.filter('li.on');
      var thischg = me.tracechange[typindex].filter('#trace-' + tabon.data('type'));
      if ($(this).val() == '-1' || parseInt($(this).val(), 10) > nowMax) {
        thischg.find('input[name=initTotals]').val(nowMax);
      } else {
        thischg.find('input[name=initTotals]').val($(this).val());
      }
    });

    var len = $('.trace-data .trace-list .trace-items').find('label.on_check').length;
    if (len > 0) {
      $('.trace-data a.submit').removeClass('disabled');
    } else {
      $('.trace-data a.submit').addClass('disabled');
    }
  },

  bindNumber: function (el) {
    if ($(el).next().length == 0 && $(el).prev().length == 0) {
      $(el).inputNumber();
    }
    return false;
  },

  bindEvt: function (traceItems, genBtn, traceTyp) {
    var me = this;
    traceItems.off('click change keyup').on('click change keyup', 'input[type=checkbox],input[type=text].times', function (evt) {

      if ($(this).hasClass('chkall') && evt.type === 'click') {
        //全选
        var typeindex = me.queueDict[traceTyp];
        var nowlist = me.tracelist[traceTyp];
        var genBtn = me.tracebtn[typeindex];
        var tracetabs = me.tracetab[typeindex];
        var nowTab = tracetabs.filter('li.on');
        var nowNo = genBtn.data('no');
        var nowData = $('#trace-data-' + traceTyp);
        if (nowTab.data('v').toString() == '-1') {
          return false;
        }

        if ($(this).hasClass('nochk')) {
          $(this).prop('checked', true);
          $('.trace-fixed label.chkall').addClass('on');
          $(this).removeClass('nochk');
        } else {
          $(this).prop('checked', false);
          $(this).addClass('nochk');
        }
        if ($(this).prop('checked')) {
          nowlist.find('input[type="checkbox"]').prop('checked', true).removeClass('nochk');
          nowlist.find('>li').addClass('chkitem');
          nowlist.find('input.times').removeAttr('disabled');
          $('.trace-fixed label.chkall').addClass('on')
        } else {
          nowlist.parent().html(nowData.find('.trace-list').data('init'));
          me.tracelist[traceTyp] = nowData.find('.trace-list>ul.trace-items');
        }
        me.prepareSubmit(nowlist, genBtn, traceTyp);
      } else if ($(this).hasClass('times')) {
        //手动倍数
        if (evt.type === 'change' || evt.type === 'keyup') {
          var typeindex = me.queueDict[traceTyp];
          var nowlist = me.tracelist[traceTyp];
          var genBtn = me.tracebtn[typeindex];
          var nowTab = me.tracetab[typeindex];
          var nowNo = genBtn.data('no');
          var tabOn = nowTab.filter('li.on');

          var oldManual = tabOn.data('manual');
          if (typeof oldManual == 'undefined') {
            oldManual = {};
            oldManual[$(this).data('index')] = $(this).val();
            tabOn.data('manual', oldManual);
          } else {
            oldManual[$(this).data('index')] = $(this).val();
            tabOn.data('manual', oldManual);
          }
          me.prepareSubmit(nowlist, genBtn, traceTyp);
        }
      } else {
        if (evt.type === 'click') {
          //单选
          var $li = $(this).parents('li');
          var typeindex = me.queueDict[traceTyp];
          var thistime = $li.find('input.times');
          var nowchkindex = $(this).attr('index');
          var thismoney = $li.find('em.traceM');
          var tracetabs = me.tracetab[typeindex];
          var nowsubmit = me.submitbtn[typeindex];
          var noworders = me.orders[typeindex];
          var genBtn = me.tracebtn[typeindex];

          var vGet = {
            'double': 'v',
            'same': 'same',
            'rate': 'rate'
          };
          var nowTab = tracetabs.filter('li.on');
          var nowtabtype = nowTab.data('type');
          var allv = nowTab.data('v');
          var allvr = nowTab.data('vr');
          var nowno = nowTab.data('no');
          var nowtime = 1;
          var nowMoney;

          var moneyKey = {
            '1': 'traceM',
            '2': 'traceM',
            '3': 'traceM',
            '4': 'traceMBuy',
            '5': 'traceMSale'
          };

          var nowchanges = me.tracechange[typeindex];
          var nchange = nowchanges.filter('#trace-' + nowtabtype);

          var traceData = noworders.data('trace');

          if ($(this).hasClass('nochk')) {
            $(this).prop('checked', true);
            $(this).removeClass('nochk');
            $li.find('span label').addClass('on_check');
            $li.find('.medium spinner').mouseover();
          } else {
            $(this).prop('checked', false);
            $li.find('span label').removeClass('on_check');
            $(this).addClass('nochk');
          }


          if (!$li.hasClass('chkitem')) {
            if (typeof allv !== 'undefined') {
              if (typeof allv[nowchkindex] === 'undefined' && (nowno === 2 || nowno === 4 || nowno === 5)) {
                nowtime = allv[0];
              } else {
                if (typeof allv[nowchkindex] !== 'undefined') {
                  nowtime = allv[nowchkindex];
                } else {
                  nowtime = allv[allv.length - 1];
                }
                if (nowno === 1) {
                  if (parseInt(nchange.find('input[name=startRate]').val(), 10) > parseInt(allvr, 10)) {
                    nchange.find('input[name=startRate]').val(allvr);
                  }
                }
              }
            } else {
              nowtime = thistime.data(vGet[nowtabtype]);
            }

            if (nowtime < 0) {
              return false;
            }
            $li.addClass('chkitem');
            nowMoney = parseFloat(nowtime * traceData[moneyKey[nowno]], 10);
            me.cashier += nowMoney;
            me.counter[traceTyp] += 1;

            thistime.val(nowtime).removeAttr('disabled');
          } else {
            $li.removeClass('chkitem');
            nowtime = 0;
            nowMoney = parseFloat(nowtime * traceData[moneyKey[nowno]], 10);
            me.cashier -= nowMoney;
            me.counter[traceTyp] -= 1;
            thistime.val(nowtime).attr('disabled', 'disabled');
          }


          thistime.inputNumber();
          thismoney.html(Lottery.type === 'lottery' ? nowMoney.toFixed(3) : nowMoney).attr('v', nowMoney);
          nchange.find('li.totalTraceMoney em').html(Lottery.type === 'lottery' ? parseFloat(me.cashier, 10).toFixed(3) : parseFloat(me.cashier, 10));
          nchange.find('li.totalIssue em').html(parseInt(me.counter[traceTyp], 10));
          me.prepareSubmit(traceItems, genBtn, traceTyp);
        }
      }
    });

  },
  //准备追号提交表单数据
  prepareSubmit: function (nowData, genBtn, type) {
    var me = this;
    var index = me.queueDict[type];
    if (typeof me.tracelist[type] === 'undefined') {
      return false;
    }

    var traceCounts = {},
      traceTimeCount = 0,
      chkItem = me.tracelist[type].find('li.chkitem input.times');
    var nowsubmit = me.submitbtn[index];
    var noworder = me.orders[index];
    var traceData = noworder.data('trace');
    var tracelist = me.tracelist[type];
    var nowtab = me.tracetab[index];
    var nowtabtyp = nowtab.data('type');
    var nowData = $('#trace-data-' + type);
    var moneyKey = {
      '1': 'traceM',
      '2': 'traceM',
      '3': 'traceM',
      '4': 'traceMBuy',
      '5': 'traceMSale'
    };

    if (typeof genBtn.data('no') == 'undefined') {
      genBtn.data('no', nowtab.filter('.on').data('no'));
    }
    var nowtabno = genBtn.data('no');

    var nowchange = me.tracechange[index];
    //记录选择追号的项目
    var nowSel;
    var oldSel;
    if (arguments.length > 3) {
      oldSel = $.extend({}, arguments[3]);
    }
    if (typeof genBtn.data('sel') === 'undefined') {
      nowSel = {};
      nowSel[nowtabno] = [];
    } else {
      nowSel = genBtn.data('sel');
    }

    var nowIndex = [];

    var setLine = function (inlinetimes, inlinemoney) {
      var nowtime = 0;
      var nowallv = nowtab.filter('li.on').data('v');
      //翻倍
      if (nowtabno === 3) {
        if (typeof nowallv !== 'undefined') {
          if (typeof nowallv[inlinetimes.data('index')] !== 'undefined') {
            nowtime = nowallv[inlinetimes.data('index')];
          } else {
            nowtime = nowallv[nowallv.length - 1];
          }
        } else {
          nowtime = inlinetimes.data('v');
        }
        //同倍
      } else if (nowtabno === 2 || nowtabno === 4 || nowtabno === 5) {
        if (typeof nowallv !== 'undefined') {
          if (typeof nowallv[inlinetimes.data('index')] !== 'undefined') {
            nowtime = nowallv[inlinetimes.data('index')];
          } else {
            nowtime = nowallv[0];
          }
        }
        //利润率
      } else if (nowtabno === 1) {
        if (typeof nowallv !== 'undefined') {
          if (typeof nowallv[inlinetimes.data('index')] !== 'undefined') {
            nowtime = nowallv[inlinetimes.data('index')];
          } else {
            nowtime = inlinetimes.data('same');
          }
        } else {
          nowtime = inlinetimes.data('same');
        }
      }

      //手动倍数
      var tabOn = nowtab.filter('li.on');
      if (typeof tabOn.data('manual') != 'undefined') {
        if (typeof tabOn.data('manual')[inlinetimes.data('index')] != 'undefined') {
          nowtime = tabOn.data('manual')[inlinetimes.data('index')];
        }
      }

      var nowmoney = parseFloat(nowtime * traceData[moneyKey[nowtabno]], 10);

      inlinemoney.html(Lottery.type === 'lottery' ? nowmoney.toFixed(3) : nowmoney).attr('v', nowmoney);
      inlinetimes.val(nowtime).removeAttr('disabled');

      return nowmoney;
    }

    var traceTotalLen = 0;

    if (chkItem.size() > 0) {
      if (arguments.length > 3) {
        if (typeof oldSel[nowtabno] !== 'undefined') {
          tracelist.parent().html(nowData.find('.trace-list').data('init'));
          me.tracelist[type] = nowData.find('.trace-list>ul.trace-items');
          chkItem = me.tracelist[type].find('li.chkitem input.times');
        }

      }

      var totalMoney = 0;
      traceTotalLen = chkItem.size();
      chkItem.map(function (k, el) {
        var $li = $(el).parents('li');

        nowIndex.push($li.index());
        var inlinetimes = $(el);
        var inlinemoney = $li.find('span em.traceM');
        var nm = setLine(inlinetimes, inlinemoney);
        traceTimeCount += parseInt(inlinetimes.val(), 10);
        traceCounts[inlinetimes.data('issue')] = parseInt(inlinetimes.val(), 10);

        totalMoney += nm;
      });
      nowchange.find('li.totalIssue em').html(chkItem.size());
      nowchange.find('li.totalTraceMoney em').html(Lottery.type === 'lottery' ? parseFloat(totalMoney).toFixed(3) : parseFloat(totalMoney));
      // 联动全选
      var syncchkall = tracelist.prev().find('input.chkall');
      if (chkItem.length == tracelist.find('li').length) {
        syncchkall.prop('checked', true).removeClass('nochk');
        $('.trace-fixed label.chkall').addClass('on')
        $('.trace-items').find('span.chk label').addClass('on_check');
        $('.trace-items').find('.medium .spinner').mouseover();
      } else {
        syncchkall.prop('checked', false).addClass('nochk');
        $('.trace-fixed label.chkall').removeClass('on');
      }
    } else {
      nowchange.find('li.totalIssue em').html(0);
      nowchange.find('li.totalTraceMoney em').html(0);
    }

    nowSel[nowtabno] = nowIndex;
    if (arguments.length > 3) {
      nowSel = oldSel;

      if (typeof nowSel[nowtabno] !== 'undefined') {
        if (chkItem.size() == 0 && nowSel[nowtabno].length > 0) {
          var allitem = "li:eq(" + nowSel[nowtabno].join('),li:eq(') + ")";
          var nowallv = nowtab.filter('li.on').data('v');
          var allchkitem = me.tracelist[type].find(allitem);
          var totalMoney = 0;
          traceTimeCount = 0;
          nowchange.find('li.totalIssue em').html(allchkitem.length);

          traceTotalLen = allchkitem.size();
          allchkitem.map(function (k, el) {
            $(el).addClass('chkitem');
            $(el).find('span.chk label').addClass('on_check');
            $(el).find('.medium .spinner').mouseover();
            $(el).find('span.chk input').prop('checked', true).removeClass('nochk');
            var inlinetimes = $(el).find('span input.times');
            var inlinemoney = $(el).find('span em.traceM');
            var nm = setLine(inlinetimes, inlinemoney);
            totalMoney += nm;
            traceTimeCount += parseInt(inlinetimes.val(), 10);
            traceCounts[inlinetimes.data('issue')] = parseInt(inlinetimes.val(), 10);
          });

          // 联动全选
          var syncchkall = tracelist.prev().find('input.chkall');
          if (allchkitem.length == tracelist.find('li').length) {
            syncchkall.prop('checked', true).removeClass('nochk');
            $('.trace-fixed label.chkall').addClass('on');
            $('.trace-items span.chk label').addClass('on_check');
            $('.trace-items .medium .spinner').mouseover();
          } else {
            syncchkall.prop('checked', false).addClass('nochk');
          }
          nowchange.find('li.totalTraceMoney em').html(Lottery.type === 'lottery' ? parseFloat(totalMoney).toFixed(3) : parseFloat(totalMoney));
        } else {
          if (chkItem.size() == 0) {
            nowchange.find('li.totalIssue em').html(0);
            nowchange.find('li.totalTraceMoney em').html(0);
          }
        }
      } else {
        nowchange.find('li.totalIssue em').html(0);
        nowchange.find('li.totalTraceMoney em').html(0);
      }
    }
    genBtn.data('sel', nowSel);

    //准备初始化追号提交数据
    var nowtrace = noworder.data('trace');

    if (typeof nowtrace == 'undefined') {
      return false;
    }

    var tracemoney = nowtrace[moneyKey[nowtabno]];

    if (nowtrace.type === 'market') {
      var twoTypeTrace = {};
      if (genBtn.data('no') == 4) {
        twoTypeTrace['buytrace'] = {
          'trace': traceCounts,
          'traceCount': traceTotalLen,
          'money': traceTimeCount * tracemoney
        };
      }
      if (genBtn.data('no') == 5) {
        twoTypeTrace['selltrace'] = {
          'trace': traceCounts,
          'traceCount': traceTotalLen,
          'money': traceTimeCount * tracemoney
        };
      }
      genBtn.data(twoTypeTrace);
    } else if (nowtrace.type === 'lottery') {
      genBtn.data({
        'trace': traceCounts,
        'traceCount': traceTotalLen,
        'money': traceTimeCount * tracemoney
      });
    }
    var len = $('.trace-data .trace-list .trace-items').find('li.chkitem').length;
    if (len > 0) {
      $('.trace-data a.submit').removeClass('disabled');
    } else {
      $('.trace-data a.submit').addClass('disabled');
    }
  },
  //单独更新追号金额
  updateMoney: function (traceOn, traceChange, data) {
    var getAllv = [];
    var me = this;
    var nowtotalNext = Lottery.next;
    var sumAmount = 0;
    var genBtn = traceChange.parent().find('a#lgenTrace');
    var getTimesRight;

    if (typeof nowtotalNext !== 'undefined') {
      var totalIssues = nowtotalNext.length;
      if (traceOn == '1') {
        for (var i = 0, len = totalIssues; i < len; i++) {
          var oldAmount = sumAmount;
          var getTimesRate = 1;
          var rateinsert = traceChange.find('>ul:eq(1) input[name=startRate]').val();

          var nowRate = ((data.profixP - sumAmount) / sumAmount) * 100;
          if (i == 0) {
            nowRate = ((data.profixP - data.traceM) / data.traceM) * 100;
            if (parseFloat(nowRate) < parseFloat(rateinsert)) {
              return false;
            }
          }
          getTimesRate = me.computeByMargin(traceChange.find('>ul input[name=startTimes]').val(), traceChange.find('>ul input[name=startRate]').val(), data.traceM, sumAmount, data.profixP);

          if (getTimesRate < 1) {
            sumAmount = i * data.traceM;
          } else {
            sumAmount = getTimesRate * data.traceM + oldAmount;
          }
          getAllv.push(getTimesRate <= me.maxtimes ? getTimesRate : me.maxtimes);
        }
      } else if (traceOn == '3') {
        var doubles = 0;
        var startTime = Number($('input[name="startTimesFb"]').val());
        var getTimesRate = 1;
        for (var i = 0, len = totalIssues; i < len; i++) {
          getTimesRight = me.computeByTimes(doubles, i, traceChange.find('input[name=doubles]').val(), traceChange.find('input[name=gaps]').val(), startTime);
          doubles = getTimesRight[0] / startTime;
          getTimesRight = getTimesRight[1];

          if (i > 1 && getAllv[i - 1] == me.maxtimes) {
            break;
          }

          getAllv.push(getTimesRight <= me.maxtimes ? getTimesRight : me.maxtimes);
        }
      } else {
        for (var i = 0, len = totalIssues; i < len; i++) {
          var startTimes = traceChange.find('input[name="startTimes"]').val();
          getAllv.push(startTimes <= me.maxtimes ? startTimes : me.maxtimes);
        }
      }
    }

    return getAllv;
  },
  //单独计算当前下单的所有可用追号的倍数
  updateTimes: function (element, genbtn, data) {
    var me = this;
    var nowtotalNext = Lottery.next;
    var traceTyp = Lottery.type;
    var typindex = me.queueDict[traceTyp];
    var nowData = $('#trace-data-' + traceTyp);
    var genBtn = me.tracebtn[typindex];
    var allRightRate = [];
    var nowRate = ((data.profixP - data.traceM) / data.traceM) * 100;
    var sumAmount = 0;

    if (typeof nowtotalNext !== 'undefined' && traceTyp == 'lottery') {
      var totalIssues = nowtotalNext.length;
      var startRate = element.find('.trace-rate ul:eq(1) input[name=startRate]').val();
      var startTimes = element.find('.trace-rate ul:eq(1) input[name=startTimes]').val();
      for (var i = 0, len = totalIssues; i < len; i++) {
        var oldAmount = sumAmount;
        var getTimesRate = 1;
        getTimesRate = me.computeByMargin(startTimes, startRate, data.traceM, sumAmount, data.profixP);
        if (getTimesRate < 1) {
          sumAmount = i * data.traceM;
        } else {
          sumAmount = getTimesRate * data.traceM + oldAmount;
        }
        allRightRate.push(getTimesRate <= me.maxtimes ? getTimesRate : me.maxtimes);
      }
    }
    if (nowRate < me.minratelimite) {
      allRightRate = [-1];
    }
    element.find('ul.trace-tab li[data-type=rate]').data({
      'v': allRightRate,
      'vr': startRate
    });

    //更新金额
    var oldSel = genBtn.data('sel');

    me.prepareSubmit(nowData, genBtn, traceTyp, oldSel);
  },
  //根据利润率计算当期需要的倍数[起始倍数，利润率，单倍购买金额，历史购买金额，单倍奖金],返回倍数
  //利润率=（奖金模式-总投注金额）/ 总投注金额
  computeByMargin: function (s, m, b, o, p) {
    s = s ? parseInt(s, 10) : 0;
    m = m ? parseInt(m, 10) : 0; //利润率
    b = b ? Number(b) : 0; //单倍购买金额
    o = o ? Number(o) : 0; //历史购买金额
    p = p ? Number(p) : 0; //单倍奖金
    var t = 0;

    if (b > 0) {
      if (m > 0) {
        t = Math.ceil(((m / 100 + 1) * o) / (p - (b * (m / 100 + 1))));
      } else { //无利润率
        t = 1;
      }
      if (t < s) { //如果最小倍数小于起始倍数，则使用起始倍数
        t = s;
      }
    }

    return t;
  },
  /**
   * 
   * 翻倍倍数
   * @param {number} s 幂数 即4^2中的2
   * @param {number} k 序号 
   * @param {number} d 每隔g期翻倍倍数
   * @param {number} g 隔期gap
   * @param {number} t 起始倍数
   * @returns 
   */
  computeByTimes: function (s, k, d, g, t) {
    if (k % g === 0) {
      s = s + 1;
    }
    return [s * t, Math.pow(d, (s - 1)) * t];
  },
  //追号重置
  resetTraceBox: function (el) {
    var me = this;
    if (el.find('input[name=autoTrace]').is(':checked')) {
      el.find('input[name=autoStop]').prop('checked', true);
      el.find('div.trace-data select.lotteryList').val(5);
      el.find('div.trace-data input[name=startTimes]').val(1);
      el.find('div.trace-data input[name=initTotals]').val(5);
      el.find('div.trace-data input[name=gaps]').val(2);
      el.find('div.trace-data input[name=doubles]').val(2);
      el.find('div.trace-data input[name=startRate]').val(me.minratelimite);
      el.find('ul.trace-items li').removeClass('chkitem');
      el.find('ul.trace-items li input.times').val('0').attr('disabled', 'disabled');
      el.find('ul.trace-items li span em.traceM').html('0');
      el.find('ul.trace-items li span.chk input').attr('checked', false);
      el.find('div.trace-fixed span.chk input.chkall').attr('checked', false).addClass('nochk');
      el.find('div.trace-data > a:eq(0)').removeData();
      el.find('ul.trace-tab > li').removeData('manual');
      if ($('.trace-box .trace-icon').hasClass('on')) {
        el.find('input[name=autoTrace]').next('label').trigger('click');
      }
    } else {
      if (el.find('div.trace-data').size() > 0) {
        el.find('div.trace-data select.lotteryList').val(5);
        el.find('div.trace-data input[name=startTimes]').val(1);
        el.find('div.trace-data input[name=initTotals]').val(5);
        el.find('div.trace-data input[name=gaps]').val(2);
        el.find('div.trace-data input[name=doubles]').val(2);
        el.find('div.trace-data input[name=startRate]').val(me.minratelimite);
        el.find('ul.trace-items li').removeClass('chkitem');
        el.find('ul.trace-items li input.times').val('0').attr('disabled', 'disabled');
        el.find('ul.trace-items li span em.traceM').html('0');
        el.find('ul.trace-items li span.chk input').attr('checked', false);
        el.find('div.trace-fixed span.chk input.chkall').attr('checked', false).addClass('nochk');
        el.find('div.trace-data > a:eq(0)').removeData();
        el.find('ul.trace-tab > li').removeData('manual');
      }
    }
    if (el.find('.list>ul li').length < 1) {
      $('.orders .bottom .submit').addClass('disabled');
    }


  },
  //追号期数重置
  resetTraceDate: function (clear) {
    var me = this;
    var reverseDict = {
      'lottery': 'market',
      'market': 'lottery'
    };
    var nowTyp = Lottery.type;
    var otherTyp = reverseDict[nowTyp];
    var genBtn = me.tracebtn[me.queueDict[nowTyp]];
    var nowData = $('#trace-data-' + nowTyp);
    var otherData = $('#trace-data-' + otherTyp);
    var beforenowSel = genBtn.data('sel');


    if (typeof clear !== 'undefined' || clear) {
      genBtn.removeData('sel');
      beforenowSel = undefined;
    }

    //判断是否连带重置交易市场

    var shouldRefresh = false;

    me.traceitems.items = Lottery.next;

    var traceList = me.traceitems;

    if (typeof traceList.items == 'undefined') {
      return false;
    }
    var htmlcache = tmpl.apply(this, ['list_trace', me.traceTpl(), traceList]);

    if (typeof me.tracelist[nowTyp] !== 'undefined') {
      var nowlist = me.tracelist[nowTyp].parent();
      nowlist.data('init', htmlcache).html(htmlcache).removeClass('trace-hidden');
    }


    if ($('#' + otherTyp + ' .orders input[name=autoTrace]').is(':checked')) {
      var otherlist = me.tracelist[otherTyp].parent();
      otherlist.data('init', htmlcache).html(htmlcache).removeClass('trace-hidden');
    }

    me.tracelist[nowTyp] = nowData.find('.trace-list>ul.trace-items');
    me.tracelist[otherTyp] = otherData.find('.trace-list>ul.trace-items');
    if (typeof beforenowSel !== 'undefined') {
      me.prepareSubmit(nowData, genBtn, nowTyp, beforenowSel);
    }
  },
  //判断是否能利润率追号
  chkRateTrace: function () {
    var _el = $("#" + Lottery.type);
    var orderList = _el.find('.orders .list > ul:eq(0)');

    var onlyTyp = [];
    var onlyMiddle = [];
    var onlyFirst = [];
    var alltype = orderList.find('li').map(function () {
      var lstTyp = $(this).data('type').split('_');
      var firstMethod = lstTyp[0];
      var midMethod = lstTyp[1];
      var lastMethod = lstTyp[lstTyp.length - 1];
      var chkMethod = lstTyp[lstTyp.length - 1];
      if ($.inArray(midMethod, onlyMiddle) == -1) {
        onlyMiddle.push(midMethod);
      }
      if ($.inArray(firstMethod, onlyFirst) == -1) {
        onlyFirst.push(firstMethod);
      }
      if ($.inArray(chkMethod, onlyTyp) == -1) {
        onlyTyp.push(chkMethod);
      }
    }).get();

    var chkDict = [
      'fs',
      'ds',
      'fsds',
      'dsfs',
      'hds', 'hfs', 'hfshds', 'hdshfs',
      'qds', 'qfs', 'qfsqds', 'qdsqfs',
      'zxfs', 'zxds', 'zxfszxds', 'zxdszxfs',
      'zuxfs', 'zuxds', 'zuxfszuxds', 'zuxdszuxfs',
      '1z1', '2z2', '3z3', '4z4', '5z5', '6z5', '7z5', '8z5',
      'z120', 'z60', 'z30', 'z20', 'z10', 'z5', 'z24', 'z12', 'z6', 'z4', 'z3', 'dwd', 'hs1', 'hs2', 'qs1', 'qs2', 'h2', 'q2',
      'bdd11y', 'dwd11y', 'bdd1', 'bdd2', '3x1m', '4x1m', '5x1m'
    ];

    var secChkDict = [
      'hds', 'hfs', 'hfshds', 'hdshfs',
      'qds', 'qfs', 'qfsqds', 'qdsqfs',
      'rxds', 'rxfs', 'rxdsrxfs', 'rxfsrxds'
    ];

    var lastChkDict = [
      '1z1', '2z2', '3z3', '4z4', '5z5', '6z5', '7z5', '8z5'
    ];

    var otherlastChkDict = [
      'z120', 'z60', 'z30', 'z20', 'z10', 'z5', 'z24', 'z12', 'z6', 'z4', 'z3', 'dwd', 'hs1', 'hs2', 'qs1', 'qs2', 'h2', 'q2',
      'bdd11y', 'dwd11y', 'bdd1', 'bdd2', '3x1m', '4x1m', '5x1m'
    ];

    if ($.inArray(onlyTyp.join(''), chkDict) == -1 || onlyFirst.length > 1) {
      //11选5任选复式&任选单式 - 几中几对应
      if ($.inArray(onlyTyp.join(''), lastChkDict) != -1) {
        return false;
      }
      if ($.inArray(onlyTyp.join(''), otherlastChkDict) != -1 && onlyFirst.length == 1) {
        return false;
      }
      return true;
    } else {
      //二码前后对应
      if ($.inArray(onlyTyp.join(''), secChkDict) != -1 && onlyFirst.length == 1 && onlyMiddle.length > 1) {
        return true;
      }
      return false;
    }
  },
  //追号按钮类型提示
  showTraceTip: function (msg, btn) {
    var me = this;
    var tip = dialog({
      id: 'tracerateno',
      align: 'top',
      skin: 'tip',
      content: msg,
      onshow: function () {
        var that = this;
        setTimeout(function () {
          me.resetTraceDate();
          that.close().remove();
        }, 2000);
        return false;
      }
    }).show(btn[0]);
  },
  //确认类型提示
  showConfirmTip: function (html, btn) {
    var me = this;

    var tip = dialog({
      title: '温馨提示',
      content: html,
      skin: 'confirm-again',
      fixed: true,
      button: [{
        id: 'trace_ok',
        value: '确&nbsp;&nbsp;定',
        callback: function (evt) {
          var that = this;
          me.resetTraceDate();
          that.close().remove();
        }
      }]
    }).showModal();
  },
  //启用和停用利润率追号
  toggleRateTab: function (onoff) {
    var me = this;
    var _el = $("#" + Lottery.type);
    var traceBox = _el.find('div.trace-data');
    var traceTabBtn = _el.find('div.trace-data .trace-tab');
    var traceBtn = _el.find('div.trace-data > a:eq(0)');

    if (onoff) {
      traceTabBtn.find('li[data-no=1]').addClass('disabled').removeClass('on');
      traceTabBtn.find('li.on').removeClass('on');
      traceTabBtn.find('li[data-no=3]').addClass('on');
      traceBtn.attr('name', 'double').data('no', 3);
      traceBox.find('.trace-rate,.trace-same').addClass('trace-hidden');
      traceBox.find('.trace-double').removeClass('trace-hidden');
      traceBox.find('div.trace-fixed input.chkall').attr('checked', false).addClass('nochk');
      me.resetTraceDate();
    } else {
      traceTabBtn.find('li[data-no=1]').removeClass('disabled');
    }
  }
};