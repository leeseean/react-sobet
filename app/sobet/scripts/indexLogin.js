var nowlgbtn = $('#login-form a.btn');
var that = this;
var loginf = $('.loginformIndex');
var usrinput = loginf.find('input[name="usrname"]');
var pwdinput = loginf.find('input[name="secret"]');
var codeinput = loginf.find('input[name="code"]');
var rememberme = loginf.find('input#rememberme');
var verifycode = loginf.find('img.verifycode');
//前端验证用户名和密码
inputBlankCheck(usrinput, loginf, '请输入用户名');
//字母和数字必须同时存在，可以包含特殊字符
//inputBlankCheck(pwdinput, loginf, '请输入密码',50);
inputFormatCheck(pwdinput, /^(?=.*[\d])(?=.*[a-zA-Z])[0-9a-zA-Z!~`\-+\\/@\$#%^&*()]{8,16}$/, function(code, msg) {
    if (parseInt(code, 10) < 2) {
        loginf.find('.form-group-msg-err').html('请输入密码');
    }
}, '请输入密码');
//验证码
inputChk(codeinput, function() {
    if (codeinput.val() == '') {
        loginf.find('.form-group-msg-err').html('请填写验证码');
    } else {
        User.chkVerifyCode('api', codeinput.val(), function(res) {
            if (typeof res != 'undefined') {
                if (res.retCode !== '0') {
                    loginf.find('.form-group-msg-err').html(res.msg);
                }
            }
        });
    }
});

verifycode.click(function() {
    verifycode.attr('src', User.sso + '/imageCode?date=' + new Date());
    codeinput.val('');
});

pwdinput.unbind('keypress').on('keypress', function(e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
        if ($('.errorcount').size() == 0 && pwdinput.val() != '') {
            $('.loginformIndex #loginnow').addClass('loading').trigger('click');
            return false;
        }
    }
});

codeinput.unbind('keypress').on('keypress', function(e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 13) {
        if ($('.errorcount').size() == 0 && pwdinput.val() != '' && usrinput.val() != '') {
            $('.loginformIndex #loginnow').addClass('loading').trigger('click');
            return false;
        }
    }
});


nowlgbtn.click(function() {
    if (usrinput.val() == '' || pwdinput.val() == '' || $('.errorcount').size() > 0) {
        // loginf.find('.form-group-msg-err').html('用户名或密码不能为空');
        return false;
    }

    var usrname = usrinput.val();
    nowlgbtn.addClass('loading');

    var loginparams = {
        backurl: '?',
        context: $('.loginformIndex'),
        name: usrname,
        pwd: $('.loginformIndex input[name="secret"]').val()
    };
    if (loginf.find(".code-input:visible").size() > 0) {
        loginparams["capchaCode"] = codeinput.val()
    }
    User.ssoUserLogin(loginparams, function(res) {
        nowlgbtn.addClass('loading').html('登录中……');
        if (res.code == 0) {
            User.userLogin();
            nowlgbtn.unbind('click');
            //获取用户总消息数
            User.updateMsg();
            $('#login-form').animate({
                right: '55%',
                opacity: 0
            }, 800, 'easeOutQuart', function() {
                $('#login-form').hide();
                // $('#ucenter').fadeIn();
                $('#login-wel').animate({
                    "margin-right": '-585px',
                    opacity: 1
                }, 500, 'easeInQuart', function() {
                    loginErnie();
                    updateMoney();
                });
            });
            
            $("ul.welcome li.guest").hide();
            $("ul.welcome li.customer").show();
            loginf.find('.form-group-msg-err').html(''); //.removeClass('errorcount');
        } else {
            verifycode.attr('src', User.sso + '/imageCode?date=' + new Date());
            if(res.needCapchaCode == true){
                nowlgbtn.removeClass('loading').html('登录摩臣娱乐');
                loginf.find('.code-input').show();
                $('#login-form').css({
                    'height': '306px',
                    'bottom': 0
                });
                loginf.find('.form-group-msg-err').html(res.msg);
            }else {
                loginf.find('.form-group-msg-err').html(res.msg);
                nowlgbtn.removeClass('loading').html('登录摩臣娱乐');
                return false;
            }
            
        }
    });
});