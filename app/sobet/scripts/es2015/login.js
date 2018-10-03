var Login = Login || {};

Login = {
    loaded: -1,
    bestLine: false,
    timeArray: [],
    lineArray: [
        "https://www.mcgame998.net", "https://www.mcgame998.com", "https://www.mochen999.net",
        "https://www.mochen999.com", "https://www.mochencards.com", "https://www.volocn.com",
        "https://www.whbman.com", "https://www.nxjk99.com", "https://wb.whbman.com",
        "https://www.mcallin.com", "https://wb.volocn.com", "https://mc.xxgstz.com",
        "https://mc.lszlzz.com", "https://www.mochenpoker.com", "https://mc.yirongmi.com",
        "https://mm.whbman.com", "https://mc.jhshjx.com", "https://www.jhshjx.com",
        "https://www.mochencards.com", "https://www.szhscl.com", "https://www.mochen5858.com", 
        "https://www.mochenmoney.com"
    ],
    httpsLine: [
        "https://www.mcgame998.net", "https://www.mcgame998.com", "https://www.mochen999.net",
        "https://www.mochen999.com", "https://www.mochencards.com", "https://www.volocn.com",
        "https://www.whbman.com", "https://www.nxjk99.com", "https://wb.whbman.com",
        "https://www.mcallin.com", "https://wb.volocn.com", "https://mc.xxgstz.com",
        "https://mc.lszlzz.com", "https://www.mochenpoker.com", "https://mc.yirongmi.com",
        "https://mm.whbman.com", "https://mc.jhshjx.com", "https://www.jhshjx.com",
        "https://www.mochencards.com", "https://www.szhscl.com", "https://www.mochen5858.com", 
        "https://www.mochenmoney.com"
    ],
    errorLineArray: [],

    init: function () {
        var me = this;
        me.getSlides();
        me.initLogin();
        // me.startSpeedTest();
    },

    initLogin: function () {
        var me = this;

        //登录表单操作[START]
        var loginf = $('.login');
        var nowlgbtn = loginf.find('.login-btn .btn');

        var usrinput = loginf.find('input[name="user_name"]');
        var pwdinput = loginf.find('input[name="password"]');
        var codeinput = loginf.find('input[name="code"]');
        var error = loginf.find('.login-msg');
        var errorMsg = error.find('span');
        var verifycode = loginf.find('img.verifycode');

        loginf.unbind('keypress').on('keypress', function (e) {
            var code = e.keyCode ? e.keyCode : e.which;
            if (code === 13) {
                nowlgbtn.trigger('click');
            }
        });

        verifycode.click(function () {
            verifycode.attr('src', User.sso + '/imageCode?date=' + new Date());
            codeinput.val('');
        }).trigger('click');

        //验证码
        var check = true;

        usrinput.blur(function () {
            if ($(this).val() == '') {
                errorMsg.html('请输入用户名');
                error.show();
                check = false;
            } else {
                error.hide();
                check = true;
            }
        });

        pwdinput.blur(function () {
            if (check) {
                if ($(this).val() == '') {
                    errorMsg.html('请输入密码');
                    error.show();
                    check = false;
                } else {
                    error.hide();
                    check = true;
                }
            }
        });

        codeinput.blur(function () {
            if (check && loginf.hasClass('show-code')) {
                if ($(this).val() == '') {
                    errorMsg.html('请填写验证码');
                    error.show();
                    check = false;
                } else {
                    User.chkVerifyCode('ssoapi', $(this).val(), function (res) {
                        if (typeof res != 'undefined') {
                            if (res.retCode !== '0') {
                                errorMsg.html('验证码错误');
                                error.show();
                                check = false;
                            } else {
                                errorMsg.html('');
                                error.hide();
                                check = true;
                            }
                        }
                    });
                }
            }
        });

        nowlgbtn.click(function () {

            nowlgbtn.attr('disabled', 'disabled');

            setTimeout(function() {
                nowlgbtn.removeAttr('disabled');
            }, 2000);

            usrinput.blur();
            pwdinput.blur();
            codeinput.blur();

            if (!check) {
                return false;
            }

            var loginparams = {
                backurl: '?',
                context: $('.loginformIndex'),
                name: jQuery.trim(usrinput.val()),
                pwd: pwdinput.val()
            };
            if (loginf.find('.login-btn').hasClass('login-code')) {
                loginparams["capchaCode"] = codeinput.val()
            }

            User.ssoUserLogin(loginparams, function (res) {
                if (res.server && res.server === 'maintenance') { //系统维护提示
                    dialog({
                        content: `${res.tipinfo||`系统维护中，预计${res.time}结束！`}`,
                        button: [{
                            'value': '确定',
                        }],
                    }).showModal();
                    return;
                }
                if (res.code === 0) {
                    localStorage.setItem('singSaveLevel', res.user.singSaveLevel);
                    if (res.user.createTimeStr) {
                        var createTime = res.user.createTimeStr;
                        var date = new Date();
                        var register = parseInt((date.getTime() - createTime) / (1000 * 60 * 60 * 24));
                        localStorage.setItem('registerDate', register);
                    }
                    me.nicknameTip(res.user.cn);
                } else {
                    if (res.code == 2) {
                        if (res.loginFailCount == 1) {
                            errorMsg.html('您输入的密码有误');
                        } else if (res.loginFailCount == 2) {
                            errorMsg.html('您输入的密码有误，连续输错5次密码，账号将被锁定，您还有3次机会');
                        } else if (res.loginFailCount == 3) {
                            errorMsg.html('您输入的密码有误，连续输错5次密码，账号将被锁定，您还有2次机会');
                        } else if (res.loginFailCount == 4) {
                            errorMsg.html('您输入的密码有误，连续输错5次密码，账号将被锁定，您还有1次机会');
                        } else if (res.loginFailCount == 5) {
                            errorMsg.html('该账号已被锁定，请联系客服解锁');
                        }
                    } else {
                        errorMsg.html(res.msg);
                    }
                    error.show();

                    if (res.needCapchaCode) {
                        loginf.find('.login-btn').addClass('login-code');
                    } else {
                        loginf.find('.login-btn').removeClass('login-code');
                    }
                    setTimeout(function () {
                        verifycode.attr('src', User.sso + '/imageCode?date=' + new Date());
                        codeinput.val('');
                    }, 200);
                }
            });

        });
    },

    getSlides() {
        User.getSlides({
            //pageSize: 5,
        }, (res) => {
            if (res.code !== 0 && res.msg !== 'success') {
                return;
            }
            const {
                entities,
            } = res.result;
            const sildeHtml = entities.map(item => {
                const {
                    id,
                    frontImagePath,
                    activityTitle,
                    activityTitleSecond,
                    gamename,
                } = item;
                return `
                    <li class="slide-li swiper-slide fl">
                        <div data-background="${frontImagePath}" class="swiper-lazy"></div>
                        <div class="swiper-lazy-preloader"></div>
                        <div class="slide-title-type">
                            <span class="slide-title">${activityTitle}</span>
                            <span class="slide-type">${gamename}</span>
                        </div>
                        <span class="slide-sub-title">${activityTitleSecond}</span>
                        <div class="slide-li-mask"></div>
                    </li>
                `;
            }).join('');
            $('.gallery .swiper-wrapper').html(sildeHtml);
            new Swiper('.gallery .swiper-container', {
                loop: true,
                autoplay: 5000,
                lazyLoading: true,
                lazyLoadingPrevNext: true,
                preventClicks: true,
                autoplayDisableOnInteraction: false
            });
        });
    },

    startSpeedTest: function () {
        var me = this;

        var port = window.location.protocol;
        var allLine = port === 'http:' ? me.lineArray : me.httpsLine;
        $(allLine).each(function () {
            var index = arguments[0];
            var line = arguments[1];

            var date = (new Date()).getTime();
            me.timeArray.push(date);

            $.ajax({
                url: line + '/lottery/api/call/v1/lottery/link_test_callback',
                dataType: 'jsonp', //HTTP请求类型
                jsonp: 'callback',
                timeout: 10000,
                success: function () {
                    me.loaded++;
                    var time = (new Date()).getTime() - me.timeArray[index];
                    if (!me.bestLine) {
                        me.bestLine = true;
                        // $('.main .bestLine a').attr('href', line);
                    }
                    me.initLine(time, line, true);
                },
                error: function () {
                    me.loaded++;
                    var time = (new Date()).getTime() - me.timeArray[index];
                    me.initLine(time, line, false);
                }
            });
        })
    },

    initLine: function () {
        var me = this;
        var e = $('.line_div a').eq(me.loaded);

        if (arguments[2]) {
            var time = (arguments[0] / 1000).toFixed(3) + '秒';
            var line = arguments[1];
            e.html(time).removeClass('error').attr('href', line);
        } else {
            e.html('').addClass('error');
        }
    },

    //账号第一次登录时，弹出设置昵称及修改原始密码的页面
    nicknameTip: function (username) {
        let me = this;
        //获取token
        function getToken() {
            Api.updatePassword(function (res) {
                if (res.code == 0) {
                    $('.nickname input[name=token]').val(res.result.token);
                }
            });
        }
        let dialogContent = `
            <div class="nickname-main">
                <div class="nicknameContent">
                    <div class="setNickname">
                        <span>设置昵称</span>
                        <span>(非必填项)</span>
                    </div>
                    <div class="username">
                        <span>用户名</span>
                        <span rel="username">${username}</span>
                    </div>
                    <div class="nickname">
                        <input name="token" type="hidden">
                        <span>昵&nbsp;称</span>
                        <span>
                            <input type="text" name="nickname" autofocus placeholder="${username}">
                        </span>
                        <i class="nicknameTip">输入中文、英文、数字、下划线皆可，最多15字符</i>
                    </div>
                    <div class="modifyPwd">
                        <span>修改密码</span>
                        <span>(非必填项，如果您的账号不是您亲自注册的，建议您尽快修改密码)</span>
                    </div>
                    <div class="oldPwd">
                        <span>当前登录密码</span>
                        <span>
                            <input type="password" name="oldPwd" value="">
                        </span>
                    </div>
                    <div class="newPwd">
                        <span>新登录密码</span>
                        <span>
                            <input type="password" name="newPwd" value="">
                        </span>
                        <i class="newPwdTip">密码长度6-16位，同时包含字母和数字</i>
                        <div class="passwordLevel clearfix" style="display:none;">
                            <span class="pswWeak pswWeakColor"></span>
                            <span class="pswMidium">弱</span>
                            <span class="pswStrong"></span>
                        </div>
                    </div>
                    <div class="confirmPwd">
                        <span>确认新密码</span>
                        <span>
                            <input type="password" name="confirmPwd" value="">
                        </span>
                        <i class="confirmPwdTip">再次输入密码</i>
                    </div>
			    </div>
                <div class="nickButtons">
                    <div id="saveNickname">保存</div>
                    <div id="skipNickname">跳过</div>
                    <div class="nickExplain">
                        <span>说明：</span>
                        <span>设置昵称和修改密码都是非必填项，您可以选择性地进行设置和修改。<br>
                        您也可以跳过这一步。</span>
                    </div>
                </div>
            </div>
		`;
        let tipObj = {
            content: `<p style="text-align:center;">请与所要求的格式保持一致！</p>`,
            align: 'bottom left',
            skin: 'tip',
            onshow: function () {
                let timeout = setTimeout(() => {
                    this.close();
                    clearTimeout(timeout);
                }, 1500);
            },
        };
        let dialogObj = {
            content: dialogContent,
            id: 'nickname',
            width: 565,
            zIndex: 9,
            skin: 'nickname',
            onshow: function () {
                let thisDialog = this;
                thisDialog.validObj = {
                    nickname: true,
                    oldPwd: true,
                    newPwd: 　true,
                    confirmPwd: true,
                };
                let nicknameDom = $('.nickname input[name="nickname"]');
                let oldPwdDom = $('.oldPwd input[name="oldPwd"]');
                let newPwdDom = $('.newPwd input[name="newPwd"]');
                let confirmPwdDom = $('.confirmPwd input[name="confirmPwd"]');
                nicknameDom[0].pattern = /^[\u4e00-\u9fa5A-Za-z0-9_]{1,16}$/;
                nicknameDom.on('blur', function (e) {
                    let nickname = nicknameDom.val();
                    if (/^[\u4e00-\u9fa5A-Za-z0-9_]{1,16}$/.test(nickname)) {
                        /*提示文字消失*/
                        thisDialog.validObj['nickname'] = true;
                    } else {
                        /*提示文字弹出*/
                        if (nickname !== '') {
                            dialog(tipObj).show($(this)[0]);
                            thisDialog.validObj['nickname'] = false;
                        }
                    }
                });
                oldPwdDom.on('blur', function (e) {
                    let oldPwd = oldPwdDom.val();
                    if (/^(?=.*[\d])(?=.*[a-zA-Z])[0-9a-zA-Z!~`\-+\\/@\$#%^&*()]{6,16}$/.test(oldPwd)) {
                        /*提示文字消失*/
                        thisDialog.validObj['oldPwd'] = true;
                    } else {
                        /*提示文字弹出*/
                        if (oldPwd !== '') {
                            dialog(tipObj).show($(this)[0]);
                            thisDialog.validObj['oldPwd'] = false;
                        }
                    }
                });
                newPwdDom.on('blur', function (e) {
                    let newPwd = newPwdDom.val();
                    if (/^(?=.*[\d])(?=.*[a-zA-Z])[0-9a-zA-Z!~`\-+\\/@\$#%^&*()]{6,16}$/.test(newPwd)) {
                        /*提示文字消失*/
                        thisDialog.validObj['newPwd'] = true;
                    } else {
                        /*提示文字弹出*/
                        if (newPwd !== '') {
                            dialog(tipObj).show($(this)[0]);
                            thisDialog.validObj['newPwd'] = false;
                        }
                    }
                });
                confirmPwdDom.on('blur', function (e) {
                    let confirmPwd = confirmPwdDom.val();
                    if (/^(?=.*[\d])(?=.*[a-zA-Z])[0-9a-zA-Z!~`\-+\\/@\$#%^&*()]{6,16}$/.test(confirmPwd)) {
                        /*提示文字消失*/
                        thisDialog.validObj['confirmPwd'] = true;
                    } else {
                        /*提示文字弹出*/
                        if (confirmPwd !== '') {
                            dialog(tipObj).show($(this)[0]);
                            thisDialog.validObj['confirmPwd'] = false;
                        }
                    }
                });
                //强弱校验 pswWeakColor pswMidiumColor pswStrongColor
                let passwordLevel = $('.nicknameContent .passwordLevel');
                let pswWeak = $('.nicknameContent .passwordLevel .pswWeak');
                let pswMidium = $('.nicknameContent .passwordLevel .pswMidium');
                let pswStrong = $('.nicknameContent .passwordLevel .pswStrong');
                newPwdDom.on('input', function (e) {
                    let val = $(this).val();
                    if (val.length >= 6) {
                        passwordLevel.show();
                        if (val.length <= 9) {
                            pswMidium.text('弱');
                            !pswWeak.hasClass('pswWeakColor') && pswWeak.addClass('pswWeakColor');
                            pswWeak.hasClass('pswMidiumColor') && pswWeak.removeClass('pswMidiumColor');
                            pswWeak.hasClass('pswStrongColor') && pswWeak.removeClass('pswStrongColor');
                            pswMidium.hasClass('pswMidiumColor') && pswMidium.removeClass('pswMidiumColor');
                            pswMidium.hasClass('pswStrongColor') && pswMidium.removeClass('pswStrongColor');
                            pswStrong.hasClass('pswStrongColor') && pswStrong.removeClass('pswStrongColor');
                        } else if (val.length > 9 && val.length <= 13) {
                            pswMidium.text('中');
                            !pswWeak.hasClass('pswMidiumColor') && pswWeak.addClass('pswMidiumColor');
                            pswWeak.hasClass('pswWeakColor') && pswWeak.removeClass('pswWeakColor');
                            pswWeak.hasClass('pswStrongColor') && pswWeak.removeClass('pswStrongColor');
                            !pswMidium.hasClass('pswMidiumColor') && pswMidium.addClass('pswMidiumColor');
                            pswMidium.hasClass('pswStrongColor') && pswMidium.removeClass('pswStrongColor');
                            pswStrong.hasClass('pswStrongColor') && pswStrong.removeClass('pswStrongColor');
                        } else if (val.length > 13 && val.length <= 16) {
                            pswMidium.text('强');
                            !pswWeak.hasClass('pswStrongColor') && pswWeak.addClass('pswStrongColor');
                            pswWeak.hasClass('pswWeakColor') && pswWeak.removeClass('pswWeakColor');
                            pswWeak.hasClass('pswMidiumColor') && pswWeak.removeClass('pswMidiumColor');
                            !pswMidium.hasClass('pswStrongColor') && pswMidium.addClass('pswStrongColor');
                            pswMidium.hasClass('pswMidiumColor') && pswMidium.removeClass('pswMidiumColor');
                            !pswStrong.hasClass('pswStrongColor') && pswStrong.addClass('pswStrongColor');

                        } else {
                            newPwdDom.trigger('blur');
                        }
                    } else {
                        passwordLevel.hide();
                    }
                });
                //获取token
                getToken();
                let flag = true; //点击保存按钮是否关闭此弹窗flag 验证没通过情况
                //保存
                $('#saveNickname').off('click').on('click', function (e) {
                    let pswParams = {
                        cn: $('.nicknameContent [rel="username"]').text(),
                        token: $(".nickname input[name=token]").val(),
                        passwordSecurity: $('.passwordLevel .pswMidium').text() === '弱' ? 1 : (newPwdDom.val() === '中' ? 2 : 3),
                        desPassword: strEnc(newPwdDom.val(), '1', '2', '3'),
                        oldPassword: md5(oldPwdDom.val()),
                        newPassword: md5(newPwdDom.val()),
                        confirm_password: md5(confirmPwdDom.val()),
                    };
                    let flagArr = [];
                    for (let key in thisDialog.validObj) {
                        if (!thisDialog.validObj[key]) { //有false表示验证没通过
                            flag = false;
                            $(`.${key} input[name="${key}"]`).blur();
                        } else {
                            flagArr.push(1);
                        }
                    }
                    if (flagArr.length === 4) {
                        flag = true;
                    }
                    if (!flag) {
                        return false;
                    }
                    if (nicknameDom.val() === '' && oldPwdDom.val() === '' && newPwdDom.val() === '' && confirmPwdDom.val() === '') {
                        let tip = jQuery.extend(tipObj, {
                            content: `<p style="text-align:center;">您尚未进行任何修改！</p>`,
                        });
                        dialog(tip).show();
                        // thisDialog.close(); //啥都没填，直接跳过
                    } else {
                        if (nicknameDom.val()) {
                            Api.updateNickname(encodeURI(encodeURI(nicknameDom.val())), function (res) {
                                if (res.code === 0) { //更新昵称成功
                                    if (oldPwdDom.val() && newPwdDom.val() && confirmPwdDom.val()) { //如果有设置密码则再调设置密码接口
                                        /*
                                         0 正常的成功信息
                                         -1 异常信息
                                         -2 信息已提交，请勿重复提交
                                         -2 修改密码成功！同步PT失败！
                                         */
                                        Api.updatePasswordAjax(pswParams, function (pswRes) {
                                            //更新token
                                            getToken();
                                            if (pswRes.code === 0) { //情况
                                                dialog({
                                                    content: `<p style="text-align:center;">设置昵称成功，修改密码成功!</p>`,
                                                    skin: 'tip',
                                                    onshow: function () {
                                                        let timeout = setTimeout(() => {
                                                            this.close();
                                                            clearTimeout(timeout);
                                                        }, 1500);
                                                    },
                                                }).show();
                                                setTimeout(() => {
                                                    thisDialog.close();
                                                    window.location.href = Navigation.path + '/index';
                                                }, 2000);
                                            } else if (pswRes.code === -1) {
                                                dialog({
                                                    content: `<p style="text-align:center;">设置昵称成功，${pswRes.msg}!</p>`,
                                                    skin: 'tip',
                                                    onshow: function () {
                                                        let timeout = setTimeout(() => {
                                                            this.close();
                                                            clearTimeout(timeout);
                                                        }, 1500);
                                                    },
                                                }).show();
                                            } else if (pswRes.code === -2) {
                                                dialog({
                                                    content: `<p style="text-align:center;">设置昵称成功，${pswRes.msg}!</p>`,
                                                    skin: 'tip',
                                                    onshow: function () {
                                                        let timeout = setTimeout(() => {
                                                            this.close();
                                                            clearTimeout(timeout);
                                                        }, 1500);
                                                    },
                                                }).show();
                                                setTimeout(() => {
                                                    thisDialog.close();
                                                    window.location.href = Navigation.path + '/index';
                                                }, 2000);
                                            }
                                        });

                                    } else {
                                        let tip = jQuery.extend(tipObj, {
                                            content: `<p style="text-align:center;">设置昵称成功!</p>`,
                                        });
                                        if (!oldPwdDom.val() && !newPwdDom.val() && !confirmPwdDom.val()) { //全为空为不设置密码
                                            dialog(tip).show();
                                            setTimeout(() => {
                                                thisDialog.close();
                                                window.location.href = Navigation.path + '/index';
                                            }, 2000);
                                        } else {
                                            if (flag) {
                                                dialog({
                                                    content: `<p style="text-align:center;">请填写完整密码栏!</p>`,
                                                    skin: 'tip',
                                                    onshow: function () {
                                                        let timeout = setTimeout(() => {
                                                            this.close();
                                                            clearTimeout(timeout);
                                                        }, 1500);
                                                    },
                                                }).show();
                                            }
                                            return;
                                        }
                                        dialog(tip).show();
                                    }
                                    // Navigation.getNickname();
                                } else if (res.code === 2) { //昵称不能和别人昵称一样
                                    dialog({
                                        content: `<p style="text-align:center;">您填写的昵称已存在，请重新填写!</p>`,
                                        skin: 'tip',
                                        onshow: function () {
                                            let timeout = setTimeout(() => {
                                                this.close();
                                                clearTimeout(timeout);
                                            }, 1500);
                                        },
                                    }).show(nicknameDom[0]);
                                } else { //更新昵称失败
                                    dialog({
                                        content: `<p style="text-align:center;">设置昵称失败!</p>`,
                                        skin: 'tip',
                                        onshow: function () {
                                            let timeout = setTimeout(() => {
                                                this.close();
                                                clearTimeout(timeout);
                                            }, 1500);
                                        },
                                    }).show();
                                }
                            });
                        } else { //只设置密码情况
                            if (oldPwdDom.val() && newPwdDom.val() && confirmPwdDom.val()) { //如果有设置密码则再调设置密码接口
                                Api.updatePasswordAjax(pswParams, function (pswRes) {
                                    //更新token
                                    getToken();
                                    if (pswRes.code === 0) { //正常情况
                                        dialog({
                                            content: `<p style="text-align:center;">修改密码成功！</p>`,
                                            skin: 'tip',
                                            onshow: function () {
                                                let timeout = setTimeout(() => {
                                                    this.close();
                                                    clearTimeout(timeout);
                                                }, 1500);
                                            },
                                        }).show();
                                        setTimeout(() => {
                                            thisDialog.close();
                                            window.location.href = Navigation.path + '/index';
                                        }, 2000);
                                    } else if (pswRes.code === -1) { //旧密码和新密码相同,旧密码错误
                                        dialog({
                                            content: `<p style="text-align:center;">${pswRes.msg}</p>`,
                                            skin: 'tip',
                                            onshow: function () {
                                                let timeout = setTimeout(() => {
                                                    this.close();
                                                    clearTimeout(timeout);
                                                }, 1500);
                                            },
                                        }).show();
                                        return false;
                                    } else if (pswRes.code === -2) {
                                        dialog({
                                            content: `<p style="text-align:center;">${pswRes.msg}</p>`,
                                            skin: 'tip',
                                            onshow: function () {
                                                let timeout = setTimeout(() => {
                                                    this.close();
                                                    clearTimeout(timeout);
                                                }, 1500);
                                            },
                                        }).show();
                                        setTimeout(() => {
                                            thisDialog.close();
                                            window.location.href = Navigation.path + '/index';
                                        }, 2000);
                                    }
                                });
                            } else {
                                if (!oldPwdDom.val() && !newPwdDom.val() && !confirmPwdDom.val()) { //全为空为不设置密码
                                    thisDialog.close();
                                    window.location.href = Navigation.path + '/index';
                                } else {
                                    if (flag) {
                                        dialog({
                                            content: `<p style="text-align:center;">请填写完整密码栏!</p>`,
                                            skin: 'tip',
                                            onshow: function () {
                                                let timeout = setTimeout(() => {
                                                    this.close();
                                                    clearTimeout(timeout);
                                                }, 1500);
                                            },
                                        }).show();
                                    }

                                    return;
                                }
                            }
                        }
                    }

                });
                //跳过
                $('#skipNickname').off('click').on('click', function (e) {
                    thisDialog.close();
                    window.location.href = Navigation.path + '/index';
                });
            },
        };

        //是否弹出设置窗口
        Api.getNickname(function (nickRes) {
            if (nickRes === -1) { //直到拿到数据，不然一直点击
                $('.login').find('.login-btn .btn').trigger('click');
                return;
            }
            if (nickRes.userInfo.registerWay === 3 && nickRes.userInfo.logined === 0) { //注册方式（1旧用户，2后台开户，3代理注册，4链接开户） 代理注册第一次登陆的时候弹窗修改窗口 logined 标识用户是否登入过（ 1登入过，0未登入过）
                $('#main').hide();
                dialog(dialogObj).show();
                Api.loginFirstTime(function () {});
            } else {
                if (nickRes.userInfo.logined === 0) { //第一次登陆调这个接口
                    Api.loginFirstTime(function () {});
                }
                window.location.href = Navigation.path + '/index';
            }
        });
    },
};

$(document).ready(function () {
    User.getStatus(function (res) {
        if (res.code === 0) { //已登录
            window.location.href = Navigation.path + '/index';
        } else {
            Login.init(res);
        }
    });
});
