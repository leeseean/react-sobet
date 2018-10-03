 /* jshint devel:true */
 var speed = 400;
 var locked = false;
 var cleanErrorMessage = function () {
     $('#errorMessage').html('');
 }

 $(function () {
     $('#account').find('input#payPassword').attr('onfocus', 'this.removeAttribute("readonly")');
     if (navigator.userAgent.indexOf('MSIE 8.0') > 0) {
         $('#account').find('input#payPassword').removeAttr('readonly');
     }

     $(document).bind('keydown', function (event) {
         if (event.keyCode == 9) {
             $('input').removeAttr('readonly');
         }
     });

     if (navigator.userAgent.indexOf('MSIE') >= 0) {
         //如果是IE 去除placeholder属性 因为IE不支持HTML5
         $(':input').each(function () {
             if ($(this).attr('placeholder') != "undefined" && $(this).attr('placeholder') != undefined) {
                 var tip = $(this).attr('placeholder');
                 $(this).attr('placeholder', '');
             }
         });
     }
     // 自定义input输入框获得/失去焦点时状态改变
     $(".input-wrap input").focusin(function (e) {
         $(this).parent().addClass('focus');
     }).focusout(function (e) {
         $(this).parent().removeClass('focus');
     });

     $(".icon-check, .icon-check-empty").click(function (e) {
         if ($(this).data('value') === 0) {
             $(this).attr('class', 'icon-check').data('value', 1);
         } else {
             $(this).attr('class', 'icon-check-empty').data('value', 0);
         }
     });

     $("#register .input-wrap, #findpwd .input-wrap").delegate("input", "focus keyup", function (e) {
         if ($(this).val() !== '') {
             $(this).siblings('i').show();
         }
     });
     $("#register .input-wrap i, #findpwd .input-wrap i").click(function (e) {
         $(this).siblings('input').val('').trigger('focus');
         $(this).hide();
     });

     $("#aside dt").click(function () {
         $(this).find('a').addClass('on');
         $(this).find('a i').css('color', '#fff');
     });

     var e = $("#date_from"),
         i = $("#date_end"),
         m = $("#date_from_agent"),
         n = $("#date_end_agent"),
         ls = $('#date_from_level'),
         le = $('#date_end_level');
     e.datetimepicker({
         id: "dp_from",
         lang: "zh",
         format: "Y/m/d",
         value: "-1970/01/01",
         minDate: new Date(new Date().getTime() - 90 * 24 * 3600 * 1000),
         maxDate: new Date(),
         timepicker: false,
         closeOnDateSelect: true,
         step: 1,
         type: ':first'
     });
     m.datetimepicker({
         id: "dp_from_agent",
         lang: "zh",
         format: "Y/m/d",
         value: "-1970/01/01",
         minDate: new Date(new Date().getTime() - 90 * 24 * 3600 * 1000),
         maxDate: new Date(),
         timepicker: false,
         closeOnDateSelect: true,
         step: 1,
         type: ':first'
     });
     ls.datetimepicker({
         id: "dp_from_level",
         lang: "zh",
         format: "Y/m/d",
         value: "-1970/01/01",
         minDate: new Date(new Date().getTime() - 90 * 24 * 3600 * 1000),
         maxDate: new Date(),
         timepicker: false,
         closeOnDateSelect: true,
         step: 1,
         type: ':first'
     });
     i.datetimepicker({
         id: "dp_end",
         lang: "zh",
         format: "Y/m/d",
         value: "+1970/01/01",
         minDate: new Date(new Date().getTime() - 90 * 24 * 3600 * 1000),
         maxDate: new Date(),
         timepicker: false,
         closeOnDateSelect: true,
         step: 1,
         type: ':last'
     });
     n.datetimepicker({
         id: "dp_end_agent",
         lang: "zh",
         format: "Y/m/d",
         value: "+1970/01/01",
         minDate: new Date(new Date().getTime() - 90 * 24 * 3600 * 1000),
         maxDate: new Date(),
         timepicker: false,
         closeOnDateSelect: true,
         step: 1,
         type: ':last'
     });
     le.datetimepicker({
         id: "dp_end_level",
         lang: "zh",
         format: "Y/m/d",
         value: "+1970/01/01",
         minDate: new Date(new Date().getTime() - 90 * 24 * 3600 * 1000),
         maxDate: new Date(),
         timepicker: false,
         closeOnDateSelect: true,
         step: 1,
         type: ':last'
     });
     // 充值-确认充值按钮点击
     $(".deposit .confirm").click(function (e) {
         var ctx = "${ctx}";
         var me = $(this);
         var sty = $(".deposit .radio.cur").data('value');

         // 判断是在线充值还是银行转账
         if (sty === "online") {
             var result = 0;
             // 判断在线充值是否成功
             if (result) {
                 goHome(me);
             } else {
                 var d = dialog({
                     fixed: true,
                     title: '跳转到网银充值',
                     content: '<p>请在新开网银页面完成后选择： </p>',
                     ok: function () {
                         window.location = User.local_url + "/balance.html";
                     },
                     okValue: "查看余额",
                     cancel: function () {},
                     cancelValue: "再试一次"
                 });
                 d.width(300);
                 d.showModal();
             }
         } else {
             window.location = User.local_url + "/deposit_bank.html";
         }
     });

     // 交易记录类tab选择
     $(".transaction .query span").click(function (e) {
         $(this).addClass('cur').siblings('span').removeClass('cur');
     });

     // 自定义下拉菜单select
     $(".select").click(function (e) {
         e.stopPropagation();
         $(this).find('.select-list').slideToggle("fast");
         if (e.target.nodeName === 'P') {
             $(this).find('input').val($(e.target).html());
         }
     });

     // 虚拟数字键盘
     $(".keyboard input, .keyboard i").click(function (e) {
         e.stopPropagation();
         $(this).parents(".row").siblings().find('.keyboard ul').hide();
         $(this).siblings('ul').slideToggle("fast");
     });
     $(".keyboard ul li").click(function (e) {
         e.stopPropagation();
         if ($(this).hasClass('ok')) {
             $(this).parent('ul').slideUp("fast");
         } else if ($(this).hasClass('del')) {
             // 操作错误，删除上一次输入
             var input = $(this).parent('ul').siblings('input');
             input.val(input.val().slice(0, input.val().length - 1));
         } else {
             var input = $(this).parent('ul').siblings('input');
             // 密码长度大于6位，弹框提示 1.5秒自动关闭
             if (input.val().length > 5) {
                 var d = dialog({
                     content: '资金密码不能超过6位！'
                 });
                 d.show();
                 setTimeout(function () {
                     d.close().remove();
                 }, 1500);
             } else {
                 input.val(input.val() + $(this).html());
             }
         }
     });


     //高度改变
     $("#payform .radio-wrap").find("span").not(".cur").click(function (e) {
         var rHeight = $("#main").height();
         $("#aside").height(rHeight);

     })

     //银行快捷充值
     $('.quick-banks li').each(function () {
         $(this).click(function () {
             $(this).addClass('selected').find('span.radio').addClass('cur');
             $(this).siblings().removeClass('selected').find('span.radio').removeClass('cur');
         });
     });

     // 提交成功之后5秒返回首页
     function goHome(me) {
         var success = me.parents("form").siblings('.success');
         me.parents("form").hide();
         success.show();

         setInterval(function () {
             var em = $("#gohome em");
             var time = parseInt(em.html(), 10);
             if (time === 0) {
                 window.location = User.local_url + "/balance.html";
             } else {
                 em.html(time - 1);
             }
         }, 1000);
     }
     $("#main .submit").click(function (e) {
         var me = $(this);
     });

     // 点击空白处需要关闭的元素
     $(document).click(function (e) {
         $('.select-list, .keyboard ul').slideUp("fast");
     });
 });
 //银行卡点击切换，选中效果
 $(function () {
     $(".bank_choose .bc_part").each(function (i) {
         $(this).click(function () {
             $(this).addClass("bc_part_cur").siblings().removeClass("bc_part_cur");
             $(this).find(".sel_badage").show();
             $(this).siblings().find(".sel_badage").hide();
         });
     });
 })
 //下拉列表效果
 $(function () {
     $(".cs-select").click(function () {
         //$(this).parent().next().hide();
         $(this).find('.cs-options').show(200);
     });
 })
 //银行卡号格式化
 $(function () {
     // 输入框格式化
     $.fn.bankInput = function (options) {
         var defaults = {
             min: 10, // 最少输入字数
             max: 25, // 最多输入字数
             deimiter: ' ', // 账号分隔符
             onlyNumber: true, // 只能输入数字
             copy: true // 允许复制
         };
         var opts = $.extend({}, defaults, options);
         var obj = $(this);
         obj.css({
             imeMode: 'Disabled',
             borderWidth: '1px',
             color: '#000',
             fontFamly: 'Times New Roman'
         }).attr('maxlength', opts.max);
         if (obj.val() != '')
             obj.val(obj.val().replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1" + opts.deimiter));
         obj.bind('keyup', function (event) {
             if (opts.onlyNumber) {
                 if (!(event.keyCode >= 48 && event.keyCode <= 57)) {
                     this.value = this.value.replace(/\D/g, '');
                 }
             }
             this.value = this.value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1" + opts.deimiter);
         }).bind('dragenter', function () {
             return false;
         }).bind('onpaste', function () {
             return !clipboardData.getData('text').match(/\D/);
         }).bind('blur', function () {
             this.value = this.value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1" + opts.deimiter);
             if (this.value.length < opts.min) {
                 // alertMsg.warn('最少输入' + opts.min + '位账号信息！');
                 // obj.focus();
                 $("#bankCardNo-error").html('最少输入' + opts.min + '位账号信息！');
             }
         })
     }
     // 列表显示格式化
     $.fn.bankList = function (options) {
         var defaults = {
             deimiter: ' ' // 分隔符
         };
         var opts = $.extend({}, defaults, options);
         return this.each(function () {
             $(this).text($(this).text().replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1" + opts.deimiter));
         })
     }
 });
 /*
  **邮件地址自定义下拉
  */
 (function ($) {
     $.fn.mailAutoComplete = function (options) {
         var defaults = {
             className: "emailist",
             email: ["qq.com", "163.com", "sina.com", "gmail.com", "hotmail.com", "tom.com", "yahoo.com.cn", "sohu.com", "126.com"], //邮件数组
             zIndex: 11
         };
         // 最终参数
         var params = $.extend({}, defaults, options || {});

         // 是否现代浏览器
         var isModern = typeof window.screenX === "number",
             visibility = "visibility";
         // 键值与关键字
         var key = {
             "up": 38,
             "down": 40,
             "enter": 13,
             "esc": 27,
             "tab": 9
         };
         // 组装HTML的方法
         var fnEmailList = function (input) {
             var htmlEmailList = '',
                 arrValue = input.value.split("@"),
                 arrEmailNew = [];
             $.each(params.email, function (index, email) {
                 if (arrValue.length !== 2 || arrValue[1] === "" || email.indexOf(arrValue[1].toLowerCase()) === 0) {
                     arrEmailNew.push(email);
                 }
             });
             $.each(arrEmailNew, function (index, email) {
                 htmlEmailList = htmlEmailList + '<li' + (input.indexSelected === index ? ' class="on"' : '') + '>' + arrValue[0] + "@" + email + '</li>';
             });
             return htmlEmailList;
         };
         // 显示还是隐藏
         var fnEmailVisible = function (ul, isIndexChange) {
             var value = $.trim(this.value),
                 htmlList = '';
             if (value === "" || (htmlList = fnEmailList(this)) === "") {
                 ul.css(visibility, "hidden");
             } else {
                 isIndexChange && (this.indexSelected = -1);
                 ul.css(visibility, "visible").html(htmlList);
             }
         };

         return $(this).each(function () {
             this.indexSelected = -1;
             // 列表容器创建
             var element = this;
             var eleUl = $('<ul></ul>').css({
                 position: "absolute",
                 marginTop: "42px",
                 minWidth: element.offsetWidth - 2,
                 visibility: "hidden",
                 zIndex: params.zIndex
             }).addClass(params.className).bind("click", function (e) {
                 var target = e && e.target;
                 if (target && target.tagName.toLowerCase() === "li") {
                     $(element).val(target.innerHTML).trigger("input");
                     $(this).css(visibility, "hidden");
                     element.focus(); // add on 2013-11-20
                 }
             });
             $(this).before(eleUl);
             // IE6的宽度
             if (!window.XMLHttpRequest) {
                 eleUl.width(element.offsetWidth - 2);
             }

             // 不同浏览器的不同事件
             isModern ? $(this).bind("input", function () {
                 fnEmailVisible.call(this, eleUl, true);
             }) : element.attachEvent("onpropertychange", function (e) {
                 if (e.propertyName !== "value")
                     return;
                 fnEmailVisible.call(element, eleUl, true);
             });

             $(document).bind({
                 "click": function (e) {
                     var target = e && e.target,
                         htmlList = '';
                     if (target == element && element.value && (htmlList = fnEmailList(element, params.email))) {
                         eleUl.css(visibility, "visible").html(htmlList);
                     } else if (target != eleUl.get(0) && target.parentNode != eleUl.get(0)) {
                         eleUl.css(visibility, "hidden");
                     }
                 },
                 "keydown": function (e) {
                     var eleLi = eleUl.find("li");
                     if (eleUl.css(visibility) === "visible") {
                         switch (e.keyCode) {
                             case key.up:
                                 {
                                     element.indexSelected--;
                                     if (element.indexSelected < 0) {
                                         element.indexSelected = -1 + eleLi.length;
                                     }
                                     e.preventDefault && e.preventDefault();
                                     break;
                                 }
                             case key.down:
                                 {
                                     element.indexSelected++;
                                     if (element.indexSelected >= eleLi.length) {
                                         element.indexSelected = 0;
                                     }
                                     e.preventDefault && e.preventDefault();
                                     break;
                                 }
                             case key.enter:
                                 {
                                     e.preventDefault();
                                     eleLi.get(element.indexSelected) && $(element).val(eleLi.eq(element.indexSelected).html());
                                     eleUl.css("visibility", "hidden");
                                     break;
                                 }
                             case key.tab:
                             case key.esc:
                                 {
                                     eleUl.css("visibility", "hidden");
                                     break;
                                 }
                         }
                         if (element.indexSelected !== -1) {
                             eleUl.html(fnEmailList(element));
                         }
                     }
                 }
             });
         });
     };
 })(jQuery);
 //活动页面公告部分效果
 $(function () {
     var listN = $("#activity .container .activ-con .an-list .list li");
     listN.eq(0).find("i").addClass("first");
     listN.eq(1).find("i").addClass("second");
     listN.eq(2).find("i").addClass("third");
 })
 //交易流水分页
 function goPage(index) {
     $('#pageIndex').val(index);
     $('#transaction').submit();
 }

 function goPrevious() {
     var index = $('#pageIndex').val();
     if (index > 0) {
         index = parseInt(index) - 1;
     } else {
         return;
     }
     $('#pageIndex').val(index);
     $('#transaction').submit();
 }

 function goNext() {
     var index = $('#pageIndex').val();
     var indexNum = Math.ceil(total / 10);
     if (index < indexNum - 1) {
         index = parseInt(index) + 1;
     } else {
         return;
     }
     $('#pageIndex').val(index);
     $('#transaction').submit();
 }

 function search() {
     $('#transaction').submit();
 }
 //导航样式定位
 //左导航伸缩
 function autoUpDown() {
     $("#aside dl").each(function () {
         var thisDt = $(this).find("dt");
         if ($(this).find("dd.cur").length > 0) {
             $(this).children().fadeIn(200);
         }
     });
 }
 var headerLink = $("#header-lnk");
 //左导航
 var leftNav = $("#ab_leftNav").val();
 //左导航一级菜单定位
 var leftNavArgDt = {
     //投注查询
     'deals': 0,
     'trace': 0,
     //出纳中心
     'transfers': 1,
     'drawcash': 2,
     'rechargeIndex': 0,
     'rechargeOrderList': 1,
     'drawOrderList': 1,
     'transList': 1,
     'userBillStatus': 1,
     //账号管理
     'userCenter': 2,
     'updatePassword': 2,
     'bindEmail': 2,
     'bindEmail?action=bindEmail': 2,
     'preChangeQuery?type=security': 2,
     'preChangeQuery?type=paypassword': 2,
     'cardManage': 2,
     //系统消息
     'inbox': 3
 };
 var foo = {
     leftNavArgDd: {
         userCenterArr: ['userCenter', 'updatePassword', 'bindEmail', 'preChangeQuery?type=security', 'preChangeQuery?type=paypassword', 'cardManage'],
         sysMsgArr: ['inbox'],
         tradeBillArr: ['rechargeOrderList', 'drawOrderList', 'transList', 'userBillStatus'],
         cashCenterArr: ['balance', 'rechargeIndex', 'drawcash', 'transfers'],
         agentArr: ['agtreport', 'agentreg', 'userRelation'], // 3'lowerTransfer'['promotion','lowerTransfer','userRelation'],
         lotteryArr: ['deals', 'trace']
     }
 };
 //左导航二级菜单定位
 var leftNavArgDd = {
     //投注查询
     'deals': 0,
     'trace': 1,
     //账号管理
     'userCenter': 0,
     'updatePassword': 1,
     'bindEmail': 2,
     'preChangeQuery?type=security': 3,
     'preChangeQuery?type=paypassword': 4,
     'cardManage': 5,
     //系统消息
     'inbox': 0,
     //代理管理
     'agtreport': 0,
     'agentreg': 1,
     'userRelation': 2,
     //交易流水
     'rechargeOrderList': 0,
     'drawOrderList': 1,
     'transList': 2,
     'userBillStatus': 3,
     //出纳中心
     'balance': 0,
     'rechargeIndex': 1,
     'drawcash': 2,
     'transfers': 3
 };
 //左导航焦点样式

 var curDt = $("#aside").find("dl:eq('" + leftNavArgDt[leftNav] + "')").find("dt");
 curDt.find('a').addClass("on");
 curDt.find('a i').css("color", "#fff");
 curDt.siblings().filter('dt').addClass('off');
 autoUpDown();
 //如果用户没有交易数据，分页就不显示
 $(function () {
     var notran = $(".notran");
     if (notran.is(":visible") == true) {
         $(".pagging,.results").hide();
     }
 })
 //点击邮箱链接跳转
 var hash = {
     'qq.com': 'http://mail.qq.com',
     'gmail.com': 'http://mail.google.com',
     'sina.com': 'http://mail.sina.com.cn',
     '163.com': 'http://mail.163.com',
     '126.com': 'http://mail.126.com',
     'yeah.net': 'http://www.yeah.net/',
     'sohu.com': 'http://mail.sohu.com/',
     'tom.com': 'http://mail.tom.com/',
     'sogou.com': 'http://mail.sogou.com/',
     '139.com': 'http://mail.10086.cn/',
     'hotmail.com': 'http://www.hotmail.com',
     'live.com': 'http://login.live.com/',
     'live.cn': 'http://login.live.cn/',
     'live.com.cn': 'http://login.live.com.cn',
     '189.com': 'http://webmail16.189.cn/webmail/',
     'yahoo.com.cn': 'http://mail.cn.yahoo.com/',
     'yahoo.cn': 'http://mail.cn.yahoo.com/',
     'eyou.com': 'http://www.eyou.com/',
     '21cn.com': 'http://mail.21cn.com/',
     '188.com': 'http://www.188.com/',
     'foxmail.coom': 'http://www.foxmail.com',
     'dns.com.cn': 'http://mail.dns.com.cn',
     '263.net': 'http://www.2633.net'
 };

 $(function () {
     var emailA = $("#main .emailLinks a.email");
     emailA.each(function (i) {
         var url = emailA.text().split('@')[1];
         for (var j in hash) {
             $(this).attr("href", hash[url]);
             $("#main .emailLinks span").parent().attr("href", hash[url]);
         }
         if ($(this).attr("href") == "") {
             $(this).attr("href", "javascript:;");
             $("#main .emailLinks span").remove();
         } else {
             $("#main .emailLinks span").show();
         }
     });
 })
 //未实名认证跳转认证页面并加以动画效果提示
 $(function () {
     var referer = document.referrer;
     var rLength = referer.length;
     var tUrl = referer.substr(rLength - 10, rLength);
     var sn = $("#sn");
     var snVal = sn.val();
     var snInput = $("#main .s-name");
     if (tUrl == "cardManage" && snVal == "") {
         sn.focus();
         shake(sn, "s-name-shake", 3);
     }

     function shake(ele, cls, times) {
         var i = 0,
             t = false,
             o = ele.attr("class") + " ",
             c = "",
             times = times || 2;
         if (t) return;
         t = setInterval(function () {
             i++;
             c = i % 2 ? o + cls : o;
             ele.attr("class", c);
             if (i == 2 * times) {
                 clearInterval(t);
                 snInput.removeClass("s-name-shake").addClass("s-name").focus();
             }
         }, 200)
     };
 })

 //登录时间,用户名

 //转账页面options切换脚本
 function getoptionList() {
     Api.getptList(function (d) {
         //如果是从接口取得数据则
         for (var i = 0; i <= d.length - 1; i++) {
             var optionId = d[i].cbId;
             var optionName = d[i].cbName;
             var option = $("<option>").text(optionName).attr({
                 "id": optionId,
                 "value": optionId
             });
             $("#turnOut,#private_platform").append(option);
             var _option = option.not("#sobet_01");
             $("#private_platform_2").append(_option);
         };

         $('#turnOut').change(function () {
             var from = $(this).children('option:selected').attr("id");
             var selValIn_ = $("#turnIn option:selected").text();
             var sVal = $(this).children('option:selected').text();
             $('#main #out').html(sVal);
             $("#turnOutCn").val(sVal);
             $("#qbBalance").html('查询中');
             $('#turnOut').attr('disabled', 'disabled');
             $('#turnIn').attr('disabled', 'disabled');
             if (from !== '' && typeof (from) !== 'undefined') {
                 if (from === 'ag_01' || from === 'bbin_01' || from === 'pt_01') {
                     $('#transMF').find('input#cash').hide().siblings().show();
                 } else {
                     $('#transMF').find('input#agcash').hide().siblings().show();
                 }
                 Api.getPtBalance('cbId=' + from + '', function (d) {
                     var thisCash = d.cash;
                     $("#qbBalance").html(toFixedNum(thisCash));
                 });
             } else {
                 $('#turnOut').removeAttr('disabled');
                 $('#turnIn').removeAttr('disabled');
                 $("#qbBalance").html('');
             }
             $("#turnIn option").each(function () {
                 $(this).remove();
             });

             if (from == "sobet_01") {
                 $('#turnOut').addClass('zqb');
             } else {
                 $('#turnOut').removeClass('zqb');
             }
             //实时生成被转出的select
             if (from === "sobet_01") {
                 var tmphtml = $("#private_platform_2").html();
                 $("#turnIn").append(tmphtml);
                 var turnInCn = $("#turnIn").find("option:selected").text();
                 var turnInId = $("#turnIn option:selected").attr('id');
                 $("#inBalance").html('查询中');
                 Api.getPtBalance('cbId=' + turnInId + '', function (d) {
                     var thisCash = d.cash;
                     $("#inBalance").html(toFixedNum(thisCash));
                 });
                 $("#turnInCn").val(turnInCn);
                 $("#main #in").html(turnInCn);
                 $('#turnOut').addClass('zqb');
                 $('#turnIn').removeClass('zqb');
             } else if (from === '' || typeof (from) === 'undefined') {
                 $("#turnIn").html('').append("<option value=''>请选择</option>");
                 $('#turnIn').removeClass('zqb');
                 $("#inBalance").html('');
                 $("#main #in").html("请选择");
             } else {
                 $("#turnIn").append("<option id='sobet_01' selected='selected' value='sobet_01'>彩票钱包</option>");
                 $('#turnIn').addClass('zqb');
                 $('#turnOut').removeClass('zqb');
                 $("#main #in").html("彩票钱包");
                 $("#turnInCn").val("彩票钱包");
                 $("#inBalance").html('查询中');
                 $('#turnIn').attr('disabled', 'disabled');
                 Api.getPtBalance('cbId=sobet_01', function (d) {
                     var thisCash = d.cash;
                     $("#inBalance").html(toFixedNum(thisCash));
                 });
             }
             $('#agcash').val('');
             $('#cash').val('');
             setTimeout(function () {
                 $('#turnIn').removeAttr('disabled');
                 $('#turnOut').removeAttr('disabled');
             }, 1000);
         });
         $("#turnIn").change(function () {
             var selValIn_ = $("#turnIn option:selected").text();
             var turnInId = $("#turnIn option:selected").attr('id');
             var from = $("#turnOut").children('option:selected').attr("id");
             if (turnInId === 'ag_01' || turnInId === 'bbin_01') {
                 $('#transMF').find('input#cash').hide().siblings().show();
             } else {
                 $('#transMF').find('input#agcash').hide().siblings().show();
             }
             if (turnInId === "sobet_01") {
                 $('#turnIn').addClass('zqb');
             } else {
                 $('#turnIn').removeClass('zqb');
             }
             $("#inBalance").html('查询中');
             $('#turnIn').attr('disabled', 'disabled');
             Api.getPtBalance('cbId=' + turnInId + '', function (d) {
                 var thisCash = d.cash;
                 $("#inBalance").html(toFixedNum(thisCash));
                 $('#turnIn').removeAttr('disabled');
             });
             $("#turnInCn").val(selValIn_);
             $("#main #in").html(selValIn_);
             $('#agcash').val('');
             $('#cash').val('');
             setTimeout(function () {
                 $('#turnIn').removeAttr('disabled');
             }, 1000);
         });

     });
 }
 $('.allIn').click(function () {
     var allMoney = $("#qbBalance").html();
     var from = $("#turnOut").children('option:selected').attr("id");
     var into = $('#turnIn').children('option:selected').attr("id");
     if (allMoney == '查询中' || allMoney == '') {
         return;
     }
     var all;
     Api.getPtBalance('cbId=' + from, function (d) {
         all = d.cash;
         $("#qbBalance").html(toFixedNum(all));
         all = toFixedNum(all);
         var allCb = all.split('.');
         var allAP = all.substring(0, all.length - 2);
         all = parseFloat(all);
         if (all == 0) {
             var tip_unre = dialog({
                 align: "right",
                 padding: "15px 20px"
             });
             tip_unre.content("您的余额不足");
             tip_unre.show($('.allIn')[0]);
             setTimeout(function () {
                 tip_unre.close().remove();
             }, 2000);
             return;
         } else if (all >= 50000) {
             $('#cash').val('50000');
             $('#agcash').val('50000');
         } else {
             if (from == 'sobet_01') {
                 if (into == "ag_01" || into == "bbin_01") {
                     $('#agcash').val(allCb[0]);
                 } else {
                     $('#cash').val(allAP);
                 }
             } else {
                 $('#agcash').val(allCb[0]);
             }
         }
     });


 });


 //帮助页面锚点效果
 $(function () {
     var helpArr = $("#main .help .qaCon .q-a dt em");
     var scrollBox = $('#aside_help');

     //计算帮助中心右边容器的高度
   /*   function autoMainHeight() {
         var mainHeight = $('#main').height();
         var mainMinHegith = $(window).height() - $('.globe-header').outerHeight() - $('.g-nav').outerHeight() - $('#footer').outerHeight() - 42;
         scrollBox.height(mainHeight > mainMinHegith ? mainHeight : mainMinHegith);
     }
     setTimeout(function() {
        autoMainHeight();
     }, 1000);
     $(window).scroll(function () {
         autoMainHeight();
     }) */
     helpArr.each(function () {
         var thisguy = $(this).parent().next();
         $(this).parent().click(function () {
             if (thisguy.is(":visible") == false) {
                 thisguy.slideDown(150);
                 $(this).children("em,span").attr("class", "red");
             } else {
                 thisguy.slideUp(150);
                 $(this).children("em,span").attr("class", "gray");
             }
         });
     })
     $("#main .help .qaCon .q-a dt").hover(function () {
         $(this).find("a").toggle();
     });
 })
 var bookmarkscroll = {
     setting: {
         duration: 200,
         yoffset: 0
     },
     topkeyword: '#top', //回顶部
     scrollTo: function (dest, options, hash) {
         var $ = jQuery,
             options = options || {};
         var $dest = (typeof dest == "string" && dest.length > 0) ? (dest == this.topkeyword ? 0 : $('#' + dest)) : (dest) ? $(dest) : [];
         if ($dest === 0 || $dest.length == 1 && (!options.autorun || options.autorun && Math.abs($dest.offset().top + (options.yoffset || this.setting.yoffset) - $(window).scrollTop()) > 5)) {
             this.$body.animate({
                 scrollTop: ($dest === 0) ? 0 : $dest.offset().top + (options.yoffset || this.setting.yoffset)
             }, (options.duration || this.setting.duration), function () {
                 if ($dest !== 0 && hash)
                     location.hash = hash;
             })
         }
     },
     urlparamselect: function () {
         var param = window.location.search.match(/scrollto=[\w\-_,]+/i);
         return (param) ? param[0].split('=')[1] : null;
     },
     init: function () {
         jQuery(document).ready(function ($) {
             var mainobj = bookmarkscroll;
             mainobj.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
             var urlselectid = mainobj.urlparamselect();
             if (urlselectid)
                 setTimeout(function () {
                     mainobj.scrollTo(document.getElementById(urlselectid) || $('a[name=' + urlselectid + ']:eq(0)').get(0), {
                         autorun: true
                     })
                 }, 100);
             $('a[href^="#"]').each(function () {
                 var hashvalue = this.getAttribute('href').match(/#\w+$/i);
                 hashvalue = (hashvalue) ? hashvalue[0].substring(1) : null;
                 if (this.hash.length > 1) {
                     var $bookmark = $('a[name=' + this.hash.substr(1) + ']:eq(0)');
                     if ($bookmark.length == 1 || this.hash == mainobj.topkeyword) {
                         if ($bookmark.length == 1 && !document.all)
                             $bookmark.html('.').css({
                                 position: 'absolute',
                                 fontSize: 1,
                                 visibility: 'hidden'
                             });
                         $(this).click(function (e) {
                             mainobj.scrollTo((this.hash == mainobj.topkeyword) ? mainobj.topkeyword : $bookmark.get(0), {}, this.hash);
                             e.preventDefault();
                         })
                     }
                 }
             })
         })
     }
 }
 bookmarkscroll.init();
 //余额显示脚本
 $(function () {
     showTotalM();

     function showTotalM() {
         var mfi = $('#main .user-info .funds-overview .info p em');
         var totalMoney = mfi.text();
         var tl = totalMoney.length;
         var tmsplit = totalMoney.substr(tl - 2, tl);
         var tmsplit2 = totalMoney.split(".");
         mfi.text(tmsplit2[0]).next().text("." + tmsplit + "");
     }
 })
 //前端防重复提交
 var checkSubmitFlg = false;

 function checkSubmit() {
     if (!checkSubmitFlg) {
         checkSubmitFlg = true;
         return true;
         $("#userInfo").submit();
     } else {
         alert("请勿重复提交");
         return false;
     }
 }

 function clickCheck() {
     var btn2 = $("#main a.btn");
     var btn3 = $(".lower_transfer .btn");

     cckk(btn2);
     cckk(btn3);

     function cckk(btn) {
         btn.addClass('loading').val("操作中……");
         var tip_unre = dialog({
             align: "bottom",
             padding: "15px 20px",
             skin: 'sobet'
         });
         if (btn.hasClass("loading")) {
             btn.click(function () {
                 tip_unre.content("正在处理中……请不要频繁点击");
                 tip_unre.show(btn[0]);
                 setTimeout(function () {
                     tip_unre.close().remove();
                 }, 2000);
                 return false;
             });

         }
     }
 }

 function clickCheck1(btn, m) {
     var a = cckk(btn);

     function cckk(btn) {
         btn.addClass('loading').val("操作中……");
         var tip_unre = dialog({
             align: "bottom",
             padding: "15px 20px",
             skin: 'sobet'
         });
         if (m) {
             tip_unre.content("正在处理中……请不要频繁点击");
             tip_unre.show(btn[0]);
             setTimeout(function () {
                 tip_unre.close().remove();
             }, 3000);
             return false;
         } else {
             tip_unre.close().remove();
             return true;
         }
     }

     return a
 }
 //充值、提现交易流水
 var currentPage = 0;
 var startDate = "";
 var endDate = "";
 var queryType = "";
 var turnOut = "";
 var turnIn = "";
 var pp = {
     "page": currentPage,
     "startDate": startDate,
     "endDate": endDate,
     "queryType": queryType,
     "turnOut": turnOut,
     "turnIn": turnIn
 };
 //用户关系-我的下级数据接口调用
 function userRelationList() {
     Api.getUserRelationList(pp, function (d) {
         var k = d.data;
         var scode = d.scode;
         var fcode = d.fcode;
         var isShow = d.isShow;
         var nameWrap = $("#main .user-info .funds-overview h1").find("span");
         var userLowerData = $("#main .myLower h1").find("span");
         if (scode == 1) {
             $(".myLower h1").hide();
             $("#main .notran").show();
         } else if (scode == 0) {
             $(".notran").hide();
             for (var i = userLowerData.length - 1; i >= 0; i--) {
                 var userLowerTotalCount = d.sunMoney;
                 var userLowerTotalUser = d.subperson;
                 userLowerData.eq(0).text(userLowerTotalUser);
                 userLowerData.eq(1).text(toFixedNum(userLowerTotalCount));
             };
         }

         for (var i = nameWrap.length - 1; i >= 0; i--) {
             if (fcode == 1) {
                 $(".user-info .funds-overview").find("h1").eq(0).html("摩臣娱乐").next().hide();
             } else if (fcode == 0) {
                 var sj = d.fcnbind;
                 var highersn = d.fcnbind.sn;
                 var highercn = d.fcnbind.cn;
                 $(".user-info").show();
                 nameWrap.eq(0).text(highercn);
                 nameWrap.eq(1).text(highersn);
             }
         };

         if (scode == 1 && fcode == 1) {
             $(".myLower h1,.results").hide();
             $("#main .notran").show();
         } else {
             var totalCount = d.total;
             if (totalCount == 0) {
                 $(".pagination").html("").prev().hide();
                 $("#main .notran").show();
                 $(".page-other").hide();
             } else {
                 $("#main .notran").hide();
                 $(".pagination").prev().show();
                 $(".page-other").show();
                 clearDate();
                 fillTableUR(k, isShow);
                 $(".pagination").pagination(totalCount, {
                     callback: pageCallBack,
                     prev_text: "上一页",
                     next_text: "下一页",
                     items_per_page: 10,
                     num_display_entries: 6,
                     current_page: currentPage,
                     num_edge_entries: 1
                 });
             }
         }
         //调用接口函数
         function calling(currentPage) {
             var queryType = $("#queryType option:selected").val();
             Api.getUserRelationList({
                 "page": currentPage,
                 "startDate": startDate,
                 "endDate": endDate,
                 "queryType": queryType
             }, function (d) {
                 var k = d.data;
                 var isShow = d.isShow;
                 clearDate();
                 fillTableUR(k, isShow);
             });
         }
         //分页回调函数
         function pageCallBack(index, jq) {
             calling(index);
         }
     });
 }

 //用户流水数据渲染
 function fillTableUBS(k) {
     var todayContent = "";
     for (var i = 0; i < k.length; i++) {
         var amount = k[i].amount;
         var point;
         if (k[i].point || k[i].point == 0) {
             point = k[i].point;
         } else {
             point = -1
         }
         var currentAmount;
         var changeAmount;
         if (k[i].optType == 1) {
             if (point == -1) {
                 currentAmount = '--';
             } else {
                 currentAmount = Q.floatSub(point, amount);
             }
             changeAmount = "<td data-title='变动金额'><font color='red'>" + "+" + amount + "</font></td>";
         } else {
             if (point == -1) {
                 currentAmount = '--';
             } else {
                 currentAmount = Q.floatAdd(point, amount);
             }
             changeAmount = "<td data-title='变动金额'><font color='green'>" + "-" + amount + "</font></td>";
         }
         todayContent = "<tr id='listBody'>" +
             "<td data-title='时间'>" + k[i].createTime + "</td>" +
             "<td data-title='钱包类型'>" + k[i].bagType + "</td>" +
             "<td data-title='交易类型'>" + k[i].changeTypeString + "</td>" +
             changeAmount +
             "<td data-title='交易前余额'>" + currentAmount + "</td>" +
             "<td data-title='交易后余额'>" + k[i].point + "</td>" +
             "<td data-title='订单编号'>" + k[i].spsn + "</td>" +
             "</tr>"
         $("#main .results table").append(todayContent);
         $("#listBody td").each(function () {
             if ($(this).text() == "undefined") {
                 $(this).text("--");
             } else if ($(this).text() == "cb_01") {
                 $(this).text("彩票钱包");
             } else if ($(this).text() == "ag_01") {
                 $(this).text("AG钱包");
             } else if ($(this).text() == "pt_01") {
                 $(this).text("PT钱包");
             } else if ($(this).text() == "bbin_01") {
                 $(this).text("BBIN钱包");
             } else if ($(this).text() == "sb_01") {
                 $(this).text("沙巴钱包");
             } else if ($(this).text() == "idn_01") {
                 $(this).text("IDN钱包");
             } else if ($(this).text() == "kg_01") {
                $(this).text("KG钱包");
            }
         });
     };
     // }
     
 };

 //用户下级流水数据渲染
 function fillLowerTableUBS(k) {
     var todayContent = "";
     for (var i = 0; i < k.length; i++) {
         var amount = k[i].amount;
         var point = k[i].point;
         var currentAmount;
         var changeAmount;
         if (k[i].optType == 1) {
             if (point == 'undefined') {
                 currentAmount = '--';
             } else {
                 currentAmount = Q.floatSub(point, amount);
             }
             changeAmount = "<td data-title='变动金额'><font color='red'>" + "+" + amount + "</font></td>";

         } else {
             if (point == 'undefined') {
                 currentAmount = '--';
             } else {
                 currentAmount = Q.floatAdd(point, amount);
             }
             changeAmount = "<td data-title='变动金额'><font color='green'>" + "-" + amount + "</font></td>";
         }
         todayContent = "<tr id='listBody'>" +
             "<td data-title='时间'>" + k[i].createTime + "</td>" +
             "<td data-title='账号'>" + k[i].cn + "</td>" +
             "<td data-title='钱包类型'>" + k[i].bagType + "</td>" +
             "<td data-title='交易类型'>" + k[i].changeTypeString + "</td>" +
             changeAmount +
             "<td data-title='交易前余额'>" + currentAmount + "</td>" +
             "<td data-title='交易后余额'>" + k[i].point + "</td>" +
             "<td data-title='订单编号'>" + k[i].spsn + "</td>" +
             "</tr>"
         $("#main .results table").append(todayContent);
         $("#listBody td").each(function () {
             if ($(this).text() == "undefined") {
                 $(this).text("-");
             } else if ($(this).text() == "cb_01") {
                 $(this).text("彩票钱包");
             } else if ($(this).text() == "sb_01") {
                 $(this).text("沙巴钱包");
             } else if ($(this).text() == "ag_01") {
                 $(this).text("AG钱包");
             } else if ($(this).text() == "pt_01") {
                 $(this).text("PT钱包");
             } else if ($(this).text() == "bbin_01") {
                 $(this).text("BBIN钱包");
             } else if ($(this).text() == "idn_01") {
                 $(this).text("IDN钱包");
             } else if ($(this).text() == "kg_01") {
                $(this).text("Kgame钱包");
            }
         });
     };
     // }
 };

 //将充值数据渲染到页面函数
 function fillTableRO(k) {
     var todayContent = "";
     for (var i = 0; i < k.length; i++) {
         var cash = k[i].cash;
         cash = toFixedNum(cash);
         todayContent = "<tr id='listBody'>" +
             "<td data-title='时间'>" + k[i].orderDate + "</td>" +
             "<td data-title='订单编号'>" + k[i].spsn + "</td>" +
             "<td data-title='转账方式'>" + k[i].way + "</td>" +
             "<td data-title='金额'>￥ " + cash + " 元</td>" +
             "<td data-title='状态' value='" + k[i].status + "'>" + k[i].status + "</td>" +
             "</tr>"
         $("#main .results table").append(todayContent);
         $("#listBody td").each(function () {
             if ($(this).text() == "undefined") {
                 $(this).text("-");
             }
         });
         $("#main .results table tr#listBody").each(function () {
             var sof = $(this).find("td").eq(4);
             var zw = $(this).find("td").eq(2);
             if (sof.text() == "0") {
                 sof.text("成功");
             } else if (sof.text() == "2") {
                 sof.text("失败");
             } else if (sof.text() == "1") {
                 sof.text("待处理");
             }
             if (zw.text() == "0") {
                 zw.text("第三方支付");
             } else if (zw.text() == "1") {
                 zw.text("网银支付");
             } else if (zw.text() == "2") {
                 zw.text("转账");
             } else {
                 zw.text("其他");
             }
         });
     };
     // }
 };
 //将提现数据渲染到页面函数
 function fillTableDO(k) {
     var todayContent = "";
     for (var i = 0; i < k.length; i++) {
         var cash = k[i].cash;
         var amount = k[i].amount;
         var poundage = k[i].poundage;
         cash = toFixedNum(cash);
         amount = toFixedNum(amount);
         poundage = toFixedNum(poundage);
         todayContent = "<tr id='listBody'>" +
             "<td data-title='时间'>" + k[i].createTime + "</td>" +
             "<td data-title='订单编号'>" + k[i].spsn + "</td>" +
             "<td data-title='金额'>￥ " + cash + " 元</td>" +
             "<td data-title='手续费'>￥ " + poundage + " 元</td>" +
             "<td data-title='实际金额'>￥ " + amount + " 元</td>" +
             "<td data-title='状态'>" + k[i].status + "</td>" +
             "</tr>"
         $("#main .results table").append(todayContent);
         $("#listBody td").each(function () {
             if ($(this).text() == "undefined") {
                 $(this).text("-");
             }
         });
         $("#main .results table tr#listBody").each(function () {
             var sof = $(this).find("td").eq(5);
             if (sof.text() == "0") {
                 sof.text("成功");
             } else if (sof.text() == "6" || sof.text() == "7" || sof.text() == "9") {
                 sof.text("失败");
             } else if (sof.text() == "1" || sof.text() == "4" || sof.text() == "5" || sof.text() == "2" || sof.text() == "3" || sof.text() == "8") {
                 sof.text("待处理");
             } else if (sof.text() == "10") {
                 sof.text("处理中");
             }
         });
     };
     // }
 };
 //将转账记录数据渲染到页面函数
 function fillTableT(k) {
     var todayContent = "";
     for (var i = 0; i < k.length; i++) {
         var cash = k[i].cash;
         cash = toFixedNum(cash);
         todayContent = "<tr id='listBody'>" +
             "<td data-title='时间'>" + k[i].createTime + "</td>" +
             "<td data-title='订单编号'>" + k[i].spsnNo + "</td>" +
             "<td data-title='转账从'>" + k[i].switchToCbId + "</td>" +
             "<td data-title='转账到'>" + k[i].removeToCbId + "</td>" +
             "<td data-title='金额'>￥ " + cash + " 元</td>" +
             "<td data-title='状态'>" + k[i].status + "</td>" +
             "</tr>"
         $("#main .results table").append(todayContent);
         $("#listBody td").each(function () {
             if ($(this).text() == "undefined") {
                 $(this).text("-");
             }
         });
         $("#main .results table tr#listBody").each(function () {
             var sof = $(this).find("td").eq(5);
             if (sof.text() == "0") {
                 sof.text("成功");
             } else if (sof.text() == "1") {
                 sof.text("初始");
             } else if (sof.text() == "2" || sof.text() == "3" || sof.text() == "4" || sof.text() == "5" || sof.text() == "6" || sof.text() == "7" || sof.text() == "8" || sof.text() == "9") {
                 sof.text("失败");
             }
         });
     };
     // }
 };

 function fillTableLT(k) {
     var todayContent = "";
     for (var i = 0; i < k.length; i++) {
         var cash = k[i].amount;
         cash = toFixedNum(cash);
         var changeCash;
         if (k[i].orderType == 1 || k[i].orderType == 2) {
             changeCash = "<td data-title='转账金额'><font color='red'>￥ " + cash + "</font></td>";
         } else if (k[i].orderType == 3 || k[i].orderType == 4) {
             changeCash = "<td data-title='转账金额'><font color='green'>￥ " + cash + "</font></td>";
         }
         todayContent = "<tr id='listBody'>" +
             "<td data-title='订单编号'>" + k[i].SPSN + "</td>" +
             "<td data-title='转账时间'>" + k[i].createTime + "</td>" +
             changeCash +
             "<td data-title='转账类型'>" + k[i].orderType + "</td>" +
             "<td data-title='转出人'>" + k[i].outUserName + "</td>" +
             "<td data-title='接收人'>" + k[i].inUserName + "</td>" +
             "</tr>";
         $("#main .results table").append(todayContent);
         $("#listBody td").each(function () {
             if ($(this).text() == "undefined") {
                 $(this).text("-");
             }
         });
         $("#main .results table tr#listBody").each(function () {
             var sof = $(this).find("td").eq(3);
             if (sof.text() == "1") {
                 sof.text("上级转入");
             } else if (sof.text() == "2") {
                 sof.text("代理活动(入)");
             } else if (sof.text() == "3") {
                 sof.text("转给下级");
             } else if (sof.text() == "4") {
                 sof.text("代理活动(出)");
             }
         });
     };
     // }
 };
 //将冻结资金记录数据渲染到页面函数
 function fillTableBA(k) {
     var todayContent = "";
     for (var i = 0; i < k.length; i++) {
         var amount = k[i].amount;
         amount = toFixedNum(amount);
         todayContent = "<tr id='listBody'>" +
             "<td data-title='时间'>" + k[i].createTime + "</td>" +
             "<td data-title='订单编号'>" + k[i].orderId + "</td>" +
             "<td data-title='冻结类型'>" + k[i].type + "</td>" +
             "<td data-title='冻结金额'>￥ " + k[i].amount + " 元</td>" +
             "<td data-title='状态'>冻结</td>" +
             "</tr>"
         $("#main .results table").append(todayContent);
         $("#listBody td").each(function () {
             if ($(this).text() == "undefined") {
                 $(this).text("-");
             }
         });
         $("#main .results table tr#listBody").each(function () {
             var sof = $(this).find("td").eq(2);
             if (sof.text() == "1") {
                 sof.text("传统彩票投注");
             } else if (sof.text() == "2") {
                 sof.text("彩票交易市场");
             } else if (sof.text() == "3") {
                 sof.text("提款");
             }
         });
     };
     // }
 };
 //用户关系数据渲染
 function fillTableUR(k, isShow) {
     var todayContent = "";
     for (var i = 0; i < k.length; i++) {
         var amount = Number(k[i].amount);
         amount = toFixedNum(amount);
         todayContent = "<tr id='listBody'>" +
             "<td data-title='编号' >" + k[i].uin + "</td>" +
             "<td id='lowerUserName' data-title='用户名'>" + k[i].cn + "</td>" +
             "<td data-title='金额（元）'>" + amount + "</td>" +
             "<td data-title='登录时间'>" + k[i].lastlogin + "</td>" +
             "<td data-title='注册时间'>" + k[i].registTimeStr + "</td>";

         if (isShow == 'Y') {
             todayContent = todayContent + "<td id='ptrans' data-title='操作'>" +
                 "<form action='" + ctx + "/pay/agentTransferIndexView#lowerUserName=" + k[i].cn + "&uin=" + k[i].uin + "' method='post' name='paramTrans' id='paramTrans'>" +
                 "<input type='submit' value='转账'></form></td>";
         } else {
             $("#main .results table").find('.tr-border th:last').hide();
         }

         todayContent = todayContent + "</tr>"

         $("#main .results table").append(todayContent);
         var listBody = $("#listBody");
     };
     $("#listBody td").each(function () {
         if ($(this).text() == "undefined") {
             $(this).text("-");
         }
     });
     // }
 };
 //精确小数点后4位
 function toFixedNum(num) {
     var stringNum = String(num);
     var strNumArr = stringNum.split('.');
     if (strNumArr.length >= 2) {
         stringNum = strNumArr[1] + '0000';
         num = strNumArr[0] + '.' + stringNum.substring(0, 4) + '';
     } else {
         num = strNumArr[0] + '.0000';
     }
     return num;
 }
 //金额小数点后4位化
 function toFourPoint(evt, value) {
     $(evt).html(toFixedNum(value));
 }
 //清空数据
 function clearDate() {
     $("#main #listBody").remove();
     $('#activity .list').html('');
 }
 //查询接口及分页总方法
 function userSearch(interfaceFunc, drawFunc) {
     clearDate();
     $(".page-other,.pagination").html("");
     pp.startDate = $("#date_from").val();
     pp.endDate = $("#date_end").val();
     pp.queryType = $("#queryType option:selected").val();
     pp.page = "0";
     pp.turnOut = $("#turnOut").val();
     pp.turnIn = $("#turnIn").val();
     pp.orderType = $("#queryTypeLow option:selected").val();
     pp.outUserName = $("#outUserName").val();
     pp.inUserName = $("#inUserName").val();
     var interfaceObj = {
         'getpageList': Api.getpageList,
         'getdrawOrderList': Api.getdrawOrderList,
         'gettransferList': Api.gettransferList,
         'getLowerTransferList': Api.getLowerTransferList
     };
     var drawFuncObj = {
         'fillTableRO': fillTableRO,
         'fillTableDO': fillTableDO,
         'fillTableT': fillTableT,
         'fillTableLT': fillTableLT
     };
     interfaceObj[interfaceFunc](pp, function (d) {
         var totalCount = d.total;
         if (totalCount == 0) {
             $(".pagination").html("").prev().hide();
             $("#main .notran").show();
             $(".page-other").hide();
         } else {
             $("#main .notran").hide();
             $(".pagination").prev().show();
             $(".page-other").show();
             $(".pagination").pagination(totalCount, {
                 callback: pageCallBack,
                 prev_text: "上一页",
                 next_text: "下一页",
                 items_per_page: 10,
                 num_display_entries: 6,
                 current_page: currentPage,
                 num_edge_entries: 1
             });
         }
     });
     //调用接口函数
     function calling(currentPage) {
         var startDate = $("#date_from").val();
         var endDate = $("#date_end").val();
         var queryType = $("#queryType option:selected").val();
         var turnOut = $("#turnOut").val();
         var turnIn = $("#turnIn").val();
         var orderType = $("#queryTypeLow option:selected").val();
         var outUserName = $("#outUserName").val();
         var inUserName = $("#inUserName").val();
         interfaceObj[interfaceFunc]({
             "page": currentPage,
             "startDate": startDate,
             "endDate": endDate,
             "queryType": queryType,
             "turnOut": turnOut,
             "turnIn": turnIn,
             "orderType": orderType,
             "outUserName": outUserName,
             "inUserName": inUserName
         }, function (d) {
             var k = d.data;
             clearDate();
             if (currentPage > d.pageCount) {
                 currentPage = d.pageCount;
                 interfaceObj[interfaceFunc]({
                     "page": currentPage,
                     "startDate": startDate,
                     "endDate": endDate,
                     "queryType": queryType,
                     "turnOut": turnOut,
                     "turnIn": turnIn,
                     "orderType": orderType,
                     "outUserName": outUserName,
                     "inUserName": inUserName
                 }, function (d) {
                     k = d.data;
                     var totalCount = d.total;
                     if (typeof (k) != 'undefined' && k.length > 0) {
                         drawFuncObj[drawFunc](k);
                         $(".pagination").pagination(totalCount, {
                             callback: pageCallBack,
                             prev_text: "上一页",
                             next_text: "下一页",
                             items_per_page: 10,
                             num_display_entries: 6,
                             current_page: currentPage,
                             num_edge_entries: 1
                         });
                     } else {
                         $(".pagination").html("").prev().hide();
                         $("#main .notran").show();
                         $(".page-other").hide();
                     }
                 });
             } else {
                 drawFuncObj[drawFunc](k);
             }
         });
     }
     //分页回调函数
     function pageCallBack(index) {
         calling(index);
     }
 }


 //数字转金额格式
 Number.prototype.formatMoney = function (places, symbol, thousand, decimal) {
     places = !isNaN(places = Math.abs(places)) ? places : 2;
     symbol = symbol !== undefined ? symbol : "$";
     thousand = thousand || ",";
     decimal = decimal || ".";
     var number = this,
         negative = number < 0 ? "-" : "",
         i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
         j = (j = i.length) > 3 ? j % 3 : 0;
     return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
 }
 //500错误页面脚本
 function errMsgShow() {
     $(".err-msg").slideToggle(speed);
 }
 //消息页面脚本
 var mc = $(".mes-content");
 mc.each(function (i) {
     var mcW = $(this).text().length;
     if (mcW > 20) {
         $(this).hide();
         $(this).next().show();
     } else {
         $(this).removeClass("mes-content").next().hide();
     }
 });

 $("#contentTd span a").click(function () {
     var con = $(this).parent().prev(".mes-content").text();
     var msgTitle = $(this).parent().parent().prev('#titleTd').text();
     var d = dialog({
         fixed: true,
         title: msgTitle,
         content: con,
         okValue: "确定"
     });
     d.width(360);
     d.showModal();
     $(this).parents('tr').removeClass('bold').find('td:contains("未读")').html('已读');
 });

 function setCheckboxState(state) {
     var elms = $(this);
     elms.checked = state;
     $(elms).next().toggleClass('on');
 }


 function hasOneChecked(name) {
     var items = document.getElementsByName(name);
     if (items.length > 0) {
         for (var i = 0; i < items.length; i++) {
             if (items[i].checked == true) {
                 return true;
             }
         }
     } else {
         if (items.checked == true) {
             return true;
         }
     }
     return false;
 }
 //获取推广地址
 function getSpreadUrl() {
     Api.getSpreadUrl(function (d) {
         var spreadUrl = d.registerUrl;
         $("#promotionURL").attr("value", spreadUrl);
     });
 }
 //获取下级用户下拉列表
 function getUserBillQueryType() {
     var obj = {
         page: 10,
         startDate: $('#date_from').val(),
         endDate: $('#date_end').val(),
         bagType: $('#cbType').val(),
         changeType: $('#queryType').val(),
         spsn: $('.gldd').val()
     };
     Api.getUserBillQueryType(obj, function (d) {});
 }
 //已读、未读消息处理
 function doinMessage() {
     $('#queryForm table tr').each(function () {
         $(this).find('td:contains("未读")').parent().addClass('bold').bind('click', function () {
             var msgIdArray = ($(this).find('td:eq(0)').find('input').val()).split('=');
             var msgId = msgIdArray[1].split('&')[0];
             $.ajax({
                 url: ctx + '/userInfo/readMessage',
                 type: 'GET',
                 dataType: 'json',
                 cache: false,
                 data: 'messageId=' + msgId + ''
             }).done(function (res) {
                 Api.getNewMessagesCount();
             }).fail(function () {
                 fn("error");
             });
         });
     });
 }

 //判断用户是否设置资金密码
 function isPayPasswordSet(exist) {
     if (exist == 0) {
         var payPWDOM = $('#userInfo');
         var d = dialog({
             content: payPWDOM,
             onshow: function () {
                 $('input#loginPassword').focus();
                 $('.submit-dom a').bind('click', function () {
                     d.close().remove();
                 });
             }
         });
         d.showModal();
     }
 }
 //公告内容字体设置
 $('.filter-tabs-cont a').click(function () {
     $(this).addClass('current').siblings().removeClass('current');
 });

 function doZoom(size) {
     $('.article-page-content').css('font-size', size + 'px');
 }
 //INDEX 登录后事件（摇杆）
 function loginErnie() {
     var number = 0;
     var oldMoney = null;
     $button = $('.balance-hammer')
     $button.on("click", function () {
         Api.getUserMoney(function (res) {
             if (res.code === 0) {
                 var d = res.result;
                 var thisMoney = d.userMoney;
                 if (typeof d.userMoney != 'undefined') {
                     thisMoney = thisMoney.avail;
                     if (oldMoney == null) {
                         oldMoney = parseFloat(thisMoney);
                         //第一次余额滚动
                         $.animateToPrice(oldMoney, $button);
                     } else {
                         //如果再次点击摇杆，则取得数据为新数据
                         var newMoney = thisMoney;
                         if (oldMoney == newMoney) {
                             //余额无变化操作
                             $('.user-balance h3 span').fadeIn(300);
                             setTimeout(function () {
                                 $('.user-balance h3 span').fadeOut(300);
                             }, 1500);
                         } else {
                             //更新余额
                             newMoney = parseFloat(newMoney);
                             $.animateToPrice(newMoney, $button);
                         }
                     }
                     //第一次页面加载完毕后取到的余额数
                     oldMoney = d.userMoney.avail;
                     User.updateMoney();

                 }
             } else {
                 normalTip(res.msg, function () {
                     window.location.reload();
                 });
             }
         });
         setTimeout(function () {
             $button.find('.hammer-up').show();
             $button.find('.hammer-down').hide();
         }, 2000);
     }).trigger('click');
 }
 //银行卡隐藏方法
 function hiddenString(selectedDom) {
     $('' + selectedDom + '').each(function (i, o) {
         var txt = $(this).val();
         var regex = /^[\u4E00-\u9FA5]+$/;
         if (regex.test(txt)) {
             txt = "" + txt.substring(0, 1) + "**";
         } else {
             txt = "" + txt.substring(0, 4) + " **** **** **** " + txt.substring(txt.length, txt.length - 4) + "";
         }
         $(this).val(txt);
     });
 }
 //活动列表页数据渲染
 function fillActivity(d) {
     //如果活动为空
     if (typeof (d) == 'undefined' || d.length < 0) {
         var tipHtml = '<div class="no-activity"><div class="notran-img"></div><p>暂无优惠活动，敬请期待</p></div>';
         $('#activity .list').append(tipHtml);
     } else {
         for (var i = 0; i < d.length; i++) {
             var actId = d[i].id;
             var actType = d[i].activityType;
             var isright = (i % 2 > 0 ? ' banner-right' : '');
             var activityListHtml = '<div class="banner-s' + isright + ' clearfix" data-type="' + actType + '"><dl><dt id="' + actId + '" data-isjoined="' + d[i].isjoined + '">' +
                 '<a href="' + ctx + '/activity/goDetailById?id=' + actId + '" ><img src="' + d[i].frontImagePath + '" width="392" height="236"></a>' +
                 '<span><a href="' + ctx + '/activity/goDetailById?id=' + actId + '" >' + d[i].activityTitle + '</a></span></dt>' +
                 '<dd><h4><label><i class="icon-time"></i>活动倒计时：</label><em class="font18px"></em><em>天</em><label>' + d[i].diffTime + '</label></h4>' +
                 '<h5><a href="' + ctx + '/activity/goDetailById?id=' + actId + '">查看详情</a></h5>' +
                 '<h5><a href="javascript:;" class="join" data-value="' + actId + '" data-style="activity" data-bonus="' + d[i].availableApply + '">我要参加</a></h5>' +
                 '</dd></dl></div>';
             $('#activity .list').append(activityListHtml);
         };
     }
 }
 //活动列表页及内容页接口数据
 function getActivityIndexData() {
     //判断如果是活动内容页
     if ($('#activity .content-text').is(':visible') == true) {
         //获取当前用户当前活动的参与状态
         Api.getActivityContentData(actId, function (d) {
             d = d.result;
             //根据这个隐藏INPUT的值来判断是参加活动还是申请红利
             if (d && d.isjoined === '1') {
                 if (d.availableApply == 1) {
                     $('#activity .btn a').removeClass('disabled-btn').addClass('btn').html('申请红利');
                     $('#isJoinedC').val(d.availableApply);
                 } else {
                     $('#activity .btn a').removeClass('btn').addClass('disabled-btn').html('已经参加');
                 }
             }
         });
     } else {
         //如果是活动列表页
         $('#activity .list').html('');
         Api.getActivityIndexData({}, function (d) {
             var d = d.result;
             var totalCount = d.totalCount;
             var currentPage = d.pageIndex;
             // fillActivity(d);
             //活动列表页分页
             $(".pagination").pagination(totalCount, {
                 callback: pageCallBack,
                 prev_text: "上一页",
                 next_text: "下一页",
                 items_per_page: 1000, //暂不需要分页，但是为了保留功能（产品需求可能还会再改），所以先设置为1000条分一页
                 num_display_entries: 6,
                 current_page: currentPage,
                 num_edge_entries: 1
             });
             //调用接口函数
             function calling(currentPage) {
                 Api.getActivityIndexData({
                     "page": currentPage
                 }, function (d) {
                     var d = d.result;
                     clearDate();
                     var k = d.entities;
                     fillActivity(k);
                     //活动倒计时时间转换及参加状态逻辑判断
                     $(".banner-s").each(function (i) {
                         var $join = $(this).find('a.join');
                         var actType = $(this).data('type');
                         var actId = $join.data('value');
                         var isBonus = $join.data('bonus');
                         var joinStatus = $(this).find('dt').data('isjoined');
                         var route = $join.attr('data-style');
                         //preAdminActivity.activityType != 2 ||preAdminActivity.activityType != 3的活动都 不要显示参加按扭
                         if (actType == 2 || actType == 3) {
                             $(this).find('h5:eq(1)').remove();
                         }
                         //是否可以申请红利
                         if (joinStatus == 1) {
                             if (isBonus == '1') {
                                 $join.attr('data-style', 'bonus');
                                 $join.html('申请红利');
                             } else {
                                 $join.hide();
                             }
                             //显示 已参加 徽章
                             var joinEdBadge = '<div class="badge-ycj"></div>';
                             $(this).find('dt').append(joinEdBadge);
                         }
                         var tipTxt = {
                             'activity': '参加活动？',
                             'bonus': '申请红利？'
                         }
                         //按钮绑定事件
                         $join.unbind('click').click(function (evt) {
                             route = $(this).attr('data-style');
                             //传递参数，返回用户登录状态, 0为未登录
                             var d_c = dialog({
                                 fixed: true,
                                 content: '请确认是否' + tipTxt[route] + '',
                                 okValue: '确定',
                                 ok: function () {
                                     var style = {
                                         'activity': 'activity',
                                         'bonus': 'bonus'
                                     }
                                     activityInterface(style[route], actId, $join, isBonus);
                                 },
                                 cancelValue: '取消',
                                 cancel: function () {
                                     d_c.close().remove();
                                 }
                             });
                             d_c.showModal();
                         });
                         var num = parseInt($(this).find("dd h4 label").eq(1).text());
                         if (num == '' || num == 0) {
                             $(this).find('dd h4 em').hide().next().addClass('font-green').html('已结束');
                         } else {
                             var timeC = num / 1000;
                             //总共得到的小时数
                             var hoursNum = String((timeC / 60) / 60);
                             if (Number(hoursNum) < 24) {
                                 $(this).find('dd h4 em').hide();
                             } else {
                                 $(this).find('dd h4 em').show();
                             }
                             //获得整数位对应的天数
                             var dddays = hoursNum / 24;
                             //天数通过"."分割，获取一个整数位天数和一个小数位天数
                             var dayArray = String(dddays).split(".");
                             //整数位天数显示
                             $(this).find("dd h4 em").eq(0).html(dayArray[0]);
                             //计算出天数小数点后面的小时数
                             var lessHours = Number(String("0." + dayArray[1])) * 24;
                             //倒计时精确到的秒数 = (hours 小时的小数位 + 天数小数位对应的小时数) * 60 * 60
                             var seconds = Number(lessHours) * 60 * 60;
                             var clock = $(this).find("dd h4 label").eq(1).FlipClock(seconds, {
                                 autoStart: false,
                                 countdown: true
                             }).start();
                         }
                     });
                 });
             }
             //分页回调函数
             function pageCallBack(index) {
                 calling(index);
             }
         });
     }
 }
 //活动页面接口（参加活动和申请红利）
 function activityInterface(style, id, btn, isBonus) {
     var functions = {
         'activity': Api.getActivityJoinStatus,
         'bonus': Api.getBonusJoinStatus
     }
     functions[style](id, function (sdata) {
         var msg = sdata.msg;
         if (sdata && sdata === -1) {
             User.chkLogin();
         } else if (sdata && sdata.code === 0) {
             if (style == 'activity') {
                 if (isBonus == '1') {
                     btn.html('申请红利');
                     btn.attr('data-style', 'bonus');
                 } else {
                     btn.hide();
                 }
                 //显示 已参加 徽章
                 var joinEdBadge = '<div class="badge-ycj"></div>';
                 $("#" + id).append(joinEdBadge);
             } else if (style == 'bonus') {
                 normalTip('恭喜申请红利成功');
             }
         } else {
             normalTip(msg);
         }
     });
 }
 // 活动页面登录后回调函数
 if (User !== undefined && User.loginOk === undefined) {
     User.loginOk = function () {
         //活动页面登录后状态刷新
         if (typeof getActivityIndexData === 'function') {
             getActivityIndexData();
         }
     };
 }
 //小提示通用函数
 function errTip(msg, btn) {
     var tip_unre = dialog({
         align: "right",
         padding: "15px 20px",
         skin: 'sobet'
     });
     tip_unre.content('' + msg + '');
     tip_unre.show(btn[0]);
     setTimeout(function () {
         tip_unre.close().remove();
     }, 2000);
 }

 function normalTip(msg, callback) {
     var tip_unre = dialog({
         skin: 'sobet',
         padding: "15px 20px",
         quickClose: true,
         onclose: callback
     });
     tip_unre.content('' + msg + '');
     tip_unre.show();
     setTimeout(function () {
         tip_unre.close().remove();
     }, 2000);
 }
 //加载动画
 var global_t = dialog({
     skin: 'sobet',
     padding: "15px 20px"
 });
 //公用确认框函数
 function confirmTip(tipTxt, callback) {
     var d_c = dialog({
         fixed: true,
         content: '请确认是否' + tipTxt + '',
         okValue: '确定',
         ok: callback,
         cancelValue: '取消',
         cancel: function () {
             d_c.close().remove();
         }
     });
     d_c.showModal();
 }
 //提现页面绑定收款人姓名
 function updateUserInfo(id) {
     var btn = $('#' + id);
     var realVal = $('#' + id).val();
     var regex = /^[\u4E00-\u9FA5]+$/;
     if (!regex.test(realVal)) {
         errTip('收款人姓名只能是中文', btn);
         return;
     }
     if (realVal.length > 10) {
         errTip('您输入的内容太长', btn);
         return;
     } else if (realVal == "") {
         errTip('请填写您的收款人姓名', btn);
         return;
     }

     var d = dialog({
         title: '请确认：',
         content: '是否确认绑定收款人姓名？',
         okValue: '确定',
         ok: function () {
             var url = ctx + "/userInfo/updateUserInfo?";
             if (id == 'sn') {
                 url += 'sn=' + encodeURI(encodeURI($('#' + id).val()));
             } else {
                 url += 'nickName=' + encodeURI(encodeURI($('#' + id).val()));
             }
             $.ajax({
                 url: url,
                 type: "post",
                 dataType: "text",
                 cache: false,
                 success: function (data) {
                     if (data == '1') {
                         window.location.href = ctx + "/pay/drawCashIndexView";
                         $("#main a.btn").addClass("loading").html("处理中……").attr("onclick", "");
                         clickCheck();
                     } else {
                         errTip('资料修改失败', btn);
                     }
                 }
             });
         },
         cancelValue: '取消',
         cancel: function () {
             d.remove().close();
         }
     });
     d.width(300);
     d.showModal();
 }


 $(".top h1 .fresh").click(function () {
     var me = $(this).parent("h1");
     var Id = me.attr("id");
     me.find('span:eq(0)').html('').append('<i class="fa fa-spinner fa-spin"></i>');
     Api.getPtBalance('cbId=' + Id + '', function (res) {
         if (typeof (res.cash) != 'undefined') {
             me.find('span i').removeClass('fa-spin');
             var thisCash = res.cash;
             me.find('span.balance').html(toFixedNum(thisCash));
         }
     });
 });
 $(".top h1 .transfer").click(function () {
     var me = $(this).parent("h1");
     var Id = me.attr("id");
     window.location.href = "/sobet/pay/transferIndexView";
     $("#turnOut option:selected").attr("id", "sobet_01");
     $("#turnIn option:selected").attr("id", Id);
 });

 //AG平台金额转入和转出只能是正整数
 function CashBlur(evt) {
     var btn = $(evt);
     var input_Cash = btn.val();
     var turnInId = $("#turnIn option:selected").attr('id');
     var minMoney = {
         'pt_01': 20,
         'ag_01': 20,
         'sb_01': 50,
         'sobet_01': 1,
         'idn_01': 100,
         'kg_01': 20,
     };
     var tip_unre = dialog({
         id: 'transWrong',
         align: "right",
         padding: "15px 20px",
         skin: 'transferWrong'
     });
     if (input_Cash < minMoney[turnInId]) {
         tip_unre.content("输入有误");
         tip_unre.show($('#cash')[0]);
         setTimeout(function () {
             tip_unre.close().remove();
         }, 1000);
         var cash = input_Cash > 50000 ? input_Cash.substring(0, 4) : '';
         btn.val(cash);
         return true;
     }

 }

 function agCashBlur(evt) {
     var btn = $(evt);
     var input_agCash = btn.val();
     var turnInId = $("#turnIn option:selected").attr('id');
     var minMoney = {
         'pt_01': 20,
         'ag_01': 20,
         'sb_01': 50,
         'sobet_01': 1,
         'idn_01': 100,
         'kg_01': 20,
     };
     var tip_unre = dialog({
         id: 'transWrong',
         align: "right",
         padding: "15px 20px",
         skin: 'transferWrong'
     });
     if (input_agCash < minMoney[turnInId]) {
         tip_unre.content("输入有误");
         tip_unre.show($('#agcash')[0]);
         setTimeout(function () {
             tip_unre.close().remove();
         }, 1000);
         var cash = input_agCash > 50000 ? input_agCash.substring(0, 4) : '';
         btn.val(cash);
         return true;
     }

 }

 function agCashInput(evt) {
     var btn = $(evt);
     var input_agCash = btn.val();
     var turnInId = $("#turnIn option:selected").attr('id');
     var money = parseFloat($('#qbBalance').html());
     var reg = new RegExp("^[0-9]*[1-9][0-9]*$");
     var tip_unre = dialog({
         id: 'transferWrong',
         align: "right top",
         padding: "15px 20px",
         skin: 'transferWrong'
     });
     var minMoney = {
         'pt_01': 20,
         'ag_01': 20,
         'sb_01': 50,
         'sobet_01': 1,
         'idn_01': 20,
         'kg_01': 20,
     };
     if (input_agCash.length >= 1) {
         if (input_agCash.search(reg) === -1 /*|| input_agCash > 50000 || input_agCash < (minMoney[turnInId] || 1)*/) {
             function __check() {
                 tip_unre.content("输入有误");
                 tip_unre.show($('#agcash')[0]);
                 setTimeout(function () {
                     tip_unre.close().remove();
                 }, 1000);
                 var cash = input_agCash > 50000 ? input_agCash.substring(0, 4) : '';
                 btn.val(cash);
             }
             __check();
             // if (input_agCash < (minMoney[turnInId] || 1)) {
             //     setTimeout(function () {
             //         if (btn.val() < (minMoney[turnInId])) {
             //             __check();
             //         }
             //     }, 1600);
             // } else {
             //     __check();
             // }
         }
         if (input_agCash > money) {
             tip_unre.content("您的余额不足");
             tip_unre.show($('#agcash')[0]);
             setTimeout(function () {
                 tip_unre.close().remove();
             }, 1000);
             var cash = input_agCash < 50000 ? parseInt(money) : '50000';
             btn.val(cash);
         }
     } /*else {
         if (input_agCash.search(reg) === -1) {
             tip_unre.content("输入有误");
             tip_unre.show($('#agcash')[0]);
             setTimeout(function () {
                 tip_unre.close().remove();
             }, 1000);
             var cash = input_agCash > 50000 ? input_agCash.substring(0, 4) : '';
             btn.val(cash);
         }
     } */

 }

 function CashInput(evt) {
     var btn = $(evt);
     var input_Cash = btn.val();
     var turnInId = $("#turnIn option:selected").attr('id');
     var money = parseFloat($('#qbBalance').html());
     var minMoney = {
         'pt_01': 20,
         'ag_01': 20,
         'sb_01': 50,
         'sobet_01': 1,
         'idn_01': 100,
         'kg_01': 20,
     };
     var tip_unre = dialog({
         id: 'transWrong',
         align: "right",
         padding: "15px 20px",
         skin: 'transferWrong'
     });
     var reg = /^(([0-9]|([1-9][0-9]{0,9}))((\.[0-9]{0,2})?))$/;
     if (input_Cash.length >= 1) {
         if (!reg.test(input_Cash) /*|| input_Cash > 50000 || input_Cash < (minMoney[turnInId] || 1)*/) {
             function __check() {
                 tip_unre.content("输入有误");
                 tip_unre.show($('#cash')[0]);
                 setTimeout(function () {
                     tip_unre.close().remove();
                 }, 1000);
                 var cash = input_Cash > 50000 ? input_Cash.substring(0, 4) : '';
                 btn.val(cash);
             }
             __check()
             // if (input_Cash < (minMoney[turnInId] || 1)) {
             //     setTimeout(function () {
             //         if (btn.val() < minMoney[turnInId]) {
             //             __check();
             //         }
             //     }, 1600);
             // } else {
             //     __check();
             // }
         }
         if (input_Cash > money) {
             tip_unre.content("您的余额不足");
             tip_unre.show($('#cash')[0]);
             setTimeout(function () {
                 tip_unre.close().remove();
             }, 1000);
             var cash = input_Cash < 50000 ? parseInt(money) : '50000';
             btn.val(cash);
         }
     } /*else {
         if (!reg.test(input_Cash)) {
             tip_unre.content("输入有误");
             tip_unre.show($('#cash')[0]);
             setTimeout(function () {
                 tip_unre.close().remove();
             }, 1000);
             var cash = input_Cash > 50000 ? input_Cash.substring(0, 4) : '';
             btn.val(cash);
         }
     } */

 }
 //首页登录输入检验
 function inputBlankCheck(a, form, blank) {
     var waitsecond = 400;
     if (arguments.length > 3) {
         waitsecond = arguments[3]
     }
     var chkfun = function () {
         var taginput = a.attr("name");
         var cls = "errorcount";
         var blabktip = blank;
         if (a.val() == "") {
             form.find('.form-group-msg-err').html(blabktip);
         } else {
             $("#login-form a.btn").removeClass("loading");
         }
     };
     inputChk(a, chkfun, waitsecond)
 }

 function inputChk(a, fn) {
     var waitsecond = 400;
     if (arguments.length > 2) {
         waitsecond = arguments[2]
     }
     a.keyup(debouncer(fn, waitsecond));
     a.blur(debouncer(fn, 200));
     a.on("paste", debouncer(fn, 200));
     a.change(debouncer(fn, 200))
 }

 function debouncer(func, timeout) {
     var timeoutID, timeout = timeout || 200;
     return function () {
         var scope = this,
             args = arguments;
         clearTimeout(timeoutID);
         timeoutID = setTimeout(function () {
             func.apply(scope, Array.prototype.slice.call(args))
         }, timeout)
     }
 }

 function inputFormatCheck(a, re, form, blank) {
     var waitsecond = 400;
     if (arguments.length > 4) {
         waitsecond = arguments[4]
     }
     var f = function () {
         var event = arguments[0];
         var taginput = a.attr("name");
         var cls = "errorcount";
         var blabktip = blank;
         var errorCode = 3;
         var errorCodeDict = {
             1: blabktip,
             2: a.attr("rel")
         };
         errorCodeDict["type"] = event.type;
         if (a.val() == "") {
             errorCode = 1
         } else {
             if (!re.test(a.val())) {
                 errorCode = 2
             } else {
                 errorCode = 3
             }
         }
         if (errorCode < 3) {
             if (typeof form === "function") {
                 form(errorCode, errorCodeDict);
                 return
             }
             form.find('.regform-error[name="' + taginput + '"]').html(errorCodeDict[errorCode]);
         } else {
             if (typeof form === "function") {
                 form(errorCode, {
                     type: event.type
                 });
                 return
             }
         }
     };
     User.inputChk(a, f, waitsecond)
 }
 //密码输入复杂程度验证
 function CheckIntensity(pwd) {
     $('#password_level').show();
     var Mcolor, Wcolor, Scolor, Color_Html;
     var m = 0;
     var Modes = 0;
     for (i = 0; i < pwd.length; i++) {
         var charType = 0;
         var t = pwd.charCodeAt(i);
         if (t >= 48 && t <= 57) {
             charType = 1;
         } else if (t >= 65 && t <= 90) {
             charType = 2;
         } else if (t >= 97 && t <= 122) {
             charType = 4;
         } else {
             charType = 4;
         }
         Modes |= charType;
     }
     for (i = 0; i < 4; i++) {
         if (Modes & 1) {
             m++;
         }
         Modes >>>= 1;
     }
     if (pwd.length <= 4) {
         m = 1;
     }
     if (pwd.length <= 0) {
         m = 0;
     }
     switch (m) {
         case 1:
             Wcolor = "pwd pwd_Weak_c";
             Mcolor = "pwd pwd_c";
             Scolor = "pwd pwd_c pwd_c_r";
             Color_Html = "弱";
             break;
         case 2:
             Wcolor = "pwd pwd_Medium_c";
             Mcolor = "pwd pwd_Medium_c";
             Scolor = "pwd pwd_c pwd_c_r";
             Color_Html = "中";
             break;
         case 3:
             Wcolor = "pwd pwd_Strong_c";
             Mcolor = "pwd pwd_Strong_c";
             Scolor = "pwd pwd_Strong_c pwd_Strong_c_r";
             Color_Html = "强";
             break;
         default:
             Wcolor = "pwd pwd_c";
             Mcolor = "pwd pwd_c pwd_f";
             Scolor = "pwd pwd_c pwd_c_r";
             Color_Html = "无";
             break;
     }
     $('#passwordSecurity').val(m);
     document.getElementById('pwd_Weak').className = Wcolor;
     document.getElementById('pwd_Medium').className = Mcolor;
     document.getElementById('pwd_Strong').className = Scolor;
     document.getElementById('pwd_Medium').innerHTML = Color_Html;
 }
 //TIME COUNTDOWN
 function getCountdown(doc, time, fuc) {
     this.time = time;
     this.doc = doc;
     this.fuc = fuc;
     this.timer = function () {
         time--;
         var min = Math.floor(time / 60);
         var sec = time % 60;
         if (sec < 10)
             sec = '0' + sec;
         if (min < 10)
             min = '0' + min;
         doc.html(min + ":" + sec);
         if (time < 1) {
             onfinish();
             return;
         }
         setTimeout('timer()', 1000);
     };
     this.onfinish = function () {
         fuc.call(this);
     };
     timer();
 }
 //COPY
 function copyFunc(target) {
     // 复制到剪贴板
     var clip = new ZeroClipboard($('#' + target + ''));
     var tip = dialog({
         id: 'copy-tip',
         skin: 'sobet tip',
         align: 'top'
     });
     if (ZeroClipboard && ZeroClipboard.state().flash.disabled) {
         $('#' + target + '').on('click', function (evt) {
             evt.preventDefault();

             tip.content('您的浏览器不支持flash插件，安装完flash插件再使用“复制”功能！');
             tip.show($('#' + target + '')[0]);
             setTimeout(function () {
                 tip.close();
             }, 3000);
         });
     }
     clip.on('ready', function () {
         this.on('aftercopy', function (event) {
             tip.content('复制成功');
             tip.show($('#' + target + '')[0]);
             setTimeout(function () {
                 tip.close();
             }, 2000);
         });
     });
 }
 //余额页面TAB切换效果
 $(".balance-tab ul li").click(function (e) {
     $(this).removeClass('opacity').find('.pt-info').fadeIn(speed);
     $(this).siblings().addClass('opacity').find('.pt-info').hide();
     if ($(this).hasClass('slider')) {
         return;
     }

     // what tab was pressed
     var whatTab = $(this).index();

     // Work out how far the slider needs to go
     var howFar = 52 * whatTab;

     $(".balance-tab .slider").css({
         top: howFar + "px"
     });
     /* Add the ripple */

     // Remove olds ones
     $(".balance-tab .ripple").remove();

     // Setup
     var posX = $(this).offset().left,
         posY = $(this).offset().top,
         buttonWidth = $(this).width(),
         buttonHeight = $(this).height();

     // Add the element
     $(this).prepend("<span class='ripple'></span>");

     // Make it round!
     if (buttonWidth >= buttonHeight) {
         buttonHeight = buttonWidth;
     } else {
         buttonWidth = buttonHeight;
     }

     // Get the center of the element
     var x = e.pageX - posX - buttonWidth / 2;
     var y = e.pageY - posY - buttonHeight / 2;

     // Add the ripples CSS and start the animation
     $(".balance-tab .ripple").css({
         width: buttonWidth,
         height: buttonHeight,
         top: y + 'px',
         left: x + 'px'
     }).addClass("rippleEffect");
 });
 //INDEX OF GOLDBALL
 function eggClick(obj) {
     var _this = obj;
     _this.addClass('opened');
     if (_this.hasClass("curr")) {
         normalTip('别砸了！蛋都碎了！');
         return false;
     } else {
         //砸蛋回调接口
         Api.getGoldBallStatus(function (edata) {
             var d = edata.result;
             if (d && typeof (d) != 'undefined' && d != null) {
                 //中奖结果
                 var drawResult = d.drawResult;

                 if (drawResult && typeof (drawResult) != 'undefined') {
                     drawResult = drawResult.amount;
                     $(".hammer").css({
                         "top": _this.position().top - 55,
                         "left": _this.position().left + 185
                     });
                     $(".hammer").animate({
                         "top": _this.position().top - 25,
                         "left": _this.position().left + 125
                     }, 100, function () {
                         var num = _this.index();
                         _this.addClass("curr").removeClass('close'); //蛋碎效果
                         $('.goldball .eggs li.close').remove();

                         switch (num) {
                             case 2:
                                 $('.goldball .eggs ul').animate({
                                     left: '120px'
                                 }, 300, 'easeInCubic');
                                 break;
                             case 3:
                                 $('.goldball .eggs ul').animate({
                                     left: '-60px'
                                 }, 300, 'easeInCubic');
                                 break;
                             case 4:
                                 $('.goldball .eggs ul').animate({
                                     right: '260px'
                                 }, 500, 'easeInCubic');
                                 break;
                         }

                         $(".goldball .eggs .hammer").remove();
                         $('.resultTip').css({
                             display: 'block',
                             top: '100px',
                             left: _this.position().left + 205,
                             opacity: 0
                         }).animate({
                             top: '50px',
                             opacity: 1
                         }, 300);
                     });
                     //如果未中奖
                     if (Math.floor(drawResult) === 0) {
                         $("#result").html("很遗憾，您此次砸金蛋未中奖");
                     } else {
                         $("#result").html("恭喜，您中得<br> ¥ <em>" + drawResult + "</em> 元");
                     }
                 }
             } else {
                 normalTip('' + edata.msg + '');
             }

         });
     }
 }

 $(".goldball .eggs li").hover(function () {
     if (!$(this).hasClass('.opened')) {
         var posL = $(this).position().left + $(this).width();
         $("#hammer").show().css('left', posL - 30);
     }
 })

 $('.index-act-tip').hover(function () {
     $(this).find('.index-act-1').hide();
     $(this).find('.index-act-2, .close').show();
 }, function () {
     $(this).find('.index-act-2, .close').hide();
     $(this).find('.index-act-1').show();
 });

 $('.index-act-tip .close').click(function () {
     $('.index-act-tip').hide();
 });


 $('.index-act-2').click(function (evt) {
     evt.preventDefault();
     User.getStatus(function (data) {
         if (data.code == 0) {
             var dom = $('.goldball');
             var d = dialog({
                 content: dom,
                 fixed: true,
                 onshow: function () {
                     $('.ui-dialog').css({
                         'background': 'none',
                         'border': 'none'
                     });
                     $('.ui-popup-modal .ui-dialog').css({
                         'box-shadow': 'none'
                     });
                     $('.goldball').find('p.close').click(function () {
                         d.close();
                     });
                     $(".goldball .eggs li").unbind('click').bind('click', function () {
                         $(this).children("span").hide();
                         eggClick($(this));
                     });
                 }
             });
             d.showModal();
         } else {
             normalTip('请您先登录');
         }
     });
 });
 //输入限制-只能输入数字
 function ck_numlimit() {
     if ((event.keyCode < 48 || event.keyCode > 57))
         event.returnValue = false
 }

 function formatBankNo(t) {
     if (void 0 != t && "" != t.value) {
         var e = new String(t.value);
         if (e = e.substring(0, 26),
             null == e.match(".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}")) {
             if (null == e.match(".[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}.[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}.[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}.[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7}")) {
                 var i, n = accountChar = "";
                 for (i = 0; i < e.length; i++)
                     accountChar = e.substr(i, 1),
                     isNaN(accountChar) || " " == accountChar || (n += accountChar);
                 for (e = "",
                     i = 0; i < n.length; i++)
                     4 == i && (e += " "),
                     8 == i && (e += " "),
                     12 == i && (e += " "),
                     16 == i && (e += " "),
                     20 == i && (e += " "),
                     e += n.substr(i, 1)
             }
         } else
             e = " " + e.substring(1, 5) + " " + e.substring(6, 10) + " " + e.substring(14, 18) + "-" + e.substring(18, 25);
         e != t.value && (t.value = e)
     }
 }

 function checkBankCard(cardNo) {
     var tmp = true,
         total = 0;
     for (var i = cardNo.length; i > 0; i--) {
         var num = cardNo.substring(i - 1, i);
         tmp = !tmp;
         if (tmp) {
             num = num * 2;
         }
         var gw = num % 10;
         total += (gw + (num - gw) / 10);
     }
     return total % 10 == 0;
 }