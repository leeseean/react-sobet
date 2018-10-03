/* jshint devel:true */

var Agent = Agent || {};

Agent = {
  permission: null,
  greenHttp: null,
  init: function () {
    var me = this;
    var $node = $('#admin_report')
    me.initPermission();
    //添加推广链接
    $node.find('.linkRate a.addLink').unbind('click').click(function () {
      $node.find('.linkRate').hide();
      $node.find('.linkSet').show();
      // 测试按钮可用性
      if($('.linkSet input[name="linkname"]').val().length < 7 && $('.linkSet input[name="linkname"]').val().length > 0 && $('#admin_report').find('.linkSet select[name=rateset]').val() !== '') {
        $('.linkSet .createlink').removeClass('disabled');
      }
    });
    $node.find('.linkSet button').unbind('click').click(function () {
      $node.find('.linkRate').show();
      $node.find('.linkSet').hide();
    })
  },
  initPermission: function () {
    var me = this;
    Api.getCommon('qpermissionlist', {}, function (powers) {
      if (powers.code == '1') {
        var allnowper = [];
        $(powers.result).each(function () {
          allnowper.push(arguments[1].permissionCode);
        })
        me.permission = allnowper;
      }
    }, 1);
  },
  /********************    推广链接   *********************************/
  showLinkRate: function ($node) {
    var me = this;
    var $node = $('#admin_report');
    $node.find('li.bloading[name=link]').height(260);
    var link_tpl;
    Api.getGreenHttp(function (res) {
      if (res && res.code === 0) {
        me.greenHttp = res.url;
      }
      var green = me.greenHttp ? 'green-http' : 'hide';
      link_tpl = [
        '<% for ( var i = 0; i < list.length; i++ ) { %>',
        '<li class="split8">',
        '<span class="linkName" title="<%=list[i].name%>"><%=list[i].name%></span>',
        '<span class="small"><%=list[i].type|Q.userType%></span>',
        '<span class="small"><%=list[i].point|Q.percentFormat%>%</span>',
        '<span><%=list[i].registerNum%></span>',
        '<span class="small"><%=list[i].expire|Q.expireFormat%></span>',
        '<span class="middle"><%=list[i].createTime%></span>',
        '<span class="small"><%=list[i].status|Q.statusFormat%></span>',
        '<span class="big"><em><%=list[i].link|Q.urlFormat%></em><a class="js-copyToClip copyToClip hand <%=list[i].status|Q.greenClass%>" status="<%=list[i].status%>" title="点击复制到剪贴板" data-clipboard-text="<%=list[i].link|Q.greenUrl%>">安全链接</a><a class="qrCode">二维码<div class="code"></div></a><a class="copyToClip hand" title="点击复制到剪贴板" data-clipboard-text="<%=list[i].link|Q.urlFormat%>">复制</a></span>',
        '<span class="pwp last deletelink" code="SCTGLJ" title="删除" data-id="<%=list[i].linkId%>"><em class="hide">删除</em></span></li>',
        '<% } %>'
      ].join('');
    })

    var ratesec_tpl = [
      '<% for ( var i = 0; i < result.length; i++ ) { %>',
      '<li name="<%=result[i].lottery%>"><%=result[i].lottery|Q.lotteryChs%></li>',
      '<% } %>'
    ].join('');

    var updateLinks = function (nowpage) {
      Api.getCommon('getlinks', {
        'currPage': nowpage,
        'type': $node.find('.panel-tab[name=link] select[name=linkType]').val(),
        'startPoint': $node.find('.panel-tab[name=link] select[name=startPoint]').val(),
        'endPoint': $node.find('.panel-tab[name=link] select[name=endPoint]').val(),
        'status': $node.find('.panel-tab[name=link] select[name=status]').val(),
        'expireDay': $node.find('.panel-tab[name=link] select[name=expire]').val()
      }, function (d) {
        if (d.result !== undefined) {
          d = d.result;
          //SDTGFD 推广链接设定;
          if ($.inArray('SDTGFD', me.permission) == -1) {
            $node.find('.pwp[code=SDTGFD]').addClass('locked');
          } else {
            $node.find('.pwp[code=SDTGFD]').removeClass('locked');
          }

          var maxPoint = parseFloat(Q.percentFormat(d.maxPoint), 10);
          me.mpoint = d.maxPoint;
          $node.find('.panel-tab[name=link] .ltPoint').attr('data-point', maxPoint).html('传统彩票返点：' + maxPoint + '%');
          $node.find('.panel-tab[name=quota] .panel-fright em').html(maxPoint);
          if (d.list !== undefined && d.list.length > 0) {
            $node.find('.panel-tab[name=link] ul.data').html(tmpl.apply(this, ['lotterylink', link_tpl, d]));
          } else {
            $node.find('.panel-tab[name=link] ul.data').html('<div class="blankplace">您还没有推广链接</div>');
          }
          $node.find('.panel-tab[name=link] ul.data li').each(function (index, item) {
            $(item).find('.qrCode .code').qrcode({
              render: "canvas",
              width: 150,
              height: 150,
              text: me.greenHttp && $(item).find('.js-copyToClip').attr('status') === '0' ? $(item).find('.green-http').data('clipboard-text') : $(item).find('.big em').html()
            });
          });
          $node.find('.panel-tab[name=link] div.pager').html(Q.showPagination(d.currPage || 1, d.pageSize, d.totalItem, null)).show();
          var tmp;
          tmp = $node.find('.linkSet input[name=QQ]').val();
          $node.find('.linkSet input[name=QQ]').val(d.userLinkInfo.qqNumber);
          $node.find('.linkSet input[name=wechat]').val(d.userLinkInfo.wecharNumber);
          $node.find('.linkSet input[name=skype]').val(d.userLinkInfo.skypeNumber);
          $node.find('.linkSet input[name=email]').val(d.userLinkInfo.email);
          $node.find('.panel-tab[name=link] div.pager a').unbind('click').click(function () {
            nowpage = parseInt($(this).attr('page'), 10);
            updateLinks(nowpage);
          });

          // 删除推广链接
          $node.find('.panel-tab[name=link] .deletelink').unbind('click').click(function () {
            if ($(this).hasClass('disabled')) {
              // me.AgentshowTip('推广链接返点删除暂无权限，请联系上级代理！', $(this));
              return false;
            }

            var linkId = $(this).attr('data-id');
            var deleteConfirm = dialog({
              title: '温馨提示',
              skin: 'confirm-again',
              fixed: 'true',
              content: '您确定要删除当前推广链接吗？',
              button: [{
                id: 'delete_ok',
                value: '确&nbsp;&nbsp;定',
                callback: function (evt) {
                  Api.getCommon('deletelink', {
                    'linkId': linkId
                  }, function (del) {
                    updateLinks(1);
                  });
                }
              }, {
                id: 'delete_no',
                skin: 'cancel',
                value: '取&nbsp;&nbsp;消'
              }]
            }).showModal();
          });

          //查询推广链接
          $node.find('.panel-tab[name=link] .searchLink').unbind('click').click(function () {
			/*var point = $node.find('.panel-tab[name=link] select[name=rateset]').val();
            var status = $node.find('.panel-tab[name=link] select[name=status]').val();
            var expireDay = $node.find('.panel-tab[name=link] select[name=expire]').val();*/
            updateLinks(1);
          });

          //SCTGLJ 推广链接删除全权限;
          if ($.inArray('SCTGLJ', me.permission) == -1) {
            $node.find('.pwp[code=SCTGLJ]').addClass('disabled');
          } else {
            $node.find('.pwp[code=SCTGLJ]').removeClass('disabled');
          }

          // 复制到剪贴板
          var clip = new ZeroClipboard();
          var tip = dialog({
            id: 'copy-tip',
            skin: 'tip',
            align: 'top'
          });
          $node.find('.panel-tab[name=link] ul.data li').each(function (i, el) {
            clip.clip($(el).find('.copyToClip'));
            clip.on('ready', function () {
              this.on('aftercopy', function (event) {
                tip.content('复制成功: ' + event.data['text/plain']);
                tip.show($(event.target)[0]);
                setTimeout(function () {
                  tip.close();
                }, 2000);
              });
            });
          });

          if (ZeroClipboard && ZeroClipboard.state().flash.disabled) {
            $node.find('.panel-tab[name=link] .copyToClip').unbind('click').bind('click', function (evt) {
              evt.preventDefault();

              tip.content('您的浏览器不支持flash插件，安装完flash插件再使用“复制”功能！');
              tip.show($(this)[0]);
              setTimeout(function () {
                tip.close();
              }, 3000);
            });
          }

          var range = maxPoint * 10,
              rateselect = [];
              //minRateSet;

          if (parseFloat(maxPoint, 10) <= 5.0) {
            rateselect = [`<option value="${maxPoint}">${maxPoint}%</option>`];
            //minRateSet = parseFloat(maxPoint).toFixed(1);
          } else {
            rateselect = $.map($(Array(range)), function (val, i) {
              if (i >= 49) {
                var setval = parseFloat((i + 1) / 10).toFixed(1);
                return '<option value="' + setval + '">' + setval + '%</option>';
              }
            });
            //minRateSet = '5.0';
          }

          var pointSelect = $.map($(Array(range)), function (val, i) {
              var pointItem = parseFloat((i + 1) / 10).toFixed(1);
              return '<option value="' + pointItem + '">' + pointItem + '%</option>';
          });

          pointSelect.unshift('<option value="0">0.0%</option>');

          $node.find('.panel-tab[name=link] select[name=startPoint]').html(pointSelect.join(''));
          $node.find('.panel-tab[name=link] select[name=endPoint]').html(pointSelect.reverse().join(''));
          $node.find('.panel-tab[name=reg] select[name=regrate]').html(rateselect.join(''));
          $node.find('.panel-tab[name=setting] select.subrate').html(rateselect.join(''));
          // 推广链接白名单
          me.pointWhiteList = d.pointWhiteList.sort(function (a, b) {
            return a-b;
          });
          if (me.pointWhiteList && me.pointWhiteList.length > 0) {
            me.pointWhiteList.reverse().map(function (item) {
              let white = parseFloat(Q.percentFormat(item), 10);
              if (white !== maxPoint) {
                rateselect.unshift(`<option value="${white}">${white}%</option>`);
              }
            })
          }

          $node.find('.panel-tab[name=linkSet] select[name=rateset]').html(rateselect.join(''));
          //$node.find('.panel-tab[name=linkSet] select[name=rateset]').val(minRateSet);

          /*$node.find('.linkSet .userType input').on('change', function () {
            if ($(this).val() == 1) {
              $node.find('.panel-tab[name=linkSet] select[name=rateset]').val(minRateSet);
            }
          }).trigger('change');*/

          //拖拽返点率
          rateSlide();
          $node.find('.panel-userType .userType input').on('change', function () {
            rateSlide();
          });

          function rateSlide() {
            me.usermax = parseFloat(maxPoint, 10);
            if (parseFloat(maxPoint, 10) <= 5.0) {
              $node.find('.panel-notop').remove();
              $node.find("#raterange").remove();
              $node.find(".panel-fixedin").html(`${maxPoint}%`);
            } else {
              var dispalyMax = parseFloat(maxPoint, 10);
              var dispalyMin = 5.0;
              var halfRate = parseFloat((dispalyMax - dispalyMin)/2 + dispalyMin, 10);
              var displayRangeOpt = {
                min: dispalyMin,
                max: dispalyMax,
                hide_min_max: false,
                from: halfRate,
                from_min: dispalyMin,
                from_max: dispalyMax,
                from_shadow: true,
                grid_num: 0.1,
                grid: true,
                grid_snap: true,
                step: 0.1,
              };
              $node.find('.panel-help em:eq(0)').html(maxPoint.toFixed(1));
              $node.find('.panel-help em:eq(1)').html(dispalyMin);
              $node.find('.panel-help em:eq(2)').html(maxPoint.toFixed(1));
              $node.find("#raterange").ionRangeSlider(displayRangeOpt);
              var slider = $node.find("#raterange").data('ionRangeSlider');
              slider.update(displayRangeOpt);
            }
          }

          if (maxPoint > 0) {
            $('.panel-reg.panel-rate').removeClass('hide');
          } else {
            $('.panel-reg.panel-rate').addClass('hide');
          }
        }
      }, 1);
    };
    //设置返点用户名事件
    var lnkname = $node.find('.linkSet input[name=linkname]');
    var ratesel = $node.find('.linkSet select[name=rateset]');
    $node.find('.linkSet input[name=linkname]').off('keyup').on('keyup', function () {
      var value = $(this).val();
      // oninput="value=value.replace(/[^\a-zA-Z\u4E00-\u9FA5\d]/g,'')" onpropertychange="value=value.replace(/[^\a-zA-Z\u4E00-\u9FA5\d]/g,'')"
      if (value != '' && ratesel.val() != '' && !$('#admin_report').find('.linkSet .error').is(':visible')) {
        $node.find('.linkSet a.createlink').removeClass('disabled');
      } else {
        $node.find('.linkSet a.createlink').addClass('disabled');
      }
    });
    //设置返点按钮事件
    $node.find('.linkSet select[name=rateset]').off('change').on('change', function () {
      if ($node.find('.linkSet a.createlink').hasClass('locked')) {
        return false;
      }

      if ($(this).val() != '' && lnkname.val() != '' && !$('#admin_report').find('.linkSet .error').is(':visible')) {
        $node.find('.linkSet a.createlink').removeClass('disabled');
      } else {
        $node.find('.linkSet a.createlink').addClass('disabled');
      }


      /*if (me.pointWhiteList.indexOf(Q.floatDiv($(this).val(), 100)) !== -1) {
        $node.find('.linkSet .userType input[value=0]').prop("checked", "checked");
      }*/
    });

    // 文本校验
    $node.find('.linkSet').on('blur', 'input[type="text"]', function(ev) {
      var $node = $(ev.currentTarget), name = $node.attr('name'), value = $node.val(), 
          $error = $node.next(), btn = $('.linkSet a.createlink');
          lnkname = $('#admin_report').find('.linkSet input[name=linkname]'), ratesel = $('#admin_report').find('.linkSet select[name=rateset]');
      if(/qq/ig.test(name)) {
        if(value !== '' && (value.length < 5 || value.length > 11 || /^0/ig.test(value) || /\D/.test(value))) {
          $error.show();
          !btn.hasClass('disabled') && btn.addClass('disabled');
          return;
        } else {
          $error.hide();
        }
      } else if(/wechat/ig.test(name)) {
        if(value != '' && (value.length < 5 || value.length > 20)) {
          $error.show();
          !btn.hasClass('disabled') && btn.addClass('disabled');
          return;
        } else {
          $error.hide();
        }
      } else if(/skype/ig.test(name)) {
        if(value !== '' && (value.length < 5 || value.length > 50 || /[^0-9_a-zA-Z@.]/ig.test(value))) { 
          $error.show();
          !btn.hasClass('disabled') && btn.addClass('disabled');
          return;
        } else {
          $error.hide();
        }
      } else if(/email/ig.test(name)) {
        if(value != '' && (value.length < 5 || value.length > 50 || !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value))) {
          $error.show();
          !btn.hasClass('disabled') && btn.addClass('disabled');
          return;
        } else {
          $error.hide();
        }
      }

      if(lnkname.val() !== '' && ratesel.val() !== '' && !$('#admin_report').find('.linkSet .error').is(':visible')) {
        btn.removeClass('disabled');
      }
    });

    $node.find('.linkSet a.createlink').unbind('click').click(function () {
      var qq = $node.find('.linkSet input[name=QQ]').val();
      var wechat = $node.find('.linkSet input[name=wechat]').val();
      var skype = $node.find('.linkSet input[name=skype]').val();
      var email = $node.find('.linkSet input[name=email]').val();
      var reQQ = /^[1-9]\d{4,13}$/;
      var reWechat = /^[A-Za-z\d_]{5,}$/;
      var reSkype = /^[A-Za-z0-9]+$/;
      var reEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      var tmp = '';
      var link_input = $node.find('.linkSet input[name=linkname]');
      var link_name = link_input.val();
      var link_type = $node.find('.linkSet .userType input:checked').val();
      var link_expire = $node.find('.linkSet select[name=expire]').val();
      var link_point = $node.find('.linkSet select[name=rateset]').val();

      if($(this).hasClass('disabled')) return;

      if (link_type == 1 && me.pointWhiteList.length > 0 && me.pointWhiteList.indexOf(Q.floatDiv(link_point, 100)) !== -1) {
        me.showTip('该返点只能用于创建玩家', $node.find('.linkSet select[name=rateset]'));
        return
      }

      tmp = $node.find('.linkSet .errorQQ');
      if(qq !== '' && (qq.length < 5 || qq.length > 11 || /^0/ig.test(qq) || /\D/.test(qq))) {
        tmp.show();
        return;
      } else {
        tmp.hide();
      }

      tmp = $node.find('.linkSet .errorWechat');
      if(wechat != '' && (wechat.length < 5 || wechat.length > 20)) {
        tmp.show();
        return;
      } else {
        tmp.hide();
      }

      tmp = $node.find('.linkSet .errorSkype');
      if(skype !== '' && (skype.length < 5 || skype.length > 50 || /[^0-9_a-zA-Z@.]/ig.test(skype))) { 
        tmp.show();
        return;
      } else {
        tmp.hide();
      }

      tmp = $node.find('.linkSet .errorEmail');
      if(email != '' && (email.length < 5 || email.length > 50 || !reEmail.test(email))) {
        tmp.show();
        return;
      } else {
        tmp.hide();
      }

      if ($(this).hasClass('locked')) {
        me.showTip('推广链接返点设置暂无权限，请联系商家！', $node.find('a.createlink'));
        return false;
      }
      if ($(this).hasClass('disabled')) {
        //me.showTip('请选择注册返点比率！', $node.find('select[name=rateset]'));
        return false;
      }



      if (link_name.length > 6) {
        me.showTip('二维码名称不能超过6个字符！', link_input);
        return;
      } else if(link_name === '') {
        me.showTip('请输入二维码名称！', link_input);
        return;
      }

      if(link_expire === '') {
        me.showTip('有效期为空', link_expire);
        return;
      }

      $(this).addClass('loading');
      Api.getCommon('createlink', {
        name: link_name,
        type: link_type,
        point: link_point,
        expire: $node.find('.linkSet select[name=expire]').val(),
        qqNumber: qq,
        wecharNumber: wechat,
        skypeNumber: skype,
        email: email,
        action: 'POST'
      }, function (d) {
        if (parseInt(d.code, 10) === 1) {
          me.showTip('成功生成推广链接！', $node.find('.linkSet a.createlink'));
          $node.find('.linkSet a.createlink').addClass('disabled');
          setTimeout(function () {
            $node.find('.linkSet').hide();
            me.showLinkRate($node);
            // window.location.reload();
          }, 1200);
        } else {
          me.showTip(d.msg, $node.find('.linkSet a.createlink'));
          $node.find('.linkSet a.createlink').addClass('disabled');
          setTimeout(function () {
            $node.find('.linkSet').hide();
            me.showLinkRate($node);
            // window.location.reload();
          }, 1200);
        }
        $node.find('.linkSet a.createlink').removeClass('loading');
      }, 1);
    });
    //管理员账号开户权限设置列表
    var nowpowerlist = $node.find('.panel-tab[name=reg] ul.data:eq(1)');
    var nowlist = $node.find('.panel-tab[name=reg] ul.data:eq(0)');
    $node.find('.panel-regtype').off('click').on('click', 'li', function (evt) {
      $(this).siblings().removeClass('on');
      $(this).addClass('on');

      //用户名密码初始化
      $node.find('.panel-tab[name=reg] input[name=agent_username]').attr('first', 1).val('');
      $node.find('.panel-tab[name=reg] input[name=agent_pwd]').val('');

      if ($(this).attr('rel') == 'admin') {
        $node.find('ul.head li.listhead[name=regRateList]').hide();
        $node.find('ul.head li.listhead[name=regAdminList]').show();
        nowpowerlist.show();
        $node.find('select.panel-reg-point').hide();
        $node.find('select.panel-reg-point').prev().hide();
        $node.find('.panel-rate').hide();
        $node.find('.panel-power').show();
        nowlist.hide();
      } else {
        $node.find('ul.head li.listhead[name=regRateList]').show();
        $node.find('ul.head li.listhead[name=regAdminList]').hide();
        nowpowerlist.hide();
        nowlist.show();
        $node.find('select.panel-reg-point').show();
        $node.find('.panel-rate').show();
        $node.find('.panel-power').hide();
        $node.find('select.panel-reg-point').prev().show();
      }
    });

    updateLinks(1);
    $node.find('.panel-tab[name=link]').show();


    var LotteryChs = {
      result: []
    };
    var rateselect_tpl = [
      '<option value="" selected="selected">全部</option>',
      '<% for ( var i = 0; i < result.length; i++ ) { %>',
      '<option value="<%=result[i].lottery%>"><%=result[i].ch%></option>',
      '<% } %>'
    ].join('');
    for (let code in LotteryClass.names) {
      LotteryChs.result.push({
        'lottery': code,
        'ch': LotteryClass.names[code]
      })
    }
    //初始化select彩种列表
    $node.find('.panel-tab[name=change] select[name=lotteryChg]').html(tmpl.apply(this, ['lotteryselect', rateselect_tpl, LotteryChs]));
    $node.find('.panel-tab[name=setting] select[name=settingList]').html(tmpl.apply(this, ['lotteryselect', rateselect_tpl, LotteryChs]));
    $node.find('.panel-tab[name=combinereport] select[name=lotteryChg]').html(tmpl.apply(this, ['lotteryselect', rateselect_tpl, LotteryChs]));

    //读取代理信息
    Api.getCommon('getproxyinfo', {
      cache: 1
    }, function (pi) {
      if (typeof pi.result.userName !== 'undefined') {
        $node.find('ul.summary em:eq(0)').html(pi.result.userName);
        $node.find('.panel-tab[name=quota] em.dupnick').html(pi.result.userName);
      } else {
        return false;
      }
      if (typeof pi.result.memberCount !== 'undefined') {
        $node.find('ul.summary em:eq(1)').html(pi.result.memberCount);
      }
    }, 1);
    //解锁
    $node.find('ul.tablst li[name=link]').removeAttr('lock');
  },
  showUser: function (node, p) {
    var me = this;
    node.find('li.bloading[name=user]').height(350);
    //用户列表四按钮loading
    node.find('li.bloading[name=detail]').height(350);
    node.find('li.bloading[name=detail-rate]').height(350);
    node.find('li.bloading[name=balance]').height(455);
    node.find('li.bloading[name=change]').height(260);
    node.find('li.bloading[name=setting]').height(51);
    node.find('li.bloading[name=detail-pointrate]').height(260);
    node.find('li.bloading[name=combine]').height(350);

    var usr_tpl = [
      '<% for ( var i = 0; i < result.length; i++ ) { %>',
      '<li class=" split41">',
      '<span><%=result[i].userName%></span>',
      '<span><%=result[i].userType|Q.userChs%></span>',
      '<span>￥<%=result[i].balance%></span>',
      '<span class="last">',
      '<a class="hand quota pwp" name="<%=result[i].userId%>" type="<%=result[i].userType%>" username="<%=result[i].userName%>" point="<%=result[i].point|Q.chkquota%>" quota="<%=result[i].point%>" rel="setquota" code="TZPE">调整配额</a>',
      '<a class="hand detail pwp" name="<%=result[i].userId%>" type="<%=result[i].userType%>" username="<%=result[i].userName%>" rel="detail" code="CKXJXX">详情</a>',
      '<a class="hand change pwp" name="<%=result[i].userId%>" type="<%=result[i].userType%>" username="<%=result[i].userName%>" rel="change" code="CKXJZBXX">游戏账变</a>',
      '<%=result[i].userType|Q.setBalance,result[i].userId,', me.mpoint, '%>',
      '<a class="hand setting pwp" name="<%=result[i].userId%>" type="<%=result[i].userType%>" username="<%=result[i].userName%>" rel="setting" code="SDXJFD">返点设置</a>',
      '<%=result[i].userType|Q.setPermission,result[i].userId%>', //设置权限
      '</span></li>',
      '<% } %>'
    ].join('');
    var params = p;
    if (typeof p != 'undefined') {
      if (typeof p.currPage !== 'undefined') {
        params['currPage'] = p.currPage;
      } else {
        params['currPage'] = 1;
      }
    }
    params['pageSize'] = 9;
    params['failed'] = function () {
      node.find('ul.tablst li').removeAttr('lock');
    };
    Api.getCommon('users', params, function (usr) {
      var usertab = node.find('.panel-tab[name=user]');
      var quotatab = node.find('.panel-tab[name=quota]');

      Api.getCommon('getproxyinfo', {
        cache: 1
      }, function (pi) {
        node.parent().find('ul.summary em:eq(0)').html(pi.result.userName);
        node.parent().find('ul.summary em:eq(1)').html(pi.result.memberCount);
        quotatab.find('em.dupnick').html(pi.result.userName);
      }, 1);

      if (typeof usr.result !== 'undefined') {
        if (usr.result.length > 0) {
          usertab.find('ul.data').html(tmpl.apply(this, ['lotteryusr', usr_tpl, usr]));

          usertab.find('a.quota[point=0]').remove();
          usertab.find('a.quota[type=5]').remove();
          if (typeof usertab.attr('pe') !== 'undefined') {
            if (parseInt(usertab.attr('pe'), 10) == 0) {
              usertab.find('a.quota').hide();
            } else {
              usertab.find('a.quota').show();
            }
          } else {
            usertab.find('a.quota').hide();
          }
          //node.find('ul.tablst li[name=user]').removeAttr('auto');
          var allnowper = usertab.data('pwp');
          if (typeof allnowper == 'undefined') {
            allnowper = me.permission;
          }
          //管理员USERTYPE=5隐藏充值
          var ut = $('#globe-welcome span.nickname').attr('typ');
          if (ut == '5') {
            usertab.find('a.balance').hide();
            usertab.find('a.quota').remove();
          } else {
            usertab.find('a.detail[type=5],a.change[type=5],a.setting[type=5]').hide();
          }

          //CKXJXX 查看下级详情;
          if ($.inArray('CKXJXX', allnowper) == -1) {
            usertab.find('.pwp[code=CKXJXX]').hide();
          }
          //CKXJZBXX 查看下级账变;
          if ($.inArray('CKXJZBXX', allnowper) == -1) {
            usertab.find('.pwp[code=CKXJZBXX]').hide();
          }
          //SDXJFD 返点设置;
          if ($.inArray('SDXJFD', allnowper) == -1) {
            usertab.find('.pwp[code=SDXJFD]').hide();
          }

          node.find('.panel-tab[name=user] div.pager').html(Q.showPagination(usr.page.currPage || 1, usr.page.pageSize, usr.page.totalItem, null)).show();
          node.find('.panel-tab[name=user] div.pager a').unbind('click').click(function () {
            var nowpage = parseInt($(this).attr('page'), 10);
            usertab.find('div.pager').html('');
            usertab.find('ul.data').html('<li class="bloading" name="user"><div class="ui-dialog-loading"></div></li>');
            usertab.find('li.bloading[name=user]').height(350);

            me.showUser(node, {
              currPage: nowpage
            });
          });
          //用户信息,用户团队,账变,充值,返点设置,权限设置
          usertab.find('ul.data a').unbind('click').click(function () {
            me.showSecondLay(node, usertab, $(this).attr('rel'), $(this).attr('name'));
          });
          //解锁
          node.find('ul.tablst li[name=user]').removeAttr('lock');
        } else {
          usertab.find('ul.data').html('<li name="user" style="height: 350px;"><div class="blankplace">暂无数据</div></li>');
          usertab.find('div.pager').html('');
        }
      } else {
        usertab.find('ul.data').html('<li name="user" style="height: 350px;"><div class="blankplace">暂无数据</div></li>');
        usertab.find('div.pager').html('');
      }
    }, 1);

    //查询用户
    //格式验证用户名格式和是否存在
    var regUser = node.find('input[name=searchName]');
    node.find('input[name=balanceMin]').inputNumber();
    node.find('input[name=balanceMax]').inputNumber();
    node.find('a.searchUser').unbind('click').click(function () {
      if (parseInt(node.find('input[name=balanceMin]').val(), 10) > parseInt(node.find('input[name=balanceMax]').val(), 10)) {
        var max = node.find('input[name=balanceMax]').val();
        var min = node.find('input[name=balanceMin]').val();
        node.find('input[name=balanceMin]').val(max);
        node.find('input[name=balanceMax]').val(min);
      }
      me.showUser(node, {
        searchName: node.find('input[name=searchName]').val(),
        balanceMin: node.find('input[name=balanceMin]').val(),
        balanceMax: node.find('input[name=balanceMax]').val()
      });
    });
  },
  showReg: function () {
    var $node = $('#admin_report');
    var me = this;
    $node.find('.panel-tab.linkRate').hide();
    $node.find('li.bloading[name=reg]').height(350);

    $node.find('input.panel-reg-user').on('blur', function () {
      var val = $(this).val();
      var pattern = /^[a-zA-Z_][a-zA-Z0-9_]{4,14}$/;

      if (!pattern.test(val)) {
        $(this).next().show();
        $node.find('a.saveuser').addClass('disabled');
        $(this).removeClass('ok');
      } else {
        $(this).next().hide();
        $(this).addClass('ok');
      }

      if ($('input.panel-reg-user').hasClass('ok') && $('input.panel-reg-pwd').hasClass('ok')) {
        $node.find('a.saveuser').removeClass('disabled');
      }
    });

    $node.find('input.panel-reg-pwd').on('blur', function () {
      var val = $(this).val();
      var pattern = /^(?=.*[\d])(?=.*[a-zA-Z])[0-9a-zA-Z!~`\-+\\/@\$#%^&*()]{6,16}$/;

      if (!pattern.test(val)) {
        $(this).next().show();
        $node.find('a.saveuser').addClass('disabled');
        $(this).removeClass('ok');
      } else {
        $(this).next().hide();
        $(this).addClass('ok');
      }

      if ($('input.panel-reg-user').hasClass('ok') && $('input.panel-reg-pwd').hasClass('ok')) {
        $node.find('a.saveuser').removeClass('disabled');
      }
    });



    //选择返点
    $node.find('select[name=regrate]').off('change').on('change', function () {
      $node.find('em.fromselect').html($(this).val() == '' ? '-' : $(this).val());
      if ($node.find('select[name=regrate]').val() != '' && $node.find('input.panel-reg-pwd:eq(0)').val() != '' && $node.find('input.panel-reg-user:eq(0)').val() != '' && parseInt($node.find('input.panel-reg-pwd:eq(0)').data('error'), 10) > 2 && parseInt($node.find('input.panel-reg-user:eq(0)').data('error'), 10) > 2) {
        $node.find('a.saveuser').removeClass('disabled');
      } else {
        $node.find('a.saveuser').addClass('disabled');
      }
    });
    //开户事件
    $node.find('a.saveuser').unbind('click').click(function () {
      $node.find('input.panel-reg-user').blur();
      $node.find('input.panel-reg-pwd').blur();

      var nowset = $(this);
      if ($(this).hasClass('disabled')) {
        return false;
      }

      var allpers = $node.find('.panel-tab[name=reg] ul.regAdminList input[type=checkbox]').map(function () {
        return '{"code":"' + $(this).attr('name') + '","hasPermissiom":' + ($(this).prop('checked') ? '1' : '0') + '}'
      }).get();

      var p_permission = '[' + allpers.join(',') + ']';

      var usertyp = $node.find('.panel-userType .userType input:checked').val();
      //var loginusertyp = $('#globe-welcome .nickname').attr('typ');

      var regParames = {
        userName: $node.find('input.panel-reg-user:eq(0)').val(),
        password: md5($node.find('input.panel-reg-pwd:eq(0)').val()),
        desPassword: strEnc($node.find('input.panel-reg-pwd:eq(0)').val(), '1', '2', '3'),
        point: ($node.find('input#raterange').val() == '' ? 0 : $node.find('input#raterange').val()) || me.usermax,
        appId: '2',
        userType: usertyp,
        action: 'POST'
      };

      /*if (typeof Navigation.shopid !== 'undefined') {
       regParames['shopId'] = Navigation.shopid;
       }*/

      if (usertyp == '5') {
        regParames['permission'] = p_permission;
      }

      Api.getCommon('agentregister', regParames, function (d) {
        if (parseInt(d, 10) === -1) {
          User.updateMoney();
          $('.aside .btns .go-agent').hide();
          $('.aside .btns').addClass('btns-half');
          pop.close();
          $(".loginlnk").trigger("click");
        } else {
          if (parseInt(d.code, 10) == 1) {
            me.showTip('开户成功！', $node.find('a.saveuser'));
            $node.find('input.panel-reg-user:eq(0)').val('');
            $node.find('input.panel-reg-pwd:eq(0)').val('');
            $node.find('ul.tablst li[name=user]').attr('auto', 1);
            $node.find('a.saveuser').addClass('disabled');
            $node.find('.panel-tab[name=user] div.list ul.data').attr('refresh', 1);
          } else {
            me.showTip(d.msg, $node.find('a.saveuser'));
          }
        }
      }, 1);
    });
    //开户信息判断
    Api.getCommon('getproxyinfo', {}, function (proxy) {
      if (typeof proxy['result'] !== 'undefined') {
        var d = proxy['result'];
        var userid = d['userId'];
        me.uuid = userid;
        var usertyp = d['userType'];
        var userpower = (usertyp != '5' ? 'qpermissionlist' : 'qusrpermission');
        if (usertyp == '4') {
          $node.find('ul.tablst li[name=combine]').removeClass('noright');
        }

        if (typeof d['adminType'] !== 'undefined') {
          if (d['adminType'] != '5') {
            if (typeof d['userName'] !== 'undefined') {
              $node.find('ul.summary em:eq(0)').html(d['userName']);
            }
            $('ul.panel-regtype li[rel=admin]').show();
          } else {
            if (typeof d['userName'] !== 'undefined') {
              $node.find('ul.summary em:eq(0)').html(d['userName']);
            }
            userpower = 'qusrpermission';
          }
        } else {
          $node.find('ul.summary em:eq(0)').html(d['userName']);
          $('ul.panel-regtype li[rel=admin]').show();
        }

        Api.getCommon(userpower, {}, function (permission) {
          var allnowper = [];
          if (permission.code == '1') {
            permission.result.map(function (el, k) {
              allnowper.push(el.permissionCode)
            });

            //权限列表
            var regpower_tpl_old = [
              '<% for ( var i = 0; i < result.length; i++ ) { %>',
              '<li class=" split2" name=""><span><%=result[i].permissionName%></span><span class="s2last"><input name="<%=result[i].permissionCode%>" class="hand powerchk" type="checkbox" checked="checked"></span></li>',
              '<% } %>'
            ].join('');

            var regpower_tpl = [
              '<% for ( var i = 0; i < result.length; i++ ) { %>',
              '<li class=" split2" name=""><input name="<%=result[i].permissionCode%>" class="hand powerchk" type="checkbox" checked="checked"><%=result[i].permissionName%></li>',
              '<% } %>'
            ].join('');

            var nowpowerlist = $node.find('.panel-tab[name=reg] .panel-power ul.regAdminList');
            nowpowerlist.html(tmpl.apply(this, ['lotterypower', regpower_tpl, permission])).show();
            //判断是否显示滚动条2
            var eachHeight = nowpowerlist.find('li:eq(0)').height();
            var totalHeight = nowpowerlist.height();

            if (eachHeight * nowpowerlist.find('li').size() > totalHeight) {
              nowpowerlist.removeClass('withoutscroll');
            } else {
              nowpowerlist.addClass('withoutscroll');
            }

            //DLKH，代理开户
            if ($.inArray('DLKH', allnowper) == -1) {
              $node.find('.pwp[code=DLKH]').hide();
              //$node.find('ul.panel-regtype li[rel=member]').addClass('on');
            }
            //CKTDXX，团队
            if ($.inArray('CKTDXX', allnowper) == -1) {
              $node.find('.pwp[code=CKTDXX]').hide();
              //$node.find('ul.panel-regtype li[rel=member]').addClass('on');
            }
            //CKXJXX，用户列表权限集合;
            $node.find('.panel-tab[name=user]').data('pwp', allnowper);

            //用户列表
            me.showUser($node, {});

            //SDTGFD 推广链接设定;
            if ($.inArray('SDTGFD', allnowper) == -1) {
              $node.find('.pwp[code=SDTGFD]').addClass('locked');
            } else {
              $node.find('.pwp[code=SDTGFD]').removeClass('locked');
            }
          }
        });
      }
    }, 1);
    //解锁
    $node.find('ul.tablst li[name=reg]').removeAttr('lock');
  },
  showPermissions: function (uid, nowtab) {
    var me = this;
    Api.getCommon('qpermissionlist', {}, function (p) {
      if (p.code == '1') {
        //权限列表
        var regpower_tpl = [
          '<% for ( var i = 0; i < result.length; i++ ) { %>',
          '<li class=" split2" name=""><span><label for="p_<%=result[i].permissionCode%>"><%=result[i].permissionName%></label></span><span class="s2last"><input name="<%=result[i].permissionCode%>" id="p_<%=result[i].permissionCode%>" class="hand permissionitem" type="checkbox"></span></li>',
          '<% } %>'
        ].join('');

        nowtab.find('ul.head:eq(0) li[name=regAdminList]').show();
        nowtab.find('ul.data:eq(0)').html(tmpl.apply(this, ['lotterypermission', regpower_tpl, p]));
        var nowpowerlist = nowtab.find('ul.data:eq(0)');
        //判断是否显示滚动条2
        var eachHeight = nowpowerlist.find('li:eq(0)').height();
        var totalHeight = nowpowerlist.height();

        if (eachHeight * nowpowerlist.find('li').size() > totalHeight) {
          nowpowerlist.removeClass('withoutscroll');
        } else {
          nowpowerlist.addClass('withoutscroll');
        }
        //修改权限时读取用户全部权限
        Api.getCommon('qpermissionbyid', {
          userId: uid
        }, function (nowp) {
          var nowpp = nowp.result;
          var nowhave = {};
          for (i = 0; i < nowpp.length; i++) {
            nowhave[nowpp[i].permissionCode] = nowpp[i].permissionId;
            nowpowerlist.find('.permissionitem[name=' + nowpp[i].permissionCode + ']').prop('checked', true);
          }
          nowpowerlist.show();
        });
      }
    }, 1);

    nowtab.find('a.savepermission').unbind('click').click(function () {
      var allpers = nowtab.find('ul.regAdminList input[type=checkbox]').map(function () {
        return '{"code":"' + $(this).attr('name') + '","hasPermissiom":' + ($(this).prop('checked') ? '1' : '0') + '}'
      }).get();

      var p_permission = '[' + allpers.join(',') + ']';

      Api.getCommon('mpermission', {
        userId: uid,
        action: 'POST',
        permission: p_permission
      }, function (d) {
        if (parseInt(d.code, 10) == 1) {
          me.showTip('设置成功！', nowtab.find('a.savepermission'));
        } else {
          me.showTip(d.msg, nowtab.find('a.savepermission'));
        }
      }, 1);

    });
  },
  showSecondLay: function (node, usertab, type, uid) {
    node.find('.panel-tab').hide();
    var nowtab = node.find('.panel-sec[name=' + type + ']');
    nowtab.show();
    nowtab.find('ul.pointrate').hide();
    var me = this;
    me[me.firevent[type]](uid, nowtab);
  },
  showUserinfo: function (uid, nowtab) {
    var me = this;

    var lefth = me.h - nowtab.find('div.panel-sectab').height() - nowtab.find('ul.head-tab').height() - 60;
    nowtab.find('ul.data:eq(0)').show();
    nowtab.find('ul.head-tab').hide();
    nowtab.find('ul.pointrate').hide();

    nowtab.find('a.backinfo').unbind('click').click(function () {
      nowtab.find('ul.data:eq(0)').show();
      nowtab.find('h3').addClass('on');
      nowtab.find('ul.panel-usrinfo li').removeClass('on');
      nowtab.find('ul.head-tab').hide();
      nowtab.find('ul.pointrate').hide();
    });

    nowtab.find('.panel-sectab h3').addClass('on');
    nowtab.find('ul.sectab li.on').removeClass('on');

    Api.getCommon('userinfo', {
      userId: uid
    }, function (info) {
      var infos = {
        'infos': [info.result]
      };
      var infotpl = [
        '<% for ( var i = 0; i < infos.length; i++ ) { %>',
        '<li class="listhead split11"><span>用户名</span><span class="last"><%=infos[i].userName%></span></li>',
        '</span></li>',
        '<li class="split11"><span>用户类型</span><span class="last"><%=infos[i].userType|Q.userChs%></span></li>',
        '</span></li>',
        '<li class="split11"><span>可用金额</span><span class="last">￥<%=infos[i].balance%></span></li>',
        '</span></li>',
        //'<li class="split11"><span>奖金限额</span><span class="last">￥<%=infos[i].awardLimit%></span></li>',
        //'</span></li>',
        '<li class="split11"><span>最后登录时间</span><span class="last"><%=infos[i].lastLogin%></span></li>',
        '</span></li>',
        '<% } %>'
      ].join('');

      var ratesec_tpl = [
        '<% for ( var i = 0; i < userPoints.length; i++ ) { %>',
        '<li name="<%=userPoints[i].lottery%>"><%=userPoints[i].lottery|Q.lotteryChs%></li>',
        '<% } %>'
      ].join('');

      nowtab.find('ul.data:eq(0)').html(tmpl.apply(this, ['lotteryinfo', infotpl, infos]));
      //用户信息彩种列表
      nowtab.find('ul.panel-usrinfo').html(tmpl.apply(this, ['lotteryrate_sec', ratesec_tpl, info.result]));
      nowtab.find('.panel-sectab h3').css({
        "height": nowtab.find('.panel-sectab').height(),
        "line-height": nowtab.find('.panel-sectab').height() + 'px'
      });
      // 绑定彩种点击事件
      nowtab.find('ul.panel-usrinfo li').unbind('click').click(function () {
        var lname = $(this).attr('name');
        nowtab.find('h3').removeClass('on');
        nowtab.find('ul.panel-usrinfo li').removeClass('on');
        $(this).addClass('on');

        nowtab.find('ul.pointrate').html('<li class="bloading" name="detail-pointrate"><div class="ui-dialog-loading"></div></li>');
        nowtab.find('ul.pointrate li.bloading').height(260);

        nowtab.find('ul.data:eq(0)').hide();
        nowtab.find('ul.head-tab').show();
        nowtab.find('ul.pointrate').height(lefth).show();
        Api.getCommon('lotterypointrate', {
          lottery: lname,
          userId: uid
        }, function (prate) {
          nowtab.find('ul.data:eq(0)').hide();
          nowtab.find('ul.head-tab').show();
          var infop = {
            'infos': prate.result
          };

          var infoptpl = [
            '<% for ( var i = 0; i < infos.length; i++ ) { %>',
            '<li class="split5"><span><%=infos[i].playGroupName%></span><span><%=infos[i].bonusName%></span><span><%=infos[i].reward%></span><span><%=infos[i].point|Q.percentFormat%>%</span><span class="last"><%=infos[i].status|Q.agentStatusChs%></span></li>',
            '<% } %>'
          ].join('');
          nowtab.find('ul.pointrate').html(tmpl.apply(this, ['lotteryinfo_p', infoptpl, infop]));

          lefth = me.h - nowtab.find('div.panel-sectab').height() - nowtab.find('ul.head-tab').height() - 60;

          nowtab.find('ul.pointrate').height(lefth).show();
        });
      });
    }, 1);
  },
  showTeaminfo: function (uid, nowtab) {
    var me = this;
    nowtab.find('li.bloading[name=team]').height(490);
    var startFrom = nowtab.find("input[name=teamStartTime]");
    var endTo = nowtab.find("input[name=teamEndTime]");

    startFrom.datetimepicker({
      id: 'team_start',
      lang: 'zh',
      value: '-1970/01/01',
      minDate: '-1970/03/31',
      maxDate: '+1970/01/01',
      step: 1,
      type: ':first'
    });
    endTo.datetimepicker({
      id: 'team_end',
      lang: 'zh',
      value: '+1970/01/01',
      minDate: '-1970/03/31',
      maxDate: '+1970/01/01',
      step: 1,
      type: ':last'
    });


    var serachParams = {
      startTime: $('#team_start').val() || '',
      endTime: $('#team_end').val() || ''
    };

    var getteaminfo = function (p) {
      p['failed'] = function () {
        nowtab.parent().find('ul.tablst li').removeAttr('lock');
      };
      Api.getCommon('getteaminfo', p, function (tinfo) {
        if (tinfo == 'error') {
          return false;
        }

        if (tinfo.code == '4006') {
          $('ul.tablst li[name=' + nowtab.attr('name') + ']').hide();
        } else {
          $('ul.tablst li[name=' + nowtab.attr('name') + ']').show();
          var d = tinfo.result;
          if (typeof d !== 'undefined') {
            nowtab.find('div.itemlist ul li:eq(0) span em').html(d.realBetAmount);
            nowtab.find('div.itemlist ul li:eq(1) span em').html(d.bonusAmount);
            nowtab.find('div.itemlist ul li:eq(2) span em').html(d.rebateAmount);
            nowtab.find('div.itemlist ul li:eq(3) span em').html(d.commissonAmount);
            nowtab.find('div.itemlist ul li:eq(4) span em').html(d.payAmount);
            nowtab.find('div.itemlist ul li:eq(5) span em').html(d.withdrawAmount);
            nowtab.find('div.itemlist ul li:eq(6) span em').html(d.newUserCount);
            nowtab.find('div.itemlist ul li:eq(7) span em').html(d.profitAndLoss);
          }

        }

        //解锁
        nowtab.parent().find('ul.tablst li[name=team]').removeAttr('lock');
      }, 1);

      Api.getCommon('getproxyinfo', {
        cache: 1
      }, function (pi) {
        if (typeof pi.result !== 'undefined') {
          nowtab.find('div.itemlist ul li:eq(8) span em').html(pi.result.teamBalance);
        }
      }, 1);
    };
    nowtab.find('a#viewmy').unbind('click').click(function () {
      var reltag = $(this).attr('rel');
      var nametag = $(this).attr('name');
      Api.getCommon('getagentquota', {
        'userName': nowtab.parent().find('ul.summary em:eq(0)').html()
      }, function (qo) {
        if (qo !== -1) {
          me.showSecondLay(nowtab.parent(), nowtab, reltag, nametag);
        } else {
          $(".loginlnk").trigger('click');
        }
      });
    });

    nowtab.find('a.switchbtn').unbind('click').click(function () {
      var swp = {};
      var nowrange = $(this).attr('name');
      var now = new Date();

      $(this).removeClass('disabled').siblings('a.switchbtn').addClass('disabled');

      if (nowrange == '0') {
        swp['startTime'] = now.Format('YYYY-MM-DD 00:00:00');
        swp['endTime'] = now.Format('YYYY-MM-DD 23:59:59');
      }
      if (nowrange == '-1') {
        swp['startTime'] = now.DateAdd('d', -1).Format('YYYY-MM-DD 00:00:00');
        swp['endTime'] = now.DateAdd('d', -1).Format('YYYY-MM-DD 23:59:59');
      }
      if (nowrange == '-6') {
        swp['startTime'] = now.DateAdd('d', -6).Format('YYYY-MM-DD 00:00:00');
        swp['endTime'] = now.Format('YYYY-MM-DD 23:59:59');
      }
      getteaminfo(swp);
    });

    nowtab.find('a.searchTeam').unbind('click').click(function () {
      var swp = {};
      var teamSt = new Date(startFrom.val());
      var teamEd = new Date(endTo.val());
      var oldSt = startFrom.val();
      if (teamSt > teamEd) {
        startFrom.val(endTo.val());
        endTo.val(oldSt);
      }
      swp['startTime'] = startFrom.val();
      swp['endTime'] = endTo.val();
      getteaminfo(swp);
    });

    // 初始化点击今天
    if (nowtab.find('a.switchbtn:not(.disabled)').length > 0) {
      nowtab.find('a.switchbtn:not(.disabled)').trigger('click');
    } else {
      nowtab.find('a.switchbtn[name=0]').trigger('click');
    }
  },
  showBalance: function (uid, nowtab) {
    Api.getCommon('userinfo', {
      'userId': uid
    }, function (info) {
      if (info.code == '4006') {
        return false;
      }
      var infos = {
        'infos': [info.result]
      };
      var infotpl = [
        '<% for ( var i = 0; i < infos.length; i++ ) { %>',
        '<li class="listhead split11"><span>用户名</span><span class="last"><%=infos[i].userName%></span></li>',
        '</span></li>',
        '<li class="split11"><span>账户余额</span><span class="last">￥<%=infos[i].balance%></span></li>',
        '</span></li>',
        '<li class="split11"><span class="higher">充值金额</span><span class="last higher">￥<input type="text" value="0" name="gooutCash" min="0" max="10000000" step="1" class="money spinner"/></span></li>',
        '</span></li>',
        '<li class="split11"><span class="higher">&nbsp;</span><span class="last higher"><a rel="',
        User.app,
        '/pay/agentTransferIndexView#lowerUserName=<%=infos[i].userName%>&uin=' + uid + '&amount=" target="_blank" class="hand gotolnk">去充值</a></span></li>',
        '</span></li>',
        '<% } %>'
      ].join('');

      nowtab.find('ul.data').html(tmpl.apply(this, ['lotteryinfo', infotpl, infos]));

      nowtab.find('a.gotolnk').off('click').on('click', function (evt) {
        //evt.preventDefault();
        var lnkurl = $(this).attr('rel');
        $(this).attr('href', lnkurl + nowtab.find('input[name=gooutCash]').val());
        return true;
      });

      nowtab.find('input[name=gooutCash]').val(100);
      nowtab.find('input[name=gooutCash]').inputNumber();

      var initurl = nowtab.find('a.gotolnk').attr('rel');
      nowtab.find('a.gotolnk').attr('href', initurl + '0');
    }, 1);
  },
  showCombine: function (uid, nowtab) {
    var me = this;
    nowtab.find('input[name=jointyp]').val('0');
    nowtab.find('div.list[name=joinform]').hide();
    nowtab.find('a.joinCombine').show();
    nowtab.find('a.sureCombine').css({
      'display': 'none'
    });
    nowtab.find('div.list[name=joinlist]').show();
    nowtab.find('a.sureCombine').html('确认合庄');

    Api.getCommon('searchCombine', {}, function (rates) {
      var d = rates.result;
      if (typeof d.list !== 'undefined') {
        var allrates = {};
        for (i = 0; i < d.list.length; i++) {
          allrates[d.list[i].code] = {
            'b': d.list[i].balanceTotal,
            'sec': d.list[i].seconds
          }
        }
      }
      //查询当前彩种合庄信息
      nowtab.find('input[name=precombine]').on('change', function () {
        var total = allrates[nowtab.find('select[name=combineLottery]').val()].b;
        var sec = allrates[nowtab.find('select[name=combineLottery]').val()].sec;
        var insert = parseInt(nowtab.find('input[name=precombine]').val(), 10);
        var nrate = insert / total;
        var showrate = Q.percentFormat(nrate, 4);
        if (showrate == '0') {
          showrate = Q.percentFormat(nrate, 6);
        }
        nowtab.find('.nowcombinerate').html(showrate + '%');
        nowtab.find('.nowcombinepre').html(Q.doubleFormat((insert / 1950) * (1950 * nrate)));
      });
      nowtab.find('select[name=combineLottery]').on('change', function () {
        if ($(this).val() == '') {
          return false;
        }

        var total = allrates[$(this).val()].b;
        var sec = allrates[$(this).val()].sec;
        var insert = parseInt(nowtab.find('input[name=precombine]').val(), 10);
        var nrate = insert / total;
        var showrate = Q.percentFormat(nrate, 4);
        if (showrate == '0') {
          showrate = Q.percentFormat(nrate, 6);
        }

        var _date = new Date().valueOf() + sec * 1000;
        var ag_clock = nowtab.find('.clock');
        if (me.counter == null) {
          me.counter = ag_clock;
          ag_clock.countdown(_date.toString(), function (event) {
            t = event.offset.hours * 60 * 60 + event.offset.minutes * 60 + event.offset.seconds;
            $(this).html(event.strftime(t >= 3600 ? '%#H:%#M:%#S' : '%#M:%#S'));
          }).on('finish.countdown', function () {
            if (dialog.get('go-next-issue') === undefined) {
              tip = dialog({
                id: 'go-next-issue',
                skin: 'go-next-issue',
                title: '合庄提示',
                content: '<p>本期合庄结束</p>',
                cancel: false,
                fixed: true,
                button: [{
                  id: 'clock_ok',
                  value: '确&nbsp;&nbsp;&nbsp;&nbsp;定',
                  callback: function () {
                    var _datetemp = new Date().valueOf() + 100 * 1000;
                    ag_clock.countdown(_datetemp.toString());
                  }
                }]
              });
              tip.showModal();
            }
          });
        } else {
          ag_clock.countdown(_date.toString());
        }

        nowtab.find('.nowcombinerate').html(showrate + '%');
        nowtab.find('.nowcombinepre').html(Q.doubleFormat((insert / 1950) * (1950 * nrate)));
      });
    }, 1);
    var nowClist = nowtab.find('ul.combinemoneyList:eq(0)');
    nowClist.html('<li class="blankplace" name="combinelst"><div class="blankplace">您还没有合庄记录</div></li>');

    Api.getCommon('queryCombineLst', {}, function (lst) {
      var d = lst.result;
      var combinetpl = [
        '<% for ( var i = 0; i < list.length; i++ ) { %>',
        '<li class="split8">',
        '<span><%=list[i].time%></span>', '<span class="autohide small"><%=list[i].lottery%></span>', '<span>￥<%=list[i].combineTotal|Q.doubleFormat%></span>', //'<span><%=list[i].method%></span>','<span><%=list[i].issue%></span>',
        '<span>￥<%=list[i].combineTotal|Q.doubleFormat%></span>', '<span><%=list[i].mycombinePercent|Q.percentFormat%>%</span>', '<span class="small">未开始</span>',
        '<span class="detail"><%=list[i].applytime%></span>',
        '<span class="hand last"><a class="hand cancelcombine" code="<%=list[i].code%>">取消合庄</a>&nbsp;<a class="recombine hand">补充合庄资金</a></span>',
        '</li>',
        '<% } %>'
      ].join('');

      nowClist.html(tmpl.apply(this, ['combinelist', combinetpl, d]));
      nowClist.find('a.recombine').off('click').on('click', function () {
        nowtab.find('a.sureCombine').html('确认补充');
        nowtab.find('input[name=jointyp]').val('1');
        nowtab.find('div.list[name=joinform]').show();
        nowtab.find('a.joinCombine').hide();
        nowtab.find('a.sureCombine').css({
          'display': 'inline-block'
        });
        nowtab.find('div.list[name=joinlist]').hide();
      });

      nowClist.find('a.cancelcombine').off('click').on('click', function () {
        var nowcancel = $(this);
        nowtab.find('input[name=jointyp]').val('2');
        var d = dialog({
          title: '取消合庄',
          skin: 'confirm-again',
          content: '取消合庄将会把所有的合庄金额全部撤回，您确定要取消合庄吗？',
          button: [{
            id: 'clear_ok',
            value: '确定',
            callback: function () {
              Api.getCommon('joinBanker', {
                lottery: nowClist.find('a.cancelcombine').attr('code'),
                amount: 0,
                type: nowtab.find('input[name=jointyp]').val(),
                action: 'POST'
              }, function (d) {
                if (parseInt(d.code, 10) === 1) {
                  me.showTip('撤庄成功！', nowcancel);
                  d.close().remove();
                } else {
                  me.showTip(d.msg, nowcancel);
                }
                //nowset.removeClass('loading');
              });
              d.close().remove();
            }
          }, {
            id: 'clear_cancel',
            skin: 'cancel',
            value: '取消'
          }]
        }).showModal();
      });
    }, 1);
    nowtab.find('a.sureCombine').off('click').on('click', function () {
      Api.getCommon('joinBanker', {
        //userId: me.uuid,
        lottery: nowtab.find('select[name=combineLottery]').val(),
        amount: nowtab.find('input[name=precombine]').val(),
        type: nowtab.find('input[name=jointyp]').val(),
        action: 'POST'
      }, function (d) {
        if (parseInt(d.code, 10) === 1) {
          me.showTip(nowtab.find('a.sureCombine').html().replace('确认', '') + '成功！', nowtab.find('a.sureCombine'));

          setTimeout(function () {
            nowtab.find('input[name=jointyp]').val('0');
            nowtab.find('div.list[name=joinform]').hide();
            nowtab.find('a.joinCombine').show();
            nowtab.find('a.sureCombine').css({
              'display': 'none'
            });
            nowtab.find('div.list[name=joinlist]').show();
          }, 2000);
        } else {
          me.showTip(d.msg, nowtab.find('a.sureCombine'));
        }
      });
    });
    nowtab.find('a.joinCombine').off('click').on('click', function () {
      nowtab.find('input[name=jointyp]').val('0');
      nowtab.find('div.list[name=joinform]').show();
      nowtab.find('a.joinCombine').hide();
      nowtab.find('a.sureCombine').css({
        'display': 'inline-block'
      });
      nowtab.find('div.list[name=joinlist]').hide();
    });
  },
  showCombineReport: function (uid, nowtab) {
    var me = this;
    var serachParams = {
      startTime: nowtab.find('input[name=startTime]').val(),
      endTime: nowtab.find('input[name=endTime]').val(),
      issue: nowtab.find('input[name=issueNumber]').val(),
      lottery: nowtab.find('select[name=lotteryChg]').val(),
      method: nowtab.find('select[name=methodChg]').val(),
      currPage: 1,
      pageSize: 6
    };

    if (arguments.length > 2) {
      var pParams = arguments[2];
      serachParams['pageSize'] = pParams['pageSize'];
      serachParams['currPage'] = pParams['currPage'];
      serachParams['page'] = pParams['currPage'];
    }
    Api.getCommon('queryCombineRpt', serachParams, function (rpt) {
      var d = rpt.result;
      var moneychangetpl = [
        '<% for ( var i = 0; i < list.length; i++ ) { %>',
        '<li class="splitmulti">',
        '<span><%=list[i].time%></span>', '<span class="autohide"><%=list[i].lottery%></span>', //'<span><%=list[i].method%></span>',
        '<span><%=list[i].issue%></span>', '<span>￥<%=list[i].combineTotal|Q.doubleFormat%></span>', '<span>￥<%=list[i].combineSale|Q.doubleFormat%></span>',
        '<span class="large">￥<%=list[i].combineBonus|Q.doubleFormat%></span>', '<span class="mini">￥<%=list[i].combineBalance|Q.doubleFormat%></span>', '<span>￥<%=list[i].mycombineTotal|Q.doubleFormat%></span>',
        '<span class="mini"><%=list[i].mycombinePercent|Q.percentFormat%>%</span>', '<span class="inlast">￥<%=list[i].mycombineBalance|Q.doubleFormat%></span>',
        '</li>',
        '<% } %>'
      ].join('');

      if (d.list.length > 0) {
        nowtab.find('ul.data:eq(0)').html(tmpl.apply(this, ['combinereport', moneychangetpl, d]));
        //判断是否显示滚动条
        var eachHeight = nowtab.find('ul.combineList li:eq(1)').height();
        var totalHeight = nowtab.find('ul.combineList').height();
        if (eachHeight * nowtab.find('ul.combineList li').size() > totalHeight) {
          nowtab.find('ul.combineList').removeClass('withoutscroll');
        } else {
          nowtab.find('ul.combineList').addClass('withoutscroll');
        }

        //本页金额变动
        nowtab.find('h4 em').html(parseFloat(d.pageChangeMoney).toFixed(4));
        //分页
        nowtab.find('div.pager').html(Q.showPagination(d.page.currPage || 1, d.page.pageSize, d.page.totalItem, null)).show();
      } else {
        nowtab.find('ul.data:eq(0)').html('<li name="combinereport" style="height: 260px;"><div class="blankplace">暂无数据</div></li>');
        nowtab.find('div.pager').html('');
      }

      nowtab.find('div.pager a').unbind('click').click(function () {
        var nowpage = parseInt($(this).attr('page'), 10);
        var pageParams = {};
        pageParams['currPage'] = nowpage;
        pageParams['page'] = nowpage;
        me.showCombineReport(uid, nowtab, pageParams);
      });
    });
  },
  showCombineRecord: function (uid, nowtab) {
    Api.getCommon('queryCombine', {}, function (lst) {
      var d = lst;
      var combinelsttpl = [
        '<% for ( var i = 0; i < result.length; i++ ) { %>',
        '<li class="split4">',
        '<span><%=result[i].createTime%></span>', '<span class="autohide"><%=result[i].lotteryName%></span>', //'<span><%=list[i].method%></span>',
        '<span>￥<%=result[i].amount|Q.doubleFormat%></span>', '<span class="last"><%=result[i].type|Q.combineChs%></span>',
        '</li>',
        '<% } %>'
      ].join('');
      if (d.result.length > 0) {
        nowtab.find('ul.combineLst:eq(0)').html(tmpl.apply(this, ['combinelst', combinelsttpl, d]));
        //判断是否显示滚动条
        var eachHeight = nowtab.find('ul.combineLst li:eq(1)').height();
        var totalHeight = nowtab.find('ul.combineLst').height();
        if (eachHeight * nowtab.find('ul.combineLst li').size() > totalHeight) {
          nowtab.find('ul.combineLst').removeClass('withoutscroll');
        } else {
          nowtab.find('ul.combineLst').addClass('withoutscroll');
        }

        //分页
        //nowtab.find('div.pager').html(Q.showPagination(d.page.currPage || 1, d.page.pageSize, d.page.totalItem, null)).show();  
      } else {
        nowtab.find('ul.combineLst:eq(0)').html('<li name="combinereport" style="height: 260px;"><div class="blankplace">暂无数据</div></li>');
        nowtab.find('div.pager').html('');
      }
    });
  },
  showChange: function (uid, nowtab) {
    var me = this;
    var userTab = nowtab.siblings().filter('[name=user]');
    var nowname = userTab.find('a.change[name=' + uid + ']').attr('username');
    var serachParams = {
      userName: nowname,
      currPage: 1,
      pageSize: 8,
      userId: uid,
      orderType: 1
    };
    me.getuserChange(serachParams, nowtab);
    var startFrom = nowtab.find("input[name=startTime]");
    var endTo = nowtab.find("input[name=endTime]");
    startFrom.datetimepicker({
      id: 'change_start',
      lang: 'zh',
      value: '-1970/01/01',
      minDate: '-1970/03/31',
      maxDate: '+1970/01/01',
      step: 1,
      type: ':first'
    });
    endTo.datetimepicker({
      id: 'change_end',
      lang: 'zh',
      value: '+1970/01/01',
      minDate: '-1970/03/31',
      maxDate: '+1970/01/01',
      step: 1,
      type: ':last'
    });
    nowtab.find('a.searchChange').off('click').on('click', function (e) {
      var serachP = {
        startTime: nowtab.find('input[name=startTime]').val(),
        endTime: nowtab.find('input[name=endTime]').val(),
        userName: nowtab.find('input[name=userNameChg]').val(),
        lottery: nowtab.find('select[name=lotteryChg]').val(),
        orderType: nowtab.find('select[name=orderTypeChg]').val(),
        mode: nowtab.find('select[name=modeChg]').val(),
        type: nowtab.find('select[name=changeType]').val(),
        currPage: parseInt(nowtab.find('div.pager a.on').attr('page'), 10),
        pageSize: 6,
        userId: uid
      };
      nowtab.find('ul.data:eq(0)').html('<li class="bloading" name="change"><div class="ui-dialog-loading"></div></li>');
      nowtab.find('li.bloading[name=change]').height(260);
      nowtab.find('h4 em').html('');
      me.getuserChange(serachP, nowtab);
    });

    nowtab.find('ul.data:eq(0)').off('scroll').on('scroll', function (e) {
      e.preventDefault();
      e.stopPropagation();
      //e.cancelBubble = true;
    });
  },
  getuserChange: function (serachParams, nowtab) {
    var me = this;
    serachParams['selectType'] = 1;
    nowtab.find("input[name=userNameChg]").val(serachParams['userName']);
    Api.getCommon('accountinfo', serachParams, function (info) {
      var d = info.result;
      var moneychangetpl = [
        '<% for ( var i = 0; i < list.length; i++ ) { %>',
        '<li class="splitmulti">',
        '<span><%=list[i].userName%></span>', '<span class="autohide large"><%=list[i].time%></span>', '<span><%=list[i].type|Q.changeTypeChs%></span>',
        '<span><%=list[i].lottery|Q.lotteryChs%></span>', '<span><%=list[i].orderType|Q.orderTypeChs%></span>', '<span><%=list[i].method|Q.getMethodName,list[i].lottery%></span>',
        '<span><%=list[i].issue%></span>', '<span class="small"><%=list[i].mode|Q.modeName%></span>', '<span>￥<%=list[i].moneyChange%></span>',
        '<span class="last">￥<%=list[i].balance%></span>',
        '</li>',
        '<% } %>'
      ].join('');
      if (d.list.length > 0) {
        nowtab.find('ul.data:eq(0)').html(tmpl.apply(this, ['lotterychange', moneychangetpl, d]));
        //判断是否显示滚动条
        var eachHeight = nowtab.find('ul.changeList li:eq(1)').height();
        var totalHeight = nowtab.find('ul.changeList').height();
        if (eachHeight * nowtab.find('ul.changeList li').size() > totalHeight) {
          nowtab.find('ul.changeList').removeClass('withoutscroll');
        } else {
          nowtab.find('ul.changeList').addClass('withoutscroll');
        }

        //本页金额变动
        nowtab.find('h4 em').html(parseFloat(d.pageChangeMoney).toFixed(4));
        //分页
        nowtab.find('div.pager').html(Q.showPagination(d.page.currPage || 1, d.page.pageSize, d.page.totalItem, null)).show();
      } else {
        nowtab.find('ul.data:eq(0)').html('<li name="change" style="height: 260px;"><div class="blankplace">暂无数据</div></li>');
        nowtab.find('div.pager').html('');
      }
      nowtab.find('div.pager a').unbind('click').click(function () {
        var nowpage = parseInt($(this).attr('page'), 10);
        serachParams['currPage'] = nowpage;
        serachParams['page'] = nowpage;
        me.getuserChange(serachParams, nowtab);
      });
    }, 1);
  },
  showSetting: function (uid, nowtab) {
    var me = this;
    var refreshUserinfo = function (uid, nowtab) {
      Api.getCommon('userinfo', {
        userId: uid
      }, function (info) {
        var infos = {
          'infos': [info.result]
        };
        var infotpl = [
          '<% for ( var i = 0; i < infos.length; i++ ) { %>',
          '<li class="split3"><span><%=infos[i].userName%></span><span><%=infos[i].userName%></span><span class="last">￥<%=infos[i].awardLimit|Q.doubleFormat%></span></li>',
          '</span></li>',
          '<% } %>'
        ].join('');
        var regrate_tpl = [
          '<% for ( var i = 0; i < userPoints.length; i++ ) { %>',
          '<li class=" split2"><span><%=userPoints[i].lottery|Q.lotteryChs%></span><span class="s2last"><%=userPoints[i].lotteryPoint|Q.percentFormat%>%(范围：<%=userPoints[i].lotteryPoint|Q.percentFormat%>%~<%=userPoints[i].agentLotteryPoint|Q.percentFormat%>%)</span></li>',
          '<% } %>'
        ].join('');

        nowtab.find('ul.data:eq(0)').html(tmpl.apply(this, ['lotteryinfo', infotpl, infos]));
        //彩种比率3，单个用户返点设置
        nowtab.find('ul.data:eq(1)').html(tmpl.apply(this, ['lotteryrate', regrate_tpl, info.result]));

        var rateselect_tpl = [
          '<option value="" selected="selected">全部</option>',
          '<% for ( var i = 0; i < userPoints.length; i++ ) { %>',
          '<option value="<%=userPoints[i].lottery%>"><%=userPoints[i].lottery|Q.lotteryChs%></option>',
          '<% } %>'
        ].join('');

        nowtab.find('select[name=settingList]').html(tmpl.apply(this, ['lotteryselect', rateselect_tpl, info.result]));

        //最大可修改的返点值
        var renderRate = function (rateJson) {

          var point = Q.floatMul(rateJson.lotteryPoint, 1000);
          var agentPoint = Q.floatMul(rateJson.agentLotteryPoint, 1000);
          var maxPoint = Q.floatMul(rateJson.maxLotteryPoint, 1000);

          var startPoint, endPoint;
          if (point < maxPoint) {
            startPoint = point + 1;
            if (agentPoint >= maxPoint) {
              endPoint = maxPoint;
            } else {
              endPoint = agentPoint;
            }
          }

          var thisselect = [];
          if (startPoint) {
            for (var i = startPoint; i <= endPoint; i++) {
              var setval = Q.floatDiv(i, 1000);
              var v = Q.floatDiv(i, 10);
              thisselect.push('<option value="' + setval + '">' + v + '%</option>');
            }
          }
          thisselect.unshift('<option value="" selected="selected">请选择</option>');
          nowtab.find('select.subrate').html(thisselect.join(''));
          if (thisselect.length == 1 || nowtab.find('select.subrate').val() === '') {
            nowtab.find('a.setuserpoint').addClass('disabled');
          } else {
            nowtab.find('a.setuserpoint').removeClass('disabled');
          }
        }

        var alllotteryPoint = [],
          lpDict = {};
        info.result.userPoints.map(function (el, k) {
          alllotteryPoint.push(el.lotteryPoint);
          lpDict[el.lottery] = {};
          lpDict[el.lottery].lotteryPoint = el.lotteryPoint;
          lpDict[el.lottery].agentLotteryPoint = el.agentLotteryPoint;
          lpDict[el.lottery].maxLotteryPoint = el.maxLotteryPoint;
        });

        var mp = {};
        mp.lotteryPoint = info.result.selfSscPoint;
        mp.agentLotteryPoint = info.result.agentSscPoint;
        mp.maxLotteryPoint = info.result.maxSscPoint;
        lpDict[''] = mp;

        if (nowtab.find('select[name=settingList]').val() == '') {
          renderRate(mp);
        } else {
          if (typeof lpDict[nowtab.find('select[name=settingList]').val()] !== 'undefined') {
            renderRate(lpDict[nowtab.find('select[name=settingList]').val()]);
          }
        }

        var eachHeight = nowtab.find('ul.settingList li:eq(1)').height();
        var totalHeight = nowtab.find('ul.settingList').height();
        if (eachHeight * nowtab.find('ul.settingList li').size() > totalHeight) {
          nowtab.find('ul.data:eq(1)').removeClass('withoutscroll');
        } else {
          nowtab.find('ul.data:eq(1)').addClass('withoutscroll');
        }

        nowtab.find('select').off('change').on('change', function () {
          if (typeof lpDict[$(this).val()] !== 'undefined') {
            renderRate(lpDict[$(this).val()]);
          }
          if (nowtab.find('select[name=settingRate]').val() != '') {
            nowtab.find('a.setuserpoint').removeClass('disabled');
          } else {
            nowtab.find('a.setuserpoint').addClass('disabled');
          }
        });
      }, 1);
    }

    nowtab.find('a.setuserpoint').unbind('click').click(function () {
      var nowset = $(this);
      if ($(this).hasClass('disabled')) {
        if (nowtab.find('select[name=settingRate]').val() == '') {
          me.showTip('请选择彩种返点比率', nowtab.find('select[name=settingRate]'));
        }
        return false;
      }
      var lname = $(this).attr('name');
      nowset.addClass('loading');
      Api.getCommon('setpoints', {
        userId: uid,
        lottery: nowtab.find('select.firstlbSetting').val(),
        point: nowtab.find('select.subrate').val(),
        action: 'POST'
      }, function (d) {
        if (parseInt(d.code, 10) === 1) {
          me.showTip('设置返点成功！', nowtab.find('a.setuserpoint'));
          refreshUserinfo(uid, nowtab);
        } else if (d == -1) {
          $('.loginlnk').trigger('click');
        } else {
          me.showTip(d.msg, nowtab.find('a.setuserpoint'));
        }
        nowset.removeClass('loading');
      }, 1);
    });

    refreshUserinfo(uid, nowtab);
  },
  getQuotas: function (uid, nowtab) {
    var me = this;
    var pnode = $(nowtab).parent();
    var nick = pnode.find('ul.summary em:eq(0)').html();

    //返回
    $(nowtab).find('a.backlnk').unbind('click').click(function () {
      pnode.find('.title > ul li.on').removeClass('on');
      pnode.find('.title > ul li[name=team]').addClass('on');
      pnode.find('.panel-tab').hide();
      pnode.find('.panel-tab[name=team]').show();
    });

    $(nowtab).find('em.dupnick').html(nick);
    $(nowtab).find('li.bloading[name=quota]').height(260);

    var renderQuota = function () {
      var quotaParams = {
        'userName': nick
      };
      Api.getCommon('getagentquota', quotaParams, function (qo) {
        //渲染列表
        var d = qo.result;
        var quotatpl = [
          '<% for ( var i = 0; i < list.length; i++ ) { %>',
          '<li class="split5">', //<span>返点</span><span>状态</span><span>配额总量</span><span>消耗配额</span><span class="last">剩余配额</span></li>
          '<span><%=list[i].point%>%</span>',
          '<span><%=list[i].quotaCount%></span>', //'<span><%=list[i].method%></span>',
          '<span><%=list[i].quotaAssigned%></span>',
          '<span><%=list[i].quotaTotal%></span>',
          '<span class="last"><%=list[i].quotaFinal%></span>',
          '</li>',
          '<% } %>'
        ].join('');

        if (d.list.length > 0) {
          nowtab.find('ul.data:eq(0)').html(tmpl.apply(this, ['quotalist', quotatpl, d]));
          //判断是否显示滚动条
          var eachHeight = nowtab.find('ul.data li:eq(1)').height();
          var totalHeight = nowtab.find('ul.data').height();
          if (eachHeight * nowtab.find('ul.data li').size() > totalHeight) {
            nowtab.find('ul.data').removeClass('withoutscroll');
          } else {
            nowtab.find('ul.data').addClass('withoutscroll');
          }
        } else {
          nowtab.find('ul.data:eq(0)').html('<li name="combinereport" style="height: 260px;"><div class="blankplace">暂未分配配额</div></li>');
        }
      }, 1);
    }
    renderQuota();
  },
  showQuotas: function (uid, nowtab) {
    var me = this;
    var pnode = $(nowtab).parent();
    //返回
    $(nowtab).find('a.backlnk').unbind('click').click(function () {
      pnode.find('.title > ul li.on').removeClass('on');
      pnode.find('.title > ul li[name=user]').addClass('on');
      pnode.find('.panel-tab').hide();
      pnode.find('.panel-tab[name=user]').show();
    });
    var nick = $(nowtab).parent().find('ul.summary em:eq(0)').html();
    var userTab = nowtab.siblings().filter('[name=user]');
    var nowname = userTab.find('a.quota[name=' + uid + ']').attr('username');
    var quotapoint = Q.floatMul(userTab.find('a.quota[name=' + uid + ']').attr('quota'), 100);
    var quotaName = $('#setquota h5>span.setquotaName'); //调整配额后的用户名
    $(nowtab).find('em.dupnick').html(nowname);
    $(nowtab).find('li.bloading[name=setquota]').height(260);
    var refreshQuota = function () {
      Api.getCommon('getagentquotabyusr', {
        userId: uid
      }, function (d) {
        //渲染列表
        var d = d.result;
        if (d.resultList.length == 0) {
          return false;
        } 
        nowtab.find('.panel-fright em').html(quotapoint); 
        let quotatpl = d.resultList.map( list => {
          return `
            <li class="split6" quotaId="${list.quotaId}">
              <span>${list.point}%</span>
              <span>${list.quotaCount}</span>
              <span>${list.quotaAssigned}</span>
              <span>${list.quotaFinal}</span>
              <span class="last1">最多<em>${list.maxAssigend}</em>：<input type="text" name="distribute" value="" min="0" max="${list.maxAssigend}" class="spinner" onkeypress="return event.charCode >= 48 && event.charCode <= 57"/></span>
              <span class="last">最多<em>${list.maxgc}</em>：<input type="text" name="recover" value="" min="0" max="${list.maxgc}" class="spinner"/></span>
            </li>
          `;
        }).join('');

        if (d.resultList.length > 0) {
          nowtab.find('ul.data:eq(0)').html(quotatpl);
          //判断是否显示滚动条
          var eachHeight = nowtab.find('ul.data li:eq(1)').height();
          var totalHeight = nowtab.find('ul.data').height();
          if (eachHeight * nowtab.find('ul.data li').size() > totalHeight) {
            nowtab.find('ul.data').removeClass('withoutscroll');
          } else {
            nowtab.find('ul.data').addClass('withoutscroll');
          }
          nowtab.find('input[name=distribute]').val(0).inputNumber();
          nowtab.find('input[name=recover]').val(0).inputNumber();

          //调整配额

          $(nowtab).find('a.surequota').unbind('click').click(function () {
            var nowset = $(this);
            var thisline = $(this).parent().parent();
            var urlswitch = $(this).attr('rel') == 'assigned' ? 'quotaassign' : 'quotagc';
            var urlparams = {
              id: $(this).attr('name'),
              quotaAssigned: thisline.find('input:eq(0)').val()
            };
            if ($(this).attr('rel') == 'quotagc') {
              urlparams = {
                id: $(this).attr('name'),
                quotagc: thisline.find('input:eq(1)').val()
              };
            }
            Api.getCommon(urlswitch, urlparams, function (res) {
              if (parseInt(res.code, 10) === 1) {
                me.showTip('设置配额成功', nowset);
              } else {
                me.showTip('设置配额失败，原因：' + res.msg, nowset);
              }
              refreshQuota();
            }, 1);
          });
        } else {
          nowtab.find('ul.data:eq(0)').html('<li name="combinereport" style="height: 260px;"><div class="blankplace">暂无数据</div></li>');
        }
      }, 1);
    }
    refreshQuota();
  },
  //按钮类型提示
  showTip: function (msg, btn) {
    var second = 1200;
    var autofocus = true;
    if (arguments.length > 2) {
      second = arguments[2];
    }
    if (arguments.length > 3) {
      autofocus = arguments[3];
    }
    var me = this;
    var tip = dialog({
      id: 'tracerateno',
      align: 'top',
      skin: 'tip',
      content: msg,
      onshow: function () {
        var that = this;
        setTimeout(function () {
          that.close().remove();
          if (btn[0].tagName == 'INPUT' && autofocus && (btn[0].type == 'text' || btn[0].type == 'password')) {
            btn.focus();
          }
        }, second);
        return false;
      }
    }).show(btn[0]);
  }
};

