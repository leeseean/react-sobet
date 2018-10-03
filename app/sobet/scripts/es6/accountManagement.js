/**
 * Created by whyson on 2017/3/31.
 */
var accountManagement = accountManagement || {}
accountManagement = {
    reNum: false,
    cn: "",
    tmpl: {
        nick: '',
        personal: `
            <div class="row" id="nicknameRow">
               
            </div>
            <div class="row clearfix">
                <label>电子邮箱绑定</label><span class="emalSn" style="display:none"></span>
                <div>提高您账号的安全性，用于您的密码找回</div> <span class="embtn" style="display:none"><a>立即绑定</a></span>
                <div class="line"></div>
            </div>
            <div class="basic">
                <div class="row clearfix">
                    <label>收款人姓名绑定</label> <input id="sn" placeholder="" value="" class="s-name" disabled/> <span class="onName" style="display:none"><a class="namebtn" href="javascript:void(0)">保存</a></span>
                    <div class="tips-red" id="usertip"></div>
                    <div class="tips"><i class="icon-info-sign">提款时，需要您的收款人姓名和银行卡开户行姓名保持一致，收款人姓名一经填写，不能更改，请慎重填写。</i></div>
                </div>
                <div class="line"></div>
            </div>
            <h2 class="usercenter"><span>安全服务</span></h2>
            <ul class="service">
                <li class="casePassword"> <span>资金密码</span> <span class="caseSn"><i class="icon-ok"></i></span> <span class="t tip" style="visibility:hidden"> 强度：<em></em></span>        <span class="btn"><a></a></span> </li>
                <li class="loginPassword"> <span>登录密码</span> <span class="loginSn"><i class="icon-ok"></i></span> <span style="visibility:hidden;text-align:center;"
                        class="t"> 强度：<em></em> </span>
                    <span class="btn"><a>修改密码</a></span> </li>
                <li class="emilLock"> <span>邮箱绑定</span> <span class="elocksn"><i class="icon-ok"></i></span> <span class="t tip"><em></em></span>
                    <span class="btn"><a></a></span> </li>
                <li class="mibQuestion"> <span>密保问题</span> <span class="mibSn"><i class="icon-exclamation-sign"></i></span><span class="t tip"><em></em></span>        <span class="btn"><a></a></span> </li>
            </ul>
            <div class="no-bottom">
                <p>温馨提醒：资金密码是您提现的凭证，请牢记，绑定邮箱及密保问题为找回密码的方式之一，提高账号的安全性</p>
            </div>
        `,
        password: '<div class="updatePwd-tip"><div></div> </div><form id="userInfo-spd" action="" novalidate="novalidate" method="post"> ' +
                    '<input type="hidden" name="cn" value="" id="cn"> <input type="hidden" name="token" id="token" value=""> <input type="hidden" id="passwordSecurity" name="passwordSecurity" value=""/>' +
                    '<input type="hidden" id="desPassword" name="desPassword"/><div class="row updatepsw"><label><i class="on">1</i>当前登录密码<span>当前登录密码</span></label><div class="input-wrap">' +
                    '<input id="oldPassword" name="oldPassword" type="password" placeholder="" readonlyonfocus="this.removeAttribute(' + "readonly" + ')"/></div></div><div class="row updatepsw">' +
                    '<label><i>2</i>新登录密码<span>6~16位，包含数字、字母</span></label><div class="input-wrap"><input id="newPassword" name="newPassword" type="password" placeholder=""onkeyup="CheckIntensity(this.value); " onfocus="cursor(this);"/> ' +
                    '</div><div class="tips" id="password_level" style="display:none; width: 125px;margin:10px 0 0 200px;"><table class="show"><tr><td id="pwd_Weak" class="pwd pwd_c">&nbsp;</td><td id="pwd_Medium" class="pwd pwd_c pwd_f">无</td><td id="pwd_Strong" class="pwd pwd_c pwd_c_r">&nbsp;</td> ' +
                    '</tr></table></div></div><div class="row updatepsw"><label><i>3</i>确认新登录密码<span>再一次输入新登录密码</span></label><div class="input-wrap"><input id="confirm_password" name="confirm_password" type="password" placeholder=""onfocus="cursor(this);"/> ' +
                    '</div> <div class="line50"></div></div><div class="row"><input type="submit" class="btn updatepsw" value="提交修改"  onkeydown="if(event.keyCode==13)return false"></div></form>',
        emails: '<div class="emailLinks"><h2>设置成功</h2><p><img src="/static/sobet/images/success.png" alt="摩擦娱乐"></p><p></p></div>' +
                '<form id="" action="" novalidate="novalidate" method="post" class="emailsinfo" style="display:none"><input type="hidden" name="action" value="sendEmail"><div class="row"><label>电子邮箱绑定<span class="spec">提高您账号的安全性，用于您的密码找回</span></label> ' +
                '<div class="input-wrap down"><input id="email" name="email" type="text" class="emailist" placeholder="输入电子邮箱"/></div></div><div class="row">' +
                '<input type="submit" class="btn" value="下一步"  onkeydown="if(event.keyCode==13)return false"><div class="line"></div></div></form><div class="no-bottom"><h5>温馨提醒：</h5><p>1、邮箱一旦进行绑定，则不可更改</p> ' +
                '<p>2、绑定邮箱是唯一找回资金密码的方式</p><p>3、绑定邮箱是找回账号密码的方式之一</p></div>',
        mib: '  <div class="emailLinks" style="display: none"><p><img src="/static/sobet/images/success.png"></p><p>你已设置过密保，如需修改请点击： <a><span class="change-btn">更改设置</span></a></p></div> ' +
            '<div class="updatePwd-tip"><div></div></div><form id="userInfo" method="post" action="securityQuestion"><input type="hidden" name="cn" value=""><input id="question" type="hidden" name="oldQuestion" value=""/> ' +
            '<input type="hidden" name="action" value="commit"><div class="firstOne"><div class="row"><label style="line-height:15px;">设置密保问题<span class="spec">提高您账号的安全性，用于您的密码找回</span></label> ' +
            '</div><div class="input-wrap-bank row" id="sq"><label><i class="on">1</i>选择密保问题</label><select name="question" class="disabled-select " style="margin-top:10px;"><option value="">请选择密保问题</option> ' +
            '<option value="1">您的出生地</option> ' +
            '<option value="2">您父亲的名字</option> ' +
            '<option value="3">您母亲的名字</option> ' +
            '<option value="4">您小学的校名</option> ' +
            '<option value="5">您初中的校名</option> ' +
            '<option value="6">您高中的校名</option> ' +
            '<option value="7">您大学的校名</option></select></div><div class="row" style="margin: 0"> <label><i>2</i>输入密保答案</label> ' +
            '<div id="answer" class="input-wrap" style="margin-top:10px;"> <input id="answer" name="answer" type="text" placeholder="请输入答案" onfocus="cursor(this);"style="height:60%;width: 95%;"/> </div> </div> </div> ' +
            '<div class="firstTwo"> <div class="row"> <label><i class="on">1</i>当前密保问题</label> <div class="input-wrap" style="text-align:left;"> <label id="qSpan" style="text-align:left;"></label> </div></div> ' +
            '<div class="row"> <label><i>2</i>当前密保答案</label> <div class="input-wrap"> <input id="oldAnswer" name="oldAnswer" type="text" onfocus="cursor(this);" style="width: 89%"/></div></div><div class="row"> <label><i>3</i>新密保问题</label> ' +
            '<div class="input-wrap-bank"><select name="question" class="disabled-select question" onfocus="cursor(this);"> ' +
            '<option value="">请选择密保问题</option> ' +
            '<option value="1">您的出生地</option> ' +
            '<option value="2">您父亲的名字</option>' +
            '<option value="3">您母亲的名字</option> ' +
            '<option value="4">您小学的校名</option>' +
            '<option value="5">您初中的校名</option>' +
            '<option value="6">您高中的校名</option>' +
            '<option value="7">您大学的校名</option> </select> </div></div> <div class="row" style="margin: 0"> <label><i>4</i>新密保答案</label> <div class="input-wrap"> <input id="answer" name="answer" type="text" placeholder="新密保答案" onfocus="cursor(this);"style="width: 89%"/> </div> </div> </div> ' +
            '<div class="row mibbtn"><input type="submit" class="btn sq" value="立即设置" style="margin-left:-25px;margin-top: 22px"  onkeydown="if(event.keyCode==13)return false"> <div class="line"></div> </div> </form> <div class="no-bottom"> <h5>温馨提醒：</h5> ' +
            '<p>1、密保问题是您找回登录密码的方式之一</p><p>2、通过设置密保问题，能够使您的账号快速找回</p></div>',
    capitalPw: '<div class="emailLinks" style="display: none"><p><img src="/static/sobet/images/success.png"></p><p><em class="mas"></em><em>请点击：</em> <a><span class="change-btn">更改设置</span></a></p></div> <div class="updatePwd-tip"> <div></div> </div> ' +
        '<form id="userInfo" method="post" action="" novalidate="novalidate" style="display: none"><div class="row"><div class="login"><label><i class="on">1</i><em>旧资金密码</em><span class="oldIn">请输入登录密码/请输入当前资金密码</span></label> <div class="input-wrap">' +
        '<input name="oldPassword" type="password" placeholder="" readonlyonfocus="this.removeAttribute(' + "readonly" + ')" style="width: 92%"/> </div> </div> </div> <div class="row"> <label><i>2</i>资金密码<span>长度6~16位，包含数字、字母</span></label> <div class="input-wrap keyboard"> <input id="newPassword" name="newPassword" type="password" placeholder="" onfocus="cursor(this);"style="width: 92%"/> </div> </div> <div class="row"> <label><i>3</i>确认资金密码<span>再一次输入资金密码</span></label> <div class="input-wrap keyboard"> ' +
        '<input name="confirm_password" type="password" value="" placeholder="" onfocus="cursor(this);"style="width: 92%"/> </div> </div><div class="row" style="margin-top: 30px;"> <div class="topLine"></div> ' +
        '<input class="light" type="submit" class="btn" value="马上设置" onkeydown="if(event.keyCode==13)return false"></div><div class="no-bottom-right"><h5>温馨提醒：</h5> <p>1、资金密码是您提现的重要凭证，一旦设定请妥善保管</p> <p>2、通过设置资金密码，能够有效的保证您的资金安全</p></div></form>',

    bank: '<div><div class="cardTips">您最多可同时绑定5张银行卡。为了保障您的资金安全，提现银行卡的持卡人姓名必须与收款人姓名一致。</div> ' +
        '<div id="addCards"><div class="addsection"><span>添加一号卡</span></div><div class="addsection"><span>添加二号卡</span></div><div class="addsection"><span>添加三号卡</span></div><div class="addsection"> <span>添加四号卡</span> </div> <div class="addsection"> <span>添加五号卡</span> </div> <div id="callCenter" class="callsection"> <a target="_blank"href="https://v88.live800.com/live800/chatClient/chatbox.jsp?companyID=566686&configID=3127&jid=5379036822&s=1"> <i></i><span>如需[解绑]请联系在线客服</span> </a> </div></div> ' +
        '<div class="cardManage_tip"> <div class="title">温馨提醒:</div> <p>首次绑定银行卡<span></span>小时之后可用于提现，新增银行卡<span></span>小时以后可用于提现 </p> </div> ' +
        '<form id="bankPassWork" method="post" class="payPasswordSet" action="" style="display: none"novalidate="novalidate"> <div class="row"> <div class="input-wrap mragin-top-10 mragin-bottom-10"> <i class="on">1</i><label class="pop-label card">登录密码</label><input id="loginPassword" name="loginPassword" type="password" placeholder="请输入登录密码"/> </div> </div> ' +
        '<div class="row"> <div class="input-wrap mragin-top-10 mragin-bottom-10"> <i class="on">2</i><label class="pop-label card">资金密码</label> <input id="password" name="payPassword" type="password" placeholder="长度6~16位，包含数字、字母"/> </div> </div> <div class="row" style="position:relative;"> <div class="input-wrap mragin-top-10 mragin-bottom-10"> <i class="on">3</i><label class="pop-label card">确认资金密码</label><input id="confirm" name="confirm_password" type="password"placeholder="请再次输入资金密码"/> </div> </div> ' +
        '<div class="row submit-dom clearfix"> <button type="button" class="btn" onclick="cardManage.setPayPassword();"  onkeydown="if(event.keyCode==13)return false">设置</button> </div> </form> ' +
        '<form id="account" action="saveOrUpdateCard" style="display:none" action="" novalidate="novalidate"> <input type="hidden" name="operation" value=""/> <input type="hidden" name="drawcashUrl" value="cardManage"/> <div class="row"> <i class="on">1</i><label>收款人姓名</label> <div class="input-wrap">' +
        '<input type="text" id="sn" name="sn" value=""onkeyup="value=value.replace(/[(?!_)0-9]/g," ")" onbeforepaste="clipboardData.setData("text",clipboardData.getData("text").replace(/[(?!_)0-9]/g,""))" placeholder="只能是中文"/></div> </div> <div class="row"> <i class="on">2</i><label>收款人卡号</label> <div class="input-wrap"> <input type="text" name="bankCardNo" id="bankCardNo"' +
        'placeholder="请输入卡号" onparse="return false;"style="ime-mode: disabled" onkeyup="formatBankNo(this)"onkeydown="formatBankNo(this)"/> </div> </div> ' +
        '<div class="row"> <i class="on">3</i><label class="bank-label">开户行</label> <div class="input-wrap-bank"> <select name="bankAllas" id="bankAllas" class="disabled-select">' +
        '<option value="">开户银行选择</option> <option value="CCB">中国建设银行</option> <option value="ICBC">中国工商银行</option> <option value="ABC">中国农业银行</option> <option value="BOC">中国银行</option> <option value="COMM">交通银行</option> <option value="CMB">招商银行</option> <option value="CMBC">民生银行</option> <option value="CEB">光大银行</option> <option value="HB">华夏银行</option> <option value="CIB">兴业银行</option> <option value="SPDB">上海浦东发展银行</option> <option value="CITIC">中信银行</option> <option value="GDB">广发银行</option> <option value="BOB">北京银行</option> <option value="HZCB">杭州银行</option> <option value="NBBANK">宁波银行</option> <option value="PSBC">中国邮政储蓄银行</option> </select> </div> </div> ' +
        '<div class="row"> <i class="on">4</i><label class="bank-label">开户省份/城市</label> <div class="input-wrap-bank" id="abc"> <select name="province" id="province" class="prov disabled-select"> <option>省份</option> </select> <select name="city" id="city" class="city disabled-select"> <option>城市</option> </select> </div> </div> ' +
        '<div class="row"><i class="on">5</i><label>开户网点</label> <div class="input-wrap"> <input type="text" name="place" id="place" placeholder="请输入开户网点"/> </div> </div> ' +
        '<div class="row"> <div class="line"></div> <button type="button" class="btn" onclick="cardManage.addBankCard();">添加银行卡 </button> </div> </form> </div>',
     webind: `
            <div class="wechat-tip"></div>
            <div class="wechat-success hide">
                <p><img src="/static/sobet/images/wechat-icon-b.png"></p>
                <div class="wechat-success-icon">微信号已绑定</div>
                <p><span class="wechat-current-label">当前绑定微信号: </span><span class="wechat-id">mc188@666.com</span></p>
                <div class="wechat-change-btn">微信号更换</div>
                <!--<div><a href="/sobet/pay/rechargeIndexView" class="wechat-recharge-btn">我要充值</a></div>-->
            </div>
            <div class="wechat-bind hide">
                <input type="hidden" id="xcode">
                <input type="hidden" id="timer">
                <div class="wechat-bind-left">
                    <div>扫描二维码</div>
                    <div class="wechat-ecode">
                        <img class="wechat-ecode-img hide" src="" width="250" height="250">
                        <span class="wechat-ecode-alt hide">请联系客服</span>
                    </div>
                    <div class="wechat-ecode-tip">添加微信好友二维码</div>
                </div>
                <div class="wechat-bind-right">
                    <p class="wechat-bind-step-tit">操作说明</p>
                    <div><span class="tip-btn on">1</span>扫描左侧二维码，添加微信好友</div>\
                    <div class="wechat-bind-step"></div>
                    <div><span class="tip-btn on">2</span>添加好友后，给此微信好友发送屏幕下方的验证码</div>
                    <div class="wechat-bind-step"></div>
                    <div><span class="tip-btn on tip-3">3</span>请勿给该微信号转账，该微信号不涉及任何金钱交易，无法上分</div>
                    <div class="wechat-xcode-wrap">
                        <span class="wechat-xcode-label">验证码</span>
                        <span class="wechat-xcode">
                            <span class="odd"></span>
                            <span class="even"></span>
                            <span class="odd"></span>
                            <span class="even"></span>
                        </span>
                        <span class="wechat-xcode-validtime">00:00:00</span>后刷新验证码
                    </div>
                </div>
            </div>
            `
   },
   validTime: '',
   query: '',
    
    init: function (nicheng, username, logined) {
        var me = this;
        Api.getHtml('accountManagement', 'html', {}, function (res) {
            var href, type;
            $('#admin_history').html(res);
            //微信绑定显示隐藏
            if ($('.header_menu a[type="webind"]').css('display') === 'none') {
                $('.usercenter ul.historyMenu li[data-type="webind"]').hide();
            }
            href = window.location.href;
            if(/type/.test(href)) {
                href = href.split('#')[1].split('?');
                type = href[1].split('=')[1];
                href = href[0];
            } else {
                href = href.split('#')[1] || 'aaa';
            }
            me.initEvent(nicheng, username, logined, href, type);
            $('.historyMenu li[data-type="'+ href +'"]').trigger('click');
        });
    },

    initEvent: function (nicheng, username, logined, method, types) {
        var me = this, $myCount = $('.contentMycount'), $tab; 
        $tab = $myCount.find('.' + method);
        var personal = $('.contentMycount .personal');
        var password = $('.contentMycount .password');
        var Email = $('.contentMycount .emails');
        var mib = $(".contentMycount .mib");
        var capitalPw = $(".contentMycount .capitalPw");
        var bank = $(".contentMycount .bank");
        var wechat = $('.contentMycount .webind');
        let tipObj = {
            content: `<p style="text-align:center;">请与所要求的格式保持一致！</p>`,
            align: 'bottom',
            skin: 'tip',
            onshow: function () {
                let timeout = setTimeout(() => {
                    this.close();
                    clearTimeout(timeout);
                }, 800);
            },
        };
        $(".emails .emailist").mailAutoComplete();
        $('.historyMenu').on('click', 'li', function () {
            var type = $(this).data('type'),
                $tab = $myCount.find('.' + type);
            if(type !== 'webind') {
                window.location.hash = type;
                types = '';
            } else {
                if(!types) {
                    window.location.hash = type;
                }
            }
            $(this).addClass('on').siblings().removeClass('on');
            me.reNum = false;
            // me.initTab();
            // $tab.html(me.tmpl[type]);
            // if($(this).index() === 0) {
            //     me.personalSet(nicheng);
            // }
            // me[type + 'Fn']($tab);
            $tab.removeClass('hide').siblings().addClass('hide');
            
            
            switch ($(this).index()) {
                case 0:
                    // $tab.removeClass("hide").siblings().addClass(" hide");
                    personal.html("").html(me.tmpl.personal);

                    $('#nicknameRow').html(` 
                        <label>昵称：</label>
                        <div class="nicknameInput" style="display:none;">
                            <input id="nickname" placeholder="" value="" class="nickname" /> <span class="saveNickname" style="display:block;"><a class="nicknameBtn" href="javascript:void(0)">保存</a></span>
                            <div class="tips-red" id="nicknameTip"></div>
                            <div class="tips"><i class="icon-info-sign">输入中文、英文、数字、下划线皆可，最多15字符。</i></div>
                        </div>
                        <div class="nicknameSet" style="display:inline;">
                            <i id="nicheng">${nicheng}</i>
                            <i class="setNickname">设置</i>
                        </div>
                        <div class="line"></div>`);
                    //昵称输入校验
                    $('#nickname').on('blur', function () {
                        let nickname = $(this).val();
                        if (/^[\u4e00-\u9fa5A-Za-z0-9_]{1,16}$/.test(nickname)) {
                            /*提示文字消失*/
                        } else {
                            /*提示文字弹出*/
                            if (nickname !== '') {
                                dialog(tipObj).show($(this)[0]);
                            }
                        }
                    });
                    //昵称设置
                    $('#nicknameRow .setNickname').off('click').on('click', function (e) {
                        $('#nicknameRow .nicknameSet').hide();
                        $('#nicknameRow .nicknameInput').css({
                            'display': 'inline',
                        });
                    });
                    //昵称保存
                    $('.personal .nicknameBtn').off('click').on('click', function () {
                        let nicknameDom = $('#nickname');
                        let nickname = nicknameDom.val();
                        if (/^[\u4e00-\u9fa5A-Za-z0-9_]{1,16}$/.test(nickname)) { //有填写昵称才执行操作
                            Api.updateNickname(encodeURI(encodeURI(nickname)), function (res) {
                                if (res.code === 0) { //更新昵称成功
                                    /*let tip = jQuery.extend(tipObj, {
                                        content: `<p style="text-align:center;">设置昵称成功!</p>`,
                                    });
                                    dialog(tip).show();*/
                                    $('#nicheng').text(nickname);
                                    $('#nicknameRow .nicknameInput').hide();
                                    $('#nicknameRow .nicknameSet').css({
                                        'display': 'inline',
                                    });
                                    Navigation.getNickname();
                                } else if (res.code === 2) { //昵称已存在
                                    dialog({
                                        content: `<p style="text-align:center;">${res.msg}！</p>`,
                                        align: 'bottom',
                                        skin: 'tip',
                                        onshow: function () {
                                            let timeout = setTimeout(() => {
                                                this.close();
                                                clearTimeout(timeout);
                                            }, 800);
                                        },
                                    }).show($('#nickname')[0]);
                                } else { //更新昵称失败
                                    dialog({
                                        content: `<p style="text-align:center;">设置昵称失败！</p>`,
                                        align: 'bottom',
                                        skin: 'tip',
                                        onshow: function () {
                                            let timeout = setTimeout(() => {
                                                this.close();
                                                clearTimeout(timeout);
                                            }, 800);
                                        },
                                    }).show($('#nickname')[0]);
                                }
                            });
                        } else {
                            dialog(tipObj).show($('#nickname')[0]);
                            return false;
                        }

                    });
                    $('.personal .namebtn').on("click", function () {
                        updateUserInfoUc("是否确定绑定收款人姓名", "sn")
                    });
                    $(".personal .embtn").on("click", function () {
                        $('.historyMenu li[data-type=emails]').trigger('click')
                    });
                    $(".personal .casePassword .btn").on("click", function () {
                        $('.historyMenu li[data-type=capitalPw]').trigger('click')
                    });
                    $(".personal .loginPassword .btn").on("click", function () {
                        $('.historyMenu li[data-type=password]').trigger('click')
                    });
                    $(".personal .emilLock .btn").on("click", function () {
                        $(".historyMenu li[data-type=emails]").trigger("click");
                    });
                    $(".personal .mibQuestion .btn").on("click", function () {
                        $('.historyMenu li[data-type=mib]').trigger('click')
                    });

                    me.fnPersonal();
                    me.initcapitalPw();
                    me.initmib();
                    me.initsetPsaaword();
                    me.initeamil();
                    me.initWechat();
                    break;
                case 1:
                    // $tab.removeClass("hide").siblings().addClass(" hide");
                    password.html(me.tmpl.password);
                    me.initcapitalPw();
                    me.initmib();
                    me.initsetPsaaword();
                    me.initeamil()
                    me.fnPassword();
                    me.initWechat();
                    break;
                case 2:
                    // $tab.removeClass("hide").siblings().addClass(" hide");
                    Email.html(me.tmpl.emails);
                    me.initcapitalPw();
                    me.initmib();
                    me.initeamil();
                    me.initsetPsaaword();
                    me.initWechat();
                    me.fnElimas();
                    break;
                case 3:
                    // $tab.removeClass("hide").siblings().addClass(" hide");
                    mib.html(me.tmpl.mib);
                    me.initcapitalPw();
                    me.initmib();
                    me.initeamil();
                    me.initsetPsaaword();
                    me.initWechat();
                    me.setMib();
                    break;
                case 4:
                    // $tab.removeClass("hide").siblings().addClass(" hide");
                    capitalPw.html(me.tmpl.capitalPw);
                    me.initmib();
                    me.initsetPsaaword();
                    me.initeamil();
                    me.setPsaaword();
                    me.initWechat();
                    break;
                case 5:
                    // $tab.removeClass("hide").siblings().addClass(" hide").html("");
                    me.setbank();
                    me.initcapitalPw();
                    me.initmib();
                    me.initeamil();
                    me.initsetPsaaword();
                    me.initWechat();
                    break;
                case 6:
                    // $tab.removeClass('hide').siblings().addClass('hide').html('');
                    wechat.html(me.tmpl.webind);
                    me.initcapitalPw();
                    me.initmib();
                    me.initsetPsaaword();
                    me.initeamil();
                    me.webindFn(wechat, types);
                    // $('.wechat-xcode').off('click').on('click', function() {
                    //     console.log('click');
                    //   });
                    // $('.wechat-bind').show();
                    // me.xcodeValidTimer(wechat, 30, function() {
                    //     window.clearInterval(validTime);
                    //     $('.wechat-xcode').trigger('click');
                    //   });
                    break;
            }
            $('.query').trigger('click');
            
        });

    },
    /* 首页(个人资料)设置 */
    personalSet: function(nicheng) {
        $('#nicknameRow').html( ` 
            <label>昵称：</label>
            <div class="nicknameInput" style="display:none;">
                <input id="nickname" placeholder="" value="" class="nickname" /> <span class="saveNickname" style="display:block;"><a class="nicknameBtn" href="javascript:void(0)">保存</a></span>
                <div class="tips-red" id="nicknameTip"></div>
                <div class="tips"><i class="icon-info-sign">输入中文、英文、数字、下划线皆可，最多15字符。</i></div>
            </div>
            <div class="nicknameSet" style="display:inline;">
                <i id="nicheng">${nicheng}</i>
                <i class="setNickname">设置</i>
            </div>
            <div class="line"></div>`);
        //昵称输入校验
        $('#nickname').on('blur', function () {
            let nickname = $(this).val();
            if (/^[\u4e00-\u9fa5A-Za-z0-9_]{1,16}$/.test(nickname)) {
                /*提示文字消失*/
            } else {
                /*提示文字弹出*/
                if (nickname !== '') {
                    dialog(tipObj).show($(this)[0]);
                }
            }
        });
        //昵称设置
        $('#nicknameRow .setNickname').off('click').on('click', function (e) {
            $('#nicknameRow .nicknameSet').hide();
            $('#nicknameRow .nicknameInput').css({
                'display': 'inline',
            });
        });
        //昵称保存
        $('.personal .nicknameBtn').off('click').on('click', function () {
            let nicknameDom = $('#nickname');
            let nickname = nicknameDom.val();
            if (/^[\u4e00-\u9fa5A-Za-z0-9_]{1,16}$/.test(nickname)) { //有填写昵称才执行操作
                Api.updateNickname(encodeURI(encodeURI(nickname)), function (res) {
                    if (res.code === 0) { //更新昵称成功
                        /*let tip = jQuery.extend(tipObj, {
                            content: `<p style="text-align:center;">设置昵称成功!</p>`,
                        });
                        dialog(tip).show();*/
                        $('#nicheng').text(nickname);
                        $('#nicknameRow .nicknameInput').hide();
                        $('#nicknameRow .nicknameSet').css({
                            'display': 'inline',
                        });
                        Navigation.getNickname();
                    } else if (res.code === 2) { //昵称已存在
                        dialog({
                            content: `<p style="text-align:center;">${res.msg}！</p>`,
                            align: 'bottom',
                            skin: 'tip',
                            onshow: function () {
                                let timeout = setTimeout(() => {
                                    this.close();
                                    clearTimeout(timeout);
                                }, 800);
                            },
                        }).show($('#nickname')[0]);
                    } else { //更新昵称失败
                        dialog({
                            content: `<p style="text-align:center;">设置昵称失败！</p>`,
                            align: 'bottom',
                            skin: 'tip',
                            onshow: function () {
                                let timeout = setTimeout(() => {
                                    this.close();
                                    clearTimeout(timeout);
                                }, 800);
                            },
                        }).show($('#nickname')[0]);
                    }
                });
            } else {
                dialog(tipObj).show($('#nickname')[0]);
                return false;
            }

        });
        $('.personal .namebtn').on("click", function () {
            updateUserInfoUc("是否确定绑定收款人姓名", "sn")
        });
        $(".personal .embtn").on("click", function () {
            $('.historyMenu li[data-type=emails]').trigger('click')
        });
        $(".personal .casePassword .btn").on("click", function () {
            $('.historyMenu li[data-type=capitalPw]').trigger('click')
        });
        $(".personal .loginPassword .btn").on("click", function () {
            $('.historyMenu li[data-type=password]').trigger('click')
        });
        $(".personal .emilLock .btn").on("click", function () {
            $(".historyMenu li[data-type=emails]").trigger("click");
        });
        $(".personal .mibQuestion .btn").on("click", function () {
            $('.historyMenu li[data-type=mib]').trigger('click')
        });
    },
    /*操作个人资料方法*/
    personalFn: function() {
        return this.fnPersonal();
    },
    fnPersonal: function () {
        Api.personFile(fn => {
            if (fn == "-1") {
                $(".loginlnk").trigger("click");
                return false;
            }
            let data = fn.result;
            let d = data.userInfo;
            if (data.sn && data.sn != "") {
                $(".personal #sn").val(data.sn).attr("disabled");
                $(".personal .onName").hide()
            } else {
                $(".personal #sn").val("").removeAttr("disabled");
                $(".personal .onName").show()
            }
            if (d) {
                const lPassword = {
                    "1": "弱",
                    "2": "中",
                    "3": "强"
                };
                //判断资金密码
                if (d.payPwd && d.payPwd != null) {
                    $(".casePassword .caseSn").text("已设置");
                    if (d.passwordSecurity && d.passwordSecurity != "") {
                        $(".casePassword .tip").css("visibility", "visible");
                        $(".casePassword .tip em").text(lPassword[d.passwordSecurity]);
                    } else {
                        $(".casePassword .tip").css("visibility", "hidden");
                        $(".casePassword .tip em").text("");
                    }
                    $(".casePassword .btn").text("修改设置").attr("caseOk", "0")
                } else {
                    $(".casePassword .caseSn").text("未设置");
                    $(".casePassword .tip").css("visibility", "hidden");
                    $(".casePassword .tip em").text("");
                    $(".casePassword .btn").text("立即设置").attr("caseOk", "1")
                }
                //判断登陆密码
                $(".loginPassword .loginSn").text("已设置");
                if (d.passwordSecurity && d.passwordSecurity != "") {
                    $(".loginPassword .t").css("visibility", "visible");
                    $(".loginPassword .t em").text(lPassword[d.passwordSecurity]);
                } else {
                    $(".loginPassword .t").css("visibility", "hidden");
                    $(".loginPassword .t em").text("");
                }


                //判断邮箱绑定
                if (d.securityEmail && d.securityEmail != null) {
                    $(".personal .emalSn").html(d.securityEmail).show();
                    $(".personal .embtn").hide();
                    $('.emilLock .elocksn').text("已设置");
                    $(".emilLock .btn a").html("修改邮箱").attr("emilOk", "0")
                } else {
                    $(".personal .emalSn").html("").hide();
                    $(".personal .embtn").show();
                    $('.emilLock .elocksn').text("未设置");
                    $(".emilLock .btn a").html("立即设置").attr("emilOk", "1")
                }
                //密保问题
                if (d.securityQuestion && d.securityQuestion != null) {
                    $(".mibQuestion .mibSn").text("已设置");
                    $(".mibQuestion .btn a").html("修改密保").attr("emilOk", "0")
                } else {
                    $(".mibQuestion .mibSn").text("未设置");
                    $(".mibQuestion .btn a").html("立即设置").attr("emilOk", "1")
                }
            }


        });

        $("#userInfo").validate({
            rules: {
                qq: {
                    digits: true,
                    minlength: 5
                }
            },
            messages: {
                qq: {
                    digits: "QQ为大于5位的数字",
                    minlength: "QQ为大于5位的数字"
                }
            }
        });
    },
    /*登陆密码*/
    passwordFn: function() {
        return this.fnPassword();
    },
    fnPassword: function () {
        Api.updatePassword(x => {
            if (x.code == "0") {
                var data = x.result;
                $(".password input[name=token]").val(data.token);
                $(".password input[name=cn]").val(data.cn);
            };
        });

        function zhongruanqiang() {
            if ($("#pwd_Medium").text() == "弱") {
                return 1
            } else if ($("#pwd_Medium").text() == "中") {
                return 2
            } else if ($("#pwd_Medium").text() == "强") {
                return 3
            }
        };
        $(".password #userInfo-spd").validate({
            // debug:true,
            rules: {
                oldPassword: {
                    required: true,
                    sobet_password: true
                },
                newPassword: {
                    required: true,
                    sobet_password: true
                },
                confirm_password: {
                    required: true,
                    sobet_password: true,
                    equalTo: "#newPassword"
                }
            },
            messages: {
                oldPassword: {
                    required: "请输入密码"
                },
                newPassword: {
                    required: "请输入密码"
                },
                confirm_password: {
                    required: "请确认新密码",
                    equalTo: "两次密码输入不一致"
                }
            },
            errorPlacement: function (error, element) {
                element.parent().parent().append(error);
            },
            submitHandler: function (form) {
                var me = this;
                $('.password #userInfo-spd').find('input[type=password]').each(function () {
                    var val = $(this).val();
                    var pwdval = md5(val);
                    $(this).val(pwdval);
                    //Des加密传值
                    var desPwd = strEnc(val, '1', '2', '3');
                    $('.password #desPassword').val(desPwd);
                });

                //$(this).attr("disabled",true);
                $('.password .btn').addClass('loading').val('操作中…').attr("data-value", "clicked").attr("disabled", "disabled");
                clickCheck1($(".password .btn"), me.reNum);
                var data = {
                    cn: $(".password #cn").val(),
                    token: $(".password #token").val(),
                    passwordSecurity: zhongruanqiang(),
                    desPassword: $(".password #desPassword").val(),
                    oldPassword: $(".password #oldPassword").val(),
                    newPassword: $(".password #newPassword").val(),
                    confirm_password: $(".password #confirm_password").val()
                };
                /*    cn:orange01
                    token:1504799459560lPAh0AOYTJ
                    passwordSecurity:2
                    desPassword:C1BB5938DF9F2190CBFDB95EA6B7A89C
                    oldPassword:90f4b36fd34c5628e0b8b9623bcaff2a
                    newPassword:62c8ad0a15d9d1ca38d5dee762a16e01
                    confirm_password:62c8ad0a15d9d1ca38d5dee762a16e01*/
                me.reNum = true;
                // var data=$(form).serialize();
                function timemiss(a) {
                    var time = a;
                    var cler = setInterval(function () {
                        if (time <= 0) {
                            $(".loginlnk").trigger("click");
                            clearInterval(cler);
                            return false
                        }
                        $(".passWordDialog .nums").text(time--)
                    }, 1000);
                    return time
                };

                function rebtn() {
                    $(".loginlnk").trigger("click");
                }

                Api.updatePasswordAjax(data, x => {
                    if (x.code == "0" || x.code == "-2") {
                        let comment = "<div style='margin: 0 auto;text-align: center;line-height: 100px'>密码修改成功，将在<em class='nums' style='color: red'>" + timemiss(5) + "</em>秒后返回首页或点击<a class='btnindex' style='margin-left: 12px;color:blue'>返回首页</a></div>"
                        let d = dialog({
                            skin: "passWordDialog",
                            width: 360,
                            height: 100,
                            content: comment
                        });
                        d.showModal();
                        $(".passWordDialog .btnindex").click(() => {
                            $(".loginlnk").trigger("click");
                            return false
                        });
                    } else {
                        let pwdVal = x.msg;
                        $(".password .updatePwd-tip div").text(pwdVal);
                        $(".password #desPassword").val("");
                        $(".password #oldPassword").val("");
                        $(".password #newPassword").val("").parent(".input-wrap").nextAll().hide();
                        $(".password #confirm_password").val("");
                        me.reNum = false;
                        $('.password .btn').removeClass(' loading').val('提交修改').removeAttr("data-value").removeAttr("disabled");
                        $(".password .updatePwd-tip div").removeClass("bounceOut animated").addClass("bounceIn animated").one("webkitANimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                            $(this).removeClass("bounceIn animated");
                        });
                        Api.updatePassword(x => {
                            if (x.code == "0") {
                                var data = x.result;
                                $(".password input[name=token]").val(data.token);
                            };
                        });
                    }
                })
            }
        });
    },
    /*电子邮箱*/
    emailsFn: function() {
        return this.fnElimas();
    },
    fnElimas: function () {
        //请求接口是否绑定邮箱
        var me = this;
        Api.upEmail(x => {
            if (x.code == 0) {
                $(".emails .emailLinks").show();
                $(".emails .emailLinks p").eq(1).text(x.result.msg);
                $(".emails .emailsinfo").hide();
                $(".emails .no-bottom").hide()
            } else if (x.code == 1) {
                $(".emails .emailLinks").hide();
                $(".emails .emailsinfo").show();
                $(".emails .no-bottom").show()
            }
        });
        var url = "/sobet/userInfo/bindEmailAjax";
        $(".bind-email .emailsinfo").validate({
            //debug:true,
            rules: {
                email: {
                    required: true,
                    email: true,
                    remote: {
                        url: url,
                        type: "post", //数据发送方式
                        dataType: "text", //接受数据格式
                        data: { //要传递的数据
                            action: "check",
                            userName: function () {
                                return $(".welcome .username").text();
                            }
                        }
                    }
                }
            },
            messages: {
                email: {
                    required: "请输入邮箱",
                    email: "请输入正确的邮箱"
                }
            },
            errorPlacement: function (error, element) {
                element.parent().parent().append(error);
            },
            submitHandler: function () {
                $(".emails .btn").addClass("loading").attr("data-value", "clicked");

                if (!clickCheck1($(".emails .btn"), me.reNum)) {
                    return
                }
                var d = {
                    action: "sendEmail",
                    email: $(".emails #email").val()
                };
                me.reNum = true;
                Api.bindEmailAjax(d, pre => {
                    if (pre.code == 0) {
                        var tip_unre = dialog({
                            align: "bottom",
                            padding: "15px 20px",
                            skin: 'sobet'
                        });
                        tip_unre.content("邮件已发送到该邮箱，请前去验证");
                        tip_unre.showModal();
                        me.reNum = false;
                        $(".emails .btn").removeClass("loading").removeAttr("data-value").attr("disabled", "disabled");
                        setTimeout(() => {
                            tip_unre.close().remove();
                            $(".historyMenu li[data-type=emails]").trigger("click");
                        }, 5000);
                    } else if (pre.code == -1) {
                        var tip_unre = dialog({
                            align: "bottom",
                            padding: "15px 20px",
                            skin: 'sobet'
                        });
                        $(".emails .btn").removeClass("loading").removeAttr("data-value");
                        tip_unre.content("服务异常");
                        tip_unre.show($(".emails .btn")[0]);
                        setTimeout(function () {
                            tip_unre.close().remove();
                            me.reNum = false;
                        }, 3000);
                    }
                })
            }
        });
    },
    /*密保问题*/
    mibFn: function() {
        return this.setMib();
    },
    setMib: function () {
        let me = this;
        let cn = "";
        var qid = "";
        let q = ['您的出生地', '您父亲的名字', '您母亲的名字', '您小学的校名', '您初中的校名', '您高中的校名', '您大学的校名'];
        Api.preChangeQueryAjax({
            type: "security"
        }, data => {
            const d = data.result;
            if (data.code == 0) {
                $(".mib .firstOne").show();
                $(".mib #userInfo").show();
                $(".mib .no-bottom").show();
                $(".mib .firstTwo").hide();
                $(".mib .emailLinks").hide();
            } else if (data.code == -2) {
                $(".mib #userInfo").hide();
                $(".mib .no-bottom").hide();
                $(".mib .emailLinks").show();
                let dobj = {
                    action: "securityPage",
                    cn: $(".password #cn").val() == cn ? cn : $(".password #cn").val()
                };
                Api.securityQuestionAjaxGET(dobj, d => {
                    let data = d.result;
                    cn = data.cn;
                    qid = data.userInfo.securityQuestion;
                    $(".mib #userInfo input[name=oldQuestion]").val(data.userInfo.securityQuestion);
                    $('.mib .firstTwo #qSpan').html(q[data.userInfo.securityQuestion - 1] + '?');
                });
                $(".mib .emailLinks").show().find(".change-btn").off("click").on("click", () => {
                    $(".mib #userInfo").show();
                    $(".mib .firstTwo").show();
                    $(".mib .emailLinks").hide();
                    $(".mib .firstOne").hide();
                    $(".mib .no-bottom").show();
                });
            } else {
                $(".mib #userInfo").hide();
                $(".mib .firstOne").hide();
                $(".mib .firstTwo").hide();
                $(".mib .emailLinks").hide();
                $(".mib .no-bottom").hide()
            }
        });

        $(document).ready(function () {
            $(".mib #userInfo").validate({
                rules: {
                    answer: {
                        required: true
                    },
                    oldQuestion: {
                        required: true
                    },
                    oldAnswer: {
                        required: true
                    },
                    question: {
                        required: true
                    }
                },
                messages: {
                    answer: {
                        required: "请输入密保答案"
                    },
                    oldQuestion: {
                        required: "请输入当前密保答案"
                    },
                    oldAnswer: {
                        required: "请输入当前密保答案"
                    },
                    question: {
                        required: "请选择密保问题"
                    }
                },
                errorPlacement: function (error, element) {
                    element.parent().append(error);
                },
                submitHandler: function (form) {
                    $(".mib .btn").addClass('loading').val('操作中…').attr("data-value", "clicked").attr("disabled", "disabled");

                    clickCheck1($(".mib .btn"), me.reNum);
                    me.reNum = true;
                    var data = {};
                    if ($(".mib .firstOne").css("display") == "block") {
                        data.cn = cn;
                        data.action = "commit";
                        data.question = $(".mib .firstOne select[name=question]").val();
                        data.answer = $(".mib .firstOne input[name=answer]").val();
                    } else {
                        data.cn = cn;
                        data.action = "commit";
                        data.question = $(".mib .firstTwo select[name=question]").val();
                        data.answer = $(".mib .firstTwo input[name=answer]").val();
                        data.oldQuestion = $(".mib #userInfo input[name=oldQuestion]").val();
                        data.oldAnswer = $(".mib .firstTwo input[name=oldAnswer]").val();
                    }
                    Api.securityQuestionAjax(data, c => {
                        if (c.code == 0) {
                            var tip_unre = dialog({
                                align: "bottom",
                                padding: "15px 20px",
                                skin: 'sobet'
                            });
                            tip_unre.content("设置成功");
                            tip_unre.show();
                            setTimeout(() => {
                                $('.mib .btn').removeClass(' loading').val('提交修改').removeAttr("data-value").removeAttr("disabled");
                                tip_unre.close();
                                me.reNum = false;
                                $('.historyMenu li[data-type=mib]').trigger('click');
                            }, 2000);
                        } else {
                            $('.mib .btn').removeClass(' loading').val('提交修改').removeAttr("data-value").removeAttr("disabled");
                            $(".mib .firstTwo input[name=oldAnswer]").val("");
                            $(".mib .firstTwo select[name=question]").val("");
                            $(".mib .firstTwo input[name=answer]").val("");
                            $(".mib .updatePwd-tip div").html(c.msg);
                            me.reNum = false;
                            $(".mib .updatePwd-tip div").removeClass("bounceOut animated").addClass("bounceIn animated").one("webkitANimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                $(this).removeClass("bounceIn animated");
                                //
                            });
                        }
                    })
                }
            });

        });
    },
    /*资金密码*/
    capitalPwFn: function() {
        return this.setPsaaword();
    },
    setPsaaword: function () {

        let me = this;
        Api.preChangeQueryAjax({
            type: "paypassword"
        }, data => {
            const d = data.result;
            if (data.code == 0) {
                $(".capitalPw .emailLinks").show().siblings().hide();
                $(".capitalPw .emailLinks .mas").text(d.message);
                $(".capitalPw .change-btn").off("click").on("click", () => {
                    me.initcapitalPw()
                    $(".capitalPw .emailLinks").hide().siblings().show();
                    $(".capitalPw .login").find("em").text("旧资金密码").attr("hit", "old");
                    $(".capitalPw .login").find(".oldIn").text("请输入当前资金密码")
                })
            } else if (data.code == -2) {
                $(".capitalPw .emailLinks").hide().siblings().show();
                $(".capitalPw .login").find("em").text("登陆密码").attr("hit", "login");
                $(".capitalPw .login").find(".oldIn").text("请输入登录密码")
            } else {
                $(".capitalPw .emailLinks").hide().siblings().hide();
            }
        });
        $(".capitalPw #userInfo").validate({
            rules: {
                oldPassword: {
                    required: true,
                    sobet_password: true
                },
                newPassword: {
                    required: true,
                    sobet_password: true
                },
                confirm_password: {
                    required: true,
                    sobet_password: true,
                    equalTo: ".capitalPw #newPassword"
                }
            },
            messages: {
                oldPassword: {
                    required: "请输入密码"
                },
                newPassword: {
                    required: "请输入密码"
                },
                confirm_password: {
                    required: "请确认新密码",
                    equalTo: "两次密码输入不一致"
                }
            },
            errorPlacement: function (error, element) {
                element.parent().parent().append(error);
            },
            submitHandler: function (form) {
                $(".capitalPw .btn").addClass("loading").attr("data-value", "clicked").attr("disabled", "disabled");
                let p = {};
                $('.capitalPw #userInfo').find('input[type=password]').each(function () {
                    var val = $(this).val();
                    $(this).val(md5(val));
                });
                clickCheck1($(".mib .btn"), me.reNum);
                me.reNum = true;
                let hit = $(".capitalPw .login").find("em").attr("hit");
                if (hit === "login") {
                    p.loginPassword = $(".capitalPw input[name=oldPassword]").val();
                    p.payPassword = $(".capitalPw input[name=newPassword]").val();
                    p.confirm_password = $(".capitalPw input[name=confirm_password]").val();
                    Api.setPayPasswordAjax(p, d => {
                        if (d.code == "0") {
                            var tip_unre = dialog({
                                align: "bottom",
                                padding: "15px 20px",
                                skin: 'sobet'
                            });
                            tip_unre.content("设置成功");
                            tip_unre.show();
                            $(".capitalPw input[name=oldPassword]").val("");
                            $(".capitalPw input[name=newPassword]").val("");
                            $(".capitalPw input[name=confirm_password]").val("");
                            setTimeout(() => {
                                $('.capitalPw .btn').removeClass(' loading').val('提交修改').removeAttr("data-value").removeAttr("disabled");
                                $('.historyMenu li[data-type=capitalPw]').trigger('click');
                                tip_unre.close();
                                me.reNum = false;
                            }, 2000);
                        } else if (d.code == "-1") {
                            $('.capitalPw .btn').removeClass(' loading').val('提交修改').removeAttr("data-value").removeAttr("disabled");
                            $(".capitalPw input[name=oldPassword]").val("");
                            $(".capitalPw input[name=newPassword]").val("");
                            $(".capitalPw input[name=confirm_password]").val("");
                            $(".capitalPw .updatePwd-tip div").html(d.msg);
                            me.reNum = false;
                            $(".capitalPw .updatePwd-tip div").removeClass("bounceOut animated").addClass("bounceIn animated").one("webkitANimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                $(this).removeClass("bounceIn animated");
                                $(".capitalPw .updatePwd-tip div").html("")
                            });
                        } else {
                            me.reNum = true;
                        }

                    })
                } else if (hit === "old") {
                    p.oldPassword = $(".capitalPw input[name=oldPassword]").val();
                    p.newPassword = $(".capitalPw input[name=newPassword]").val();
                    p.confirm_password = $(".capitalPw input[name=confirm_password]").val();
                    Api.updatePayPassword(p, d => {
                        if (d.code == "0") {
                            var tip_unre = dialog({
                                align: "bottom",
                                padding: "15px 20px",
                                skin: 'sobet'
                            });
                            tip_unre.content("设置成功");
                            tip_unre.show();
                            setTimeout(() => {
                                $('.capitalPw .btn').removeClass(' loading').val('提交修改').removeAttr("data-value").removeAttr("disabled");
                                $('.historyMenu li[data-type=capitalPw]').trigger('click');
                                tip_unre.close();
                                me.reNum = false;
                            }, 2000);
                        } else if (d.code == "-1") {
                            $('.capitalPw .btn').removeClass(' loading').val('提交修改').removeAttr("data-value").removeAttr("disabled");
                            $(".capitalPw input[name=oldPassword]").val("");
                            $(".capitalPw input[name=newPassword]").val("");
                            $(".capitalPw input[name=confirm_password]").val("");
                            me.reNum = false;
                            $(".capitalPw .updatePwd-tip div").html(d.msg);
                            $(".capitalPw .updatePwd-tip div").removeClass("bounceOut animated").addClass("bounceIn animated").one("webkitANimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                $(this).removeClass("bounceIn animated");
                                // $(".capitalPw .updatePwd-tip div").html("")
                            });
                        } else {
                            me.reNum = true;
                        }
                    })
                }

            }
        });
    },
    /*银行卡*/
    bankFn: function() {
        return this.setbank();
    },
    setbank: function () {
        let sn = "";
        Api.cardManageAjax({}, d => {
            let res = d.result;
            cardManage.init();
            if (res.userInfo.sn) {
                sn = res.userInfo.sn;
            }
            $(".bank .cardManage_tip p span").first().html(res.PrePayConfigMap.firstDrawingsAging.value);
            $(".bank .cardManage_tip p span").last().html(res.PrePayConfigMap.nonFirstDrawingsAging.value);
            if (sn != "") {
                $('#account #sn').val(sn).attr('readonly', 'readonly');
            } else {
                $('#account #sn').val(sn).removeAttr("readonly")
            }
        });

    },
    /* 微信号绑定 */
    webindFn: function($webind, types) {
        var query, me = this;
        // $webind = $('.webind');
        $webind.find('.wechat-success').hide();
        $webind.find('.wechat-bind').hide();
        Api.queryWechatBind(function(res) {
            // 充值点击更新微信号，直接跳到绑定页面
            if(window.location.href.split('?')[1]) {
                res.code = 0;
            }
            // 未绑定/重新绑定页面
            if(res.code == 0) {
                // 监控是否绑定
                Api.wechatBindXcode(function(res) {
                    if(res.code == 1) {
                      me.getWechatXcode($webind, res);
                      $webind.find('.wechat-bind').show();
                      me.xcodeClickEvent($webind);
                      me.xcodeValidTimer($webind, res.time || 300);
                      me.queryWechatBindTimer($webind, 3000, types ? {code: $('#xcode').val()} : {});
                    } else {
                      me.tipDialog(res);
                    }
                });
            // 已绑定页面
            } else if(res.code == 1) {
                $webind.find('.wechat-id').html(res.result);
                $webind.find('.wechat-success').show();
                me.changeClickEvent($webind);
            // 异常处理
            } else {
                me.tipDialog(res);
            }
        });
    },
    // 设置验证码及二维码
    getWechatXcode: function($webind, res) {
        $('#xcode').val(res.result);
        $webind.find('.wechat-xcode span').each(function(k, v) {
            $(this).html(res.result[k]);
        });
        Api.getWachatBindInfo(function(res) {
            if(res.code === 0 && res.url) {
                $webind.find('.wechat-ecode-img').show().attr('src', res.url),
                $webind.find('.wechat-ecode-alt').hide();
                return;
            }
            $webind.find('.wechat-ecode-img').hide().attr('src', ''),
            $webind.find('.wechat-ecode-alt').show();
        });
    },
    tipDialog: function(res, timer) {
        var tip = dialog({
            content: res.msg,
            align: "top",
            padding: "15px 20px",
            skin: 'sobet'
        });
        tip.show();
        if(timer) 
        setTimeout(function() {
            tip.close();
        }, timer || 2000);  
    },
    // 监控是否绑定微信
    queryWechatBindTimer: function($webind, timer, q) {
        if(this.query) window.clearInterval(this.query);
        var me = this, d, timeStr;
        this.query = window.setInterval(function() {
            Api.queryWechatBind(function(res) {
                if(res.code == 1) {
                    $webind.find('.wechat-bind').hide();
                    $webind.find('.wechat-id').html(res.result);
                    $webind.find('.wechat-success').show();
                    me.changeClickEvent($webind);
                    window.clearInterval(me.query);
                    window.clearInterval(me.validTime);
                    window.location.hash = 'webind';
                } else if(res.code == -1) {
                    me.tipDialog(res);
                    window.clearInterval(me.query);
                    window.clearInterval(me.validTime);
                }
            }, q || {});
      }, timer || 3000);
    },
    // 验证码有效期
    xcodeValidTimer: function($webind, totalTime) {
        if(this.validTime) window.clearInterval(this.validTime);
        var time, timeStr, me = this;
        time = new Date(totalTime * 1000);
        var h, m, s;
        h = time.getUTCHours() < 10 ? ('0' + time.getUTCHours()) : time.getUTCHours();
        m = time.getMinutes() < 10 ? ('0' + time.getMinutes()) : time.getMinutes();
        s = time.getSeconds() < 10 ? ('0' + time.getSeconds()) : time.getSeconds();
        timeStr = (h + ':' + m + ':' + s).replace(/^(00\:)/, RegExp.$1, '').replace(/[^0-9:]/g, '');
        $('.wechat-xcode-validtime').html(timeStr);
        this.validTime = window.setInterval(function() {
            var i;
            time = $('.wechat-xcode-validtime').html().split(':').reverse();
            for(i=0; i<time.length; i++) {
                if(time[i] !== '00') {
                    time[i] = window.parseInt(time[i], 10) - 1;
                    time[i] = time[i] < 10 ? '0' + time[i] : time[i]; 
                    timeStr = time.reverse().join(':');
                    $('.wechat-xcode-validtime').html(timeStr);
                    break;
                } else if(time[i] === '00') {
                    if(i===0 || i===1) time[i] = '59';
                }
                if(!/[1-9]/g.test(timeStr)) {
                    window.clearInterval(me.validTime);
                    $webind.find('.wechat-xcode').trigger('click');
                    break;
                }
            }
        }, 1000);
    },
    // 点击验证码
    xcodeClickEvent: function($webind) {
        var me = this;
        $webind.find('.wechat-xcode').off('click').on('click', function() {
            Api.wechatBindXcode(function(res) {
                if(res.code == 1) {
                    me.getWechatXcode($webind, res);
                    me.queryWechatBindTimer($webind, 3000, {code: $('#xcode').val()});
                } else {
                    me.tipDialog(res);
                }
                me.xcodeValidTimer($webind, res.time || 300);
            });
        });
    },
    // 点击更换微信号
    changeClickEvent: function($webind) {
        var me = this;
        $webind.find('.wechat-change-btn').off('click').on('click', function() {
            me.xcodeClickEvent($webind);
            Api.wechatBindXcode(function(res) {
                if(res.code == 1) {
                    $webind.find('.wechat-success').hide();
                    me.getWechatXcode($webind, res);
                    $webind.find('.wechat-bind').show();
                    me.xcodeValidTimer($webind, res.time || 300);
                    me.queryWechatBindTimer($webind, 3000, {code: $('#xcode').val()});
                } else {
                    me.tipDialog(res);
                }
            });
        });
    },
    /* 初始化tab */
    initTab: function() {
        this.initelimas();
        this.initeamil();
        this.initmib();
        this.initcapitalPw();
        this.initsetPsaaword();
        this.initWechat();
    },
    initelimas: function () {
        $(".emails #email").val("").parent(".input-wrap").next().hide();

    },
    //初始邮箱
    initeamil: function () {
        var me = this
        $(".emails #email").val("");
        $(".emails #email-error").hide();
        $(".emails .btn").removeClass("loading").removeAttr("data-value");
        me.reNum = false
    },
    //初始化 当前密保都为空
    initmib: function () {
        $(".mib .firstOne select[name=question]").val("").next().hide();
        $(".mib .firstOne input[name=answer]").val("").next().hide();
        $(".mib #userInfo input[name=oldQuestion]").val("").next().hide();
        $(".mib .firstTwo input[name=oldAnswer]").val("").next().hide();
        $(".mib .firstTwo select[name=question]").val("").next().hide();
        $(".mib .firstTwo input[name=answer]").val("").next().hide();
        $(".mib .updatePwd-tip div").html("")
        $(".mib #userInfo").hide()
        $(".mib .emailLinks").hide();
        $(".mib .firstOne").hide();
        $(".mib .firstTwo").hide();
        $(".mib .no-bottom").hide();
    },
    //初始化 资金密码
    initcapitalPw: function () {
        $(".capitalPw .updatePwd-tip div").html("");
        $(".capitalPw .emailLinks").hide().siblings().hide();
        $(".capitalPw input[type=password]").val("").parent(".input-wrap").next().hide()
    },
    //初始化 资金密码
    initsetPsaaword: function () {
        $(".password input[type=password]").val("").parent(".input-wrap").nextAll().hide()
    },
    // 微信绑定初始
    initWechat: function() {
        this.query && window.clearInterval(this.query);
        this.validTime && window.clearInterval(this.validTime);
    }

};
var cardManage = cardManage || {};
cardManage = {
    // stateOption : 1-没有设置资金密码    2-添加银行卡界面   3-已经设置了资金密码   4-银行卡验证    5-绑定的银行卡不能超过5张
    // 绑卡逻辑
    payPwdExist: false,
    init: function () {
        var me = this;
        me.checkPayPwdExist();
        me.initList();
        me.initValidate();
        me.initEvent();
    },
    initEvent: function () {
        var me = this;
        $("#addCards .addsection").on("click", function () {
            if ($(this).hasClass('section')) {
                return;
            }
            if ($('#addCards .section').length == 5) {
                normalTip("绑定的银行卡不能超过5张");
            } else {
                if (me.payPwdExist) {
                    me.showCheckPayPwd();
                } else {
                    me.showSetPayPwd();
                }
            }
        });
    },
    initList: function () {
        //初始化银行卡列表
        $.ajax({
            type: "GET",
            url: ctx + "/api/userBankCheck/queryResult",
            dataType: 'json',
            success: function (data) {
                var retData = data.retData;
                if (retData != null) {
                    for (var i = 0; i < retData.length; i++) {
                        var dom = '<h3 id=' + retData[i].bankAllas + '>' +
                            '<span><i></i></span>' + '</h3>' +
                            '<p class="cardName">' +
                            '<span>' + retData[i].bankNameZH + '</span>' + '</p>' +
                            '<p>' +
                            '<input type="text" disabled class="cardNo" id="cardNo" value=' + retData[i].bankCardNo + '>' +
                            '</p>' +
                            '<p>' +
                            '<label>持卡人：</label><span class="cardSn">' + retData[i].sn + '</span>' +
                            '</p>';
                        var e = $("#addCards").find('div').eq(i);
                        e.removeClass('addsection').addClass('section').html(dom);
                    }
                }
            }
        });
    },

    initValidate: function () {
        //绑定资金密码验证
        $("#bankPassWork").validate({
            rules: {
                loginPassword: {
                    required: true,
                    sobet_password: true
                },
                payPassword: {
                    required: true,
                    sobet_password: true
                },
                confirm_password: {
                    required: true,
                    sobet_password: true,
                    equalTo: "#bankPassWork #password"
                }
            },
            messages: {
                loginPassword: {
                    required: "请输入密码"
                },
                payPassword: {
                    required: "请输入密码"
                },
                confirm_password: {
                    required: "请确认新密码",
                    equalTo: "两次密码输入不一致"
                }
            },
            errorPlacement: function (error, element) {
                element.parent().parent().append(error);
            }
        });

        //验证资金密码
        $("#payPasswordValidForm").validate({
            rules: {
                payPassword: {
                    required: true,
                    remote: {
                        url: "/sobet/userInfo/validatePayPassword",
                        type: "post", //数据发送方式
                        dataType: "json", //接受数据格式
                        data: { //要传递的数据
                            payPassword: function () {
                                return md5($("#payPasswordValidForm #password1").val());
                            }
                        }
                    }
                }
            },
            messages: {
                payPassword: {
                    required: "请输入资金密码"
                }
            },
            errorPlacement: function (error, element) {
                element.parent().parent().append(error);
            }
        });

        //绑卡
        $("#account").validate({
            rules: {
                sn: {
                    required: true,
                    sobet_sn: true,
                    sobet_sn_length: true
                },
                bankCardNo: {
                    required: true,
                    sobet_cardno_: true,
                    remote: {
                        url: ctx + "/pay/validateBankCardNo",
                        type: "post", //数据发送方式
                        dataType: "json", //接受数据格式
                        data: { //要传递的数据
                            cardNo: function () {
                                return $("#account #bankCardNo").val().replace(/\s/ig, "");
                            }
                        },
                    }
                },
                bankAllas: {
                    required: true
                },
                province: {
                    required: true
                },
                city: {
                    required: true
                },
                place: {
                    required: true
                }
            },
            messages: {
                sn: {
                    required: "请输入收款账户姓名"
                },
                bankCardNo: {
                    required: "请输入收款账号",
                    remote: "卡号存在"
                },
                bankAllas: {
                    required: "请选择开户银行"
                },
                province: {
                    required: "请输入开户行所在省份"
                },
                city: {
                    required: "请输入开户行所在城市"
                },
                place: {
                    required: "请输入开户网点详细地址"
                }
            },
            errorPlacement: function (error, element) {
                element.parent().parent().append(error);
            },
            submitHandler: $.noop
        });
    },
    checkPayPwdExist: function () {
        var me = this;
        $.ajax({
            type: "GET",
            url: ctx + "/api/payPwdCheck/existResult",
            dataType: 'json',
            success: function (data) {
                if (data.retCode == 0) {
                    if (data.message == '1') {
                        me.payPwdExist = true;
                    } else {
                        me.payPwdExist = false;
                    }
                } else {
                    normalTip("请求数据出错");
                }
            }
        });
    },

    showSetPayPwd: function () {
        const a = dialog({
            id: 'payPasswordSet',
            skin: 'payPasswordSet',
            content: $('#bankPassWork'),
            height: '280px',
            width: '440px',
            title: '请先设置您的资金密码',
            padding: '0px 20px',
            onclose: function () {
                $('#bankPassWork input').val('');
                $('#bankPassWork span.error').hide();
            }
        });
        a.showModal();
    },

    setPayPassword: function () {
        var me = this;
        if ($("#bankPassWork").valid()) {
            $.ajax({
                type: "GET",
                url: ctx + "/api/payPwdCheck/setResult",
                dataType: 'json',
                data: {
                    loginPassword: md5($('.payPasswordSet #bankPassWork #loginPassword').val()),
                    payPassword: md5($('.payPasswordSet #bankPassWork #password').val())
                },
                success: function (data) {
                    if (data.retCode == 0) {
                        if (data.message == '1') {
                            normalTip("资金密码设置成功");
                            dialog.get('payPasswordSet').close().remove();
                            me.payPwdExist = true;
                        } else {
                            normalTip("资金密码设置失败");
                        }
                    } else {
                        normalTip(data.message);
                    }
                }
            });
        }
    },

    showCheckPayPwd: function () {
        var content = '<form id="payPasswordValidForm" method="post" action="" novalidate="novalidate"> <div class="row"> <div class="input-wrap mragin-top-10 mragin-bottom-10"> <label class="pop-label">资金密码</label>' +
            '<input id="password1" onkeydown="if(event.keyCode==13)return false" name="payPassword" type="password" placeholder="长度6~16位，包含数字、字母"/> </div> </div> <div class="row submit-dom clearfix"><button type="button" class="btn" onclick="cardManage.checkPayPwd();">验证 </button></div></form> '
        var d = dialog({
            id: 'checkPayPwd',
            skin: 'checkPayPwd',
            content: $("#payPasswordValidForm"),
            height: '180px',
            width: '440px',
            title: '请先验证资金密码',
            padding: '0px 20px',
            onclose: function () {
                $('#payPasswordValidForm input').val('');
                $('#payPasswordValidForm span.error').hide();
            }
        });
        d.showModal();
    },

    checkPayPwd: function () {
        var me = this;
        if ($("#payPasswordValidForm").valid()) {
            $.ajax({
                type: "GET",
                url: "/sobet/api/payPwdCheck/authResult",
                dataType: 'json',
                data: {
                    payPassword: md5($('#payPasswordValidForm #password1').val())
                },
                success: function (data) {
                    if (data.retCode == 0) {
                        if (data.message == '1') {
                            dialog.get('checkPayPwd').close();
                            me.showAddBankCard();
                        } else {
                            normalTip("资金密码验证失败");
                        }
                    } else {
                        normalTip("请求数据出错");
                    }
                }
            });
        }
    },

    showAddBankCard: function () {
        var d = dialog({
            id: 'addBankCard',
            skin: 'addCardDialog',
            content: $('#account'),
            height: '410px',
            width: '440px',
            title: '添加银行卡',
            padding: '20px',
            onclose: function () {
                $('#account input:not(#account #sn)').val('');
                $('#account span.error').hide();
            }
        });
        d.showModal();

        $('#abc').citySelect({
            prov: "北京",
            city: "东城区",
            nodata: "none"
        });
    },

    addBankCard: function () {
        var me = this;
        if ($("#account").valid()) {
            var bankAllas = $('#account #bankAllas option:selected').val();
            var bankCardNo = $('#account #bankCardNo').val();
            var city = $('#account #city option:selected').val();
            var province = $('#account #province option:selected').val();
            var place = $('#account #place').val();
            var sn = $('#account #sn').val();
            if (sn != "") {
                $('#account #sn').attr('readOnly', "readOnly");
            }

            if (sn != "" && bankCardNo != "" && bankAllas != "" && place != "") {
                $.ajax({
                    type: "GET",
                    url: "/sobet/api/userBankCheck/addResult",
                    data: {
                        bankAllas: bankAllas,
                        bankCardNo: bankCardNo,
                        city: city,
                        country: '',
                        county: '',
                        province: province,
                        place: place,
                        sn: sn
                    },
                    dataType: 'json',
                    success: function (data) {
                        if (data.retCode == 0) {
                            if (data.message == '1') {
                                dialog.get('addBankCard').close().remove();
                                normalTip("添加银行卡成功");
                                me.initList();
                            } else {
                                normalTip("添加银行卡失败");
                            }
                        } else {
                            normalTip(data.message);
                        }
                    }
                });
            }
        }
    }
};

function cursor(a) {
    var $i = $($(a).parent().parent().find('i')[0]);
    $i.addClass('on');
}

function updateUserInfoUc(msg, id) {
    var btn = $('.personal #' + id);
    var realVal = $('.personal #' + id).val();
    var tips = $("#usertip");
    var regex = /^[·{0,}\u4E00-\u9FA5]+$/;
    if (!regex.test(realVal)) {
        errTip('只能是中文', btn);
        return false;
    } else if (realVal.length > 20) {
        errTip('输入长度过长，不超过20个字', btn);
        return false;
    };
    var d = dialog({
        title: '请确认：',
        content: '' + msg + '',
        cancelValue: '取消',
        cancel: function () {
            d.remove().close();
        },
        okValue: '确定',
        ok: function () {
            var url = "/sobet/userInfo/updateUserInfo?";
            if (id == 'sn') {
                url += 'sn=' + encodeURI(encodeURI($('#' + id).val())); //需要加密两次才能解决乱码
            } else {
                url += 'nickName=' + encodeURI(encodeURI($('#' + id).val()));
            }
            $.ajax({
                url: url,
                type: "post",
                dataType: "json",
                success: function (data) {
                    if (data.code == '0') {
                        var showText = data.result.sn;
                        if (id == 'sn') {
                            errTip('绑定成功！', btn);
                            $('.personal #' + id).val(showText).attr("disabled", "disabled");
                            /*.next().find("a").remove();*/
                        } else if (id == 'nickName') {
                            errTip('绑定成功！', btn);
                        }
                        $(".onName").hide();
                    } else {
                        errTip('资料绑定失败', btn);
                        $(".onName").show();
                    }
                }
            });

        }
    });
    d.showModal();
}