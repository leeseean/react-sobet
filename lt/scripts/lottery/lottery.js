/* jshint devel:true */

let Lottery = Lottery || {};

Lottery = {
    lt: '', //彩种code 如cqssc
    old_lt: '',
    m_name: '', //彩种名称 如 重庆时时彩
    cnName: '', //玩法名称 如 五星直选复式
    issue: '', //期号
    cls: '', //彩种类别 ssc
    dft: 1,//默认点击tab 1为第一个
    type: 'lottery',
    odds: {}, //赔率
    method: '',//玩法 如nn_nn_nn
    m_method: '',//拆单时玩法 如nn_nn_nn_n1
    CWCZ: '', //常玩彩种
    noanimation: false, //开奖号码掉下来动画
    tipchs: '请输入投注号码，按空格或回车键确认选号',//单式输入框默认内容
    isStop: false, //是否暂停销售
    countDownSec: 2,//弹框倒计时
    printStatus: localStorage.getItem('printStatus') === 'true',
    singSaveLevel: 1,
    isContinue: true, //秒秒彩停止控制器
    lengthMatchDict: {
      'sm_sm_zxds': 3,
      'sm_sm_zuxds': 3,
      'em_em_zxds': 2,
      'em_em_zuxds': 2,
      'rxds_rxds_1z1': 1,
      'rxds_rxds_2z2': 2,
      'rxds_rxds_3z3': 3,
      'rxds_rxds_4z4': 4,
      'rxds_rxds_5z5': 5,
      'rxds_rxds_6z5': 6,
      'rxds_rxds_7z5': 7,
      'rxds_rxds_8z5': 8,
      'cq5_cq5_ds': 5,
      'cq4_cq4_ds': 4,
      'cq3_cq3_ds': 3,
      'cq2_cq2_ds': 2
    },
    filterReg: /['\r\n','\n','\r','\t','\v','\D','\f','\s+','　','；','，',';',',']/g, //回车，换行，制表符，垂直制表符，换页符，空格，中文，特殊符合(·~!@#$%^&*()_+-=[]{}\|;:'"<>,./?)
    filterRegSelect: /['\r\n','\n','\r','\t','\v','\D','\f','　','；','，',';',',']/g, //11选5
    filterRegLine: /['\r\n','\n','\r','\v',',','，',';','；',':','：','|']/g, //11选5每组号码换行符正则合集[回车 逗号, 分号; 冒号: 竖线|]
    filterRegBreak: /['　',' ',\u4E00-\u9FA5]/g, //11选5每个号码分隔符正则合集[中文空格，英文空格，中文]
    startDate: 0, // 防止倒计时同时发起请求
    winListMarqueeShow: true,//控制底部中奖喜报滚动条是否显示
    oddsSelectedIndex: 0,//赔率select框默认选第一个
    ifClientEnv: function () { //判断是web端还是pc客户端,公司客户端嵌套网页，用这个做投注类型判断
      return window.navigator.userAgent.indexOf('mcbrowser') != -1 || window.navigator.userAgent.indexOf('SobetClient') != -1;
    },
    ltTabSwitchEl: 'lotteryList',//左边切换彩种的时候不加载vender_lazy.js
    lazyLoadScripts: function () {//延迟加载可以延迟的插件，加快页面进入速度
      if(this.ltTabSwitchEl === 'lotteryList') {//全部游戏里面进入游戏加载
        if($('#vendor-lazy').length === 0) {
          $(document.head).append(`<script src="/static/lottery/scripts/vendor_lazy.js" id="vendor-lazy"></script>`);
        }
      }
    },
    init: function () {
      var me = this;

      $('.js-lottery').attr('data-lt', "lt-" + me.cls);
      $('.js-info,.js-orders').attr('cls', me.cls).attr('lt', me.lt.toLowerCase());
      $('#lotteryClass dd').removeClass('on');
      $('#lotteryClass dd[data-lt=' + me.lt + ']').addClass('on');
      me.m_name = LotteryClass.names[me.lt];

      me.initNav();
      me.initHistory();
      me.toggleRecencyList();
      me.initMmcFlipball();
      me.initLhcClass();
      me.initTab(LotteryClass[me.lt], me.dft);
      me.initPk10();
      me.initDicegame();
      me.resetOrders();
      me.updateIssueInfo();
      me.winResultsListMarquee();
      me.initTrendLink();
      me.initRandonHandle();
    },
    initNav () {
      const me = this;
      let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
      let leftFixedLeft = $('.js-main-wrap').offset().left - 26 - $('#lotteryClass').width();
      leftFixedLeft = leftFixedLeft < 0 ? 0 : leftFixedLeft;
      if (clientWidth >= 1350) {
        $('#lotteryClass').css({
          left: leftFixedLeft
        });
        $('.bar-show').css({
          left: -100,
          'transition-delay': '.2s'
        });
      } else {
        $('#lotteryClass').css({
          left: -200
        });
        $('.bar-show').css({
          left: 0,
          'transition-delay': '.2s'
        });
      }

      $('.bar-show').off('click').on('click', () => {
        $('#lotteryClass').css({
          left: leftFixedLeft,
          'transition-delay': '.2s'
        });
        $('.bar-show').css({
          left: -100,
          'transition-delay': '0'
        })
      });

      $('#lotteryClass').off('click').on('click', '.menu-close', () => {
        $('#lotteryClass').css({
          left: -200,
          'transition-delay': '0'
        });
        $('.bar-show').css({
          left: 0,
          'transition-delay': '0.2s'
        })
      })
    },
    initHistory () {
      const me = this;
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      $('.js-trend-list').css('height', `${clientHeight - 260}px`);

      window.addEventListener('scroll', function () {
        let clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop >= 110) {
          $('.history').css({
            'position': `fixed`,
            'top': '36px'
          });
        } else {
          $('.history').css({
            'position': `static`
          });
        }

        if(scrollTop >= 50) {
          $('.info-mini-wrap').css({
            'position': `fixed`,
            'top': '36px'
          });
          $('.info-mini-wrap').slideDown();
        } else {
          $('.info-mini-wrap').slideUp();
        }
      })
    },
    initMmcFlipball() {
      const me = this;
      var newIssue = "<div class='js-newIssue newIssue'><a href='#' class='mmctzjl'></a><a href='#' class='mmczst'></a></div>";
      $(newIssue).insertAfter($('.js-info').find('.flipball-wrap'));
      if (me.lt === "WBGMMC") {
        $('.js-submit').html('马上开奖');
        // 初始化滚动数字
        me.flipball = $("#flipball").flipball({
          ballsize: 5, // 彩球个数
          initball: '0,0,0,0,0', // 初始化彩球数据
          loop: 3, // 彩球滚动循环次数（必须为整数）
          timeout: 1500, // 彩球滚动动画执行时间基数
          delay: 80, // 每个彩球动画执行延迟时间基数
          offset: [70, 50] // 球的宽高
        });
      } else {
        $('.js-submit').html('立即投注');
        $('.js-newIssue').hide();
      }
    },
    initLhcClass() {
      const me = this;
      if (me.cls === 'lhc') {
        $('body').addClass('lhc');
      } else {
        $('body').removeClass('lhc');
      }
    },
    initTips (cls, method) {
      let me = this; //
      var obj = LotteryTips[cls][method];
      if (me.lt === 'HNKY481') { //快赢481提示语
        obj = LotteryTips['ky481'][method];
      }
      $('.hint_name').html(Q.getMethodName(method, me.lt));
      $('.direction .paraphrase').text(obj.paraphrase);
    },
    initTrendLink: function () {
      const me = this;
      //走势图
      if (me.lt === 'JSLHC') {
        $('.js-trend-link').attr('href', '/static/xglhc/chart.html?' + me.lt);
        return;
      }
      if (me.lt === 'HNKY481') {
        //走势图
        $('.js-trend-link').attr('href', `/static/trend/trend.html#ky481-${me.lt}`);
        return;
      }
      $('.js-trend-link').attr('href', `/static/trend/trend.html#${me.cls}-${me.lt}`);
    },
    initPk10() {
      const me = this;

      //pk10动画场景显示隐藏
      if (me.cls === 'pk10') {
        if (me.lt === 'BJPK10' || me.lt === 'MCPK10') {
          $('.xgpk10_ani').hide();
          $('#lottery .toggleXGPkAni').hide();
          $('.aside .history').addClass('pk10-history');
          if (me.lt === 'MCPK10') {
            $('.pk10_ani').addClass('mcpk10_ani');
          } else {
            $('.pk10_ani').removeClass('mcpk10_ani');
          }
          if (!$('.pk10_ani').hasClass('showed')) {
            $('.pk10_ani').show().addClass('showed');
          }
          if ($('#lottery .togglePkAni').hasClass('open')) {
            $('.pk10_ani').show().addClass('showed');
          }
          $('#lottery .togglePkAni').show();
        } else if (me.lt === 'XGPK10') { //香港pk10單獨處理
          $('.pk10_ani').hide();
          $('#lottery .togglePkAni').hide();

          if (!$('.xgpk10_ani').hasClass('showed')) {
            $('.xgpk10_ani').show().addClass('showed');
          }
          if ($('#lottery .toggleXGPkAni').hasClass('open')) {
            $('.xgpk10_ani').show().addClass('showed');
          }

          $('#lottery .toggleXGPkAni').show();
        }
      } else {
        $('.aside .history').removeClass('pk10-history');
        $('.pk10_ani').hide();
        $('.xgpk10_ani').hide();
        $('#lottery .togglePkAni').hide();
        $('#lottery .toggleXGPkAni').hide();
      }

      if (me.lt === "BJPK10" || me.lt === "MCPK10") {
        PKAni.init();
      } else if (me.lt === "XGPK10") {
        $('#horseRaceFrame').attr('src', User.local_url + '/lottery/horseRace.html');
        XGPKAni.init();
      }
    },
    initDicegame() {
      const me = this;
      if (me.lt === "MCK3") {
        $('.js-diceGameFlag').show(); //骰宝
      } else {
        $('.js-diceGameFlag').hide();
      }
    },
    toggleRecencyList() {
      var hidden = $('.js-recency-switch');
      hidden.off('click').click(function (evt) {
        hidden.toggleClass('open');
        if ($(this).hasClass('open')) {
          $(this).html('打开列表');
        } else {
          $(this).html('隐藏列表');
        }
        $('.js-recency-list').slideToggle();
        setTimeout(Lottery.winListPos, 369);
      });
    },
    randomShoeHide() { // 机选显示隐藏
      const me = this;
      if (me.cls === '11y' && (/_zxfs$|_zuxfs$|^rxfs_rxfs/.test(me.method))) {
        $('.select-random').show();
      } else {
        $('.select-random').hide();
      }
    },
    initRandonHandle() {
      const me = this;
      const getCount = {
        'sm_sm_zxfs': 3,
        'sm_sm_zuxfs': 3,
        'em_em_zxfs': 2,
        'em_em_zuxfs': 2,
        'rxfs_rxfs_1z1': 1,
        'rxfs_rxfs_2z2': 2,
        'rxfs_rxfs_3z3': 3,
        'rxfs_rxfs_4z4': 4,
        'rxfs_rxfs_5z5': 5,
        'rxfs_rxfs_6z5': 6,
        'rxfs_rxfs_7z5': 7,
        'rxfs_rxfs_8z5': 8
      };
      $('.select-random').off('click').on('click', '.random-item', function () {
        if (me.cls === '11y' && (/_zxfs$|_zuxfs$|^rxfs_rxfs/.test(me.method))) {
          let num = $(this).attr('data-num');
          let random = me.getRandomOrder(1, 11, getCount[me.method], num);
          me.renderRandomOrder(random);
        }
      })
    },
    getRandomOrder(min, max, count, len) {
      const me = this;
      let num = [];
      while (num.length < len) {
        let arr = [];

        while (arr.length < count) {
          let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
          if (arr.indexOf(randomNum) < 0) {
            arr.push(randomNum)
          }
        }

        num.push(arr.toString());
      }
      return num;
    },
    renderRandomOrder(num) {
      const me = this;
      let list = $('.js-orders .list ul:eq(0)');
      let numArr = num.map(function (item) {
        let code;
        if (me.cls === '11y' ) {
          let items = item.split(',');
          if (!(/_zxfs$/.test(me.method))) {
            items.sort(function (x, y){
              return x-y;
            })
          }
          code = items.map(function (m) {
            return m < 10 ? '0' + m : m
          });

          if (/_zxfs$/.test(me.method)) {
            code = code.join('|');
          } else {
            code = code.join(',');
          }
        }

        let name = Q.getMethodName(me.method, me.lt);
        let desc = me.descFormat(code, me.method);
        let total = 1; // 注数
        let times = $('.js-count .spinner').val(); // 倍数
        let mode = $('.js-count .mode input:checked').val(); // 模式
        let odd = $('.count .odds select option:selected').val(); //赔率
        let point = parseFloat($('.count .odds select option:checked').data('point'), 10);
        let money = Q.floatMul(times, mode);

        let win = me.getMoneyWin(0, odd, 1, times, mode, code, me.method).win;

        let count = [total, times, mode, odd, point, money, '', 1];

        let modeHtml = '<div class="mode"><select><option value="2">2元</option><option value="1">1元</option><option value="0.2">2角</option><option value="0.1">1角</option><option value="0.02">2分</option><option value="0.002">2厘</option></select></div>';

        return '<li data-type="' + me.method + '" data-code="' + code + '" data-desc="' + name + ' ' + desc + '" data-count="' + count.join("|") + '">' +
              '<div class="codes" title="' + name + ' ' + Q.getPositionName('',me.lt) + desc + '">' + name + ' ' + Q.getPositionName('', me.lt) + '<em>' + desc + '</em></div>' +
              '<div class="share"> <input type="text" class="spinner newInput biggerw" min="1" max="99999" step="1" value="' + times + '" /> </div>' +
              modeHtml +
              '<div class="money">' + money + '</div>' +
              '<div class="win">' + win + '</div>' +
              '<a href="javascript:;" class="delete" title="删除"></a> </li>';
      }).join('');
      $(list).html(numArr);

      $(list).find('li').each(function () {
        var data = $(this).attr('data-count').split('|');
        $(this).find('.mode select').val(data[2]);
      });

      if (Trace.chkRateTrace()) {
        Trace.toggleRateTab(true);
      } else {
        Trace.toggleRateTab(false);
      }
      me.countReset();

      $(list).find('li input[type="text"].spinner.newInput').inputNumber().removeClass('newInput');
      me.setSubmitData();
    },
    initTab: function (obj, dft) {
      var me = this;
      var tab = $('.js-tab')[0];
      var tpl = [];
      var ltTab = obj.ltTab;
      var ltData = JSON.parse(localStorage.getItem('ltData') || '{}');
      var method = '';

      // 遍历生成彩种菜单dom
      for (var t in ltTab) {
        if (t !== 'rx') {
          if (me.cls === 'ssc' && t === 'em') { //ssc的二星分为前二后二
            tpl.push('<span class="js-tab-item fl" data-type="' + t + '">' + '前二' + '</span>');
            tpl.push('<span class="js-tab-item fl" data-type="' + t + '">' + '后二' + '</span>');
          } else {
            tpl.push('<span class="js-tab-item fl" data-type="' + t + '">' + ltTab[t] + '</span>');
          }
        } else {
          tpl.push('<button class="fr" data-type="' + t + '"><i class="normal-rx-icon"></i>更多</button>');
        }
      }

      $(tab).html(tpl);
      // 初始化渲染隐藏任选玩法
      $(tab).find('.js-tab-item[data-type=rx2], .js-tab-item[data-type=rx3], .js-tab-item[data-type=rx4]').hide();

      // 绑定玩法点击事件 更新对应子菜单、号码盘
      $(tab).off('click').on('click', '.js-tab-item, button', function (evt, history) {
        evt.preventDefault();

        if ($(tab).hasClass('lock')) {
          return false;
        };
        var $this = $(this);

        if (evt.target.nodeName === 'SPAN') {

          $this.addClass('on').siblings().removeClass('on');
          var type = $this.attr('data-type');

          // 对应渲染玩法子菜单
          me.renderSubTab(obj.ltMethod[type], history);
          $(tab).attr({
            "data-type": type,
            "data-desc": ltTab[type]
          });

        } else {
          if ($(this).attr('data-type') === 'rx') {
            $(tab).find('button').attr('data-type', 'normal');
            $(tab).find('.js-tab-item').hide();
            $(tab).find('.js-tab-item[data-type=rx2], .js-tab-item[data-type=rx3], .js-tab-item[data-type=rx4]').show();
            method = (/rx2|rx3|rx4/i).test(method) ? method : 'rx2';
            $('.js-tab-item[data-type=' + method + ']').trigger('click');
          } else {
            $(tab).find('button').attr('data-type', 'rx');
            $(tab).find('.js-tab-item').show();
            $(tab).find('.js-tab-item[data-type=rx2], .js-tab-item[data-type=rx3], .js-tab-item[data-type=rx4]').hide();
            $('.js-tab-item[data-type=hsm]').trigger('click');
          }
        }
      });

      // 检查是否记录了玩法，否则使用默认玩法
      if (ltData[me.lt] !== undefined) {
        method = ltData[me.lt] || '';
        method = method.split('_')[0];
        if (method === 'rx2' || method === 'rx3' || method === 'rx4') {
          $(tab).find('button[data-type=rx]').trigger('click');
        } else {
          $(tab).find('.js-tab-item[data-type=' + method + ']').trigger('click');
        }
      } else {
        dft = parseInt(dft, 10) - 1;
        $('.js-tab-item').eq(dft).trigger('click');
      }

      me.renderHistoryTab();
    },
    renderSubTab: function (obj, history) {
      var me = this;
      var $tab = $('.js-tab');
      var tabType = $tab.find('span.on').attr("data-type");
      var tabText = $tab.find('span.on').text();
      var $sTab = $('.js-subtab');
      var tpl = '';
      var ltData = JSON.parse(localStorage.getItem('ltData') || '{}');
      var method = '';       

      // 遍历生成彩种玩法子菜单dom
      for (var z in obj) {
        if (tabText === '前二') {
          tpl += '<dl><dt>前二' + obj[z].title + '</dt>';
        } else if (tabText === '后二') {
          tpl += '<dl><dt>后二' + obj[z].title + '</dt>';
        } else {
          tpl += '<dl><dt>' + obj[z].title + '</dt>';
        }
        var method = obj[z].method;
        for (var m in method) {
          var subType = z + '_' + m;
          if (tabText === '前二') { //时时彩前二后二分开显示
            if (['hfs', 'hds', 'hhz', 'hbd', 'hkd'].indexOf(m) === -1) {
              tpl += '<dd data-type="' + subType + '"><i></i>' + method[m].desc + '</dd>';
            } else {
              continue;
            }
          } else if (tabText === '后二') {
            if (['hfs', 'hds', 'hhz', 'hbd', 'hkd'].indexOf(m) !== -1) {
              tpl += '<dd data-type="' + subType + '"><i></i>' + method[m].desc + '</dd>';
            } else {
              continue;
            }
          } else {
            tpl += '<dd data-type="' + subType + '"><i></i>' + method[m].desc + '</dd>';
          }
        }
        tpl += '</dl>';
      }

      $sTab.html(tpl);

      // 玩法Tab切换 更新玩法列表
      $sTab.off("click").on('click', 'dd', function (evt) {
        evt.preventDefault();
        let $this = $(this);

        if ($sTab.hasClass('lock')) {
          return false;
        };
        $sTab.find('dd').removeClass('on');
        $(this).addClass('on');

        var t = $(this).data("type").split('_');
        $sTab.attr({
          "data-type": $(this).data('type'),
          "data-desc": obj[t[0]].method[t[1]].desc
        });

        me.rGamesShowHide();

        me.method = tabType + '_' + t.join('_');
        $('.js-number').html('');
        $('.js-lottery, .js-number').attr('method', me.method).attr('method-1', tabType).attr('method-2', t[0]).attr('method-3', t[1]);
        if (!sessionStorage.getItem(`${me.lt}_hit_${me.method}`) && (me.lt == 'SHSSL' || me.cls == 'ssc') && me.lt != 'TCP5' && me.lt != 'WBGMMC' && !(/^dxds|^qw_lhh|^qw_xt|^sh_sh|^zh_hzdxds|^bjl_bjl|_hz$|_hhz$|_qhz$|_hh$|_ds$|_qds$|_hds$/.test(me.method))) {
          new Promise(function (resolve, reject) {
            Lottery.getIssueInfoLast(resolve);
          }).then(function () {
            me.renderNum(obj[t[0]].method[t[1]].num, me.method);
            // 如果是任选玩法 对应渲染万、千、百、十、个选项
            if ((/rx2|rx3|rx4/i).test(tabType) && $this.data('type') !== 'zx_fs') {
              me.renderPos();
            }
            me.lazyLoadScripts();
            me.updateOdds();
            // 重置确认选号区数据
            me.countReset();
          });
        } else {
          me.renderNum(obj[t[0]].method[t[1]].num, me.method);
          // 如果是任选玩法 对应渲染万、千、百、十、个选项
          if ((/rx2|rx3|rx4/i).test(tabType) && $(this).data('type') !== 'zx_fs') {
            me.renderPos();
          }
          me.lazyLoadScripts();
          Lottery.getIssueInfoLast();
        }
        me.updateOdds();

        // 重置确认选号区数据
        me.countReset();
        // 切换玩法您选择了?注，共?倍，共计?元归零
        $('.js-bet-count,.js-bet-times,.js-bet-money').text(0);
        // 记录当前玩法
        ltData[me.lt] = me.method;
        localStorage.setItem('ltData', JSON.stringify(ltData));

        me.initTips(me.cls, me.method);
        me.timeRecord_11ydm = {}; //切换tab时候11选5胆拖的点击记录时间清空
        me.timeRecord_11ytm = {};
      });

      // 检查是否记录了玩法，否则默认子菜单第一个被点击 并更新号码盘
      method = ltData[me.lt];
      if (history !== undefined) {
        $sTab.find(`dl dd[data-type=${history}]`).trigger('click');
        return;
      }
      if (method !== undefined && method.split('_')[0] === tabType) {
        method = method.split('_')[1] + '_' + method.split('_')[2];
        if (tabText === '前二' && !/qfs$|qds$|qhz$|qbd$|qkd$/.test(method)) { //时时彩2星分成前二后二
          $sTab.find('dl dd[data-type="zx_qfs"]').eq(0).trigger('click');
        } else if (tabText === '后二' && !/hfs$|hds$|hhz$|hbd$|hkd$/.test(method)) {
          $sTab.find('dl dd[data-type="zx_hfs"]').eq(0).trigger('click');
        } else {
          $sTab.find('dl dd[data-type=' + method + ']').eq(0).trigger('click');
        }
      } else {
        if (tabText === '前二' && !/qfs$|qds$|qhz$|qbd$|qkd$/.test(method)) {
          $sTab.find('dl dd[data-type="zx_qfs"]').eq(0).trigger('click');
        } else if (tabText === '后二' && !/hfs$|hds$|hhz$|hbd$|hkd$/.test(method)) {
          $sTab.find('dl dd[data-type="zx_hfs"]').eq(0).trigger('click');
        } else {
          $sTab.find('dl dd').eq(0).trigger('click');
        }
      }
    },
    renderHistoryTab: function () {
      var me = this;
      var mHistory = JSON.parse(localStorage.getItem('mHistory') || '{}');
      var history = '';
      var method = mHistory[me.lt] || {};
      var tpl = '';
      $('.js-save-tab dd').remove();
      if (Object.keys(method).length !== 0) {
        for (var m in method) {
          m = m.split('_');
          var n = m[1] + '_' + m[2];
          var name = m[0] + '_' + m[1] + '_' + m[2];
          if (Q.getMethodName(name, me.lt) !== '-') {
            tpl += `<dd data-type="${m[0]}" data-sub-type="${n}">${Q.getMethodName(name, me.lt)}</dd>`;
          }
        }
        $('.js-save-tab dl').append(tpl);
        $('.js-save-tab').show();
      } else {
        $('.js-save-tab').hide();
      }

      $('.js-save-tab').off('click').on('click', 'dd', function () {
        var type = $(this).data('type');
        var subType =  $(this).data('sub-type');
        var btnType = $('.js-tab button').data('type');

        if (type == 'rx2' || type == 'rx3' || type == 'rx4') {
          $('.js-tab button').attr('data-type', 'normal');
          $('.js-tab-item').hide();
          $('.js-tab-item[data-type=rx2], .js-tab-item[data-type=rx3], .js-tab-item[data-type=rx4]').show();
        } else {
          $('.js-tab button').attr('data-type', 'rx');
          $('.js-tab-item').show();
          $('.js-tab-item[data-type=rx2], .js-tab-item[data-type=rx3], .js-tab-item[data-type=rx4]').hide();
        }

        $(`.js-tab-item[data-type=${type}]`).trigger('click', subType);
        
      })

    },
    saveMethod(obj) { // 保存历史玩法
      var me = this;
      obj = JSON.parse(obj);
      var order = JSON.parse(obj.order);
      var mHistory = JSON.parse(localStorage.getItem('mHistory') || '{}');
      var oldMethod = mHistory[me.lt] || {};
      var newMethod = {};
      var index = 1;
      var newObj = {};
      order.map(function (item) {
        var m = item.method.split('_');
        var method = m[0] + '_' + m[1] + '_' + m[2];
        newMethod[method] = 1;
      })

      var obj = Object.assign({}, newMethod, oldMethod);
      for (var i in obj) {
        if (index <= 5) {
          newObj[i] = obj[i];
        } else {
          break
        }
        index++;
      }
      mHistory[me.lt] = newObj;
      localStorage.setItem('mHistory', JSON.stringify(mHistory));
    }, 
    rGamesShowHide: function() {
      var rGames = $('.resuleShow .t1:first .rGames');
      var rGames_issue = $('.resuleShow>.t1:first>.issue');
      var rGames_r = $('.resuleShow>.t1:first>.r');
      var tabType = $('#lottery>.tab span.on').attr("data-type");
      var subDataType = $('#lottery>.subtab').attr('data-type');
      var subDataDesc = $('#lottery>.subtab').attr('data-desc');
      var data_lt = $('#lottery').attr('data-lt');
      //右侧开奖结果第三列显示控制
      if (data_lt === 'lt-ssc') {
        switch (tabType) {
          case 'wx':
            rGames_issue.css('width', '33.33%');
            rGames_r.css('width', '33.33%');
            rGames.css('width', '33.33%');
            rGames.text('五星组态');
            break;
          case 'sx':
            rGames_issue.css('width', '33.33%');
            rGames_r.css('width', '33.33%');
            rGames.css('width', '33.33%');
            rGames.text('四星组态');
            break;
          case 'qsm':
            rGames_issue.css('width', '33.33%');
            rGames_r.css('width', '33.33%');
            rGames.css('width', '33.33%');
            switch (subDataType) {
              case 'zx_fs':
              case 'zx_ds':
              case 'zux_z3':
              case 'zux_z6':
              case 'zux_hh':
              case 'zux_bd':
                rGames.text('前三组态');
                break;
              case 'zx_hz':
                rGames.text('直选和值');
                break;
              case 'zx_kd':
                rGames.text('直选跨度');
                break;
              case 'zux_hz':
                rGames.text('组选和值');
                break;
              default:
                break;
            }
            break;
          case 'zsm':
            rGames_issue.css('width', '33.33%');
            rGames_r.css('width', '33.33%');
            rGames.css('width', '33.33%');
            switch (subDataType) {
              case 'zx_fs':
              case 'zx_ds':
              case 'zux_z3':
              case 'zux_z6':
              case 'zux_hh':
              case 'zux_bd':
                rGames.text('中三组态');
                break;
              case 'zx_hz':
                rGames.text('直选和值');
                break;
              case 'zx_kd':
                rGames.text('直选跨度');
                break;
              case 'zux_hz':
                rGames.text('组选和值');
                break;
              default:
                break;
            }
            break;
          case 'hsm':
            rGames_issue.css('width', '33.33%');
            rGames_r.css('width', '33.33%');
            rGames.css('width', '33.33%');
            switch (subDataType) {
              case 'zx_fs':
              case 'zx_ds':
              case 'zux_z3':
              case 'zux_z6':
              case 'zux_hh':
              case 'zux_bd':
                rGames.text('后三组态');
                break;
              case 'zx_hz':
                rGames.text('直选和值');
                break;
              case 'zx_kd':
                rGames.text('直选跨度');
                break;
              case 'zux_hz':
                rGames.text('组选和值');
                break;
              default:
                break;
            }
            break;
          case 'em':
            if (subDataType.split('_')[0] === 'zx') {
              if (subDataType === 'zx_qkd' || subDataType === 'zx_hkd') {
                rGames.text('直选跨度');
              } else {
                rGames.text('直选和值');
              }
              rGames_issue.css('width', '33.33%');
              rGames_r.css('width', '33.33%');
              rGames.css('width', '33.33%');
            } else {
              rGames_issue.css('width', '33.33%');
              rGames_r.css('width', '33.33%');
              rGames.css('width', '33.33%');
              rGames.text('组选和值');
            }
            break;
          case 'dwd':
            rGames_issue.css('width', '50%');
            rGames_r.css('width', '50%');
            rGames.css('width', '0');
            rGames.text('');
            break;
          case 'bdd':
            rGames_issue.css('width', '50%');
            rGames_r.css('width', '50%');
            rGames.css('width', '0');
            rGames.text('');
            break;
          case 'dxds':
            switch (subDataType) {
              case 'dxds_h2':
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '33.33%');
                rGames.text('十位 个位');
                break;
              case 'dxds_q2':
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '33.33%');
                rGames.text('万位 千位');
                break;
              case 'dxds_h3':
                rGames_issue.css('width', '20.33%');
                rGames_r.css('width', '30.33%');
                rGames.css('width', '47.33%');
                rGames.html('百位&nbsp;&nbsp;&nbsp;&nbsp;十位&nbsp;&nbsp;&nbsp;&nbsp;个位');
                break;
              case 'dxds_q3':
                rGames_issue.css('width', '20.33%');
                rGames_r.css('width', '30.33%');
                rGames.css('width', '47.33%');
                rGames.html('万位&nbsp;&nbsp;&nbsp;&nbsp;千位&nbsp;&nbsp;&nbsp;&nbsp;百位');
                break;
              case 'hzdxds_5xhz':
              case 'hzdxds_q3hz':
              case 'hzdxds_z3hz':
              case 'hzdxds_h3hz':
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '31.33%');
                rGames.text('和值 大小 单双');
                break;
              case 'dxgs_wx':
              case 'dxgs_sx':
              case 'dxgs_qs':
              case 'dxgs_zs':
              case 'dxgs_hs':
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '33.33%');
                rGames.text('大  小');
                break;
              case 'dsgs_wx':
              case 'dsgs_sx':
              case 'dsgs_qs':
              case 'dsgs_zs':
              case 'dsgs_hs':
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '33.33%');
                rGames.text('单  双');
                break;
              default:
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '33.33%');
                rGames.text('十位 个位');
                break;
            }
            break;
          case 'qw':
            if (subDataType.split('_')[0] === 'lhh') {
              if (['CQSSC', 'TXFFC'].indexOf(Lottery.lt) !== -1) {
                rGames_issue.css('width', '50%');
                rGames_r.css('width', '50%');
                rGames.css('width', '0');
                rGames.text('');
              } else {
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '33.33%');
                rGames.text(subDataDesc);
              }
            } else if (subDataType.split('_')[0] === 'xt') {
              rGames_issue.css('width', '33.33%');
              rGames_r.css('width', '33.33%');
              rGames.css('width', '33.33%');
              rGames.text(subDataDesc);
            } else if (subDataType.split('_')[0] === 'ts') {
              rGames_issue.css('width', '33.33%');
              rGames_r.css('width', '33.33%');
              rGames.css('width', '33.33%');
              rGames.text('五星组态');
            }
            break;
          case 'nn':
            rGames_issue.css('width', '20.33%');
            rGames_r.css('width', '30.33%');
            rGames.css('width', '46.33%');
            rGames.html('牛牛&nbsp;&nbsp;&nbsp;&nbsp;大小&nbsp;&nbsp;&nbsp;&nbsp;单双');
            break;
          case 'zh':
            rGames_issue.css('width', '33.33%');
            rGames_r.css('width', '33.33%');
            rGames.css('width', '31.33%');
            rGames.text('和值 大小 单双');
            break;
          case 'sh':
            rGames_issue.css('width', '33.33%');
            rGames_r.css('width', '33.33%');
            rGames.css('width', '33.33%');
            rGames.text(subDataDesc);
            break;
          case 'bjl':
            rGames_issue.css('width', '33.33%');
            rGames_r.css('width', '33.33%');
            rGames.css('width', '33.33%');
            rGames.text('开奖结果');
            break;
          case 'rx2':
          case 'rx3':
          case 'rx4':
            rGames_issue.css('width', '50%');
            rGames_r.css('width', '50%');
            rGames.css('width', '0');
            rGames.text('');
            break;
          default:
            break;
        }
      } else if (data_lt === 'lt-11y' || data_lt === 'lt-kl12') {
        rGames_issue.css('width', '50%');
        rGames_r.css('width', '50%');
        rGames.css('width', '');
        rGames.text('');
      } else if (data_lt === 'lt-k3') {
        rGames_issue.css('width', '33.33%');
        rGames_r.css('width', '33.33%');
        rGames.css('width', '33.33%');
        switch (tabType) {
          case 'dxds':
          case 'hz':
            rGames.text('和值');
            break;
          default:
            rGames.text('形态');
            break;
        }
      } else if (data_lt === 'lt-pk10') {
        switch (tabType) {
          case 'cq1':
          case 'cq2':
          case 'cq3':
          case 'cq4':
          case 'cq5':
          case 'dwd':
            rGames_issue.css('width', '50%');
            rGames_r.css('width', '50%');
            rGames.css('width', '0');
            rGames.text('');
            break;
          case 'dx':
          case 'ds':
          case 'hz':
          case 'lh':
            rGames_issue.css('width', '33.33%');
            rGames_r.css('width', '40.33%');
            rGames.css('width', '33.33%');
            rGames.text(subDataDesc);
            break;
          default:
            break;
        }
      } else if (data_lt === 'lt-3d') {
        switch (tabType) {
          case 'sm':
            switch (subDataType) {
              case 'zx_fs':
              case 'zx_ds':
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '33.33%');
                rGames.text('三星组态');
                break;
              case 'zx_hz':
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '33.33%');
                rGames.text('直选和值');
                break;
              case 'zux_hz':
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '33.33%');
                rGames.text('组选和值');
                break;
              case 'zux_z3':
              case 'zux_z6':
              case 'zux_hh':
                rGames_issue.css('width', '33.33%');
                rGames_r.css('width', '33.33%');
                rGames.css('width', '33.33%');
                rGames.text('三星组态');
                break;
              default:
                break;
            }
            break;
          case 'em':
          case 'dwd':
          case 'bdd':
            rGames_issue.css('width', '50%');
            rGames_r.css('width', '50%');
            rGames.css('width', '0');
            rGames.text('');
            break;
          case 'qw':
            rGames_issue.css('width', '33.33%');
            rGames_r.css('width', '33.33%');
            rGames.css('width', '33.33%');
            rGames.text(subDataDesc);
          default:
            break;
        }
      } else if (data_lt === 'lt-lhc') {

      }
    },
    renderPos: function () {
      var me = this;
      var $number = $('.js-number');
      var tpl = ['<div class="pos">',
        '<span>选择位置</span>',
        '<label data-pos="1" class="on">万</label>',
        '<label data-pos="2" class="on">千</label>',
        '<label data-pos="3" class="on">百</label>',
        '<label data-pos="4" class="on">十</label>',
        '<label data-pos="5" class="on">个</label>',
        '<span class="pos-tip">注意：此处默认选择所有位置，请您自行调整。</span>',
        '</div>'
      ];
      if (me.lt === 'HNKY481') {
        tpl = ['<div class="pos">',
          '<span>选择位置</span>',
          '<label data-pos="1" class="ky481-pos on">自由泳</label>',
          '<label data-pos="2" class="ky481-pos on">仰泳</label>',
          '<label data-pos="3" class="ky481-pos on">蛙泳</label>',
          '<label data-pos="4" class="ky481-pos on">蝶泳</label>',
          '<span class="pos-tip">注意：此处默认选择所有位置，请您自行调整。</span>',
          '</div>'
        ];
      }
      $number.find('.pos').remove();
      $number.prepend(tpl.join(''));
    },
    getDantiaoData: function () { //判断是否含有单挑方法，不含任选玩法
      let me = this;

      let dantiaoFlag = false;
      let singleMaxBonus = null;
      let dantiaoOrders = []; //哪几个注单是单挑

      let method = me.method;
      let m_methods = []; //记录所有玩法
      let count = {}; //记录每种玩法的注数
      let $onNums = $('#lottery .number i.on'); //选中号码的dom

      if (/_ds$|_hh$/.test(method)) { //单式和混合是手动输入，没有 $('#lottery .number i.on')，所以上面遍历不到
        m_methods.push(method);
        count[method] = parseInt($('.count .total em').eq(0).text());
      } else {
        $onNums.each(function (index, item) {
          if (me.cls === 'ssc') {
            if (/^dxds_dsgs_/.test(method)) {
              let num;
              if (method.indexOf('dsgs_wx') !== -1) {
                num = Q.PKDXDS.WX[$(this).index()];
                m_methods.push(`${method}_${num}`);
              } else if (method.indexOf('dsgs_sx') !== -1) {
                num = Q.PKDXDS.SX[$(this).index()];
                m_methods.push(`${method}_${num}`);
              } else if (method.indexOf('dsgs_qs') !== -1 || method.indexOf('dsgs_zs') !== -1 || method.indexOf('dsgs_hs') !== -1) {
                num = Q.PKDXDS.SM[$(this).index()];
                m_methods.push(`${method}_${num}`);
              }
              count[`${method}_${num}`] = 1;
            } else if (/^dxds_dxgs_/.test(method)) { //dxds_dxgs_wx
              let num;
              if (method.indexOf('dxgs_wx') !== -1) {
                num = Q.PKDXDS.WX[$(this).index()];
                m_methods.push(`${method}_${num}`);
              } else if (method.indexOf('dxgs_sx') !== -1) {
                num = Q.PKDXDS.SX[$(this).index()];
                m_methods.push(`${method}_${num}`);
              } else if (method.indexOf('dxgs_qs') !== -1 || method.indexOf('dxgs_zs') !== -1 || method.indexOf('dxgs_hs') !== -1) {
                num = Q.PKDXDS.SM[$(this).index()];
                m_methods.push(`${method}_${num}`);
              }
              count[`${method}_${num}`] = 1;
            } else if (/^zh_hzdxds_5xhz$/.test(method)) {
              let num = Q.SSC5XHZ[$(this).index()];
              if (num) {
                m_methods.push(`${method}_${num}`);
                count[`${method}_${num}`] = 1;
              } else {
                m_methods.push(method);
                count[method] = 1;
              }
            } else if (/^nn_nn_nn/.test(method)) {
              let index = $(this).index();
              let num = Q.SSCNN[index];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else if (/^bjl_bjl_bjl/.test(method)) {
              let num = Q.SSCBJL[$(this).index()];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else if (/^qw_lhh_/.test(method)) {
              let num = Q.SSCLHH[$(this).index()];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else if (/^qw_xt_/.test(method)) {
              let num;
              num = Q.SSCXT[$(this).index()];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else if (/^sh_sh_/.test(method)) {
              let num;
              num = Q.SSCWXXT[$(this).index()];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else {
              m_methods.push(method);
              count[method] = parseInt($('.count .total em').eq(0).text());
            }
          } else if (me.cls === '11y' || me.cls === 'kl12') {
            if (me.method === 'qw_qw_dds' || me.method === 'qw_qw_czw') {//拆单每个单1注
              let num = Q.y11Num[me.method][$(this).index()];
              count[`${method}_${num}`] = 1;
            } else {
              m_methods.push(method);
              count[method] = parseInt($('.count .total em').eq(0).text());
            }
          } else if (me.cls === 'pk10') {
            if (/^ds_ds_q2|^dx_dx_q2/.test(method)) {
              let num = Q.PkQ2Hz[method][$(this).index()];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else if (/^hz_hz_q2/.test(method)) {
              let index = $(this).index();
              index = index <= 8 ? index : 22 - Number($(this).text()) - 3;
              let num = Q.PkNum[method][index];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else if (/^hz_hz_q3/.test(method)) {
              let index = $(this).index();
              index = index <= 10 ? index : 33 - Number($(this).text()) - 6;
              let num = Q.PkNum[method][index];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else if (/^lh_lh/.test(method)) {
              let num = Q.PKLHH[$(this).index()];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else {
              m_methods.push(method);
              count[method] = parseInt($('.count .total em').eq(0).text());
            }
          } else if (me.cls === 'k3') {
            if (/^hz_hz_hz/.test(method)) {
              let index = $(this).index();
              index = index <= 7 ? index : 21 - Number($(this).text()) - 3;
              let num = Q.K3Num[method][index];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else {
              m_methods.push(method);
              count[method] = parseInt($('.count .total em').eq(0).text());
            }
          } else if (me.cls === '3d') {
            if (/^qw_lhh_/.test(method)) {
              let num = Q.SDLHH[$(this).index()];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else if (/^qw_xt_/.test(method)) {
              let num = Q.SDXT[$(this).index()];
              m_methods.push(`${method}_${num}`);
              count[`${method}_${num}`] = 1;
            } else {
              m_methods.push(method);
              count[method] = parseInt($('.count .total em').eq(0).text());
            }
          }
        });
      }
      dantiaoFlag = m_methods.some(function (m_method, idx) {
        if (me.odds[me.lt][m_method]['s'] === 1 && count[m_method] < me.odds[me.lt][m_method]['n']) {
          singleMaxBonus = me.odds[me.lt][m_method]['m'];
          return true;
        }
      });
      if (method === 'dxds_hzdxds_5xhz') { //五星和值另外计算
        $onNums.each((index, num) => {
          if ($(num).hasClass('twoText')) { //组合情况
            const _text = $(num).text();
            const reflectObj = {
              '大单': 'dd',
              '大双': 'ds',
              '小单': 'xd',
              '小双': 'xs'
            };
            if (me.odds[me.lt][`${method}_${reflectObj[_text]}`]['s'] === 1 && count[`${method}_${reflectObj[_text]}`] < me.odds[me.lt][`${method}_${reflectObj[_text]}`]['n']) {
              dantiaoOrders.push(Q.SSC5XHZ_CN[$(num).index()]);
            }
          } else {
            if (me.odds[me.lt][method]['s'] === 1 && count[method] < me.odds[me.lt][method]['n']) {
              dantiaoOrders.push(Q.SSC5XHZ_CN[$(num).index()]);
            }
          }
        });
      } else {
        dantiaoOrders = m_methods.filter(m_method => {
          return me.odds[me.lt][m_method]['s'] === 1 && count[m_method] < me.odds[me.lt][m_method]['n'];
        }).map(m_method => {
          let arr_method = m_method.split('_');
          if (m_method.indexOf('hz') !== -1) {
            if (arr_method.length > 4) { //hz_hz_hz_3_18的情况
              return `${arr_method[3]}(${arr_method[4]})`;
            }
            return arr_method[3];
          } else {
            if (arr_method.length > 4) { //"dxds_dxgs_wx_qd_qx"的情况
              let cn = Q.chaidanCn[arr_method[3] + '_' + arr_method[4]];
              if (/dxgs/.test(m_method)) {
                cn = cn.replace(/单/g, '大').replace(/双/g, '小');
              }
              return cn;
            }
            return Q.chaidanCn[arr_method[3]];
          }
        });
      }


      return {
        dantiaoFlag,
        singleMaxBonus,
        dantiaoOrders,
      };
    },
    resetPlate() {
      $('.js-count-num').html(0);
      $('.js-total-money').html(0);
      $('.js-filter-num').each((index, item) => {
          $(item).hasClass('on') && $(item).removeClass('on');
      });
      $('.plate-item-input,.filter-num-input,.js-clickType-per-input').val('');
      $('.plate-item').each((index, item) => {
          $(item).hasClass('on') && $(item).removeClass('on');
      });
      $('.js-click-num-item').each((index, item) => {
          $(item).hasClass('on') && $(item).removeClass('on');
      });
      !$('.js-quickSubmit').hasClass('disabled')&&$('.js-quickSubmit').addClass('disabled');
      !$('.js-confirm').hasClass('disabled')&&$('.js-confirm').addClass('disabled');
    },
    renderNum: function (obj, m) {
      var me = this;
      var _el = '.js-lottery';
      var el = $('.js-number')[0]; // 获得div.number
      var count = $('.js-count')[0];
      var countLHC = $('.js-count-lhc')[0];
      var box = $('.box');
      var orders = $('.js-orders')[0];
      var t = obj.split('|');
      const userName = localStorage.getItem('userName');
      me.randomShoeHide();
      $(el).attr('method', m);
      if(me.cls === 'lhc') {
        $('.count-lhc').attr('method', m);
        reset();
        renderPlate(m, $('.number'));
        //渲染选号盘函数
        function renderPlate(method, jqElement) {
          let html;
          switch (method) {
              case 'tm_tm_zx':
              case 'zt1m_zt1m_zt1m':                
                  let zxArr = Array(49).fill(0).map((value, index) => {
                      return {
                          'cn': `0${index+1}`.slice(-2),
                          'en': `0${index+1}`.slice(-2)
                      };
                  });
                  zxArr = [
                      zxArr.slice(0,10),
                      zxArr.slice(10,20),
                      zxArr.slice(20,30),
                      zxArr.slice(30,40),
                      zxArr.slice(40,49)                      
                  ];
                  html = getInputPlateHtml(method, zxArr);
                  jqElement.html(html);
                  getBnsx().then(bmnsx => {
                    sessionStorage.setItem('bmnsx', bmnsx);
                    const filterSxArr = calcSxArr(bmnsx);
                    const filterSxHtml = filterSxArr.map(item => {
                        return `
                            <div class="js-filter-num filter-num-zodiac-${item['en']} fl" filter="${item['code'].toString()}">${item['cn']}</div>
                        `;
                    }).join('');
                    const zxFilterHtml = `
                        <div class="filter-num-wrap-${method} fr">
                            <div class="filter-num-title-${method}">快速筛号</div>
                            <div class="filter-num-red clearfix">
                                <div class="js-filter-num filter-num-red-da fl" filter="29,30,34,35,40,45,46">红大</div>
                                <div class="js-filter-num filter-num-red-xiao fl" filter="01,02,07,08,12,13,18,19,23,24">红小</div>
                                <div class="js-filter-num filter-num-red-dan fl" filter="01,07,13,19,23,29,35,45">红单</div>
                                <div class="js-filter-num filter-num-red-shuang fl" filter="02,08,12,18,24,30,34,40,46">红双</div>
                            </div>
                            <div class="filter-num-blue clearfix">
                                <div class="js-filter-num filter-num-blue-da fl" filter="25,26,31,36,37,41,42,47,48">蓝大</div>
                                <div class="js-filter-num filter-num-blue-xiao fl" filter="03,04,09,10,14,15,20">蓝小</div>
                                <div class="js-filter-num filter-num-blue-dan fl" filter="03,09,15,25,31,37,41,47">蓝单</div>
                                <div class="js-filter-num filter-num-blue-shuang fl" filter="04,10,14,20,26,36,42,48">蓝双</div>    
                            </div>
                            <div class="filter-num-green clearfix">
                                <div class="js-filter-num filter-num-green-da fl" filter="27,28,32,33,38,39,43,44,49">绿大</div>
                                <div class="js-filter-num filter-num-green-xiao fl" filter="05,06,11,16,17,21,22">绿小</div>
                                <div class="js-filter-num filter-num-green-dan fl" filter="05,11,17,21,27,33,39,43,49">绿单</div>
                                <div class="js-filter-num filter-num-green-shuang fl" filter="06,16,22,28,32,38,44">绿双</div>    
                            </div>
                            <div class="filter-num-zodiac clearfix">
                                ${filterSxHtml}   
                            </div>
                            <div class="filter-num-input-wrap">
                                <div class="filter-num-input-title">单注金额：</div>
                                <input class="filter-num-input" type="number" min="1" max="999999">   
                            </div>
                            <div class="filter-num-reset">
                                <i class="filter-num-reset-icon"></i>重置
                            </div>
                        </div>
                    `;
                    if ($('.subtab .on').data('type') === 'tm_zx' || $('.subtab .on').data('type') === 'zt1m_zt1m') {//防止切换的时候网络延迟别的玩法append这个进去
                        jqElement.append(zxFilterHtml);
                    }
                   registerEvent();
                   updateOdds();
                  });
                  break;
              case 'tm_tm_sx':
              case 'zt1x_zt1x_zt1x':
                  getBnsx().then(bmnsx => {
                      sessionStorage.setItem('bmnsx', bmnsx);
                      const sxArr = [calcSxArr(bmnsx).slice(0, 6), calcSxArr(bmnsx).slice(6, 12)];
                      const sxFilterHtml = `
                          <div class="filter-num-wrap fl clearfix" method="${method}">
                              <div class="fl js-filter-num filter-zodiac-tab filter-poultry-zodiac" filter="niu,ma,yang,ji,gou,zhu">家禽家畜</div>
                              <div class="fl js-filter-num filter-zodiac-tab filter-wild-zodiac" filter="shu,hu,tu,long,she,hou">野外兽类</div>
                              <div class="fl filter-num-input-title">单注金额：</div>
                              <input class="fl filter-num-input" type="number" min="1" max="999999">   
                          </div>
                      `;
                      html = getInputPlateHtml(method, sxArr, sxFilterHtml);
                      if ($('.subtab .on').data('type') === 'tm_sx' || $('.subtab .on').data('type') === 'zt1x_zt1x') {
                          jqElement.html(html);//防止渲染到别的tab下                            
                      }
                      updateOdds();                            
                      registerEvent();
                  });
                  break;
              case 'tm_tm_sb':
                  const sbArr = [
                      [{
                          'cn': '红',
                          'en': 'hong',
                          'type': '色波选号'
                      }],
                      [{
                          'cn': '蓝',
                          'en': 'lan',
                          'type': '色波选号'
                      }],
                      [{
                          'cn': '绿',
                          'en': 'lv',
                          'type': '色波选号'
                      }]
                  ];
                  const bsbArr = [
                      [{
                              'cn': '红大',
                              'en': 'hongda',
                              'code': ['29', '30', '34', '35', '40', '45', '46'],
                              'type': '半波选号'
                          },
                          {
                              'cn': '红小',
                              'en': 'hongxiao',
                              'code': ['01', '02', '07', '08', '12', '13', '18', '19', '23', '24']
                          },
                          {
                              'cn': '红单',
                              'en': 'hongdan',
                              'code': ['01', '07', '13', '19', '23', '29', '35', '45']
                          },
                          {
                              'cn': '红双',
                              'en': 'hongshuang',
                              'code': ['02', '08', '12', '18', '24', '30', '34', '40', '46']
                          },
                          {
                              'cn': '蓝大',
                              'en': 'landa',
                              'code': ['25', '26', '31', '36', '37', '41', '42', '47', '48']
                          },
                          {
                              'cn': '蓝小',
                              'en': 'lanxiao',
                              'code': ['03', '04', '09', '10', '14', '15', '20']
                          }
                      ],
                      [{
                              'cn': '蓝单',
                              'en': 'landan',
                              'code': ['03', '09', '15', '25', '31', '37', '41', '47']
                          },
                          {
                              'cn': '蓝双',
                              'en': 'lanshuang',
                              'code': ['04', '10', '14', '20', '26', '36', '42', '48']
                          },
                          {
                              'cn': '绿大',
                              'en': 'lvda',
                              'code': ['27', '28', '32', '33', '38', '39', '43', '44', '49']
                          },
                          {
                              'cn': '绿小',
                              'en': 'lvxiao',
                              'code': ['05', '06', '11', '16', '17', '21', '22']
                          },
                          {
                              'cn': '绿单',
                              'en': 'lvdan',
                              'code': ['05', '11', '17', '21', '27', '33', '39', '43', '49']
                          },
                          {
                              'cn': '绿双',
                              'en': 'lvshuang',
                              'code': ['06', '16', '22', '28', '32', '38', '44']
                          }
                      ]
                  ];
                  html = getInputPlateHtml(method, sbArr) + getInputPlateHtml(method, bsbArr);
                  jqElement.html(html);
                  updateOdds();                
                  registerEvent();
                  break;
              case 'tm_tm_dxds':
                  const dxdsArr = [
                      [{
                          'cn': '大',
                          'en': 'da',
                          'hint': '(25-49为大)'
                      }, {
                          'cn': '小',
                          'en': 'xiao',
                          'hint': '(01-24为小)'
                      }],
                      [{
                          'cn': '单',
                          'en': 'dan'
                      }, {
                          'cn': '双',
                          'en': 'shuang'
                      }]
                  ];
                  html = getInputPlateHtml(method, dxdsArr);
                  jqElement.html(html);
                  updateOdds();                
                  registerEvent();
                  break;
              case 'tm_tm_ws':
              case 'ztws_ztws_ztws':
                  const wsArr = [
                      [{
                              'cn': '0尾',
                              'en': '0w',
                              'code': ['10', '20', '30', '40']
                          },
                          {
                              'cn': '1尾',
                              'en': '1w',
                              'code': ['01', '11', '21', '31', '41']
                          },
                          {
                              'cn': '2尾',
                              'en': '2w',
                              'code': ['02', '12', '22', '32', '42']
                          },
                          {
                              'cn': '3尾',
                              'en': '3w',
                              'code': ['03', '13', '23', '33', '43']
                          },
                          {
                              'cn': '4尾',
                              'en': '4w',
                              'code': ['04', '14', '24', '34', '44']
                          }
                      ],
                      [{
                              'cn': '5尾',
                              'en': '5w',
                              'code': ['05', '15', '25', '35', '45']
                          },
                          {
                              'cn': '6尾',
                              'en': '6w',
                              'code': ['06', '16', '26', '36', '46']
                          },
                          {
                              'cn': '7尾',
                              'en': '7w',
                              'code': ['07', '17', '27', '37', '47']
                          },
                          {
                              'cn': '8尾',
                              'en': '8w',
                              'code': ['08', '18', '28', '38', '48']
                          },
                          {
                              'cn': '9尾',
                              'en': '9w',
                              'code': ['09', '19', '29', '39', '49']
                          }
                      ]
                  ];
                  html = getInputPlateHtml(method, wsArr);
                  jqElement.html(html);
                  updateOdds();                
                  registerEvent();
                  break;
              case 'lx_lx_2lx':
              case 'lx_lx_3lx':
              case 'lx_lx_4lx':
                  getBnsx().then(bmnsx => {
                      sessionStorage.setItem('bmnsx', bmnsx);
                      const lxArr = calcSxArr(bmnsx);
                      html = getNoInputPlateHtml(method, lxArr);
                      if (['lx_2lx', 'lx_3lx', 'lx_4lx'].indexOf($('.subtab .on').data('type')) !== -1) {
                          jqElement.html(html);//防止渲染到别的tab下                            
                      }
                      updateOdds();                            
                      registerEvent();
                  });
                  break;
              case 'lm_lm_2z2':
              case 'lm_lm_3z2':
              case 'lm_lm_3z3':
                  const lmArr = Array(49).fill(0).map((value, index) => {
                      return {
                          'cn': `0${index+1}`.slice(-2),
                          'en': `0${index+1}`.slice(-2)
                      };
                  });
                  html = getNoInputPlateHtml(method, lmArr);
                  jqElement.html(html);
                  getBnsx().then(bmnsx => {
                      sessionStorage.setItem('bmnsx', bmnsx);
                      const filterSxArr = calcSxArr(bmnsx);
                      const filterSxHtml = filterSxArr.map(item => {
                          return `
                              <div class="js-filter-num filter-num-zodiac-${item['en']} fl" filter="${item['code'].toString()}">${item['cn']}</div>
                          `;
                      }).join('');
                      const lmFilterHtml = `
                          <div class="filter-num-wrap-${method} fr">
                              <div class="filter-num-title-${method}">快速筛号</div>
                              <div class="filter-num-red clearfix">
                                  <div class="js-filter-num filter-num-red-da fl" filter="29,30,34,35,40,45,46">红大</div>
                                  <div class="js-filter-num filter-num-red-xiao fl" filter="01,02,07,08,12,13,18,19,23,24">红小</div>
                                  <div class="js-filter-num filter-num-red-dan fl" filter="01,07,13,19,23,29,35,45">红单</div>
                                  <div class="js-filter-num filter-num-red-shuang fl" filter="02,08,12,18,24,30,34,40,46">红双</div>
                              </div>
                              <div class="filter-num-blue clearfix">
                                  <div class="js-filter-num filter-num-blue-da fl" filter="25,26,31,36,37,41,42,47,48">蓝大</div>
                                  <div class="js-filter-num filter-num-blue-xiao fl" filter="03,04,09,10,14,15,20">蓝小</div>
                                  <div class="js-filter-num filter-num-blue-dan fl" filter="03,09,15,25,31,37,41,47">蓝单</div>
                                  <div class="js-filter-num filter-num-blue-shuang fl" filter="04,10,14,20,26,36,42,48">蓝双</div>    
                              </div>
                              <div class="filter-num-green clearfix">
                                  <div class="js-filter-num filter-num-green-da fl" filter="27,28,32,33,38,39,43,44,49">绿大</div>
                                  <div class="js-filter-num filter-num-green-xiao fl" filter="05,06,11,16,17,21,22">绿小</div>
                                  <div class="js-filter-num filter-num-green-dan fl" filter="05,11,17,21,27,33,39,43,49">绿单</div>
                                  <div class="js-filter-num filter-num-green-shuang fl" filter="06,16,22,28,32,38,44">绿双</div>    
                              </div>
                              <div class="filter-num-zodiac clearfix">
                                  ${filterSxHtml}   
                              </div>
                              <!-- <div class="filter-num-reset">
                                  <i class="filter-num-reset-icon"></i>重置
                              </div> -->
                          </div>
                      `;
                      if (['lm_2z2', 'lm_3z2', 'lm_3z3'].indexOf($('.subtab .on').data('type')) !== -1) {//防止切换的时候网络延迟别的玩法append这个进去
                          jqElement.append(lmFilterHtml);
                      }
                      registerEvent();
                      updateOdds(); 
                  });
                  break;
              case 'hzdxds_hzdxds_hzdxds':
                  const hzdxdsArr = [{
                          'cn': '大',
                          'en': 'da',
                      }, {
                          'cn': '小',
                          'en': 'xiao',
                      },
                      {
                          'cn': '单',
                          'en': 'dan'
                      }, {
                          'cn': '双',
                          'en': 'shuang'
                      }
                  ];
                  html = getNoInputPlateHtml(method, hzdxdsArr);
                  jqElement.html(html);
                  updateOdds();                
                  registerEvent();
                  break;
              default:
                  break;
          }  

        }
        //获取选号盘html
        function getInputPlateHtml(method, configArr, filterHtml = '') {
          me.plateType = 'input';
          $('.js-clickType-per').addClass('hide');
          const plateHtml = configArr.map((numArr, idx) => {
            const itemHtml = numArr.map((numObj, index) => {
              const numHtml = numObj.code ? numObj.code.map(num => {
                return `${num}`;
              }).join(',') : '';
              const numTpl = numHtml ? `<span class="${numObj['en']}">(${numHtml})</span>` : '';
              return `
                    <div class="js-plate-item plate-item clearfix">
                        <div class="fl js-plate-item-num plate-item-num plate-item-num-${numObj['en']}" cn="${numObj['cn']}">${numObj['cn']}</div>
                        <div ${/^tm_tm_zx|^zt1m_zt1m_zt1m/.test(method) && 'style="display: none"'} class="fl js-odds plate-item-odd plate-item-odd-${numObj['en']}" cn="${numObj['cn']}" num="${numObj['en']}"></div>
                        ${numObj['hint'] ? `<div class="fl plate-item-hint">${numObj['hint']}</div>` : ''}
                        ${numTpl}
                        <input class="fr js-plate-item-input plate-item-input plate-item-input-${numObj['en']}" type="number" min="1" max="999999">
                    </div>
                `;
            }).join('');
            return `
                <div class="plate-wrap-item fl" method="${method}">
                    <div class="plate-item-title clearfix">
                        <div class="plate-item-title-left fl">${method === 'tm_tm_sb' ? (numArr[0]['type'] === '色波选号' ? '色波选号' : '半波选号') : '选号'}</div>
                        <div class="plate-item-title-right fr">投注金额</div>
                    </div>
                    ${itemHtml}
                </div>  
            `;
          }).join('');
          return (plateHtml + filterHtml);
        }
        function getNoInputPlateHtml(method, configArr, filterHtml = '') { //点击类型的选号盘，没有输入框
          me.plateType = 'click';
          let plateHtml;
          $('.js-clickType-per').removeClass('hide');
          if (/^lm_lm/.test(method)) {
            configArr = [configArr.slice(0, 10), configArr.slice(10, 20), configArr.slice(20, 30), configArr.slice(30, 40), configArr.slice(40, 49)];
            plateHtml = configArr.map(numArr => {
              const itemHtml = numArr.map(numObj => {
                const {
                  en,
                  cn,
                } = numObj;
                return `
                          <div class="js-click-num-item click-num-item" method="${method}" en="${en}" cn="${cn}">
                              <span class="click-num-item-text plate-item-num-${en}">${cn}</span>
                          </div>
                      `;
              }).join('');
              return `
                      <div class="plate-wrap-item fl" method="${method}">
                          ${itemHtml}
                      </div>
                  `;
            }).join('');
            return (plateHtml + filterHtml);
          }
          plateHtml = configArr.map((item, index) => {
            const {
              en,
              cn,
              code
            } = item;

            const numHtml = code ? code.map(num => {
              return `<span class="plate-rel-num plate-item-num-${num}">${num}</span>`;
            }).join('') : '';
            return `
                  <div class="fl js-click-num-item click-num-item" method="${method}" m_method="${method}_${en}" en="${en}" cn="${cn}" ${code?`code="${code.join(',')}`:''}">
                      <span class="click-num-item-text plate-item-num-${en}">${cn}</span>
                      ${numHtml}
                  </div>
              `;
          }).join('');
          return (plateHtml + filterHtml);
        }
        //更新赔率
        function updateOdds() { //更新赔率
          let Odds;
          let oddsTab;
          let point;
          const method = $('.plate-wrap-item').attr('method');
          if (localStorage.getItem(`${userName}-oddsTab`)) {
            oddsTab = localStorage.getItem(`${userName}-oddsTab`);
            !$(`.js-oddsTab[switch="${oddsTab}"]`).hasClass('on') && $(`.js-oddsTab[switch="${oddsTab}"]`).addClass('on');
          } else {
            oddsTab = 'A';
            !$(`.js-oddsTab[switch="${oddsTab}"]`).hasClass('on') && $(`.js-oddsTab[switch="${oddsTab}"]`).addClass('on');
          }
          me.rateType = oddsTab;

          function renderOdds() {
            switch (me.plateType) {
              case 'input':
                if (method === 'tm_tm_sx' || method === 'zt1x_zt1x_zt1x') { //生肖的要算本命年生肖                      
                  getBnsx().then(bmnsx => {
                    $('.js-odds').each((index, item) => {
                      const num = $(item).attr('num');
                      const cn = $(item).attr('cn');
                      if (cn === bmnsx) {
                        point = Odds[`${method}_bnsx`][`rate${oddsTab}`];
                        $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}_bnsx`][`rate${oddsTab}`]}" m_method="${method}_bnsx" odd="${Odds[`${method}_bnsx`][`bonus${oddsTab}`]}">${Odds[`${method}_bnsx`][`bonus${oddsTab}`]}</em>`);
                      } else {
                        if (method === 'zt1x_zt1x_zt1x') {
                          point = Odds[`${method}`][`rate${oddsTab}`];
                          $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}`][`rate${oddsTab}`]}" m_method="${method}" odd="${Odds[`${method}`][`bonus${oddsTab}`]}">${Odds[`${method}`][`bonus${oddsTab}`]}</em>`);
                        }
                        if (method === 'tm_tm_sx') {
                          point = Odds[`${method}_fbnsx`][`rate${oddsTab}`];
                          $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}_fbnsx`][`rate${oddsTab}`]}" m_method="${method}_fbnsx" odd="${Odds[`${method}_fbnsx`][`bonus${oddsTab}`]}">${Odds[`${method}_fbnsx`][`bonus${oddsTab}`]}</em>`);
                        }
                      }
                    });
                    $('.js-oddsTip').html(`(A面：高奖金，低返点；B面：正常奖金，高返点)`);
                  });
                } else {
                  $('.js-odds').each((index, item) => {
                    const num = $(item).attr('num');
                    const cn = $(item).attr('cn');
                    switch (method) {
                      case 'tm_tm_zx':
                      case 'zt1m_zt1m_zt1m':
                        $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[method][`rate${oddsTab}`]}" m_method="${method}" odd="${Odds[method][`bonus${oddsTab}`]}">${Odds[method][`bonus${oddsTab}`]}</em>`);
                        point = Odds[method][`rate${oddsTab}`];
                        $('.js-oddsTip').html(`(A面：高奖金，投注返点${Odds[method]['rateA']*100}%；B面：正常奖金，投注返点${Odds[method]['rateB']*100}%)`);
                        break;
                      case 'tm_tm_sb':
                      case 'tm_tm_dxds':
                        $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}_${num}`][`rate${oddsTab}`]}" m_method="${method}_${num}" odd="${Odds[`${method}_${num}`][`bonus${oddsTab}`]}">${Odds[`${method}_${num}`][`bonus${oddsTab}`]}</em>`);
                        point = Odds[`${method}_${num}`][`rate${oddsTab}`];
                        $('.js-oddsTip').html(`(A面：高奖金，低返点；B面：正常奖金，高返点)`);
                        break;
                      case 'tm_tm_ws':
                      case 'ztws_ztws_ztws':
                        if (num === '0w') {
                          $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}_0w`][`rate${oddsTab}`]}" m_method="${method}_0w" odd="${Odds[`${method}_0w`][`bonus${oddsTab}`]}">${Odds[`${method}_0w`][`bonus${oddsTab}`]}</em>`);
                          point = Odds[`${method}_0w`][`rate${oddsTab}`];
                        } else {
                          $(item).html(`x&nbsp;<em class="js-odd-value" point="${Odds[`${method}_f0w`][`rate${oddsTab}`]}" m_method="${method}_f0w" odd="${Odds[`${method}_f0w`][`bonus${oddsTab}`]}">${Odds[`${method}_f0w`][`bonus${oddsTab}`]}</em>`);
                          point = Odds[`${method}_f0w`][`rate${oddsTab}`];
                        }
                        $('.js-oddsTip').html(`(A面：高奖金，低返点；B面：正常奖金，高返点)`);
                        break;
                      default:
                        break;
                    }
                  });
                }
                break;
              case 'click':
                switch (me.method) {
                  case 'lx_lx_2lx':
                  case 'lx_lx_3lx':
                  case 'lx_lx_4lx':
                    getBnsx().then(bmnsx => {
                      $('.js-oddsTip').html(`(${oddsTab}面：注单包含${bmnsx}，奖金赔率${Odds[me.method + '_bnsx'][`bonus${oddsTab}`]}~${(Odds[me.method + '_bnsx'][`rate${oddsTab}`]*100).toFixed(2)}%；注单不包含${bmnsx}，奖金赔率${Odds[me.method][`bonus${oddsTab}`]}~${(Odds[me.method][`rate${oddsTab}`]*100).toFixed(2)}%)`);
                      $(`.js-click-num-item[cn="${bmnsx}"]`).attr('bnsx', 'yes');
                    });
                    break;
                  case 'lm_lm_2z2':
                  case 'lm_lm_3z3':
                    $('.js-oddsTip').html(`(A面：奖金赔率${Odds[me.method]['bonusA']}~${(Odds[me.method]['rateA']*100).toFixed(2)}%；B面：奖金赔率${Odds[me.method]['bonusB']}~${(Odds[me.method]['rateB']*100).toFixed(2)}%)`);
                    break;
                  case 'lm_lm_3z2':
                    $('.js-oddsTip').html(`(${oddsTab}面：中2个号码奖金赔率${Odds[me.method + '_z2'][`bonus${oddsTab}`]}~${(Odds[me.method + '_z2'][`rate${oddsTab}`]*100).toFixed(2)}%；中3个号码奖金赔率${Odds[me.method][`bonus${oddsTab}`]}~${(Odds[me.method][`rate${oddsTab}`]*100).toFixed(2)}%)`);
                    break;
                  case 'hzdxds_hzdxds_hzdxds':
                    const genText = (arr, AOrB) => {
                      return arr.map((obj) => {
                        const {
                          cn,
                          m_method
                        } = obj;
                        return `${cn}${Odds[m_method][`bonus${AOrB}`]}~${(Odds[m_method][`rate${AOrB}`]*100).toFixed(2)}%`;
                      }).join('，');
                    }
                    const _config = [{
                        cn: '大',
                        m_method: 'hzdxds_hzdxds_hzdxds_da'
                      },
                      {
                        cn: '小',
                        m_method: 'hzdxds_hzdxds_hzdxds_xiao'
                      },
                      {
                        cn: '单',
                        m_method: 'hzdxds_hzdxds_hzdxds_dan'
                      },
                      {
                        cn: '双',
                        m_method: 'hzdxds_hzdxds_hzdxds_shuang'
                      },
                    ];
                    $('.js-oddsTip').html(`(${oddsTab}面：${genText(_config, `${oddsTab}`)})`);
                    break;
                  default:
                    $('.js-oddsTip').html(`(A面：高奖金，低返点；B面：正常奖金，高返点)`);
                    break;
                }
                break;
              default:
                break;
            }
          }

          if (sessionStorage.getItem('Odds')) {
            Odds = JSON.parse(sessionStorage.getItem('Odds'));
            me.odds = Odds;
            renderOdds();
            return;
          }
          ajaxOdds({
            lottery: 'JSLHC'
          }, res => {
            if (!res.result) {
              return;
            }
            Odds = res.result['JSLHC'];
            me.odds = Odds;
            sessionStorage.setItem('Odds', JSON.stringify(Odds));
            renderOdds();
          });
        }
        //切换A面B面赔率
        $('.js-oddsTab').off('click').on('click', function () {
          $(this).addClass('on').siblings('.js-oddsTab').removeClass('on');
          const oddsTab = $('.js-oddsTab.on').attr('switch');
          localStorage.setItem(`${userName}-oddsTab`, oddsTab);
          updateOdds();
        });
        //选号盘的一些点击事件
        function registerEvent() {
          // 输入金额至少1元。至多两个小数点
          $('.plate-item-input,.filter-num-input,.js-clickType-per-input').on('change input keyup', function (event) {
            const value = $(this).val();
            const valueToArr = value.split('.');
            if (valueToArr[0] < 1) {
              $(this).val('');
            } else if (valueToArr[0] > 999999) {
              $(this).val('999999');
            }
            if (valueToArr[1]) {
              valueToArr[1] = valueToArr[1].slice(0, 2);
              $(this).val(`${valueToArr[0]}.${valueToArr[1]}`);
            }

          });
          //计算注数和总金额
          $('.plate-item-input,.js-clickType-per-input').on('change input keyup', function (event) {
            renderTotalNumAndMoney();
          });
          $('.js-click-num-item').off('click').on('click', function (event) {
            $(this).toggleClass('on');
            renderTotalNumAndMoney();
          });
          //    智能滤号 
          $('.js-filter-num').off('click').on('click', function (event) {
            event.stopPropagation();
            event.preventDefault();
            const filterNumArr = $(this).attr('filter').split(',');
            const filterInputValue = $('.filter-num-input').val();
            if ($(this).hasClass('on')) {
              $(this).removeClass('on');
              if (me.plateType === 'input') {
                //取消选中对应输入框的input值清空
                debounce(() => {
                  filterNumArr.forEach(item => {
                    filterInputValue === $(`.plate-item-input-${item}`).val() && $(`.plate-item-input-${item}`).val('');
                  });
                })();
              }
            } else {
              $(this).addClass('on');
            }
            debounce(filterNum)();
          });
          $('.filter-num-input').on('change input keyup', function (event) {
            debounce(filterNum)();
          });

          //    重置
          $('.filter-num-reset').off('click').on('click', function (event) {
            $(this).find('.filter-num-reset-icon').addClass('rotate360');
            setTimeout(() => {
              $(this).find('.filter-num-reset-icon').removeClass('rotate360');
            }, 1000);
            me.reset();
          });
        }
        function reset() {
          $('.js-count-num').html(0);
          $('.js-total-money').html(0);
          $('.js-filter-num').each((index, item) => {
              $(item).hasClass('on') && $(item).removeClass('on');
          });
          $('.plate-item-input,.filter-num-input,.js-clickType-per-input').val('');
          $('.plate-item').each((index, item) => {
              $(item).hasClass('on') && $(item).removeClass('on');
          });
          $('.js-click-num-item').each((index, item) => {
              $(item).hasClass('on') && $(item).removeClass('on');
          });
          !$('.js-quickSubmit').hasClass('disabled')&&$('.js-quickSubmit').addClass('disabled');
          !$('.js-confirm').hasClass('disabled')&&$('.js-confirm').addClass('disabled');
        }
        //计算总注数
        function calcTotalNum(jqElement) {
          let count = 0;
          if (me.plateType === 'input') {
            jqElement.each((index, item) => {
              $(item).val() && count++;
            });
          }
          if (me.plateType === 'click') {
            jqElement.each((index, item) => {
              $(item).hasClass('on') && count++;
            });
            switch (me.method) {
              case 'lx_lx_2lx':
                count = Math.combination(count, 2);
                break;
              case 'lx_lx_3lx':
                count = Math.combination(count, 3);
                break;
              case 'lx_lx_4lx':
                count = Math.combination(count, 4);
                break;
              case 'lm_lm_2z2':
                count = Math.combination(count, 2);
                break;
              case 'lm_lm_3z2':
                count = Math.combination(count, 3);
                break;
              case 'lm_lm_3z3':
                count = Math.combination(count, 3);
              case 'hzdxds_hzdxds_hzdxds':
                count = count;
                break;
              default:
                break;
            }
          }
          return parseInt(count);
        }
        //计算总金额
        function calcTotalMoney(jqElement) {
          let money = 0;
          if (me.plateType === 'input') {
            jqElement.each((index, item) => {
              if ($(item).val()) {
                money += Number($(item).val());
              }
            });
            const moneyStr = String(money);
            //bug计算出1.9800000002的问题
            if (moneyStr.split('.')[1] && moneyStr.split('.')[1].length > 2) {
              money = money.toFixed(2);
            }
          }
          if (me.plateType === 'click') {
            const perMoney = Number($('.js-clickType-per-input').val());
            const count = calcTotalNum(jqElement);
            money = (perMoney * count).toFixed(2);
          }
          controlBetBtnDisable(money);
          return money;
        }

        function controlBetBtnDisable(money) {
          if (money > 0) { //有注单则解放按钮
            $('.js-confirm').removeClass('disabled');
            $('.js-quickSubmit').removeClass('disabled');
          } else {
            !$('.js-confirm').hasClass('disabled') && $('.js-confirm').addClass('disabled');
            !$('.js-quickSubmit').hasClass('disabled') && $('.js-quickSubmit').addClass('disabled');
          }
        }
        //显示总注数和金额
        function renderTotalNumAndMoney() {
          debounce(() => {
            if (me.plateType === 'input') {
              $('.js-count-num').html(calcTotalNum($('.plate-item-input')));
              $('.js-total-money').html(calcTotalMoney($('.plate-item-input')));
            }
            if (me.plateType === 'click') {
              $('.js-count-num').html(calcTotalNum($('.js-click-num-item')));
              $('.js-total-money').html(calcTotalMoney($('.js-click-num-item')));
            }
          })();
        }
        //滤号
        function filterNum() {
          let filterTotalNumArr = [];
          $('.js-filter-num').each((index, item) => {
            if ($(item).hasClass('on')) {
              const filterNumArr = $(item).attr('filter').split(',');
              filterTotalNumArr.push(...filterNumArr);
            }
          });
          filterTotalNumArr = [...new Set(filterTotalNumArr)]; //去重
          const filterInputValue = $('.filter-num-input').val();
          if (me.plateType === 'input') {
            $('.plate-item').removeClass('on');
            filterTotalNumArr.forEach(item => {
              //过滤的号码选框添加背景色
              !$(`.plate-item-input-${item}`).parent('.plate-item').hasClass('on') && $(`.plate-item-input-${item}`).parent('.plate-item').addClass('on');
              $(`.plate-item-input-${item}`).val(filterInputValue);
            });
          }
          if (me.plateType === 'click') {
            $('.js-click-num-item').removeClass('on');
            $('.js-click-num-item').each((index, item) => {
              const en = $(item).attr('en');
              if (filterTotalNumArr.indexOf(en) !== -1) {
                $(item).addClass('on');
              }
            });
          }
          renderTotalNumAndMoney();
        }
        function getBnsx() {
          /* if (me.bmnsx) {
            return Promise.resolve(me.bmnsx);
          } */
          return new Promise((resolve, reject) => {
            ajaxIssue({
              'lottery': 'JSLHC',
            }, res => {
              if (res.result) {
                const issue = res.result.issue;
                ajaxZobiac({
                  'lottery': 'JSLHC',
                  'issue': issue
                }, resp => {
                  const bmnsx = resp.result;
                  me.bmnsx = bmnsx;
                  resolve(bmnsx);
                });
              }
            });
          });
        }
        function ajaxOdds(data, cb) {
          $.ajax({
            url: '/lottery/api/anon/v1/lottery/odds_lhc',
            type: 'GET',
            cache: false,
            dataType: 'json',
            data
          }).done(res => cb(res)).fail(res => cb(res));
        }
        function ajaxIssue(data, cb) {
          $.ajax({
            url: '/lottery/api/m/v1/lottery/issue_info_app',
            type: 'GET',
            cache: false,
            dataType: 'json',
            data
          }).done(res => cb(res)).fail(res => cb(res));
        }
        function ajaxZobiac(data, cb) {
          $.ajax({
            url: '/lottery/api/u/v1/lottery/queryZobiac',
            type: 'GET',
            cache: false,
            dataType: 'json',
            data
          }).done(res => cb(res)).fail(res => cb(res));
        }
        //延时函数
        function debounce(fn, delay = 320) {
          let timer;
          return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
              fn(...arguments);
            }, delay);
          }
        }
        /*
         根据本命年生肖判断每个生肖对应的数字,获取生肖的号码盘数字
         规则：本命年生肖为1，累加12；逆生肖序号递增。比如本命年是马为1，则蛇为2.
         参数：bmnsx 本命年生肖 String如'牛'
         */
        function calcSxArr(bmnsx) {
          const sxArr = ['猪','狗','鸡','猴','羊','马','蛇','龙','兔','虎', '牛', '鼠'];
          const cnToEn = {
            '猪': 'zhu',
            '狗': 'gou',
            '鸡': 'ji',
            '猴': 'hou',
            '羊': 'yang',
            '马': 'ma',
            '蛇': 'she',
            '龙': 'long',
            '兔': 'tu',
            '虎': 'hu',
            '牛': 'niu',
            '鼠': 'shu'
          };
          //生肖原本的序号，号码盘展示还是按传统的次序展示
          const normalIndexArr = {
            '猪': '11',
            '狗': '10',
            '鸡': '9',
            '猴': '8',
            '羊': '7',
            '马': '6',
            '蛇': '5',
            '龙': '4',
            '兔': '3',
            '虎': '2',
            '牛': '1',
            '鼠': '0'
          };
          const bmnsxIndex = sxArr.indexOf(bmnsx);
          const newArr = [...sxArr.slice(bmnsxIndex,12),...sxArr.slice(0,bmnsxIndex)];//按本命年的生肖排序
          //生成渲染号码盘的数组
          let plateArr = newArr.map((value,index,arr)=>{
            return {
              'cn': value,
              'en': cnToEn[value],
              'normalIndex': normalIndexArr[value],
              'code': Array(index === 0 ? 5 : 4).fill(0).map((v, i) => {//本命年有5个数字。递增12
                return `0${index + 1 + i * 12}`.slice(-2);
              })
            };
          });
          plateArr = plateArr.sort((a, b) => {//按传统次序排回来
            return a.normalIndex - b.normalIndex;
          });
          return plateArr;
        }
        
      } else {
        if (obj.indexOf('input') === -1) {
          var tits = obj.split('|')[0].split(','); // 获得号码盘标题
          var nums = obj.split('|')[1]; // 获得号码类型
          var btns = obj.split('|')[2]; // 获得全、大、小、奇、偶、清按钮
          //百期热度和当前遗漏部分
          var _hitFrequency = JSON.parse(sessionStorage.getItem(`${me.lt}_hit_${me.method}`));
          var _skipFrequency = JSON.parse(sessionStorage.getItem(`${me.lt}_skip_${me.method}`));
          var hitFrequency = _hitFrequency || []; /*new Array(5).fill(0).map((Item, Index) => new Array(10).fill(0).map((item, index) => Math.floor(Math.random() * (index + 1) * 10)));*/ //默认随机假数据，以防第一次请求接口之前没缓存数据时候的空白
          var skipFrequency = _skipFrequency || []; /*new Array(5).fill(0).map((Item, Index) => new Array(10).fill(0).map((item, index) => Math.floor(Math.random() * (index + 1) * 10)));*/
          var hotTabShow = localStorage.getItem('hotTabShow') || 'off';
          var missTabShow = localStorage.getItem('missTabShow') || 'on';
          var hitFrequencyHtml;
          var skipFrequencyHtml;

          var tpl = '';

          for (var t = 0; t < tits.length; t++) {
            if (tits[t] !== '所有位置') {
              tpl += '<dl rel="selectNum"><dt>' + tits[t] + '</dt>';
            } else {
              tpl += '<dl rel="selectAllNum"><dt>' + tits[t] + '</dt>';
            }
            tpl += '<dd class="clearfix">' + me.renderCodes(t, nums, m) + '</dd>' + me.renderBtns(btns) + '</d>';
            tpl += '</dl>';
            if ((me.lt == 'SHSSL' || me.cls == 'ssc') && me.lt != 'TCP5' && me.lt != 'WBGMMC' && !(/^dxds|^qw_lhh|^qw_xt|^sh_sh|^zh_hzdxds|^bjl_bjl|^nn_nn|_hz$|_hhz$|_qhz$|_hh$|_qds$|_hds$|_ds$|^qw_bjl|kd$/.test(me.method)) && tits[t] !== '所有位置') { //时时彩（不做秒秒彩）加百期热度,大小单双，单式，混合，和值，趣味玩法的龙虎和与形态不计算
              if (/_z60$|_z30$|_z20$|_z12$|_z10$|_z5$|_z4$/.test(me.method)) { //组选60等玩法特殊处理
                if (t == 0) {
                  continue; //组选60等方法有两行数字但只显示一行热度或者遗漏号码，显示在最后一行下面，所以t=0（第一行）过滤掉
                }
                hitFrequencyHtml = hitFrequency[t - 1] && hitFrequency[t - 1].map(me.hotMissNumHandleColor()).join('');
                skipFrequencyHtml = skipFrequency[t - 1] && skipFrequency[t - 1].map(me.hotMissNumHandleColor()).join(''); //hitFrequency[t-1]||!_hitFrequency->当缓存没数据时（说明第一次调数据）,此时hitFrequency[t-1]为假走||之后逻辑，第一次调用所以标题显示；缓存有数据的情况标题显示
                tpl += `<div><dl rel="hotTab" style="display:${hotTabShow=='on'?'block':'none'}";"><dt class="hotMissTitle"><em>冷热</em></dt><dd class="hotMissNumWrap">${hitFrequencyHtml?hitFrequencyHtml:''}</dd></dl>
            <dl rel="missTab" style="display:${missTabShow=='on'?'block':'none'}";"><dt class="hotMissTitle"><em>遗漏</em></dt><dd class="hotMissNumWrap">${skipFrequencyHtml?skipFrequencyHtml:''}</dd></dl></div>`;
              } else {
                hitFrequencyHtml = hitFrequency[t] && hitFrequency[t].map(me.hotMissNumHandleColor()).join('');
                skipFrequencyHtml = skipFrequency[t] && skipFrequency[t].map(me.hotMissNumHandleColor()).join('');
                tpl += `<div><dl rel="hotTab" style="display:${hotTabShow=='on'?'block':'none'}";"><dt class="hotMissTitle"><em>冷热</em></dt><dd class="hotMissNumWrap">${hitFrequencyHtml?hitFrequencyHtml:''}</dd></dl>
            <dl rel="missTab" style="display:${missTabShow=='on'?'block':'none'}";"><dt class="hotMissTitle"><em>遗漏</em></dt><dd class="hotMissNumWrap">${skipFrequencyHtml?skipFrequencyHtml:''}</dd></dl></div>`;
              }
            }
          }

          $(el).html(tpl);
          //有百期的调整选号之间的间隙，百期热度和当前遗漏title对齐奖号title
          if (!/_z60$|_z30$|_z20$|_z12$|_z10$|_z5$|_z4$/.test(me.method)) { //组60等玩法百期号码不在中间间隙，不这样处理
            $('#lottery > div.number > div').siblings('dl[rel="selectNum"]').children('dt').css({
              //'margin-top': '9px',
            }).next('dd').css({
              //'height': '40px',
              //'line-height': '40px',
            }).children('i').css({
              //'margin': '1px 5px',
            });
          } else if (/_z60$|_z30$|_z20$|_z12$|_z10$|_z5$|_z4$/.test(me.method)) { //组60玩法只对百期上面的那一栏号码特殊处理
            $('#lottery > div.number > div > dl[rel="hotTab"]').parent('div').prev('dl[rel="selectNum"]').children('dt').css({
              //'margin-top': '9px',
            }).next('dd').css({
              //'height': '40px',
              //'line-height': '40px',
            }).children('i').css({
             // 'margin': '1px 5px',
            });
          }
          if (Q.getStrLength($('#lottery > div.number').find('dl>dt').eq(0).text()) > 6) {
            $('#lottery .number dt.hotMissTitle').css({
              //'text-indent': '3px', //奖号title是四个汉字时和选号title对齐
            });
          } else {
            $('#lottery .number dt.hotMissTitle').css({
              //'text-indent': '-1px', //其余玩法这个缩进才会对齐
            });
          }

          // 处理IE下双击选中文本问题
          if ((/msie|trident/i).test(navigator.userAgent)) {
            $(el).find('dl dd i').attr('unselectable', 'on');
          }
        } else {
          var tip = me.tipchs;
          // 判断是否混合
          if (t[1] === 'hh') {
            tip += "，注意：不包含豹子号 111、222 等";
          }

          if (Lottery.cls === '11y' || Lottery.cls === 'pk10' || Lottery.cls === 'kl12') {
            tip += "，注意：小于10则前面加0，如 010203 等";
          }
          $(el).html(me.renderBox(tip));
        }
      }

      //六合彩添加选号
      $('.js-confirm').off('click').on('click', function (event) {
        event.preventDefault();
        if ($(this).hasClass('disabled')) {
          return false;
        }
        if ($('.trace-box .trace-icon').hasClass('on')) {
          $('.trace-box .hand').trigger('click');
        }
        const $orderList = $(orders).find('ul:eq(0)');
        const orderHtml = me.getOrderLHC();
        $orderList.prepend(orderHtml);
        $('.item-li-input').on('change input keyup', function (event) {
          const value = $(this).val();
          const valueToArr = value.split('.');
          if (valueToArr[1]) {
            valueToArr[1] = valueToArr[1].slice(0, 2);
            $(this).val(`${valueToArr[0]}.${valueToArr[1]}`);
          }
          if (valueToArr[0] < 1) {
            $(this).val('');
          }
          if (value > 999999) {
            $(this).val('999999');
          }

        });
        $('.js-submit').removeClass('disabled');
        if (Trace.chkRateTrace()) {
          Trace.toggleRateTab(true);
        } else {
          Trace.toggleRateTab(false);
        }
        $orderList.find('li').removeClass('blink animated').eq(0).addClass('blink animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $(this).removeClass('blink animated');
        });
        $(this).addClass('disabled');
        me.resetPlate();
        me.setSubmitData();
      });

      //六合彩快速投注
      $('.js-quickSubmit').off('click').on('click', function (event) {
        event.preventDefault();
        me.submitType = '快速投注';
        const $btn = $(this);
        const btnTxt = $(this).text();
        if (dialog.get('lottery_submit')) {
          dialog.get('lottery_submit').close().remove();
        }
        const tip = dialog({
          id: 'lottery_submit',
          align: 'top',
          skin: 'tip'
        });
        if ($(this).hasClass('disabled')) {
          return false;
        }
        if ($(this).hasClass('loading')) {
          let tip = dialog({
            id: 'lottery_quickSubmit',
            align: 'top',
            skin: 'tip'
          });
          tip.content('请不要频繁点击！');
          tip.show($btn[0]);
          setTimeout(function () {
            tip.close().remove();
          }, 600);
          return false;
        }
        if (me.isStop) {
          tip.content('当前彩种暂停销售，请关注官方动态！');
          tip.show($btn[0]);
          setTimeout(() => {
            tip.close().remove();
          }, 2000);
          return false;
        }
        const orderObj = me.getLHCQuickOrderObj();
        const confirmDialogHtml = me.getLHCQuickConfirmDialogHtml();
        const confirmOpt = {
          width: 396,
          content: confirmDialogHtml,
          skin: 'confirm-again',
          fixed: true,
          cancel: false,
          button: [{
            id: 'lt_ok',
            value: '确&nbsp;&nbsp;定',
            callback: function (evt) {
              $btn.html('操作中').addClass('loading');
              orderObj["issue"] = me.issue;
              me.addOrderApi(orderObj, $btn, btnTxt, tip);
            }
          }, {
            id: 'lt_cancel',
            skin: 'cancel',
            value: '取&nbsp;&nbsp;消',
            callback: function (evt) {}
          }],
          onshow: function () {
            if (me.printStatus) {
              $('.printStatus input').attr("checked", "checked");
            } else {
              $('.printStatus input').removeAttr("checked");
            }
            if ($('.printStatus').find('input').is(':checked')) {
              $('.printStatus').click(function () {
                $(this).find('input').removeAttr("checked");
                localStorage.setItem('printStatus', false);
                me.printStatus = false;
              });
            } else {
              $('.printStatus').click(function () {
                $(this).find('input').attr("checked", "checked");
                localStorage.setItem('printStatus', true);
                me.printStatus = true;
              });
            }
          }
        };
        dialog(confirmOpt).showModal();
      });

      window.addEventListener('beforeunload', () => {
        sessionStorage.removeItem('Odds-jslhc');//刷新页面的去掉赔率缓存防止一直从缓存拿赔率
      });


      // 渲染完号码盘之后禁用确定选号按钮
      $(count).find('.confirm').addClass('disabled');

      $(count).on('click', '.mode label', function (evt) {
        evt.preventDefault();
        $(this).addClass('modeSelect').siblings().removeClass('modeSelect');
        $(this).prev().click().change();
        me.updateOdds();
      });

      $(count).off('change keyup').on('change keyup', 'input, select', function (evt) {
        evt.preventDefault();
        if ($(this).val() === '') {
          $(this).val($(this).attr('min'));
        }
        me.calcMoney(_el);
      });
      //快速投注
      $(count).find('a.quickSubmit').off('click').click(function (evt) {
        evt.preventDefault();
        var btn = $(this);
        if ($(this).hasClass('disabled')) {
          return false;
        }

        if ($(this).hasClass('loading')) {
          var tip = dialog({
            id: 'lottery_quickSubmit',
            align: 'top',
            skin: 'tip'
          });
          tip.content('请不要频繁点击！');
          tip.show(btn[0]);
          setTimeout(function () {
            tip.close().remove();
          }, 600);
          return false;
        }

        //处理用户单挑
        var n = $(count).find('.total em').eq(0).html();
        n = parseInt(n);
        var type = 0;
        /*
          s 单挑限制 0 不限制 1限制
          singleBetNums 单挑注数, 投注注数小于单挑注数才可单挑
          singleMaxBonus 单挑最高奖金
        */
        //处理任选玩法单挑
        if (me.cls === 'ssc' && me.method.indexOf('rx') !== -1) {
          me.renderTotal(n, type);
        } else if (me.getDantiaoData()['dantiaoFlag']) { //单挑
          let dantiaoOrders = me.getDantiaoData()['dantiaoOrders'];
          var dantiao = dialog({
            title: '温馨提示',
            width: 300,
            fixed: true,
            id: 'lottery_dan',
            skin: 'lottery_dan',
            content: `您的注单${dantiaoOrders.map(v => v ? `【${v}】` : '').join('')}为单挑，将有当期单挑最高奖金${me.getDantiaoData()['singleMaxBonus']}元的限制，您确定要继续吗？`,
            button: [{
              id: 'd_ok',
              value: '确&nbsp;&nbsp;定',
              callback: function (evt) {
                //快速投注
                $(orders).addClass('quickSubmit-orders');
                $(count).find('a.confirm').click();
                $(orders).find('.bottom a.submit').click();
              }
            }, {
              id: 'd_cancel',
              skin: 'cancel',
              value: '取&nbsp;&nbsp;消',
              callback: function (evt) {
                return;
              }
            }]
          }).showModal();
        } else {
          //正常投注
          $(orders).addClass('quickSubmit-orders');
          $(count).find('a.confirm').click();
          $(orders).find('.bottom a.submit').click();
        }
      });
      //正常投注
      $(count).find('a.confirm').off('click').click(function (evt) {
        evt.preventDefault();
        if (!$(orders).hasClass('quickSubmit-orders')) { //快速投注不清空
          me.timeRecord_11ydm = {}; //添加选号后11选5胆码拖码记录时间清空
          me.timeRecord_11ytm = {};
        }
        if ($(this).hasClass('disabled')) {
          return false;
        }
        if ($('.trace-box .trace-icon').hasClass('on')) {
          $('.trace-box .hand').trigger('click');
        }

        var list = $(orders).find('ul:eq(0)');

        //处理用户单挑
        let betNums = $(count).find('.total em').eq(0).html();
        betNums = parseInt(betNums);
        let singleBetNums = me.odds[me.lt][me.m_method]['n'];
        let singleMaxBonus = me.odds[me.lt][me.m_method]['m'];
        function normalAdd() {
          var order = me.getOrder();
          $(order).prependTo(list);

          list.find('li').each(function () {
            var data = $(this).attr('data-count').split('|');
            $(this).find('.mode select').val(data[2]);
          });

          if (Trace.chkRateTrace()) {
            Trace.toggleRateTab(true);
          } else {
            Trace.toggleRateTab(false);
          }
          me.countReset();

          list.find('li input[type="text"].spinner.newInput').inputNumber().removeClass('newInput');


          list.find('li').removeClass('blink animated').eq(0).addClass('blink animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('blink animated');
          });

          // 计算提交注单总注数、总金额，并准备提交注单需要的数据
          $('.box .textarea.editable').val(me.tipchs).select();
          me.setSubmitData();
          if ($('.quickSubmit-orders').length == 0) {
            $(count).find('em').html('0');
            $(count).find('em.times').html('0');
          }
        }

        //处理用户单挑
        if (!dialog.get('lottery_dan')) { //这个判断是只有第一次提示，后面再添加就不提示了
          var n = $(count).find('.total em').eq(0).html();
          n = parseInt(n);
          var type = 1;
          if (me.cls === 'ssc' && me.method.indexOf('rx') !== -1) {
            me.renderTotal(n, type);
          } else {
            if (me.getDantiaoData()['dantiaoFlag']) {
              let dantiaoOrders = me.getDantiaoData()['dantiaoOrders'];
              var dantiao = dialog({
                title: '温馨提示',
                width: 300,
                fixed: true,
                id: 'lottery_dan',
                skin: 'lottery_dan',
                content: `您的注单${dantiaoOrders.map(v => v ? `【${v}】` : '').join('')}为单挑，将有当期单挑最高奖金${me.getDantiaoData()['singleMaxBonus']}元的限制，您确定要继续吗？`,
                button: [{
                  id: 't_ok',
                  value: '确&nbsp;&nbsp;定',
                  callback: function (evt) {
                    normalAdd();
                  }
                }, {
                  id: 't_cancel',
                  skin: 'cancel',
                  value: '取&nbsp;&nbsp;消',
                  callback: function (evt) {
                    return;
                  }
                }],
                onshow: function () {
                  $(count).find('a.quickSubmit').removeClass('disabled');
                  $(count).find('a.confirm').removeClass('disabled');
                }
              }).showModal();
            } else {
              normalAdd();
            }
          }
        } else {
          normalAdd();
        }

      });



      $(orders).find('.list > ul').off('change keyup').on('change keyup', 'input.spinner', function (evt) {
        evt.preventDefault();

        if ($(this).val() === '') {
          $(this).val($(this).attr('min'));
        }

        var li = $(this).closest("li");
        var d = $(li).attr("data-count").split('|');
        var times = $(this).val();
        var moneywin;
        var method = $(li).attr("data-type");
        moneywin = Lottery.getMoneyWin(0, d[3], d[0], times, d[2], $(li).attr("data-code"), method);

        $(li).find('.money').html(moneywin.money);
        $(li).find('.win').html(moneywin.win);

        d[1] = times;
        d[5] = moneywin.money;
        d[7] = moneywin.wintime;

        $(li).attr("data-count", d.join('|'));

        // 计算提交注单总注数、总金额，并准备提交注单需要的数据
        me.setSubmitData();
      });


      //追号表单倍数修改
      $('#lottery div.orders').find('.list > ul').off('change keyup').on('change keyup', 'input, select', function (evt) {
        evt.preventDefault();
        if ($(this).val() === '') {
          $(this).val($(this).attr('min'));
        }

        var li = $(this).closest("li");
        //data-count  注数|倍数|元角分厘|奖金模式|返点|总金额|奖金倍数
        var d = $(li).attr("data-count").split('|');
        if (me.cls === 'lhc') {
          $(li).attr("data-money", $(this).val());
          d[2] = $(this).val();
          d[5] = $(this).val();
        } else {
          d[1] = li.find('.share input').val();
          //d[3] = li.find('.odds select').val();
          //d[4] = parseFloat(li.find('.odds select option:checked').attr('data-point'), 10);

          d[2] = li.find('.mode select').val();

          var moneywin;
          var method = $(li).attr("data-type");

          // 买卖:buytype 赔率:odds 注数:total 倍数:times 投注模式:mode 投注号码：1,2|3|4
          moneywin = Lottery.getMoneyWin(0, d[3], d[0], d[1], d[2], $(li).attr("data-code"), method);

          $(li).find('.money').html(moneywin.money);
          $(li).find('.win').html(moneywin.win);

          d[5] = moneywin.money;
          d[7] = moneywin.wintime;


        }

        $(li).attr("data-count", d.join('|'));
        // 计算提交注单总注数、总金额，并准备提交注单需要的数据
        me.setSubmitData();
      });


      $(orders).off('click').on('click', '.delete', function (e) {
        e.preventDefault();

        if ($(this).hasClass('delete-all')) {
          $(orders).find('.list li').remove();
        } else {
          $(this).parent('li').remove();
        }

        if (Trace.chkRateTrace()) {
          Trace.toggleRateTab(true);
        } else {
          Trace.toggleRateTab(false);
        }

        // 计算提交注单总注数、总金额，并准备提交注单需要的数据
        me.setSubmitData();
      });


      // 传统投注 提交注单
      $(orders).find('.bottom a.submit').off('click').click(function (evt) {
        if ($(this).hasClass('locked')) {
          return false;
        }

        evt.preventDefault();


        if ($(this).hasClass('disabled')) {
          return false;
        }
        if (dialog.get('lottery_submit')) {
          dialog.get('lottery_submit').close().remove();
        }
        if (dialog.get('lottery_submit_mmc')) {
          dialog.get('lottery_submit_mmc').close().remove();
        }
        var tip = dialog({
          id: 'lottery_submit',
          align: 'top',
          skin: 'tip'
        });

        var tip_mmc = dialog({
          id: 'lottery_submit_mmc',
          align: 'top',
          skin: 'tip'
        });

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

        if (me.isStop) {
          tip.content('当前彩种暂停销售，请关注官方动态！');
          tip.show(btn[0]);
          if ($('.quickSubmit-orders').length > 0) {
            me.resetOrders();
          }
          setTimeout(function () {
            tip.close().remove();
          }, 2000);
          return false;
        }


        if (me.cls === 'lhc') {
          const orderObj = me.getOrderObjLHC();
          const confirmDialogHtml = me.getLHCConfirmDialogHtml();

          const confirmOpt = {
            width: 396,
            content: confirmDialogHtml,
            skin: 'confirm-again',
            fixed: true,
            cancel: false,
            button: [{
              id: 'lt_ok',
              value: '确&nbsp;&nbsp;定',
              callback: function (evt) {
                btn.html('操作中').addClass('loading');
                orderObj["issue"] = me.issue;
                me.addOrderApi(orderObj, btn, txt, tip);
              }
            }, {
              id: 'lt_cancel',
              skin: 'cancel',
              value: '取&nbsp;&nbsp;消',
              callback: function (evt) {

              }
            }],
            onshow: function () {
              if (me.printStatus) {
                $('.printStatus input').attr("checked", "checked");
              } else {
                $('.printStatus input').removeAttr("checked");
              }
              if ($('.printStatus').find('input').is(':checked')) {
                $('.printStatus').click(function () {
                  $(this).find('input').removeAttr("checked");
                  localStorage.setItem('printStatus', false);
                  me.printStatus = false;
                });
              } else {
                $('.printStatus').click(function () {
                  $(this).find('input').attr("checked", "checked");
                  localStorage.setItem('printStatus', true);
                  me.printStatus = true;
                });
              }
            }
          };
          dialog(confirmOpt).showModal();
          return;
        }

        var list;
        if ($(orders).hasClass('quickSubmit-orders')) {
          list = $(this).closest('.quickSubmit-orders').find('.list ul li.quickSubmit-li');
        } else {
          list = $(this).closest('.orders').find('.list ul li');
        }
        var order = [];


        var confirmAgain;
        var html = '';
        var mode1 = '';
        var mode2 = '';
        var mode3 = '';
        var mode4 = '';
        var mode5 = '';
        var mode6 = '';

        var quickSubmit = $('.quickSubmit-orders').length;
        var quickBtn = $(count).find('a.quickSubmit');


        var quickTotal = 0;
        for (var i = 0, len = list.length; i < len; i++) {
          var li = $(list).eq(i);
          var type = li.attr("data-type");
          var code = li.attr("data-code");
          var desc = li.attr("data-desc");
          var d = li.attr("data-count").split('|');
          var tmp_order = null;
          var win = li.children('.win').html();
          quickTotal += parseFloat(d[5]);

          // 计算结果 将投注模式归为正常格式 200 20 2 变为 2 0.2 0.02
          switch (d[2]) {
            case '2':
              mode1 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em><span>盈利金额:<i>' + win + '</i></span></dd>';
              break;
            case '1':
              mode5 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em><span>盈利金额:' + win + '</span></dd>';
              break;
            case '0.2':
              mode2 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em><span>盈利金额:' + win + '</span></dd>';
              break;
            case '0.1':
              mode6 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em><span>盈利金额:' + win + '</span></dd>';
              break;
            case '0.02':
              mode3 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em><span>盈利金额:' + win + '</span></dd>';
              break;
            case '0.002':
              mode4 += '<dd><p>' + Q.nameCode(desc).name + '</p><em>' + Q.nameCode(desc).code + '</em><span>盈利金额:' + win + '</span></dd>';
              break;
            default:
              break;
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

        if (mode1 !== '') {
          mode1 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + '</em><em class="mode">模式：2元</em></dt>' + mode1 + '</dl>';
        }
        if (mode2 !== '') {
          mode2 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + '</em><em class="mode">模式：2角</em></dt>' + mode2 + '</dl>';
        }
        if (mode3 !== '') {
          mode3 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + '</em><em class="mode">模式：2分</em></dt>' + mode3 + '</dl>';
        }
        if (mode4 !== '') {
          mode4 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + '</em><em class="mode">模式：2厘</em></dt>' + mode4 + '</dl>';
        }
        if (mode5 !== '') {
          mode5 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + '</em><em class="mode">模式：1元</em></dt>' + mode5 + '</dl>';
        }
        if (mode6 !== '') {
          mode6 = '<dl><dt><em class="issue">期号' + (me.issue || '/') + '</em><em class="mode">模式：1角</em></dt>' + mode6 + '</dl>';
        }

        var htmlwelcome = '<h2>请确认投注' + me.m_name + '</h2>';
        if ($(orders).hasClass('quickSubmit-orders')) {
          var htmlmoney = '<h4>投注总金额：<em>' + quickTotal + '元';
        } else {
          var htmlmoney = '<h4>投注总金额：<em>' + $(orders).find('.amount').html();
        }

        var obj = {
          "lottery": me.lt,
          "issue": me.issue,
          "order": JSON.stringify(order)
        };

        var traceBtn = $(orders).find('.trace-data > a:eq(0)');
        if ($(orders).find('input[name="autoTrace"]:checked').size() > 0 && traceBtn.data('traceCount') > 0) {
          var winStop = $(orders).find('.trace-autoStop i').hasClass('on');
          var traceMode = $(orders).find('.trace-tab li.on').data('no');
          obj["istrace"] = $(orders).find('input[name="autoTrace"]:checked').size() > 0 ? true : false;
          obj["trace"] = JSON.stringify({
            'start': me.issue,
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

          htmlwelcome = '<h2>您确定要追号' + me.m_name + '&nbsp;&nbsp;&nbsp;<em class="issue-num">' + traceBtn.data('traceCount') + '</em>期吗？</h2><p class="trace-tip"><span>温馨提示:</span><span>追号单生成的投注单，在当期封单前5分钟内不允许撤单。</span></p>';
          htmlmoney = '<h4>总金额：￥<em>' + parseFloat(traceBtn.data('money')).toFixed(3);
        } else {
          if ($(orders).find('input[name="autoTrace"]:checked').size() > 0 && traceBtn.data('traceCount') == 0) {
            obj["istrace"] = false;
            var handTraceIcon = $('.trace-box .hand .trace-icon');
            if (!handTraceIcon.hasClass('on')) {
              htmlwelcome = '<h2>请确认投注' + me.m_name + '</h2>';
            } else {
              htmlwelcome = '<h3 class="highmsg">您未选择追号期数，确定加入' + me.issue + '期？</h3>';
            }
          }
        }

        html = htmlwelcome;
        html += '<div class="list">' + mode1 + mode2 + mode3 + mode4 + mode5 + mode6 + '</div>';
        html += htmlmoney;
        html += '<label class="printStatus"><input type="checkbox" value="print">打印注单</label>';
        //$(orders).hasClass('quickSubmit-orders')为true说明是快速投注
        obj['betType'] = obj["istrace"] ? 4 : $(orders).hasClass('quickSubmit-orders') ? 1 : 2; //1 快速投注，2常规投注，3再次投注，4追号投注，5挂机投注
        me.lotteryObj = obj;

        if (me.lt === 'WBGMMC') {
          me.isContinue = true;
          if (!$(orders).hasClass('quickSubmit-orders')) {
            btn.html('操作中').addClass('loading');
            obj["issue"] = me.issue;
            // 判断连投是不是大于1
            var mmcLoopTimes = parseInt($("#mmcLoop input[type=text]").val(), 10);
            var priceStop = $("#mmcLoop input[type=checkbox]").is(':checked');
            if (mmcLoopTimes > 1) {
              if (dialog.get('mmc_loop_box')) {
                dialog.get('mmc_loop_box').remove();
              }
              me.addOrderMMCLoopApi(obj, btn, txt, tip, mmcLoopTimes, priceStop);
            } else {
              me.addOrderApi(obj, btn, txt, tip_mmc);
            }
          } else {
            var mmcEl = '<div id="mmcLoopSet">连续开奖<select>' +
              '<option value="1">1</option>' +
              '<option value="5" selected>5</option>' +
              '<option value="10">10</option>' +
              '<option value="50">50</option>' +
              '<option value="100">100</option>' +
              '<option value="200">200</option>' +
              '<option value="500">500</option>' +
              '<option value="1000">1000</option>' +
              '</select>次' +
              '<label><input type="checkbox" id="succStop1"><label for="succStop1" class="succStop"></label>中奖即停</label></div>';
            var loopSet = dialog({
              title: '开奖设置',
              content: mmcEl,
              skin: 'loopSet',
              fixed: true,
              button: [{
                id: 'lt_ok',
                value: '确&nbsp;&nbsp;定',
                callback: function (evt) {
                  btn.html('操作中').addClass('loading');
                  obj["issue"] = me.issue;
                  var mmcLoopTimes = parseInt($("#mmcLoopSet input[type=text]").val(), 10);
                  var priceStop = $("#mmcLoopSet input[type=checkbox]").is(':checked');
                  if (mmcLoopTimes > 1) {
                    if (dialog.get('mmc_loop_box')) {
                      dialog.get('mmc_loop_box').remove();
                    }
                    me.addOrderMMCLoopApi(obj, btn, txt, tip, mmcLoopTimes, priceStop);
                  } else {
                    me.addOrderApi(obj, btn, txt, tip_mmc);
                  }
                }
              }],
              onshow: function () {
                $('#mmcLoopSet select').editableSelect({
                  filter: false,
                  effects: 'fade',
                  onCreate: function () {
                    var $this = $('#mmcLoopSet input[type=text]');
                    $this.on('keyup', function () {
                      $this.val($this.val().replace(/[^\d]/g, ''));
                      $this.val(parseInt($this.val(), 10) > 1000 ? 1000 : $this.val());
                    });
                  }
                })
              },
              onremove: function () {
                me.resetOrders();
              }
            }).showModal();
          }
        } else {
          var confirmOpt = {
            title: '温馨提示',
            width: 396,
            content: html,
            skin: 'confirm-again',
            fixed: true,
            cancel: false,
            button: [{
              id: 'lt_ok',
              value: '确&nbsp;&nbsp;定',
              callback: function (evt) {
                $('#lottery .number').find('i.on').each(function () {
                  $(arguments[1]).click();
                });
                btn.html('操作中').addClass('loading');
                obj["issue"] = me.issue;
                me.addOrderApi(obj, btn, txt, tip);
              }
            }, {
              id: 'lt_cancel',
              skin: 'cancel',
              value: '取&nbsp;&nbsp;消',
              callback: function (evt) {
                if ($('.quickSubmit-orders').length > 0) {
                  me.resetOrders();
                }
              }
            }],
            onshow: function () {
              if (me.printStatus != undefined && me.printStatus) {
                $('.printStatus input').attr("checked", "checked");
              } else {
                $('.printStatus input').removeAttr("checked");
              }
              if ($('.printStatus').find('input').is(':checked')) {
                $('.printStatus').click(function () {
                  $('this').find('input').removeAttr("checked");
                  localStorage.setItem('printStatus', false);
                  me.printStatus = false;
                });
              } else {
                $('.printStatus').click(function () {
                  $('this').find('input').attr("checked", "checked");
                  localStorage.setItem('printStatus', true);
                  me.printStatus = true;
                });
              }
            }
          };

          if (mode1.length > 200000) {
            confirmOpt['height'] = 350;
          }
          confirmOpt['title'] = false;
          confirmAgain = dialog(confirmOpt).showModal();

        }

      });

      // 绑定选号区号码、按钮、单式相关操作等点击事件
      $(el).off("click").on('click', 'i, label, button, .box, .close, .clear, .upload', function (evt) {
        me.numHandler(_el, evt, t);
      });

      // 限定只能输入数字
      $(el).off("keydown").on('keydown', '.box input', function (e) {
        // 允许: backspace, delete, tab, escape, enter and space
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
          // 允许: Ctrl+A
          (e.keyCode == 65 && e.ctrlKey === true) ||
          // 允许: Ctrl+V
          (e.keyCode == 86 && e.ctrlKey === true) ||
          // 允许: home, end, left, right, down, up
          (e.keyCode >= 35 && e.keyCode <= 40)) {
          // 什么都不做，返回
          return;
        }
        // 确保是数字 其它则阻止操作
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
          e.preventDefault();
        }
      });

      // 单式输入注数计算
      var chkRulesByType = function (val, isRight, li, t, ul, box, boxinput, count, isPos, pos, eltyp) {
        //按玩法规则初步过滤
        var n = 0;
        if (Lottery.cls === '11y' || Lottery.cls === 'pk10' || Lottery.cls === 'kl12') {
          // val 010203 to ["01","02","03"]
          val = val.replace(/['\r\n','\n','\r','\s+','；','，',';',';\r',',']/g, '').split(/(?=(?:\d{2})+?$)/);
        }

        switch (t[1]) {
          case 'zx':
            isRight = parseInt(t[2], 10) === val.length;
            if (eltyp == 'TEXTAREA') {
              //isRight = parseInt(t[2], 10) === val.replace(/\r\n/g,'').replace(/\s+/g,'').replace(/；/g,'').replace(/，/g,'').replace(/;/g,'').replace(/,/g,'').length;
              isRight = parseInt(t[2], 10) === val.replace(/['\r\n','\n','\r','\s+','；','，',';',',']/g, '').length
            }
            break;
          case 'zux':
          case 'hh':
            // 重新排序[选号有效与顺序无关]
            val = val.split('').sort().join('');
            // 是否混合的判断条件
            var reg = new RegExp("(\\d)\\1{" + (t[2] - 1) + "}");
            isRight = val.replace(/['\r\n','\n','\r','\s+','；','，',';',',']/g, '').length === parseInt(t[2], 10) && val.match(reg) === null;
            break;
          case 'zx11':
          case 'zx12':
            var _val = val.concat([]);
            // 符合长度 都大于等于1 小于等于11//四川快乐12小于等于12
            isRight = parseInt(t[2], 10) === Q.unique(val).length && Q.unique(val).length === _val.length;
            for (var i = 0; i < val.length; i++) {
              if (Lottery.cls == 'kl12') {
                isRight = isRight && val[i].length === 2 && parseInt(val[i], 10) >= 1 && parseInt(val[i], 10) <= 12;
              } else {
                isRight = isRight && val[i].length === 2 && parseInt(val[i], 10) >= 1 && parseInt(val[i], 10) <= 11;
              }
            }
            break;
          case 'zux11':
          case 'zux12':
          case 'rx':
            // 是否混合的判断条件
            // 两两都不相同 去重如果长度相等则两两各不相同
            var _val = val.concat([]);
            isRight = parseInt(t[2], 10) === Q.unique(val).length && Q.unique(val).length === _val.length;
            // 符合长度 都大于等于1 小于等于11//四川快乐12小于等于12
            for (var i = 0; i < val.length; i++) {
              if (Lottery.cls == 'kl12') {
                isRight = isRight && val[i].length === 2 && parseInt(val[i], 10) >= 1 && parseInt(val[i], 10) <= 12;
              } else {
                isRight = isRight && val[i].length === 2 && parseInt(val[i], 10) >= 1 && parseInt(val[i], 10) <= 11;
              }
            }
            // 重新排序[选号有效与顺序无关]
            val = val.sort();
            break;
          case 'pkzux':
            var valStr = val.join('||');
            // 符合长度
            isRight = parseInt(t[2], 10) === val.length;

            if (isRight) {
              //单个数字都大于等于1 小于等于10
              for (var pkzux_i = 0; pkzux_i < val.length; pkzux_i++) {
                if (valStr.indexOf(val[pkzux_i]) == valStr.lastIndexOf(val[pkzux_i])) {
                  isRight = true;
                  if (parseInt(val[pkzux_i]) >= 1 && parseInt(val[pkzux_i]) <= 10) {
                    isRight = true;
                  } else {
                    isRight = false;
                    break;
                  }
                } else {
                  isRight = false;
                  break;
                }
              }
            }

            break;
          default:
            break;
        }

        // 11选5 号码中间加空格
        val = Lottery.cls === '11y' || Lottery.cls === 'pk10' || Lottery.cls === 'kl12' ? val.join(',') : val.replace(/['\r\n','\n','\r','\s+']/g, '').split('').join(',');

        // 判断当前选号是否存在
        var item = $('#ds_' + val.replace(/[',',';','；','，','　']/g, '_'));
        // 判断是否混合、三码、非豹子号 + 单式 + 不重复
        if (isRight && item.length === 0) {

          val = val.replace(/[^\d]/g, ','); //将所有非数字以及非逗号统一转换为逗号
          val = val.replace(/^,+|,+$/g, ''); //将字符串首位逗号去掉
          val = val.replace(/,+/g, ','); // 将连续的逗号转换为一个逗号

          li.find('span').html(val);
          li.attr('id', 'ds_' + val.replace(/[',',';','；','，','　']/g, '_'));
          li.attr('data-code', val);

          ul.append(li);
          boxinput.val('').select();
          boxinput.blur();
          box.scrollTop(9999);

          // 计算合法注数
          n = ul.children('li').length;
          if (isPos.length > 0) {
            n = n * Math.combination(pos, parseInt(t[2], 10));
          }
          if (n > 0) {
            ul.show();
          } else {
            ul.hide();
          }
          $(count).find('.total em').html(n);
          boxinput.height((93 - ul.height() < 25 ? 25 : 93 - ul.height()));
          if (me.type === "lottery") {
            me.calcMoney(_el);
          }
        } else {
          if (item.length > 0) {
            item.addClass('wobble');
            setTimeout(function () {
              item.removeClass('wobble');
            }, 1200);
          }
          boxinput.val('').select();
          boxinput.blur();
          return false;
        }
      }

      var editabletextarea = function (evt) {
        var thisinput = $(el).find('.box .editable');
        var nowevtyp = evt.type;
        if (evt.type == 'keyup' && String(thisinput.val()).indexOf('请输入投注号码') > -1) {
          return false;
        }
        thisinput.data('before', thisinput.val());
        var elem, ieevt = evt ? evt : event;
        if (ieevt.srcElement) {
          elem = ieevt.srcElement;
        } else if (ieevt.target) {
          elem = ieevt.target;
        }
        var eltyp = elem.tagName;
        var boxinput = thisinput; //$(this);
        var ul = thisinput.prev("ul");
        var box = thisinput.parent(".box");
        var isPos = box.prev('.pos');
        var isRight = false;
        var pos = 0;

        //任选玩法-组选单式  万、千、百、十、个
        pos = $(el).find('.pos label.on').length;

        if ((/rx2|rx3|rx4/i).test(Lottery.method)) {
          var length = parseInt(Lottery.method.substring(2));
          if (pos < length) {
            var e = $(el).find('.pos label').eq(2);
            var tip = dialog({
              id: 'errornumbers',
              align: 'bottom',
              skin: 'tip pocTip',
              content: '请先选择位置',
              quickClose: true
            }).show(e[0]);
            return false;
          }
        }
        if ((Lottery.cls === '11y' || Lottery.cls === 'pk10' || Lottery.cls === 'kl12') && (evt.type === 'keyup' || evt.type === 'change') && thisinput.hasClass('waiting')) {
          return false;
        } else {
          thisinput.removeClass('waiting');
        }

        var golooppaste = function () {
          var thisinval = thisinput.val();
          if (me.cls == 'kl12' || me.cls == '11y' || me.cls == 'pk10') {
            thisinval = thisinval.replace(/ /g, '');
          }
          var allpaste = thisinval.split(' ');

          if (eltyp == 'TEXTAREA') {
            if (Lottery.cls === '11y' || Lottery.cls === 'kl12') {
              thisinval = thisinval.replace(/\D/g, ' ').replace(/\s+/g, ' ');
              var maxsplitlen = thisinval.replace(me.filterRegLine, ' ').replace(me.filterRegBreak, ' ').replace(/ $/gi, '').split(' ');
              var chkminlen = thisinval.replace(me.filterRegLine, '').replace(me.filterRegBreak, '');
              if (chkminlen.length / maxsplitlen.length == 2 && maxsplitlen.length % 3 > 0 && nowevtyp == 'paste') {
                var tip = dialog({
                  id: 'errornumbers',
                  align: 'top',
                  skin: 'tip',
                  content: '粘贴内容中有个别组号码不完整，请再次检查输入号码！',
                  quickClose: true,
                  onshow: function () {

                  }
                }).show(boxinput[0]);
              } else {
                if (chkminlen.length / maxsplitlen.length == 2 && chkminlen.length % maxsplitlen.length == 0) {
                  //allpaste = thisinval.replace(me.filterRegLine,'b').replace(me.filterRegBreak,'').split('b');
                  allpaste = thisinval.replace(me.filterReg, ' ').split(' ');
                } else {
                  allpaste = thisinval.replace(me.filterReg, ' ').split(' ');
                }
              }
            } else {
              allpaste = thisinval.replace(me.filterReg, ' ').split(' ');
            }
          }

          var chkline = function (list, nowval) {
            if (typeof nowval == 'undefined') {

              if (eltyp == 'TEXTAREA') {
                if (ul.find('li').size() == 0) {
                  thisinput.val(me.tipchs).select();
                }
              } else {
                thisinput.val('');
              }
              if (ul.find('li').size() > 0 && thisinput.val() != me.tipchs) {
                $(count).find('.confirm').removeAttr('pass').removeClass('disabled');
              }
              return false;
            }
            var li = $('<li><span/><em class="close"></em></li>');
            thisinput.val(nowval).trigger('keyup');
            chkRulesByType(nowval, isRight, li, t, ul, box, boxinput, count, isPos, pos, eltyp);

            if (list.length == 0) {
              $(count).find('.confirm').removeAttr('pass').removeClass('disabled');
              return false;
            } else {
              list.shift();
              setTimeout(function () {
                chkline(list, list[0]);
              }, 2);
            }
          }
          if (allpaste.length > 100) {
            if (ul.find('li').size() > 0) {
              chkline(allpaste, allpaste[0]);
            } else {
              //超过100条时另处理
              longCacl(allpaste.join('; '), thisinput, ul, pos, t, $(count).find('.total em'), _el, isPos);
              $(count).find('.confirm').removeAttr('pass').removeClass('disabled');
              return false;
            }
            return false;
          }

          if (allpaste.length > 0) {
            chkline(allpaste, allpaste[0]);
          }
        }
        $(count).find('.confirm').attr('pass', 1).addClass('disabled');
        setTimeout(golooppaste, 300);
      };

      $(el).off("keyup").on('keyup', '.box .editable', function (evt) {
        evt.preventDefault();
        var elem, ieevt = evt ? evt : event;
        if (ieevt.srcElement) {
          elem = ieevt.srcElement;
        } else if (ieevt.target) {
          elem = ieevt.target;
        }
        var eltyp = elem.tagName;
        var boxinput = $(this);
        var ul = $(this).prev("ul");
        var box = $(this).parent(".box");
        var li = $('<li><span/><em class="close"></em></li>');
        var isPos = box.prev('.pos');
        var isRight = false;
        var pos = 0;
        // 万、千、百、十、个
        pos = $(el).find('.pos label.on').length;
        var val = $(this).val();
        val = val.replace(/[^\d]/g, ',');
        var n = 0;
        var len = 0;
        // 玩法输入号码一组号码长度校验
        var methodGroupNumberLenChk = me.lengthMatchDict;

        // 回车 空格 确认当前选号
        // 13-回车    32-空格
        if (evt.keyCode === 13 || evt.keyCode === 32 || evt.keyCode === 186 || evt.keyCode === 188) {
          if ((Lottery.cls == 'kl12' || Lottery.cls == '11y' || Lottery.cls === 'pk10') && evt.keyCode === 32) {
            var chkmname = String(Lottery.method);
            if (typeof methodGroupNumberLenChk[Lottery.method] !== 'undefined') {
              var limitnumber = parseInt(methodGroupNumberLenChk[Lottery.method] * 2, 10);
              var maxlimit = parseInt(methodGroupNumberLenChk[Lottery.method] * 2, 10) + (parseInt(methodGroupNumberLenChk[Lottery.method], 10) - 1);
              if (val.replace(/,$/gi, '').split(',').length < methodGroupNumberLenChk[Lottery.method] && val.length < maxlimit) {
                //符合01 02 03单个号码有间隔
                if (val.length >= (limitnumber > 6 ? 6 : limitnumber) && val.replace(/,$/gi, '').indexOf(',') != -1) {
                  boxinput.addClass('waiting');
                  return false;
                }
                //符合010203单个号码无间隔
                if (val.length < limitnumber && val.replace(/,$/gi, '').indexOf(',') == -1) {
                  boxinput.addClass('waiting');
                  return false;
                }
              }
            }
          }
          if (parseInt($(count).find('.total em').html(), 10) < 100) {
            if (ul.find('li').size() > 0) {
              chkRulesByType(val, isRight, li, t, ul, box, boxinput, count, isPos, pos, eltyp);
            } else {
              if (parseInt($(count).find('.total em').html(), 10) == 0) {
                chkRulesByType(val, isRight, li, t, ul, box, boxinput, count, isPos, pos, eltyp);
              }
            }
          } else {
            if (ul.find('li').size() > 1) {
              chkRulesByType(val, isRight, li, t, ul, box, boxinput, count, isPos, pos, eltyp);
            } else {
              if (this.timeout && evt.keyCode !== 186 && evt.keyCode !== 13 && evt.keyCode !== 32 && evt.keyCode !== 188) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(function () {
                  editabletextarea(evt);
                }, 1000)
              } else {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(function () {
                  editabletextarea(evt);
                }, 1500)
              }
            }
          }
        } else {
          if (evt.keyCode === 8) {
            if (this.timeout && val != '') {
              clearTimeout(this.timeout);
              this.timeout = setTimeout(function () {
                editabletextarea(evt);
              }, 1000)
            }
          }
        }
        if (typeof this.timeout == 'undefined') {
          if (val != '') {
            this.timeout = setTimeout(function () {
              editabletextarea(evt);
            }, 1200)
          }
        }
      });

      // 单式粘贴事件
      $(el).find('.box textarea.editable').off("click").on('click', function (evt) {
        if ($(this).val() && $(this).val().indexOf(me.tipchs) >= 0) {
          setTimeout(() => {
            $(this).val('');
          }, 1);
        } else {
          if ($(this).data('before') == me.tipchs || !($(this).data('before') == $(this).val())) {
            setTimeout(function () {
              editabletextarea(evt);
            }, 200);
          }
        }
      });

      var longCacl = function (code, textarea, ul, pos, t, count_total, _el, isPos) {
        var tmp = [];
        var n = 0;
        var len = 0;
        var vals;
        code = code.replace(/[^\d][^\S]/g, ','); //将所有非数字以及非逗号统一转换为逗号
        code = code.replace(/;/g, ",");
        code = code.replace(/；/g, ",");
        code = code.replace(/，/g, ",");
        code = code.replace(/^,+|,+$/g, ''); //将字符串首位逗号去掉
        code = code.replace(/,+/g, ','); // 将连续的逗号转换为一个逗号

        if (code.indexOf(',') != -1) {
          vals = code.split(',');
        } else if (code.indexOf(' ') != -1) {
          vals = code.split(/\s+/);
        }

        vals = Q.unique(vals);
        vals.sort();

        for (var i = 0; i < vals.length; i++) {
          var isRight = false;
          var val = vals[i];

          if (Lottery.cls === 'kl12' || Lottery.cls === '11y' || Lottery.cls === 'pk10') {
            val = val.split(/(?=(?:\d{2})+?$)/);
          }
          switch (t[1]) {
            case 'zx':
              isRight = parseInt(t[2], 10) === val.length;
              break;
            case 'zux':
            case 'hh':
              // 重新排序[选号有效与顺序无关]
              val = val.split('').sort().join('');
              // 是否混合的判断条件
              var reg = new RegExp("(\\d)\\1{" + (t[2] - 1) + "}");
              isRight = val.length === parseInt(t[2], 10) && val.match(reg) === null;
              break;
            case 'zx11':
            case 'zx12':
              var _val = val.concat([]);
              // 符合长度 都大于等于1 小于等于11|四川快乐12小于等于12
              isRight = parseInt(t[2], 10) === Q.unique(val).length && Q.unique(val).length === _val.length;
              for (var k = 0; k < val.length; k++) {
                if (Lottery.cls == 'kl12') {
                  isRight = isRight && val[k].length === 2 && parseInt(val[k], 10) >= 1 && parseInt(val[k], 10) <= 12;
                } else { //11选5
                  isRight = isRight && val[k].length === 2 && parseInt(val[k], 10) >= 1 && parseInt(val[k], 10) <= 11;
                }
              }
              break;
            case 'zux11':
            case 'zux12':
            case 'rx':
              // 是否混合的判断条件
              // 两两都不相同 去重如果长度相等则两两各不相同
              var _val = val.concat([]);
              isRight = parseInt(t[2], 10) === Q.unique(val).length && Q.unique(val).length === _val.length;

              // 符合长度 都大于等于1 小于等于11
              for (var k = 0; k < val.length; k++) {
                if (Lottery.cls == 'kl12') {
                  isRight = isRight && val[k].length === 2 && parseInt(val[k], 10) >= 1 && parseInt(val[k], 10) <= 12;
                } else {
                  isRight = isRight && val[k].length === 2 && parseInt(val[k], 10) >= 1 && parseInt(val[k], 10) <= 11;
                }
              }
              // 重新排序[选号与效与顺序无关]
              val = val.sort();
              break;
            case 'pkzux':
              var valStr = val.join('||');
              // 符合长度
              isRight = parseInt(t[2], 10) === val.length;

              if (isRight) {
                //单个数字都大于等于1 小于等于10
                for (var pkzux_i = 0; pkzux_i < val.length; pkzux_i++) {
                  if (valStr.indexOf(val[pkzux_i]) == valStr.lastIndexOf(val[pkzux_i])) {
                    isRight = true;
                    if (parseInt(val[pkzux_i]) >= 1 && parseInt(val[pkzux_i]) <= 10) {
                      isRight = true;
                    } else {
                      isRight = false;
                      break;
                    }
                  } else {
                    isRight = false;
                    break;
                  }
                }
              }

              break;
            default:
              break;
          }

          // 11选5 号码中间加空格
          val = (Lottery.cls === 'kl12' || Lottery.cls === '11y' || Lottery.cls === 'pk10') ? val.join(',') : val.split('').join(',');

          if (isRight) {
            tmp.push(val);
          } else {
            textarea.val('');
          }
        }
        // 再次去重，防止01020305 03020105 任选单式与顺序无关
        tmp = Q.unique(tmp);
        if (tmp.length > 0) {
          textarea.val(tmp.join('; ').replace(/,/g, '')).trigger('click');
          ul.hide();
          // 计算合法注数
          n = tmp.length;
          if (isPos.length > 0) {
            n = n * Math.combination(pos, t[2]);
          }
          count_total.html(n);
          me.calcMoney(_el);
        } else {
          ul.show();
          count_total.html(0);
          me.calcMoney(_el);
        }
      };

      $(el).off("paste").on('paste', '.box .editable', editabletextarea);
      $(el).off("change").on('change', '.box .editable', editabletextarea);
    },
    //计算任选单挑
    renderTotal: function (_n, type) { //type 0为快速投注，1为正常下注
      var me = this;
      var el = $('.js-number')[0]; // 获得div.number
      var count = $('.js-count')[0];
      var orders = $('.js-orders')[0];
      var list = $(orders).find('ul:eq(0)');
      var m = me.method;
      var rx_m = m.split('_');

      var arr = [];
      var rxArr = [];
      var posNumCount = {}; //位->选号 的对应关系
      var eachMethodCount = {}; //玩法->注数 的对应关系
      var dantiaoFlag = false;
      var singleMaxBonus = null;
      var dantiaoOrders = null;

      if (m.indexOf('zx_fs') !== -1) {
        $('.js-number').find('dl[rel="selectNum"]').each(function (index, dl) {
          if ($(dl).find('dd i.on').size() > 0) {
            arr.push(index + 1);
          }
          $(dl).find('dd i.on').each(function (idx, v) {
            posNumCount[index + 1] = posNumCount[index + 1] || '';
            posNumCount[index + 1] += $(v).text();
          });
        });
      } else {
        $('.js-number').find('.pos label').each(function (index, label) {
          if ($(label).hasClass('on')) {
            let pos = $(label).attr('data-pos');
            arr.push(pos);
            if (/_zux_fs$|_hz$|_z3$|_z6$|_z24$|_z12$|_z4$/.test(me.method)) {
              $('.number>dl[rel="selectNum"]').find('dd>i.on').each((idx, v) => {
                posNumCount[pos] = posNumCount[pos] || '';
                posNumCount[pos] += $(v).text();
              });
            } else if (/_ds$|_hh$/.test(me.method)) {
              /*$('.number>div.box').find('ul>li').each((idx, v) => {
                posNumCount[pos] = posNumCount[pos] || [];
                posNumCount[pos].push($(v).data('code'));
              });*/

              if ($('.js-number .box').find('ul>li').length > 0) {
                $('.js-number .box').find('ul>li').each((idx, v) => {
                  posNumCount[pos] = posNumCount[pos] || [];
                  posNumCount[pos].push($(v).data('code'));
                });
              } else {
                //上传文件和批量粘贴的时候不会把值挂在ul li上
                $('textarea').val().split(';').forEach((v, idx) => {
                  posNumCount[pos] = posNumCount[pos] || [];
                  posNumCount[pos].push(v);
                });
              }

            }
          }
        });
      }

      if (rx_m[0] === 'rx2') {
        for (var i = 0; i < arr.length - 1; i++) {
          for (var j = i + 1; j < arr.length; j++) {
            var n = arr[i].toString() + arr[j].toString();
            rxArr.push(n);
          }
        }
        rxArr.forEach((v, i) => {
          let m_method = me.method + '_' + v;
          if (m.indexOf('zx_fs') !== -1) {
            eachMethodCount[m_method] = posNumCount[v[0]].length * posNumCount[v[1]].length;
          } else if (/_ds$/.test(me.method)) {
            eachMethodCount[m_method] = posNumCount[v[0]].length;
          } else if (/_zux_fs$|_hz$/.test(me.method)) {
            let totalCount = Number($('#lottery > div.count > div.total > em').eq(0).text());
            let posLength = Object.keys(posNumCount).length;
            eachMethodCount[m_method] = totalCount / Math.combination(posLength, 2);
          }
        });
      } else if (rx_m[0] === 'rx3') {
        for (var i = 0; i < arr.length - 2; i++) {
          for (var j = i + 1; j < arr.length - 1; j++) {
            for (var p = j + 1; p < arr.length; p++) {
              var n = arr[i].toString() + arr[j].toString() + arr[p].toString();
              rxArr.push(n);
            }
          }
        }
        rxArr.forEach((v, i) => {
          let m_method = me.method + '_' + v;
          if (m.indexOf('zx_fs') !== -1) {
            eachMethodCount[m_method] = posNumCount[v[0]].length * posNumCount[v[1]].length * posNumCount[v[2]].length;
          } else if (/_ds$|_hh$/.test(me.method)) {
            eachMethodCount[m_method] = posNumCount[v[0]].length;
          } else if (/_hz$|_z3$|_z6$/.test(me.method)) {
            let totalCount = Number($('#lottery > div.count > div.total > em').eq(0).text());
            let posLength = Object.keys(posNumCount).length;
            eachMethodCount[m_method] = totalCount / Math.combination(posLength, 3);
          }
        });
      } else if (rx_m[0] === 'rx4') {
        for (var i = 0; i < arr.length - 3; i++) {
          for (var j = i + 1; j < arr.length - 2; j++) {
            for (var p = j + 1; p < arr.length - 1; p++) {
              for (var t = p + 1; t < arr.length; t++) {
                var n = arr[i].toString() + arr[j].toString() + arr[p].toString() + arr[t].toString();
                rxArr.push(n);
              }
            }
          }
        }
        rxArr.forEach((v, i) => {
          let m_method = me.method + '_' + v;
          if (m.indexOf('zx_fs') !== -1) {
            eachMethodCount[m_method] = posNumCount[v[0]].length * posNumCount[v[1]].length * posNumCount[v[2]].length * posNumCount[v[3]].length;
          } else if (/_ds$|_hh$/.test(me.method)) {
            eachMethodCount[m_method] = posNumCount[v[0]].length;
          } else if (/_hz$|_z24$|_z12$|_z6$|_z4$/.test(me.method)) {
            let totalCount = Number($('#lottery > div.count > div.total > em').eq(0).text());
            let posLength = Object.keys(posNumCount).length;
            eachMethodCount[m_method] = totalCount / Math.combination(posLength, 4);
          }
        });
      }

      dantiaoFlag = rxArr.some((num, idx) => {
        let m_method = me.method + '_' + num;
        if (me.odds[me.lt][m_method]['s'] === 1 && eachMethodCount[m_method] < me.odds[me.lt][m_method]['n']) {
          singleMaxBonus = me.odds[me.lt][m_method]['m']; //单挑限额
          return true;
        }
      });
      dantiaoOrders = rxArr.filter((num, idx) => { //['万千白','百十个',...]
        let m_method = me.method + '_' + num;
        return me.odds[me.lt][m_method]['s'] === 1 && eachMethodCount[m_method] < me.odds[me.lt][m_method]['n'];
      }).map((num, idx) => {
        if (me.lt === 'HNKY481') {
          return num.replace(/1/, '自由泳').replace(/2/, '仰泳').replace(/3/, '蛙泳').replace(/4/, '蝶泳');
        }
        return num.replace(/1/, '万').replace(/2/, '千').replace(/3/, '百').replace(/4/, '十').replace(/5/, '个');
      });


      let dantiaoHtml = `您的注单：${dantiaoOrders.map(v=>`【${v}】`).join('')}为单挑，将有当期单挑最高奖金${singleMaxBonus}元的限制，您确定要继续吗？`;

      var dantiao;
      if (type === 0) {
        dantiao = dialog({
          title: '温馨提示',
          width: 300,
          fixed: true,
          id: 'lottery_dan',
          skin: 'lottery_dan',
          button: [{
            id: 'd_ok',
            value: '确&nbsp;&nbsp;定',
            callback: function (evt) {
              //快速投注
              $(orders).addClass('quickSubmit-orders');
              $(count).find('a.confirm').click();
              $(orders).find('.bottom a.submit').click();
            }
          }, {
            id: 'd_cancel',
            skin: 'cancel',
            value: '取&nbsp;&nbsp;消',
            callback: function (evt) {
              return;
            }
          }]
        });

        if (dantiaoFlag) {
          dantiao.content(dantiaoHtml);
          dantiao.showModal();
        } else {
          $('#lottery .orders').addClass('quickSubmit-orders');
          $('#lottery .count').find('a.confirm').click();
          $('#lottery .orders').find('.bottom a.submit').click();
        }

      } else if (type === 1) {
        dantiao = dialog({
          title: '温馨提示',
          width: 300,
          fixed: true,
          id: 'lottery_dan',
          skin: 'lottery_dan',
          content: dantiaoHtml,
          button: [{
            id: 't_ok',
            value: '确&nbsp;&nbsp;定',
            callback: function (evt) {
              var order = me.getOrder();
              $(order).prependTo(list);

              list.find('li').each(function () {
                var data = $(this).attr('data-count').split('|');
                $(this).find('.mode select').val(data[2]);
              });

              if (Trace.chkRateTrace()) {
                Trace.toggleRateTab(true);
              } else {
                Trace.toggleRateTab(false);
              }
              me.countReset();

              list.find('li input[type="text"].spinner.newInput').inputNumber().removeClass('newInput');


              list.find('li').removeClass('blink animated').eq(0).addClass('blink animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                $(this).removeClass('blink animated');
              });

              // 计算提交注单总注数、总金额，并准备提交注单需要的数据
              $(el).find('.box textarea.editable').height(93).val(me.tipchs).select();
              me.setSubmitData();
              if ($('.quickSubmit-orders').length === 0) {
                $(count).find('em').html('0');
                $(count).find('em.times').html('0');
                // $(count).find('input.spinner').val($('.spinner').attr('min'));
              }
            }
          }, {
            id: 't_cancel',
            skin: 'cancel',
            value: '取&nbsp;&nbsp;消',
            callback: function (evt) {
              return;
            }
          }],
          onshow: function () {
            $(count).find('a.quickSubmit').removeClass('disabled');
            $(count).find('a.confirm').removeClass('disabled');
          }
        });
        if (dantiaoFlag) {
          dantiao.content(dantiaoHtml);
          dantiao.showModal();
        } else {
          var order = me.getOrder();
          $(order).prependTo(list);

          list.find('li').each(function () {
            var data = $(this).attr('data-count').split('|');
            $(this).find('.mode select').val(data[2]);
          });

          if (Trace.chkRateTrace()) {
            Trace.toggleRateTab(true);
          } else {
            Trace.toggleRateTab(false);
          }
          me.countReset();

          list.find('li input[type="text"].spinner.newInput').inputNumber().removeClass('newInput');


          list.find('li').removeClass('blink animated').eq(0).addClass('blink animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('blink animated');
          });

          // 计算提交注单总注数、总金额，并准备提交注单需要的数据
          $(el).find('.box textarea.editable').height(93).val(me.tipchs).select();
          me.setSubmitData();
          if ($('.quickSubmit-orders').length == 0) {
            $(count).find('em').html('0');
            $(count).find('em.times').html('0');
            // $(count).find('input.spinner').val($('.spinner').attr('min'));
          }
        }
      }
    },
    //六合彩正常投注提交订单参数
    getOrderObjLHC() {
      const me = this;
      const order = [];
      $('.js-orders-item').each((index, item) => {
        const wanfa = $(item).data('wanfa');
        const m_method = $(item).data('type');
        let code = String($(item).data('code'));
        code = /^tm_tm_ws|^ztws_ztws_ztws/.test(m_method) ? code.replace('尾', '') : code; //尾数“0尾”只传0
        const countArr = $(item).data('count').split('|');
        const money = $(item).data('money');
        const price = $(item).data('price');
        const nums = $(item).data('nums');
        const odd = $(item).data('odd');
        const point = $(item).data('point');
        order.push({
          "method": m_method,
          "code": String(code),
          "nums": nums,
          "piece": "1",
          "price": String(price),
          "odds": String(odd),
          "point": String(point),
          "amount": String(money)
        });
      });
      const orderObj = {
        "lottery": me.lt,
        "issue": me.issue,
        "order": JSON.stringify(order),
        "betType": 2,
        "sourceType": me.ifClientEnv() ? 6 : 0
      };
      return orderObj;
    },
    //六合彩快速投注提交订单参数
    getLHCQuickOrderObj() {
      const me = this;
      const order = [];
      if (me.plateType === 'input') {
        $('.js-plate-item').each((index, item) => {
          const m_method = $(item).find('.js-odd-value').attr('m_method');
          let code = $(item).find('.js-plate-item-num').attr('cn');
          code = /^tm_tm_ws|^ztws_ztws_ztws/.test(m_method) ? code.replace('尾', '') : code; //尾数“0尾”只传0
          const odd = $(item).find('.js-odd-value').attr('odd');
          const point = $(item).find('.js-odd-value').attr('point');
          const money = $(item).find('.js-plate-item-input').val();
          if ($(item).find('.js-plate-item-input').val()) {
            order.push({
              "method": m_method,
              "code": String(code),
              "nums": "1",
              "piece": "1",
              "price": String(money),
              "odds": String(odd),
              "point": String(point),
              "amount": String(money)
            });
          }
        });
      }
      if (me.plateType === 'click') {
        switch (me.method) {
          case 'lx_lx_2lx':
          case 'lx_lx_3lx':
          case 'lx_lx_4lx':
          case 'lm_lm_2z2':
          case 'lm_lm_3z2':
          case 'lm_lm_3z3':
            const code = [];
            $('.js-click-num-item.on').each((index, item) => {
              const cn = $(item).attr('cn');
              code.push(cn);
            });
            const method = me.method;
            const nums = $('.js-count-num').text();
            const money = $('.js-total-money').text();
            const point = me.odds[method][`rate${me.rateType}`];
            const odd = me.odds[method][`bonus${me.rateType}`];
            order.push({
              "method": method,
              "code": String(code),
              "nums": nums,
              "piece": "1",
              "price": $('.js-clickType-per-input').val(),
              "odds": String(odd),
              "point": String(point),
              "amount": String(money)
            });
            break;
          case 'hzdxds_hzdxds_hzdxds':
            //拆单
            $('.js-click-num-item.on').each((index, item) => {
              const m_method = $(item).attr('m_method');
              const cn = $(item).attr('cn');
              const code = cn;
              const money = $('.js-clickType-per-input').val();
              const point = me.odds[m_method][`rate${me.rateType}`];
              const odd = me.odds[m_method][`bonus${me.rateType}`];
              order.push({
                "method": m_method,
                "code": String(code),
                "nums": "1",
                "piece": "1",
                "price": $('.js-clickType-per-input').val(),
                "odds": String(odd),
                "point": String(point),
                "amount": String(money)
              });
            });
            break;
          default:
            break;
        }
      }
      const orderObj = {
        "lottery": me.lt,
        "issue": me.issue,
        "order": JSON.stringify(order),
        "betType": 2,
        "sourceType": me.ifClientEnv() ? 6 : 0
      };
      return orderObj;
    },
    //六合彩正常投注提交订单的提示框内容
    getLHCConfirmDialogHtml() {
      const me = this;
      const htmlWelcome = `<h2>请确认投注极速六合彩</h2>`;
      const htmlMoney = `<h4>投注总金额：<em>${parseInt($('.amount').text())}</em>元`;
      let htmlList = '';
      $('.js-orders-item').each((index,item)=>{
        const wanfa = $(item).data('wanfa');
        const code = $(item).data('code');
        const money = $(item).data('money');
        htmlList += `
                  <dd>
                      <p>${wanfa}</p><em>${code}</em><span>投注金额:<i>${money}</i></span>
                  </dd>
              `;
      });
      const confirmDialogHtml = `
              ${htmlWelcome}
              <div class="list">
                  <dt><em class="issue js-submit-issue">期号${me.issue}</em></dt>
                  ${htmlList}
              </div>
              ${htmlMoney}
              <label class="printStatus"><input type="checkbox" value="print">打印注单</label>
          `;
      return confirmDialogHtml;
    },
    //六合彩快速投注提交订单的提示框内容
    getLHCQuickConfirmDialogHtml() {
      const me = this;
      const htmlWelcome = `<h2>请确认投注香港六合彩</h2>`;
      const htmlMoney = `<h4>投注总金额：<em>${$('.js-total-money').text()}</em>元`;
      let htmlList = '';
      if (me.plateType === 'input') {
        $('.js-plate-item').each((index, item) => {
          const wanfa = $('.subtab .on').text();
          const code = $(item).find('.js-plate-item-num').text();
          const money = $(item).find('.js-plate-item-input').val();
          if (money) {
            htmlList += `
                        <dd>
                            <p>${wanfa}</p><em>${code}</em><span>投注金额:<i>${money}</i></span>
                        </dd>
                    `;
          }
        });
      }
      if (me.plateType === 'click') {
        switch (me.method) {
          case 'lx_lx_2lx':
          case 'lx_lx_3lx':
          case 'lx_lx_4lx':
          case 'lm_lm_2z2':
          case 'lm_lm_3z2':
          case 'lm_lm_3z3':
            const code = [];
            $('.js-click-num-item.on').each((index, item) => {
              const cn = $(item).attr('cn');
              code.push(cn);
            });
            const wanfa = $('.subtab .on').text();
            const money = $('.js-total-money').text();
            htmlList += `
                        <dd>
                            <p>${wanfa}</p><em>${code.join(',')}</em><span>投注金额:<i>${money}</i></span>
                        </dd>
                    `;
            break;
          case 'hzdxds_hzdxds_hzdxds':
            //拆单
            $('.js-click-num-item.on').each((index, item) => {
              const cn = $(item).attr('cn');
              const code = cn;
              const wanfa = $('.subtab .on').text();
              const money = $('.js-clickType-per-input').val();
              htmlList += `
                            <dd>
                                <p>${wanfa}</p><em>${code}</em><span>投注金额:<i>${money}</i></span>
                            </dd>
                        `;
            });
            break;
          default:
            break;
        }
      }
      const confirmDialogHtml = `
            ${htmlWelcome}
            <div class="list">
                <dt><em class="issue js-submit-issue">期号${me.issue}</em></dt>
                ${htmlList}
            </div>
            ${htmlMoney}
            <label class="printStatus"><input type="checkbox" value="print">打印注单</label>
        `;
      return confirmDialogHtml;
    },
    //下单
    addOrderApi: function (obj, btn, txt, tip) {
      var me = this;
      obj['sourceType'] = me.ifClientEnv() ? 6 : 0;
      var oldObj = JSON.stringify(obj);
      var orderArr = JSON.parse(obj.order);
      orderArr.map(function(item) {
        if (Q.newToOld[item.method] !== undefined) {
          item.method = Q.newToOld[item.method];
        }
      })
      obj.order = JSON.stringify(orderArr);
      Api.addOrder(obj, function (d) {
        // 重置提交注单状态
        btn.html(txt).removeClass('loading');
        if (d === -1) {
          if ($('.quickSubmit-orders').length > 0) {
            me.resetOrders();
          }
          // 判断用户中心登录
          User.chkLogin(function () {
            me.addOrderApi(obj, btn, txt, tip);
          });
        } else {
          d.code = parseInt(d.code, 10);

          if (d.code === 1) {
            if (me.lt !== 'WBGMMC') {
                me.resetPlate();
                me.resetOrders();//追号和正常投注清空订单栏
            } else {
              if ($('.quickSubmit-orders').length == 0) {
                btn.addClass('disabled');
              }
              $('#lottery, #lotteryClass').addClass('mask');
              $('.gotop').trigger('click');
            }
            $('#lottery .number').find('i.on').each(function () {
              $(arguments[1]).click();
            });

            tip.content('订单提交成功！');
            tip.show();

            me.saveMethod(oldObj); // 保存历史玩法
            me.renderHistoryTab();

            if (me.printStatus && me.lt != 'WBGMMC') {
              me.printOrder(JSON.parse(oldObj));
            };
            // 秒秒彩动画开始
            if (me.lt === 'WBGMMC' && me.flipball !== undefined) {
              btn.removeClass('disabled')
              btn.addClass('loading');
              var prize = parseFloat(parseFloat(d.result.bonus, 10).toFixed(4));
              var code = d.result.code.split(',');

              if (prize > 0) {
                var tipPrize = dialog({
                  skin: 'mmc_result',
                  align: 'top',
                  fixed: true,
                  content: '未中奖，再来一次！'
                });
              } else {
                var tipPrize = dialog({
                  skin: 'tip',
                  align: 'top',
                  fixed: true,
                  content: '未中奖，再来一次！'
                });
              }
              me.flipball.flip(code, true, function () {
                if (prize > 0) {
                  var mmc_success = '<div class="mmc_success"><em>' + prize + '</em></div>';
                  tipPrize.content(mmc_success);
                  tipPrize.show();
                } else {
                  tipPrize.show(btn[0]);
                }
                me.updateRecency();
                me.updateIssueInfo(1);
                me.getIssueInfoLast();

                setTimeout(function () {
                  tipPrize.close().remove();
                  $('#lottery, #lotteryClass').removeClass('mask');
                  if ($('.quickSubmit-orders').length > 0) {
                    me.resetOrders();
                  } else {
                    btn.removeClass('disabled');
                  }

                  btn.removeClass('loading');
                }, 2000);

                me.getUserMoney();
              });
            } else {
              me.updateRecency();
              me.getUserMoney();
            }
          } else if (d.code === 4001) {
            var tip1 = dialog({
              title: '余额不足',
              skin: 'noBalance',
              fixed: true,
              content: '<p>对不起，您的余额不足，为保证您可以顺利购彩</p><p>建议您充值后再进行购彩。</p><a href="' + User.app + '/pay/rechargeIndexView" target="_blank" class="btn-recharge">立刻充值</a>',
              onshow: function () {
                $(this.node).find('.btn-recharge').unbind('click').click(function (evt) {
                  tip1.close().remove();
                });
                if ($('.quickSubmit-orders').length > 0) {
                  me.resetOrders();
                }
              }
            }).showModal();
          } else if (d.msg) {
            tip.content(d.msg);

            if ($('.quickSubmit-orders').length > 0) {
              me.resetOrders();
            }
            tip.show(btn[0]);
          }

          setTimeout(function () {
            tip.close().remove();
          }, 2000);

          if ($('.orders').find('.list>ul li').length < 1) {
            $('.orders .bottom .submit').addClass('disabled');
          }
        }
      });
    },
    mmcTimeout: null,
    addOrderMMCLoopApi: function (obj, btn, txt, tip, t, priceStop) {
      var me = this;
      var oldObj = JSON.stringify(obj);
      var isPrizeStop = priceStop;
      var mmcLoopTip;
      var mmcBtn;

      if(!me.isContinue) {
        return false;
      }

      obj['sourceType'] = me.ifClientEnv() ? 6 : 0;
      var orderArr = JSON.parse(obj.order);
      orderArr.map(function(item) {
        if (Q.newToOld[item.method] !== undefined) {
          item.method = Q.newToOld[item.method];
        }
      })
      obj.order = JSON.stringify(orderArr);
      Api.addOrder(obj, function (d) {
        // 重置提交注单状态
        btn.html(txt).removeClass('loading');
        if (d === -1) {
          if ($('.quickSubmit-orders').length > 0) {
            me.resetOrders();
          }
          // 判断用户中心登录
          User.chkLogin(function () {
            me.addOrderMMCLoopApi(obj, btn, txt, tip, t, priceStop);
          });
        } else {
          d.code = parseInt(d.code, 10);
          if (d.code === 1) {
            if ($('.quickSubmit-orders').length == 0) {
              btn.addClass('disabled');
            }

            if ($('.order .list li').length !== 0) {
              btn.removeClass('disabled');
            }

            $('#lottery, #lotteryClass').addClass('mask');
            $('.gotop').trigger('click');
            me.saveMethod(oldObj); // 保存历史玩法
            me.renderHistoryTab();
            if (!dialog.get('mmc_loop_box')) {
              $(window).scrollTop(0);
              $('.js-info').css('z-index', 10010);
              var mmcBox = '<div class="mmcLotCont"><div class="emptyCont"></div><div class="title"><span class="code">玩法及投注内容</span><span class="times">倍数</span><span class="mode">模式</span><span class="money">投注金额</span></div>\
                            <ul></ul></div>\
                            <div class="mmckj" id="mmc_loop_box">\
            	  			<div class="dialog_left">\
            	  				<div class="head"><span style="width: 25%;">连投次序</span><span style="width: 45%;">开奖号码</span><span style="width: 25%;">中奖金额</span></div>\
                       			<div class="mmcmx"><ul class="mmc_list"></ul></div>\
            	  			</div>\
                       		<div class="dialog_right">\
            	  				<div class="kjjg">\
            	  					<h4>第<em class="mmcLoopNow">0</em>次开奖</h4>\
            	  					<div class="m" data-prize="0"></div>\
            	  					<ul><li><span class="mmckjcs">计划开奖次数:</span><span><em>' + t + '</em>次</span></li>\
            	  					<li><span class="mmczjcs">已中奖次数:</span><span><em class="mmcLoopDone" data-time="0">0</em>次</span></li>\
            	  					<li><span class="mmczjje">已中奖金额:</span><span><em class="mmcLoopTotal" data-money="0">0</em>元</span></li></ul>\
            	  					<div><div class="moreTimes">再玩一次</div><div class="btn-mmc-loop" data-type="1">停止开奖</div></div>\
            	  				</div></div></div>';
              mmcLoopTip = dialog({
                id: 'mmc_loop_box',
                skin: 'mmc-loop',
                align: 'bottom',
                fixed: false,
                content: mmcBox,
                onshow: function () {
                  mmcBtn = $(this.node).find('.btn-mmc-loop');
                  $('.kjjg .moreTimes').hide();
                  var closeBtn = $(this.node).find('.ui-dialog-close');

                  var mmcCont = '';
                  var mmcList = JSON.parse(obj.order);
                  $(mmcList).each(function () {
                    mmcCont += '<li><span class="code" title="' + Q.getMethodName(arguments[1].method, me.lt) + ' ' + me.descFormat(arguments[1].code, arguments[1].method) + '">' + Q.getMethodName(arguments[1].method, me.lt) + ' ' + me.descFormat(arguments[1].code, arguments[1].method) + '</span>' +
                      '<span>' + arguments[1].piece + '</span>' +
                      '<span>' + Q.modeName(arguments[1].price) + '</span>' +
                      '<span>' + arguments[1].amount + '</span></li>'
                  });
                  $('.mmc-loop .mmcLotCont ul').html(mmcCont);

                  mmcBtn.unbind('click').click(function () {
                    if ($(this).hasClass('mmc-loop-cancel')) {
                      mmcLoopTip.close();
                      Lottery.getIssueInfoLast();
                    } else {
                      mmcBtn.addClass('mmc-loop-cancel').html('取消').attr('data-type', '2');
                      $('.kjjg .moreTimes').show();
                      me.isContinue = false;
                      $(".kjjg h4").html('开奖结束');
                      $(".kjjg .mmckjcs").html('累计开奖次数：');
                      $(".kjjg .mmczjcs").html('累计中奖次数：');
                      $(".kjjg .mmczjje").html('累计中奖金额：');
                      $(".kjjg ul li").eq(0).find('em').addClass('mmcTotalTime').html($('.mmc_list li').length);
                      $(".mmcLoopDone").html(parseInt($('.mmcLoopDone').attr('data-time')));
                      $('.mmcLoopTotal').html(parseFloat($('.mmcLoopTotal').attr('data-money')));
                      clearTimeout(me.mmcTimeout);
                    }
                  });


                  $('.kjjg .moreTimes').off('click').on('click', function () {
                    $(this).hide();
                    $(".kjjg h4").html('第<em class="mmcLoopNow">0</em>次开奖');
                    $(".kjjg .mmckjcs").html('计划开奖次数：');
                    $(".kjjg .mmckjcs").next('span').find('em').html(t);
                    $(".kjjg .mmczjcs").html('已中奖次数：');
                    $(".kjjg .mmczjje").html('已中奖金额：');
                    $(".mmcLoopDone").html('0');
                    $('.mmcLoopTotal').html('0');
                    $(".kjjg ul li").eq(0).find('em').removeClass('mmcTotalTime');
                    $(".btn-mmc-loop").removeClass('mmc-loop-cancel').html('停止开奖').attr('data-type', 1);
                    me.isContinue = true;
                    me.addOrderMMCLoopApi(obj, btn, txt, tip, t, priceStop);
                  });
                },
                onclose: function () {
                  if ($('.quickSubmit-orders').length >= 0) {
                    me.resetOrders();
                  } else {
                    btn.removeClass('disabled');
                  }
                  $('#lottery, #lotteryClass').removeClass('mask');
                  $('.js-info').css('z-index', 10);
                  this.close().remove();
                }
              }).showModal($('.js-info[lt=wbgmmc]')[0]);
            }

            var prize = parseFloat(parseFloat(d.result.bonus, 10).toFixed(4));

            var codeStr = d.result.code;
            var code = codeStr.split(',');

            var isStopMMC = parseInt($(".btn-mmc-loop").attr('data-type'), 10);

            // 秒秒彩动画开始

            me.flipball.flip(code, true, function () {

              var count = parseInt($(".mmcLoopNow").html(), 10) + 1;
              var kjcs = $('.mmc_list li').length + 1;
              $(".mmcLoopNow").html(count);
              $(".mmcPrizeNow").html(prize);

              var status = prize > 0 ? prize : '未中奖';
              var statusColor = prize > 0 ? 'statusColor' : '';
              var li = '<li><span class="count">' + kjcs + '</span><span class="code">' + codeStr + '</span><span class="' + statusColor + '">' + status + '</span></li>';
              $('#mmc_loop_box .mmc_list').append(li);
              $('#mmc_loop_box .mmcmx').scrollTop($('#mmc_loop_box .mmcmx')[0].scrollHeight);

              if ($(".kjjg ul li").eq(0).find('em').hasClass('mmcTotalTime')) {
                $(".kjjg ul li").eq(0).find('em').html($('.mmc_list li').length);
              }

              if (prize > 0) {
                var num = parseFloat($('#mmc_loop_box .m').attr('data-prize')) + parseFloat((prize * 10000).toFixed(0));

                var totalNum = Q.floatAdd(parseFloat($('.mmcLoopTotal').html()), parseFloat(prize));
                $('.mmcLoopTotal').html(totalNum);
                $('.mmcLoopTotal').attr('data-money', Q.floatAdd(parseFloat($('.mmcLoopTotal').attr('data-money')), parseFloat(prize)));

                num = String(num);
                var i = num.length;
                for (i; i < 13; i++) {
                  num = '0' + num;
                }
                num = num.split('');
                $('#mmc_loop_box .m em').each(function () {
                  $(arguments[1]).html(num[arguments[0]]);
                })
                $('#mmc_loop_box .m').attr('data-prize', num.join(''));
                // 投中更新已中奖次数
                $(".mmcLoopDone").html(parseInt($(".mmcLoopDone").html(), 10) + 1);
                $('.mmcLoopDone').attr('data-time', Q.floatAdd(parseInt($('.mmcLoopDone').attr('data-time')), 1));
              }

              // 连投次数等于总次数 不继续
              if (parseInt($(".mmcLoopNow").html(), 10) === t) {
                $(".btn-mmc-loop").addClass('mmc-loop-cancel').html('取消').attr('data-type', 2);
                $('.kjjg .moreTimes').show();
                $(".mmcLoopNow").parent('span').hide();
                $("#mmcLoopPrize").parent('span').hide();
                $(".kjjg h4").html('开奖结束');
                $(".kjjg .mmckjcs").html('累计开奖次数：');
                $(".kjjg .mmczjcs").html('累计中奖次数：');
                $(".kjjg .mmczjje").html('累计中奖金额：');
                $(".kjjg ul li").eq(0).find('em').addClass('mmcTotalTime').html($('.mmc_list li').length);
                $(".mmcLoopDone").html(parseInt($('.mmcLoopDone').attr('data-time')));
                $('.mmcLoopTotal').html(parseFloat($('.mmcLoopTotal').attr('data-money')));
                me.isContinue = false;
                clearTimeout(me.mmcTimeout);
              }

              // 用户停止 不继续
              if (isStopMMC !== 1) {
                me.isContinue = false;
                clearTimeout(me.mmcTimeout);
              }

              // 中奖即停
              if (prize > 0 && isPrizeStop) {
                $(".btn-mmc-loop").addClass('mmc-loop-cancel').html('取消').attr('data-type', 2);
                $('.kjjg .moreTimes').show();
                $("#mmcLoopPrize").html($(".mmcLoopNow").html());
                $("#mmcLoopMoney").html(prize);
                $(".kjjg h4").html('开奖结束');
                $(".kjjg .mmckjcs").html('累计开奖次数：');
                $(".kjjg .mmczjcs").html('累计中奖次数：');
                $(".kjjg .mmczjje").html('累计中奖金额：');

                var prizeAmount = parseFloat((parseFloat($("#mmcLoopAmount").html(), 10) + prize).toFixed(4));
                $("#mmcLoopAmount").html(prizeAmount);
                $(".kjjg ul li").eq(0).find('em').addClass('mmcTotalTime').html($('.mmc_list li').length);
                $(".mmcLoopDone").html(parseInt($('.mmcLoopDone').attr('data-time')));
                $('.mmcLoopTotal').html(parseFloat($('.mmcLoopTotal').attr('data-money')));
                me.isContinue = false;
                clearTimeout(me.mmcTimeout);
              } else if (prize > 0) {
                $("#mmcLoopPrize").html($(".mmcLoopNow").html());
                $("#mmcLoopMoney").html(prize);

                var prizeAmount = parseFloat((parseFloat($("#mmcLoopAmount").html(), 10) + prize).toFixed(4));
                $("#mmcLoopAmount").html(prizeAmount);
              }

              me.getUserMoney();
              me.updateRecency();
              me.updateIssueInfo(1);

              if (me.isContinue) {
                me.mmcTimeout = setTimeout(() => {
                  me.addOrderMMCLoopApi(obj, btn, txt, tip, t, priceStop);
                }, 2000);
              }
            });
          } else if (d.code === 4001) {
            var tip1 = dialog({
              title: '余额不足',
              fixed: true,
              content: '<p>对不起，您的余额不足，为保证您可以顺利购彩</p><p>建议您充值后再进行购彩。</p><a href="' + User.app + '/pay/rechargeIndexView" target="_blank" class="btn-recharge">立刻充值</a>',
              onshow: function () {
                $(".btn-mmc-loop").html('继续').attr('data-type', 2);
                $(".mmc-loop .ui-dialog-close").css('visibility', 'visible');
                $(this.node).find('.btn-recharge').unbind('click').click(function (evt) {
                  tip1.close().remove();
                });
              }
            }).showModal();
          } else if (d.msg) {
            tip.content(d.msg);

            if ($('.quickSubmit-orders').length > 0) {
              me.resetOrders();
            }
            tip.show(btn[0]);
            setTimeout(() => tip.close(), 1000);
          }
        }
      });
    },
    renderCodes: function (t, n, m) {
      var me = this;
      var tpl = '';
      var txt = ["大", "小", "单", "双", "和", "龙", "虎", "和", "豹子", "顺子", "对子", "半顺", "杂六", "四条", "葫芦", "顺子", "三条", "两对", "一对", "单牌", "庄", "闲", "和", "庄对", "闲对", "S6"];
      var txt_wxdx = ["全大", "4大1小", "3大2小", "2大3小", "1大4小", "全小"];
      var txt_wxdxCode = ["5大0小", "4大1小", "3大2小", "2大3小", "1大4小", "0大5小"];
      var txt_sxdx = ["全大", "3大1小", "2大2小", "1大3小", "全小"];
      var txt_sxdxCode = ["4大0小", "3大1小", "2大2小", "1大3小", "0大4小"];
      var txt_smdx = ["全大", "2大1小", "1大2小", "全小"];
      var txt_smdxCode = ["3大0小", "2大1小", "1大2小", "0大3小"];
      var txt_wxds = ["全单", "4单1双", "3单2双", "2单3双", "1单4双", "全双"];
      var txt_wxdsCode = ["5单0双", "4单1双", "3单2双", "2单3双", "1单4双", "0单5双"];
      var txt_11y_dds = ["5单0双", "4单1双", "3单2双", "2单3双", "1单4双", "0单5双"];
      var txt_sxds = ["全单", "3单1双", "2单2双", "1单3双", "全双"];
      var txt_sxdsCode = ["4单0双", "3单1双", "2单2双", "1单3双", "0单4双"];
      var txt_smds = ["全单", "2单1双", "1单2双", "全双"];
      var txt_smdsCode = ["3单0双", "2单1双", "1单2双", "0单3双"];
      var m0 = ['dxds', 'dx', 'ds', 'lh', 'lhh', 'xt'];
      var txt_nn = ["牛大", "牛小", "牛单", "牛双", "无牛", "牛1", "牛2", "牛3", "牛4", "牛5", "牛6", "牛7", "牛8", "牛9", "牛牛"];
      var txt_hzdxds = ["大", "小", "单", "双", "大单", "大双", "小单", "小双"];
      var method = m;
      var p = 0;
      n = n.split('-');
      m = m.split('_');

      function qwOdds(x) {
        if (arguments[1]) {
          x = x + '_' + arguments[1];
        }
        var obj = me.odds[me.lt][x];
        var val = obj.odds + obj.x * obj.point;
        var mode = 0.5;
        return `1中${keepDecimal(val*mode, 3)}`
      }

      if(me.cls == 'ssc' && m[1] == 'lhh') {
        var pos = m[2].split('');
        var posObj = ['w', 'q', 'b', 's', 'g'];
        var tel2 = null;
        var posTpl = Array(5).fill(0).map((value, index) => {
          if (pos.indexOf(posObj[index]) !== -1) {
            return `<b class="on"></b>`
          } else {
            return `<b></b>`
          }
        }).join('');
      }

      if (me.cls == 'k3' && m[0] != 'hz') {
        return me.renderK3Codes(t, n, m);
      } else {
        for (var i = parseInt(n[0]); i <= parseInt(n[1]); i++) {
          if (m0.indexOf(m[1]) != -1) {
            if (me.cls === 'ssc') {
              if (m[1] == 'dxds') {
                tpl += `<i data-value="${txt[i]}"><span class="qw-name qw-name-dxds"></span><span class="js-qw-odds qw-odds">${qwOdds(method)}</span></i>`;
              } else if (m[1] == 'lhh') {
                tpl += `<i data-value="${txt[i]}"><span class="qw-num qw-num-lhh"><span class="lhh-pos">${posTpl}</span><span class="qw-name qw-name-lhh qw-name-lhh-${Q.SSCLHH[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.SSCLHH[p])}</span></span></i>`;
              } else if (m[1] == 'xt') {
                tpl += `<i data-value="${txt[i]}"><span class="qw-name qw-name-xt qw-name-xt-${Q.SSCXT[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.SSCXT[p])}</span></i>`;
              }
            } else {
              if (txt[i].length === 2) {
                tpl += '<i class="twoText">' + txt[i] + '</i>';
              } else {
                tpl += '<i class="">' + txt[i] + '</i>';
              }
            }

          } else if (m[1] === "hzdxds") { //和值大小单双
            if (txt_hzdxds[i].length === 2) {
              if (m[2] === "5xhz") {
                tpl += `<i class="twoText" data-value="${txt_hzdxds[i]}"><span class="qw-name qw-name-hzdxds qw-name-hzdxds-${Q.SSC5XHZ[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.SSC5XHZ[p])}</span></i>`;
              } else {
                if (i > 3) {
                  break;
                }
                tpl += `<i class="twoText" data-value="${txt_hzdxds[i]}"><span class="qw-name qw-name-hzdxds"></span><span class="js-qw-odds qw-odds">${qwOdds(method)}</span></i>`;
              }
            } else {
              if (m[2] === "5xhz") {
                tpl += `<i class="twoText" data-value="${txt_hzdxds[i]}"><span class="qw-name qw-name-hzdxds qw-name-hzdxds-${Q.SSC5XHZ[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.SSC5XHZ[p])}</span></i>`;
              } else {
                if (i > 3) {
                  break;
                }
                tpl += `<i class="twoText" data-value="${txt_hzdxds[i]}"><span class="qw-name qw-name-hzdxds"></span><span class="js-qw-odds qw-odds">${qwOdds(method)}</span></i>`;
              }
            }
          } else if (m[1] == 'bjl') { //百家乐
            tpl += `<i class="twoText" data-value="${txt[i]}"><span class="qw-name qw-name-bjl qw-name-bjl-${Q.SSCBJL[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.SSCBJL[p])}</span></i>`;
          } else if (m[1] == 'sh') { //梭哈
            tpl += `<i class="twoText" data-value="${txt[i]}"><span class="qw-name qw-name-sh qw-name-sh-${Q.SSCWXXT[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.SSCWXXT[p])}</span></i>`;
          } else if (m[1] == 'dxgs') { //大小个数
            if (m[2] == 'wx') {
              tpl += `<i data-value="${txt_wxdxCode[i]}"><span class="qw-name qw-name-dxgs qw-name-dxgs-${Q.PKDXDS.WX[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.PKDXDS.WX[p])}</span></i>`;
            } else if (m[2] == 'sx') {
              tpl += `<i data-value="${txt_sxdxCode[i]}"><span class="qw-name qw-name-dxgs qw-name-dxgs-${Q.PKDXDS.SX[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.PKDXDS.SX[p])}</span></i>`;
            } else {
              tpl += `<i data-value="${txt_smdxCode[i]}"><span class="qw-name qw-name-dxgs qw-name-dxgs-${Q.PKDXDS.SM[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.PKDXDS.SM[p])}</span></i>`;
            }
          } else if (m[1] == 'dsgs') { //单双个数
            if (m[2] == 'wx') {
              tpl += `<i data-value="${txt_wxdsCode[i]}"><span class="qw-name qw-name-dsgs qw-name-dsgs-${Q.PKDXDS.WX[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.PKDXDS.WX[p])}</span></i>`;
            } else if (m[2] == 'sx') {
              tpl += `<i data-value="${txt_sxdsCode[i]}"><span class="qw-name qw-name-dsgs qw-name-dsgs-${Q.PKDXDS.SX[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.PKDXDS.SX[p])}</span></i>`;
            } else {
              tpl += `<i data-value="${txt_smdsCode[i]}"><span class="qw-name qw-name-dsgs qw-name-dsgs-${Q.PKDXDS.SM[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.PKDXDS.SM[p])}</span></i>`;
            }
          } else if (m[1] == 'nn') {
            tpl += `<i class="twoText" data-value="${txt_nn[i]}"><span class="qw-num qw-num-nn"><span class="qw-name qw-name-nn qw-name-nn-${Q.SSCNN[p]}"></span><span class="js-qw-odds qw-odds">${qwOdds(method, Q.SSCNN[p])}</span></span></i>`;
          } else {
            if ((me.cls === "kl12" || me.cls === "11y" || me.cls === "kl8" || (me.cls === "pk10" && m[0] != "hz")) && (i < 10)) {
              if (me.cls === "11y" && m[2] === 'dds') {//11选5定单双玩法
                tpl += '<i class="fourText" data-value="' + txt_11y_dds[i] + '">' + txt_11y_dds[i] + '</i>';
              } else {
                tpl += '<i>0' + i + '</i>';
              }
            } else {
              tpl += '<i>' + i + '</i>';
            }
          }
          p++;
        }
        //北京pk10 冠亚和值-大小单双-和
        if (me.cls == 'pk10' && n.length == '3' && n[2] == '4') {
          tpl += '<i>' + txt[4] + '</i>';
        }
        /*if (me.cls == 'ssc' && n.length == '3' && n[2] == '7') {
          tpl += '<i>' + txt[7] + '</i>';
        }*/
      }

      return tpl;
    },
    //渲染江苏快三骰子
    renderK3Codes: function (t, n, m) {
      var me = this;
      var tpl = '';
      let isShunzi = function (arr) { //判断是不是顺子，最小值是1的情况
        return arr.every((item, index) => index === 0 || (Number(item) + 10 - 1) % 10 == arr[index - 1]);
      };

      if (m[2] == "th3dx") { //三同号单选
        for (var i = parseInt(n[0]); i <= parseInt(n[1]); i++) {
          tpl += '<i class="diceNum threeDice" data-value="' + i + i + i + '">' +
            '<b class="dice' + i + '"></b>' +
            '<b class="dice' + i + '"></b>' +
            '<b class="dice' + i + '"></b>' +
            '</i>';
        }
      } else if (m[2] == "th3tx") { //三同号通选
        tpl += '<i class="diceNum dice18" data-value="111,222,333,444,555,666">' +
          '<em class="diceNum threeDice"><b class="dice1"></b><b class="dice1"></b><b class="dice1"></b></em>' +
          '<em class="diceNum threeDice"><b class="dice2"></b><b class="dice2"></b><b class="dice2"></b></em>' +
          '<em class="diceNum threeDice"><b class="dice3"></b><b class="dice3"></b><b class="dice3"></b></em>' +
          '<em class="diceNum threeDice"><b class="dice4"></b><b class="dice4"></b><b class="dice4"></b></em>' +
          '<em class="diceNum threeDice"><b class="dice5"></b><b class="dice5"></b><b class="dice5"></b></em>' +
          '<em class="diceNum threeDice"><b class="dice6"></b><b class="dice6"></b><b class="dice6"></b></em>' +
          '</i>';
      } else if (m[1] == "th2dx") {
        if (m[2] == "fs") {
          for (var i = parseInt(n[0]); i <= parseInt(n[1]); i++) {
            if (t == 0) {
              tpl += '<i class="diceNum" data-value="' + i + i + '">' +
                '<b class="dice' + i + '"></b>' +
                '<b class="dice' + i + '"></b>' +
                '</i>';
            } else {
              tpl += '<i class="diceNum" data-value="' + i + '">' +
                '<b class="dice' + i + '"></b>' +
                '</i>';
            }
          }
        } else if (m[2] == "ds") {
          var arr0 = ["11", "22", "33", "44", "55", "66"];
          var arr1 = ["1", "2", "3", "4", "5", "6"];
          for (var i = 0; i < arr0.length; i++) {
            for (var j = 0; j < arr1.length; j++) {
              if (String(arr0[i]).indexOf(arr1[j]) == -1) {
                var item = arr0[i] + arr1[j];
                tpl += '<i class="diceNum threeDiceHorizontal" data-value="' + item + '">' +
                  '<b class="dice' + arr0[i].split('')[0] + '"></b>' +
                  '<b class="dice' + arr0[i].split('')[1] + '"></b>' +
                  '<b class="dice' + arr1[j] + '"></b>' +
                  '</i>';
              }
            }
          }
        }
      }
      if (m[1] == "th2fx") { //二同号复选
        for (var i = parseInt(n[0]); i <= parseInt(n[1]); i++) {
          tpl += '<i class="diceNum twoDice" data-value="' + i + i + '">' +
            '<b class="dice' + i + '"></b>' +
            '<b class="dice' + i + '"></b>' +
            '</i>';
        }
      }
      if (m[0] == "bth3") { //三不同号
        if (m[1] == "bth3" && m[2] == "fs") { //复式
          for (var i = parseInt(n[0]); i <= parseInt(n[1]); i++) {
            tpl += '<i class="diceNum" data-value="' + i + '">' +
              '<b class="dice' + i + '"></b>' +
              '</i>';
          }
        } else if (m[1] == "bth3" && m[2] == "ds") { //单式
          var arr = ["1", "2", "3", "4", "5", "6"];
          for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
              for (var k = j + 1; k < arr.length; k++) {
                tpl += '<i class="diceNum threeDiceHorizontal" data-value="' + arr[i] + arr[j] + arr[k] + '">' +
                  '<b class="dice' + arr[i] + '"></b>' +
                  '<b class="dice' + arr[j] + '"></b>' +
                  '<b class="dice' + arr[k] + '"></b>' +
                  '</i>';
              }

            }
          }
        } else if (m[1] == "bs") {

          let bsdxArr = Q.chooseMath([1, 2, 3, 4, 5, 6], 3).filter(item => !isShunzi(item)).filter(itemArr => { //选出半顺的组合
            return itemArr.some((item, index, arr) => item + 1 === arr[index + 1]);
          });
          if (m[2] == "dx") { //半顺单选
            for (let i = 0; i < bsdxArr.length; i++) {
              tpl += `<i class="diceNum threeDiceHorizontal" data-value="${''+bsdxArr[i][0]+bsdxArr[i][1]+bsdxArr[i][2]}">
            <b class="dice${bsdxArr[i][0]}"></b>
            <b class="dice${bsdxArr[i][1]}"></b>
            <b class="dice${bsdxArr[i][2]}"></b>
            </i>`;
              if ((i + 1) % 4 === 0 && i !== 11) { //逢4个换行
                tpl += '<br>';
              }
            }
          } else if (m[2] == "tx") { //半顺通选
            let dataValue = bsdxArr.reduce((a, b) => a.toString() + '|' + b.toString());
            tpl += `<i class="diceNum dice5" data-value="${dataValue}">
          ${bsdxArr.map(arr=>{
            return  `<em class="diceNum threeDiceHorizontal"><b class="dice${arr[0]}"></b><b class="dice${arr[1]}"></b><b class="dice${arr[2]}"></b></em>`
          }).join('')}
          </i>`;
          }
        } else if (m[1] == "z6") {
          let z6dxArr = Q.chooseMath([1, 2, 3, 4, 5, 6], 3).filter(item => !isShunzi(item)).filter(itemArr => { //选出杂六的组合
            return itemArr.every((item, index, arr) => item + 1 !== arr[index + 1]);
          });
          if (m[2] === 'dx') { //杂六单选
            for (let i = 0; i < z6dxArr.length; i++) {
              tpl += `<i class="diceNum threeDiceHorizontal" data-value="${''+z6dxArr[i][0]+z6dxArr[i][1]+z6dxArr[i][2]}">
            <b class="dice${z6dxArr[i][0]}"></b>
            <b class="dice${z6dxArr[i][1]}"></b>
            <b class="dice${z6dxArr[i][2]}"></b>
            </i>`;
            }
          } else if (m[2] === 'tx') { //杂六通选
            let dataValue = z6dxArr.reduce((a, b) => a.toString() + '|' + b.toString());
            tpl += `<i class="diceNum dice5" data-value="${dataValue}">
          ${z6dxArr.map(arr=>{return  `<em class="diceNum threeDiceHorizontal"><b class="dice${arr[0]}"></b><b class="dice${arr[1]}"></b><b class="dice${arr[2]}"></b></em>`}).join('')}
          </i>`;
          }
        } else if (m[1] == "lh3") {
          if (m[2] === "tx") { //三连号通选
            tpl += '<i class="diceNum dice5" data-value="1,2,3|2,3,4|3,4,5|4,5,6">' +
              '<em class="diceNum threeDiceHorizontal"><b class="dice1"></b><b class="dice2"></b><b class="dice3"></b></em>' +
              '<em class="diceNum threeDiceHorizontal"><b class="dice2"></b><b class="dice3"></b><b class="dice4"></b></em>' +
              '<em class="diceNum threeDiceHorizontal"><b class="dice3"></b><b class="dice4"></b><b class="dice5"></b></em>' +
              '<em class="diceNum threeDiceHorizontal"><b class="dice4"></b><b class="dice5"></b><b class="dice6"></b></em>' +
              '</i>';
          } else if (m[2] === "dx") { //三连号单选
            for (var i = parseInt(n[0]); i <= parseInt(n[1]); i++) {
              tpl += `<i class="diceNum threeDiceHorizontal" data-value="${i}${i+1}${i+2}">
            <b class="dice${i}"></b>
            <b class="dice${i+1}"></b>
            <b class="dice${i+2}"></b>
            </i>`;
            }
          }
        }
      } else if (m[0] == "bth2") { //二不同号
        if (m[2] == "fs") { //复式
          for (var i = parseInt(n[0]); i <= parseInt(n[1]); i++) {
            tpl += '<i class="diceNum" data-value="' + i + '">' +
              '<b class="dice' + i + '"></b>' +
              '</i>';
          }
        } else if (m[2] == "ds") { //单式
          var arr = ["1", "2", "3", "4", "5", "6"];
          for (var i = 0; i < arr.length; i++) {
            for (var j = i + 1; j < arr.length; j++) {
              tpl += '<i class="diceNum threeDice1" data-value="' + arr[i] + arr[j] + '">' +
                '<b class="dice' + arr[i] + '"></b>' +
                '<b class="dice' + arr[j] + '"></b>' +
                '</i>';
            }
          }
        }
      } else if (m[0] == "dxds") { //大小单双
        var tpl = '';
        var txt = ["大", "小", "单", "双", "和", "龙", "虎", "和", "豹子", "顺子", "对子", "半顺", "杂六", "四条", "葫芦", "顺子", "三条", "两对", "一对", "单牌"];
        var txt_wxdx = ["全大", "4大1小", "3大2小", "2大3小", "1大4小", "全小"];
        var txt_wxdxCode = ["5大0小", "4大1小", "3大2小", "2大3小", "1大4小", "0大5小"];
        var txt_sxdx = ["全大", "3大1小", "2大2小", "1大3小", "全小"];
        var txt_sxdxCode = ["4大0小", "3大1小", "2大2小", "1大3小", "0大4小"];
        var txt_smdx = ["全大", "2大1小", "1大2小", "全小"];
        var txt_smdxCode = ["3大0小", "2大1小", "1大2小", "0大3小"];
        var txt_wxds = ["全单", "4单1双", "3单2双", "2单3双", "1单4双", "全双"];
        var txt_wxdsCode = ["5单0双", "4单1双", "3单2双", "2单3双", "1单4双", "0单5双"];
        var txt_sxds = ["全单", "3单1双", "2单2双", "1单3双", "全双"];
        var txt_sxdsCode = ["4单0双", "3单1双", "2单2双", "1单3双", "0单4双"];
        var txt_smds = ["全单", "2单1双", "1单2双", "全双"];
        var txt_smdsCode = ["3单0双", "2单1双", "1单2双", "0单3双"];
        var m0 = ['hzdxds', 'dxds', 'dx', 'ds', 'lh', 'lhh', 'xt'];
        for (var i = parseInt(n[0]); i <= parseInt(n[1]); i++) {
          if (m0.indexOf(m[1]) != -1) {
            if (txt[i].length == 2) {
              tpl += '<i class="twoText">' + txt[i] + '</i>';
            } else {
              tpl += '<i>' + txt[i] + '</i>';
            }
          } else if (m[1] == 'dxgs') {
            if (m[2] == 'wx') {
              tpl += '<i class="fourText" data-value="' + txt_wxdxCode[i] + '">' + txt_wxdx[i] + '</i>';
            } else if (m[2] == 'sx') {
              tpl += '<i class="fourText" data-value="' + txt_sxdxCode[i] + '">' + txt_sxdx[i] + '</i>';
            } else {
              tpl += '<i class="fourText" data-value="' + txt_smdxCode[i] + '">' + txt_smdx[i] + '</i>';
            }
          } else if (m[1] == 'dsgs') {
            if (m[2] == 'wx') {
              tpl += '<i class="fourText" data-value="' + txt_wxdsCode[i] + '">' + txt_wxds[i] + '</i>';
            } else if (m[2] == 'sx') {
              tpl += '<i class="fourText" data-value="' + txt_sxdsCode[i] + '">' + txt_sxds[i] + '</i>';
            } else {
              tpl += '<i class="fourText" data-value="' + txt_smdsCode[i] + '">' + txt_smds[i] + '</i>';
            }
          } else {
            if ((me.cls === "kl12" || me.cls === "11y" || me.cls === "kl8" || (me.cls === "pk10" && m[0] != "hz")) && (i < 10)) {
              tpl += '<i>0' + i + '</i>';
            } else {
              tpl += '<i>' + i + '</i>';
            }
          }
        }
      } else if (m[2] === "cygh") { //猜一个号
        for (var i = parseInt(n[0]); i <= parseInt(n[1]); i++) {
          tpl += '<i class="diceNum" data-value="' + i + '">' +
            '<b class="dice' + i + '"></b>' +
            '</i>';
        }
      }
      return tpl;
    },
    renderBtns: function (b) {
      var me = this;
      var tpl = '';
      var arr = [];
      var filter = [];
      if (b === "all") {
        arr = ["全", "大", "小", "奇", "偶", "清"];
        filter = ["i", ":gt", ":lt", ":odd", ":even", ""];
        // 如果是11选5 号码01起始 奇偶调换
        if (me.cls === "kl12" || me.cls === "11y" || me.cls === "pk10" || me.lt === 'HNKY481') {
          filter[3] = ":even";
          filter[4] = ":odd";
        }
      } else if (b === "two") {
        arr = ["全", "清"];
        filter = ["i", ""];
      } else {
        return "";
      }
      for (var i = 0; i < arr.length; i++) {
        tpl += '<button data-filter="' + filter[i] + '">' + arr[i] + '</button>';
      }
      tpl = '<div class="fr numBtns">' + tpl + "</div>"
      return tpl;
    },
    renderBox: function (tip) {
      return '<div class="box"><ul class="clearfix"></ul><textarea class="editable">' + tip + '</textarea></div>' +
        '<div class="fr box-input"><input type="button" class="upload" value="">' +
        '<input type="button" class="clear disabled" value="清空"></div>';
    },

    printOrder: function (p) {
      Api.getRecency(p, function (d) {
        var order = JSON.parse(p.order);
        var len = order.length;
        d = d.result;
        var istrace = d[0].istrace;
        var total = 0;
        if (istrace == 0) {
          var lottery_content = '<div class="PrintArea area1 all"><h2>彩票投注单</h2><ul><li><span>下单时间:</span><em>' + Q.convertStamp(d[0].orderTime, Q.formatOne) + '</em></li>' +
            '<li><span>投注彩种:</span><em>' + Q.nameLottery(d[0].lottery) + '</em></li>' +
            '<li class="lottime"><span>投注期号:</span><em>' + d[0].issue + '</em></li>';
          for (var i = 0; i <= len - 1; i++) {
            lottery_content += '<li class="lotbh"><span>注单编号:</span><em class="smallNum">' + d[i].orderId + '</em></li>' +
              '<li><span>投注玩法:</span><em>' + Q.getMethodName(Q.getLottryCode(d[i].method), d[i].lottery) + '</em></li>' +
              '<li><span>投注内容:</span><em class="printContent">' + Q.descFormat(d[i].code, d[i].method) + '</em></li>' +
              '<li><span>投注注数:</span><em>' + d[i].nums + '</em></li>' +
              '<li class="lotje"><span>投注金额:</span><em>' + d[i].amount + '元</em></li>';
            total += d[i].amount;
          };

          lottery_content += '<li class="lotmon"><span>总金额:</span><em>' + parseFloat(total.toFixed(4)) + '元</em></li></ul></div><div class="button b1">确认打印</div>';

          var preview = dialog({
            title: '彩票投注单',
            skin: 'lottery_preview',
            width: 160,
            content: lottery_content
          }).showModal();

          var mode = 'iframe';
          var extraCss = '';
          var print = 'div.PrintArea.area1';
          var keepAttr = ['class', 'id', 'style'];
          var headElements = '<meta charset="utf-8" />,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
          var options = {
            mode: mode,
            popClose: false,
            extraCss: extraCss,
            retainAttr: keepAttr,
            extraHead: headElements
          };
          $(print).printArea(options);
          $('.lottery_preview .ui-dialog-close').trigger('click');

        } else if (istrace == 1) {
          var trace = JSON.parse(p.trace);
          var trace_content = '<div class="PrintArea area2"><h2>彩票追号投注单</h2><ul><li><span>下单时间:</span><em>' + Q.convertStamp(d[0].orderTime, Q.formatOne) + '</em></li>' +
            '<li><span>投注彩种:</span><em>' + Q.nameLottery(d[0].lottery) + '</em></li>' +
            '<li><span>开始期号:</span><em>' + d[0].issue + '</em></li>' +
            '<li><span>追号期数:</span><em>' + trace.totalCount + '</em></li>' +
            '<li class="lottime"><span>追号模式:</span><em>' + Q.traceType(trace.mode) + '</em></li>';
          for (var i = 0; i <= len - 1; i++) {
            trace_content += '<li><span>追号编号:</span><em class="smallNum">' + d[i].traceId + '</em></li>' +
              '<li><span>投注玩法:</span><em>' + Q.getMethodName(Q.getLottryCode(d[i].method), d[i].lottery) + '</em></li>' +
              '<li><span>追号内容:</span><em class="printContent">' + Q.descFormat(d[i].code, d[i].method) + '</em></li>' +
              '<li><span>投注金额:</span><em>' + d[i].traceTotalPrice + '元</em></li>' +
              '<ul class="trace_each"><li><span>奖期</span><em>金额(元)</em></li>';
            total += d[i].traceTotalPrice;
            var obj = trace.counts;
            $.each(obj, function (m, n) {
              trace_content += '<li><span>' + m + '</span><em>' + obj[m] * d[i].amount + '</em></li>';
            });
            trace_content += '</ul>';
          };
          trace_content += '<li class="lotmon"><span>总金额:</span><em>' + parseFloat(total.toFixed(4)) + '元</em></li></ul></div><div class="button b1">确认打印</div>';

          var preview_trace = dialog({
            title: '彩票追号投注单',
            width: 160,
            skin: 'trace_preview',
            content: trace_content
          }).showModal();

          var mode = 'iframe';
          var extraCss = '';
          var print = 'div.PrintArea.area2';
          var keepAttr = ['class', 'id', 'style'];
          var headElements = '<meta charset="utf-8" />,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
          var options = {
            mode: mode,
            popClose: false,
            extraCss: extraCss,
            retainAttr: keepAttr,
            extraHead: headElements
          };
          $(print).printArea(options);
          $('.trace_preview .ui-dialog-close').trigger('click');

        }
      })
    },
    timeRecord_11ydm: {}, //记录11选5任选胆拖胆码选中时间时间
    timeRecord_11ytm: {}, //记录时间
    numHandler: function (_el, evt, t) {
      evt.preventDefault();
      evt.stopPropagation();
      var me = this;
      var _this = evt.target;
      var elem = evt.delegateTarget;

      if (_this.nodeName === 'I') {
        // 处理北京快乐8任选二以上只能选择8个号
        var m = me.method.split('_');
        $(_this).toggleClass('on');
        if (m[1] === 'rxdt') {
          if ($(_el).find('.number dl:nth-child(1) i.on').length < parseInt(m[2]) + 1 && $(_this).parent().parent().index() == 0) {
            $(_this).hasClass('on') && (me.timeRecord_11ydm[$(_this).text()] = {
              time: new Date().getTime(),
              el: $(_this),
            }); //选中号码记录时间
            (!$(_this).hasClass('on')) && delete me.timeRecord_11ydm[$(_this).text()]; //取消选中的号码不记录时间

          }
          //最多记录11个选中时间，双击取消时同时记录时间也取消
          if ($(_el).find('.number dl:nth-child(2) i.on').length < 11 + 1 && $(_this).parent().parent().index() == 1) {
            $(_this).hasClass('on') && (me.timeRecord_11ytm[$(_this).text()] = {
              time: new Date().getTime(),
              el: $(_this),
            });
            (!$(_this).hasClass('on')) && delete me.timeRecord_11ytm[$(_this).text()];
          }

          //11选5任选胆拖胆码限制选号个数,拖码可选择2-10个
          if (m[1] === 'rxdt' && $(_el).find('.number dl:nth-child(1) i.on').length > (parseInt(m[2]) - 1) && $(_this).hasClass('on')) {

            //超过选择个数后再点击别的号码最先点击的号码取消选中
            let minKey = Object.keys(me.timeRecord_11ydm).sort((a, b) => me.timeRecord_11ydm[a].time - me.timeRecord_11ydm[b].time)[0];
            let minValue = Object.values(me.timeRecord_11ydm).sort((a, b) => (a.time - b.time))[0];
            $(_this).hasClass('on') && minValue.el.removeClass('on') && delete me.timeRecord_11ydm[minKey];
          }
          if (m[1] === 'rxdt' && $(_el).find('.number dl:nth-child(2) i.on').length > 10 && $(_this).hasClass('on')) {
            //超过选择个数后再点击别的号码最先点击的号码取消选中
            let minKey = Object.keys(me.timeRecord_11ytm).sort((a, b) => me.timeRecord_11ytm[a].time - me.timeRecord_11ytm[b].time)[0];
            let minValue = Object.values(me.timeRecord_11ytm).sort((a, b) => (a.time - b.time))[0];
            $(_this).hasClass('on') && minValue.el.removeClass('on') && delete me.timeRecord_11ytm[minKey];
          }

          //胆拖 和 拖码 中不能同时选中相同的号码：选中 胆码中的 某个号码时， 需要将 拖码中对应的号码 设置为 未选中状态， 反之亦然。
          var arr = []; //将选中号码放入数组[[胆码],[拖码]]
          $(elem).children('dl').each(function (i, el) {
            if ($(el).find("i.on").length > 0) {
              var a1 = [];
              $(el).find("i.on").each(function (j, el) {
                a1.push($(el).html());
              });
              arr.push(a1);
            } else {
              arr.push([]);
            }
          });
          var intersection = Math.intersection(arr[0], arr[1]); //胆码和拖码交集([1, 2, 3], [3, 4, 5]) →  [3]
          if (intersection.length > 0) {
            $(elem).find('dl').each(function (key, value) {
              $(this).find('dd i.on').each(function (index, item) {
                if (intersection.find(item => item == $(this).text())) {
                  if ($(_this).parent().parent().index() == 0) { //等于0表示点击的是胆码选号
                    $(this).removeClass('on') && delete me.timeRecord_11ytm[$(this).text()] && $(_this).addClass('on'); //胆码(拖码)点击目标选中，与其对应拖码(胆码)相同数字自动不选中
                  } else { //等于1的情况表示点击的是拖码选号
                    $(this).removeClass('on') && delete me.timeRecord_11ydm[$(this).text()] && $(_this).addClass('on');
                  }
                }
              });
            });
          }
        }

        //江苏快3 三同号通选 i 太大
        if (me.cls == "k3" && (me.method == 'th3_th3_th3dx' || me.method == 'bth3_lh3_tx')) {} else {
          $(_this).removeClass('ball').addClass('ball').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('ball');
          });
        }

        // 拆单的情况每个选号重新计算赔率
        if ((me.cls === 'pk10' && $.inArray(me.method, Q.PkOddsArr) !== -1) ||
          (me.cls === 'ssc' && $.inArray(me.method, Q.SSCOddsArr) !== -1) ||
          (me.cls === 'k3' && $.inArray(me.method, Q.K3OddsArr) !== -1) ||
          (me.cls === '3d' && $.inArray(me.method, Q.SDOddsArr) !== -1) ||
          (me.cls === '11y' && $.inArray(me.method, Q.y11OddsArr) !== -1)) {
          me.updateOdds();
        }
        //时时彩包胆玩法限制只能选1个号
        if (me.cls === 'ssc' && /bd$/.test(m[2])) {
          $(_this).siblings('i.on').removeClass('on');
        }
        //定位胆所有位置
        if ($(_this).parents("dl").attr('rel') === 'selectAllNum') {
          var _thisIndex = $(_this).index();
          $(elem).children('dl[rel="selectNum"]').each(function () {
            if ($(_this).hasClass('on')) {
              $(arguments[1]).find('i').eq(_thisIndex).addClass('on');
            } else {
              $(arguments[1]).find('i').eq(_thisIndex).removeClass('on');
            }
          });
        }
        // 计算注数、金额  _el为#lottery
        me.calcNum(_el, evt);
      } else if (_this.nodeName === "B" || _this.nodeName === "EM") {
        var diceI = $(_this).closest('i');
        if (diceI.hasClass("diceNum")) {
          diceI.trigger('click');
        }
        if ($(_this).hasClass('close')) {
          $(_this).parent("li").fadeOut('slow', function () {
            $(_this).parent("li").remove();
            me.calcSingleNum(_el, evt, t);
          });
        }
      } else if (_this.nodeName === "SPAN") {
        $(_this).closest('i').trigger('click');
      } else if (_this.nodeName === "BUTTON") {
        //定位胆所有位置
        if ($(_this).parents("dl").attr('rel') === 'selectAllNum') {
          var _thisBtn = $(_this).index();
          $(elem).children('dl[rel="selectNum"]').each(function () {
            $(arguments[1]).find('.numBtns button').eq(_thisBtn).click();
          });
        }

        var codes = $(_this).parents(".numBtns").prev('dd').find('i');
        var f = $(_this).data("filter");

        if (f === ":gt") {
          f += "(" + Math.floor(codes.length / 2 - 1) + ")";
        } else if (f === ":lt") {
          f += "(" + Math.floor(codes.length / 2) + ")";
        } else {
          f = f;
        }

        codes.removeClass('on').filter(f).addClass('on');

        //如果是 北京PK10 冠亚和值大小单双，前二和值，前三和值  或  时时彩的趣味龙虎和、趣味形态  ，选择的和值号码不同，赔率不同
        //江苏快3 和值
        if ((me.cls == 'pk10' && $.inArray(me.method, Q.PkOddsArr) != -1) ||
          (me.cls == 'ssc' && $.inArray(me.method, Q.SSCOddsArr) != -1) ||
          (me.cls == 'k3' && $.inArray(me.method, Q.K3OddsArr) != -1) ||
          (me.cls == '3d' && $.inArray(me.method, Q.SDOddsArr) != -1) ||
          (me.cls === '11y' && $.inArray(me.method, Q.y11OddsArr) !== -1)) {
          me.updateOdds();
        }
        // 计算注数、金额  _el为#lottery
        me.calcNum(_el, evt);
      } else if (_this.nodeName === 'LABEL') {
        var $pos = $(_this).parents('.pos');
        $(_this).toggleClass('on');

        // 单式 且非导入模式
        if ($pos.next('.box').length > 0) {
          me.calcSingleNum(_el, evt, t);
        } else {
          // 计算注数、金额  _el为#lottery
          me.calcNum(_el, evt);
        }
      } else {
        var cls = _this.className;
        if (cls === "box") {
          $(_this).find('input').focus();
        } else if (cls === "close") {
          $(_this).parent("li").fadeOut('slow', function () {
            $(_this).parent("li").remove();
            me.calcSingleNum(_el, evt, t);
          });
        } else if (cls === 'clear') {
          if ($(_this).hasClass('disabled')) {
            return;
          }
          var $box = $(_el).find('.number .box');
          if ($box.find('ul li').length > 0 || $box.find('textarea').length > 0) {
            var d = dialog({
              title: '温馨提示',
              skin: 'confirm-again',
              content: '您确定要清空当前选号码？',
              button: [{
                id: 'clear_ok',
                value: '确定',
                callback: function () {
                  $box.find('ul').empty();

                  $box.find('textarea').not('.editable').remove();
                  if ($box.find('textarea').size() == 0) {
                    $box.append('<textarea class="editable"></textarea>');
                  }
                  $box.find('textarea.editable').removeAttr('readonly').height(93).val(me.tipchs).select();
                  $box.find('ul, input').show();

                  $(_el).find('.pos label').removeClass('on');

                  me.calcSingleNum(_el, evt, t);

                  d.close().remove();
                }
              }, {
                id: 'clear_cancel',
                skin: 'cancel',
                value: '取消'
              }]
            }).showModal();
          }
        } else if (cls === 'upload') {

          if ((/rx2|rx3|rx4/i).test(me.method)) {
            var pos = $(_el).find('.pos label.on').length;
            var length = parseInt(me.method.substring(2));
            if (pos < length) {
              var e = $(_el).find('.pos label').eq(2);
              var tip = dialog({
                id: 'errornumbers',
                align: 'bottom',
                skin: 'tip pocTip',
                content: '请先选择位置',
                quickClose: true
              }).show(e[0]);
              return false;
            }
          }

          var html = '<div id="uploader"><div class="progress"><div class="progress-bar"></div></div>' +
            '<p class="tip">每注号码之间请用一个 空格[ ]、逗号[,] 或者 分号[;] 隔开</p>' +
            '<input type="text" readonly="readonly" class="fileName" placeholder="请选择您要上传的txt文件" />' +
            '<div id="filePicker">选择文件</div><div class="webuploader-upload disabled">开始上传</div>';
          var tip = dialog({
            skin: 'tip',
            align: 'top'
          });
          var d = dialog({
            title: '温馨提示',
            id: 'uploader-pop',
            fixed: true,
            skin: 'sobet upload',
            padding: 0,
            content: html,
            onshow: function () {
              var $uploader = $('#uploader');
              var $btnUpload = $uploader.find('.webuploader-upload');
              var $progress = $uploader.find('.progress');
              var uploader = new WebUploader.Uploader({
                //swf: 'scripts/Uploader.swf',
                swf: '/static/lottery/scripts/Uploader.swf',
                server: Api.geturl('uploadCode'),
                pick: '#filePicker',
                accept: {
                  title: 'Text',
                  extensions: 'txt',
                  mimeTypes: 'text/*'
                }
              });


              var setHeader = function (object, data, headers) {
                headers['Access-Control-Allow-Origin'] = '*';
                headers['Access-Control-Request-Headers'] = 'content-type';
                headers['Access-Control-Request-Method'] = 'POST';
              }
              uploader.on('uploadBeforeSend ', setHeader);

              uploader.on('fileQueued', function (file) {
                $uploader.find('.fileName').val(file.name);
                $btnUpload.removeClass('disabled');
              });
              uploader.on('uploadProgress', function (file, percentage) {
                $progress.find('.progress-bar').css('width', percentage * 100 + '%');
              });
              uploader.on('uploadSuccess', function (file, response) {
                if (response === -1) {
                  $(".loginlnk").trigger('click');
                  $btnUpload.addClass('disabled');
                  $progress.slideUp('fast');
                  $uploader.find('.fileName').val('');
                  uploader.reset();
                } else {
                  $btnUpload.addClass('disabled');
                  $progress.slideUp('fast');
                  $uploader.find('.fileName').val('');
                  d.close().remove();
                  me.handleSingleNums(_el, t, response);
                }
              });

              uploader.on('uploadError', function (file) {
                $btnUpload.addClass('disabled');
                $progress.slideUp('fast');
                $uploader.find('.fileName').val('');
                tip.content('上传出错');
                tip.show($btnUpload[0]);
                setTimeout(function () {
                  tip.close().remove();
                }, 1500);
              });

              $btnUpload.on('click', function () {
                if ($(this).hasClass('disabled')) {
                  return false;
                }
                uploader.upload();
                $btnUpload.addClass('disabled');
                $progress.slideDown('fast');
              });
            }
          }).showModal();
        } else {
          return false;
        }
      }
    },
    handleSingleNums: function (_el, t, d) {
      var me = this;
      var code = '';
      d = d.result.code;
      //[^\S]
      d = d.replace(/\s+/g, ' '); // 把空格之外的空白字符替换成空格
      d = d.replace(/[^\d][^\S]/g, ','); //将所有非数字以及非逗号统一转换为逗号
      d = d.replace(/;/g, ",");
      d = d.replace(/；/g, ",");
      d = d.replace(/，/g, ",");
      d = d.replace(/^,+|,+$/g, ''); //将字符串首位逗号去掉
      d = d.replace(/,+/g, ','); // 将连续的逗号转换为一个逗号

      var $count = $('.js-count');
      var $box = $(".js-number .box");

      var codeBox;
      var loadTip = dialog({
        fixed: true,
        skin: 'tip',
        padding: '10px 15px',
        content: '<p>正在校验选号，请稍等  . . .</p><br><p style="margin-top:10px;"><span class="ui-dialog-loading">Loading..</span></p>'
      });
      var longCacl = function () {
        var tmp = [];
        var n = 0;
        var len = 0;
        var vals;

        code = code.replace(/[^\d][^\S]/g, ','); //将所有非数字以及非逗号统一转换为逗号
        code = code.replace(/;/g, ",");
        code = code.replace(/；/g, ",");
        code = code.replace(/，/g, ",");
        code = code.replace(/^,+|,+$/g, ''); //将字符串首位逗号去掉
        code = code.replace(/,+/g, ','); // 将连续的逗号转换为一个逗号

        //code = code.replace(/　/g,',').replace(/；/g,',').replace(/，/g,',').replace(/;/g,',');

        if (code.indexOf(',') != -1) {
          vals = code.split(',');
        } else if (code.indexOf(' ') != -1) {
          vals = code.split(/\s+/);
        } else {
          vals = [];
          vals.push(code);
        }

        vals = Q.unique(vals);
        vals.sort();

        for (var i = 0; i < vals.length; i++) {
          var isRight = false;
          var val = vals[i];
          //var tmp = vals[i];
          if (Lottery.cls === 'kl12' || Lottery.cls === '11y' || Lottery.cls === 'pk10') {
            // val 010203 to ["01","02","03"]
            //var tmp = val.split(/\s+/);
            if (val.indexOf(" ") > -1 || val.indexOf(" ") > -1) {
              val = val.split(/\s+/);
            } else {
              val = val.split(/(?=(?:\d{2})+?$)/);
            }
          }
          switch (t[1]) {
            case 'zx':
              isRight = parseInt(t[2], 10) === val.length;
              break;
            case 'zux':
            case 'hh':
              // 重新排序[选号有效与顺序无关]
              val = val.split('').sort().join('');
              // 是否混合的判断条件
              var reg = new RegExp("(\\d)\\1{" + (t[2] - 1) + "}");
              isRight = val.length === parseInt(t[2], 10) && val.match(reg) === null;
              break;
            case 'zx11':
            case 'zx12':
              var _val = val.concat([]);
              // 符合长度 都大于等于1 小于等于11
              isRight = parseInt(t[2], 10) === Q.unique(val).length && Q.unique(val).length === _val.length;
              for (var k = 0; k < val.length; k++) {
                if (Lottery.cls == 'kl12') {
                  isRight = isRight && val[k].length === 2 && parseInt(val[k], 10) >= 1 && parseInt(val[k], 10) <= 12;
                } else {
                  isRight = isRight && val[k].length === 2 && parseInt(val[k], 10) >= 1 && parseInt(val[k], 10) <= 11;
                }
              }
              break;
            case 'zux11':
            case 'zux12':
            case 'rx':
              // 是否混合的判断条件
              // 两两都不相同 去重如果长度相等则两两各不相同
              var _val = val.concat([]);
              isRight = parseInt(t[2], 10) === Q.unique(val).length && Q.unique(val).length === _val.length;

              // 符合长度 都大于等于1 小于等于11
              for (var k = 0; k < val.length; k++) {
                if (Lottery.cls == 'kl12') {
                  isRight = isRight && val[k].length === 2 && parseInt(val[k], 10) >= 1 && parseInt(val[k], 10) <= 12;
                } else {
                  isRight = isRight && val[k].length === 2 && parseInt(val[k], 10) >= 1 && parseInt(val[k], 10) <= 11;
                }
              }
              // 重新排序[选号与效与顺序无关]
              val = val.sort();
              break;
            case 'pkzux':
              var valStr = val.join('||');
              // 符合长度
              isRight = parseInt(t[2], 10) === val.length;

              if (isRight) {
                //单个数字都大于等于1 小于等于10
                for (var pkzux_i = 0; pkzux_i < val.length; pkzux_i++) {
                  if (valStr.indexOf(val[pkzux_i]) == valStr.lastIndexOf(val[pkzux_i])) {
                    isRight = true;
                    if (parseInt(val[pkzux_i]) >= 1 && parseInt(val[pkzux_i]) <= 10) {
                      isRight = true;
                    } else {
                      isRight = false;
                      break;
                    }
                  } else {
                    isRight = false;
                    break;
                  }
                }
              }
              break;
            default:
              break;
          }

          // 11选5 号码中间加空格
          val = Lottery.cls === 'kl12' || Lottery.cls === '11y' || Lottery.cls === 'pk10' ? val.join(',') : val.split('').join(',');

          if (isRight) {
            tmp.push(val);
          }
        }
        // 再次去重，防止01020305 03020105 任选单式与顺序无关
        tmp = Q.unique(tmp);
        if (tmp.length > 0) {
          loadTip.close().remove();

          //$box.append('<textarea readonly="readonly">' + tmp.join('; ').replace(/,/g, '') + '</textarea>');
          $box.find('textarea.editable').attr('readonly', 'readonly').val(tmp.join('; ').replace(/,/g, ''));

          $box.find('textarea.editable').trigger('change');

          $box.find('ul').hide();
          $box.find('input').hide();
          // 计算合法注数
          n = tmp.length;
          if ($box.prev('.pos').length > 0) {
            n = n * Math.combination($box.prev('.pos').find('label.on').length, t[2]);
          }
          $count.find('.total em').html(n);
          me.calcMoney(_el);
        } else {
          loadTip.close().remove();
          $box.find('ul').show();
          $box.find('input').show();
          $count.find('.total em').html(0);
          me.calcMoney(_el);
        }
      };

      codeBox = dialog({
        title: '单式上传选号',
        id: 'code-box',
        fixed: true,
        skin: 'sobet code-box',
        width: 480,
        height: 325,
        padding: '15px',
        content: '<textarea>' + d + '</textarea><p>注：确认导入之后，选号将不可编辑</p>',
        button: [{
          id: 'cancle_ok',
          skin: 'code-box-ok',
          value: '确认导入',
          callback: function () {

            $box.find('textarea').not('.editable').remove();
            code = $(this.node).find('textarea').val();
            dialog.get('code-box').close().remove();
            loadTip.showModal();
          }
        }, {
          id: 'cancle_cancel',
          skin: 'cancel',
          value: '取消'
        }]
      }).showModal();

      loadTip.addEventListener('show', function () {
        setTimeout(function () {
          longCacl();
        }, 500);
      });
    },
    calcNum: function (_el, evt) {
      var me = this;
      var number = evt.delegateTarget;
      var count = $('.js-count')[0];
      var method = $('.js-subtab dd.on').data("type").split('_');
      method.unshift($('.js-tab').attr('data-type'));

      $(count).find('.total em').html(me.getStack(number, method));
      me.calcMoney(_el);
    },
    calcSingleNum: function (_el, evt, t) {
      var me = this;
      var count = $('.js-count')[0];
      var total = 0;

      var $pos = $('.js-number .pos');
      var $textarea = $('.js-number .box textarea');

      // 计算合法注数
      total = $(count).siblings('.number').find("ul li").length;
      if ($textarea.val() !== '') {
        total = $textarea.val().split(';').length;
      }
      if ($pos.length > 0) {
        total = total * Math.combination($pos.find('label.on').length, t[2]);
      }
      $(count).find('.total em').html(total);
      me.calcMoney(_el);
    },
    //计算注数
    getStack: function (elem, t) {
      var me = this;
      var n = 1;
      var len = 0;
      var arr = [];
      var pos = 0; // 万、千、百、十、个
      var rxNum = 0; // 任选二、三、四
      $(elem).children('dl[rel="selectNum"]').each(function (i, el) {
        if ($(el).find("i.on").length > 0) {
          var a1 = [];
          $(el).find("i.on").each(function (j, el) {
            if (me.cls === 'k3' && t[0] !== 'hz') {
              a1.push($(el).attr('data-value'));
            } else {
              a1.push($(el).html());
            }
          });
          arr.push(a1);
        } else {
          arr.push([]);
        }
      });
      // 万、千、百、十、个
      pos = $(elem).find('.pos label.on').length;
      rxNum = parseInt(t[0].charAt(t[0].length - 1));
      if (t[1] === "zx") {
        switch (t[2]) {
          case "fs": // 复式
          case "zh": // 组合
          case "hfs": // 后复式
          case "qfs": // 前复式
            var w = 0; //万位
            var q = 0; //千位
            var b = 0; //百位
            var s = 0; //十位
            var g = 0; //个位
            for (var i = 0; i < arr.length; i++) {
              var _len = arr[i].length;
              n = n * parseInt(_len, 10);
            }
            if (t[2] === 'zh') {
              n = n * arr.length;
            }
            // 任选二复式 任选三复式
            if (t[0] === 'rx2' || t[0] === 'rx3' || t[0] === 'rx4') {
              w = (arr[0] && arr[0].length) || 0;
              q = (arr[1] && arr[1].length) || 0;
              b = (arr[2] && arr[2].length) || 0;
              s = (arr[3] && arr[3].length) || 0;
              g = (arr[4] && arr[4].length) || 0;

              if (t[0] === 'rx2') {
                n = w * (q + b + s + g) + q * b + (q + b) * (s + g) + s * g;
              }
              if (t[0] === 'rx3') {
                n = (w * q + w * b + q * b) * (s + g) + w * q * b + (w + q + b) * s * g;
              }
              if (t[0] === 'rx4') {
                n = w * q * b * s + w * q * b * g + w * q * s * g + w * b * s * g + q * b * s * g;
              }
            }
            break;
          case "hz": // 和值
          case "hhz": // 后和值
          case "qhz": // 前和值
            // data下标对应所选号码的值
            var data = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 63, 69, 73, 75, 75, 73, 69, 63, 55, 45, 36, 28, 21, 15, 10, 6, 3, 1];
            var data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
            let codesArr = arr[0].slice();
            if (me.lt === 'HNKY481') {
              data = [1, 3, 6, 10, 15, 21, 28, 36, 42, 46, 48, 48, 46, 42, 36, 28, 21, 15, 10, 6, 3, 1];
              data2 = [1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1]; //二星
              if (t[2] === "hz" && t[0] !== 'rx2') {
                codesArr = codesArr.map(v => v - 3);
              } else {
                codesArr = codesArr.map(v => v - 2);
              }
            }

            n = 0;
            for (var i = 0; i < codesArr.length; i++) {
              var a = codesArr[i];
              if (t[2] === "hz" && t[0] !== 'rx2') {
                n += data[a];
              } else {
                n += data2[a];
              }
            }
            // 任选和值得计算万千百十个是否选择
            if (t[0] === 'rx2' || t[0] === 'rx3') {
              n = n * Math.combination(pos, rxNum);
            }
            break;
          case "kd": //3星跨度
            n = me.calc3xKdStack(arr[0]);
            break;
          case "qkd": //2星跨度
          case "hkd":
            n = me.calc2xKdStack(arr[0]);
            break;
          default:
            break;
        }
      } else if (t[1] === "zux") {
        var a = arr[0] || [];
        var b = arr[1] || [];
        switch (t[2]) {
          case "z120": // 组120
            n = Math.combination(a.length, 5);
            break;
          case "z60": // 组选60
            var n1 = Math.combination(b.length, 3);
            var n2 = Math.difference(a, b).length;
            var n3 = Math.intersection(a, b).length;
            var n4 = Math.combination(b.length - 1, 3) * n3;

            n = n1 * n2 + n4;
            break;
          case "z30": // 组选30
            var n1 = Math.combination(a.length, 2);
            var n2 = Math.combination(b.length, 1);
            var n3 = Math.intersection(a, b).length;

            n = n1 * n2 - (a.length - 1) * n3;
            break;
          case "z20": // 组选20
            var n1 = Math.combination(b.length, 2);
            var n2 = Math.difference(a, b).length;
            var n3 = Math.intersection(a, b).length;
            var n4 = Math.combination(b.length - 1, 2) * n3;

            n = n1 * n2 + n4;
            break;
          case "z10": // 组选10
            var n1 = Math.combination(b.length, 1);
            var n2 = Math.difference(a, b).length;
            var n3 = Math.intersection(a, b).length;
            var n4 = Math.combination(b.length - 1, 1) * n3;

            n = n1 * n2 + n4;
            break;
          case "z5": // 组选5
            var n1 = Math.combination(b.length, 1);
            var n2 = Math.difference(a, b).length;
            var n3 = Math.intersection(a, b).length;
            var n4 = Math.combination(b.length - 1, 1) * n3;

            n = n1 * n2 + n4;
            break;
          case "z24": // 组选24
            n = Math.combination(a.length, 4);

            if (t[0] === 'rx4') {
              n = n * Math.combination(pos, rxNum);
            }
            break;
          case "z12": // 组选12
            var n1 = Math.combination(b.length, 2);
            var n2 = Math.difference(a, b).length;
            var n3 = Math.intersection(a, b).length;
            var n4 = Math.combination(b.length - 1, 2) * n3;

            n = n1 * n2 + n4;

            if (t[0] === 'rx4') {
              n = n * Math.combination(pos, rxNum);
            }
            break;
          case "z6": // 组选6 组六
            if (t[0] === 'sx' || t[0] === 'rx4') {
              n = Math.combination(a.length, 2);
            } else {
              // var k = a.length;
              // n = k * (k - 1) * (k - 2) / 6;
              n = Math.combination(a.length, 3);
            }
            // 任选三、任选四组6得计算万千百十个是否选择
            if (t[0] === 'rx3' || t[0] === 'rx4') {
              n = n * Math.combination(pos, rxNum);
            }
            break;
          case "z4": // 组选4
            var n1 = Math.combination(b.length, 1);
            var n2 = Math.difference(a, b).length;
            var n3 = Math.intersection(a, b).length;
            var n4 = Math.combination(b.length - 1, 1) * n3;

            n = n1 * n2 + n4;
            if (t[0] === 'rx4') {
              n = n * Math.combination(pos, rxNum);
            }
            break;
          case "z3": // 组三
            n = a.length * (a.length - 1);
            // 任选三组3得计算万千百十个是否选择
            if (t[0] === 'rx3') {
              n = n * Math.combination(pos, rxNum);
            }
            break;
          case "hz":
          case "hhz":
          case "qhz":
            // data下标对应所选号码的值
            var data = [1, 2, 2, 4, 5, 6, 8, 10, 11, 13, 14, 14, 15, 15, 14, 14, 13, 11, 10, 8, 6, 5, 4, 2, 2, 1]; //三星
            var data2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 4, 4, 3, 3, 2, 2, 1, 1]; //二星
            let codesArr = arr[0].slice();
            if (me.lt === 'HNKY481') {
              data = [1, 2, 2, 4, 5, 6, 8, 9, 9, 10, 10, 9, 9, 8, 6, 5, 4, 2, 2, 1];
              data2 = [1, 1, 2, 2, 3, 3, 4, 3, 3, 2, 2, 1, 1]; //二星
              if (t[2] === "hz" && t[0] !== 'rx2') {
                codesArr = codesArr.map(v => v - 3);
              } else {
                codesArr = codesArr.map(v => v - 2);
              }
            }

            n = 0;

            for (var i = 0; i < codesArr.length; i++) {
              var a = codesArr[i];
              if (t[2] === "hz" && t[0] !== 'rx2') {
                n += data[a - 1];
              } else {
                n += data2[a - 1];
              }
            }
            // 任选和值得计算万千百十个是否选择
            if (t[0] === 'rx2' || t[0] === 'rx3') {
              n = n * Math.combination(pos, rxNum);
            }
            break;
          case "hfs":
          case "qfs":
          case "fs":
            n = Math.combination(a.length, 2);
            // 任选复式得计算万千百十个是否选择
            if (t[0] === 'rx2' || t[0] === 'rx3') {
              n = n * Math.combination(pos, rxNum);
            }
            break;
          case "bd": //3星包胆
            n = me.calc3xBdStack(arr[0]);
            break;
          case "qbd": //2星包胆
          case "hbd":
            n = me.calc2xBdStack(arr[0]);
            break;
          default:
            break;
        }
      } else if (t[1].indexOf('cq') == 0) {
        var pkstatus = true;
        $(arr).each(function () {
          var e = arguments[1];
          if (e.length == 0) {
            pkstatus = false;
            return false;
          }
        });
        if (pkstatus) {
          var newArr = [];
          var calcpkzux = function (arr) {
            if (arr.length == 1) {
              return;
            }
            for (var i = 0; i < arr[0].length; i++) {
              for (var j = 0; j < arr[1].length; j++) {
                if (String(arr[0][i]).indexOf(arr[1][j]) == -1) {
                  var item = arr[0][i] + '-' + arr[1][j];
                  newArr.push(item);
                }
              }
            }
            arr.splice(0, 2, newArr);
            newArr = [];
            calcpkzux(arr);
          }
          calcpkzux(arr);
          n = arr[0].length;
        } else {
          n = 0;
        }
      } else if (t[1] === "dwd") { // 定位胆
        n = 0;
        for (var i = 0; i < arr.length; i++) {
          n += arr[i].length;
        }
      } else if (t[0] === "bdd") { // 不定胆
        switch (t[2]) {
          case "hs1": // 后三一码
          case "z31": // 中三一码
          case "qs1": // 前三一码
          case "4x1": // 四星一码
          case "5x1": // 五星一码
          case "bdd1": // 一码不定胆
            n = arr[0].length;
            break;
          case "hs2": // 后三二码
          case "z32": // 中三二码
          case "qs2": // 前三二码
          case "4x2": // 四星二码
          case "5x2": // 五星二码
          case "bdd2": // 二码不定胆
            var k = arr[0].length;
            n = k * (k - 1) / 2;
            n = Math.combination(arr[0].length, 2)
            break;
          case "4x3": // 四星三码
          case "5x3": // 五星三码
            var k = arr[0].length;
            n = k * (k - 1) / 2;
            n = Math.combination(arr[0].length, 3)
            break;
          case "bdd11y": // 11选5的不定胆
          case "3x1m": //四川快乐12的前三一码，前四一码，五星一码
          case "4x1m":
          case "5x1m":
            n = arr[0].length;
            break;
          default:
            break;
        }
      } else if (t[1] === "dxds") { // 大小单双
        for (var i = 0; i < arr.length; i++) {
          var _len = arr[i].length;
          n = n * parseInt(_len, 10);
        }
      } else if (t[1] === "hzdxds" || t[1] === "dxgs" || t[1] === "dsgs") { // 和值大小单双
        n = arr[0].length;
      } else if (t[1] === "lhh" || t[1] == 'ts' || t[1] == 'xt' || t[1] == 'bjl' || t[1] == 'nn' || t[1] == 'sh') { //时时彩趣味玩法 梭哈   龙虎和 | 形态  | 特殊（一帆风顺，好事成双，三星报喜，四季发财）
        n = arr[0].length;
      } else if (me.cls == "pk10" && (t[1] === "dx" || t[1] === "ds" || t[1] === "hz" || t[1] === "lh")) { // pk10大小 单双 龙虎  pk10和值
        n = arr[0].length;
      } else if (me.cls == "k3" && t[0] === "hz") { //江苏快3 和值
        n = arr[0].length;
      } else if (t[1] === "th3" || t[1] === "th2fx" || (t[1] === 'lh3' && t[2] === 'dx') || (t[1] === 'bs' && t[2] === 'dx') || (t[1] === 'z6' && t[2] === 'dx') || t[2] === 'cygh') { // 三同号单选  三同号通选 二同号复选 连号3单选 半顺单选 杂六单选 猜一个号
        n = arr[0].length;
      } else if (me.cls == "k3" && t[0] === "bth3" && t[2] == 'fs') { //三不同号复式
        var k = arr[0].length;
        n = k * (k - 1) / 2;
        n = Math.combination(arr[0].length, 3);
      } else if (me.cls == "k3" && t[0] == "bth3" && t[2] == 'ds') { // 三不同号单式
        n = arr[0].length;
      } else if (me.cls == "k3" && t[0] === "bth2" && t[2] == 'fs') { //二不同号复式
        var k = arr[0].length;
        n = k * (k - 1) / 2;
        n = Math.combination(arr[0].length, 2);
      } else if (me.cls == "k3" && t[0] == "bth2" && t[2] == 'ds') { // 二不同号单式
        n = arr[0].length;
      } else if (me.cls == "k3" && t[1] == "th2dx" && t[2] == 'fs') { // 二同号单选复式
        var a = arr[0] || [];
        var b = arr[1] || [];
        $(b).each(function () {
          b[arguments[0]] += b[arguments[0]];
        })

        var n1 = Math.combination(b.length, 1);
        var n2 = Math.difference(a, b).length;
        var n3 = Math.intersection(a, b).length;
        var n4 = Math.combination(b.length - 1, 1) * n3;
        n = n1 * n2 + n4;

      } else if (me.cls == "k3" && t[1] == "th2dx" && t[2] == 'ds') { // 二同号单选单式
        n = arr[0].length;
      } else if (t[1] === "sm") { // 11选5的三码(计算不影响时时彩三码)
        switch (t[2]) {
          case "zxfs":
            n = 0;
            // 暂时笨办法3层循环两两不等则n+1 后来人勿喷！
            for (var i = 0; i < arr[0].length; i++) {
              for (var j = 0; j < arr[1].length; j++) {
                if (arr[1][j] === arr[0][i]) continue;
                for (var k = 0; k < arr[2].length; k++) {
                  if (arr[2][k] === arr[0][i] || arr[2][k] === arr[1][j]) continue;
                  n += 1;
                }
              }
            }
            break;
          case "zuxfs":
            // 与3中3公式一样
            n = Math.nzn(arr[0].length, 3);
            break;
          default:
            break;
        }
      } else if (t[1] === "em") { // 11选5的二码码(计算不影响时时彩二码)
        switch (t[2]) {
          case "zxfs":
            var n1 = arr[0].length * arr[1].length;
            var n2 = Math.intersection(arr[0], arr[1]).length;
            n = n1 - n2;
            break;
          case "zuxfs":
            n = Math.nzn(arr[0].length, 2);
            break;
          default:
            break;
        }
      } else if (t[1] === "rxfs") { // 11选5的任选复式
        n = Math.round(Math.nzn(arr[0].length, parseInt(t[2], 10)));
      } else if (t[1] === "rxdt") { // 11选5的任选胆拖
        var t2Num = parseInt(t[2]); //'8z5'->8
        //计算注数
        if (arr[1].length > 1 && arr[0].length > 0 && (arr[0].length + arr[1].length) > t2Num) {
          n = Q.chooseMath(arr[1], t2Num - arr[0].length).length;
        } else {
          n = 0; //拖码至少要选2位，胆码至少1位，且拖码和胆码的位数和大于玩法要求个数才能计算注数
        }
      } else if (t[1] === "qw") { // 趣味
          n = arr[0].length;          
      } else if (t[1] === "rxx") { // 北京快乐8任选x
        // 取rx1 rx2 rx3 ... rx7的 1 2 3...7
        var a = arr[0].length + arr[1].length;
        var b = parseInt(t[2].charAt(t[2].length - 1), 10);
        n = t[2] === 'rx1' ? a : Math.combination(a, b);
      } else {}

      return n;
    },
    calc3xKdStack: function (arr) { //计算时时彩3星跨度的注数
      if (arr.length === 0) {
        return 0;
      }
      return arr.map((value, index) => {
        value = +value;
        switch (value) {
          case 0:
            return 10;
          case 1:
          case 9:
            return 54;
          case 2:
          case 8:
            return 96;
          case 3:
          case 7:
            return 126;
          case 4:
          case 6:
            return 144;
          case 5:
            return 150;
          default:
            break;
        }
      }).reduce((v, i) => v + i);
    },
    calc2xKdStack: function (arr) { //计算时时彩2星跨度的注数,arr为选号合集
      if (arr.length === 0) {
        return 0;
      }
      return arr.map((value, index) => {
        value = +value;
        switch (value) {
          case 0:
            return 10;
          case 1:
            return 18;
          case 9:
            return 2;
          case 2:
            return 16;
          case 8:
            return 4;
          case 3:
            return 14;
          case 7:
            return 6;
          case 4:
            return 12;
          case 6:
            return 8;
          case 5:
            return 10;
          default:
            break;
        }
      }).reduce((v, i) => v + i);
    },
    calc3xBdStack: function (arr) { //计算时时彩3星包胆的注数
      if (arr.length === 0) {
        return 0;
      }
      return arr.map((value, index) => {
        value = +value;
        switch (value) {
          case 0:
          case 1:
          case 9:
          case 2:
          case 8:
          case 3:
          case 7:
          case 4:
          case 6:
          case 5:
            return 54;
          default:
            break;
        }
      }).reduce((v, i) => v + i);
    },
    calc2xBdStack: function (arr) { //计算时时彩2星包胆的注数
      if (arr.length === 0) {
        return 0;
      }
      return arr.map((value, index) => {
        value = +value;
        switch (value) {
          case 0:
          case 1:
          case 9:
          case 2:
          case 8:
          case 3:
          case 7:
          case 4:
          case 6:
          case 5:
            return 9;
          default:
            break;
        }
      }).reduce((v, i) => v + i);
    },
    calcMoney: function (_el) {
      var me = this;
      var count = $(_el).find('.count')[0];
      var total = parseInt($(count).find('.total em').html(), 10);
      var times = parseInt($(count).find('.times input').val(), 10);
      var mode = parseFloat($(count).find('span.mode input:checked').val(), 10);
      var odds = parseFloat($(count).find('.odds select').val(), 10);
      var point = parseFloat($(count).find('.odds select option:checked').data('point'), 10);
      var money = $(count).find("em.money");
      var btnConfirm = $(count).find(".confirm");
      var quickSubmit = $(count).find(".quickSubmit");
      var result = total * times * mode;
      var pos = $(_el).find('.number .pos label');
      var pos_val = [];

      result = result.toFixed(Math.precision(mode));

      if (total > 0) {
        btnConfirm.removeClass('disabled');
        quickSubmit.removeClass('disabled');
        money.html(result);
        $(count).find('.total>em:first-child').html(total);
        $(count).find('.total>.times').html(times);


        $('.lottery .number input.clear').removeClass('disabled');
      } else {
        btnConfirm.addClass('disabled');
        quickSubmit.addClass('disabled');
        $(count).removeAttr('data-count');
        $('.lottery .number input.clear').addClass('disabled');
        money.html(result);
        return false;
      }
      // 任选玩法存在 且有万、千、百、十、个
      if (pos.length > 0) {
        for (var i = 0; i < pos.length; i++) {
          var cur = $(pos[i]);
          if (cur.hasClass('on')) {
            pos_val.push(cur.attr('data-pos'));
          }
        }
      }


      var oddtimes = 1;
      if (typeof $(count).find('.odds select').data('times') != 'undefined') {
        oddtimes = parseInt($(count).find('.odds select').data('times'), 10);
      }
      $(count).attr('data-count', [total, times, mode, odds, point, result, pos_val.join(','), oddtimes].join("|"));
    },
    countReset: function () {
      var me = this;
      var count = $('.js-count');
      var order = $('.js-orders');

      //切换彩种，投注倍数初始化`
      if (me.old_lt !== me.lt) {
        $(count).find('.times input').val('1');
        $(count).find('.mode label').eq(0).click();
      } else {
        var modeSelect = $(count).find('.mode .modeSelect');
        if (modeSelect.length > 0) {
          //modeSelect.click();
        } else {
          $(count).find('.mode label').eq(0).click();
        }
      }

      if ($('.quickSubmit-orders').length == 0) {
        $(count).find(".confirm").addClass('disabled');
        $(count).find('.total>em:first-child').html('0');


        $(count).find('.money em').html('0元');


        $('.quickSubmit').addClass('disabled');

        if (me.cls == 'pk10') {
          if (me.method.indexOf('hz_hz') != -1 || me.method.indexOf('ds_q2') != -1 || me.method.indexOf('dx_q2') != -1) {
            $(count).find('.odds em').show().html(0);
            $(count).find('select').hide();
          }
        } else if (me.cls == 'ssc') {
          if (me.method.indexOf('dxds_dxgs') != -1 || me.method.indexOf('dxds_dsgs') != -1 ||
            me.method.indexOf('qw_lhh') != -1 || me.method.indexOf('qw_xt') != -1) {
            $(count).find('.odds em').show().html(0);
            $(count).find('select').hide();
          }
        } else if (me.cls == 'k3') {
          if (me.method.indexOf('hz_hz') != -1) {
            $(count).find('.odds em').show().html(0);
            $(count).find('select').hide();
          }
        } else if (me.cls == '3d') {
          if (me.method.indexOf('qw') != -1) {
            $(count).find('.odds em').show().html(0);
            $(count).find('select').hide();
          }
        }
      } else {
        var ds_input = $('.js-number .box textarea.editable');
        if (ds_input.length > 0) {
            $(count).find(".confirm").addClass('disabled');
          $('.quickSubmit').addClass('disabled');
        }
      }

      $(order).find('.submit').removeClass('loading');

      me.old_lt = me.lt;
    },
    getK3Code: function (code) {
      var me = this;
      var methodArr = me.method.split("_");
      var k3Tmp = [];
      if ((methodArr[1] == "th3" && methodArr[2] == "th3dx") || methodArr[1] == "th3" && methodArr[2] == "th3tx") { //三同号单选
        $(code.split(',')).each(function () {
          k3Tmp.push(arguments[1].split('').join(','));
        })
        code = k3Tmp.join('|');
      } else if (methodArr[1] == "th2dx" && methodArr[2] == "ds") { //二同号单选单式
        $(code.split(',')).each(function () {
          var a = arguments[1].split('');
          var s = '' + a[0] + a[1] + ',' + +a[2];
          k3Tmp.push(s);
        })
        code = k3Tmp.join('|');
      } else if (methodArr[1] == "th2fx") { //二同号复选
        code = code.replace(/,/g, '|');
      } else if ((methodArr[1] == "z6" && methodArr[2] == "dx") || (methodArr[1] == "bs" && methodArr[2] == "dx") || (methodArr[1] == "lh3" && methodArr[2] == "dx") || (methodArr[1] == "bth3" && methodArr[2] == "ds") || (methodArr[1] == "bth2" && methodArr[2] == "ds") || methodArr[2] == "cygh") { //三不同号单式 二不同号单式
        $(code.split(',')).each(function () {
          k3Tmp.push(arguments[1].split('').join(','));
        })
        code = k3Tmp.join('|');
      }
      return code;
    },
    getOrder: function () {
      var me = this;
      var _el = $("#" + this.type);
      var tab = $('.js-tab');
      var sTab = $('.js-subtab');
      var count = $('.js-count').attr("data-count").split('|');

      var code = me.getCode($('.js-number')); // 获取选号盘中格式化后的代码
      var name = Q.getMethodName(me.method, me.lt); // 如：后三码直选复式

      var html = '';

      var m = me.method;
      //pk10 冠亚和值大小单双、和值，时时彩 趣味龙虎和  订单拆分
      //江苏快3 和值
      if ((me.cls == 'pk10' && $.inArray(me.method, Q.PkOddsArr) != -1) ||
          (me.cls == 'ssc' && $.inArray(me.method, Q.SSCOddsArr) != -1) ||
          (me.cls == 'k3' && $.inArray(me.method, Q.K3OddsArr) != -1) ||
          (me.cls == '3d' && $.inArray(me.method, Q.SDOddsArr) != -1) ||
          (me.cls === '11y' && $.inArray(me.method, Q.y11OddsArr) !== -1)) {
        code = code.split(',');

        function getLhhHouZhui(cls, name) { //3d的特殊处理
          if (cls === '3d') {
            return 'lh';
          } else {
            return name === '龙' ? 'long' : 'hu';
          }
        }
        //data-count  注数|倍数|元角分厘|奖金模式|返点|总金额|奖金倍数
        count[0] = 1; //注数变为一注
        count[5] = Q.floatMul(parseFloat(count[1]), parseFloat(count[2])); //总金额 = 倍数 * 元角分厘 * 注数（1）
        $(code).each(function (index, hz_num) {//hz_num为选号里面的文字
          const numToCodeObj = {
            '大': 'da',
            '小': 'xiao',
            '单': 'dan',
            '双': 'shuang',
            '和': 'he',
            '龙': getLhhHouZhui(me.cls, '龙'),
            '虎': getLhhHouZhui(me.cls, '虎'),
            '豹子': 'bz',
            '顺子': 'sz',
            '对子': 'dz',
            '半顺': 'bs',
            '杂六': 'zl',
            '四条': 'sitiao',
            '葫芦': 'hl',
            '顺子': 'sz',
            '三条': 'santiao',
            '两对': 'ld',
            '一对': 'yd',
            '单牌': 'dp',
            '5大0小': 'qd_qx',
            '0大5小': 'qd_qx',
            '4大0小': 'qd_qx',
            '0大4小': 'qd_qx',
            '3大0小': 'qd_qx',
            '0大3小': 'qd_qx',
            '4大1小': '41_14',
            '3大2小': '32_23',
            '2大3小': '32_23',
            '1大4小': '41_14',
            '3大1小': '31_13',
            '2大2小': '2d2x',
            '1大3小': '31_13',
            '2大1小': '21_12',
            '1大2小': '21_12',
            '5单0双': 'qd_qx',
            '0单5双': 'qd_qx',
            '4单0双': 'qd_qx',
            '0单4双': 'qd_qx',
            '3单0双': 'qd_qx',
            '0单3双': 'qd_qx',
            '4单1双': '41_14',
            '3单2双': '32_23',
            '2单3双': '32_23',
            '1单4双': '41_14',
            '3单1双': '31_13',
            '2单2双': '2d2x',
            '1单3双': '31_13',
            '2单1双': '21_12',
            '1单2双': '21_12',
            '庄': 'zhuang',
            '闲': 'xian',
            '和': 'he',
            '庄对': 'zhuangdui',
            '闲对': 'xiandui',
            'S6': 'super6',
            '无牛': 'wn',
            '牛1': 'n1',
            '牛2': 'n2',
            '牛3': 'n3',
            '牛4': 'n4',
            '牛5': 'n5',
            '牛6': 'n6',
            '牛7': 'n7',
            '牛8': 'n8',
            '牛9': 'n9',
            '牛牛': 'nn',
            '牛大': 'nda',
            '牛小': 'nx',
            '牛单': 'ndan',
            '牛双': 'ns'
          };
          const hzdxds_code = numToCodeObj[hz_num] || '';

          var hz_method;
          var desc;

          desc = me.descFormat(hz_num, me.method);

          var arr = undefined;
          if (me.cls === 'pk10') {
            arr = Q.PkNum[m];
          } else if (me.cls === 'k3') {
            arr = Q.K3Num[m];
          } else if (me.cls === '11y') {
            arr = Q.y11Num[m];
          }
          if (arr) {
            if (me.cls === '11y') {
              const reflectObj = {
                '5单0双': '50',
                '4单1双': '41',
                '3单2双': '32',
                '2单3双': '23',
                '1单4双': '14',
                '0单5双': '05',
                '03': '3_9',
                '09': '3_9',
                '04': '4_8',
                '08': '4_8',
                '05': '5_7',
                '07': '5_7',
                '06': '6'
              };
              hz_method = me.method + '_' + reflectObj[hz_num];
            } else {
              $(arr).each(function (index, chaiCode) {
                if (chaiCode.split('_').indexOf(hzdxds_code || hz_num) !== -1) {
                  hz_method = me.method + '_' + chaiCode;
                  return false;
                }
              });
            }
          } else {
            if (me.method === "zh_hzdxds_5xhz") { //大单大双小单小双-》dxds_hzdxds_5xhz_zh
              if (hz_num === '大单' || hz_num === '大双' || hz_num === '小单' || hz_num === '小双') {
                const reflectObj = {
                  '大单': 'dd',
                  '大双': 'ds',
                  '小单': 'xd',
                  '小双': 'xs'
                };
                hz_method = me.method + '_' + reflectObj[hz_num];
              } else {
                hz_method = me.method;
              }
            } else {
              hz_method = me.method + '_' + hzdxds_code;
            }

          }

          var obj = me.odds[me.lt][hz_method];
          var mode = count[2];
          const decimal = 3;//按后端需求截取3位小数
          const _mode = mode/2;
          if (obj.point !== undefined) {
            var p = $('select option:selected').attr('data-point');
            if (p === "0") {
              //奖金模式浮点数
              count[3] = obj.odds + obj.x * obj.point;
            } else {
              count[3] = obj.odds;
            }
          } else {
            count[3] = obj.odds;
          }

          var win = me.getMoneyWin(0, count[3], count[0], count[1], count[2], hz_num, hz_method).win;

          if ($('.quickSubmit-orders').length > 0) {
            html += '<li class="quickSubmit-li" ';
          } else {
            html += '<li ';
          }

          var optionsOdds = $('.count .odds select').html();
          var mode = '<div class="mode"><select><option value="2">2元</option><option value="1">1元</option><option value="0.2">2角</option><option value="0.1">1角</option><option value="0.02">2分</option>';
          if (me.lt != 'WBGMMC') {
            mode += '<option value="0.002">2厘</option>';
          }
          mode += '</select></div>';

          html += 'data-type="' + hz_method + '" data-code="' + hz_num + '" data-desc="' + name + ' ' + desc + '" data-count="' + count.join("|") + '">' +
              '<div class="codes" title="' + name + ' ' + Q.getPositionName(count[6],me.lt) + hz_num + '">' + name + Q.getPositionName(count[6],me.lt) + '<em>' + hz_num + '</em></div>' +
              '<div class="share"> <input type="text" class="spinner newInput biggerw" min="1" max="99999" step="1" value="' + count[1] + '" /> </div>' +
              mode +
              '<div class="money">' + count[5] + '</div>' +
              '<div class="win">' + win + '</div>' +
              '<a href="javascript:;" class="delete" title="删除"></a> </li>';
        });

      } else {
        // count = [total, times, mode, odds, result]

        count[3] = $('.count .odds select option:selected').val();


        var win = me.getMoneyWin(0, count[3], count[0], count[1], count[2], code, me.method).win;
        var desc = me.descFormat(code, me.method);

        if (me.cls === "k3") {
          desc = code;
          code = me.getK3Code(code);
        }

        if ($('.quickSubmit-orders').length > 0) {
          html += '<li class="quickSubmit-li" ';
        } else {
          html += '<li ';
        }

        var optionsOdds = $('.count .odds select').html();
        var mode = '<div class="mode"><select><option value="2">2元</option><option value="1">1元</option><option value="0.2">2角</option><option value="0.1">1角</option><option value="0.02">2分</option>';
        if (me.lt !== 'WBGMMC') {
          mode += '<option value="0.002">2厘</option>';
        }
        mode += '</select></div>';

        var way = me.method;
        if ((me.cls === 'ssc' && me.method.indexOf('zx_hz') !== -1) ||
            (me.cls === 'ssc' && me.method.indexOf('zux_hz') !== -1) ||
            (me.cls === 'ssc' && me.method.indexOf('hzdxds') !== -1) ||
            (me.cls === 'ssc' && me.method.indexOf('qw_ts') !== -1) ||
            (me.cls === 'ssc' && me.method.indexOf('zx_hhz') !== -1) ||
            (me.cls === 'ssc' && me.method.indexOf('zux_hhz') !== -1) ||
            (me.cls === 'ssc' && me.method.indexOf('zx_qhz') !== -1) ||
            (me.cls === 'ssc' && me.method.indexOf('zux_qhz') !== -1) ||
            (me.cls === 'pk10' && me.method.indexOf('cq1_cq1') !== -1) ||
            (me.cls === 'pk10' && me.method.indexOf('dx_dx') !== -1) ||
            (me.cls === '3d' && me.method.indexOf('zx_hz') !== -1) ||
            (me.cls === '3d' && me.method.indexOf('zux_hz') !== -1)) {
          html += 'data-type="' + me.method + '" data-code="' + code + '" data-desc="' + name + ' ' + desc + '" data-count="' + count.join("|") + '">' +
              '<div class="codes" title="' + name + ' ' + Q.getPositionName(count[6],me.lt) + code + '">' + name + ' ' + Q.getPositionName(count[6],me.lt) + '<em>' + code + '</em></div>' +
              '<div class="share"> <input type="text" class="spinner newInput biggerw" min="1" max="99999" step="1" value="' + count[1] + '" /> </div>' +
              mode +
              '<div class="money">' + count[5] + '</div>' +
              '<div class="win">' + win + '</div>' +
              '<a href="javascript:;" class="delete" title="删除"></a> </li>';
        } else {
          html += 'data-type="' + me.method + '" data-code="' + code + '" data-desc="' + name + ' ' + desc + '" data-count="' + count.join("|") + '">' +
              '<div class="codes" title="' + name + ' ' + Q.getPositionName(count[6],me.lt) + desc + '">' + name + ' ' + Q.getPositionName(count[6],me.lt) + '<em>' + desc + '</em></div>' +
              '<div class="share"> <input type="text" class="spinner newInput biggerw" min="1" max="99999" step="1" value="' + count[1] + '" /> </div>' +
              mode +
              '<div class="money">' + count[5] + '</div>' +
              '<div class="win">' + win + '</div>' +
              '<a href="javascript:;" class="delete" title="删除"></a> </li>';
        }
      }

      if ($('.quickSubmit-orders').length === 0) {
        $(_el).find(".count .confirm").addClass('disabled');
      }

      return html;
    },
    getOrderLHC() { // return orderListHtml
      const me = this;
      let html = '';
      switch (me.plateType) {
        case 'input':
          $('.js-plate-item').each((index, item) => {
            const m_method = $(item).find('.js-odd-value').attr('m_method');
            const wanfa = $('.subtab .on').text();
            let code = $(item).find('.js-plate-item-num').attr('cn');
            code = /^tm_tm_ws|^ztws_ztws_ztws/.test(m_method) ? code.replace('尾', '') : code; //尾数“0尾”只传0
            const odd = $(item).find('.js-odd-value').attr('odd');
            const point = $(item).find('.js-odd-value').attr('point');
            const nums = 1;
            const price = $(item).find('.js-plate-item-input').val();
            const money = $(item).find('.js-plate-item-input').val();
            if ($(item).find('.js-plate-item-input').val()) {
              html += `
                            <li data-nums="${nums}" data-price="${price}" data-money="${money}" data-point="${point}"  data-odd="${odd}" data-wanfa="${wanfa}" data-type="${m_method}" data-code="${code}" data-desc="${wanfa} ${code}" data-count="${nums}|1|${price}|${odd}|${point}|${money}||1" class="js-orders-item">
                                <div class="codes">${wanfa} <em>${code}</em></div>
                                <div class="odd">${odd}</div>
                                <div class="money">${money}</div>
                                <a href="javascript:;" class="delete" title="删除"></a> 
                            </li>
                        `;
            }
          });
          break;
        case 'click':
          switch (me.method) {
            case 'lx_lx_2lx':
            case 'lx_lx_3lx':
            case 'lx_lx_4lx':
            case 'lm_lm_2z2':
            case 'lm_lm_3z2':
            case 'lm_lm_3z3':
              const bmnsx = sessionStorage.getItem('bmnsx');
              const code = [];
              $('.js-click-num-item.on').each((index, item) => {
                const cn = $(item).attr('cn');
                code.push(cn);
              });
              const method = me.method;
              const wanfa = $('.subtab .on').text();
              const price = $('.js-clickType-per-input').val();
              const nums = $('.js-count-num').text();
              const money = $('.js-total-money').text();
              let point = me.odds[method][`rate${me.rateType}`];
              let odd = me.odds[method][`bonus${me.rateType}`];
              /* if (me.method === 'lm_lm_3z2') {
                const pointZ2 = me.odds['lm_lm_3z2_z2'][`rate${me.rateType}`];
                const oddZ2 = me.odds['lm_lm_3z2_z2'][`bonus${me.rateType}`];
                if (Number(oddZ2) > Number(odd)) {
                                point = pointZ2;
                                odd = oddZ2;
                            }
              } */
              /* if (me.method === 'lx_lx_2lx' || me.method === 'lx_lx_3lx' || me.method === 'lx_lx_4lx') {
                if (code.indexOf(bmnsx) !== -1 && nums === '1') { // 有本命年生肖且只有1注，用生肖赔率
                  point = me.odds[`${method}_bnsx`][`rate${me.rateType}`];
                  odd = me.odds[`${method}_bnsx`][`bonus${me.rateType}`];
                }
              } */
              html += `
                            <li class="js-orders-item" data-nums="${nums}" data-price="${price}" data-money="${money}" data-point="${point}"  data-odd="${odd}" data-wanfa="${wanfa}" data-type="${me.method}" data-code="${code.join(',')}" data-desc="${wanfa} ${code.join('')}" data-count="${nums}|1|${price}|${odd}|${point}|${money}||1">
                                <div class="codes">${wanfa} <em>${code.join(',')}</em></div>
                                <div class="odd">${odd}</div>
                                <div class="money">${money}</div>
                                <a href="javascript:;" class="delete" title="删除"></a> 
                            </li>
                        `;
              break;
            case 'hzdxds_hzdxds_hzdxds':
              //拆单
              $('.js-click-num-item.on').each((index, item) => {
                const m_method = $(item).attr('m_method');
                const en = $(item).attr('en');
                const cn = $(item).attr('cn');
                const code = cn;
                const wanfa = $('.subtab .on').text();
                const price = $('.js-clickType-per-input').val();
                const nums = 1;
                const money = $('.js-total-money').text();
                const point = me.odds[m_method][`rate${me.rateType}`];
                const odd = me.odds[m_method][`bonus${me.rateType}`];
                html += `
                                <li data-nums="${nums}" data-price="${price}" data-money="${money}" data-point="${point}"  data-odd="${odd}" data-wanfa="${wanfa}" data-type="${m_method}" data-code="${code}" data-desc="${wanfa} ${code}" data-count="${nums}|1|${price}|${odd}|${point}|${money}||1" class="js-orders-item">
                                    <div class="codes">${wanfa} <em>${code}</em></div>
                                    <div class="odd">${odd}</div>
                                    <div class="money">${money}</div>
                                    <a href="javascript:;" class="delete" title="删除"></a> 
                                </li>
                            `;
              });
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }

      return html;
    },
    getCode: function (el) {
      var me = this;
      // 非单式
      var dl = el.children('dl[rel=selectNum]');

      // 单式
      var li = el.find('.box ul li');
      var textarea = el.find('.box textarea');

      var data = [];
      var m = me.method.split('_');

      if (dl && dl.length > 0) { // 非单式
        for (var i = 0, len = dl.length; i < len; i++) {
          var i_on = $(dl[i]).find('i.on');
          var tmp1 = [];
          for (var j = 0; j < i_on.length; j++) {
            if (me.cls == 'k3' && i_on.hasClass('diceNum')) {
              tmp1.push($(i_on[j]).attr('data-value'));
            } else if (me.cls == 'ssc' && (m[1] == 'dxgs' || m[1] == 'dsgs' || m[1] == 'nn' || m[1] == 'dxds' || m[1] == 'bjl' || m[1] == 'sh' || m[1] == 'lhh' || m[1] == 'xt' || m[1] == 'hzdxds')) {
              tmp1.push($(i_on[j]).attr('data-value'));
            } else {
              tmp1.push($(i_on[j]).html());
            }
          }
          data.push(tmp1.join(","));
        }

        if (me.type !== "market") {
          if ($('.quickSubmit-orders').length == 0) {
            $(el).find('i').removeClass('on');
          }
        }
      } else if (li && li.length > 0) { // 单式
        for (var i = 0; i < li.length; i++) {
          data.push($(li[i]).attr("data-code"));
        }
        if (me.type === "lottery") {
          $(el).find('.box ul').empty();
        }
      } else if (textarea && textarea.length > 0) { // 单式
        data = textarea.val();

        if (typeof textarea.attr('readonly') !== 'undefined') {
          textarea.removeAttr('readonly');
        }
        data = data.replace(/\s+/g, '').split(';');

        if (me.cls === 'kl12' || me.cls === '11y' || me.cls === 'pk10') {
          data = data.map(function (n) {
            return n.match(/\d{1,2}/g).join(',');
          });
        } else {
          data = data.map(function (n) {
            return n.split('').join(',');
          });
        }
        if (!textarea.hasClass('editable')) {
          textarea.remove();
        }

        if (el.find('.box textarea').size() == 0) {
          el.find('.box').append('<textarea class="editable"></textarea>');
          el.find('.box textarea').val(me.tipchs);
        }
        el.find('.box ul, .box input').show();

      }

      return data.join("|");
    },
    descFormat: function (code, method) {
      var me = this;
      var m = method.split('_');
      var desc = code.split('|');

      return code.split(',').join('').split('|').join(',');
    },
    getMoneyWin: function (buytype, odds, total, times, mode, code, method) {
      var me = this;
      var money = 0;
      var win = 0;
      var wintime = 1;
      var precision = Math.precision(odds) + Math.precision(mode);
      var m = method.split('_');
      var isBuy = buytype === 0 || buytype === '0';
      var code = code.split('|');

      var totalNums = parseInt(me.odds[me.lt][method].totalNums);

      var y = 1;
      let singleBetNums = me.odds[me.lt][method]['n'];
      /*if (me.odds[me.lt][method]['s'] === 1 && total < singleBetNums) {//盈利金额逻辑先不动，注释掉
        y = parseFloat(me.odds[me.lt][method].y);
      }*/
      if (me.singSaveLevel === 1 && Q.floatDiv(total, totalNums) < 0.02) {
        y = parseFloat(me.odds[me.lt][method].y);
      }

      // 买卖:buytype 赔率:odds 注数:total 倍数:times 投注模式:mode 投注号码：1,2|3|4
      if (m[2] === 'zh') {
        // 特殊处理五星、四星组合玩法
        if (isBuy) {
          money = total * times * mode;
          for (var i = 0; i < code.length; i++) {
            win += (odds / Math.pow(10, i)) * times * mode / 2;
          }
          win = win * y - money;
        } else {
          for (var i = 0; i < code.length; i++) {
            money += (odds / Math.pow(10, i)) * times;
          }
          win = total * times * mode;
        }
        precision = 1;
      } else if (m[0] === 'dwd') {
        // 特殊处理定位胆玩法
        if (isBuy) {
          money = total * times * mode;
          for (var i = 0; i < code.length; i++) {
            if (code[i] !== '') {
              win += odds * times * mode / 2;
            }
          }
          win = win * y - money;
        } else {
          for (var i = 0; i < code.length; i++) {
            if (code[i] !== '') {
              money += odds * times;
            }
          }
          win = total * times * mode;
        }
      } else if (m[0] === 'bdd') {
        // 特殊处理不定胆玩法
        if (isBuy) {
          money = total * times * mode;
          win = (odds * times * mode / 2 * (total < 3 ? total : 3)) * y - money;
        } else {
          money = odds * times * (total < 3 ? total : 3);
          win = total * times * mode;
        }
      } else if (m[0] === 'dxds') {
        // 特殊处理大小单双
        var t0 = 1;
        var t1 = 1;
        if (m[2] === '5xhz') { //五星和值拆单了，t0,t1为1

        } else {
          if (/['大'|'小']/.test(code[0]) && /['单'|'双']/.test(code[0])) {
            t0 = 2;
          }
          if (/['大'|'小']/.test(code[1]) && /['单'|'双']/.test(code[1])) {
            t1 = 2;
          }
        }
        if (isBuy) {
          money = total * times * mode;
          win = (odds * times * mode / 2 * t0 * t1) * y - money;
        } else {
          money = odds * times * t0 * t1;
          win = total * times * mode;
        }

      } else if (m[0] === 'rxfs' || m[0] === 'rxds') {
        if (m[0] === 'rxds') {
          code = code.toString().split(",");
        } else {
          code = code[0].split(',');
        }

        var rxNum = 1;

        if (m[0] === 'rxds') {
          if (parseInt(method.substr(-3, 1), 10) <= 5) {
            rxNum = total < Math.combination(5, parseInt(method.substr(-3, 1), 10)) ? total : Math.combination(5, parseInt(method.substr(-3, 1), 10));
          } else {
            rxNum = total < Math.combination(6, parseInt(method.substr(-3, 1), 10) - 5) ? total : Math.combination(6, parseInt(method.substr(-3, 1), 10) - 5);
          }
        } else {
          if (parseInt(method.substr(-3, 1), 10) <= 5) {
            rxNum = code.length < 5 ? total : Math.combination(5, parseInt(method.substr(-3, 1), 10));
          } else {
            rxNum = Math.combination(code.length - 5, parseInt(method.substr(-3, 1), 10) - 5);
          }
        }

        // 特殊处理定位胆玩法
        if (isBuy) {
          money = total * times * mode;
          win = (odds * times * mode / 2 * rxNum) * y - money;
        } else {
          money = odds * times * rxNum;
          win = total * times * mode;
        }

      } else if (m[0] === 'rx2' || m[0] === 'rx3' || m[0] === 'rx4') {
        money = total * times * mode;
        win = times * odds * mode / 2;
        if (m[1] === 'zx' && m[2] === 'fs') {
          code = code.filter(function (n) {
            if (n !== '') return n;
          });
          wintime = Math.combination(code.length, m[0].charAt(m[0].length - 1))
          win = win * wintime;
        } else {
          wintime = Math.combination($("#lottery .number .pos label.on").length, m[0].charAt(m[0].length - 1))
          win = win * wintime;
        }
        win = win * y - total * times * mode;
      } else {
        if (isBuy) {
          money = total * times * mode;
          win = (times * odds * mode / 2) * y - total * times * mode;
        } else {
          money = odds * times;
          win = total * times * mode;
        }
      }

      // 以下处理浮点数运算不精确的问题 如
      money = money.toFixed(precision);
      money = parseFloat(money, 10);
      win = keepDecimal(win, 3);
      win = parseFloat(win, 10);

      return {
        money: money,
        win: win,
        wintime: wintime
      };
    },
    setSubmitData: function () {
      var me = this;
      var _el = $("#" + me.type);
      var orders = $('.js-orders')[0];
      var list = $(orders).find('.list > ul > li');
      var total = 0;
      var amount = 0;
      var profit = 0;
      var profitTimes = [];
      var traceper = 0;
      var profitper = 0;
      var saleper = 0;
      var saleprofitper = 0;
      var buyper = 0;
      var buyprofitper = 0;

      if (list.length > 0) {
        if (me.type === "lottery") {
          profitTimes = [];
          for (var i = 0, len = list.length; i < len; i++) {
            var d = $(list[i]).attr("data-count").split('|');
            total += parseInt(d[0], 10);
            amount += Q.floatMul(parseFloat(d[5], 10), 10000);
            profit += (parseFloat(d[3], 10) * parseFloat(d[1], 10)) - parseFloat(d[5], 10);
            traceper += (parseFloat(d[5], 10) / parseFloat(d[1], 10));
            profitper += parseFloat(d[3], 10) * (parseFloat(d[2] / 2)) * parseInt(d[7], 10);
            profitTimes.push(parseInt(d[7], 10));
          }
          $(orders).find('.total').html(total + '&nbsp;注');
        }
        amount = amount / 10000;

        var traceAllData = {
          type: me.type,
          traceM: traceper,
          times: 1,
          amount: amount,
          profixP: profitper,
          money: amount,
          traceMSale: saleper,
          profixPSale: saleprofitper,
          traceMBuy: buyper,
          profixPBuy: buyprofitper,
          profixPer: (profitper - traceper),
          //profixRate: parseInt(((profitper - traceper) / traceper) * 100, 10)
          profixRate: parseFloat((profitper - traceper) / traceper) * 100
        };

        $(orders).data('trace', traceAllData).find('.amount').html(amount + '&nbsp;元');
        me.lottryAmount = amount;

        Trace.updateTimes($(orders).find('>div.trace-data'), $(orders).find('>div.trace-data>a:eq(0)'), traceAllData);

        //     $(orders).find('.submit').removeClass('disabled');
        if ($('.bottom .hand .trace-icon').hasClass('on')) {
          $(orders).find('.bottom .submit').addClass('disabled');
        } else {
          $(orders).find('.bottom .submit').removeClass('disabled');
        }
      } else {
        if ($('.bottom .hand .trace-icon').hasClass('on')) {
          $('.bottom .hand').click();
        }
        me.resetOrders();
      }
    },
    resetOrders: function () {
      var me = this;
      var _el = $("#lottery");
      var orders = $('.js-orders');

      $(orders).find('.total, .amount').html(0);

      if ($(orders).hasClass('quickSubmit-orders')) {
        $(orders).removeClass('quickSubmit-orders');
        $(orders).find('.list > ul li.quickSubmit-li').remove();
        if ($(orders).find('.list > ul li').length > 0) {
          me.setSubmitData();
        }
      } else {
        $(orders).find('.list > ul').empty();
      }
      // 重置追号选择
      Trace.resetTraceBox($(orders));
    },
    updateOdds: function () {
      var me = this;
      var $odds = $('#lottery .count .odds');
      var obj;
      var hz_odds = [];

      var m = me.method;

      if (me.odds[me.lt]) {
        //拆单
        if ((me.cls === 'pk10' && $.inArray(me.method, Q.PkOddsArr) !== -1) ||
          (me.cls === 'ssc' && $.inArray(me.method, Q.SSCOddsArr) !== -1) ||
          (me.cls === 'k3' && $.inArray(me.method, Q.K3OddsArr) !== -1) ||
          (me.cls === '3d' && $.inArray(me.method, Q.SDOddsArr) !== -1) ||
          (me.cls === '11y' && $.inArray(me.method, Q.y11OddsArr) !== -1)) {
          var items = $('#lottery .number i.on');
          if (items.length === 0) {
            obj = {
              odds: 0
            }
          } else {
            var arr = undefined;
            if (me.cls === 'pk10') {
              arr = Q.PkNum[m];
            } else if (me.cls === 'k3') {
              arr = Q.K3Num[m];
            } 

            items.each(function () {
              var num = $(this).html();
              if (arr) {
                $(arr).each(function () {
                  if (arguments[1].split('_').indexOf(num) != -1) {
                    obj = me.odds[me.lt][m + '_' + arguments[1]];
                    me.m_method = m + '_' + arguments[1];
                    if (hz_odds.length == 0) {
                      hz_odds.push(obj);
                      hz_odds.push(obj);
                    } else {
                      if (obj.odds > hz_odds[1].odds) {
                        hz_odds[1] = obj;
                      }

                      if (obj.odds < hz_odds[0].odds) {
                        hz_odds[0] = obj;
                      }
                    }
                    return false;
                  }
                });

              } else {
                if (m.indexOf('dx') !== -1 && m !== "zh_hzdxds_5xhz") {
                  if (m.indexOf('dxgs_wx') !== -1) {
                    num = Q.PKDXDS.WX[$(this).index()];
                  } else if (m.indexOf('dxgs_sx') !== -1) {
                    num = Q.PKDXDS.SX[$(this).index()];
                  } else if (m.indexOf('dxgs_qs') !== -1 || m.indexOf('dxgs_zs') !== -1 || m.indexOf('dxgs_hs') !== -1) {
                    num = Q.PKDXDS.SM[$(this).index()];
                  } else if (m.indexOf('dsgs_wx') !== -1) {
                    num = Q.PKDXDS.WX[$(this).index()];
                  } else if (m.indexOf('dsgs_sx') !== -1) {
                    num = Q.PKDXDS.SX[$(this).index()];
                  } else if (m.indexOf('dsgs_qs') !== -1 || m.indexOf('dsgs_zs') !== -1 || m.indexOf('dsgs_hs') !== -1) {
                    num = Q.PKDXDS.SM[$(this).index()];
                  } else {
                    num = Q.PKDXDS.DX[$(this).index()];
                  }
                } else if (m.indexOf('ds') !== -1 && m !== "zh_hzdxds_5xhz" && me.cls !== '11y') {
                  num = Q.PKDXDS.DS[$(this).index()];
                } else if (m.indexOf('lhh') !== -1 || m.indexOf('lh_lh') !== -1) { //lh_lh pk10的情况
                  if (me.cls === '3d') {
                    num = Q.SDLHH[$(this).index()];
                  } else if (me.cls === 'ssc') {
                    num = Q.SSCLHH[$(this).index()];
                  } else if (me.cls === 'pk10') {
                    num = Q.PKLHH[$(this).index()];
                  }
                } else if (m.indexOf('xt') !== -1) {
                  if (me.cls == '3d') {
                    num = Q.SDXT[$(this).index()];
                  } else {
                    if (m.indexOf('wx') !== -1) {
                      num = Q.SSCWXXT[$(this).index()];
                    } else {
                      num = Q.SSCXT[$(this).index()];
                    }

                  }
                } else if (m.indexOf('bjl') !== -1) {
                  num = Q.SSCBJL[$(this).index()];
                } else if (m.indexOf('sh_sh') !== -1) {
                  num = Q.SSCWXXT[$(this).index()];
                } else if (m.indexOf('nn_nn') !== -1) {
                  num = Q.SSCNN[$('#lottery .number i').index(this)];
                } else if (m.indexOf('zh_hzdxds') !== -1) {
                  num = Q.SSC5XHZ[$(this).index()];
                } else if (m.indexOf('dds') !== -1 || m.indexOf('czw') !== -1) {//11选5 定单双 猜中位
                  num = Q.y11Num[m][$(this).index()];
                }
                if (num) {
                  obj = me.odds[me.lt][m + '_' + num];
                  me.m_method = m + '_' + num;
                } else {
                  obj = me.odds[me.lt][m];
                  me.m_method = m;
                }
                if (hz_odds.length === 0) {
                  hz_odds.push(obj);
                  hz_odds.push(obj);
                } else {
                  if (obj.odds > hz_odds[1].odds) {
                    hz_odds[1] = obj;
                  }

                  if (obj.odds < hz_odds[0].odds) {
                    hz_odds[0] = obj;
                  }
                }
              }
            });
          }
        } else {
          if (!me.odds[me.lt][m]) {
            return;
          }
          obj = me.odds[me.lt][m];
          me.m_method = m;
        }

        var modeSelect = parseFloat($('#lottery .count').find('span.mode input:checked').val(), 10);
        var mode = 1;
        switch (modeSelect) {
          case 2:
            mode = 1;
            break;
          case 1:
            mode = 0.5;
            break;
          case 0.2:
            mode = 0.1;
            break;
          case 0.1:
            mode = 0.05;
            break;
          case 0.02:
            mode = 0.01;
            break;
          case 0.002:
            mode = 0.001;
            break;
        }
        const decimal = 3;//按后端需求截取3位小数
        if (obj.point !== undefined) {
          // 登录之后的赔率 有返点
          var option = [];
          var val = 0;
          var val2 = 0;

          if (hz_odds.length > 0) {
            var obj1 = hz_odds[0];
            var obj2 = hz_odds[1];

            var v1 = obj1.odds + obj1.x * obj1.point;
            var v2 = obj2.odds + obj2.x * obj2.point;

            var v, odd;
            if (obj1.odds == obj2.odds) {
              v = keepDecimal(v1*mode,decimal);
              odd = keepDecimal(obj1.odds*mode,decimal);
            } else {
              v = keepDecimal(v1*mode,decimal) + ' - ' + keepDecimal(v2*mode,decimal);
              odd = keepDecimal(obj1.odds*mode,decimal) + ' - ' + keepDecimal(obj2.odds*mode,decimal);
            }
            if (/^qw_lhh|^bjl_bjl/.test(me.method)) {//限制龙虎和只能用高奖金0返点模式
              option.push(`<option value="${v1}" data-point="0">${v} ~ 0%</option>`);              
            } else {
              if (parseFloat(obj1.point, 10) === 0) {
                option.push(`<option value="${v1}" data-point="0">${v} ~ 0%</option>`);
              } else {
                option.push(`<option value="${v}" data-point="0" ${me.oddsSelectedIndex === 0 ? 'selected' : ''}>${v} ~ 0%</option>`);
                option.push(`<option value="${odd}" data-point="${obj1.point}" ${me.oddsSelectedIndex === 1 ? 'selected' : ''}>${odd} ~ ${Q.percentFormat(obj1.point)}%</option>`);
              }
            }

            $odds.find('em').html(val).hide();
            $odds.find('select').html(option.join('')).show();
          } else {
            val = obj.odds + obj.x * obj.point;
            if (parseFloat(obj.point, 10) === 0) {
              option.push(`<option value="${val}" data-point="0">${keepDecimal(val*mode,decimal)} ~ 0%</option>`);
            } else {
              option.push(`<option value="${val}" data-point="0" ${me.oddsSelectedIndex === 0 ? 'selected' : ''}>${keepDecimal(val*mode,decimal)} ~ 0%</option>`);
              option.push(`<option value="${obj.odds}" data-point="${obj.point}" ${me.oddsSelectedIndex === 1 ? 'selected' : ''}>${keepDecimal(obj.odds*mode,decimal)} ~ ${Q.percentFormat(obj.point)}%</option>`);
            }
            $odds.find('em').html(val*mode).hide();
            $odds.find('select').html(option.join('')).show();
          }
        } else {
          // 号码不同赔率不同 未选中
          var odd;
          if (hz_odds.length > 0) {
            if (hz_odds[0].odds == hz_odds[1].odds) {
              odd = hz_odds[0].odds;
            } else {
              odd = hz_odds[0].odds + '~' + hz_odds[1].odds;
            }
          } else {
            odd = obj.odds;
          }

          $odds.find('select').html('<option value="' + odd + '" data-point="-1"></option>').hide();
          $odds.find('em').html(odd).show();
        }
        $odds.find('select').on('change', function () {
          me.oddsSelectedIndex = $(this).find('option:selected').index();
        });
      }
    },
    showLogout: function () {
      var msg = dialog({
        title: '系统消息',
        content: '<div class="logoutMsg">您已退出登录</div>',
        cancel: false,
        fixed: true,
        width: 'auto',
        height: 'auto',
        onshow: function () {
          setTimeout(function () {
            window.location.href = window.location.protocol + '//' + window.location.host;
          }, 3000);
        },
        button: [{
          id: 'clock_ok',
          value: '关&nbsp;闭',
          callback: function () {
            window.location.href = window.location.protocol + '//' + window.location.host;
          }
        }]
      }).showModal();
    },
    compileNext: function (nextApp, lottery) { //issueInfo手机端返回的next不太一样，处理下和电脑端一样，因为日本30秒要用这个接口
      let arr = [];
      for (let i = 0; i < nextApp.length; i++) {
        let dateStart = Number(nextApp[i].issue.split('-')[0]);
        let issueStart = Number(nextApp[i].issue.split('-')[1]);
        let sellStartTime = Number(nextApp[i].sellStart) * 1000; //返回值是秒，换成毫秒
        let durationTime = Number(nextApp[i].durationTime) * 1000; //返回值默认单位为秒，换成毫秒
        for (let j = 0; j < nextApp[i].total; j++) {
          arr.push({
            "issue": `${dateStart}-${lottery==='RDLFC'?('000'+(issueStart+j)).slice(-3):('000'+(issueStart+j)).slice(-4)}`, //瑞典二分彩只留后三位
            "time": `${new Date(sellStartTime+durationTime*j).Format('YYYY-MM-DD hh:mm:ss')}`,
          });
        }
      }
      return arr;
    },
    updateIssueInfo: function () {
      var me = this;
      var skiptime = false;

      if (arguments.length > 0) {
        skiptime = arguments[0];
      }
      if (["RBSSM", "RDFFC", "RDLFC", "WBGFFC", "MC11Y", "MCPK10", "MCK3", "MC3D", "TXFFC", "QQSSM", "JSLHC", "TX1FC"].indexOf(Lottery.lt) !== -1) { //日本30秒等彩种调app用接口，为了优化
        Api.getIssueInfoApp({
          'lottery': Lottery.lt,
        }, function (d) {
          if (d == '-1') {
            me.showLogout();
            return;
          }
          let info = $('.js-info');
          let countTime = $('.js-countTime'); //投注按钮下方倒计时

          let timeArr = [];
          let t = 0;
          let tip = null; //倒计时关闭提示框 3秒后自动关闭

          let result;

          if (d.result) {
            result = d.result;
            //追号
            me.next = result.nextApp ? me.compileNext(result.nextApp, Lottery.lt) : []; //app的这个字段和pc不太一样，转化成pc要的格式
            //期号
            me.issue = result.issue;
            if (!skiptime) {
              me.updateRecency();
            }
            $('.js-lottery-logo').attr('lt', me.lt.toLowerCase());
            $('.info-title-text').html(me.m_name);
            $('.js-issue').html(result.issue ? result.issue : '-');
            $('.aside .history').removeClass('mmc-history');
            $('.trace-box').show();
            $('#mmcLoop').hide();
            // 非秒秒彩展示厘模式
            $('#lottery .mode label').last().removeAttr('style');

            info.find('.flipball-wrap').hide();
            $('.js-issue-wrap, .js-last-issue').show();
            $('.js-clock').show();

            //如果是韩国1.5分彩，添加计算明细
            if (["HG1F5","BJ5FC","XN5FC","TW5FC","RDLFC"].indexOf(result.lottery) !== -1) {
              info.find('.js-last-issue').addClass('hg1f5');
              var list_hg = '';
              var arr_hg = ["万位", "千位", "百位", "十位", "个位"];
              $(result.encodedWinNumber).each(function () {
                var t = 0;
                $(arguments[1].split('-')).each(function () {
                  t = parseInt(arguments[1]) + t;
                });
                t = String(t);
                t = t.substring(0, t.length - 1) + '<em>' + t.substring(t.length - 1) + '</em>';

                list_hg += '<div>' + arr_hg[arguments[0]] + " : " + arguments[1].replace(/-/g, ' + ') + ' = ' + t + '</div>';
              });

              info.find('.js-last-issue .detail_hg1f5').html(list_hg);
            } else if (result.lottery == "QQSSM" ) {
              info.find('.js-last-issue').addClass('hg1f5');
              var encodedWinNumber = result.encodedWinNumber;
              var codeFive = encodedWinNumber[0].split(',');
              var codeRandom = encodedWinNumber[1].split(',');
              var codeLast = encodedWinNumber[2].split(',');
              var table_hg = `
                             <ol class="table-detail">
                               <li>
                                 <span class="big-span half-span"><div class="out"><em class="pos-t">位置</em><em class="list-b">事项</em></div></span><span class="bg1-color-span">万</span><span class="bg1-color-span">千</span><span class="bg1-color-span">百</span><span class="bg1-color-span">十</span><span class="bg1-color-span">个</span>
                               </li>
                               <li>
                                 <span class="big-span bg2-color-span">最近五期内奖号</span><span>${codeFive[0]}</span><span>${codeFive[1]}</span><span>${codeFive[2]}</span><span>${codeFive[3]}</span><span>${codeFive[4]}</span>
                               </li>
                               <li>
                                 <span class="big-span bg2-color-span">随机数</span><span>${codeRandom[0]}</span><span>${codeRandom[1]}</span><span>${codeRandom[2]}</span><span>${codeRandom[3]}</span><span>${codeRandom[4]}</span>
                               </li>
                               <li>
                                 <span class="big-span bg2-color-span">开奖号码</span><span>${codeLast[0]}</span><span>${codeLast[1]}</span><span>${codeLast[2]}</span><span>${codeLast[3]}</span><span>${codeLast[4]}</span>
                               </li>
                             </ol>
                             `;
              info.find('.js-last-issue .detail_hg1f5').html(table_hg);
            } else {
              $('.js-last-issue .detail_hg1f5').html('');
              $('.js-last-issue').removeClass('hg1f5');
            }


            //瑞典彩种
            if (result.lottery == "RDFFC" || result.lottery == "RDLFC") {
              var swedish = result.thirdIssueNo;
              var m = swedish.split('-');
              var wd = m[1] + '/' + m[0] + '/' + m[2];
              var da = Date.parse(wd);
              var n = new Date(da).getMonth() + 1;
              var month;
              var monthNumToEnObj = {
                1: 'Jan',
                2: 'Feb',
                3: 'Mar',
                4: 'Apr',
                5: 'May',
                6: 'Jun',
                7: 'Jul',
                8: 'Aug',
                9: 'Sep',
                10: 'Oct',
                11: 'Nov',
                12: 'Dec'
              };
              month = monthNumToEnObj[n];
              var tm = m[3].split('');
              var time = tm[0] + tm[1] + ':' + tm[2] + tm[3];
              var swedishTime = m[0] + ' ' + month + ' ' + m[2] + ' at ' + time;
              $('.issue .detail_rd h3').html(swedishTime);
              if (result.lottery == "RDFFC") {
                $('.issue .detail_rd a').removeAttr('attr').attr('href', 'https://www.swedishlottery.se/lotto/sevenstars');
              } else {
                $('.issue .detail_rd a').removeAttr('attr').attr('href', 'https://www.swedishlottery.se/lotto/KNX');
              }

            }

            // 重置追号数据
            if ($('#' + me.type + ' .orders input[name=autoTrace]').is(':checked')) {
              Trace.resetTraceDate();
            }

            me.isStop = result.second < 0;

            if (result.second === 0) {
              me.updateIssueInfo(1);
              $('.info-title-status').html('');
              return false;
            } else if (result.second === -1) {
              $('.issue-text').hide();
              $('.js-clock').addClass('stop').find('span').html('等待开售');
              $('.info-title-status').html('等待开售').show();
              $('.info-issue-mini').hide();
              countTime.hide();
              if (!skiptime) {
                me.updateTime();
              }
              return false;
            } else if (result.second === -2) {
              $('.issue-text').hide();
              $('.js-clock').addClass('stop').find('span').html('暂停销售');
              $('.info-title-status').html('暂停销售').show();
              $('.info-issue-mini').hide();
              countTime.hide();
              if (!skiptime) {
                me.updateTime();
              }
              return false;
            }
            countTime.show();

            $('.js-clock').removeClass('stop');
            $('.issue-text').show();
            $('.info-issue-mini').show();
            if (!skiptime) {
              me.updateTime();
            }
            let _date = new Date().valueOf() + result.second * 1000;
            $('.js-clock').addClass('cl-count');
            $('.js-clock').countdown(_date.toString(), function (event) {

              t = event.offset.hours * 60 * 60 + event.offset.minutes * 60 + event.offset.seconds;

              timeArr = event.strftime('%#H:%#M:%#S').split(':');
              //投注按钮下方本期倒计时
              countTime.find('em').html(event.strftime(t = '%#H:%#M:%#S', true));

              $(timeArr).each(function () {
                $('.clock_b' + arguments[0]).html(arguments[1]);
              })


              if (t > 0 && t <= 30) {
                $(this).addClass('warning');
              } else {
                $(this).removeClass('warning');
              }
            }).on('finish.countdown', function () {
              if (!dialog.get('go-next-issue')) {
                tip = dialog({
                  id: 'go-next-issue',
                  skin: 'go-next-issue',
                  title: '温馨提示',
                  content: '<h3>' + me.m_name + '</h3><p class="t">第<em>' + $('.js-issue').html() + '</em>期售彩已结束</p><p>点击进入下一期购彩</p>',
                  cancel: false,
                  fixed: true,
                  onshow: function () {
                    //自动倒计时
                    var set = $("#lotteryClass");
                    if (set.hasClass('hightop')) {
                      set.removeClass('hightop');
                    }
                    var startSec = me.countDownSec;
                    if (Lottery.lt === "RBSSM" || Lottery.lt === "QQSSM") {
                      startSec = 1; //日本30秒减少弹窗倒计时时间
                    }
                    var nowCountDown = $(this.node).find('.cdown');
                    var startCT = setInterval(function () {
                      if (startSec == 0) {
                        tip.close().remove();
                        clearInterval(startCT);
                        me.updateIssueInfo(1);
                        return false;
                      }
                      nowCountDown.html(['(', startSec--, ')'].join(''));
                    }, 1000);
                  },
                  onremove: function () {
                    if (dialog.get('lotterySetting')) {
                      $("#lotteryClass").addClass('hightop');
                    }
                  },
                  onclose: function () {
                    if (dialog.get('order-cancel')) {
                      dialog.get('order-cancel').close().remove();
                    }
                    me.updateRecency();
                    if (!$('.confirm-again').hasClass('confirm-again-trace')) {
                      setTimeout(function () {
                        $('.confirm-again em.issue').html('期号' + me.issue);
                      }, 3000);
                    }
                  },
                  button: [{
                    id: 'clock_ok',
                    value: '确定<em class="cdown">(' + (Lottery.lt === "RBSSM" || Lottery.lt === "QQSSM"? 1 : me.countDownSec) + ')</em>',
                    callback: function () {
                      me.updateIssueInfo(1);
                      //清除之前的二次确认提交框
                      if ($('.confirm-again').size() > 0) {
                        //$('.confirm-again button.cancel').trigger('click');
                      }
                    }
                  }]
                });
                tip.showModal();

                //顶部倒计时为0后重新更新中奖喜报数据
                if (["RBSSM", "RDFFC", "RDLFC", "WBGFFC", "TXFFC", "QQSSM", "TX1FC"].indexOf(Lottery.lt) !== -1) {
                  //这几个彩种倒计时间太短就不重新更新了，免得太频繁。
                } else {
                  setTimeout(()=> {
                    me.winListMarqueeShow && me.winResultsListMarquee();
                  }, 1000);
                }
              }
            });
            // 显示追号
            $('.trace-box').show();
            // 移除秒秒彩连投
            $('#mmcLoop').remove();
          }
        });
      } else {
        Api.getIssueInfo({
          'lottery': me.lt
        }, function (d) {
          if (d == '-1') {
            me.showLogout();
            return;
          }

          var info = $('.js-info');
          var countTime = $('.js-countTime'); //投注按钮下方倒计时
          var rGames = $('.resuleShow .t1>.rGames');
          var rGames_issue = $('.resuleShow .t1>.issue');
          var rGames_r = $('.resuleShow .t1>.r');

          var timeArr = [];
          var t = 0;
          var tip; //倒计时关闭提示框 3秒后自动关闭

          if (d.result) {
            d = d.result;
            //追号
            me.next = d.next;
            //期号
            me.issue = d.issue;
            if (!skiptime) {
              me.updateRecency();
            }

            $('.js-lottery-logo').attr('lt', me.lt.toLowerCase());
            $('.info-title-text').html(me.m_name);
            $('.js-issue').html(d.issue ? d.issue : '-');

            if (d.lottery === 'WBGMMC') {
              $('.aside .history').removeClass('pk10-11y pk10-history').addClass('mmc-history');
              $('.pk10_ani').hide();
              $('.xgpk10_ani').hide();
              $('#lottery .togglePkAni').hide();
              $('#lottery .toggleXGPkAni').hide();

              $('.countTimeBox').hide();

              if ($('.js-clock').hasClass('cl-count')) {
                $('.js-clock').removeClass('cl-count');
                $('.js-clock').countdown('stop');
              }

              $('.js-issue-wrap, .js-last-issue').hide();
              info.find('.flipball-wrap').show();

              $('.js-clock').hide();

              // 屏蔽厘模式
              $('#lottery .mode label').last().attr('style', 'display: none');

              me.isStop = false;
              if (!skiptime) {
                me.updateTime();
              }

              // 秒秒彩隐藏追号 显示连投
              $('.trace-box').hide();
              if ($('#mmcLoop').length === 0) {
                var mmcEl = '<div id="mmcLoop">连续开奖<select>' +
                  '<option value="1">1</option>' +
                  '<option value="5" selected>5</option>' +
                  '<option value="10">10</option>' +
                  '<option value="50">50</option>' +
                  '<option value="100">100</option>' +
                  '<option value="200">200</option>' +
                  '<option value="500">500</option>' +
                  '<option value="1000">1000</option>' +
                  '</select>次' +
                  '<label><input type="checkbox" id="succStop"><label for="succStop" class="succStop"></label>中奖即停</label></div>';
                $(mmcEl).insertBefore($('.bottom a.submit').parent());
                $('#mmcLoop select').editableSelect({
                  filter: false,
                  effects: 'fade',
                  onCreate: function () {
                    var $this = $('#mmcLoop input[type=text]');
                    $this.on('keyup', function () {
                      $this.val($this.val().replace(/[^\d]/g, ''));
                      $this.val(parseInt($this.val(), 10) > 1000 ? 1000 : $this.val());
                    });
                  }
                });
              }
            } else {
              $('.aside .history').removeClass('mmc-history');
              $('.countTimeBox').show();
              if (me.cls != 'pk10') {
                $('.pk10_ani').hide();
                $('.xgpk10_ani').hide();
                $('#lottery .togglePkAni').hide();
                $('#lottery .toggleXGPkAni').hide();
              }
              $('.trace-box').show();
              $('#mmcLoop').hide();
              // 非秒秒彩展示厘模式
              $('#lottery .mode label').last().removeAttr('style');

              info.find('.flipball-wrap').hide();
              $('.js-issue-wrap, .js-last-issue').show();
              $('.js-clock').show();
            }

            //如果是韩国1.5分彩，添加计算明细
            if (["HG1F5","BJ5FC","XN5FC","TW5FC","RDLFC"].indexOf(d.lottery) !== -1) {
              $('.js-last-issue').addClass('hg1f5');
              var list_hg = '';
              var arr_hg = ["万位", "千位", "百位", "十位", "个位"];
              $(d.encodedWinNumber).each(function () {
                var t = 0;
                $(arguments[1].split('-')).each(function () {
                  t = parseInt(arguments[1]) + t;
                });
                t = String(t);
                t = t.substring(0, t.length - 1) + '<em>' + t.substring(t.length - 1) + '</em>';

                list_hg += '<div>' + arr_hg[arguments[0]] + " : " + arguments[1].replace(/-/g, ' + ') + ' = ' + t + '</div>';
              });

              $('.js-last-issue .detail_hg1f5').html(list_hg);
            } else {
              $('.js-last-issue .detail_hg1f5').html('');
              $('.js-last-issue').removeClass('hg1f5');
            }

            // 重置追号数据
            if ($('#' + me.type + ' .orders input[name=autoTrace]').is(':checked')) {
              Trace.resetTraceDate();
            }

            if (me.lt !== 'WBGMMC') {
              me.isStop = d.second < 0;
            }

            if (d.second === 0) {
              me.updateIssueInfo(1);
              $('.info-title-status').html('');
              return false;
            } else if (d.second === -1) {
              $('.issue-text').hide();
              $('.js-clock').addClass('stop').find('span').html('等待开售');
              $('.info-title-status').html('等待开售').show();
              $('.info-issue-mini').hide();
              countTime.hide();
              if (!skiptime) {
                me.updateTime();
              }
              return false;
            } else if (d.second === -2) {
              $('.issue-text').hide();
              $('.js-clock').addClass('stop').find('span').html('暂停销售');
              $('.info-title-status').html('暂停销售').show();
              $('.info-issue-mini').hide();
              countTime.hide();
              if (!skiptime) {
                me.updateTime();
              }
              return false;
            }

            countTime.show();

            $('.js-clock').removeClass('stop');
            $('.issue-text').show();
            $('.info-issue-mini').show();
            if (!skiptime) {
              me.updateTime();
            }
            var _date = new Date().valueOf() + d.second * 1000;

            $('.js-clock').addClass('cl-count');
            $('.js-clock').countdown(_date.toString(), function (event) {

              t = event.offset.hours * 60 * 60 + event.offset.minutes * 60 + event.offset.seconds;

              timeArr = event.strftime('%#H:%#M:%#S').split(':');
              //投注按钮下方本期倒计时
              countTime.find('em').html(event.strftime(t = '%#H:%#M:%#S', true));

              $(timeArr).each(function () {
                $('.clock_b' + arguments[0]).html(arguments[1]);
              });

              if (t > 0 && t <= 30) {
                $(this).addClass('warning');
              } else {
                $(this).removeClass('warning');
              }
            }).on('finish.countdown', function () {
              if (!dialog.get('go-next-issue')) {
                tip = dialog({
                  id: 'go-next-issue',
                  skin: 'go-next-issue',
                  title: '温馨提示',
                  content: '<h3>' + me.m_name + '</h3><p class="t">第<em>' + $('.js-issue').html() + '</em>期售彩已结束</p><p>点击进入下一期购彩</p>',
                  cancel: false,
                  fixed: true,
                  onshow: function () {
                    //自动倒计时
                    var set = $("#lotteryClass");
                    if (set.hasClass('hightop')) {
                      set.removeClass('hightop');
                    }
                    var startSec = me.countDownSec;
                    var nowCountDown = $(this.node).find('.cdown');
                    var startCT = setInterval(function () {
                      if (startSec == 0) {
                        tip.close().remove();
                        clearInterval(startCT);
                        me.updateIssueInfo(1);
                        return false;
                      }
                      nowCountDown.html(['(', startSec--, ')'].join(''));
                    }, 1000);
                  },
                  onremove: function () {
                    if (dialog.get('lotterySetting')) {
                      $("#lotteryClass").addClass('hightop');
                    }
                  },
                  onclose: function () {
                    if (dialog.get('order-cancel')) {
                      dialog.get('order-cancel').close().remove();
                    }
                    me.updateRecency();
                    if (!$('.confirm-again').hasClass('confirm-again-trace')) {
                      setTimeout(function () {
                        $('.confirm-again em.issue').html('期号' + me.issue);
                      }, 3000);
                    }
                  },
                  button: [{
                    id: 'clock_ok',
                    value: '确&nbsp;&nbsp;&nbsp;&nbsp;定<em class="cdown">(' + me.countDownSec + ')</em>',
                    callback: function () {
                      me.updateIssueInfo(1);
                      //清除之前的二次确认提交框
                      if ($('.confirm-again').size() > 0) {
                        //$('.confirm-again button.cancel').trigger('click');
                      }
                    }
                  }]
                });
                tip.showModal();
                //顶部倒计时为0后重新更新中奖喜报数据
                if (["RBSSM", "RDFFC", "RDLFC", "WBGFFC", "TXFFC", "QQSSM", "TX1FC"].indexOf(Lottery.lt) !== -1) {
                  //这几个彩种倒计时间太短就不重新更新了，免得太频繁。
                } else {
                  setTimeout(()=> {
                    me.winListMarqueeShow && me.winResultsListMarquee();
                  }, 1000);
                }

              }
            });
            // 显示追号
            $('.trace-box').show();
            // 移除秒秒彩连投
            $('#mmcLoop').remove();


          }
        });
      }
    },
    hotMissNumHandleColor: function () { //百期热度处理颜色和渲染数字函数
      return function (num, i, thisArr) {
        let min = Math.min(...thisArr);
        let max = Math.max(...thisArr);
        if (num == min && max != min) { //  若每个号码的出现频率都一样时，都不加颜色max==min的情况
          return `<em class="hotMissNum hotMissNumMin">${num}</em>`; //最小值加绿色
        }
        if (num == max && max != min) {
          return `<em class="hotMissNum hotMissNumMax">${num}</em>`; //最大值加红色
        }
        return `<em class="hotMissNum">${num}</em>`;
      }
    },
    getIssueInfoLast: function () {
        var me = this;
        var info = $('.js-info');
        var rGames = $('.resuleShow .t1>.rGames');
        var rGames_issue = $('.resuleShow .t1>.issue');
        var rGames_r = $('.resuleShow .t1>.r');
        var subDataType = $('#lottery>.subtab').attr('data-type');
        var subDataDesc = $('#lottery>.subtab').attr('data-desc');
        var args = [...arguments]; //只有开奖的时候传参数message，百期热度用这个参数做开奖时的特殊处理
        Api.getIssueInfoLast(Object.assign({
              'lottery': me.lt,
            }, me.cls === 'ssc' || me.lt === 'SHSSL' ? {
              'method': me.method, //时时彩多传一个参数获取百期热度数据
            } : {}), function (d) {
              let d_result;
              if (me.lt === 'XGPK10') {
                d_result = d;
              }

              //当前遗漏和百期热度部分
              function removeNum() { //不符合条件时不显示百期热度函数
                $('#lottery .direction>.hotMissWrap').hide();
                $('#lottery .number dl[rel="hotTab"]').each(function (index, item) {
                  $(this).remove();
                });
                $('#lottery .number dl[rel="missTab"]').each(function (index, item) {
                  $(this).remove();
                });
              }

              if (d.code === 1) { //1请求成功，2服务失败，3001彩种不合法
                let hitFrequency = d.result.hitFrequency; //热度结果
                let skipFrequency = d.result.skipFrequency; //遗漏结果

                function insertNum(arr, index, thisElem) { //插入数字函数
                  let tml = arr[index] && arr[index].map(me.hotMissNumHandleColor()).join('');
                  thisElem.html(tml ? tml : '');
                }
                if ((me.lt == 'SHSSL' || me.cls == 'ssc') && me.lt != 'TCP5' && me.lt != 'WBGMMC' && !(/^dxds|^qw_lhh|^qw_xt|^sh_sh|^zh_hzdxds|^bjl_bjl|^nn_nn|_hz$|_hhz$|_qhz$|_hh$|_ds$|_qds$|_hds$|^qw_bjl|kd$/.test(me.method))) { //只做时时彩系列（不含秒秒彩,只做数字选好盘，不包含和值,单式，混合
                  $('#lottery .direction>.hotMissWrap').css({
                    'display': 'inline-block', //只有有热度或者遗漏号码时才显示左上角热度或者遗漏的tab
                  });
                  //右侧热度遗漏tab插入,默认显示当前遗漏
                  var hotTabShow = localStorage.getItem('hotTabShow') || 'off';
                  var missTabShow = localStorage.getItem('missTabShow') || 'on';

                    if (hotTabShow == 'on') {
                        $('.hotMissTab[flag="hotTab"]').addClass('on');
                    } else {
                        $('.hotMissTab[flag="hotTab"]').removeClass('on');
                    }

                    if (missTabShow == 'on') {
                        $('.hotMissTab[flag="missTab"]').addClass('on');
                    } else {
                        $('.hotMissTab[flag="missTab"]').removeClass('on');
                    }
                  //请求到数据后将集合数据的dom插入到选号下面
                  let old_hitFrequency = sessionStorage.getItem(`${me.lt}_hit_${me.method}`);
                  sessionStorage.setItem(`${me.lt}_hit_${me.method}`, JSON.stringify(hitFrequency)); //存储到renderNum时用  
                  sessionStorage.setItem(`${me.lt}_skip_${me.method}`, JSON.stringify(skipFrequency));
                  (typeof args[0] == 'function') && args[0](); //传resolve的情况
                  if (args[0] == 'message') { //开奖时特殊处理,取接口数据替换数字不从缓存读旧数据
                    $('#lottery .number dl[rel="hotTab"] dd.hotMissNumWrap').each(function (index, item) {
                      insertNum(hitFrequency, index, $(this));
                    });
                    $('#lottery .number dl[rel="missTab"] dd.hotMissNumWrap').each(function (index, item) {
                      insertNum(skipFrequency, index, $(this));
                    });
                  } else {
                    if (old_hitFrequency && (old_hitFrequency.toString() != hitFrequency.toString())) { //renderNum hitFrequency缓存数据和接口数据不一样时从接口读取数字渲染,不从缓存读取
                      $('#lottery .number dl[rel="hotTab"] dd.hotMissNumWrap').each(function (index, item) {
                        insertNum(hitFrequency, index, $(this));
                      });
                      $('#lottery .number dl[rel="missTab"] dd.hotMissNumWrap').each(function (index, item) {
                        insertNum(skipFrequency, index, $(this));
                      });
                    }
                  }


                  //当前热度，百期遗漏tab切换
                  $('.lottery .direction .hotMissTab').off('click').on('click', function (e) {
                    if ($(this).attr('flag') == 'missTab') {
                        if ($(this).hasClass('on')) {
                            $(this).removeClass('on');
                            localStorage.setItem('missTabShow', 'off');
                            $('#lottery .number dl[rel="missTab"]').hide();
                        } else {
                            $(this).addClass('on');
                            localStorage.setItem('missTabShow', 'on');
                            $('#lottery .number dl[rel="missTab"]').show();
                        }
                    } else if ($(this).attr('flag') == 'hotTab') {
                        if ($(this).hasClass('on')) {
                            $(this).removeClass('on');
                            localStorage.setItem('hotTabShow', 'off');
                            $('#lottery .number dl[rel="hotTab"]').hide();
                        } else {
                            $(this).addClass('on');
                            localStorage.setItem('hotTabShow', 'on');
                            $('#lottery .number dl[rel="hotTab"]').show();
                        }
                    }
                  });

                } else { //没有热度或者遗漏号码的玩法不显示左上角热度或者遗漏的tab
                  removeNum();
                  (typeof args[0] == 'function') && args[0](); //传resolve的情况
                }
              } else if (d.code === 2 || d.code === 3001) { //2服务失败，3001彩种不合法两种情况时隐藏
                removeNum();
                (typeof args[0] == 'function') && args[0](); //传resolve的情况
              } else {
                removeNum();
                (typeof args[0] === 'function') && args[0](); //传resolve的情况
              }

              //当前遗漏和百期热度结束
              if (me.cls === 'ssc' || me.lt === 'SHSSL') {
                d = d.result.issue; //时时彩返回的json数据多了百期热度和当前遗漏的字段，特殊处理下
              }
              
              if (d.length === 0) {
                $('.js-open-code-list').html('');
                $('.js-open-issue').html('-');
                $('.resuleShow>ul').html('<div style="text-align:center;margin: 10px;auto;">尚无开奖结果</div>');
                return;
              }
              if (d && d.length > 0) {
                //最近一期开奖奖期及号码
                $('.js-open-issue').html(d[0].issueNo);
                var reg = me.cls === 'kl12' || me.cls === '11y' || me.cls === 'kl8' || 　me.cls === 'pk10' ? new RegExp(/\d{2}/g) : new RegExp(/\d/g);
                var code = d[0].code;
                var lastUl = '';
                var lastUlMini = '';
                if (me.lt === 'BJPK10' || me.lt === 'MCPK10') {
                  $(code.split(',')).each(function () {
                    lastUl += '<li class="car' + arguments[1] + ' index' + arguments[0] + '"></li>';
                    lastUlMini += '<li class="pk10">' + arguments[1] + '</li>';
                  });
                } else if (me.lt === 'XGPK10') {
                  $(code.split(',')).each(function () {
                    lastUl += '<li class="horse' + arguments[1] + ' index' + arguments[0] + '"></li>';
                    lastUlMini += '<li class="pk10">' + arguments[1] + '</li>';
                  });
                } else if (me.cls === 'k3') {
                  $(code.split(',')).each(function () {
                    lastUl += '<li class="bigDice' + arguments[1] + '"></li>';
                    lastUlMini += '<li class="bigDice' + arguments[1] + '"></li>';
                  });
                } else if (me.lt === 'JSLHC') {
                  var codeArr = d[0].code.split(',');
                  var lastUl = codeArr.map((v, i, arr) => {
                    if (i === arr.length - 1) {//最后一个是特码
                      return `
                            <li class="js-last-issue-codeItem lhc-open-code-tm-${v}">${v}</li>
                        `;
                    }
                    return `
                        <li class="js-last-issue-codeItem lhc-open-code-${v}">${v}</li>
                    `;
                  }).join('');
                  var lastUlMini = codeArr.map((v, i, arr) => {
                    if (i === arr.length - 1) {//最后一个是特码
                      return `
                            <li class="lhc-mini js-last-issue-codeItem lhc-open-code-tm-${v}">${v}</li>
                        `;
                    }
                    return `
                        <li class="lhc-mini js-last-issue-codeItem lhc-open-code-${v}">${v}</li>
                    `;
                  }).join('');
                } else {
                  lastUl = code.replace(/,/g, '').replace(reg, function ($0, $1) {
                    return '<li>' + $0 + '</li>';
                  });
                  lastUlMini = code.replace(/,/g, '').replace(reg, function ($0, $1) {
                    return '<li>' + $0 + '</li>';
                  });
                }
                if (me.cls === '11y' || me.cls === 'kl12') {
                  $('.aside .history').addClass('pk10-11y');
                } else {
                  $('.aside .history').removeClass('pk10-11y');
                }

                var lastCode = d[0].code;
                // 遍历最近30期 生成dom
                var html = [];

                var len = d.length > 30 ? 30 : d.length;

                for (var i = 0; i < len; i++) {
                  if (!d[i].code) {
                    continue;
                  }

                  var tmp_html = '<li>';
                  //最右侧玩法
                  var lotteryKind = '';
                  var dataType = $('#lottery>.tab').attr('data-type');
                  //判断大小单双
                  function checkDxds(num) {
                    num = Number(num);
                    var lottery_kind;
                    if (num >= 0 && num <= 4) {
                      lottery_kind = '<i class="dxds_xiao">' + '小' + '</i>';
                    } else {
                      lottery_kind = '<i class="dxds_da">' + '大' + '</i>';
                    }
                    if (num % 2 === 0) {
                      lottery_kind += '<i class="dxds_shuang">' + "双" + '</i>';
                    } else {
                      lottery_kind += '<i class="dxds_dan">' + "单" + '</i>';
                    }
                    return lottery_kind;
                  }
                  //判断时时彩三星和值大小单双
                  function checkSscSmHzDxds(num) {
                    num = Number(num);
                    var lottery_kind;
                    if (num >= 0 && num <= 13) {
                      lottery_kind = '<i class="margin0_6 dxds_xiao">' + '小' + '</i>';
                    } else {
                      lottery_kind = '<i class="margin0_6 dxds_da">' + '大' + '</i>';
                    }
                    if (num % 2 === 0) {
                      lottery_kind += '<i class="margin0_6 dxds_shuang">' + "双" + '</i>';
                    } else {
                      lottery_kind += '<i class="margin0_6 dxds_dan">' + "单" + '</i>';
                    }
                    return lottery_kind;
                  }
                  //判断时时彩五星和值大小单双
                  function checkSscWxHzDxds(num) {
                    num = Number(num);
                    var lottery_kind;
                    if (num >= 0 && num <= 22) {
                      lottery_kind = '<i class="margin0_6 dxds_xiao">' + '小' + '</i>';
                    } else {
                      lottery_kind = '<i class="margin0_6 dxds_da">' + '大' + '</i>';
                    }
                    if (num % 2 === 0) {
                      lottery_kind += '<i class="margin0_6 dxds_shuang">' + "双" + '</i>';
                    } else {
                      lottery_kind += '<i class="margin0_6 dxds_dan">' + "单" + '</i>';
                    }
                    return lottery_kind;
                  }
                  //龙虎和判断函数
                  function checkLhh(num1, num2) {
                    num1 = Number(num1);
                    num2 = Number(num2);
                    if (num1 > num2) {
                      return '<i class="lhh_long">' + '龙' + '</i>';
                    } else if (num1 < num2) {
                      return '<i class="lhh_hu">' + '虎' + '</i>';
                    } else {
                      return '<i class="lhh_he">' + '和' + '</i>';
                    }
                  }
                  //百家乐判断
                  function checkBjl(num1, num2, num3, num4) {
                    num1 = Number(num1);
                    num2 = Number(num2);
                    num3 = Number(num3);
                    num4 = Number(num4);
                    var zd = '',
                      xd = '';
                    if (num1 === num2) {
                      zd = ' bjl_zd '
                    };
                    if (num3 === num4) {
                      xd = ' bjl_xd '
                    };
                    var zhuang = Q.floatAdd(num1, num2) % 10;
                    var xian = Q.floatAdd(num3, num4) % 10;
                    if (zhuang > xian && zhuang === 6) {
                      var bjl = '<i class="bjl_z' + zd + xd + '">' + 'S6' + '</i>';
                    } else if (zhuang > xian && zhuang !== 6) {
                      var bjl = '<i class="bjl_z' + zd + xd + '">' + '庄' + '</i>';
                    } else if (zhuang < xian) {
                      var bjl = '<i class="bjl_x' + zd + xd + '">' + '闲' + '</i>';
                    } else {
                      var bjl = '<i class="bjl_h' + zd + xd + '">' + '和' + '</i>';
                    }
                    return bjl;
                  }
                  //牛牛判断
                  function checkNn(arrCode) {
                    var arr = arrCode.map(function (data) {
                      return +data
                    });
                    for (var i = 0; i < 3; i++) {
                      for (var j = i + 1; j < 4; j++) {
                        for (var k = j + 1; k < 5; k++) {
                          if (sumNn([arr[i], arr[j], arr[k]]) == 0) {
                            var copy = arr.slice();
                            delete copy[i];
                            delete copy[j];
                            delete copy[k];
                            var copyNew = sumNn(copy.filter(function () {
                              return true
                            }));
                            if (copyNew == 0) {
                              return '<i class="inboxW28 inboxWn">' + '牛牛' + '</i><i class="inboxW28 dxds_da">' + '牛大' + '</i><i class="inboxW28 dxds_shuang">' + '牛双' + '</i>';
                            } else {
                              if (copyNew <= 5 && copyNew % 2 != 0) {
                                return '<i class="inboxW28 inboxWn">牛' + copyNew + '</i><i class="inboxW28 dxds_xiao">' + '牛小' + '</i><i class="inboxW28 dxds_dan">' + '牛单' + '</i>';
                              } else if (copyNew <= 5 && copyNew % 2 == 0) {
                                return '<i class="inboxW28 inboxWn">牛' + copyNew + '</i><i class="inboxW28 dxds_xiao">' + '牛小' + '</i><i class="inboxW28 dxds_shuang">' + '牛双' + '</i>';
                              } else if (copyNew > 5 && copyNew % 2 != 0) {
                                return '<i class="inboxW28 inboxWn">牛' + copyNew + '</i><i class="inboxW28 dxds_da">' + '牛大' + '</i><i class="inboxW28 dxds_dan">' + '牛单' + '</i>';
                              } else if (copyNew > 5 && copyNew % 2 == 0) {
                                return '<i class="inboxW28 inboxWn">牛' + copyNew + '</i><i class="inboxW28 dxds_da">' + '牛大' + '</i><i class="inboxW28 dxds_shuang">' + '牛双' + '</i>';
                              }
                            }
                          }
                        }
                      }
                    }
                    return '<i class="inboxW28">' + '无牛' + '</i><i class="inboxW28 ">' + '-' + '</i><i class="inboxW28 ">' + '-' + '</i>';

                    function sumNn(arr) {
                      return arr.reduce(function (a, b) {
                        return a + b
                      }) % 10;
                    }
                  }
                  //数组转对象,对象转数组
                  function arrToObj(arr) {
                    var obj = {};
                    for (var a = 0; a < arr.length; a++) {
                      if (obj[arr[a]]) {
                        obj[arr[a]]++;
                      } else {
                        obj[arr[a]] = 1;
                      }
                    }
                    return obj;
                  }

                  function objToArr(obj) {
                    var arr = [];
                    for (var k in obj) {
                      if (obj.hasOwnProperty(k)) {
                        var o = {};
                        o[k] = obj[k];
                        arr.push(o);
                      }
                    }
                    return arr;
                  }
                  //数组排序
                  function sortArray(arr) {
                    return arr.sort().sort(function (a, b) {
                      if (b == 9) {
                        a += 10;
                      }
                      return a - b;
                    });
                  }
                  //前三中三后三形态判断函数
                  function checkQsZsHsXt(arr) {
                    if (arr.length != 3) {
                      return;
                    }
                    if (objToArr(arrToObj(arr)).length === 1) {
                      return '<span style="display:table-cell;" class="sxxt_bz">' + '豹子' + '</span>';
                    } else if (objToArr(arrToObj(arr)).length === 2) {
                      return '<span style="display:table-cell;" class="sxxt_dz">' + '对子' + '</span>';
                    } else if (objToArr(arrToObj(arr)).length === 3) {
                      var sortArr = sortArray(arr);
                      if (sortArr.indexOf(9) != -1 && sortArr.indexOf(0) != -1) {
                        if (sortArr.indexOf(9) == 0) {
                          if (Math.checkShunZi(arr)) {
                            return '<span style="display:table-cell;" class="sxxt_sz">' + '顺子' + '</span>';
                          } else if ((Number(sortArr[1]) + 10 - 9 == 1 && sortArr[2] - sortArr[1] != 1) || (Number(sortArr[1]) + 10 - 9 != 1 && sortArr[2] - sortArr[1] == 1) || (arr.indexOf(0) != -1 && arr.indexOf(9) != -1)) {
                            return '<span style="display:table-cell;" class="sxxt_bs">' + '半顺' + '</span>';
                          } else if (Number(sortArr[1]) + 10 - 9 != 1 && sortArr[2] - sortArr[1] != 1) {
                            return '<span style="display:table-cell;" class="sxxt_zal">' + '杂六' + '</span>';
                          }
                        } else if (sortArr.indexOf(9) == 1) {
                          if (Math.checkShunZi(arr)) {
                            return '<span style="display:table-cell;" class="sxxt_sz">' + '顺子' + '</span>';
                          } else if ((Number(sortArr[2]) + 10 - 9 == 1 && sortArr[1] - sortArr[0] != 1) || (Number(sortArr[2]) + 10 - 9 != 1 && sortArr[1] - sortArr[0] == 1) || (arr.indexOf(0) != -1 && arr.indexOf(9) != -1)) {
                            return '<span style="display:table-cell;" class="sxxt_bs">' + '半顺' + '</span>';
                          } else if (Number(sortArr[2]) + 10 - 9 != 1 && sortArr[1] - sortArr[0] != 1) {
                            return '<span style="display:table-cell;" class="sxxt_zal">' + '杂六' + '</span>';
                          }
                        }
                      } else {
                        if (Math.checkShunZi(arr)) {
                          return '<span style="display:table-cell;" class="sxxt_sz">' + '顺子' + '</span>';
                        } else if ((arr.sort()[2] - arr.sort()[1] == 1 && arr.sort()[1] - arr.sort()[0] != 1) || (arr.sort()[2] - arr.sort()[1] != 1 && arr.sort()[1] - arr.sort()[0] == 1)) {
                          return '<span style="display:table-cell;" class="sxxt_bs">' + '半顺' + '</span>';
                        } else if (arr.sort()[2] - arr.sort()[1] != 1 && arr.sort()[1] - arr.sort()[0] != 1) {
                          if (arr[0] == 0 && arr[2] == 9) {
                            return '<span style="display:table-cell;" class="sxxt_bs">' + '半顺' + '</span>';
                          }
                          return '<span style="display:table-cell;" class="sxxt_zal">' + '杂六' + '</span>';
                        }
                      }
                    }
                  }
                  //期号显示
                  function check_issue_temp() {
                    if (d[i].lottery === 'WBGMMC') {
                      return '-';
                    } else if (d[i].lottery === 'BJ5FC' || d[i].lottery === 'XN5FC' || d[i].lottery === 'TW5FC' || d[i].lottery === 'BJPK10' || d[i].lottery === 'XGPK10' || d[i].lottery === 'MCPK10') {
                      if (d[i].lottery === 'TW5FC') {
                        return d[i].issueNo.slice(-6);
                      } else if (d[i].lottery === 'XN5FC') {
                        return d[i].issueNo.slice(-3);
                      } else if (d[i].lottery === 'XGPK10') {
                        return d[i].issueNo.slice(-3);
                      } else if (d[i].lottery === 'MCPK10') {
                        return d[i].issueNo.slice(-4);
                      } else {
                        return d[i].issueNo;
                      }
                    } else if (d[i].lottery === 'TCP3' || d[i].lottery === 'TCP5' || d[i].lottery === '3DFC' || d[i].lottery === 'JX11Y' || d[i].lottery === 'GD11Y' || d[i].lottery === 'SD11Y' || d[i].lottery === 'SH11Y' || d[i].lottery === 'AH11Y' || d[i].lottery === 'HLJ11Y' || d[i].lottery === 'MC11Y' || d[i].lottery === 'YN11Y' || d[i].lottery === 'SCKL12' || d[i].lottery === 'HUB11Y') {
                      return d[i].issueNo.slice(4, d[i].issueNo.length);
                    } else {
                      return d[i].issueNo.split('-')[1];
                    }

                  }
                  //六合彩特码
                  function checkSpecial(num, tm) {
                    let animalsNums= {
                          '鼠': 0,
                          '牛': 1,
                          '虎': 2,
                          '兔': 3,
                          '龙': 4,
                          '蛇': 5,
                          '马': 6,
                          '羊': 7,
                          '猴': 8,
                          '鸡': 9,
                          '狗': 10,
                          '猪': 11,
                          'base': 12
                    },
                    animalsIssue= [
                        '01,13,25,37,49', '12,24,36,48', '11,23,35,47', '10,22,34,46', '09,21,33,45', '08,20,32,44',
                        '07,19,31,43', '06,18,30,42', '05,17,29,41', '04,16,28,40', '03,15,27,39', '02,14,26,38'
                        ],
                    animals= [
                            {cont: '鼠', nums: '01,13,25,37,49'},
                            {cont: '牛', nums: '12,24,36,48'},
                            {cont: '虎', nums: '11,23,35,47'},
                            {cont: '兔', nums: '10,22,34,46'},
                            {cont: '龙', nums: '09,21,33,45'},
                            {cont: '蛇', nums: '08,20,32,44'},
                            {cont: '马', nums: '07,19,31,43'},
                            {cont: '羊', nums: '06,18,30,42'},
                            {cont: '猴', nums: '05,17,29,41'},
                            {cont: '鸡', nums: '04,16,28,40'},
                            {cont: '狗', nums: '03,15,27,39'},
                            {cont: '猪', nums: '02,14,26,38'}
                            ],
                    tred= '01,02,07,08,12,13,18,19,23,24,29,30,34,35,40,45,46',
                    tblue= '03,04,09,10,14,15,20,25,26,31,36,37,41,42,47,48',
                    tgreen= '05,06,11,16,17,21,22,27,28,32,33,38,39,43,44,49';
                    let i,j,tmp,tpl,count = 0,obj={},
                        reg = new RegExp('(^|,)' + tm + '(,|$)', 'i');
                    if(animals[animalsNums[num]].nums.split(',').length !== 5) {
                      var aniNums = animalsNums,issues = animalsIssue;
                      for(i=aniNums[num]; i<aniNums.base; i++) {
                        animals[i].nums = issues[count++];
                      }
                      for(i=0; i<aniNums[num]; i++) {
                        animals[i].nums = issues[count++];
                      }
                    }
                    for(j=0; j<animals.length; j++) {
                      tmp = animals[j];
                      if(reg.test(tmp.nums)) {
                        obj.liCont = tmp.cont;
                        break;
                      }
                    }
                    if(reg.test(tred)) {
                      obj.color = '红';
                      obj.colorStyle = 'fe-red';
                    } else if(reg.test(tgreen)) {
                      obj.color = '绿';
                      obj.colorStyle = 'fe-green';
                    } else if(reg.test(tblue)) {
                      obj.color = '蓝';
                      obj.colorStyle = 'fe-blue';
                    }

                    if (tm >= 25) {
                      obj.maxmin = '大';
                      obj.fontDX = 'fe-red';
                    } else {
                      obj.maxmin = '小';
                      obj.fontDX = 'fe-blue';
                    }

                    if(tm % 2 === 0) {
                      obj.type = '双';
                      obj.fontDS = 'fe-blue';
                    } else {
                      obj.type = '单';
                      obj.fontDS = 'fe-red';
                    }

                    tpl = `<span class="rGames">${obj.liCont}</span>
                      <span class="rGames_2 ${obj.colorStyle}">${obj.color}</span>
                      <span class="rGames_3 ${obj.fontDX}">${obj.maxmin}</span>
                      <span class="rGames_4 ${obj.fontDS}">${obj.type}</span>`;
                    return tpl;
                  }

                  if (['RBSSM', 'CQSSC', 'TJSSC', 'XJSSC', 'TCP5', 'BJ5FC', 'HN5FC', 'XN5FC', 'TW5FC', 'HG1F5', 'WBGFFC', 'WBG5FC', 'WBGMMC', 'RDFFC', 'RDLFC', 'TXFFC', "QQSSM", "TX1FC"].indexOf(Lottery.lt) !== -1) {
                    var codeToArr = d[i].code.split(',');
                    var codeToObj = {};
                    var h2Nums = codeToArr.slice(-2);
                    var h3Nums = codeToArr.slice(-3);
                    var q2Nums = codeToArr.slice(0, 2);
                    var q3Nums = codeToArr.slice(0, 3);
                    var z3Nums = codeToArr.slice(1, 4);
                    var z3Nums = codeToArr.slice(1, 4);
                    var wxhz = codeToArr.reduce(function (a, b) {
                      return Number(a) + Number(b);
                    }, 0);
                    var q3hz = q3Nums.reduce(function (a, b) {
                      return Number(a) + Number(b);
                    }, 0);
                    var z3hz = codeToArr.slice(1, 4).reduce(function (a, b) {
                      return Number(a) + Number(b);
                    }, 0);
                    var h3hz = h3Nums.reduce(function (a, b) {
                      return Number(a) + Number(b);
                    }, 0);
                    //大小
                    var wxdxgs_d = codeToArr.filter(function (item, index) {
                      return Number(item) > 4;
                    }).length;
                    var wxdxgs_x = codeToArr.filter(function (item, index) {
                      return Number(item) <= 4 && Number(item) >= 0;
                    }).length;
                    var sxdxgs_d = codeToArr.slice(-4).filter(function (item, index) {
                      return Number(item) > 4;
                    }).length;
                    var sxdxgs_x = codeToArr.slice(-4).filter(function (item, index) {
                      return Number(item) <= 4 && Number(item) >= 0;
                    }).length;
                    var qsdxgs_d = codeToArr.slice(0, 3).filter(function (item, index) {
                      return Number(item) > 4;
                    }).length;
                    var qsdxgs_x = codeToArr.slice(0, 3).filter(function (item, index) {
                      return Number(item) <= 4 && Number(item) >= 0;
                    }).length;
                    var zsdxgs_d = codeToArr.slice(1, 4).filter(function (item, index) {
                      return Number(item) > 4;
                    }).length;
                    var zsdxgs_x = codeToArr.slice(1, 4).filter(function (item, index) {
                      return Number(item) <= 4 && Number(item) >= 0;
                    }).length;
                    var hsdxgs_d = codeToArr.slice(-3).filter(function (item, index) {
                      return Number(item) > 4;
                    }).length;
                    var hsdxgs_x = codeToArr.slice(-3).filter(function (item, index) {
                      return Number(item) <= 4 && Number(item) >= 0;
                    }).length;
                    //单双
                    var wxdsgs_d = codeToArr.filter(function (item, index) {
                      return Number(item) % 2 != 0;
                    }).length;
                    var wxdsgs_s = codeToArr.filter(function (item, index) {
                      return Number(item) % 2 === 0;
                    }).length;
                    var sxdsgs_d = codeToArr.slice(-4).filter(function (item, index) {
                      return Number(item) % 2 != 0;
                    }).length;
                    var sxdsgs_s = codeToArr.slice(-4).filter(function (item, index) {
                      return Number(item) % 2 === 0;
                    }).length;
                    var qsdsgs_d = codeToArr.slice(0, 3).filter(function (item, index) {
                      return Number(item) % 2 != 0;
                    }).length;
                    var qsdsgs_s = codeToArr.slice(0, 3).filter(function (item, index) {
                      return Number(item) % 2 === 0;
                    }).length;
                    var zsdsgs_d = codeToArr.slice(1, 4).filter(function (item, index) {
                      return Number(item) % 2 != 0;
                    }).length;
                    var zsdsgs_s = codeToArr.slice(1, 4).filter(function (item, index) {
                      return Number(item) % 2 === 0;
                    }).length;
                    var hsdsgs_d = codeToArr.slice(-3).filter(function (item, index) {
                      return Number(item) % 2 != 0;
                    }).length;
                    var hsdsgs_s = codeToArr.slice(-3).filter(function (item, index) {
                      return Number(item) % 2 === 0;
                    }).length;


                    for (var j = 0; j < codeToArr.length; j++) {
                      if (codeToObj[codeToArr[j]]) {
                        codeToObj[codeToArr[j]]++;
                      } else {
                        codeToObj[codeToArr[j]] = 1;
                      }
                    }
                    var codeToObjKeyCounts = [];
                    for (var _key in codeToObj) {
                      if (codeToObj.hasOwnProperty(_key)) {
                        var o = {};
                        o[_key] = codeToObj[_key];
                        codeToObjKeyCounts.push(o);
                      }
                    }

                    function smXt(len, hzFlag, zux_hzFlag, kdFlag, q3NumsHz, kdNum) {
                      if (hzFlag) {
                        if (zux_hzFlag && len === 1) { //组选和值豹子号显示'---‘
                          return '---';
                        }
                        return `<i class="orangeBg">${q3NumsHz}</i>`;
                      } else if (kdFlag) {
                        return `<i class="orangeBg">${kdNum}</i>`;
                      } else {
                        switch (len) {
                          case 1:
                            return '---';
                            break;
                          case 2:
                            return '组三';
                            break;
                          case 3:
                            return '组六';
                            break;
                          default:
                            break;
                        }
                      }
                    }
                    //判断是5星4星等Tab渲染开奖结果
                    if (dataType === "wx") {
                      if (codeToObjKeyCounts.length === 5) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_120">' + "组120" + '</span>';
                      } else if (codeToObjKeyCounts.length === 4) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_60">' + "组60" + '</span>';
                      } else if (codeToObjKeyCounts.length === 3) {
                        var zu30_zu20_flag = false;
                        for (var key in codeToObj) {
                          if (codeToObj[key] === 3) {
                            zu30_zu20_flag = true;
                          }
                        }
                        if (zu30_zu20_flag) {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_20">' + "组20" + '</span>';
                        } else {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_30">' + "组30" + '</span>';
                        }
                      } else if (codeToObjKeyCounts.length === 2) {
                        var zu10_zu5_flag = false;
                        for (var key in codeToObj) {
                          if (codeToObj[key] === 3 || codeToObj[key] === 2) {
                            zu10_zu5_flag = true;
                          }
                        }
                        if (zu10_zu5_flag) {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_10">' + "组10" + '</span>';
                        } else {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_5">' + "组5" + '</span>';
                        }
                      } else {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + "---" + '</span>';
                      }
                    } else if (dataType === "sx") {
                      var sx_codeToObjKeyCounts = objToArr(arrToObj(codeToArr.slice(1, 5)));
                      if (sx_codeToObjKeyCounts.length === 4) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sixzt_24">' + "组24" + '</span>';
                      } else if (sx_codeToObjKeyCounts.length === 3) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sixzt_12">' + "组12" + '</span>';
                      } else if (sx_codeToObjKeyCounts.length === 2) {
                        var zu6_zu4_flag = false;
                        for (var key in arrToObj(codeToArr.slice(1, 5))) {
                          if (arrToObj(codeToArr.slice(1, 5))[key] === 2) {
                            zu6_zu4_flag = true;
                          }
                        }
                        if (zu6_zu4_flag) {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0) {
                              return '<em>' + a + '</em>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sixzt_6">' + "组6" + '</span>';
                        } else {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0) {
                              return '<em>' + a + '</em>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sixxt_4">' + "组4" + '</span>';
                        }
                      } else {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%">' + "---" + '</span>';
                      }
                    } else if (dataType === "qsm") {
                      var qsmArrCounts = objToArr(arrToObj(q3Nums));
                      var q3NumsHz = q3Nums.reduce(function (a, b) {
                        return Number(a) + Number(b);
                      });
                      let max = Math.max(...q3Nums);
                      let min = Math.min(...q3Nums);
                      let kdNum = max - min;
                      let zux_hzFlag = subDataType === 'zux_hz';
                      let hzFlag = subDataType.split('_')[1] === 'hz';
                      let kdFlag = subDataType.split('_')[1] === 'kd';

                      if (qsmArrCounts.length === 3) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 3 || b == 4) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sxzt_6">' + smXt(qsmArrCounts.length, hzFlag, zux_hzFlag, kdFlag, q3NumsHz, kdNum) + '</span>';
                      } else if (qsmArrCounts.length === 2) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 3 || b == 4) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sxzt_3">' + smXt(qsmArrCounts.length, hzFlag, zux_hzFlag, kdFlag, q3NumsHz, kdNum) + '</span>';
                      } else {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 3 || b == 4) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%">' + smXt(qsmArrCounts.length, hzFlag, zux_hzFlag, kdFlag, q3NumsHz, kdNum) + '</span>';
                      }
                    } else if (dataType === "zsm") {
                      var zsmArrCounts = objToArr(arrToObj(z3Nums));
                      var z3NumsHz = z3Nums.reduce(function (a, b) {
                        return Number(a) + Number(b);
                      });
                      let zux_hzFlag = subDataType === 'zux_hz';
                      let hzFlag = subDataType.split('_')[1] === 'hz';
                      let max = Math.max(...z3Nums);
                      let min = Math.min(...z3Nums);
                      let kdNum = max - min;
                      let kdFlag = subDataType.split('_')[1] == 'kd';
                      if (zsmArrCounts.length === 3) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0 || b == 4) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sxzt_6">' + smXt(zsmArrCounts.length, hzFlag, zux_hzFlag, kdFlag, z3NumsHz, kdNum) + '</span>';
                      } else if (zsmArrCounts.length === 2) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0 || b == 4) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sxzt_3">' + smXt(zsmArrCounts.length, hzFlag, zux_hzFlag, kdFlag, z3NumsHz, kdNum) + '</span>';
                      } else {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0 || b == 4) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%">' + smXt(zsmArrCounts.length, hzFlag, zux_hzFlag, kdFlag, z3NumsHz, kdNum) + '</span>';
                      }
                    } else if (dataType === "hsm") {
                      var hsmArrCounts = objToArr(arrToObj(h3Nums));
                      var h3NumsHz = h3Nums.reduce(function (a, b) {
                        return Number(a) + Number(b);
                      });
                      let zux_hzFlag = subDataType === 'zux_hz';
                      let hzFlag = subDataType.split('_')[1] === 'hz';
                      let max = Math.max(...h3Nums);
                      let min = Math.min(...h3Nums);
                      let kdNum = max - min;
                      let kdFlag = subDataType.split('_')[1] == 'kd';
                      if (hsmArrCounts.length === 3) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0 || b == 1) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sxzt_6">' + smXt(hsmArrCounts.length, hzFlag, zux_hzFlag, kdFlag, h3NumsHz, kdNum) + '</span>';
                      } else if (hsmArrCounts.length === 2) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0 || b == 1) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sxzt_3">' + smXt(hsmArrCounts.length, hzFlag, zux_hzFlag, kdFlag, h3NumsHz, kdNum) + '</span>';
                      } else {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0 || b == 1) {
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%">' + smXt(hsmArrCounts.length, hzFlag, zux_hzFlag, kdFlag, h3NumsHz, kdNum) + '</span>';
                      }
                    } else if (dataType === "em") {

                      if (subDataType == 'zx_hfs' || subDataType == 'zx_hhz' || subDataType == 'zx_hds' || subDataType == 'zux_hfs' || subDataType == 'zux_hds' || subDataType == 'zux_hhz' || subDataType == 'zux_hbd') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 3 || b == 4) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%">' + ((codeToArr[3] == codeToArr[4] && subDataType.split('_')[0] === 'zux') ? '---' : ('<i class="orangeBg">' + codeToArr.slice(-2).reduce(function (a, b) {
                          return Number(a) + Number(b);
                        }, 0)) + '</i>') + '</span>';
                      } else if (subDataType == 'zx_qfs' || subDataType == 'zx_qhz' || subDataType == 'zx_qds' || subDataType == 'zux_qfs' || subDataType == 'zux_qds' || subDataType == 'zux_qhz' || subDataType == 'zux_qbd') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0 || b == 1) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%">' + ((codeToArr[0] == codeToArr[1] && subDataType.split('_')[0] === 'zux') ? '---' : ('<i class="orangeBg">' + codeToArr.slice(0, 2).reduce(function (a, b) {
                          return Number(a) + Number(b);
                        }, 0)) + '</i>') + '</span>';
                      } else if (subDataType == 'zx_qkd') {
                        let max = Math.max(...q2Nums);
                        let min = Math.min(...q2Nums);
                        let kdNum = max - min;
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 0 || b == 1) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%">' + '<i class="orangeBg">' + kdNum + '</i>' + '</span>';
                      } else if (subDataType == 'zx_hkd') {
                        let max = Math.max(...h2Nums);
                        let min = Math.min(...h2Nums);
                        let kdNum = max - min;
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                          if (b == 3 || b == 4) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%">' + '<i class="orangeBg">' + kdNum + '</i>' + '</span>';
                      }

                    } else if (dataType === "dwd" || dataType === "bdd") {
                      if (dataType === "dwd") {
                        lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeToArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>';
                      } else if (dataType === "bdd") {
                        switch (subDataType) {
                          case 'bdd_qs1':
                          case 'bdd_qs2':
                            lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeToArr.map(function (a, b) {
                              if (b == 0 || b == 1 || b == 2) {
                                return '<em class="openCodeSelected">' + a + '</em>';
                              }
                              return '<em>' + a + '</em>';
                            }).join('') + '</span>';
                            break;
                          case 'bdd_z31':
                          case 'bdd_z32':
                            lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeToArr.map(function (a, b) {
                              if (b == 3 || b == 1 || b == 2) {
                                return '<em class="openCodeSelected">' + a + '</em>';
                              }
                              return '<em>' + a + '</em>';
                            }).join('') + '</span>';
                            break;
                          case 'bdd_hs1':
                          case 'bdd_hs2':
                            lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeToArr.map(function (a, b) {
                              if (b == 3 || b == 4 || b == 2) {
                                return '<em class="openCodeSelected">' + a + '</em>';
                              }
                              return '<em>' + a + '</em>';
                            }).join('') + '</span>';
                            break;
                          case 'bdd4_4x1':
                          case 'bdd4_4x2':
                          case 'bdd4_4x3':
                            lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeToArr.map(function (a, b) {
                              if (b == 0) {
                                return '<em>' + a + '</em>';
                              }
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }).join('') + '</span>';
                            break;
                          case 'bdd5_5x1':
                          case 'bdd5_5x2':
                          case 'bdd5_5x3':
                            lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeToArr.map(function (a, b) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }).join('') + '</span>';
                            break;
                          default:
                            break;
                        }
                      }

                    } else if (dataType === "dxds") {
                      switch (subDataType) {
                        case "dxds_h2":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 3 || b == 4) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }
                            return '<em>' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%">' + checkDxds(h2Nums[0]) + '  ' + checkDxds(h2Nums[1]) + '</span>';
                          break;
                        case "dxds_q2":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0 || b == 1) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }
                            return '<em>' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%">' + checkDxds(q2Nums[0]) + '  ' + checkDxds(q2Nums[1]) + '</span>';
                          break;
                        case "dxds_q3":
                          lotteryKind = '<span style="display:table-cell;width:30.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0 || b == 1 || b == 2) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }
                            return '<em>' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:49.33%;font-size: 12px;">' + checkDxds(q3Nums[0]) + '&nbsp;&nbsp;&nbsp;&nbsp;' + checkDxds(q3Nums[1]) + '&nbsp;&nbsp;&nbsp;&nbsp;' + checkDxds(q3Nums[2]) + '</span>';
                          break;
                        case "dxds_h3":
                          lotteryKind = '<span style="display:table-cell;width:30.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 2 || b == 3 || b == 4) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }
                            return '<em>' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:49.33%;font-size: 12px;">' + checkDxds(h3Nums[0]) + '&nbsp;&nbsp;&nbsp;&nbsp;' + checkDxds(h3Nums[1]) + '&nbsp;&nbsp;&nbsp;&nbsp;' + checkDxds(h3Nums[2]) + '</span>';
                          break;
                        case "dxgs_wx":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {

                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:30.33%;">' + '<i class="margin0_6">' + wxdxgs_d + '</i>' + '<i class="margin0_6">' + wxdxgs_x + '</i>' + '</span>';
                          break;
                        case "dxgs_sx":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0) {
                              return '<em>' + a + '</em>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:30.33%;">' + '<i class="margin0_6">' + sxdxgs_d + '</i>' + '<i class="margin0_6">' + sxdxgs_x + '</i>' + '</span>';
                          break;
                        case "dxgs_qs":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 3 || b == 4) {
                              return '<em>' + a + '</em>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:30.33%;">' + '<i class="margin0_6">' + qsdxgs_d + '</i>' + '<i class="margin0_6">' + qsdxgs_x + '</i>' + '</span>';
                          break;
                        case "dxgs_zs":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0 || b == 4) {
                              return '<em>' + a + '</em>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:30.33%;">' + '<i class="margin0_6">' + zsdxgs_d + '</i>' + '<i class="margin0_6">' + zsdxgs_x + '</i>' + '</span>';
                          break;
                        case "dxgs_hs":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0 || b == 1) {
                              return '<em>' + a + '</em>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:30.33%;">' + '<i class="margin0_6">' + hsdxgs_d + '</i>' + '<i class="margin0_6">' + hsdxgs_x + '</i>' + '</span>';
                          break;
                        case "dsgs_wx":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {

                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:30.33%;">' + '<i class="margin0_6">' + wxdsgs_d + '</i>' + '<i class="margin0_6">' + wxdsgs_s + '</i>' + '</span>';
                          break;
                        case "dsgs_sx":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0) {
                              return '<em>' + a + '</em>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:30.33%;">' + '<i class="margin0_6">' + sxdsgs_d + '</i>' + '<i class="margin0_6">' + sxdsgs_s + '</i>' + '</span>';
                          break;
                        case "dsgs_qs":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 3 || b == 4) {
                              return '<em>' + a + '</em>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:30.33%;">' + '<i class="margin0_6">' + qsdsgs_d + '</i>' + '<i class="margin0_6">' + qsdsgs_s + '</i>' + '</span>';
                          break;
                        case "dsgs_zs":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0 || b == 4) {
                              return '<em>' + a + '</em>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:30.33%;">' + '<i class="margin0_6">' + zsdsgs_d + '</i>' + '<i class="margin0_6">' + zsdsgs_s + '</i>' + '</span>';
                          break;
                        case "dsgs_hs":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0 || b == 1) {
                              return '<em>' + a + '</em>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:30.33%;">' + '<i class="margin0_6">' + hsdsgs_d + '</i>' + '<i class="margin0_6">' + hsdsgs_s + '</i>' + '</span>';
                          break;
                        default:
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 3 || b == 4) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }
                            return '<em>' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkDxds(h2Nums[0]) + '  ' + checkDxds(h2Nums[1]) + '</span>';
                          break;
                      }
                    } else if (dataType === "qw") {
                      if ((me.lt === 'CQSSC' || me.lt === 'TXFFC') && /lhh/.test(me.method)) {
                        lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeToArr.map(function (a, b) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }).join('') + '</span>';
                      } else {
                        switch (subDataType) {
                          case 'lhh_wq':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 0 || b == 1) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[0], codeToArr[1]) + '</span>';
                            break;
                          case 'lhh_wb':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 0 || b == 2) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[0], codeToArr[2]) + '</span>';
                            break;
                          case 'lhh_ws':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 0 || b == 3) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[0], codeToArr[3]) + '</span>';
                            break;
                          case 'lhh_wg':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 0 || b == 4) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[0], codeToArr[4]) + '</span>';
                            break;
                          case 'lhh_qb':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 1 || b == 2) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[1], codeToArr[2]) + '</span>';
                            break;
                          case 'lhh_qs':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 1 || b == 3) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[1], codeToArr[3]) + '</span>';
                            break;
                          case 'lhh_qg':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 1 || b == 4) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[1], codeToArr[4]) + '</span>';
                            break;
                          case 'lhh_bs':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 2 || b == 3) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[2], codeToArr[3]) + '</span>';
                            break;
                          case 'lhh_bg':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 2 || b == 4) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[2], codeToArr[4]) + '</span>';
                            break;
                          case 'lhh_sg':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 3 || b == 4) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[3], codeToArr[4]) + '</span>';
                            break;
                          case 'xt_q3':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 3 || b == 4) {
                                    return '<em>' + a + '</em>';
                                  }
                                  return '<em class="openCodeSelected">' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkQsZsHsXt(q3Nums) + '</span>';
                            break;
                          case 'xt_z3':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 0 || b == 4) {
                                    return '<em>' + a + '</em>';
                                  }
                                  return '<em class="openCodeSelected">' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkQsZsHsXt(z3Nums) + '</span>';
                            break;
                          case 'xt_h3':
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 0 || b == 1) {
                                    return '<em>' + a + '</em>';
                                  }
                                  return '<em class="openCodeSelected">' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkQsZsHsXt(h3Nums) + '</span>';
                            break;
                          case 'ts_yffs':
                          case 'ts_sxbx':
                          case 'ts_hscs':
                          case 'ts_sjfc':
                            if (codeToObjKeyCounts.length === 5) {
                              lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_120">' + "组120" + '</span>';
                            } else if (codeToObjKeyCounts.length === 4) {
                              lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_60">' + "组60" + '</span>';
                            } else if (codeToObjKeyCounts.length === 3) {
                              var zu30_zu20_flag = false;
                              for (var key in codeToObj) {
                                if (codeToObj[key] === 3) {
                                  zu30_zu20_flag = true;
                                }
                              }
                              if (zu30_zu20_flag) {
                                lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                      return '<em class="openCodeSelected">' + a + '</em>';
                                    }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_20">' + "组20" + '</span>';
                              } else {
                                lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                      return '<em class="openCodeSelected">' + a + '</em>';
                                    }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_30">' + "组30" + '</span>';
                              }
                            } else if (codeToObjKeyCounts.length === 2) {
                              var zu10_zu5_flag = false;
                              for (var key in codeToObj) {
                                if (codeToObj[key] === 3 || codeToObj[key] === 2) {
                                  zu10_zu5_flag = true;
                                }
                              }
                              if (zu10_zu5_flag) {
                                lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                      return '<em class="openCodeSelected">' + a + '</em>';
                                    }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_10">' + "组10" + '</span>';
                              } else {
                                lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                      return '<em class="openCodeSelected">' + a + '</em>';
                                    }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_5">' + "组5" + '</span>';
                              }
                            } else {
                              lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + "---" + '</span>';
                            }
                            break;
                          default:
                            lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                  if (b == 0 || b == 1) {
                                    return '<em class="openCodeSelected">' + a + '</em>';
                                  }
                                  return '<em>' + a + '</em>';
                                }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeToArr[0], codeToArr[1]) + '</span>';
                            break;
                        }
                      }
                    } else if (dataType === 'nn') {
                      lotteryKind = '<span style="display:table-cell;width:30.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                        return '<em class="openCodeSelected">' + a + '</em>';
                      }).join('') + '</span>' + '<span style="display:table-cell;width:49.33%;">' + checkNn(codeToArr) + '</span>';
                    } else if (dataType === 'zh') {
                      switch (subDataType) {
                        case "hzdxds_5xhz":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + '<i class="inboxW27 orangeBg">' + wxhz + '</i>' + checkSscWxHzDxds(wxhz) + '</span>';
                          break;
                        case "hzdxds_q3hz":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0 || b == 1 || b == 2) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }
                            return '<em>' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + '<i class="inboxW27 orangeBg">' + q3hz + '</i>' + checkSscSmHzDxds(q3hz) + '</span>';
                          break;
                        case "hzdxds_z3hz":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 1 || b == 2 || b == 3) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }
                            return '<em>' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + '<i class="inboxW27 orangeBg">' + z3hz + '</i>' + checkSscSmHzDxds(z3hz) + '</span>';
                          break;
                        case "hzdxds_h3hz":
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 2 || b == 3 || b == 4) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }
                            return '<em>' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + '<i class="inboxW27 orangeBg">' + h3hz + '</i>' + checkSscSmHzDxds(h3hz) + '</span>';
                          break;
                      }
                    } else if (dataType === 'sh') {
                      if (codeToObjKeyCounts.length === 5) {
                        if (Math.checkShunZi(codeToArr)) {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                return '<em class="openCodeSelected">' + a + '</em>';
                              }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxxt_sz">' + '顺子' + '</span>';
                        } else {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                return '<em class="openCodeSelected">' + a + '</em>';
                              }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxxt_dp">' + '单牌' + '</span>';
                        }
                      } else if (codeToObjKeyCounts.length === 4) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxxt_yd">' + '一对' + '</span>';
                      } else if (codeToObjKeyCounts.length === 3) {
                        var ld_st_flag = false;
                        for (var key in codeToObj) {
                          if (codeToObj[key] === 2) {
                            ld_st_flag = true;
                          }
                        }
                        if (ld_st_flag) {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                return '<em class="openCodeSelected">' + a + '</em>';
                              }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxzt_ld">' + '两对' + '</span>';
                        } else {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                return '<em class="openCodeSelected">' + a + '</em>';
                              }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxxt_st">' + '三条' + '</span>';
                        }
                      } else if (codeToObjKeyCounts.length === 2) {
                        var st_hl_flag = false;
                        for (var key in codeToObj) {
                          if (codeToObj[key] === 4) {
                            st_hl_flag = true;
                          }
                        }
                        if (st_hl_flag) {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                return '<em class="openCodeSelected">' + a + '</em>';
                              }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxxt_sit">' + '四条' + '</span>';
                        } else {
                          lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                                return '<em class="openCodeSelected">' + a + '</em>';
                              }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="wxxt_hulu">' + '葫芦' + '</span>';
                        }
                      } else {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + '---' + '</span>';
                      }
                    } else if (dataType === 'bjl') {
                      lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeToArr.map(function (a, b) {
                            if (b == 0 || b == 1 || b == 3 || b == 4) {
                              return '<em class="openCodeSelected">' + a + '</em>';
                            }
                            return '<em>' + a + '</em>';
                          }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkBjl(codeToArr[0], codeToArr[1], codeToArr[3], codeToArr[4]) + '</span>';
                    } else if (dataType === "rx2" || dataType === "rx3" || dataType === "rx4") {
                      rGames.text('');
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeToArr.map(function (a, b) {
                        return '<em class="openCodeSelected">' + a + '</em>';
                      }).join('') + '</span>';
                    }
                  } else if (d[i].lottery === '3DFC' || d[i].lottery === 'MC3D' || d[i].lottery === 'TCP3' || d[i].lottery === 'SHSSL') {
                    var codeArr = d[i].code.split(',');
                    if (dataType === 'sm' && (subDataType === 'zx_fs' || subDataType === 'zx_ds')) {
                      var arrNew = objToArr(arrToObj(codeArr));
                      if (arrNew.length === 2) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sxzt_3">' + '组三' + '</span>';
                      } else if (arrNew.length === 3) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sxzt_6">' + '组六' + '</span>';
                      } else if (arrNew.length === 1) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + '---' + '</span>';
                      }
                    } else if (dataType === 'sm' && (subDataType === 'zux_z3' || subDataType === 'zux_z6' || subDataType === 'zux_hh')) {
                      var arrNew = objToArr(arrToObj(codeArr));
                      if (arrNew.length === 2) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sxzt_3">' + '组三' + '</span>';
                      } else if (arrNew.length === 3) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;" class="sxzt_6">' + '组六' + '</span>';
                      } else if (arrNew.length === 1) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + '---' + '</span>';
                      }
                    } else if (dataType === 'sm' && subDataType === 'zux_hz') {
                      var arrNew = objToArr(arrToObj(codeArr));
                      if (arrNew.length === 1) {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + '---' + '</span>';
                      } else {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;""><i class="orangeBg">' + codeArr.reduce(function (a, b) {
                          return Number(a) + Number(b);
                        }) + '</i></span>';
                      }
                    } else if (dataType === 'sm' && subDataType === 'zx_hz') {
                      var arrNew = objToArr(arrToObj(codeArr));
                      lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                        return '<em class="openCodeSelected">' + a + '</em>';
                      }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;"><i class="orangeBg">' + codeArr.reduce(function (a, b) {
                        return Number(a) + Number(b);
                      }) + '</i></span>';
                    } else if (dataType === 'em') {
                      if (subDataType == 'zx_hfs' || subDataType == 'zx_hds' || subDataType == 'zux_hfs' || subDataType == 'zux_hds') {
                        lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeArr.map(function (a, b) {
                          if (b == 1 || b == 2) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>';
                      } else if (subDataType == 'zx_qfs' || subDataType == 'zx_qds' || subDataType == 'zux_qfs' || subDataType == 'zux_qds') {
                        lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeArr.map(function (a, b) {
                          if (b == 0 || b == 1) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>';
                      }

                    } else if (dataType === 'qw') {
                      if (subDataType === 'lhh_bs') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          if (b == 0 || b == 1) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeArr[0], codeArr[1]) + '</span>';
                      }
                      if (subDataType === 'lhh_bg') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          if (b == 0 || b == 2) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeArr[0], codeArr[2]) + '</span>';
                      }
                      if (subDataType === 'lhh_sg') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          if (b == 1 || b == 2) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkLhh(codeArr[1], codeArr[2]) + '</span>';
                      }
                      if (subDataType === 'xt_xt') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + codeArr.map(function (a, b) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + checkQsZsHsXt(codeArr) + '</span>';
                      }
                    } else if (dataType === 'dwd' || dataType === 'bdd') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeArr.map(function (a, b) {
                        return '<em class="openCodeSelected">' + a + '</em>';
                      }).join('') + '</span>';
                    }
                  } else if (d[i].lottery === 'GD11Y' || d[i].lottery === 'SD11Y' || d[i].lottery === 'JX11Y' || d[i].lottery === 'SH11Y' || d[i].lottery === 'AH11Y' || d[i].lottery === 'HLJ11Y' || d[i].lottery === 'MC11Y' || d[i].lottery === 'YN11Y' || d[i].lottery === 'GD11Y' || d[i].lottery === 'HUB11Y') {
                    var codeArr11y = d[i].code.split(',');

                    if (dataType === 'sm' || dataType === 'dwd' || dataType === 'bdd') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeArr11y.map(function (a, b) {
                        if (b == 0 || b == 1 || b == 2) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }
                        return '<em>' + a + '</em>';
                      }).join('') + '</span>';
                    } else if (dataType === 'em') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeArr11y.map(function (a, b) {
                        if (b == 0 || b == 1) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }
                        return '<em>' + a + '</em>';
                      }).join('') + '</span>';
                    } else if (dataType === 'qw' || dataType === 'rxfs' || dataType === 'rxds' || dataType === 'rxdt') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeArr11y.map(function (a, b) {
                        return '<em class="openCodeSelected">' + a + '</em>';
                      }).join('') + '</span>';
                    }
                  } else if (d[i].lottery === 'BJPK10' || d[i].lottery === 'XGPK10' || d[i].lottery === 'MCPK10') {
                    var pk10CodeToArr = d[i].code.split(',');

                    function checkPk10Dx(num) {
                      var num = Number(num);
                      if (num >= 0 && num <= 5 && num % 2 == 0) {
                        return '<i class="margin0_3 dxds_xiao">' + '小' + '</i>';
                      } else if (num >= 0 && num <= 5 && num % 2 != 0) {
                        return '<i class="margin0_3 dxds_xiao">' + '小' + '</i>';
                      } else if (num >= 6 && num <= 10 && num % 2 != 0) {
                        return '<i class="margin0_3 dxds_da">' + '大' + '</i>';
                      } else if (num >= 6 && num <= 10 && num % 2 == 0) {
                        return '<i class="margin0_3 dxds_da">' + '大' + '</i>';
                      }
                    }

                    function checkPk10Ds(num) {
                      var num = Number(num);
                      if (num >= 0 && num <= 5 && num % 2 == 0) {
                        return '<i class="margin0_3 dxds_shuang">' + '双' + '</i>';
                      } else if (num >= 0 && num <= 5 && num % 2 != 0) {
                        return '<i class="margin0_3 dxds_dan">' + '单' + '</i>';
                      } else if (num >= 6 && num <= 10 && num % 2 != 0) {
                        return '<i class="margin0_3 dxds_dan">' + '单' + '</i>';
                      } else if (num >= 6 && num <= 10 && num % 2 == 0) {
                        return '<i class="margin0_3 dxds_shuang">' + '双' + '</i>';
                      }
                    }

                    function checkPk10HzDx(num) {
                      var num = Number(num);
                      if (num >= 0 && num <= 10 && num % 2 == 0) {
                        return '<i class="margin0_3 dxds_xiao">' + '小' + '</i>';
                      } else if (num >= 0 && num <= 10 && num % 2 != 0) {
                        return '<i class="margin0_3 dxds_xiao">' + '小' + '</i>';
                      } else if (num >= 11 && num <= 19 && num % 2 != 0) {
                        return '<i class="margin0_3 dxds_da">' + '大' + '</i>';
                      } else if (num >= 11 && num <= 19 && num % 2 == 0) {
                        return '<i class="margin0_3 dxds_da">' + '大' + '</i>';
                      }
                    }

                    function checkPk10HzDs(num) {
                      var num = Number(num);
                      if (num >= 0 && num <= 10 && num % 2 == 0) {
                        return '<i class="margin0_3 dxds_shuang">' + '双' + '</i>';
                      } else if (num >= 0 && num <= 10 && num % 2 != 0) {
                        return '<i class="margin0_3 dxds_dan">' + '单' + '</i>';
                      } else if (num >= 11 && num <= 19 && num % 2 != 0) {
                        return '<i class="margin0_3 dxds_dan">' + '单' + '</i>';
                      } else if (num >= 11 && num <= 19 && num % 2 == 0) {
                        return '<i class="margin0_3 dxds_shuang">' + '双' + '</i>';
                      }
                    }
                    if (dataType === 'cq1') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                        if (b == 0) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }
                        if (b == 4) {
                          return '<em>' + a + '</em>' + '<br>';
                        }
                        return '<em>' + a + '</em>';
                      }).join('') + '</span>';
                    } else if (dataType === 'cq2') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                        if (b == 0 || b == 1) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }
                        if (b == 4) {
                          return '<em>' + a + '</em>' + '<br>';
                        }
                        return '<em>' + a + '</em>';
                      }).join('') + '</span>';
                    } else if (dataType === 'cq3') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                        if (b == 0 || b == 1 || b == 2) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }
                        if (b == 4) {
                          return '<em>' + a + '</em>' + '<br>';
                        }
                        return '<em>' + a + '</em>';
                      }).join('') + '</span>';
                    } else if (dataType === 'cq4') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                        if (b == 0 || b == 1 || b == 2 || b == 3) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }
                        if (b == 4) {
                          return '<em>' + a + '</em>' + '<br>';
                        }
                        return '<em>' + a + '</em>';
                      }).join('') + '</span>';
                    } else if (dataType === 'cq5') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                        if (b == 0 || b == 1 || b == 2 || b == 3 || b == 4) {
                          if (b == 4) {
                            return '<em class="openCodeSelected">' + a + '</em>' + '<br>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }
                        return '<em>' + a + '</em>';
                      }).join('') + '</span>';
                    } else if (dataType === 'dwd') {
                      if (subDataType === 'dwd_q5') {
                        lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 0 || b == 1 || b == 2 || b == 3 || b == 4) {
                            if (b == 4) {
                              return '<em class="openCodeSelected">' + a + '</em>' + '<br>';
                            }
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>';
                      } else if (subDataType === 'dwd_h5') {
                        lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 0 || b == 1 || b == 2 || b == 3 || b == 4) {
                            if (b == 4) {
                              return '<em>' + a + '</em>' + '<br>';
                            }
                            return '<em>' + a + '</em>';
                          }
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }).join('') + '</span>';
                      }
                    } else if (dataType === 'dx' || dataType === 'ds') {
                      if (subDataType === 'dx_d1' || subDataType === 'ds_d1') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 0) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + '<i style="color:orange;display:inline-block;width:16px;" class="margin0_3">' + pk10CodeToArr[0] + '</i>' + (subDataType === 'dx_d1' ? checkPk10Dx(pk10CodeToArr[0]) : checkPk10Ds(pk10CodeToArr[0])) + '</span>';
                      } else if (subDataType === 'dx_d2' || subDataType === 'ds_d2') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 1) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + '<i style="color:orange;display:inline-block;width:16px;" class="margin0_3">' + pk10CodeToArr[1] + '</i>' + (subDataType === 'dx_d2' ? checkPk10Dx(pk10CodeToArr[1]) : checkPk10Ds(pk10CodeToArr[1])) + '</span>';
                      } else if (subDataType === 'dx_d3' || subDataType === 'ds_d3') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 2) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + '<i style="color:orange;display:inline-block;width:16px;" class="margin0_3">' + pk10CodeToArr[2] + '</i>' + (subDataType === 'dx_d3' ? checkPk10Dx(pk10CodeToArr[2]) : checkPk10Ds(pk10CodeToArr[2])) + '</span>';
                      } else if (subDataType === 'dx_d4' || subDataType === 'ds_d4') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 3) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + '<i style="color:orange;display:inline-block;width:16px;" class="margin0_3">' + pk10CodeToArr[3] + '</i>' + (subDataType === 'dx_d4' ? checkPk10Dx(pk10CodeToArr[3]) : checkPk10Ds(pk10CodeToArr[3])) + '</span>';
                      } else if (subDataType === 'dx_d5' || subDataType === 'ds_d5') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 4) {
                            return '<em class="openCodeSelected">' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + '<i style="color:orange;display:inline-block;width:16px;" class="margin0_3">' + pk10CodeToArr[4] + '</i>' + (subDataType === 'dx_d5' ? checkPk10Dx(pk10CodeToArr[4]) : checkPk10Ds(pk10CodeToArr[4])) + '</span>';
                      } else if (subDataType === 'dx_q2' || subDataType === 'ds_q2') {
                        var dx_q2_gyjh = Number(pk10CodeToArr[0]) + Number(pk10CodeToArr[1]);
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 0 || b == 1) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + '<i style="display:inline-block;" class="margin0_3 orangeBg">' + dx_q2_gyjh + '</i>' + (subDataType === 'dx_q2' ? checkPk10HzDx(dx_q2_gyjh) : checkPk10HzDs(dx_q2_gyjh)) + '</span>';
                      }
                    } else if (dataType === 'hz') {
                      if (subDataType == 'hz_q2') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 0 || b == 1) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + '<i class="orangeBg">' + (Number(pk10CodeToArr[0]) + Number(pk10CodeToArr[1])) + '</i>' + '</span>';
                      } else if (subDataType == 'hz_q3') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 0 || b == 1 || b == 2) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + '<i class="orangeBg">' + (Number(pk10CodeToArr[0]) + Number(pk10CodeToArr[1]) + Number(pk10CodeToArr[2])) + '</i>' + '</span>';
                      }
                    } else if (dataType === 'lh') {
                      if (subDataType == 'lh_1v10') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 0 || b == 9) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + checkLhh(pk10CodeToArr[0], pk10CodeToArr[9]) + '</span>';
                      } else if (subDataType == 'lh_2v9') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 1 || b == 8) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + checkLhh(pk10CodeToArr[1], pk10CodeToArr[8]) + '</span>';
                      } else if (subDataType == 'lh_3v8') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 2 || b == 7) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + checkLhh(pk10CodeToArr[2], pk10CodeToArr[7]) + '</span>';
                      } else if (subDataType == 'lh_4v7') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 3 || b == 6) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em>' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + checkLhh(pk10CodeToArr[3], pk10CodeToArr[6]) + '</span>';
                      } else if (subDataType == 'lh_5v6') {
                        lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + pk10CodeToArr.map(function (a, b) {
                          if (b == 5) {
                            return '<em class="openCodeSelected">' + a + '</em>';
                          }
                          if (b == 4) {
                            return '<em class="openCodeSelected">' + a + '</em>' + '<br>';
                          }
                          return '<em>' + a + '</em>';
                        }).join('') + '</span>' + '<span style="display:table-cell;width:22.33%;">' + checkLhh(pk10CodeToArr[4], pk10CodeToArr[5]) + '</span>';
                      }
                    }
                  } else if (d[i].lottery === 'JSK3' || d[i].lottery === 'HNK3' || d[i].lottery === 'MCK3' || d[i].lottery === 'HBK3' || d[i].lottery === 'JLK3' || d[i].lottery === 'AHK3') {
                    var k3CodeArr = d[i].code.split(',');
                    var dxdsHzFlag = dataType == 'dxds' || dataType == 'hz';

                    function k3CheckXt(arr) {
                      var newArr = objToArr(arrToObj(arr));
                      if (newArr.length === 1) {
                        return '<i class="k3sth">' + '三同号' + '</i>';
                      } else if (newArr.length === 2) {
                        return '<i class="k3eth">' + '二同号' + '</i>';
                      } else if (newArr.length === 3) {
                        return '<i class="k3sbt">' + '三不同' + '</i>';
                      }
                    }

                    function k3Total(arr) {
                      return arr.reduce(function (a, b) {
                        return Number(a) + Number(b);
                      });
                    }

                    function k3Dxds(num) {
                      if (num >= 11 && num <= 18 && num % 2 == 0) {
                        return '<i class="margin0_6 dxds_da">' + '大' + '</i>' + '<i class="margin0_3 dxds_shuang">' + '双' + '</i>';
                      } else if (num >= 11 && num <= 18 && num % 2 != 0) {
                        return '<i class="margin0_6 dxds_da">' + '大' + '</i>' + '<i class="margin0_3 dxds_dan">' + '单' + '</i>';
                      } else if (num >= 3 && num <= 10 && num % 2 != 0) {
                        return '<i class="margin0_6 dxds_xiao">' + '小' + '</i>' + '<i class="margin0_3 dxds_dan">' + '单' + '</i>';
                      } else if (num >= 3 && num <= 10 && num % 2 == 0) {
                        return '<i class="margin0_6 dxds_xiao">' + '小' + '</i>' + '<i class="margin0_3 dxds_shuang">' + '双' + '</i>';
                      }
                    }

                    lotteryKind = '<span style="display:table-cell;width:33.33%;" class="openCode">' + k3CodeArr.map(function (a, b) {
                      return '<em class="openCodeSelected">' + a + '</em>';
                    }).join('') + '</span>' + '<span style="display:table-cell;width:33.33%;">' + (!dxdsHzFlag ? k3CheckXt(k3CodeArr) : '') + (dxdsHzFlag ? ('<i style="display:inline-block;" class="orangeBg">' + k3Total(k3CodeArr) + '</i>' + k3Dxds(k3Total(k3CodeArr))) : '') + '</span>';
                  } else if (d[i].lottery === 'SCKL12') {
                    let codeArrKl12 = d[i].code.split(',');
                    if (dataType === 'sm' || Lottery.method == 'bdd_bdd_3x1m') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeArrKl12.map(function (a, b) {
                        if (b == 0 || b == 1 || b == 2) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }
                        return '<em>' + a + '</em>';
                      }).join('') + '</span>';
                    } else if (dataType === 'em') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeArrKl12.map(function (a, b) {
                        if (b == 0 || b == 1) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }
                        return '<em>' + a + '</em>';
                      }).join('') + '</span>';
                    } else if (dataType === 'rxfs' || dataType === 'rxds' || dataType === 'rxdt' || Lottery.method === 'bdd_bdd_5x1m' || Lottery.method === 'dwd_dwd_dwd11y') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeArrKl12.map(function (a, b) {
                        return '<em class="openCodeSelected">' + a + '</em>';
                      }).join('') + '</span>';
                    } else if (Lottery.method === 'bdd_bdd_4x1m') {
                      lotteryKind = '<span style="display:table-cell;width:50%;" class="openCode">' + codeArrKl12.map(function (a, b) {
                        if (b == 0 || b == 1 || b == 2 || b == 3) {
                          return '<em class="openCodeSelected">' + a + '</em>';
                        }
                        return '<em>' + a + '</em>';
                      }).join('') + '</span>';
                    }
                  } else if (d[i].lottery === 'HNKY481') {
                    let totalArr = d[i].code.split(',');
                    if (/^sx/.test(me.method)) {
                      let codeArr = d[i].code.split(',');                    
                      let dumpArr = [...new Set(codeArr)]; //去重            
                      const xtReflectObj = {
                        4: () => '组24',
                        3: () => '组12',
                        2: () => { //[1,2,2,2]组4和[1,1,2,2]组6两种情况都是2，区分下
                          let zu6_zu4_flag = false; //true为组6，false为组4
                          let _obj = {};
                          for (let value of codeArr) {
                            if (_obj[value]) {
                              _obj[value] += 1;
                            } else {
                              _obj[value] = 1;
                            }
                          }
                          if (Object.values(_obj).indexOf(2) !== -1) { //结果有[2,2]组6和[1,3]组4两种
                            zu6_zu4_flag = true;
                          }
                          return zu6_zu4_flag ? '组6' : '组4';
                        },
                        1: () => '---',
                      };
                      lotteryKind = `
                        <span style="display:table-cell;width:33.33%;" class="openCode">
                            ${totalArr.map((a, b) => {
                              return `<em class="openCodeSelected">${a}</em>`;
                            }).join('')}
                        </span><span style="display:table-cell;width:33.33%;" class="sixzt_${xtReflectObj[dumpArr.length]().replace(/组/,'')}">${xtReflectObj[dumpArr.length]()}</span>
                      `;
                    } else if (/^qsm|^hsm/.test(me.method)) {
                      let codeArr;
                      if (/^qsm/.test(me.method)) {
                        codeArr = d[i].code.split(',').slice(0, 3);
                      } else if (/^hsm/.test(me.method)) {
                        codeArr = d[i].code.split(',').slice(1, 4);
                      }
                      let sum = codeArr.reduce((a, b) => Number(a) + Number(b));
                      let dumpArr = [...new Set(codeArr)]; //去重  
                      const numReflectObj = {
                        2: '3',
                        3: '6',
                        1: '',
                      };
                      const xtReflectObj = {
                        1: () => {
                          if (/hz$/.test(me.method)) {
                            if (/zux_hz/.test(me.method)) {
                              return '---';
                            }
                            return `<i class="orangeBg">${sum}</i>`;
                          }
                          return '---';
                        },
                        2: () => {
                          if (/hz$/.test(me.method)) {
                            return `<i class="orangeBg">${sum}</i>`;
                          }
                          return '组三';
                        },
                        3: () => {
                          if (/hz$/.test(me.method)) {
                            return `<i class="orangeBg">${sum}</i>`;
                          }
                          return '组六';
                        },
                      };
                      lotteryKind = `
                        <span style="display:table-cell;width:33.33%;" class="openCode">
                            ${totalArr.map((a, b) => {
                              if (/^qsm/.test(me.method) && b === 3) {
                                return `<em>${a}</em>`;
                              } else if (/^hsm/.test(me.method) && b === 0) {
                                return `<em>${a}</em>`;
                              }
                              return `<em class="openCodeSelected">${a}</em>`;
                            }).join('')} 
                        </span>
                        <span style="display:table-cell;width:33.33%;" class="sxzt_${numReflectObj[dumpArr.length]}">${xtReflectObj[dumpArr.length]()}</span>
                      `;
                    } else if (/^em/.test(me.method)) {
                      let codeArr;
                      if (/^em_zux_q|^em_zx_q/.test(me.method)) {
                        codeArr = d[i].code.split(',').slice(0, 2);
                      } else if (/^em_zux_h|^em_zx_h/.test(me.method)) {
                        codeArr = d[i].code.split(',').slice(2, 4);
                      }
                      let dumpArr = [...new Set(codeArr)]; //去重  
                      let sum = codeArr.reduce((a, b) => Number(a) + Number(b));
                      const xtReflectObj = {
                        1: () => {
                          if(/_zux_/.test(me.method)) {
                            return '---';
                          }
                          return `<i class="orangeBg">${sum}</i>`;
                        },
                        2 : () => `<i class="orangeBg">${sum}</i>`,
                      };
                      lotteryKind = `
                        <span style="display:table-cell;width:33.33%;" class="openCode">
                            ${totalArr.map((a, b) => {
                              if (/^em_zux_q|^em_zx_q/.test(me.method) && (b === 3 || b === 2)) {
                                return `<em>${a}</em>`;
                              } else if (/^em_zux_h|^em_zx_h/.test(me.method) && (b === 0 || b === 1)) {
                                return `<em>${a}</em>`;
                              }
                              return `<em class="openCodeSelected">${a}</em>`;
                            }).join('')} 
                        </span>
                        <span style="display:table-cell;width:33.33%;">${xtReflectObj[dumpArr.length]()}</span>
                      `;
                    } else if (/^dwd|^rx2|^rx3/.test(me.method)) {
                      codeArr = d[i].code.split(',');
                      lotteryKind = `<span style="display:table-cell;width:50%;" class="openCode">
                        ${totalArr.map((a, b) => {
                          return `<em class="openCodeSelected">${a}</em>`;
                        }).join('')}
                      </span>`;
                    }
                  }
                  if (d[i].lottery === 'JSLHC') {
                    let totalArrLHC = d[i].code.split(',');
                    let codeEvery = totalArrLHC.map((v, i, arr) => {
                      if (i === arr.length - 1) {//最后一个是特码
                        return `
                            <li class="fl codeItem lhc-open-code-tm-${v}">${v}</li>
                        `;
                      }
                      return `
                        <li class="fl codeItem lhc-open-code-${v}">${v}</li>
                    `;
                    }).join('');
                    if (/^tm_tm/.test(me.method)) {//特码走势和正码不一样
                      $('.t1-lhc').attr('lhc', 'tm');
                      $('.t1-lhc .issue').css({
                        'width': '94px',
                        'margin-right': '10px'
                      }).html('开奖号码');
                      $('.t1-lhc .rGames').css({
                        'width': '24px',
                        'margin-left': '14px'
                      }).html('生肖');
                      $('.t1-lhc .rGames_2,.t1-lhc .rGames_3,.t1-lhc .rGames_4').show();
                      let tm = totalArrLHC[totalArrLHC.length - 1];
                      tmp_html += `
                                      <span class="issue">
                                          <span>${check_issue_temp()}</span>
                                          <span class="codeItem lhc-open-code-tm-${tm}">
                                              ${tm}    
                                          </span>
                                          <ol>${codeEvery}</ol>
                                      </span>
                                      ${checkSpecial(d[i].zodiac, tm)}
                                  `;
                    } else {
                      $('.t1-lhc').attr('lhc', 'zm');
                      $('.t1-lhc .issue').css({
                        'width': '20%',
                        'margin-right': 0
                      }).html('期号');
                      $('.t1-lhc .rGames').css({
                        'width': '80%',
                        'margin-left': 0
                      }).html('开奖号码');
                      $('.t1-lhc .rGames_2,.t1-lhc .rGames_3,.t1-lhc .rGames_4').hide();                      
                      tmp_html += `
                        <span class="issue lhc-zm-issue" style="display:table-cell;width:20%;line-height: 32px;">${check_issue_temp()}</span>
                        <span class="rGames" style="display:table-cell;width:80%;"><ol class="clearfix lhc-zm-trend">${codeEvery}</ol></span>
                      `;
                    }
                  } else {
                    var code = d[i].code.replace(/,/g, '');
                    d[i].code = code;

                    var issue_temp = check_issue_temp();

                    tmp_html += '<label style="display:table-cell;width:auto;">' + issue_temp + '</label>';

                    if (me.cls === 'pk10') {
                      code = code.substring(0, 10) + "<br>" + code.substring(10);
                    }
                    tmp_html += lotteryKind + '</li>';
                  }
                  html.push(tmp_html);
                }

                //最近一期开奖号码动画效果
                if (me.cls === 'pk10') {
                  if (me.lt === 'BJPK10' || me.lt === 'MCPK10') {
                    if (!PKAni.ani) {
                      $('.js-last-issue ul').html(lastUl);
                      $('.js-open-code-mini').html(lastUlMini);
                      if (!me.noanimation) {
                        $('.js-last-issue ul li:not(.last5)').removeClass('bjpk10Index').addClass('bjpk10Index').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                          $(this).removeClass('bjpk10Index');
                          me.noanimation = true;
                        });
                      }
                      $('.aside .history .resuleShow ul').html(html.join(''));
                    } else if (PKAni.ani && PKAni.start && !PKAni.roadEnd) {
                      $('.js-last-issue ul').html('');
                      $('.js-open-code-mini').html('');
                      $('.aside .history .resuleShow ul').html(html.join(''));
                    } else if (PKAni.ani && !PKAni.start) {
                      $('.js-last-issue ul').html('');
                      $('.js-open-code-mini').html('');
                      PKAni.run(lastCode, lastUl, html.join(''));
                    } else if (PKAni.ani && PKAni.roadEnd) {
                      $('.js-last-issue ul').html(lastUl);
                      $('.js-open-code-mini').html(lastUlMini);
                      $('.aside .history .resuleShow ul').html(html.join(''));
                    }
                  } else if (me.lt === 'XGPK10') { //香港pk10單獨處理
                    if (args[0] === 'message') { //收到後台開獎消息就跑
                      document.getElementById('horseRaceFrame').contentWindow.postMessage(d_result, '*');
                      document.getElementById('horseRaceFrame').contentWindow.document.querySelector('.resultDialog .issueAnd').innerHTML = d_result[0].issueNo;
                      document.getElementById('horseRaceFrame').contentWindow.document.querySelector('.bottomSpace .horseIssueDetail').innerHTML = d_result[0].issueNo;
                    } else {
                      if (XGPKAni.countFirstCode === 1) { //只有首次才這麼做
                        document.getElementById('horseRaceFrame').contentWindow.postMessage({
                          'bottomSpaceRank': d_result[0].code
                        }, '*'); //首次進入頁面底部的排序通過這個數據定，後面通過跑馬后開獎數據                
                      }
                      XGPKAni.countFirstCode++;
                    }
                    window.addEventListener('message', function (msg) { //iframe傳過來的消息做判斷
                      if (msg.data === 'gameOver') {
                        XGPKAni.ani = false;
                        XGPKAni.start = false;
                        XGPKAni.roadEnd = true;
                        $('.js-open-issue').html(d_result[0].issueNo);
                        document.getElementById('horseRaceFrame').contentWindow.document.querySelector('.bottomSpace .horseIssueDetail').innerHTML = d_result[0].issueNo;
                        $('.js-last-issue ul').html(lastUl);
                        $('.js-open-code-mini').html(lastUlMini);
                        $('.aside .history .resuleShow ul').html(html.join(''));
                      } else if (msg.data === 'gameStarted') {
                        XGPKAni.ani = true;
                        XGPKAni.start = true;
                        XGPKAni.roadEnd = false;
                        $('.js-last-issue ul').html('');
                        $('.js-open-code-mini').html('');
                        $('.js-open-issue').html(d_result[0].issueNo);
                        $('.aside .history .resuleShow ul').html(html.slice(1, html.length).join(''));
                      }
                    });
                    if (XGPKAni.start) {
                      $('.js-last-issue ul').html('');
                      $('.js-open-code-mini').html('');
                      $('.js-open-issue').html(d_result[0].issueNo);
                      $('.aside .history .resuleShow ul').html(html.slice(1, html.length).join(''));
                    } else {
                      $('.js-last-issue ul').html(lastUl);
                      $('.js-open-code-mini').html(lastUlMini);
                      $('.js-open-issue').html(d_result[0].issueNo);
                      $('.aside .history .resuleShow ul').html(html.join(''));
                    }
                    $("#horseRaceFrame").load(() => {
                      document.getElementById('horseRaceFrame').contentWindow.document.querySelector('.bottomSpace .horseIssueDetail').innerHTML = d_result[0].issueNo;
                    });
                    if (!me.noanimation) {
                      $('.js-last-issue ul li:not(.last5)').removeClass('bjpk10Index').addClass('bjpk10Index').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $(this).removeClass('bjpk10Index');
                        me.noanimation = true;
                      });
                    }
                  }
                } else {
                  $('.js-last-issue ul').html(lastUl);
                  $('.js-open-code-mini').html(lastUlMini);
                  if (!me.noanimation) {
                    $('.js-last-issue ul li:not(.last5)').removeClass('bounceInDown').addClass('bounceInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                      $(this).removeClass('bounceInDown');
                      me.noanimation = true;
                    });
                  }
                  $('.aside .history .resuleShow ul').html(html.join(''));
                }
              }
        });
    },
    updateTime: function () {
      var me = this;
      var nowDate = new Date().getTime();

      if (nowDate - me.startDate < 300) {
        return false;
      }

      me.startDate = nowDate;

      //clearInterval(Lottery.serverTime);手动暂停轮训查询开奖号码;
      Api.getLotteryTimes({}, function (d) {
        if (d == -1) {
          me.showLogout();
          return;
        }
        var time = d.result.time;
        var now = d.result.now * 1000;

        for (var lt in time) {
          var $el = $('dd[data-lt=' + lt + '] span');
          var second = 0;
          if (lt === 'WBGMMC') {
            $el.parent('dd').addClass('mmc').end().html('即开');
            continue;
          }
          if (time[lt] === -1) {
            $el.parent('dd').addClass('wait').end().html('等待');
            continue;
          }
          if (time[lt] === -2) {
            $el.parent('dd').addClass('stop').end().html('停售');
            continue;
          }
          second = new Date().valueOf() + time[lt] * 1000;
          if (parseInt($el.attr('countdown'), 10) === 0) {
            $el.countdown(second.toString(), function (event) {
              var now = event.offset.hours * 60 * 60 + event.offset.minutes * 60 + event.offset.seconds;

              $(this).html(event.strftime(now >= 3600 ? '%#H:%#M:%#S' : '%#M:%#S'));
              if (now <= 30 && !$(this).parent('dd').hasClass('warning')) {
                $(this).parent('dd').addClass('warning');
              }
            }).on('finish.countdown', function () {
              $(this).countdown('stop');
              const data_lt = $(this).parent().parent().attr('data-lt');
              if (data_lt) { //限制列表，隐藏的(lotteryWay)取不到data_lt值
                setTimeout(function () {
                  me.updateTime();
                }, 500);
              }

            });
          } else {
            $el.countdown(second.toString());
          }
          $el.attr('countdown', 1);
        }
      });
    },
    updateOpenOnly: function () {
      //单独刷新开奖号码
      var me = this;
      me.updateIssueInfo(1);
    },
    updateRecency: function () {
      var me = this;
      var list = $("#lottery .recency ul:eq(0)");
      var p = {
        "lottery": me.lt
      };

      Api.getRecency(p, function (d) {
        /* Bind Data */
        if (d.result && d.result.length > 0) {
          //传统模板
          var result = d.result;
          var recencyTpl = '';
          for (var i = 0; i < result.length; i++) {
            recencyTpl += '<li data-id="' + result[i].orderId + '" data-istrace="' + result[i].istrace + '">' +
              '<span class="wd1">' + Q.convertStamp(result[i].orderTime, Q.formatOne) + '</span>' +
              '<span class="wd1">' + (me.lt === 'TW5FC' ? result[i].issue : result[i].issue) + '</span>' +
              '<span class="wd2" data-type="' + result[i].method + '">' + Q.getMethodName(Q.getLottryCode(result[i].method), result[i].lottery) + '</span>' +
              '<span class="wd3 his_none" title="' + result[i].odds + '">' + Q.modeName(result[i].mode) + '</span>';
            if (!result[i].code || result[i].code === '') {
              recencyTpl += '<span class="wd2"><a href="javascript:;" class="viewHand">查看全部</a></span>';
            } else {
              recencyTpl += '<span class="wd2" title="' + result[i].code + '">' + Lottery.descFormat(result[i].code, result[i].method) + '</span>';
            }
            var orderAction = me.cls === 'lhc' ? '——' : '<i class="order-again">再次投注</i>';
            if (parseInt(result[i].cancel, 10) === 0 && result[i].isCurrentIssue === 1) {
              orderAction = me.cls === 'lhc' ? '<i class="order-cancel">撤单</i>' : orderAction + '<i class="order-cancel">撤单</i>';
            }
            recencyTpl += '<span class="wd3 his_none" title="' + result[i].point + '">' + result[i].piece + '</span>' +
              '<span class="wd5">' + result[i].amount + '</span>' +
              '<span class="wd4 ' + Q.statusCls(result[i].status) + '">' + result[i].status + '</span>' +
              '<span class="wd3 his_none">' + Q.istraceCh(result[i].istrace) + '</span>' +
              '<span class="wd6">' + orderAction + '</span>' +
              '</li>';
          }
          $(list).html(recencyTpl);
          if (me.lt == "WBGMMC") {
            $('.recency .wd6').hide();
            $('.lottery .recency span.wd2').addClass('MMCAgain');
          } else {
            $('.recency .wd6').show();
            $('.lottery .recency span.wd2').removeClass('MMCAgain');
          }

        } else {
          $(list).empty();
        }
        //投注记录滚动条显示隐藏
        if ($('.lottery .recency ul').height() < $('.lottery .recency ul')[0].scrollHeight) {
          $('.lottery .recency ul').css('overflow-y', 'scroll');
        } else {
          $('.lottery .recency ul').css('overflow-y', 'hidden');
        }
        // 点击弹出历史记录详情
        $(list).off('click').on('click', 'li', function (evt) {
          evt.preventDefault();

          Lottery.popDetail($(this).attr('data-istrace'), {
            'orderId': $(this).attr('data-id')
          });
        });


        //点击再次购买弹出再次购买框
        $(".recency ul span.wd6 i.order-again").off('click').on('click', function (evt) {
          evt.stopPropagation();
          var li = $(this).parents('li').children();
          var b = {
            "orderId": $(this).parents('li').attr('data-id')
          };
          var codeAgain;
          var content = '';
          Api.getRecencyDetail(b, function (d) {
            if (d.result !== undefined) {
              d = d.result;
              if (d.position != undefined) {
                b.position = d.position;
              }
              codeAgain = d.code;
              content = Lottery.descFormat(d.code, d.method);
              var wanfa = li.eq(2).html();
              var amount = li.eq(6).html();
              var piece = li.eq(5).html();
              var mode = li.eq(3).html();
              var nums = Q.floatDiv(amount, Q.floatMul(piece, Q.modeNameVal(mode)));
              nums = nums.toFixed(0);
              var again_content = '<h3>再次投注</h3><ul><li style="line-height: 30px"><span>期号</span><em>' + me.issue + '</em></li>' +
                  '<li class="lotCont"><p>' + wanfa + '</p><em class="content_again">' + content + '</em></li>' +
                  '<li><span>模式</span><em class="mode2"><input type="radio" name="mode2" id="modeRadio10" value="2" checked="checked" /><label for="modeRadio10"><i></i>2元</label>' +
                  '<input type="radio" name="mode2" id="modeRadio110" value="1" /><label for="modeRadio110"><i></i>1元</label>' +
                  '<input type="radio" name="mode2" id="modeRadio20" value="0.2" /><label for="modeRadio20"><i></i>2角</label>' +
                  '<input type="radio" name="mode2" id="modeRadio210" value="0.1" /><label for="modeRadio210"><i></i>1角</label>' +
                  '<input type="radio" name="mode2" id="modeRadio30" value="0.02" /><label for="modeRadio30"><i></i>2分</label>' +
                  '<input type="radio" name="mode2" id="modeRadio40" value="0.002" /><label for="modeRadio40"><i></i>2厘</label></em></li>' +
                  '<li><span>倍数</span><em class="times2"><input type="text" class="spinner biggerw" min="1" max="99999" step="1" value="1"></em></li>' +
                  '<li style="line-height: 30px"><span>投注总金额:</span><em class="total"></em></li></ul>';

              var lottery_again = dialog({
                id: 'lottery_again',
                title: '再次投注',
                skin: 'lottery_again',
                width: 300,
                fixed: true,
                content: again_content,
                onshow: function () {
                  $('.lottery_again').find('li input[type="text"].spinner').inputNumber();
                  $('.lottery_again').find('.mode2 label').eq(0).trigger('click').addClass('modeSelect');
                  var pieces = $('.lottery_again .spinner').val();
                  var modes = $('.lottery_again .mode2').find('input[checked]').val();
                  var total = parseFloat((pieces * modes * nums).toFixed(4));
                  $('.lottery_again .total').html(total + '元');

                  $('.lottery_again').on('click', '.mode2 label', function () {
                    $(this).addClass('modeSelect').siblings().removeClass('modeSelect');
                    $(this).prev('input').attr('checked', 'checked').siblings().removeAttr('checked');
                    modes = $('.lottery_again .mode2').find('input[checked]').val();
                    pieces = $('.lottery_again .spinner').val();
                    total = parseFloat((pieces * modes * nums).toFixed(4));
                    $('.lottery_again .total').html(total + '元');
                  });

                  $('.lottery_again .spinner').change(function () {
                    pieces = $('.lottery_again .spinner').val();
                    modes = $('.lottery_again .mode2').find('input[checked]').val();
                    total = parseFloat((pieces * modes * nums).toFixed(4));
                    $('.lottery_again .total').html(total + '元');
                  })
                },
                button: [{
                  value: '确定',
                  id: 'again_ok',
                  callback: function () {
                    var pieces = $('.lottery_again .spinner').val();
                    var modes = $('.lottery_again .mode2').find('input[checked]').val();
                    var total = parseFloat((pieces * modes * nums).toFixed(4));
                    var method = li.eq(2).attr('data-type');
                    var code = codeAgain;
                    var point = li.eq(5).attr('title');
                    var moshi = $('.lottery_again .mode2').find('input[checked]').next('label').html();
                    var p = me.odds[me.lt];
                    var v = p[method];
                    var odds = (v.odds + v.x * v.point).toFixed(3);
                    odds = odds.substr(0, odds.length - 1);
                    if (point != 0) {
                      point = $('#lottery .odds select').find('option').eq(1).attr('data-point');
                      odds = v.odds;
                    }
                    var obj = {
                      "lottery": me.lt,
                      "issue": me.issue,
                      "betType": 3, //1 快速投注，2常规投注，3再次投注，4追号投注，5挂机投注  
                      "order": JSON.stringify([{
                        "method": method,
                        "code": code,
                        "nums": nums,
                        "piece": pieces,
                        "price": modes,
                        "odds": odds,
                        "point": point,
                        "amount": total.toString(),
                        "position": b.position
                      }])
                    };
                    dialog.get('lottery_again').close().remove();

                    let singleMaxBonus = me.odds[me.lt][method]['m'];
                    let singleBetNums = me.odds[me.lt][method]['n'];
                    let dantiaoHtml = `此注单为单挑，将有当期单挑最高盈利${singleMaxBonus}元的限制，您确定要继续吗？`;

                    if (me.cls === 'ssc' && method.indexOf('rx') !== -1) {
                      me.renderTotalAgain(nums, method, code, b.position, obj, li, moshi, content);
                    } else {
                      if (me.odds[me.lt][method]['s'] === 1 && nums < singleBetNums) {
                        var dantiao = dialog({
                          title: '温馨提示',
                          width: 300,
                          fixed: true,
                          id: 'lottery_tiao',
                          skin: 'lottery_dan',
                          content: dantiaoHtml,
                          button: [{
                            id: 'dt_ok',
                            value: '确&nbsp;&nbsp;定',
                            callback: function (evt) {
                              dialog.get('lottery_tiao').close().remove();
                              me.lotteryAgain(obj, li, moshi, content);
                            }
                          }, {
                            id: 'dt_cancel',
                            skin: 'cancel',
                            value: '取&nbsp;&nbsp;消',
                            callback: function (evt) {
                              return;
                            }
                          }]
                        }).showModal();
                      } else {
                        me.lotteryAgain(obj, li, moshi, content);
                      }
                    }
                  }
                }, {
                  value: '取消',
                  id: 'again_cancel',
                  skin: 'again_cancel',
                  callback: function () {}
                }]
              }).showModal();
            }
          });

      });

        //点击撤单按钮
        $(".recency ul span.wd6 i.order-cancel").off('click').on('click', function (evt) {
          evt.stopPropagation();
          var btn = $(this);
          var _p = {
            orderId: $(this).parents('li').attr('data-id')
          };
          var pop_tip = dialog({
            id: 'order-cancel',
            title: '温馨提示',
            skin: 'confirm-again',
            content: '您确定要撤销' + me.issue + '期的这一注单吗？',
            button: [{
              id: 'cancle_ok',
              value: '确定',
              callback: function () {
                pop_tip.close().remove();
                Api.cancelOrder(_p, function (res) {
                  if (res && res.code && res.msg) {
                    var tip = dialog({
                      skin: 'tip cancelTip',
                      content: res.msg
                    }).show();
                    if (parseInt(res.code, 10) === 0) {
                      me.updateRecency();
                    }
                    setTimeout(function () {
                      tip.close().remove();
                    }, 2000);
                  }
                });
                me.getUserMoney();
              }
            }, {
              id: 'cancle_cancel',
              skin: 'cancel',
              value: '取消'
            }]
          }).showModal();

        });
      });
    },
    renderTotalAgain: function (nums, method, code, position, obj, li, moshi, content) {
      var me = this;
      var arr = [];
      var rxArr = [];
      var posNumCount = {}; //位->选号 的对应关系
      var eachMethodCount = {}; //玩法->注数 的对应关系
      var dantiaoFlag = false;
      var singleMaxBonus = null;
      var dantiaoOrders = null;
      var rx_m = method.split('_');
      if (method.indexOf('zx_fs') !== -1) {
        let arrCode = code.split('|');
        arrCode.forEach((item, index) => {
          if (item) {
            posNumCount[index + 1] = item.replace(/,/g, '');
          }
        });
      } else if (/_ds|_hh/.test(method)) {
        let arrCode = code.split('|');
        let arrPosition = position.split(',');
        arrPosition.forEach((pos) => {
          posNumCount[pos] = arrCode;
        });
      } else if (/_zux_fs|_hz|_z3|_z6|_z24|_z12|_z4/.test(method)) {
        let arrCode = code.split(',');
        let arrPosition = position.split(',');
        arrPosition.forEach((pos) => {
          posNumCount[pos] = arrCode.join('');
        });
      }
      if (position) {
        var newPos = position.split(',');
        $.each(newPos, function () {
          arr.push(arguments[1]);
        });
      } else { //直选复式没有position的值
        $.each(code.split('|'), function () {
          if (arguments[1]) {
            arr.push(arguments[0] + 1);
          }
        });
      }

      if (rx_m[0] === 'rx2') {
        for (var i = 0; i < arr.length - 1; i++) {
          for (var j = i + 1; j < arr.length; j++) {
            var n = arr[i].toString() + arr[j].toString();
            rxArr.push(n);
          }
        }
        rxArr.forEach((v, i) => {
          let m_method = method + '_' + v;
          if (method.indexOf('zx_fs') !== -1) {
            eachMethodCount[m_method] = posNumCount[v[0]].length * posNumCount[v[1]].length;
          } else if (/_ds$/.test(method)) {
            eachMethodCount[m_method] = posNumCount[v[0]].length;
          } else if (/_zux_fs$|_hz$/.test(method)) {
            let totalCount = nums;
            let posLength = Object.keys(posNumCount).length;
            eachMethodCount[m_method] = totalCount / Math.combination(posLength, 2);
          }
        });
      } else if (rx_m[0] === 'rx3') {
        for (var i = 0; i < arr.length - 2; i++) {
          for (var j = i + 1; j < arr.length - 1; j++) {
            for (var p = j + 1; p < arr.length; p++) {
              var n = arr[i].toString() + arr[j].toString() + arr[p].toString();
              rxArr.push(n);
            }
          }
        }
        rxArr.forEach((v, i) => {
          let m_method = method + '_' + v;
          if (method.indexOf('zx_fs') !== -1) {
            eachMethodCount[m_method] = posNumCount[v[0]].length * posNumCount[v[1]].length * posNumCount[v[2]].length;
          } else if (/_ds$|_hh$/.test(method)) {
            eachMethodCount[m_method] = posNumCount[v[0]].length;
          } else if (/_hz$|_z3$|_z6$/.test(method)) {
            let totalCount = nums;
            let posLength = Object.keys(posNumCount).length;
            eachMethodCount[m_method] = totalCount / Math.combination(posLength, 3);
          }
        });
      } else if (rx_m[0] === 'rx4') {
        for (var i = 0; i < arr.length - 3; i++) {
          for (var j = i + 1; j < arr.length - 2; j++) {
            for (var p = j + 1; p < arr.length - 1; p++) {
              for (var t = p + 1; t < arr.length; t++) {
                var n = arr[i].toString() + arr[j].toString() + arr[p].toString() + arr[t].toString();
                rxArr.push(n);
              }
            }
          }
        }
        rxArr.forEach((v, i) => {
          let m_method = me.method + '_' + v;
          if (method.indexOf('zx_fs') !== -1) {
            eachMethodCount[m_method] = posNumCount[v[0]].length * posNumCount[v[1]].length * posNumCount[v[2]].length * posNumCount[v[3]].length;
          } else if (/_ds$|_hh$/.test(method)) {
            eachMethodCount[m_method] = posNumCount[v[0]].length;
          } else if (/_hz$|_z24$|_z12$|_z6$|_z4$/.test(method)) {
            let totalCount = nums;
            let posLength = Object.keys(posNumCount).length;
            eachMethodCount[m_method] = totalCount / Math.combination(posLength, 4);
          }
        });
      }

      dantiaoFlag = rxArr.some((num, idx) => {
        let m_method = method + '_' + num;
        if (me.odds[obj.lottery][m_method]['s'] === 1 && eachMethodCount[m_method] < me.odds[obj.lottery][m_method]['n']) {
          singleMaxBonus = me.odds[obj.lottery][m_method]['m']; //单挑限额
          return true;
        }
      });
      dantiaoOrders = rxArr.filter((num, idx) => { //['万千白','百十个',...]
        let m_method = method + '_' + num;
        return me.odds[obj.lottery][m_method]['s'] === 1 && eachMethodCount[m_method] < me.odds[obj.lottery][m_method]['n'];
      }).map((num, idx) => {
        if (me.lt === 'HNKY481') {
          return num.replace(/1/, '自由泳').replace(/2/, '仰泳').replace(/3/, '蛙泳').replace(/4/, '蝶泳');
        }
        return num.replace(/1/, '万').replace(/2/, '千').replace(/3/, '百').replace(/4/, '十').replace(/5/, '个');
      });

      let dantiaoHtml = `您的注单：${dantiaoOrders.map(v => `【${v}】`).join('')}为单挑，将有当期单挑最高奖金${singleMaxBonus}元的限制， 您确定要继续吗？`;

      var dantiao = dialog({
        title: '温馨提示',
        width: 300,
        fixed: true,
        id: 'lottery_tiao',
        skin: 'lottery_dan',
        button: [{
          id: 'dt_ok',
          value: '确&nbsp;&nbsp;定',
          callback: function (evt) {
            dialog.get('lottery_tiao').close().remove();
            me.lotteryAgain(obj, li, moshi, content);
          }
        }, {
          id: 'dt_cancel',
          skin: 'cancel',
          value: '取&nbsp;&nbsp;消',
          callback: function (evt) {
            return;
          }
        }]
      });

      if (dantiaoFlag) {
        dantiao.content(dantiaoHtml);
        dantiao.showModal();
      } else {
        me.lotteryAgain(obj, li, moshi, content);
      }

    },
    lotteryAgain: function (obj, li, moshi, content) {
      var me = this;
      var wanfa = li.eq(2).html();
      var p = JSON.parse(obj.order);
      var html = '<h2>请确认投注' + me.m_name + '</h2>' +
          '<dl><dt><em class="issue">期号' + (me.issue || '/') + '</em><em class="mode">模式：' + moshi + '</em></dt>' +
          '<dd><p>' + wanfa + '</p><em>' + content + '</em></dd></dl>' +
          '<h4>投注总金额：<em>' + p[0].amount + '元' +
          '<label class="printStatus2"><input type="checkbox" value="print">打印注单</label></em></h4>';

      var confirmOpt2 = {
        title: '温馨提示',
        width: 396,
        content: html,
        skin: 'confirm-again confirm-lottery-again',
        fixed: true,
        cancel: false,
        button: [{
          id: 'lt_ok',
          value: '确&nbsp;&nbsp;定',
          callback: function (evt) {
            var btn = $('.bottom a.submit');
            var txt = btn.html();
            var tips = dialog({
              id: 'lottery_quickSubmit',
              align: 'top',
              skin: 'tip'
            });

            obj['issue'] = me.issue;
            btn.html('操作中').addClass('loading').removeClass('disabled');
            me.addOrderApi(obj, btn, txt, tips);
          }
        }, {
          id: 'lt_cancel',
          skin: 'cancel',
          value: '取&nbsp;&nbsp;消',
          callback: function (evt) {
            if ($('.quickSubmit-orders').length > 0) {
              me.resetOrders();
            }
            /*$(".quickSubmit").removeClass("disabled");
            $(".confirm").removeClass("disabled");*/
          }
        }],
        onshow: function () {
          if (me.printStatus != undefined && me.printStatus) {
            $('.printStatus2 input').attr("checked", "checked");
          } else {
            $('.printStatus2 input').removeAttr("checked");
          }
          if ($('.printStatus2').find('input').is(':checked')) {
            $('.printStatus2').click(function () {
              $('this').find('input').removeAttr("checked");
              localStorage.setItem('printStatus', false);
              me.printStatus = false;
            });
          } else {
            $('.printStatus2').click(function () {
              $('this').find('input').attr("checked", "checked");
              localStorage.setItem('printStatus', true);
              me.printStatus = true;
            });
          }
        }
      };
      var confirmAgain2 = dialog(confirmOpt2).showModal();
    },
    popDetail: function (istrace, p) {
      var me = this;

      var html = '<table><tbody>';
      var detail = dialog({
        id: 'recency-details',
        skin: 'sobet recency-pop recency-pop-h',
        title: '投注详细',
        fixed: true,
        onshow: function () {
          var that = this;
          if (parseInt(istrace, 10) === 1) {
            me.chkTraceDetail(p, that, detail);
          }
        }
      });

      me.queryRecencyDetail(detail, detail, html, p);
    },
    chkTraceDetail: function (p, that, pop) {
      var me = this;

      Api.getTrace(p, function (d) {
        d = d.result;

        //切换追号详情
        var traceTableHorizontal = [
          '<table class="traceTable traceHTable"><tbody>',
          '<tr>',
          '<th>追号编号：</th>',
          '<td>', d.traceId, '</td>',
          '<td rowspan="18" class="fixtrace">',
          '<ul class="traceInner"></ul>',
          '<div class="tracePager popdetails-page"></div>',
          '<div class="cancelTrace"><a class="hand disabled" name="', d.traceId, '">追号终止</a></div>',
          '</td></tr>',
          '<tr><th>游戏用户：</th><td>', User.name, '</td></tr>',
          '<tr><th>追号时间：</th><td>', d.createTime, '</td></tr>',
          '<tr><th>彩种：</th><td>', Q.nameLottery(d.lottery), '</td></tr>',
          '<tr><th>追号内容：</th><td><em class="desc">', me.descFormat(d.code, d.method), '</em></td></tr>',
          '<tr><th>玩法：</th><td>', Q.getMethodName(Q.getLottryCode(d.method), d.lottery) + Q.getPositionName(d.position,me.lt), '</td></tr>',
          '<tr><th>追号模式：</th><td>', Q.traceType(d.traceType), '</td></tr>',
          '<tr><th>开始期号：</th><td>', d.start, '</td></tr>',
          '<tr><th>奖金模式：</th><td>', d.odds, '</td></tr>',
          '<tr><th>模式：</th><td>', Q.modeName(d.perAmount), '</td></tr>',
          '<tr><th>追号期数：</th><td>', d.issues.length, '</td></tr>',
          '<tr><th>追号总金额：</th><td>¥', d.totalMoney, '</td></tr>',
          '<tr><th>完成期数：</th><td>', d.finishCount, '</td></tr>',
          '<tr><th>完成金额：</th><td>¥', d.finishMoney, '</td></tr>',
          '<tr><th>取消期数：</th><td>', d.cancelCount, '</td></tr>',
          '<tr><th>取消金额：</th><td>¥', d.cancelMoney, '</td></tr>',
          '<tr><th>追号状态：</th><td>', d.status, '</td></tr>',
          '<th>&nbsp;&nbsp;中奖后终止：</th><td>', Q.traceChs(d.winStop), '</td></tr>',
          '</tbody></table><div class="traceInnerDetails"></div>'
        ].join('');

        var trace_tpl = ['<li class="traceHead"><span><input type="checkbox" class="chkall hand">奖期</span><em>追号倍数</em><em>追号状态</em><em>注单详情</em></li>',
          '<% for ( var i = 0; i < issues.length; i++ ) { %>', '<li id="<%=issues[i].orderId%>">',
          '<span><input type="checkbox" rel="<%=issues[i].orderId%>" class="hand<%=issues[i].status|Q.traceClsDisable%>" <%=issues[i].orderId|Q.traceDisable%> name="<%=issues[i].issue%>" <%=issues[i].status|Q.tracestatusDisable%>><%=issues[i].issue%></span>',
          '<em><%=issues[i].count%></em>',
          '<em><label><%=issues[i].status|Q.statusCh%></label></em>',
          '<em><%=issues[i].orderId|Q.checkDetailByStatus,issues[i].status%></em>',
          '</li><% } %>'
        ].join('');

        if ($(that.node).find('.ui-dialog-content table.traceTable').size() == 0) {
          if ($(that.node).find('.ui-dialog-content table:eq(0)').length > 0) {
            $(that.node).find('.ui-dialog-content table:eq(0)').after(traceTableHorizontal);
          } else {
            $(that.node).find('.ui-dialog-content').html(traceTableHorizontal);
            $(that.node).find('.ui-dialog-content > table.traceTable').show();
            pop.width(960).height('auto');
          }
          $(that.node).find('.ui-dialog-title').html('<em>追号详情</em> <a class="hand backInfo" rel="0">(返回)</a>');
        }

        $(that.node).find('a.traceview').unbind('click').click(function () {
          if ($(that.node).find('.ui-dialog-content table.traceTable').size() == 0) {
            $(that.node).find('.ui-dialog-content table:eq(0)').after(traceTable);
          } else {
            $(that.node).find('.ui-dialog-content table.traceTable').show();
            $(that.node).find('.ui-dialog-title a').show();
            pop.width(960).height('auto');
          }
          $(that.node).find('.ui-dialog-content table:eq(0)').hide();
        });
        $(that.node).find('.traceInner').html(tmpl.apply(this, ['traceInner', trace_tpl, d]));

        $(that.node).find('.ui-dialog-title a').unbind('click').click(function () {
          if ($(this).attr('rel') == '0') {
            $(that.node).find('.ui-dialog-title em').html('投注详细');
            if ($(that.node).find('.traceInnerDetails').size() > 0) {
              if ($(that.node).find('.traceInnerDetails').html() != '') {
                $(that.node).find('.traceInnerDetails').show();
                $(that.node).find('.traceHTable').hide();
              } else {
                $(that.node).find('.ui-dialog-content table.traceTable').hide();
                $(that.node).find('.ui-dialog-content table:eq(0)').show();
              }
            } else {
              $(that.node).find('.ui-dialog-content table.traceTable').hide();
              $(that.node).find('.ui-dialog-content table:eq(0)').show();
            }
            $(that.node).find('.ui-dialog-title a').hide();
            pop.width(640).height('auto');
          } else {
            $(that.node).find('.ui-dialog-title em').html('追号详情');
            $(that.node).find('.ui-dialog-content table.traceTable').show();
            $(that.node).find('.ui-dialog-content table:eq(0),.ui-dialog-content div.traceInnerDetails').hide();
            $(that.node).find('.ui-dialog-title a').attr('rel', '0');
            pop.width(960).height('auto');
          }
        });

        //追号明细列表前端分页
        var tracePageSize = 10;
        var totalTrace = d.issues.length;
        if (totalTrace > tracePageSize && $(that.node).find('.tracePager').html() == '') {
          $(that.node).find('.traceInner li:gt(' + tracePageSize + ')').hide();
          me.queryTracePage(1, that, tracePageSize, totalTrace);
        } else {
          var startIndex = (parseInt($(that.node).find('.tracePager a.on').attr('page'), 10) - 1) * tracePageSize;
          var endIndex = startIndex + tracePageSize - 1;
          if (isNaN(startIndex)) {
            startIndex = 0;
          }
          $(that.node).find('.traceInner li:visible:not(.traceHead)').hide();
          $(that.node).find('.traceInner li:gt(' + startIndex + '):lt(' + tracePageSize + ')').show();
        }

        //追号明细详情
        $(that.node).find('a.traceDetails').attr('rel', $(pop.node).find('div.ui-dialog-content').height());
        $(that.node).find('a.traceDetails').unbind('click').click(function () {
          var _p = {
            'orderId': $(this).attr('data-id')
          };
          var relheight = $(this).attr('rel');
          var innerhtml = '<table><tbody>';
          $(that.node).find('.ui-dialog-content > table').hide();
          $(that.node).find('.ui-dialog-title em').html('投注详细');
          $(that.node).find('.ui-dialog-title a').attr('rel', '1').hide();
          pop.width(640).height(relheight);
          _p['relheight'] = relheight;
          me.queryRecencyDetail($(that.node).find('.ui-dialog-content div.traceInnerDetails'), pop, innerhtml, _p);
        });


        $(that.node).find('li:not(.traceHead) span > input:not(.disabled)').off('click').on('click', function (e) {
          if ($(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled):checked').length > 0) {
            $(that.node).find('div.cancelTrace a').removeClass('disabled');
          } else {
            $(that.node).find('div.cancelTrace a').addClass('disabled');
          }

          //联动全选
          if ($(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled):checked').length == $(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled)').length) {
            $(that.node).find('li.traceHead input.chkall').prop('checked', true);
          } else {
            $(that.node).find('li.traceHead input.chkall').attr('checked', false);
          }
        });

        // 追号终止全选
        $(that.node).find('li.traceHead input.chkall').off('click').on('click', function (e) {
          if ($(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled)').length == 0) {
            return false;
          }
          if ($(this).prop('checked')) {
            $(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(:checked):not(.disabled)').prop('checked', true);
          } else {
            $(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled):checked').prop('checked', false);
          }

          if ($(that.node).find('.traceInner li:visible:not(.traceHead) span input:not(.disabled):checked').length > 0) {
            $(that.node).find('div.cancelTrace a').removeClass('disabled');
          } else {
            $(that.node).find('div.cancelTrace a').addClass('disabled');
          }
        });

        // 追号终止事件
        $(that.node).find('div.cancelTrace a').off('click').on('click', function (e) {
          var btn = $(this);
          var cancel_p = {
            traceId: btn.attr('name')
          };
          cancel_p['issues'] = $(that.node).find('.traceInner li:visible:not(.traceHead) span input:checked').map(function () {
            return $(this).attr('name');
          }).get();


          if (btn.hasClass('disabled') || cancel_p['issues'].length == 0) {
            return false;
          }
          Api.cancelTrace(cancel_p, function (d) {
            if (d === -1) {
              $(".loginlnk").trigger("click");
              return false;
            }
            if (d && d.code && d.msg) {
              var tip = dialog({
                align: 'top',
                skin: 'tip',
                content: d.msg
              }).show(btn[0]);
              if (parseInt(d.code, 10) === 1) {
                $(that.node).find('div.cancelTrace a').addClass('disabled');
                me.chkTraceDetail(p, that, pop);
              }
              setTimeout(function () {
                tip.close().remove();
              }, 1000);
              me.getUserMoney();
            }
          });
        });

        // 追号终止控制显示
        if ($(that.node).find('.traceInner li:not(.traceHead)').length == $(that.node).find('.traceInner li:not(.traceHead) input.disabled').length) {
          $(that.node).find('div.cancelTrace a').addClass('disabled');
        }

      });
    },
    queryTracePage: function (now, that, tracePageSize, totalTrace) {
      var me = this;
      $(that.node).find('.tracePager').html(Q.showPagination(now, tracePageSize, totalTrace, null)).show();

      $(that.node).find('.tracePager a').unbind('click').click(function () {
        $(that.node).find('.traceInner li.traceHead input.chkall').prop('checked', false);
        $(that.node).find('.traceInner li:gt(0) input').prop('checked', false);

        var startIndex = (parseInt($(this).attr('page'), 10) - 1) * tracePageSize;
        var endIndex = startIndex + tracePageSize - 1;
        $(that.node).find('.traceInner li:visible:not(.traceHead)').hide();
        $(that.node).find('.traceInner li:gt(' + startIndex + '):lt(' + tracePageSize + ')').show();
        me.queryTracePage(parseInt($(this).attr('page'), 10), that, tracePageSize, totalTrace);
      });
    },
    queryRecencyDetail: function (detail, pop, html, p) {
      var me = this;
      var tmp = [];
      var th = [
        '<th>注单编号：</th>',
        '<th>游戏用户：</th>',
        '<th>投单时间：</th>',
        '<th>彩种：</th>',
        '<th>玩法：</th>',
        '<th>期号：</th>',
        '<th>投注内容：</th>',
        '<th>投注注数：</th>',
        '<th>是否单挑：</th>',
        '<th>奖金模式：</th>',
        '<th>倍数：</th>',
        '<th>模式：</th>',
        '<th>投注总金额：</th>',
        '<th>奖金：</th>',
        '<th>开奖号码：</th>',
        '<th>状态：</th>',
        '<tbody>',
      ];
      var thLHC = [
        '<th>注单编号：</th>',
        '<th>游戏用户：</th>',
        '<th>投单时间：</th>',
        '<th>彩种：</th>',
        '<th>玩法：</th>',
        '<th>期号：</th>',
        '<th>投注内容：</th>',
        '<th>投注注数：</th>',
        '<th>赔率：</th>',
        '<th>投注总金额：</th>',
        '<th>奖金：</th>',
        '<th>开奖号码：</th>',
        '<th>状态：</th>',
        '<tbody>',
      ];
      Api.getRecencyDetail(p, function (d) {
        if (d.result !== undefined) {
          d = d.result;

          tmp.push(d.orderId);
          tmp.push(d.username);
          tmp.push(d.orderTime);
          tmp.push(Q.nameLottery(d.lottery));
          tmp.push(Q.getMethodName(Q.getLottryCode(d.method), d.lottery) + Q.getPositionName(d.position,me.lt));
          if (parseInt(d.istrace, 10) === 1) {
            tmp.push('<em>' + d.issue + '</em><a class="traceview hand">(查看追号信息)</a>');
          } else {
            tmp.push('<em>' + d.issue + '</em>');
          }
          tmp.push('<em class="desc">' + me.descFormat(d.code, d.method) + '</em>');
          tmp.push(d.nums);
          if (d.lottery !== 'JSLHC') {
            tmp.push(`${d.singleStatus === 3 ? '是' : '否'}`);
          }
          tmp.push(d.odds);
          if (d.lottery !== 'JSLHC') {
            tmp.push(d.count);
            tmp.push(Q.modeName(d.perAmount));
          }
          tmp.push(d.amount);
          tmp.push(d.awardMoney);
          tmp.push(d.lotteryNumber);
          tmp.push(d.status);
          th = d.lottery === 'JSLHC' ? thLHC : th;
          for (var i = 0; i < tmp.length; i++) {
            if (i === 0 && d.cancel !== undefined) {
              var cl = parseInt(d.cancel, 10);
              html += '<tr>' + th[i] + '<td><em>' + tmp[i] + '</em>';
              if (cl === 0 && d.isCurrentIssue === 1) {
                html += '<a href="javascript:;" data-id="' + tmp[i] + '" id="cancel_order" class="btnCancel">撤 单</a>';
              } else if (cl === 1) {
                html += '<a href="javascript:;" class="btnCancel disabled">个人撤单</a>';
              }
              html += '</td></tr>';
            } else {
              html += '<tr>' + th[i] + '<td>' + tmp[i] + '</td></tr>';
            }
          }
          html += '</tbody></table>';

          if (typeof detail.selector != 'undefined') {
            detail.html(html).show();
            if (detail.height() != parseInt(p['relheight'], 10)) {
              pop.height(detail.height());
            }

            detail.find('a.traceview').off('click').on('click', function (e) {
              pop.width(960).height('auto');
              $(pop.node).find('.ui-dialog-title a').attr('rel', '0').show();
              detail.hide();
              detail.prev().show();
            }).show();
          } else {
            detail.content(html);
            detail.width((p.width ? p.width : 640)).showModal();
            $(detail.node).find('a.traceview').off('click').on('click', function (e) {
              pop.width(960).height('auto');
              detail.hide();
              detail.prev().show();
            }).show();
          }

          var chkcancelbtn = $(detail.node).find('a#cancel_order');

          if (chkcancelbtn.length == 0) {
            chkcancelbtn = $(detail).find('a#cancel_order');
          }

          chkcancelbtn.off('click').on('click', function (e) {

            var btn = $(this);
            var _p = {
              orderId: btn.attr('data-id')
            };
            if (btn.hasClass('disabled')) {
              return false;
            }
            var pop_tip = dialog({
              title: '温馨提示',
              skin: 'confirm-again',
              content: '您确定要撤销' + me.issue + '期的这一注单吗？',
              button: [{
                id: 'cancle_ok',
                value: '确定',
                callback: function () {
                  pop_tip.close().remove();
                  btn.addClass('disabled');
                  Api.cancelOrder(_p, function (res) {
                    if (res && res.code && res.msg) {
                      var tip = dialog({
                        align: 'right',
                        skin: 'tip cancelTip',
                        content: res.msg
                      }).show(btn[0]);
                      if (parseInt(res.code, 10) === 0) {
                        btn.addClass('disabled').html('个人撤单');
                        me.updateRecency();

                        if ($("#" + _p.orderId).length > 0) {
                          $("#" + _p.orderId).find('label').html('已取消');
                        }
                      }
                      setTimeout(function () {
                        tip.close().remove();
                      }, 2000);
                    }
                  });
                  me.getUserMoney();
                }
              }, {
                id: 'cancle_cancel',
                skin: 'cancel',
                value: '取消'
              }]
            }).showModal();
          });
        }
      });
    },
    getUserMoney: function () {
      /*Navigation.getUserMoney();*/
      var em = $('#mc_header .userInfo .balance span em');
      var headMoneyCount = $('.head-money-count');
      var cp = $('#mc_header .userInfo .balance .balance_cp h3');
      var pt = $('#mc_header .userInfo .balance .balance_pt h3');
      var ag = $('#mc_header .userInfo .balance .balance_ag h3');
      em.html('').append('<i class="ui-dialog-loading reloading"></i>');
      headMoneyCount.html('').append(`<i class="ui-dialog-loading reloading"></i>`);;
      Api.getPtBalance({
        'cbId': 'sobet_01'
      }, function (res) {
        var cash = res.cash;
        em.html(cash.toFixed(4));
        headMoneyCount.html(cash.toFixed(4));
      });
    },
    winResultsListMarquee: function () {
      var me = this;
      Api.getWinResultsList((res)=> {
        var winResultsList = $('.winResultsList');
        var winNoticeWrap = $('.winResultsList>.winLine .winNoticeWrap');
        if (res.status == 404 || res.code == 1001 || (res && res.result && res.result.length == 0)) {
          winResultsList.hide();
        } else {
          winResultsList.show();
        }

        winNoticeWrap.html('');

        var results = res.result;
        var html = '<span style="float:left">';
        html += results.map(function (item, index) {
          var time = Math.floor((Number((new Date().getTime())) - Number(item.winTime)) / 60000);
          time = time > 60 ? Math.floor(time / 60) + '小时前' : (time <= 0 ? "刚刚" : time + '分钟前');
          var desWinUserName = item.winUserName.length > 2 ? item.winUserName.slice(0, 3) + '***' : item.winUserName + '***';
          return '<span class="winNotice">' + desWinUserName + '投注<i style="color:orange">' + item.winLotteryName + '</i>喜中<i style="color:orange">' + item.winMoney + '元</i><i style="color: gray">(' + time + ')</i></span>';
        }).join('') + '</span>';
        winNoticeWrap.append(html);

        var winLine = $('.winResultsList>.winLine');

        var winNoticeMarginChange = $('.winResultsList>.winLine>.winNoticeMarginChange');

        var winLineWidth = parseInt(winLine.width());
        var marqueeWidth = parseInt(winNoticeWrap[0].scrollWidth);
        $('#marqueeLeftStyle').remove();
        createMarqueeStyle(marqueeWidth);
        if (marqueeWidth > winLineWidth) {
            winNoticeWrap.append(html);
            !winNoticeMarginChange.hasClass('marqueeLeft') && winNoticeMarginChange.addClass('marqueeLeft');
        } else {
            winNoticeMarginChange.hasClass('marqueeLeft') && winNoticeMarginChange.removeClass('marqueeLeft');
        }
        winNoticeMarginChange.hover(function () { //移入暂停
            $(this).addClass('animation_paused');
        }, function () {
            $(this).removeClass('animation_paused');
        });
        //删除滚动条
        var winResultsList = $('.winResultsList');
        $('.winResultsList>.winLine>.winLineClose').off('click').click(function (e) {
          e.stopPropagation();
          winResultsList.hide();
          me.winListMarqueeShow = false;
        });
      });
    },
    winListPos: function () {
      var winResultsList = $('.winResultsList');
      var mcFooter = $('#mc_footer')[0];
      //chrome下document.documentElement.scrollTop一直为0，Firefox下document.body.scrollTop一直为0
      var scrollTop = document.body.scrollTop ? document.body.scrollTop || 0 : document.documentElement.scrollTop ||
        0;
      var scrollHeight = document.documentElement.scrollHeight;
      $('.heightHack').hide();
      if (scrollHeight <= window.innerHeight + mcFooter.offsetHeight + scrollTop) {
        $('.heightHack').hide();
        winResultsList.css({
          'position': 'static',
        });
      } else {
        $('.heightHack').show();
        winResultsList.css({
          'position': 'fixed',
          'bottom': 0
        });
      }
    },
    /*layoutMainWinList: function () {
      //一开始进入页面main块偏左的问题
      //$('.wrap>.lotteryClassFlag').css('display', 'none');
      $('.wrap>.asideFlag').css('display', 'none');
      //document.getElementById('lotteryClass').style.position = 'static';
      document.querySelector('.wrap>.aside.fl').style.position = 'static';
      setTimeout(()=> {
        //$('.wrap>.lotteryClassFlag').css('display', 'block');
        $('.wrap>.asideFlag').css('display', 'block');
        //document.getElementById('lotteryClass').style.position = 'fixed';
        document.querySelector('.wrap>.aside.fl').style.position = 'fixed';
        //document.getElementById('lotteryClass').style.left = (document.querySelector('.wrap>.main').getBoundingClientRect().left - document.getElementById('lotteryClass').offsetWidth - 10) + 'px';
        document.querySelector('.wrap>.aside.fl').style.left = (document.querySelector('.wrap>.main').getBoundingClientRect().left + document.querySelector('.wrap>.main').offsetWidth + 10) + 'px';
      }, 2000);

      window.addEventListener('resize', function () {
        //不同屏幕分辨率下三列布局
        if (window.innerWidth < window.screen.width) {
          //$('.wrap>.lotteryClassFlag').css('display', 'none');
          $('.wrap>.asideFlag').css('display', 'none');
          //document.getElementById('lotteryClass').style.position = 'static';
          document.querySelector('.wrap>.aside.fl').style.position = 'static';
        } else if (window.innerWidth >= window.screen.width) {
          //$('.wrap>.lotteryClassFlag').css('display', 'block');
          $('.wrap>.asideFlag').css('display', 'block');
          //document.getElementById('lotteryClass').style.position = 'fixed';
          document.querySelector('.wrap>.aside.fl').style.position = 'fixed';
          //document.getElementById('lotteryClass').style.left = (document.querySelector('.wrap>.main').getBoundingClientRect().left - document.getElementById('lotteryClass').offsetWidth - 10) + 'px';
          document.querySelector('.wrap>.aside.fl').style.left = (document.querySelector('.wrap>.main').getBoundingClientRect().left + document.querySelector('.wrap>.main').offsetWidth + 10) + 'px';
        }
        //中奖喜报滚动响应
        Lottery.winListPos();
      });
      var winResultsList = $('.winResultsList');
      var winNoticeWrap = $('.winResultsList>.winLine .winNoticeWrap');

      setTimeout(()=> {
        Lottery.winListPos();
      }, 1000);

      window.onscroll = function () {
        Lottery.winListPos();
      };
    },*/
    showWinMsg: function () { //开奖时若中奖右下角显示中奖信息
      const me = this;
      $('#show-win-wrap').css({//固定这个高度只显示 4个 中奖框
        'height' : 0
      });
      const socket = io(`${User.local_url}/lottery?userName=${User.name}&appId=1`,{path:'/onlineio', forceNew: true});
      socket.on('connect', ()=> {});
      socket.on('disconnect', ()=> {});
      socket.on('lottery_award_message', (res) => {
        $('#show-win-wrap').css({//固定这个高度只显示 4个 中奖框
          'height' : '424px'
        });
        const list = [JSON.parse(res.message)];
        const cloneList = [...list];
        const interval = setInterval(() => {
          if (cloneList.length === 0) {
            clearInterval(interval);
            return;
          }
          const item = cloneList.shift();
          const {
            bonus,
            issue,
            istrace,
            lottery,
            method,
            orderId
          } = item;
          $('#show-win-wrap').append(`
            <div class="msg-item" id="${orderId}">
              <div class="msg-item-title">中奖提示</div>
              <div class="msg-item-close">X</div>
              <div class="msg-item-content">
                  恭喜您，您投注的第${issue}期${lottery}${method}中奖<span class="msg-item-content-money">${bonus}元</span>
              </div>
              <div class="msg-item-detail" id="${orderId}" trace="${istrace}">
                  点击查看详情
              </div>
            </div>
          `);
           //关闭
          $('.msg-item-close').off('click').on('click', function () {
            $(this).parent('.msg-item').remove();
            keepBottom();
          });
          //查看详情
          $('#show-win-wrap').off('click').on('click', '.msg-item-detail', function () {
            const orderId = $(this).attr('id');
            const trace = $(this).attr('trace');
            me.popDetail(trace, {
              orderId,
            });
          });
          //10秒后自动关闭
          setTimeout(() => {
            $(`#show-win-wrap>.msg-item[id="${orderId}"]`).remove();
            if ($('#show-win-wrap').children('.msg-item').length === 0) {//防止挡住右边固定的 客服 线路按钮
              $('#show-win-wrap').css({
                'height' : 0
              });
            }
          }, 10000); 
          //中奖提示4个以下的时候要保证msg-item在最底部
          function keepBottom() {
            const msgItemHeight = $('#show-win-wrap .msg-item').height();
            const msgItemNum = $('#show-win-wrap .msg-item').length;
            // + 10 是margin-bottom的值
            if (msgItemNum < 4) {
              $('#show-win-fix').css({
                'bottom': 20 - (4 - msgItemNum) * (msgItemHeight + 10)
              });
            } else {
              $('#show-win-fix').css({
                'bottom': 20
              });
            }
            $('#show-win-wrap').scrollTop($('#show-win-wrap')[0].scrollHeight); //回到底部
          }
          keepBottom();
        }, 200);
      });      
    },
};

// 数学公式
// 阶乘 n!=n*(n-1)!
Math.factorial = function (n) {
  return n <= 0 ? 1 : n * Math.factorial(n - 1);
};
// 组合combination: m个数中取出n个不同的数
Math.combination = function (m, n) {
  var f = Math.factorial;
  return m < n ? 0 : f(m) / (f(n) * f(m - n));
};
// 求两个数组的交集([1, 2, 3], [3, 4, 5]) →  [3]
Math.intersection = function (a, b) {
  return a.filter(function (n) {
    return b.indexOf(n) != -1;
  });
};
// 求两个数组的无重复并集([1, 2], [2, 3]) → [1,2,3]
Math.union = function (a, b) {
  return (a.concat(b)).filter(function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
};
// 求a数组相对于b数组的补集([1, 2, 3], [3, 4, 5]) →  [1, 2]
Math.difference = function (a, b) {
  return a.filter(function (n) {
    return b.indexOf(n) === -1;
  });
};

// 11选5的n中n的算注数公式
Math.nzn = function (s, n) {
  var tmp = 1;
  for (var i = 0; i < n; i++) {
    tmp *= (s - i) / (i + 1);
  }
  return tmp;
};

// 获取精确度 0.1 返回 1  0.01 返回 2
Math.precision = function (n) {
  var n = (n + '').split('.')[1];
  return n ? n.length : 0;
};
// 验证一组开奖号码是不是顺子[1,2,3],[8,9,0],[6,7,8,9,0,1],[1,2,3,4,5,6]之类
Math.checkShunZi = function (arr) {
  arr = arr.map(function (a, b) {
    return Number(a);
  });
  arr = arr.sort();
  if (arr.indexOf(9) != -1 && arr.indexOf(0) != -1) {
    if (arr.indexOf(8) != -1 && arr.indexOf(1) != -1) {
      if (arr.indexOf(7) == -1) {
        arr = arr.slice(0, arr.length - 2);
        arr.unshift(9);
        arr.unshift(8);
      } else {
        arr = arr.slice(0, arr.length - 3);
        arr.unshift(9);
        arr.unshift(8);
        arr.unshift(7);
      }

    } else if (arr.indexOf(8) != -1 && arr.indexOf(1) == -1) {
      arr.shift();
      arr.push(0);
    } else {
      arr.pop();
      arr.unshift(9);
    }
  }
  return arr.every(function (item, index, arr) {
    return index === 0 || (Number(item) + 10 - 1) % 10 == arr[index - 1];
  });
};

function createMarqueeStyle(marqueeWidth) {
  const style = document.createElement('style');
  style.id = "marqueeLeftStyle";
  style.innerHTML = `
      .marqueeLeft {
          animation: marqueeLeft ${marqueeWidth/50}s linear infinite;
      }
      @keyframes marqueeLeft {
          100% {
              margin-left: -${marqueeWidth}px;
          }
      }
  `;
  document.head.appendChild(style);
}

function keepDecimal(num, decimal) { //num是数字 decimal是保留的小数位数
  const _num = Number(num).toFixed(4);//四位的时候四舍五入，再舍去第四位
  const numArr = _num.split('.');
  numArr[1] = numArr[1].slice(0, decimal);
  return parseFloat(`${numArr[0]}.${numArr[1]}`);
}